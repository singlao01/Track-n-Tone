// src/components/RandomWorkout.js
import React, { useState } from 'react';
import './RandomWorkout.css';

function RandomWorkout() {
  const [workout, setWorkout] = useState(null);

  // Expanded workouts array with descriptions
  const workouts = [
    {
      name: "20 push-ups",
      description: "Push-ups are a basic exercise that work the chest, shoulders, triceps, and core. Perform the exercise with a straight back and engage your core.",
    },
    {
      name: "30 squats",
      description: "Squats target the quadriceps, hamstrings, and glutes. Ensure proper form with your knees not extending beyond your toes and your back straight.",
    },
    {
      name: "1-minute plank",
      description: "The plank is an isometric core strength exercise. Maintain a straight line from your head to your heels while keeping your abs and glutes engaged.",
    },
    {
      name: "15 burpees",
      description: "Burpees combine a squat, jump, and push-up, providing a full-body workout. They improve strength, endurance, and cardiovascular fitness.",
    },
    {
      name: "50 jumping jacks",
      description: "Jumping jacks are a simple cardiovascular exercise that increases heart rate. Perform the exercise by jumping while spreading your arms and legs.",
    },
  ];

  const getRandomWorkout = () => {
    const randomIndex = Math.floor(Math.random() * workouts.length);
    setWorkout(workouts[randomIndex]);
  };

  return (
    <div className="random-workout">
      <h2>Random Workout</h2>
      <button onClick={getRandomWorkout}>Get Workout</button>
      {workout && (
        <div className="workout-display">
          <p><strong>Your workout:</strong> {workout.name}</p>
          <p><strong>Description:</strong> {workout.description}</p>
        </div>
      )}
    </div>
  );
}

export default RandomWorkout;
