// Muscle group IDs used throughout the app
export const MUSCLE_GROUPS = {
  // Chest (for diagram)
  PEC_MAJOR: 'pec-major',
  PEC_MINOR: 'pec-minor',
  // Chest (for targets)
  UPPER_CHEST: 'upper-chest',
  MID_CHEST: 'mid-chest',
  LOWER_CHEST: 'lower-chest',
  // Shoulders (Deltoids) - Front view uses simplified 'deltoids'
  DELTOIDS: 'deltoids',
  ANTERIOR_DELT: 'anterior-delt',
  LATERAL_DELT: 'lateral-delt',
  POSTERIOR_DELT: 'posterior-delt',
  // Traps - Front view uses simplified 'traps'
  TRAPS: 'traps',
  // Arms - Biceps (with heads for front view)
  BICEPS: 'biceps',
  BICEPS_LONG: 'biceps-long',
  BICEPS_SHORT: 'biceps-short',
  BRACHIALIS: 'brachialis',
  // Arms - Triceps (with heads for front view)
  TRICEPS: 'triceps',
  TRICEPS_LONG: 'triceps-long',
  TRICEPS_SHORT: 'triceps-short',
  // Arms - Forearms (simplified for front view)
  FOREARMS: 'forearms',
  BRACHIORADIALIS: 'brachioradialis',
  WRIST_FLEXORS: 'wrist-flexors',
  WRIST_EXTENSORS: 'wrist-extensors',
  // Simplified core for front view
  ABS: 'abs',
  OBLIQUES: 'obliques',
  // Simplified quads for front view
  QUADS: 'quads',
  // Simplified leg muscles for targets
  QUADRICEPS: 'quadriceps',
  HAMSTRINGS: 'hamstrings',
  GLUTES: 'glutes',
  ADDUCTORS: 'adductors',
  ABDUCTORS: 'abductors',
  // Back
  LATS: 'lats',
  UPPER_TRAPS: 'upper-traps',
  MIDDLE_TRAPS: 'middle-traps',
  LOWER_TRAPS: 'lower-traps',
  RHOMBOIDS: 'rhomboids',
  TERES_MAJOR: 'teres-major',
  TERES_MINOR: 'teres-minor',
  INFRASPINATUS: 'infraspinatus',
  ERECTOR_SPINAE: 'erector-spinae',
  // Core / Abs
  RECTUS_ABDOMINIS: 'rectus-abdominis',
  EXTERNAL_OBLIQUES: 'external-obliques',
  INTERNAL_OBLIQUES: 'internal-obliques',
  TRANSVERSE_ABDOMINIS: 'transverse-abdominis',
  SERRATUS_ANTERIOR: 'serratus-anterior',
  // Legs - Quadriceps
  RECTUS_FEMORIS: 'rectus-femoris',
  VASTUS_LATERALIS: 'vastus-lateralis',
  VASTUS_MEDIALIS: 'vastus-medialis',
  VASTUS_INTERMEDIUS: 'vastus-intermedius',
  // Legs - Hamstrings
  BICEPS_FEMORIS: 'biceps-femoris',
  SEMITENDINOSUS: 'semitendinosus',
  SEMIMEMBRANOSUS: 'semimembranosus',
  // Legs - Glutes
  GLUTEUS_MAXIMUS: 'gluteus-maximus',
  GLUTEUS_MEDIUS: 'gluteus-medius',
  GLUTEUS_MINIMUS: 'gluteus-minimus',
  // Legs - Adductors
  ADDUCTOR_MAGNUS: 'adductor-magnus',
  ADDUCTOR_LONGUS: 'adductor-longus',
  GRACILIS: 'gracilis',
  // Legs - Calves
  GASTROCNEMIUS: 'gastrocnemius',
  SOLEUS: 'soleus',
  TIBIALIS_ANTERIOR: 'tibialis-anterior',
}

