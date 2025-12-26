import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { WorkoutProvider } from './context/WorkoutContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <WorkoutProvider>
        <App />
      </WorkoutProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
