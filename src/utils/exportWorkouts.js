import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { getExerciseById } from '../data/exercises'
import { DAYS } from '../context/WorkoutContext'

// Get exercise name from ID (checking both default and custom exercises)
function getExerciseName(exerciseId, customExercises = []) {
  const exercise = getExerciseById(exerciseId)
  if (exercise) return exercise.name

  const customExercise = customExercises.find(ex => ex.id === exerciseId)
  if (customExercise) return customExercise.name

  return exerciseId
}

// Prepare workout data for export
function prepareWorkoutData(workouts, customExercises = []) {
  const data = []

  DAYS.forEach(day => {
    const dayWorkouts = workouts[day] || []
    if (dayWorkouts.length === 0) {
      data.push({
        Day: day,
        Exercise: 'Rest Day',
        Sets: '-',
        Reps: '-',
      })
    } else {
      dayWorkouts.forEach((workout, index) => {
        data.push({
          Day: index === 0 ? day : '',
          Exercise: getExerciseName(workout.exerciseId, customExercises),
          Sets: workout.sets,
          Reps: workout.reps || 10,
        })
      })
    }
  })

  return data
}

// Export to Excel (.xlsx)
export function exportToExcel(workouts, customExercises = []) {
  const data = prepareWorkoutData(workouts, customExercises)

  // Create worksheet
  const ws = XLSX.utils.json_to_sheet(data)

  // Set column widths
  ws['!cols'] = [
    { wch: 12 },  // Day
    { wch: 35 },  // Exercise
    { wch: 8 },   // Sets
    { wch: 8 },   // Reps
  ]

  // Create workbook
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Weekly Workout Plan')

  // Generate filename with date
  const date = new Date().toISOString().split('T')[0]
  const filename = `workout-plan-${date}.xlsx`

  // Save file
  XLSX.writeFile(wb, filename)
}

// Export to PDF
export function exportToPDF(workouts, customExercises = []) {
  const doc = new jsPDF()

  // Title
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.text('Weekly Workout Plan', 14, 20)

  // Date
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  doc.text(`Generated: ${date}`, 14, 28)

  // Prepare table data
  const tableData = []

  DAYS.forEach(day => {
    const dayWorkouts = workouts[day] || []
    if (dayWorkouts.length === 0) {
      tableData.push([day, 'Rest Day', '-', '-'])
    } else {
      dayWorkouts.forEach((workout, index) => {
        tableData.push([
          index === 0 ? day : '',
          getExerciseName(workout.exerciseId, customExercises),
          workout.sets.toString(),
          (workout.reps || 10).toString(),
        ])
      })
    }
  })

  // Add table
  autoTable(doc, {
    startY: 35,
    head: [['Day', 'Exercise', 'Sets', 'Reps']],
    body: tableData,
    styles: {
      fontSize: 10,
      cellPadding: 3,
    },
    headStyles: {
      fillColor: [59, 130, 246],
      textColor: 255,
      fontStyle: 'bold',
    },
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 90 },
      2: { cellWidth: 20, halign: 'center' },
      3: { cellWidth: 20, halign: 'center' },
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245],
    },
    didParseCell: function(data) {
      // Bold the day column
      if (data.column.index === 0 && data.cell.text[0] !== '') {
        data.cell.styles.fontStyle = 'bold'
      }
    },
  })

  // Footer
  const pageCount = doc.internal.getNumberOfPages()
  doc.setFontSize(8)
  doc.setTextColor(128)
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.text(
      'Fitness Planner App',
      14,
      doc.internal.pageSize.height - 10
    )
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.width - 30,
      doc.internal.pageSize.height - 10
    )
  }

  // Generate filename with date
  const dateStr = new Date().toISOString().split('T')[0]
  const filename = `workout-plan-${dateStr}.pdf`

  // Save file
  doc.save(filename)
}
