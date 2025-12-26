import { useState } from 'react'
import { useWorkout } from '../context/WorkoutContext'
import { exercises, MUSCLE_NAMES, MUSCLE_REGIONS, CATEGORIES } from '../data/exercises'
import './ExerciseDatabase.css'

function ExerciseDatabase() {
  const { state, addCustomExercise, removeCustomExercise } = useWorkout()
  const { customExercises = [] } = state

  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('All')
  const [showAddForm, setShowAddForm] = useState(false)
  const [newExercise, setNewExercise] = useState({
    name: '',
    category: 'Chest',
    primaryMuscles: [],
    secondaryMuscles: [],
  })

  // Combine default and custom exercises
  const allExercises = [
    ...exercises,
    ...customExercises.map(ex => ({ ...ex, isCustom: true }))
  ]

  // Filter exercises
  const filteredExercises = allExercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'All' || exercise.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const handleAddExercise = () => {
    if (!newExercise.name.trim()) return
    if (newExercise.primaryMuscles.length === 0) return

    const exercise = {
      id: `custom-${Date.now()}`,
      name: newExercise.name.trim(),
      category: newExercise.category,
      muscles: {
        primary: newExercise.primaryMuscles,
        secondary: newExercise.secondaryMuscles,
      },
    }

    addCustomExercise(exercise)
    setNewExercise({
      name: '',
      category: 'Chest',
      primaryMuscles: [],
      secondaryMuscles: [],
    })
    setShowAddForm(false)
  }

  const toggleMuscle = (muscleId, type) => {
    const key = type === 'primary' ? 'primaryMuscles' : 'secondaryMuscles'
    const otherKey = type === 'primary' ? 'secondaryMuscles' : 'primaryMuscles'

    setNewExercise(prev => {
      // Remove from other list if present
      const otherList = prev[otherKey].filter(m => m !== muscleId)

      // Toggle in current list
      const currentList = prev[key].includes(muscleId)
        ? prev[key].filter(m => m !== muscleId)
        : [...prev[key], muscleId]

      return {
        ...prev,
        [key]: currentList,
        [otherKey]: otherList,
      }
    })
  }

  const getMuscleNames = (muscleIds) => {
    return muscleIds.map(id => MUSCLE_NAMES[id] || id).join(', ')
  }

  return (
    <div className="exercise-database">
      <div className="database-header">
        <h2>Exercise Database</h2>
        <button
          className="add-exercise-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : '+ Add Custom Exercise'}
        </button>
      </div>

      {showAddForm && (
        <div className="add-exercise-form">
          <h3>Create Custom Exercise</h3>

          <div className="form-group">
            <label>Exercise Name</label>
            <input
              type="text"
              value={newExercise.name}
              onChange={(e) => setNewExercise(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., Single Arm Cable Row"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              value={newExercise.category}
              onChange={(e) => setNewExercise(prev => ({ ...prev, category: e.target.value }))}
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Primary Muscles (100% volume credit)</label>
            <div className="muscle-selector">
              {Object.entries(MUSCLE_REGIONS).map(([region, muscles]) => (
                <div key={region} className="muscle-region">
                  <span className="region-label">{region}</span>
                  <div className="muscle-buttons">
                    {muscles.map(muscleId => (
                      <button
                        key={muscleId}
                        className={`muscle-btn ${newExercise.primaryMuscles.includes(muscleId) ? 'primary-selected' : ''}`}
                        onClick={() => toggleMuscle(muscleId, 'primary')}
                      >
                        {MUSCLE_NAMES[muscleId]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Secondary Muscles (50% volume credit)</label>
            <div className="muscle-selector">
              {Object.entries(MUSCLE_REGIONS).map(([region, muscles]) => (
                <div key={region} className="muscle-region">
                  <span className="region-label">{region}</span>
                  <div className="muscle-buttons">
                    {muscles.map(muscleId => (
                      <button
                        key={muscleId}
                        className={`muscle-btn ${newExercise.secondaryMuscles.includes(muscleId) ? 'secondary-selected' : ''} ${newExercise.primaryMuscles.includes(muscleId) ? 'disabled' : ''}`}
                        onClick={() => toggleMuscle(muscleId, 'secondary')}
                        disabled={newExercise.primaryMuscles.includes(muscleId)}
                      >
                        {MUSCLE_NAMES[muscleId]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-summary">
            <p><strong>Primary:</strong> {getMuscleNames(newExercise.primaryMuscles) || 'None selected'}</p>
            <p><strong>Secondary:</strong> {getMuscleNames(newExercise.secondaryMuscles) || 'None selected'}</p>
          </div>

          <button
            className="save-exercise-btn"
            onClick={handleAddExercise}
            disabled={!newExercise.name.trim() || newExercise.primaryMuscles.length === 0}
          >
            Save Exercise
          </button>
        </div>
      )}

      <div className="database-filters">
        <input
          type="text"
          className="search-input"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="category-filter"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="exercise-count">
        Showing {filteredExercises.length} exercises
        {customExercises.length > 0 && ` (${customExercises.length} custom)`}
      </div>

      <div className="exercise-list">
        {filteredExercises.map(exercise => (
          <div key={exercise.id} className={`exercise-card ${exercise.isCustom ? 'custom' : ''}`}>
            <div className="exercise-info">
              <h4>
                {exercise.name}
                {exercise.isCustom && <span className="custom-badge">Custom</span>}
              </h4>
              <span className="exercise-category">{exercise.category}</span>
              <div className="exercise-muscles">
                <div className="muscle-group">
                  <span className="muscle-label">Primary:</span>
                  <span className="muscle-list primary">
                    {getMuscleNames(exercise.muscles.primary)}
                  </span>
                </div>
                {exercise.muscles.secondary.length > 0 && (
                  <div className="muscle-group">
                    <span className="muscle-label">Secondary:</span>
                    <span className="muscle-list secondary">
                      {getMuscleNames(exercise.muscles.secondary)}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {exercise.isCustom && (
              <button
                className="delete-exercise-btn"
                onClick={() => removeCustomExercise(exercise.id)}
                title="Delete exercise"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExerciseDatabase
