import { MUSCLE_GROUPS } from '../data/exercises'
import { getExerciseById } from '../data/exercises'

// Mapping from detailed leg muscles to simplified ones
const LEG_MUSCLE_MAPPING = {
  'rectus-femoris': 'quadriceps',
  'vastus-lateralis': 'quadriceps',
  'vastus-medialis': 'quadriceps',
  'vastus-intermedius': 'quadriceps',
  'biceps-femoris': 'hamstrings',
  'semitendinosus': 'hamstrings',
  'semimembranosus': 'hamstrings',
  'gluteus-maximus': 'glutes',
  'gluteus-medius': 'abductors',
  'gluteus-minimus': 'abductors',
  'adductor-magnus': 'adductors',
  'adductor-longus': 'adductors',
  'gracilis': 'adductors',
}

// Mapping from detailed forearm muscles to simplified ones
const FOREARM_MUSCLE_MAPPING = {
  'brachioradialis': 'forearms',
  'wrist-flexors': 'forearms',
  'wrist-extensors': 'forearms',
}

// Mapping from detailed chest muscles to diagram muscle (pec-major)
const CHEST_MUSCLE_MAPPING = {
  'upper-chest': 'pec-major',
  'mid-chest': 'pec-major',
  'lower-chest': 'pec-major',
}

// Mapping from detailed triceps muscles to diagram muscle (triceps)
const TRICEPS_MUSCLE_MAPPING = {
  'triceps-long': 'triceps',
  'triceps-short': 'triceps',
}

// Mapping from detailed biceps muscles to diagram muscle (biceps)
const BICEPS_MUSCLE_MAPPING = {
  'biceps-long': 'biceps',
  'biceps-short': 'biceps',
}

// Reverse mapping: diagram muscle -> detailed muscles (for aggregate calculations)
const DIAGRAM_TO_DETAILED_MUSCLES = {
  // Front view
  'pec-major': ['upper-chest', 'mid-chest', 'lower-chest'],
  'triceps': ['triceps-long', 'triceps-short'],
  'abs': ['rectus-abdominis', 'external-obliques', 'internal-obliques', 'transverse-abdominis', 'serratus-anterior'],
  'quads': ['quadriceps', 'hamstrings', 'glutes', 'adductors', 'abductors'],
  'deltoids': ['anterior-delt', 'lateral-delt', 'posterior-delt', 'upper-traps'],
  'biceps': ['biceps-long', 'biceps-short', 'brachialis'],
  'traps': ['anterior-delt', 'lateral-delt', 'posterior-delt', 'upper-traps'],
  // Back view
  'lats': ['lats', 'teres-major', 'rhomboids', 'middle-traps', 'lower-traps', 'erector-spinae', 'infraspinatus', 'teres-minor'],
  'gluteus-maximus': ['quadriceps', 'hamstrings', 'glutes', 'adductors', 'abductors'],
  'biceps-femoris': ['quadriceps', 'hamstrings', 'glutes', 'adductors', 'abductors'],
  'gastrocnemius': ['gastrocnemius', 'soleus', 'tibialis-anterior'],
  'posterior-delt': ['anterior-delt', 'lateral-delt', 'posterior-delt', 'upper-traps'],
}

// Initialize all muscle groups with 0 sets
export function initializeMuscleVolume() {
  const volume = {}
  Object.values(MUSCLE_GROUPS).forEach(muscle => {
    volume[muscle] = 0
  })
  return volume
}

// Calculate total weekly volume for each muscle group
// Primary muscles get 100% of sets, secondary get 50%
export function calculateWeeklyVolume(weeklyWorkouts, customExercises = []) {
  const volume = initializeMuscleVolume()

  // Iterate through each day
  Object.values(weeklyWorkouts).forEach(dayWorkout => {
    // Iterate through each exercise in the day
    dayWorkout.forEach(({ exerciseId, sets }) => {
      // Try to find in default exercises first, then custom
      let exercise = getExerciseById(exerciseId)
      if (!exercise) {
        exercise = customExercises.find(ex => ex.id === exerciseId)
      }
      if (!exercise) return

      // Add full sets to primary muscles
      exercise.muscles.primary.forEach(muscle => {
        volume[muscle] += sets
        // Also add to simplified muscles if applicable
        if (LEG_MUSCLE_MAPPING[muscle]) {
          volume[LEG_MUSCLE_MAPPING[muscle]] = (volume[LEG_MUSCLE_MAPPING[muscle]] || 0) + sets
        }
        if (CHEST_MUSCLE_MAPPING[muscle]) {
          volume[CHEST_MUSCLE_MAPPING[muscle]] = (volume[CHEST_MUSCLE_MAPPING[muscle]] || 0) + sets
        }
        if (TRICEPS_MUSCLE_MAPPING[muscle]) {
          volume[TRICEPS_MUSCLE_MAPPING[muscle]] = (volume[TRICEPS_MUSCLE_MAPPING[muscle]] || 0) + sets
        }
        if (BICEPS_MUSCLE_MAPPING[muscle]) {
          volume[BICEPS_MUSCLE_MAPPING[muscle]] = (volume[BICEPS_MUSCLE_MAPPING[muscle]] || 0) + sets
        }
        if (FOREARM_MUSCLE_MAPPING[muscle]) {
          volume[FOREARM_MUSCLE_MAPPING[muscle]] = (volume[FOREARM_MUSCLE_MAPPING[muscle]] || 0) + sets
        }
      })

      // Add half sets to secondary muscles
      exercise.muscles.secondary.forEach(muscle => {
        volume[muscle] += sets * 0.5
        // Also add to simplified muscles if applicable
        if (LEG_MUSCLE_MAPPING[muscle]) {
          volume[LEG_MUSCLE_MAPPING[muscle]] = (volume[LEG_MUSCLE_MAPPING[muscle]] || 0) + sets * 0.5
        }
        if (CHEST_MUSCLE_MAPPING[muscle]) {
          volume[CHEST_MUSCLE_MAPPING[muscle]] = (volume[CHEST_MUSCLE_MAPPING[muscle]] || 0) + sets * 0.5
        }
        if (TRICEPS_MUSCLE_MAPPING[muscle]) {
          volume[TRICEPS_MUSCLE_MAPPING[muscle]] = (volume[TRICEPS_MUSCLE_MAPPING[muscle]] || 0) + sets * 0.5
        }
        if (BICEPS_MUSCLE_MAPPING[muscle]) {
          volume[BICEPS_MUSCLE_MAPPING[muscle]] = (volume[BICEPS_MUSCLE_MAPPING[muscle]] || 0) + sets * 0.5
        }
        if (FOREARM_MUSCLE_MAPPING[muscle]) {
          volume[FOREARM_MUSCLE_MAPPING[muscle]] = (volume[FOREARM_MUSCLE_MAPPING[muscle]] || 0) + sets * 0.5
        }
      })
    })
  })

  return volume
}

// Get color based on percentage of target achieved
export function getMuscleColor(currentSets, targetSets) {
  if (targetSets === 0) return '#334155' // Gray if no target

  const percentage = (currentSets / targetSets) * 100

  if (percentage >= 100) return '#22c55e' // Green
  if (percentage >= 50) return '#eab308'  // Yellow
  return '#ef4444'                         // Red
}

// Get a lighter/highlight version of the color for hover states
export function getMuscleHighlightColor(currentSets, targetSets) {
  if (targetSets === 0) return '#475569'

  const percentage = (currentSets / targetSets) * 100

  if (percentage >= 100) return '#4ade80' // Lighter green
  if (percentage >= 50) return '#facc15'  // Lighter yellow
  return '#f87171'                         // Lighter red
}

// Get color for a specific muscle using per-muscle targets
export function getMuscleColorWithTargets(muscleId, muscleVolume, muscleTargets) {
  const currentSets = muscleVolume[muscleId] || 0
  const targetSets = muscleTargets[muscleId] || 0
  return getMuscleColor(currentSets, targetSets)
}

