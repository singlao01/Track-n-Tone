import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CalorieCounter.css';

function App() {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  // Load data from the API when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setFoodList(response.data.foodList);
        setTotalCalories(response.data.totalCalories);
      })
      .catch(error => {
        console.error('Error loading data', error);
      });
  }, []);

  // Save data to the API whenever foodList or totalCalories change
  useEffect(() => {
    axios.post('http://localhost:5000/api/data', {
      foodList,
      totalCalories
    })
    .catch(error => {
      console.error('Error saving data', error);
    });
  }, [foodList, totalCalories]);

  const addFood = () => {
    if (food && calories) {
      const newFoodItem = { food, calories: parseInt(calories) };
      const updatedFoodList = [...foodList, newFoodItem];

      // Update state with new food list and total calories
      setFoodList(updatedFoodList);
      setTotalCalories(updatedFoodList.reduce((sum, item) => sum + item.calories, 0));

      // Clear input fields
      setFood('');
      setCalories('');
    }
  };

  return (
    <div className="App">
      <h2>Calorie Counter</h2>
      <input
        type="text"
        placeholder="Food"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button onClick={addFood}>Add Food</button>

      <h3>Food List</h3>
      <ul>
        {foodList.map((item, index) => (
          <li key={index}>
            {item.food}: {item.calories} calories
          </li>
        ))}
      </ul>

      <h3>Total Calories: {totalCalories}</h3>
    </div>
  );
}

export default App;
