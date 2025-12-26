import { useState } from 'react'
import { useWorkout } from '../context/WorkoutContext'
import { useTheme } from '../context/ThemeContext'
import './SettingsPanel.css'

const PRESETS = [
  { label: 'Beginner', sets: 10, description: 'Starting out or returning after a break' },
  { label: 'Intermediate', sets: 15, description: 'Consistent training for 6+ months' },
  { label: 'Advanced', sets: 20, description: 'Experienced lifter needing more volume' },
]

function SettingsPanel({ onClose }) {
  const { state, setTarget, clearWeek } = useWorkout()
  const { theme, toggleTheme } = useTheme()
  const [customSets, setCustomSets] = useState(state.targetSets)
  const [showConfirmClear, setShowConfirmClear] = useState(false)

  const handlePresetClick = (sets) => {
    setCustomSets(sets)
    setTarget(sets)
  }

  const handleCustomChange = (e) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value) && value > 0 && value <= 30) {
      setCustomSets(value)
      setTarget(value)
    }
  }

  const handleClearWeek = () => {
    clearWeek()
    setShowConfirmClear(false)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content settings-panel" onClick={e => e.stopPropagation()}>
        <div className="settings-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="settings-section">
          <h3>Weekly Set Target</h3>
          <p className="settings-description">
            Set your target number of sets per muscle group per week.
            The body diagram will show progress toward this goal.
          </p>

          <div className="presets">
            {PRESETS.map(preset => (
              <button
                key={preset.label}
                className={`preset-btn ${state.targetSets === preset.sets ? 'active' : ''}`}
                onClick={() => handlePresetClick(preset.sets)}
              >
                <span className="preset-label">{preset.label}</span>
                <span className="preset-sets">{preset.sets} sets</span>
                <span className="preset-desc">{preset.description}</span>
              </button>
            ))}
          </div>

          <div className="custom-target">
            <label htmlFor="custom-sets">Custom target:</label>
            <div className="custom-input-group">
              <input
                id="custom-sets"
                type="number"
                value={customSets}
                onChange={handleCustomChange}
                min="1"
                max="30"
              />
              <span>sets per muscle group</span>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Appearance</h3>
          <p className="settings-description">
            Choose between dark and light mode for the app.
          </p>
          <div className="theme-toggle">
            <button
              className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => theme !== 'dark' && toggleTheme()}
            >
              Dark
            </button>
            <button
              className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
              onClick={() => theme !== 'light' && toggleTheme()}
            >
              Light
            </button>
          </div>
        </div>

        <div className="settings-section">
          <h3>Reset Data</h3>
          <p className="settings-description">
            Clear all workouts for the current week. This cannot be undone.
          </p>

          {!showConfirmClear ? (
            <button
              className="btn btn-danger"
              onClick={() => setShowConfirmClear(true)}
            >
              Clear Week
            </button>
          ) : (
            <div className="confirm-clear">
              <p>Are you sure? This will remove all exercises from every day.</p>
              <div className="confirm-buttons">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowConfirmClear(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleClearWeek}
                >
                  Yes, Clear Everything
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="settings-section settings-info">
          <h3>How Volume Tracking Works</h3>
          <ul>
            <li>
              <span className="color-dot green"></span>
              <strong>Green:</strong> You've hit 100% or more of your target sets
            </li>
            <li>
              <span className="color-dot yellow"></span>
              <strong>Yellow:</strong> You're at 50-99% of your target
            </li>
            <li>
              <span className="color-dot red"></span>
              <strong>Red:</strong> Less than 50% of target (needs more volume)
            </li>
          </ul>
          <p className="volume-note">
            <strong>Primary muscles</strong> get 100% of set credit.
            <br />
            <strong>Secondary muscles</strong> get 50% credit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SettingsPanel