// Get highlight color for a specific muscle using per-muscle targets
export function getMuscleHighlightColorWithTargets(muscleId, muscleVolume, muscleTargets) {
  const currentSets = muscleVolume[muscleId] || 0
  const targetSets = muscleTargets[muscleId] || 0
  return getMuscleHighlightColor(currentSets, targetSets)
}

// Get stroke color based on volume percentage
export function getMuscleStrokeColor(currentSets, targetSets) {
  if (targetSets === 0) return '#475569'

  const percentage = (currentSets / targetSets) * 100
  if (percentage >= 100) return '#15803d'
  if (percentage >= 50) return '#a16207'
  return '#b91c1c'
}

// Get stroke color for a specific muscle using per-muscle targets
export function getMuscleStrokeColorWithTargets(muscleId, muscleVolume, muscleTargets) {
  const currentSets = muscleVolume[muscleId] || 0
  const targetSets = muscleTargets[muscleId] || 0
  return getMuscleStrokeColor(currentSets, targetSets)
}

// Get aggregate volume and target for a diagram muscle (sums component muscles)
export function getAggregateVolumeAndTarget(muscleId, muscleVolume, muscleTargets) {
  const detailedMuscles = DIAGRAM_TO_DETAILED_MUSCLES[muscleId]

  if (!detailedMuscles) {
    // No mapping, use the muscle directly
    return {
      volume: muscleVolume[muscleId] || 0,
      target: muscleTargets[muscleId] || 0
    }
  }

  // Sum up volumes and targets for all component muscles
  let totalVolume = 0
  let totalTarget = 0

  detailedMuscles.forEach(detailedMuscle => {
    totalVolume += muscleVolume[detailedMuscle] || 0
    totalTarget += muscleTargets[detailedMuscle] || 0
  })

  return { volume: totalVolume, target: totalTarget }
}

// Get color for a diagram muscle using aggregate calculation
export function getAggregateMuscleColor(muscleId, muscleVolume, muscleTargets) {
  const { volume, target } = getAggregateVolumeAndTarget(muscleId, muscleVolume, muscleTargets)
  return getMuscleColor(volume, target)
}

// Get aggregate percentage for a diagram muscle (capped at 100%)
export function getAggregateMusclePercentage(muscleId, muscleVolume, muscleTargets) {
  const { volume, target } = getAggregateVolumeAndTarget(muscleId, muscleVolume, muscleTargets)
  if (target === 0) return '0%'
  const percentage = Math.min(Math.round((volume / target) * 100), 100)
  return `${percentage}%`
}

// Get the detailed muscles for a diagram muscle (for tooltip breakdown)
export function getDetailedMusclesForDiagram(muscleId) {
  return DIAGRAM_TO_DETAILED_MUSCLES[muscleId] || null
}

// Get volume percentage for a specific muscle
export function getMuscleVolumePercentage(muscleId, muscleVolume, muscleTargets) {
  const currentSets = muscleVolume[muscleId] || 0
  const targetSets = muscleTargets[muscleId] || 0
  if (targetSets === 0) return '0%'
  return `${Math.round((currentSets / targetSets) * 100)}%`
}

// Calculate volume for a single exercise
export function calculateExerciseVolume(exerciseId, sets) {
  const exercise = getExerciseById(exerciseId)
  if (!exercise) return {}

  const volume = {}

  exercise.muscles.primary.forEach(muscle => {
    volume[muscle] = (volume[muscle] || 0) + sets
  })

  exercise.muscles.secondary.forEach(muscle => {
    volume[muscle] = (volume[muscle] || 0) + sets * 0.5
  })

  return volume
}

// Get percentage string for display
export function getVolumePercentage(currentSets, targetSets) {
  if (targetSets === 0) return '0%'
  return `${Math.round((currentSets / targetSets) * 100)}%`
}

// Get status text based on volume
export function getVolumeStatus(currentSets, targetSets) {
  const percentage = (currentSets / targetSets) * 100

  if (percentage >= 100) return 'Target reached!'
  if (percentage >= 50) return 'Halfway there'
  return 'Needs more volume'
}
