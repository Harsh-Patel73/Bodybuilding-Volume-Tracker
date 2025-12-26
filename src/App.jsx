import { useState } from 'react'
import BodyDiagram from './components/BodyDiagram'
import WeeklyPlanner from './components/WeeklyPlanner'
import ExerciseDatabase from './components/ExerciseDatabase'
import SettingsPanel from './components/SettingsPanel'
import { useWorkout } from './context/WorkoutContext'
import { exportToExcel, exportToPDF } from './utils/exportWorkouts'

function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [activeTab, setActiveTab] = useState('planner')
  const [showExportMenu, setShowExportMenu] = useState(false)
  const { state } = useWorkout()

  const handleExportExcel = () => {
    exportToExcel(state.workouts, state.customExercises)
    setShowExportMenu(false)
  }

  const handleExportPDF = () => {
    exportToPDF(state.workouts, state.customExercises)
    setShowExportMenu(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Workout Planner</h1>
        <div className="header-actions">
          <nav className="main-tabs">
            <button
              className={`tab-btn ${activeTab === 'planner' ? 'active' : ''}`}
              onClick={() => setActiveTab('planner')}
            >
              Planner
            </button>
            <button
              className={`tab-btn ${activeTab === 'exercises' ? 'active' : ''}`}
              onClick={() => setActiveTab('exercises')}
            >
              Exercises
            </button>
          </nav>
          <div className="header-right">
            <div className="export-dropdown">
              <button
                className="export-btn"
                onClick={() => setShowExportMenu(!showExportMenu)}
              >
                Export
              </button>
              {showExportMenu && (
                <div className="export-menu">
                  <button onClick={handleExportExcel}>
                    Download as Excel (.xlsx)
                  </button>
                  <button onClick={handleExportPDF}>
                    Download as PDF
                  </button>
                </div>
              )}
            </div>
            <button
              className="settings-btn"
              onClick={() => setShowSettings(!showSettings)}
            >
              Settings
            </button>
          </div>
        </div>
      </header>

      {showSettings && (
        <SettingsPanel onClose={() => setShowSettings(false)} />
      )}

      {activeTab === 'planner' && (
        <main className="app-main">
          <section className="diagram-section">
            <h2>Weekly Muscle Volume</h2>
            <p className="diagram-subtitle">
              Click "Set Targets" to customize sets per muscle
            </p>
            <BodyDiagram />
            <div className="legend">
              <div className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#ef4444' }}></span>
                <span>Under 50%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#eab308' }}></span>
                <span>50-99%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#22c55e' }}></span>
                <span>100%</span>
              </div>
            </div>
          </section>

          <section className="planner-section">
            <WeeklyPlanner />
          </section>
        </main>
      )}

      {activeTab === 'exercises' && (
        <main className="app-main exercises-view">
          <ExerciseDatabase />
        </main>
      )}
    </div>
  )
}

export default App
