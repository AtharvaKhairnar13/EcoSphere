import React, { useState } from 'react';
import Card1 from './Card1'

const Topics = () => {
  // Set 'dashboard' as the default active tab
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      <div className="relative right-0">
        <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100 z-10" role="list">
          {['dashboard', 'profile', 'settings'].map((tab) => (
            <li key={tab} className="z-30 flex-auto text-center">
              <button
                className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer ${
                  activeTab === tab ? 'text-slate-600 bg-white border-b-2 ' : 'text-slate-400'
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize the first letter */}
              </button>
            </li>
          ))}
        </ul>

        <div className="p-5">
          {activeTab === 'dashboard' && (
            <div role="tabpanel">
              <div className="flex space-x-4">
                <Card1 />
                <Card1 />
                <Card1/>
                <Card1/>
              </div>
            </div>
          )}
          {activeTab === 'profile' && (
            <div className="opacity-100" role="tabpanel">
              <div className="flex space-x-4">
                <Card1 />
                <Card1 />
                <Card1/>
                <Card1/>
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="opacity-100" role="tabpanel">
              <div className="flex space-x-4">
                <Card1 />
                <Card1 />
                <Card1/>
                <Card1/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topics;
