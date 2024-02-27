import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const Home = () => {
  return (
    <div className="min-h-screen bg-bghome bg-cover bg-center">
      <div className="flex items-center justify-center h-screen text-black">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold">
            Boost Your Crop Yield with AI-Powered Predictions
          </h1>

          <div className="flex justify-center space-x-4 text-4xl">

            <Tilt className=" h-auto  " options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}>
              <Link to="/crop-prediction" className="flex flex-col items-center ">
                <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow-2xl  shadow-yellow-300 dark:bg-green-950 dark:border-green-900">
                  <img className="rounded-t-lg h-72" src="/images/rice.jpg" alt="Rice" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Crop Prediction
                    </h5>
                    <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                      Discover the best crops to cultivate based on your local conditions.
                    </p>
                  </div>
                </div>
              </Link>
            </Tilt>
            <Tilt className=" h-auto  " options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}>
              <Link to="/fertilizer-prediction" className="flex flex-col items-center ">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl  shadow-yellow-300  dark:bg-green-950 dark:border-green-900">
                  <img className="rounded-t-lg h-72" src="/images/fertiliser.jpg" alt="Fertilizer" />
                  <div className="p-5 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Fertilizer Prediction
                    </h5>
                    <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                      Get the recommended fertilizer for your crops based on your local conditions.
                    </p>
                  </div>
                </div>
              </Link>
            </Tilt>
            <Tilt className=" h-auto  " options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}>
              <Link to="/disease-detection" className="flex flex-col items-center ">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl  shadow-yellow-300  dark:bg-green-950 dark:border-green-900">
                  <img className="rounded-t-lg h-72" src="/images/disease.jpg" alt="Disease" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Disease Prediction
                    </h5>
                    <p className="mb-3 text-lg  font-normal text-gray-700 dark:text-gray-400">
                      Identify potential diseases in your crops and learn how to cure them.
                    </p>
                  </div>
                </div>
              </Link>
            </Tilt>





          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;