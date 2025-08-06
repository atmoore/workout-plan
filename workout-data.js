// Ultimate PPL System - Week 1 Workout Data
const WORKOUT_DATA = {
  "week": 1,
  "workouts": {
    "push": {
      "name": "Push #1 - Week 1",
      "exercises": [
        {
          "name": "Bench Press",
          "warmup_sets": "3-4",
          "working_sets": 1,
          "reps": "3-5",
          "load": "",
          "rpe": "8-9",
          "rest": "~3-4 min",
          "substitution_option_1": "DB Bench Press",
          "substitution_option_2": "Machine Chest Press",
          "coaching_notes": "Set up a comfortable arch, quick pause on the chest and explode up on each rep.",
          "youtube_link": null
        },
        {
          "name": "Larsen Press",
          "warmup_sets": 0,
          "working_sets": 2,
          "reps": 10,
          "load": "",
          "rpe": "8-9",
          "rest": "~3-4 min",
          "substitution_option_1": "DB Bench Press (No Leg Drive)",
          "substitution_option_2": "Machine Chest Press (No Leg Drive)",
          "coaching_notes": "Shoulder blades still retracted and depressed. Slight arch in upper back. Zero leg drive.",
          "youtube_link": null
        },
        {
          "name": "Standing Dumbbell Arnold Press",
          "warmup_sets": 2,
          "working_sets": 3,
          "reps": "8-10",
          "load": "",
          "rpe": "8-9",
          "rest": "~2-3 min",
          "substitution_option_1": "Seated DB Shoulder Press",
          "substitution_option_2": "Machine Shoulder Press",
          "coaching_notes": "Start with your elbows in front of you and palms facing in. Rotate the dumbbells so that your palms face forward as you press.",
          "youtube_link": null
        },
        {
          "name": "A1. Press-Around",
          "warmup_sets": 1,
          "working_sets": 2,
          "reps": "12-15",
          "load": "",
          "rpe": "9-10",
          "rest": "0 min",
          "substitution_option_1": "DB Flye",
          "substitution_option_2": "Deficit Push Up",
          "coaching_notes": "Brace with your non-working arm, squeeze your pecs by pressing the cable across your body.",
          "youtube_link": null
        },
        {
          "name": "A2. Pec Static Stretch 30s",
          "warmup_sets": 0,
          "working_sets": 2,
          "reps": "30s HOLD",
          "load": "",
          "rpe": "N/A",
          "rest": "0 min",
          "substitution_option_1": "N/A",
          "substitution_option_2": "N/A",
          "coaching_notes": "Hold a pec stretch for 30 seconds. The stretch should be held at about a 7/10 intensity.",
          "youtube_link": null
        },
        {
          "name": "Cross-Body Cable Y-Raise (Side Delt)",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "12-15",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "DB Lateral Raise",
          "substitution_option_2": "Machine Lateral Raise",
          "coaching_notes": "Think about swinging the cable out and up as if 'drawing a sword' from your side.",
          "youtube_link": null
        },
        {
          "name": "Squeeze-Only Triceps Pressdown + Stretch-Only Overhead Triceps Extension",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "8 + 8",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "Triceps Pressdown (12-15 reps)",
          "substitution_option_2": "DB Skull Crusher (12-15 reps)",
          "coaching_notes": "Do the second half of the ROM for pressdowns ('the squeeze') and the first half of the ROM for overhead extensions ('the stretch').",
          "youtube_link": null
        },
        {
          "name": "N1-Style Cross-Body Triceps Extension",
          "warmup_sets": 0,
          "working_sets": 2,
          "reps": "10-12",
          "load": "",
          "rpe": "10",
          "rest": "~1-2 min",
          "substitution_option_1": "Single-Arm Tricep Pressdown",
          "substitution_option_2": "Single-Arm Cable Tricep Kickback",
          "coaching_notes": "Extend your triceps with your arm more out to the side than a regular pressdown. Feel the stretch as the cable moves across your torso.",
          "youtube_link": null
        }
      ]
    },
    "pull": {
      "name": "Pull #1 - Week 1",
      "exercises": [
        {
          "name": "Lat Pulldown (Feeder Sets)",
          "warmup_sets": 0,
          "working_sets": 4,
          "reps": 10,
          "load": "",
          "rpe": "See Notes",
          "rest": "~2-3 min",
          "substitution_option_1": "Machine Pulldown",
          "substitution_option_2": "Pull-Up",
          "coaching_notes": "Do 4 feeder sets of 10 reps by gradually building the weight up from set to set. Set 1 is pretty light (RPE 4-5). Set 2 is a little heavier (RPE 6-7). Set 3 is a little heavier again (RPE 7-8). Set 4 is your hard set: try to hit failure at 10 reps on this last set.",
          "youtube_link": null
        },
        {
          "name": "Lat Pulldown (Failure Set)",
          "warmup_sets": 0,
          "working_sets": 1,
          "reps": "10+5",
          "load": "",
          "rpe": "10",
          "rest": "~2-3 min",
          "substitution_option_1": "Machine Pulldown",
          "substitution_option_2": "Pull-Up",
          "coaching_notes": "After hitting failure at ~10 reps, do a dropset. Strip the weight back ~30-50% and do another 5 reps with nice and controlled technique.",
          "youtube_link": null
        },
        {
          "name": "Omni-Grip Machine Chest-Supported Row",
          "warmup_sets": 2,
          "working_sets": 3,
          "reps": "10-12",
          "load": "",
          "rpe": "8-9",
          "rest": "~2-3 min",
          "substitution_option_1": "Incline Chest-Supported DB Row",
          "substitution_option_2": "Cable Seated Row",
          "coaching_notes": "Use 3 different grips for the 3 working sets (ideally going from wider to closer).",
          "youtube_link": null
        },
        {
          "name": "A1. Bottom-Half DB Lat Pullover",
          "warmup_sets": 1,
          "working_sets": 2,
          "reps": "10-12",
          "load": "",
          "rpe": "9-10",
          "rest": "0 min",
          "substitution_option_1": "Cable Lat Pullover",
          "substitution_option_2": "1-Arm Lat Pull-In",
          "coaching_notes": "Do DB lat pullovers, but cut out the top half of the ROM (stay entirely in the stretched aspect of the lift).",
          "youtube_link": null
        },
        {
          "name": "A2. Lat Static Stretch 30s",
          "warmup_sets": 0,
          "working_sets": 2,
          "reps": "30s HOLD",
          "load": "",
          "rpe": "N/A",
          "rest": "0 min",
          "substitution_option_1": "N/A",
          "substitution_option_2": "N/A",
          "coaching_notes": "Hold a lat stretch for 30 seconds. The stretch should be held at about a 7/10 intensity.",
          "youtube_link": "https://youtu.be/O94yEoGXtbY?t=150"
        },
        {
          "name": "Omni-Direction Face Pull",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "12-15",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "Reverse Cable Flye",
          "substitution_option_2": "Bent-Over Reverse DB Flye",
          "coaching_notes": "1st set: low-to-high 2nd set: mid-range 3rd set: high-to-low",
          "youtube_link": null
        },
        {
          "name": "EZ-Bar Curl",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "6-8",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "DB Curl",
          "substitution_option_2": "Cable Curl",
          "coaching_notes": "Focus on contracting your biceps, minimize torso momentum.",
          "youtube_link": null
        },
        {
          "name": "Bottom-Half Preacher Curl",
          "warmup_sets": 0,
          "working_sets": 2,
          "reps": "10-12",
          "load": "",
          "rpe": "10",
          "rest": "~1-2 min",
          "substitution_option_1": "Bottom-Half Spider Curl",
          "substitution_option_2": "Bottom-Half Bayesian Curl",
          "coaching_notes": "Do preacher curls, but cut out the top half of the ROM (stay entirely in the stretched aspect of the lift).",
          "youtube_link": null
        }
      ]
    },
    "upper": {
      "name": "Upper #1 - Week 1",
      "exercises": [
        {
          "name": "Pull-Up",
          "warmup_sets": 2,
          "working_sets": 2,
          "reps": "8-10",
          "load": "",
          "rpe": "8-9",
          "rest": "~2-3 min",
          "substitution_option_1": "Lat Pulldown",
          "substitution_option_2": "Machine Pulldown",
          "coaching_notes": "1.5x shoulder width grip, pull your chest to the bar.",
          "youtube_link": null
        },
        {
          "name": "Close-Grip Barbell Incline Press",
          "warmup_sets": "2-3",
          "working_sets": 3,
          "reps": "8, 5, 12",
          "load": "",
          "rpe": "8-9",
          "rest": "~3-4 min",
          "substitution_option_1": "Close-Grip DB Incline Press",
          "substitution_option_2": "Close-Grip Machine Press",
          "coaching_notes": "Use ~45° incline and a grip width just outside shoulder width.",
          "youtube_link": null
        },
        {
          "name": "Kroc Row",
          "warmup_sets": 2,
          "working_sets": 3,
          "reps": "10-12",
          "load": "",
          "rpe": "8-9",
          "rest": "~2-3 min",
          "substitution_option_1": "Single-Arm DB Row",
          "substitution_option_2": "Meadows Row",
          "coaching_notes": "Kroc rows are basically just a dumbbell row with mild cheating and a slightly more upright posture. Don't be afraid to go heavy and use straps if your grip is limiting.",
          "youtube_link": null
        },
        {
          "name": "Eccentric-Accentuated Cable Lateral Raise, Constant-Tension Cable Lateral Raise",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "5, 15",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "DB Lateral Raise",
          "substitution_option_2": "Machine Lateral Raise",
          "coaching_notes": "First 5 reps: 5-second lowering phase, last 15 reps constant tension (no pausing at the bottom or top).",
          "youtube_link": null
        },
        {
          "name": "N1-Style Cross-Body Bicep Curl",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "10-12",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "DB Incline Curl",
          "substitution_option_2": "DB Curl",
          "coaching_notes": "Curl across your body with your arm out to the side at ~60°.",
          "youtube_link": null
        },
        {
          "name": "Diamond Pushup",
          "warmup_sets": 0,
          "working_sets": 1,
          "reps": "AMRAP",
          "load": "",
          "rpe": "10",
          "rest": "0 min",
          "substitution_option_1": "Close-Grip Push Up",
          "substitution_option_2": "Kneeling Modified Push Up",
          "coaching_notes": "Place your hands close together on the ground so that they form a diamond shape and do as many pushups as possible with a smooth tempo.",
          "youtube_link": null
        }
      ]
    },
    "lower": {
      "name": "Lower #1 - Week 1",
      "exercises": [
        {
          "name": "Deadlift",
          "warmup_sets": "3-4",
          "working_sets": 1,
          "reps": 5,
          "load": "",
          "rpe": "8-9",
          "rest": "~3-5 min",
          "substitution_option_1": "Trap Bar Deadlift",
          "substitution_option_2": "Barbell Hip Thrust",
          "coaching_notes": "Brace your lats, chest tall, pull the slack out of the bar before lifting",
          "youtube_link": null
        },
        {
          "name": "Stiff-Leg Deadlift",
          "warmup_sets": 0,
          "working_sets": 2,
          "reps": 8,
          "load": "",
          "rpe": "8-9",
          "rest": "~3-4 min",
          "substitution_option_1": "Barbell RDL",
          "substitution_option_2": "DB RDL",
          "coaching_notes": "Think about doing a high-hip conventional deadlift with a slight bend in the knees",
          "youtube_link": null
        },
        {
          "name": "Leg Press",
          "warmup_sets": "2-3",
          "working_sets": 4,
          "reps": "10-12",
          "load": "",
          "rpe": "8-9",
          "rest": "~2-3 min",
          "substitution_option_1": "Goblet Squat",
          "substitution_option_2": "Walking Lunge",
          "coaching_notes": "Medium width feet placement on the platform, don't allow your lower back to round",
          "youtube_link": null
        },
        {
          "name": "Glute Ham Raise",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "8-10",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "Nordic Ham Curl",
          "substitution_option_2": "Lying Leg Curl",
          "coaching_notes": "Keep your hips straight, do Nordic ham curls if no GHR machine",
          "youtube_link": null
        },
        {
          "name": "Slow-Eccentric Leg Extension",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "8-10",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "DB Step-Up",
          "substitution_option_2": "Goblet Squat",
          "coaching_notes": "Control the weight with a 3-4 second negative",
          "youtube_link": null
        },
        {
          "name": "Seated Calf Raise",
          "warmup_sets": 1,
          "working_sets": 4,
          "reps": "15-20",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "Standing Calf Raise",
          "substitution_option_2": "Leg Press Toe Press",
          "coaching_notes": "Press all the way up to your toes, stretch your calves at the bottom, don't bounce",
          "youtube_link": null
        },
        {
          "name": "Roman Chair Leg Raise",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "10-20",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "Hanging Leg Raise",
          "substitution_option_2": "Reverse Crunch",
          "coaching_notes": "Don't swing your legs at the bottom, minimize momentum, tuck your knees towards your chest if lifting your legs straight out is too challenging",
          "youtube_link": null
        }
      ]
    },
    "legs": {
      "name": "Legs #1 - Week 1",
      "exercises": [
        {
          "name": "Squat",
          "warmup_sets": "3-4",
          "working_sets": 1,
          "reps": "2-4",
          "load": "",
          "rpe": "8-9",
          "rest": "~3-4 min",
          "substitution_option_1": "Hack Squat",
          "substitution_option_2": "DB Bulgarian Split Squat",
          "coaching_notes": "Sit back and down, keep your upper back tight to the bar.",
          "youtube_link": null
        },
        {
          "name": "Pause Squat (Back off)",
          "warmup_sets": 0,
          "working_sets": 2,
          "reps": 5,
          "load": "",
          "rpe": "8-9",
          "rest": "~3-4 min",
          "substitution_option_1": "Pause Hack Squat",
          "substitution_option_2": "Pause DB Bulgarian Split Squat",
          "coaching_notes": "Drop the weight by ~25% from your top set. 2 second pause. Sit back and down, keep your upper back tight to the bar.",
          "youtube_link": null
        },
        {
          "name": "Barbell RDL",
          "warmup_sets": 2,
          "working_sets": 3,
          "reps": "8-10",
          "load": "",
          "rpe": "8-9",
          "rest": "~2-3 min",
          "substitution_option_1": "DB RDL",
          "substitution_option_2": "45° Hyperextension",
          "coaching_notes": "Maintain a neutral lower back, set your hips back, don't allow your spine to round.",
          "youtube_link": null
        },
        {
          "name": "Walking Lunge",
          "warmup_sets": 1,
          "working_sets": 2,
          "reps": 10,
          "load": "",
          "rpe": "8-9",
          "rest": "~2-3 min",
          "substitution_option_1": "DB Step-Up",
          "substitution_option_2": "Goblet Squat",
          "coaching_notes": "Take medium strides, minimize the amount you push off your rear leg.",
          "youtube_link": null
        },
        {
          "name": "Seated Leg Curl",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "10-12",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "Lying Leg Curl",
          "substitution_option_2": "Nordic Ham Curl",
          "coaching_notes": "Focus on squeezing your hamstrings to move the weight.",
          "youtube_link": null
        },
        {
          "name": "Leg Press Toe Press",
          "warmup_sets": 1,
          "working_sets": 4,
          "reps": "10-12",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "Seated Calf Raise",
          "substitution_option_2": "Standing Calf Raise",
          "coaching_notes": "Press all the way up to your toes, stretch your calves at the bottom, don't bounce.",
          "youtube_link": null
        },
        {
          "name": "Decline Plate-Weighted Crunch",
          "warmup_sets": 1,
          "working_sets": 3,
          "reps": "10-12",
          "load": "",
          "rpe": "9-10",
          "rest": "~1-2 min",
          "substitution_option_1": "Cable Crunch",
          "substitution_option_2": "Machine Crunch",
          "coaching_notes": "Hold a plate or DB to your chest and crunch hard.",
          "youtube_link": null
        }
      ]
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WORKOUT_DATA;
}