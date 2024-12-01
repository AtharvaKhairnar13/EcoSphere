import React from "react";

const EcoSentiment = ({ selectedCountry, countPositive, countNegative, trendingIssues, preciseTrendingTopic }) => {
  console.log(trendingIssues);
  
  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">EcoPulse Sentiment</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-green-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-green-800">
            Positive Sentiment
          </h3>
          <p className="text-2xl font-bold text-green-600">
            {countPositive ? (countPositive * 100) / (countPositive + countNegative) : 0}%
          </p>
        </div>

        <div className="p-4 bg-red-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-800">
            Negative Sentiment
          </h3>
          <p className="text-2xl font-bold text-red-600">
            {countNegative ? (countNegative * 100) / (countPositive + countNegative) : 0}%
          </p>
        </div>

        {/* Trending Issues Section */}
        <div className="p-4 bg-yellow-100 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800">Trending Issues</h3>
          <ul className="list-disc list-inside text-sm">
            {trendingIssues.map((topic, index) => (
              <li key={index}>
                {topic.topic}: {topic.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Precise Trending Topics Section */}
        <div className="p-4 bg-blue-100 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800">Precise Trending Topics</h3>
          {preciseTrendingTopic && preciseTrendingTopic.length > 0 ? (
            <ul className="list-disc list-inside text-sm">
              {preciseTrendingTopic.map((topic, index) => (
                <li key={index}>
                  <strong>{topic.topic.trim()}:</strong> {topic.description.trim()}
                </li>
              ))}
            </ul>
          ) : (
            <p>No precise trending topics available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EcoSentiment;
