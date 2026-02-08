import { createContext, useContext, useReducer, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { calculateWeeklyVolume, initializeMuscleVolume } from '../utils/volumeCalculator'
import { DEFAULT_MUSCLE_TARGETS } from '../data/exercises'

// Days of the week
export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// Initial state
const initialState = {
  workouts: {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  },
  targetSets: 10, // Legacy - kept for backwards compatibility
  muscleTargets: { ...DEFAULT_MUSCLE_TARGETS }, // Per-muscle targets
  muscleVolume: initializeMuscleVolume(),
  customExercises: [], // User-created exercises
}

// Action types
const ACTIONS = {
  ADD_EXERCISE: 'ADD_EXERCISE',
  REMOVE_EXERCISE: 'REMOVE_EXERCISE',
  UPDATE_SETS: 'UPDATE_SETS',
  UPDATE_REPS: 'UPDATE_REPS',
  SET_TARGET: 'SET_TARGET',
  SET_MUSCLE_TARGET: 'SET_MUSCLE_TARGET',
  RESET_MUSCLE_TARGETS: 'RESET_MUSCLE_TARGETS',
  CLEAR_DAY: 'CLEAR_DAY',
  CLEAR_WEEK: 'CLEAR_WEEK',
  LOAD_STATE: 'LOAD_STATE',
  ADD_CUSTOM_EXERCISE: 'ADD_CUSTOM_EXERCISE',
  REMOVE_CUSTOM_EXERCISE: 'REMOVE_CUSTOM_EXERCISE',
}

// Reducer function
function workoutReducer(state, action) {
  let newState

  switch (action.type) {
    case ACTIONS.ADD_EXERCISE: {
      const { day, exerciseId, sets } = action.payload
      const existingIndex = state.workouts[day].findIndex(
        e => e.exerciseId === exerciseId
      )

      let newDayWorkout
      if (existingIndex >= 0) {
        // Update existing exercise sets
        newDayWorkout = state.workouts[day].map((e, i) =>
          i === existingIndex ? { ...e, sets: e.sets + sets } : e
        )
      } else {
        // Add new exercise
        newDayWorkout = [...state.workouts[day], { exerciseId, sets, reps: 10 }]
      }

      newState = {
        ...state,
        workouts: {
          ...state.workouts,
          [day]: newDayWorkout,
        },
      }
      break
    }

    case ACTIONS.REMOVE_EXERCISE: {
      const { day, exerciseId } = action.payload
      newState = {
        ...state,
        workouts: {
          ...state.workouts,
          [day]: state.workouts[day].filter(e => e.exerciseId !== exerciseId),
        },
      }
      break
    }

    case ACTIONS.UPDATE_SETS: {
      const { day, exerciseId, sets } = action.payload
      if (sets <= 0) {
        // Remove exercise if sets is 0 or less
        newState = {
          ...state,
          workouts: {
            ...state.workouts,
            [day]: state.workouts[day].filter(e => e.exerciseId !== exerciseId),
          },
        }
      } else {
        newState = {
          ...state,
          workouts: {
            ...state.workouts,
            [day]: state.workouts[day].map(e =>
              e.exerciseId === exerciseId ? { ...e, sets } : e
            ),
          },
        }
      }
      break
    }

    case ACTIONS.UPDATE_REPS: {
      const { day, exerciseId, reps } = action.payload
      newState = {
        ...state,
        workouts: {
          ...state.workouts,
          [day]: state.workouts[day].map(e =>
            e.exerciseId === exerciseId ? { ...e, reps } : e
          ),
        },
      }
      break
    }

    case ACTIONS.SET_TARGET:
      newState = {
        ...state,
        targetSets: action.payload,
      }
      break

    case ACTIONS.SET_MUSCLE_TARGET: {
      const { muscleId, target } = action.payload
      newState = {
        ...state,
        muscleTargets: {
          ...state.muscleTargets,
          [muscleId]: target,
        },
      }
      break
    }

    case ACTIONS.RESET_MUSCLE_TARGETS:
      newState = {
        ...state,
        muscleTargets: { ...DEFAULT_MUSCLE_TARGETS },
      }
      break

    case ACTIONS.CLEAR_DAY:
      newState = {
        ...state,
        workouts: {
          ...state.workouts,
          [action.payload]: [],
        },
      }
      break

    case ACTIONS.CLEAR_WEEK:
      newState = {
        ...state,
        workouts: {
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
          Saturday: [],
          Sunday: [],
        },
      }
      break

    case ACTIONS.LOAD_STATE:
      return {
        ...action.payload,
        muscleTargets: action.payload.muscleTargets || { ...DEFAULT_MUSCLE_TARGETS },
        customExercises: action.payload.customExercises || [],
        muscleVolume: calculateWeeklyVolume(action.payload.workouts, action.payload.customExercises || []),
      }

    case ACTIONS.ADD_CUSTOM_EXERCISE:
      newState = {
        ...state,
        customExercises: [...state.customExercises, action.payload],
      }
      break

    case ACTIONS.REMOVE_CUSTOM_EXERCISE:
      newState = {
        ...state,
        customExercises: state.customExercises.filter(ex => ex.id !== action.payload),
      }
      break

    default:
      return state
  }

  // Recalculate muscle volume after any workout change
  newState.muscleVolume = calculateWeeklyVolume(newState.workouts, newState.customExercises || [])
  return newState
}

// Create context
const WorkoutContext = createContext(null)

// Provider component
export function WorkoutProvider({ children }) {
  const [savedState, setSavedState] = useLocalStorage('workout-planner', null)
  const [state, dispatch] = useReducer(workoutReducer, initialState)

  // Load saved state on mount
  useEffect(() => {
    if (savedState) {
      dispatch({ type: ACTIONS.LOAD_STATE, payload: savedState })
    }
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    setSavedState({
      workouts: state.workouts,
      targetSets: state.targetSets,
      muscleTargets: state.muscleTargets,
      customExercises: state.customExercises,
    })
  }, [state.workouts, state.targetSets, state.muscleTargets, state.customExercises, setSavedState])

  // Action creators
  const addExercise = (day, exerciseId, sets = 3) => {
    dispatch({ type: ACTIONS.ADD_EXERCISE, payload: { day, exerciseId, sets } })
  }

  const removeExercise = (day, exerciseId) => {
    dispatch({ type: ACTIONS.REMOVE_EXERCISE, payload: { day, exerciseId } })
  }

  const updateSets = (day, exerciseId, sets) => {
    dispatch({ type: ACTIONS.UPDATE_SETS, payload: { day, exerciseId, sets } })
  }

  const updateReps = (day, exerciseId, reps) => {
    dispatch({ type: ACTIONS.UPDATE_REPS, payload: { day, exerciseId, reps } })
  }

  const setTarget = (targetSets) => {
    dispatch({ type: ACTIONS.SET_TARGET, payload: targetSets })
  }

  const setMuscleTarget = (muscleId, target) => {
    dispatch({ type: ACTIONS.SET_MUSCLE_TARGET, payload: { muscleId, target } })
  }

  const resetMuscleTargets = () => {
    dispatch({ type: ACTIONS.RESET_MUSCLE_TARGETS })
  }

  const clearDay = (day) => {
    dispatch({ type: ACTIONS.CLEAR_DAY, payload: day })
  }

  const clearWeek = () => {
    dispatch({ type: ACTIONS.CLEAR_WEEK })
  }

  const addCustomExercise = (exercise) => {
    dispatch({ type: ACTIONS.ADD_CUSTOM_EXERCISE, payload: exercise })
  }

  const removeCustomExercise = (exerciseId) => {
    dispatch({ type: ACTIONS.REMOVE_CUSTOM_EXERCISE, payload: exerciseId })
  }

  const value = {
    state,
    addExercise,
    removeExercise,
    updateSets,
    updateReps,
    setTarget,
    setMuscleTarget,
    resetMuscleTargets,
    clearDay,
    clearWeek,
    addCustomExercise,
    removeCustomExercise,
  }

  return (
    <WorkoutContext.Provider value={value}>
      {children}
    </WorkoutContext.Provider>
  )
}

// Custom hook to use the context
export function useWorkout() {
  const context = useContext(WorkoutContext)
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider')
  }
  return context
}
