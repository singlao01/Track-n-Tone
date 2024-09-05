const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Define file path for data storage
const dataFilePath = path.join(__dirname, 'data.json');

// Load data from file
const loadData = () => {
  if (fs.existsSync(dataFilePath)) {
    return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  }
  return { foodList: [], totalCalories: 0 };
};

// Save data to file
const saveData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data), 'utf8');
};

// Get food list and total calories
app.get('/api/data', (req, res) => {
  res.json(loadData());
});

// Add new food item
app.post('/api/data', (req, res) => {
  const { foodList, totalCalories } = req.body;
  saveData({ foodList, totalCalories });
  res.status(200).send('Data saved');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
