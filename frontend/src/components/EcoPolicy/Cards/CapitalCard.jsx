import React from 'react';

function CapitalCard({ city, country, description, backgroundImage }) {
  return (
    <div
      className="flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-xl flex-1 min-h-[250px]"
      style={{
        backgroundImage: `url(${backgroundImage || 'https://th.bing.com/th/id/OIP.sn2iZvtG79DSCMOU9eZHSwHaEK?w=301&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.85,
      }}
    >
      <div className="px-5 pt-5 pb-3 bg-black bg-opacity-50 rounded-xl">
        <header className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-100">{city}, {country}</h2>
        </header>
        <div className="text-xs font-semibold text-gray-200 uppercase mb-2">Capital City</div>
        <div className="text-sm font-medium text-gray-100">{description}</div>
      </div>
    </div>
  );
}

export default CapitalCard;
