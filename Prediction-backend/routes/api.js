// routes/api.js
const express = require('express');
const router = express.Router();
const axios = require('axios');


// Route to handle predictions with a POST request
router.post('/predict', async (req, res) => {
    try {
        // Extract input values from the request body
        const inputValues = req.body; // Change to req.body
        console.log("Received input values:", inputValues);

        // Make a request to the Python API for predictions
        const pythonApiUrl = 'http://localhost:5000/api/predict';
        const response = await axios.post(pythonApiUrl, inputValues, {
            headers: {
                'Content-Type': 'application/json', // Ensure the correct Content-Type
            },
        });
        console.log(response);

        // Get the prediction result from the Python API response
        const predictionResult = response.data.prediction;

        // Respond with the prediction result
        res.json({ prediction: predictionResult });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Route to handle predictions with a POST request
router.post('/predict/fertilizer', async (req, res) => {
    try {
        // Extract input values from the request body
        const inputValues = req.body;
        // console.log("Received input values:", inputValues);

        // Make a request to the Python API for predictions
        const pythonApiUrl = 'http://localhost:5000/api/predict/fertilizer'; // Updated endpoint
        const response = await axios.post(pythonApiUrl, inputValues, {
            headers: {
                'Content-Type': 'application/json', // Ensure the correct Content-Type
            },
        });
        // console.log(response);

        // Get the prediction result from the Python API response
        const predictionResult = response.data;

        // Respond with the prediction result
        res.json({ prediction: predictionResult });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
