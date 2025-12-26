import { useState } from 'react'
import { useWorkout } from '../context/WorkoutContext'
import { MUSCLE_NAMES, MUSCLE_REGIONS, DEFAULT_MUSCLE_TARGETS } from '../data/exercises'
import './MuscleTargetConfig.css'

function MuscleTargetConfig({ onClose }) {
  const { state, setMuscleTarget, resetMuscleTargets } = useWorkout()
  const [expandedRegion, setExpandedRegion] = useState(null)

  const handleTargetChange = (muscleId, value) => {
    const numValue = parseInt(value, 10)
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 50) {
      setMuscleTarget(muscleId, numValue)
    }
  }

  const toggleRegion = (region) => {
    setExpandedRegion(expandedRegion === region ? null : region)
  }

  const getRegionProgress = (region) => {
    const muscles = MUSCLE_REGIONS[region]
    let totalVolume = 0
    let totalTarget = 0

    muscles.forEach(muscleId => {
      totalVolume += state.muscleVolume[muscleId] || 0
      totalTarget += state.muscleTargets[muscleId] || 0
    })

    if (totalTarget === 0) return 0
    return Math.round((totalVolume / totalTarget) * 100)
  }

  const getMuscleProgress = (muscleId) => {
    const volume = state.muscleVolume[muscleId] || 0
    const target = state.muscleTargets[muscleId] || 0
    if (target === 0) return 0
    return Math.round((volume / target) * 100)
  }

  const getProgressColor = (percentage) => {
    if (percentage >= 100) return '#22c55e'
    if (percentage >= 50) return '#eab308'
    return '#ef4444'
  }

  return (
    <div className="muscle-config">
      <div className="config-header">
        <h3>Set Targets</h3>
        <button className="reset-btn" onClick={resetMuscleTargets}>
          Reset Defaults
        </button>
      </div>

      <p className="config-description">
        Set weekly target sets for each muscle group. Colors show your current progress.
      </p>

      <div className="muscle-regions">
        {Object.entries(MUSCLE_REGIONS).map(([region, muscles]) => {
          const regionProgress = getRegionProgress(region)
          const isExpanded = expandedRegion === region

          return (
            <div key={region} className={`region-group ${isExpanded ? 'expanded' : ''}`}>
              <button
                className="region-header"
                onClick={() => toggleRegion(region)}
              >
                <span className="region-name">{region}</span>
                <div className="region-progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${Math.min(regionProgress, 100)}%`,
                      backgroundColor: getProgressColor(regionProgress)
                    }}
                  />
                </div>
                <span className="region-percentage" style={{ color: getProgressColor(regionProgress) }}>
                  {regionProgress}%
                </span>
                <span className={`expand-icon ${isExpanded ? 'rotated' : ''}`}>
                  ▼
                </span>
              </button>

              {isExpanded && (
                <div className="muscle-list">
                  {muscles.map(muscleId => {
                    const progress = getMuscleProgress(muscleId)
                    const volume = state.muscleVolume[muscleId] || 0
                    const target = state.muscleTargets[muscleId] || 0

                    return (
                      <div key={muscleId} className="muscle-row">
                        <div className="muscle-info">
                          <span className="muscle-name">{MUSCLE_NAMES[muscleId]}</span>
                          <span
                            className="muscle-progress-text"
                            style={{ color: getProgressColor(progress) }}
                          >
                            {volume.toFixed(1)} / {target} sets ({progress}%)
                          </span>
                        </div>
                        <div className="target-input-wrapper">
                          <button
                            className="target-adjust-btn"
                            onClick={() => handleTargetChange(muscleId, target - 1)}
                            disabled={target <= 0}
                          >
                            −
                          </button>
                          <input
                            type="number"
                            className="target-input"
                            value={target}
                            onChange={(e) => handleTargetChange(muscleId, e.target.value)}
                            min="0"
                            max="50"
                          />
                          <button
                            className="target-adjust-btn"
                            onClick={() => handleTargetChange(muscleId, target + 1)}
                            disabled={target >= 50}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MuscleTargetConfig
