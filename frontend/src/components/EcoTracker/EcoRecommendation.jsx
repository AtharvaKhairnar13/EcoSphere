import React, { useState, useEffect } from "react";

const EcoRecommendations = () => {
  // Sample recommendation data
  const recommendations = {
    increase: [
      {
        title: "Increase Renewable Energy Usage",
        description: "Switch to solar, wind, or other renewable energy sources. This will significantly reduce your carbon footprint."
      },
      {
        title: "Increase Tree Plantation",
        description: "Planting more trees helps in absorbing CO2 and improves air quality."
      },
      {
        title: "Shift to Sustainable Diet",
        description: "Consider reducing your meat consumption. A plant-based diet is more eco-friendly."
      },
    ],
    decrease: [
      {
        title: "Decrease Carbon Emissions",
        description: "Reduce the use of fossil fuels by adopting electric vehicles and public transportation."
      },
      {
        title: "Decrease Plastic Waste",
        description: "Switch to reusable products like bottles, bags, and packaging."
      },
      {
        title: "Decrease Energy Consumption",
        description: "Turn off devices when not in use and invest in energy-efficient appliances."
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Eco Recommendations</h2>
      <div className="space-y-4">
        {/* Increase Section */}
        <div>
          <h3 className="text-xl font-semibold text-green-600">Things to Increase</h3>
          <div className="space-y-3 mt-2">
            {recommendations.increase.map((item, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-green-800">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decrease Section */}
        <div>
          <h3 className="text-xl font-semibold text-red-600">Things to Decrease</h3>
          <div className="space-y-3 mt-2">
            {recommendations.decrease.map((item, index) => (
              <div key={index} className="bg-red-50 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-red-800">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional Chatbot Interaction */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Want More Personalized Recommendations?</h3>
        <p className="text-sm text-gray-600">Chat with our EcoBot to get tailored advice based on your activities and eco-goals.</p>
        <button
          onClick={() => alert("Redirecting to EcoBot...")} 
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Chat with EcoBot
        </button>
      </div>
    </div>
  );
};

export default EcoRecommendations;
