// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputValues, setInputValues] = useState({
    Nitrogen: '',
    Phosphorus: '',
    Potassium: '',
    Temperature: '',
    Humidity: '',
    pH: '',
    Rainfall: '',
  });
  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    try {
      // Make a request to your backend for predictions
      const response = await axios.post('http://localhost:5000/api/predict', inputValues);

      console.log(response);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error predicting:', error.message);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-green-400 to-green-600 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl font-extrabold text-white'>Crop Recommendation System 🌱</h1>
      <div className='grid grid-cols-2 gap-4'>
        {Object.keys(inputValues).map((param) => (
          <div key={param} className='flex flex-col items-center'>
            <label className='text-white'>{param}</label>
            <input
              type='text'
              className='border-2 p-2 rounded-md'
              name={param}
              value={inputValues[param]}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
      <button
        className='px-6 py-3 text-lg font-medium text-white transition duration-300 bg-green-800 border-2 border-transparent rounded-full hover:bg-green-700 focus:outline-none focus:border-green-600 focus:ring focus:ring-green-200'
        onClick={handlePredict}
      >
        Predict
      </button>
      {prediction && (
        <div className="w-52 h-52 flex flex-col justify-center items-center border p-4  bg-green-950">
          {/* <img src={`https://source.unsplash.com/random/900x700/?${prediction}`} alt={`Prediction: ${prediction}`} style={{ maxWidth: '10rem', height: 'auto' }} /> */}
          <p className='text-white text-lg font-semibold'>
            Prediction: <span className='text-yellow-300'>{prediction}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
