import { useState, useMemo } from 'react'
import { exercises, CATEGORIES, MUSCLE_NAMES } from '../data/exercises'
import { useWorkout } from '../context/WorkoutContext'
import './ExerciseSelector.css'

function ExerciseSelector({ day, onClose }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [sets, setSets] = useState(3)
  const { addExercise, state } = useWorkout()
  const { customExercises = [] } = state

  // Combine default and custom exercises
  const allExercises = useMemo(() => [
    ...exercises,
    ...customExercises.map(ex => ({ ...ex, isCustom: true }))
  ], [customExercises])

  // Get exercises already added to this day
  const existingExerciseIds = state.workouts[day].map(e => e.exerciseId)

  // Filter exercises based on search and category
  const filteredExercises = useMemo(() => {
    return allExercises.filter(exercise => {
      const matchesSearch = exercise.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || exercise.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, allExercises])

  const handleAddExercise = () => {
    if (selectedExercise && sets > 0) {
      addExercise(day, selectedExercise.id, sets)
      setSelectedExercise(null)
      setSets(3)
    }
  }

  const handleQuickAdd = (exercise) => {
    addExercise(day, exercise.id, 3)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content exercise-selector" onClick={e => e.stopPropagation()}>
        <div className="selector-header">
          <h2>Add Exercise to {day}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="selector-filters">
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="category-filters">
            <button
              className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {selectedExercise && (
          <div className="selected-exercise-panel">
            <div className="selected-info">
              <h4>{selectedExercise.name}</h4>
              <div className="selected-muscles">
                <span className="muscle-tag primary">
                  {selectedExercise.muscles.primary.map(m => MUSCLE_NAMES[m]).join(', ')}
                </span>
                {selectedExercise.muscles.secondary.length > 0 && (
                  <span className="muscle-tag secondary">
                    + {selectedExercise.muscles.secondary.map(m => MUSCLE_NAMES[m]).join(', ')}
                  </span>
                )}
              </div>
            </div>
            <div className="selected-controls">
              <div className="sets-selector">
                <button
                  className="sets-btn"
                  onClick={() => setSets(Math.max(1, sets - 1))}
                >
                  -
                </button>
                <span className="sets-value">{sets}</span>
                <button
                  className="sets-btn"
                  onClick={() => setSets(sets + 1)}
                >
                  +
                </button>
                <span className="sets-label">sets</span>
              </div>
              <button className="btn btn-primary" onClick={handleAddExercise}>
                Add
              </button>
            </div>
          </div>
        )}

        <div className="exercise-grid">
          {filteredExercises.length === 0 ? (
            <div className="no-results">No exercises found</div>
          ) : (
            filteredExercises.map(exercise => {
              const isAdded = existingExerciseIds.includes(exercise.id)
              const isSelected = selectedExercise?.id === exercise.id

              return (
                <div
                  key={exercise.id}
                  className={`exercise-item ${isAdded ? 'added' : ''} ${isSelected ? 'selected' : ''} ${exercise.isCustom ? 'custom' : ''}`}
                  onClick={() => !isAdded && setSelectedExercise(exercise)}
                >
                  <div className="exercise-item-info">
                    <span className="exercise-item-name">
                      {exercise.name}
                      {exercise.isCustom && <span className="custom-indicator">Custom</span>}
                    </span>
                    <span className="exercise-item-category">{exercise.category}</span>
                  </div>
                  {isAdded ? (
                    <span className="added-badge">Added</span>
                  ) : (
                    <button
                      className="quick-add-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleQuickAdd(exercise)
                      }}
                      title="Quick add (3 sets)"
                    >
                      +
                    </button>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default ExerciseSelector
