// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Fitness App</h1>
      </header>
      <div className="info-container">
        <p>
          Our Fitness App is your go-to solution for achieving your fitness goals. Whether you're looking to lose weight, gain muscle, or maintain a healthy lifestyle, our app has got you covered.
        </p>
        <p>Features include:</p>
        <ul>
          <li><strong>Workout Plans:</strong> Choose from a variety of workout plans tailored to your fitness level and goals.</li>
          <li><strong>Nutrition Tracking:</strong> Keep track of your daily calorie intake and macronutrients with our easy-to-use nutrition tracker.</li>
          <li><strong>Progress Tracking:</strong> Monitor your progress with detailed stats and graphs that show how you're improving over time.</li>
          <li><strong>Community Support:</strong> Join our community of fitness enthusiasts to share tips, challenges, and motivation.</li>
          <li><strong>Custom Workouts:</strong> Create and save custom workouts that fit your specific needs and preferences.</li>
          <li><strong>Random Workout Generator:</strong> Not sure what to do today? Let our Random Workout Generator choose for you!</li>
        </ul>
        <p>
          Getting started is easy. Simply choose a feature from the navigation menu to begin your fitness journey. Whether you're a beginner or a seasoned athlete, our Fitness App is designed to help you succeed. Start exploring and take the first step towards a healthier, fitter you!
        </p>
        <p>
          Remember, consistency is key. Track your progress regularly and stay motivated by setting achievable goals. We're here to support you every step of the way!
        </p>
      </div>
    </div>
  );
}

export default Home;