// Friendly names for display
export const MUSCLE_NAMES = {
  // Chest (for diagram)
  'pec-major': 'Chest',
  'pec-minor': 'Pec Minor',
  // Chest (for targets)
  'upper-chest': 'Upper Chest',
  'mid-chest': 'Mid Chest',
  'lower-chest': 'Lower Chest',
  // Shoulders - Simplified (for diagram)
  'deltoids': 'Shoulders',
  // Shoulders - Detailed (for targets)
  'anterior-delt': 'Front Delts',
  'lateral-delt': 'Side Delts',
  'posterior-delt': 'Rear Delts',
  // Traps - Simplified
  'traps': 'Traps',
  // Arms - Biceps (for diagram)
  'biceps': 'Biceps',
  // Arms - Biceps heads (for targets)
  'biceps-long': 'Long Head',
  'biceps-short': 'Short Head',
  'brachialis': 'Brachialis',
  // Arms - Triceps (for diagram)
  'triceps': 'Triceps',
  // Arms - Triceps heads (for targets)
  'triceps-long': 'Long Head',
  'triceps-short': 'Short Head',
  // Arms - Forearms
  'forearms': 'Forearms',
  'brachioradialis': 'Brachioradialis',
  'wrist-flexors': 'Wrist Flexors',
  'wrist-extensors': 'Wrist Extensors',
  // Core - Simplified
  'abs': 'Abs',
  'obliques': 'Obliques',
  // Legs - Simplified
  'quads': 'Quads',
  'quadriceps': 'Quadriceps',
  'hamstrings': 'Hamstrings',
  'glutes': 'Glutes',
  'adductors': 'Adductors',
  'abductors': 'Abductors',
  // Back
  'lats': 'Lats',
  'upper-traps': 'Upper Traps',
  'middle-traps': 'Middle Traps',
  'lower-traps': 'Lower Traps',
  'rhomboids': 'Rhomboids',
  'teres-major': 'Teres Major',
  'teres-minor': 'Teres Minor',
  'infraspinatus': 'Infraspinatus',
  'erector-spinae': 'Spinal Erectors',
  // Core
  'rectus-abdominis': 'Rectus Abdominis',
  'external-obliques': 'External Obliques',
  'internal-obliques': 'Internal Obliques',
  'transverse-abdominis': 'Transverse Abdominis',
  'serratus-anterior': 'Serratus Anterior',
  // Quadriceps
  'rectus-femoris': 'Rectus Femoris',
  'vastus-lateralis': 'Vastus Lateralis',
  'vastus-medialis': 'Vastus Medialis',
  'vastus-intermedius': 'Vastus Intermedius',
  // Hamstrings
  'biceps-femoris': 'Biceps Femoris',
  'semitendinosus': 'Semitendinosus',
  'semimembranosus': 'Semimembranosus',
  // Glutes
  'gluteus-maximus': 'Gluteus Maximus',
  'gluteus-medius': 'Gluteus Medius',
  'gluteus-minimus': 'Gluteus Minimus',
  // Adductors
  'adductor-magnus': 'Adductor Magnus',
  'adductor-longus': 'Adductor Longus',
  'gracilis': 'Gracilis',
  // Calves
  'gastrocnemius': 'Gastrocnemius',
  'soleus': 'Soleus',
  'tibialis-anterior': 'Tibialis Anterior',
}

// Default target sets per muscle group (can be customized by user)
export const DEFAULT_MUSCLE_TARGETS = {
  // Chest (for diagram)
  'pec-major': 12,
  'pec-minor': 6,
  // Chest (for targets)
  'upper-chest': 8,
  'mid-chest': 8,
  'lower-chest': 6,
  // Shoulders - Simplified + detailed
  'deltoids': 12,
  'anterior-delt': 8,
  'lateral-delt': 10,
  'posterior-delt': 10,
  // Traps - Simplified
  'traps': 10,
  // Arms - Biceps (with heads)
  'biceps': 10,
  'biceps-long': 6,
  'biceps-short': 6,
  'brachialis': 6,
  // Arms - Triceps (with heads)
  'triceps': 10,
  'triceps-long': 6,
  'triceps-short': 6,
  // Arms - Forearms
  'forearms': 8,
  'brachioradialis': 6,
  'wrist-flexors': 4,
  'wrist-extensors': 4,
  // Core - Simplified
  'abs': 12,
  'obliques': 8,
  // Legs - Simplified
  'quads': 12,
  'quadriceps': 12,
  'hamstrings': 10,
  'glutes': 10,
  'adductors': 8,
  'abductors': 8,
  // Back
  'lats': 12,
  'upper-traps': 8,
  'middle-traps': 8,
  'lower-traps': 6,
  'rhomboids': 8,
  'teres-major': 6,
  'teres-minor': 6,
  'infraspinatus': 6,
  'erector-spinae': 6,
  // Core
  'rectus-abdominis': 10,
  'external-obliques': 8,
  'internal-obliques': 6,
  'transverse-abdominis': 6,
  'serratus-anterior': 6,
  // Quadriceps
  'rectus-femoris': 10,
  'vastus-lateralis': 10,
  'vastus-medialis': 10,
  'vastus-intermedius': 8,
  // Hamstrings
  'biceps-femoris': 10,
  'semitendinosus': 8,
  'semimembranosus': 8,
  // Glutes
  'gluteus-maximus': 12,
  'gluteus-medius': 8,
  'gluteus-minimus': 6,
  // Adductors
  'adductor-magnus': 6,
  'adductor-longus': 6,
  'gracilis': 4,
  // Calves
  'gastrocnemius': 10,
  'soleus': 8,
  'tibialis-anterior': 6,
}

