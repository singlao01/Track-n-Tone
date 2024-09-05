import React, { useState, useEffect } from 'react';
import './BMI.css';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
  const [bmiRecords, setBMIRecords] = useState([]);

  // Function to calculate BMI and store it in localStorage
  const calculateAndStoreBMI = () => {
    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
    const bmiCategory = getBMICategory(bmiValue);

    setBMI(bmiValue);
    setCategory(bmiCategory);

    // Get existing records from localStorage
    const existingRecords = JSON.parse(localStorage.getItem('bmiRecords')) || [];
    const newBMIRecord = { height, weight, bmi: bmiValue, category: bmiCategory };
    existingRecords.push(newBMIRecord);

    // Save updated records to localStorage
    localStorage.setItem('bmiRecords', JSON.stringify(existingRecords));
    setBMIRecords(existingRecords);
  };

  // Function to get BMI category based on BMI value
  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    if (bmi >= 30) return 'Obese';
    return '';
  };

  // Fetch stored BMI records from localStorage
  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('bmiRecords')) || [];
    setBMIRecords(storedRecords);
  }, []);

  // Function to delete a specific BMI record
  const deleteBMIRecord = (index) => {
    const updatedRecords = [...bmiRecords];
    updatedRecords.splice(index, 1); // Remove the record at the given index

    // Update localStorage and local state
    localStorage.setItem('bmiRecords', JSON.stringify(updatedRecords));
    setBMIRecords(updatedRecords);
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculateAndStoreBMI}>Calculate and Store BMI</button>

      {bmi && (
        <div>
          <p>Your BMI is: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}

      <h3>Stored BMI Records</h3>
      <ul>
        {bmiRecords.map((record, index) => (
          <li key={index}>
            Height: {record.height} cm, Weight: {record.weight} kg, BMI: {record.bmi} ({record.category})
            <button onClick={() => deleteBMIRecord(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BMICalculator;
