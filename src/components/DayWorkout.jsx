import { useMemo } from 'react'
import { useWorkout } from '../context/WorkoutContext'
import { exercises, MUSCLE_NAMES } from '../data/exercises'
import './DayWorkout.css'

function DayWorkout({ day }) {
  const { state, removeExercise, updateSets, updateReps } = useWorkout()
  const dayWorkout = state.workouts[day]
  const { customExercises = [] } = state

  // Combine default and custom exercises for lookup
  const getExercise = useMemo(() => {
    const allExercises = [...exercises, ...customExercises]
    return (id) => allExercises.find(e => e.id === id)
  }, [customExercises])

  // Check if exercise is custom
  const isCustomExercise = useMemo(() => {
    const customIds = new Set(customExercises.map(e => e.id))
    return (id) => customIds.has(id)
  }, [customExercises])

  if (dayWorkout.length === 0) {
    return (
      <div className="empty-day">
        <p>No exercises planned for {day}.</p>
        <p className="empty-hint">Click "Add Exercise" to get started!</p>
      </div>
    )
  }

  const handleSetsChange = (exerciseId, newSets) => {
    const sets = parseInt(newSets, 10)
    if (!isNaN(sets)) {
      updateSets(day, exerciseId, sets)
    }
  }

  const handleRepsChange = (exerciseId, newReps) => {
    const reps = parseInt(newReps, 10)
    if (!isNaN(reps) && reps >= 1 && reps <= 100) {
      updateReps(day, exerciseId, reps)
    }
  }

  return (
    <div className="day-workout">
      <div className="exercise-list">
        {dayWorkout.map(({ exerciseId, sets, reps = 10 }) => {
          const exercise = getExercise(exerciseId)
          if (!exercise) return null

          const primaryMuscles = exercise.muscles.primary
            .map(m => MUSCLE_NAMES[m])
            .join(', ')
          const secondaryMuscles = exercise.muscles.secondary
            .map(m => MUSCLE_NAMES[m])
            .join(', ')
          const isCustom = isCustomExercise(exerciseId)

          return (
            <div key={exerciseId} className="exercise-card">
              <div className="exercise-info">
                <h4 className="exercise-name">
                  {exercise.name}
                  {isCustom && <span className="custom-badge">Custom</span>}
                </h4>
                <div className="exercise-muscles">
                  <span className="muscle-primary" title="Primary muscles">
                    {primaryMuscles}
                  </span>
                  {secondaryMuscles && (
                    <span className="muscle-secondary" title="Secondary muscles">
                      + {secondaryMuscles}
                    </span>
                  )}
                </div>
              </div>

              <div className="exercise-controls">
                <div className="sets-control">
                  <button
                    className="sets-btn"
                    onClick={() => handleSetsChange(exerciseId, sets - 1)}
                    disabled={sets <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="sets-input"
                    value={sets}
                    onChange={(e) => handleSetsChange(exerciseId, e.target.value)}
                    min="1"
                    max="20"
                  />
                  <button
                    className="sets-btn"
                    onClick={() => handleSetsChange(exerciseId, sets + 1)}
                  >
                    +
                  </button>
                  <span className="sets-label">sets</span>
                </div>

                <div className="reps-control">
                  <span className="reps-label">x</span>
                  <input
                    type="number"
                    className="reps-input"
                    value={reps}
                    onChange={(e) => handleRepsChange(exerciseId, e.target.value)}
                    min="1"
                    max="100"
                  />
                  <span className="reps-label">reps</span>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeExercise(day, exerciseId)}
                  title="Remove exercise"
                >
                  ×
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="day-summary">
        <span>Total: {dayWorkout.reduce((sum, e) => sum + e.sets, 0)} sets</span>
        <span>{dayWorkout.length} exercises</span>
      </div>
    </div>
  )
}

export default DayWorkout
