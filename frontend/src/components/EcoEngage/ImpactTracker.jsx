import React from "react";

const ImpactTracker = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Impact Tracker</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-blue-800">Emails Sent</h3>
          <p className="text-2xl font-bold text-blue-600">125</p>
        </div>

        <div className="p-4 bg-purple-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-purple-800">Responses Received</h3>
          <p className="text-2xl font-bold text-purple-600">32</p>
        </div>

        <div className="p-4 bg-red-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-800">Social Shares</h3>
          <p className="text-2xl font-bold text-red-600">57</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactTracker;