// Muscle groups organized by body region for UI
export const MUSCLE_REGIONS = {
  'Chest': ['upper-chest', 'mid-chest', 'lower-chest'],
  'Shoulders': ['anterior-delt', 'lateral-delt', 'posterior-delt', 'upper-traps'],
  'Biceps': ['biceps-long', 'biceps-short', 'brachialis'],
  'Triceps': ['triceps-long', 'triceps-short'],
  'Forearms': ['forearms'],
  'Back': ['lats', 'teres-major', 'rhomboids', 'middle-traps', 'lower-traps', 'erector-spinae', 'infraspinatus', 'teres-minor'],
  'Core': ['rectus-abdominis', 'external-obliques', 'internal-obliques', 'transverse-abdominis', 'serratus-anterior'],
  'Legs': ['quadriceps', 'hamstrings', 'glutes', 'adductors', 'abductors'],
  'Calves': ['gastrocnemius', 'soleus', 'tibialis-anterior'],
}

// Exercise categories for filtering
export const CATEGORIES = [
  'Chest',
  'Back',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Legs',
  'Core',
]

// Comprehensive exercise database
// Primary muscles get 100% of set count, secondary get 50%
export const exercises = [
  // ========== CHEST EXERCISES ==========
  {
    id: 'flat-barbell-bench-press',
    name: 'Flat Barbell Bench Press',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.MID_CHEST],
      secondary: [MUSCLE_GROUPS.UPPER_CHEST, MUSCLE_GROUPS.LOWER_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.SERRATUS_ANTERIOR],
    },
  },
  {
    id: 'incline-barbell-bench-press',
    name: 'Incline Barbell Bench Press',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.UPPER_CHEST],
      secondary: [MUSCLE_GROUPS.MID_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.TRICEPS_SHORT],
    },
  },
  {
    id: 'decline-barbell-bench-press',
    name: 'Decline Barbell Bench Press',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.LOWER_CHEST],
      secondary: [MUSCLE_GROUPS.MID_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.TRICEPS_SHORT],
    },
  },
  {
    id: 'flat-dumbbell-press',
    name: 'Flat Dumbbell Press',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.MID_CHEST],
      secondary: [MUSCLE_GROUPS.UPPER_CHEST, MUSCLE_GROUPS.LOWER_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.SERRATUS_ANTERIOR],
    },
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.UPPER_CHEST],
      secondary: [MUSCLE_GROUPS.MID_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.TRICEPS_SHORT],
    },
  },
  {
    id: 'decline-dumbbell-press',
    name: 'Decline Dumbbell Press',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.LOWER_CHEST],
      secondary: [MUSCLE_GROUPS.MID_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.TRICEPS_SHORT],
    },
  },
  {
    id: 'dumbbell-flyes',
    name: 'Dumbbell Flyes',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.MID_CHEST],
      secondary: [MUSCLE_GROUPS.UPPER_CHEST, MUSCLE_GROUPS.LOWER_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT],
    },
  },
  {
    id: 'incline-dumbbell-flyes',
    name: 'Incline Dumbbell Flyes',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.UPPER_CHEST],
      secondary: [MUSCLE_GROUPS.MID_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT],
    },
  },
  {
    id: 'cable-crossover',
    name: 'Cable Crossover',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.MID_CHEST],
      secondary: [MUSCLE_GROUPS.UPPER_CHEST, MUSCLE_GROUPS.LOWER_CHEST, MUSCLE_GROUPS.SERRATUS_ANTERIOR],
    },
  },
  {
    id: 'low-to-high-cable-fly',
    name: 'Low to High Cable Fly',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.UPPER_CHEST],
      secondary: [MUSCLE_GROUPS.MID_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT],
    },
  },
  {
    id: 'high-to-low-cable-fly',
    name: 'High to Low Cable Fly',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.LOWER_CHEST],
      secondary: [MUSCLE_GROUPS.MID_CHEST],
    },
  },
  {
    id: 'push-ups',
    name: 'Push-Ups',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.MID_CHEST],
      secondary: [MUSCLE_GROUPS.UPPER_CHEST, MUSCLE_GROUPS.LOWER_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.SERRATUS_ANTERIOR],
    },
  },
  {
    id: 'chest-dips',
    name: 'Chest Dips',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.LOWER_CHEST],
      secondary: [MUSCLE_GROUPS.MID_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.TRICEPS_SHORT],
    },
  },
  {
    id: 'machine-chest-press',
    name: 'Machine Chest Press',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.MID_CHEST],
      secondary: [MUSCLE_GROUPS.UPPER_CHEST, MUSCLE_GROUPS.LOWER_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.TRICEPS_SHORT],
    },
  },
  {
    id: 'pec-deck-fly',
    name: 'Pec Deck Fly',
    category: 'Chest',
    muscles: {
      primary: [MUSCLE_GROUPS.MID_CHEST],
      secondary: [MUSCLE_GROUPS.UPPER_CHEST, MUSCLE_GROUPS.LOWER_CHEST],
    },
  },

  // ========== BACK EXERCISES ==========
  {
    id: 'pull-ups',
    name: 'Pull-Ups',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.LATS, MUSCLE_GROUPS.TERES_MAJOR],
      secondary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.RHOMBOIDS, MUSCLE_GROUPS.LOWER_TRAPS, MUSCLE_GROUPS.BRACHIALIS],
    },
  },
  {
    id: 'chin-ups',
    name: 'Chin-Ups',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.LATS, MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG],
      secondary: [MUSCLE_GROUPS.BRACHIALIS, MUSCLE_GROUPS.TERES_MAJOR, MUSCLE_GROUPS.RHOMBOIDS],
    },
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.LATS],
      secondary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.TERES_MAJOR, MUSCLE_GROUPS.RHOMBOIDS, MUSCLE_GROUPS.BRACHIALIS],
    },
  },
  {
    id: 'close-grip-lat-pulldown',
    name: 'Close Grip Lat Pulldown',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.LATS],
      secondary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.BRACHIALIS, MUSCLE_GROUPS.TERES_MAJOR],
    },
  },
  {
    id: 'barbell-row',
    name: 'Barbell Row',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.LATS, MUSCLE_GROUPS.RHOMBOIDS, MUSCLE_GROUPS.MIDDLE_TRAPS],
      secondary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.POSTERIOR_DELT, MUSCLE_GROUPS.ERECTOR_SPINAE],
    },
  },
  {
    id: 'dumbbell-row',
    name: 'Dumbbell Row',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.LATS, MUSCLE_GROUPS.TERES_MAJOR],
      secondary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.RHOMBOIDS, MUSCLE_GROUPS.POSTERIOR_DELT],
    },
  },
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.LATS, MUSCLE_GROUPS.RHOMBOIDS, MUSCLE_GROUPS.MIDDLE_TRAPS],
      secondary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.ERECTOR_SPINAE],
    },
  },
  {
    id: 't-bar-row',
    name: 'T-Bar Row',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.LATS, MUSCLE_GROUPS.RHOMBOIDS, MUSCLE_GROUPS.MIDDLE_TRAPS],
      secondary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.ERECTOR_SPINAE],
    },
  },
  {
    id: 'deadlift',
    name: 'Deadlift',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.ERECTOR_SPINAE, MUSCLE_GROUPS.GLUTES, MUSCLE_GROUPS.HAMSTRINGS],
      secondary: [MUSCLE_GROUPS.UPPER_TRAPS, MUSCLE_GROUPS.QUADRICEPS, MUSCLE_GROUPS.BRACHIORADIALIS, MUSCLE_GROUPS.RHOMBOIDS],
    },
  },
  {
    id: 'rack-pulls',
    name: 'Rack Pulls',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.UPPER_TRAPS, MUSCLE_GROUPS.ERECTOR_SPINAE, MUSCLE_GROUPS.RHOMBOIDS],
      secondary: [MUSCLE_GROUPS.GLUTES, MUSCLE_GROUPS.BRACHIORADIALIS],
    },
  },
  {
    id: 'face-pulls',
    name: 'Face Pulls',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.POSTERIOR_DELT, MUSCLE_GROUPS.MIDDLE_TRAPS, MUSCLE_GROUPS.RHOMBOIDS],
      secondary: [MUSCLE_GROUPS.INFRASPINATUS, MUSCLE_GROUPS.TERES_MINOR],
    },
  },
  {
    id: 'shrugs',
    name: 'Shrugs',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.UPPER_TRAPS],
      secondary: [MUSCLE_GROUPS.MIDDLE_TRAPS],
    },
  },
  {
    id: 'straight-arm-pulldown',
    name: 'Straight Arm Pulldown',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.LATS],
      secondary: [MUSCLE_GROUPS.TERES_MAJOR, MUSCLE_GROUPS.TRICEPS_LONG],
    },
  },
  {
    id: 'hyperextensions',
    name: 'Hyperextensions',
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.ERECTOR_SPINAE],
      secondary: [MUSCLE_GROUPS.GLUTES, MUSCLE_GROUPS.HAMSTRINGS],
    },
  },

  // ========== SHOULDER EXERCISES ==========
  {
    id: 'overhead-press',
    name: 'Overhead Press (Barbell)',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.LATERAL_DELT],
      secondary: [MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.TRICEPS_LONG, MUSCLE_GROUPS.UPPER_TRAPS, MUSCLE_GROUPS.SERRATUS_ANTERIOR],
    },
  },
  {
    id: 'dumbbell-shoulder-press',
    name: 'Dumbbell Shoulder Press',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.LATERAL_DELT],
      secondary: [MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.TRICEPS_LONG, MUSCLE_GROUPS.UPPER_TRAPS],
    },
  },
  {
    id: 'arnold-press',
    name: 'Arnold Press',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.LATERAL_DELT],
      secondary: [MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.TRICEPS_LONG, MUSCLE_GROUPS.POSTERIOR_DELT],
    },
  },
  {
    id: 'lateral-raises',
    name: 'Lateral Raises',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.LATERAL_DELT],
      secondary: [MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.UPPER_TRAPS],
    },
  },
  {
    id: 'cable-lateral-raises',
    name: 'Cable Lateral Raises',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.LATERAL_DELT],
      secondary: [MUSCLE_GROUPS.UPPER_TRAPS],
    },
  },
  {
    id: 'front-raises',
    name: 'Front Raises',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.ANTERIOR_DELT],
      secondary: [MUSCLE_GROUPS.UPPER_CHEST, MUSCLE_GROUPS.LATERAL_DELT],
    },
  },
  {
    id: 'reverse-pec-deck',
    name: 'Reverse Pec Deck',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.POSTERIOR_DELT],
      secondary: [MUSCLE_GROUPS.RHOMBOIDS, MUSCLE_GROUPS.MIDDLE_TRAPS, MUSCLE_GROUPS.INFRASPINATUS],
    },
  },
  {
    id: 'bent-over-reverse-fly',
    name: 'Bent Over Reverse Fly',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.POSTERIOR_DELT],
      secondary: [MUSCLE_GROUPS.RHOMBOIDS, MUSCLE_GROUPS.MIDDLE_TRAPS, MUSCLE_GROUPS.TERES_MINOR],
    },
  },
  {
    id: 'upright-rows',
    name: 'Upright Rows',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.LATERAL_DELT, MUSCLE_GROUPS.UPPER_TRAPS],
      secondary: [MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG],
    },
  },
  {
    id: 'machine-shoulder-press',
    name: 'Machine Shoulder Press',
    category: 'Shoulders',
    muscles: {
      primary: [MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.LATERAL_DELT],
      secondary: [MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.TRICEPS_LONG],
    },
  },

  // ========== BICEPS EXERCISES ==========
  {
    id: 'barbell-curl',
    name: 'Barbell Curl',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG],
      secondary: [MUSCLE_GROUPS.BRACHIALIS, MUSCLE_GROUPS.BRACHIORADIALIS],
    },
  },
  {
    id: 'dumbbell-curl',
    name: 'Dumbbell Curl',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG],
      secondary: [MUSCLE_GROUPS.BRACHIALIS, MUSCLE_GROUPS.BRACHIORADIALIS],
    },
  },
  {
    id: 'hammer-curl',
    name: 'Hammer Curl',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.BRACHIALIS, MUSCLE_GROUPS.BRACHIORADIALIS],
      secondary: [MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.BICEPS_SHORT],
    },
  },
  {
    id: 'preacher-curl',
    name: 'Preacher Curl',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.BICEPS_SHORT],
      secondary: [MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.BRACHIALIS],
    },
  },
  {
    id: 'concentration-curl',
    name: 'Concentration Curl',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.BICEPS_SHORT],
      secondary: [MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.BRACHIALIS],
    },
  },
  {
    id: 'incline-dumbbell-curl',
    name: 'Incline Dumbbell Curl',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.BICEPS_LONG],
      secondary: [MUSCLE_GROUPS.BICEPS_SHORT],
    },
  },
  {
    id: 'cable-curl',
    name: 'Cable Curl',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG],
      secondary: [MUSCLE_GROUPS.BRACHIALIS],
    },
  },
  {
    id: 'ez-bar-curl',
    name: 'EZ Bar Curl',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG],
      secondary: [MUSCLE_GROUPS.BRACHIALIS, MUSCLE_GROUPS.BRACHIORADIALIS],
    },
  },
  {
    id: 'reverse-curl',
    name: 'Reverse Curl',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.BRACHIORADIALIS, MUSCLE_GROUPS.WRIST_EXTENSORS],
      secondary: [MUSCLE_GROUPS.BICEPS_SHORT, MUSCLE_GROUPS.BICEPS_LONG, MUSCLE_GROUPS.BRACHIALIS],
    },
  },

  // ========== TRICEPS EXERCISES ==========
  {
    id: 'tricep-pushdown',
    name: 'Tricep Pushdown',
    category: 'Triceps',
    muscles: {
      primary: [MUSCLE_GROUPS.TRICEPS_SHORT],
      secondary: [MUSCLE_GROUPS.TRICEPS_LONG],
    },
  },
  {
    id: 'rope-pushdown',
    name: 'Rope Pushdown',
    category: 'Triceps',
    muscles: {
      primary: [MUSCLE_GROUPS.TRICEPS_SHORT],
      secondary: [MUSCLE_GROUPS.TRICEPS_LONG],
    },
  },
  {
    id: 'skull-crushers',
    name: 'Skull Crushers',
    category: 'Triceps',
    muscles: {
      primary: [MUSCLE_GROUPS.TRICEPS_LONG],
      secondary: [MUSCLE_GROUPS.TRICEPS_SHORT],
    },
  },
  {
    id: 'overhead-tricep-extension',
    name: 'Overhead Tricep Extension',
    category: 'Triceps',
    muscles: {
      primary: [MUSCLE_GROUPS.TRICEPS_LONG],
      secondary: [MUSCLE_GROUPS.TRICEPS_SHORT],
    },
  },
  {
    id: 'tricep-dips',
    name: 'Tricep Dips',
    category: 'Triceps',
    muscles: {
      primary: [MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.TRICEPS_LONG],
      secondary: [MUSCLE_GROUPS.ANTERIOR_DELT, MUSCLE_GROUPS.LOWER_CHEST],
    },
  },
  {
    id: 'close-grip-bench-press',
    name: 'Close Grip Bench Press',
    category: 'Triceps',
    muscles: {
      primary: [MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.TRICEPS_LONG],
      secondary: [MUSCLE_GROUPS.MID_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT],
    },
  },
  {
    id: 'tricep-kickbacks',
    name: 'Tricep Kickbacks',
    category: 'Triceps',
    muscles: {
      primary: [MUSCLE_GROUPS.TRICEPS_SHORT],
      secondary: [MUSCLE_GROUPS.TRICEPS_LONG],
    },
  },
  {
    id: 'diamond-push-ups',
    name: 'Diamond Push-Ups',
    category: 'Triceps',
    muscles: {
      primary: [MUSCLE_GROUPS.TRICEPS_SHORT, MUSCLE_GROUPS.TRICEPS_LONG],
      secondary: [MUSCLE_GROUPS.MID_CHEST, MUSCLE_GROUPS.ANTERIOR_DELT],
    },
  },

  // ========== LEG EXERCISES ==========
  {
    id: 'barbell-squat',
    name: 'Barbell Squat',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.QUADRICEPS, MUSCLE_GROUPS.GLUTES],
      secondary: [MUSCLE_GROUPS.HAMSTRINGS, MUSCLE_GROUPS.ERECTOR_SPINAE, MUSCLE_GROUPS.ADDUCTORS, MUSCLE_GROUPS.ABDUCTORS],
    },
  },
  {
    id: 'front-squat',
    name: 'Front Squat',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.QUADRICEPS],
      secondary: [MUSCLE_GROUPS.GLUTES, MUSCLE_GROUPS.RECTUS_ABDOMINIS, MUSCLE_GROUPS.ERECTOR_SPINAE],
    },
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.QUADRICEPS, MUSCLE_GROUPS.GLUTES],
      secondary: [MUSCLE_GROUPS.HAMSTRINGS, MUSCLE_GROUPS.ADDUCTORS],
    },
  },
  {
    id: 'hack-squat',
    name: 'Hack Squat',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.QUADRICEPS],
      secondary: [MUSCLE_GROUPS.GLUTES],
    },
  },
  {
    id: 'lunges',
    name: 'Lunges',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.QUADRICEPS, MUSCLE_GROUPS.GLUTES],
      secondary: [MUSCLE_GROUPS.HAMSTRINGS, MUSCLE_GROUPS.ABDUCTORS, MUSCLE_GROUPS.ADDUCTORS],
    },
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.QUADRICEPS, MUSCLE_GROUPS.GLUTES],
      secondary: [MUSCLE_GROUPS.HAMSTRINGS, MUSCLE_GROUPS.ABDUCTORS],
    },
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.QUADRICEPS],
      secondary: [],
    },
  },
  {
    id: 'leg-curl',
    name: 'Leg Curl (Lying)',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.HAMSTRINGS],
      secondary: [MUSCLE_GROUPS.GASTROCNEMIUS],
    },
  },
  {
    id: 'seated-leg-curl',
    name: 'Seated Leg Curl',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.HAMSTRINGS],
      secondary: [],
    },
  },
  {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.HAMSTRINGS, MUSCLE_GROUPS.GLUTES],
      secondary: [MUSCLE_GROUPS.ERECTOR_SPINAE, MUSCLE_GROUPS.ADDUCTORS],
    },
  },
  {
    id: 'stiff-leg-deadlift',
    name: 'Stiff Leg Deadlift',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.HAMSTRINGS],
      secondary: [MUSCLE_GROUPS.GLUTES, MUSCLE_GROUPS.ERECTOR_SPINAE],
    },
  },
  {
    id: 'hip-thrust',
    name: 'Hip Thrust',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.GLUTES],
      secondary: [MUSCLE_GROUPS.HAMSTRINGS, MUSCLE_GROUPS.ABDUCTORS],
    },
  },
  {
    id: 'glute-bridge',
    name: 'Glute Bridge',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.GLUTES],
      secondary: [MUSCLE_GROUPS.HAMSTRINGS],
    },
  },
  {
    id: 'standing-calf-raise',
    name: 'Standing Calf Raise',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.GASTROCNEMIUS],
      secondary: [MUSCLE_GROUPS.SOLEUS],
    },
  },
  {
    id: 'seated-calf-raise',
    name: 'Seated Calf Raise',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.SOLEUS],
      secondary: [MUSCLE_GROUPS.GASTROCNEMIUS],
    },
  },
  {
    id: 'tibialis-raise',
    name: 'Tibialis Raise',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.TIBIALIS_ANTERIOR],
      secondary: [],
    },
  },
  {
    id: 'adductor-machine',
    name: 'Adductor Machine',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.ADDUCTORS],
      secondary: [],
    },
  },
  {
    id: 'abductor-machine',
    name: 'Abductor Machine',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.ABDUCTORS],
      secondary: [],
    },
  },
  {
    id: 'goblet-squat',
    name: 'Goblet Squat',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.QUADRICEPS, MUSCLE_GROUPS.GLUTES],
      secondary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
    },
  },
  {
    id: 'sumo-deadlift',
    name: 'Sumo Deadlift',
    category: 'Legs',
    muscles: {
      primary: [MUSCLE_GROUPS.ADDUCTORS, MUSCLE_GROUPS.GLUTES, MUSCLE_GROUPS.QUADRICEPS],
      secondary: [MUSCLE_GROUPS.ERECTOR_SPINAE, MUSCLE_GROUPS.HAMSTRINGS, MUSCLE_GROUPS.UPPER_TRAPS],
    },
  },

  // ========== CORE EXERCISES ==========
  {
    id: 'crunches',
    name: 'Crunches',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
      secondary: [],
    },
  },
  {
    id: 'sit-ups',
    name: 'Sit-Ups',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
      secondary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES],
    },
  },
  {
    id: 'leg-raises',
    name: 'Leg Raises',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
      secondary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES],
    },
  },
  {
    id: 'hanging-leg-raises',
    name: 'Hanging Leg Raises',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
      secondary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES, MUSCLE_GROUPS.BRACHIORADIALIS],
    },
  },
  {
    id: 'plank',
    name: 'Plank',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS, MUSCLE_GROUPS.TRANSVERSE_ABDOMINIS],
      secondary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES, MUSCLE_GROUPS.ERECTOR_SPINAE],
    },
  },
  {
    id: 'side-plank',
    name: 'Side Plank',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES, MUSCLE_GROUPS.INTERNAL_OBLIQUES],
      secondary: [MUSCLE_GROUPS.TRANSVERSE_ABDOMINIS, MUSCLE_GROUPS.ABDUCTORS],
    },
  },
  {
    id: 'russian-twists',
    name: 'Russian Twists',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES, MUSCLE_GROUPS.INTERNAL_OBLIQUES],
      secondary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
    },
  },
  {
    id: 'bicycle-crunches',
    name: 'Bicycle Crunches',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES, MUSCLE_GROUPS.RECTUS_ABDOMINIS],
      secondary: [MUSCLE_GROUPS.INTERNAL_OBLIQUES],
    },
  },
  {
    id: 'cable-woodchops',
    name: 'Cable Woodchops',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES, MUSCLE_GROUPS.INTERNAL_OBLIQUES],
      secondary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS, MUSCLE_GROUPS.SERRATUS_ANTERIOR],
    },
  },
  {
    id: 'ab-rollout',
    name: 'Ab Rollout',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
      secondary: [MUSCLE_GROUPS.LATS, MUSCLE_GROUPS.SERRATUS_ANTERIOR, MUSCLE_GROUPS.TRICEPS_LONG],
    },
  },
  {
    id: 'dead-bug',
    name: 'Dead Bug',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS, MUSCLE_GROUPS.TRANSVERSE_ABDOMINIS],
      secondary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES],
    },
  },
  {
    id: 'mountain-climbers',
    name: 'Mountain Climbers',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
      secondary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES, MUSCLE_GROUPS.ANTERIOR_DELT],
    },
  },
  {
    id: 'cable-crunch',
    name: 'Cable Crunch',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
      secondary: [],
    },
  },
  {
    id: 'reverse-crunch',
    name: 'Reverse Crunch',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.RECTUS_ABDOMINIS],
      secondary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES],
    },
  },
  {
    id: 'pallof-press',
    name: 'Pallof Press',
    category: 'Core',
    muscles: {
      primary: [MUSCLE_GROUPS.TRANSVERSE_ABDOMINIS, MUSCLE_GROUPS.INTERNAL_OBLIQUES],
      secondary: [MUSCLE_GROUPS.EXTERNAL_OBLIQUES, MUSCLE_GROUPS.RECTUS_ABDOMINIS],
    },
  },

  // ========== FOREARM EXERCISES ==========
  {
    id: 'wrist-curls',
    name: 'Wrist Curls',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.WRIST_FLEXORS],
      secondary: [],
    },
  },
  {
    id: 'reverse-wrist-curls',
    name: 'Reverse Wrist Curls',
    category: 'Biceps',
    muscles: {
      primary: [MUSCLE_GROUPS.WRIST_EXTENSORS],
      secondary: [],
    },
  },
  {
    id: 'farmers-walk',
    name: "Farmer's Walk",
    category: 'Back',
    muscles: {
      primary: [MUSCLE_GROUPS.BRACHIORADIALIS, MUSCLE_GROUPS.WRIST_FLEXORS, MUSCLE_GROUPS.UPPER_TRAPS],
      secondary: [MUSCLE_GROUPS.ERECTOR_SPINAE, MUSCLE_GROUPS.RECTUS_ABDOMINIS],
    },
  },
]

// Helper function to get exercise by ID
export function getExerciseById(id) {
  return exercises.find(e => e.id === id)
}

// Helper function to get exercises by category
export function getExercisesByCategory(category) {
  return exercises.filter(e => e.category === category)
}
