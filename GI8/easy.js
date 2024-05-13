function exerciseOfTheDay() {
  const exercises = [];

  return function(newExercise) {
    if (newExercise) {
      exercises.push(newExercise);
    } else {
      const randomIndex = Math.floor(Math.random() * exercises.length);
      console.log(`Today's exercise: ${exercises[randomIndex]}`);
    }
  };
}

const exercise = exerciseOfTheDay();

// Set exercises for the day
exercise("Back Day");
exercise("Chest Day");
exercise("Leg Day");
exercise("Shoulder and Arm Day");

// Print a random exercise for the day
exercise(); // Output: Today's exercise: (randomly selected exercise from the list)
