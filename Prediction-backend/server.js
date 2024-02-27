const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json());

const corsOptions = {
    origin:"http://localhost:5173",
    credentials: true,
    optionSuccessStatus: 200,
    allowedHeaders: ['Content-Type'], // Add this line
}
app.use(cors(corsOptions));

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/cropPrediction',
//     {
//         useNewUrlParser: true
//     })
//     .then((data) => {
//         console.log(`Mongodb connected with server: ${data.connection.host}`);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// Use API routes
app.use('/api', apiRoutes);

// Serve the React app from the 'dist' folder
app.use(express.static(path.join(__dirname, 'D:\OPEN SOURCE\Crop Recommendation\crop-prediction-frontend\dist')));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'D:\OPEN SOURCE\Crop Recommendation\crop-prediction-frontend\dist\index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
