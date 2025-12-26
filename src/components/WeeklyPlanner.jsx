import { useState } from 'react'
import { useWorkout, DAYS } from '../context/WorkoutContext'
import DayWorkout from './DayWorkout'
import ExerciseSelector from './ExerciseSelector'
import './WeeklyPlanner.css'

function WeeklyPlanner() {
  const [selectedDay, setSelectedDay] = useState(DAYS[0])
  const [showExerciseSelector, setShowExerciseSelector] = useState(false)
  const { state, clearDay } = useWorkout()

  const getDayTotal = (day) => {
    return state.workouts[day].reduce((total, exercise) => total + exercise.sets, 0)
  }

  return (
    <div className="weekly-planner">
      <div className="planner-header">
        <h2>Weekly Plan</h2>
      </div>

      <div className="day-tabs">
        {DAYS.map(day => (
          <button
            key={day}
            className={`day-tab ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            <span className="day-name">{day.slice(0, 3)}</span>
            <span className="day-sets">{getDayTotal(day)} sets</span>
          </button>
        ))}
      </div>

      <div className="day-content">
        <div className="day-header">
          <h3>{selectedDay}</h3>
          <div className="day-actions">
            <button
              className="btn btn-primary"
              onClick={() => setShowExerciseSelector(true)}
            >
              + Add Exercise
            </button>
            {state.workouts[selectedDay].length > 0 && (
              <button
                className="btn btn-secondary"
                onClick={() => clearDay(selectedDay)}
              >
                Clear Day
              </button>
            )}
          </div>
        </div>

        <DayWorkout day={selectedDay} />
      </div>

      {showExerciseSelector && (
        <ExerciseSelector
          day={selectedDay}
          onClose={() => setShowExerciseSelector(false)}
        />
      )}
    </div>
  )
}

export default WeeklyPlanner
