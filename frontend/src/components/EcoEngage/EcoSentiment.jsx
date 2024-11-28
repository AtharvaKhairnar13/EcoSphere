import React from "react";

const EcoSentiment = ({ selectedCountry }) => {
  // Sample data; replace with real data fetching
  const countryData = {
    India: {
      positive: 72,
      negative: 28,
      trendingIssues: ["Air Pollution", "Deforestation", "Renewable Energy Policies"],
    },
    "United States": {
      positive: 65,
      negative: 35,
      trendingIssues: ["Wildfires", "Water Pollution", "Fossil Fuel Usage"],
    },
    // Add more countries as needed
  };

  const { positive, negative, trendingIssues } = countryData[selectedCountry] || {};

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">EcoPulse Sentiment</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-green-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-green-800">
            Positive Sentiment
          </h3>
          <p className="text-2xl font-bold text-green-600">{positive}%</p>
        </div>

        <div className="p-4 bg-red-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-800">
            Negative Sentiment
          </h3>
          <p className="text-2xl font-bold text-red-600">{negative}%</p>
        </div>

        <div className="p-4 bg-yellow-100 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800">Trending Issues</h3>
          <ul className="list-disc list-inside text-sm">
            {trendingIssues?.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcoSentiment;
