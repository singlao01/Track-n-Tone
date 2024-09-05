const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bmi-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for BMI records
const bmiSchema = new mongoose.Schema({
  height: Number,
  weight: Number,
  bmi: Number,
  category: String,
});

const BMI = mongoose.model('BMI', bmiSchema);

app.use(bodyParser.json());
app.use(cors());

// Default route for root path (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the BMI API. Use /api/bmi to access the BMI endpoints.');
});

// POST /api/bmi - Store BMI data
app.post('/api/bmi', async (req, res) => {
  const { height, weight, bmi, category } = req.body;

  if (height && weight && bmi && category) {
    const newBMIRecord = new BMI({ height, weight, bmi, category });
    try {
      const savedRecord = await newBMIRecord.save();
      res.status(201).json(savedRecord);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save BMI data' });
    }
  } else {
    res.status(400).json({ error: 'Invalid input. Please provide all required fields.' });
  }
});

// GET /api/bmi - Retrieve all BMI records
app.get('/api/bmi', async (req, res) => {
  try {
    const records = await BMI.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve BMI records' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
