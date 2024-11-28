import React from 'react';

function AreaCard({ areaData }) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gradient-to-r from-green-500 to-brown-600 dark:from-green-700 dark:to-brown-800 shadow-xl rounded-xl overflow-hidden">
      <div className="flex flex-col justify-center items-center px-6 pt-6 pb-4 h-full">
        <header className="mb-4">
          <h2 className="text-xl font-semibold text-white">Country Area (km²)</h2>
        </header>
        <div className="text-xs font-medium text-gray-200 uppercase mb-4">Area</div>
        <div className="flex items-center justify-center space-x-4">
          <div className="text-4xl font-bold text-white">{areaData}</div>
        </div>
      </div>
    </div>
  );
}

export default AreaCard;
