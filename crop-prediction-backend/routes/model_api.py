from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS extension
import numpy as np
import pandas
import pickle




# importing models
model = pickle.load(open('D:\OPEN SOURCE\Crop Recommendation\crop-prediction-backend\models\RandomForest.pkl', 'rb'))


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}}, allow_headers=["Content-Type"])  # Enable CORS for all routes




@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        # Extract input values from the request body
        input_values = request.json 

        # Convert input values to an array in the expected order
        N=  float(input_values.get('Nitrogen')),
        P =  float(input_values.get('Phosphorus')),
        K =   float(input_values.get('Potassium')),
        temp=  float(input_values.get('Temperature')),
        humidity =  float(input_values.get('Humidity')),
        ph =  float(input_values.get('pH')),
        rainfall =  float(input_values.get('Rainfall')),
        
        feature_list = [N, P, K, temp, humidity, ph, rainfall]
        single_pred = np.array(feature_list).reshape(1, -1)
        # Use the trained model to make predictions
        # scaled_features = ms.transform(single_pred)
        # final_features = sc.transform(scaled_features)
        prediction = model.predict(single_pred)

        crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
                    8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
                    14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
                    19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}
        
        if prediction[0] in crop_dict:
            crop = crop_dict[prediction[0]]

        # Print the prediction result
        print("Prediction result:",crop)

        # Respond with the prediction result
        return jsonify({'prediction': crop})

    except Exception as e:
        return jsonify({'error': str(e)})



if __name__ == '__main__':
    app.run(port=5000)
