import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import CountryDetails from "../components/EcoPolicy/CountryDetails.jsx"
import Map from "../components/EcoPolicy/Map.jsx"
console.log(Map, CountryDetails); // Debug: Check if these are defined properly

const EcoPolicy = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <div className="flex h-screen overflow-hidden">
  
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
  
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
          <main className="grow">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
  
              {/* Dashboard actions */}
              <div className="sm:flex sm:justify-between sm:items-center mb-0">
                {/* Left: Title */}
                <div className="mb-0 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">EcoPolicy</h1>
                </div>
              </div>
              <div>
                <Map/>
              </div>
              
              <hr />
              
              {/* CountryDetails Component */}
              <div>
                <CountryDetails/>
              </div>
            </div>
          </main>
  
          <Banner />
  
        </div>
      </div>
    );
}

export default EcoPolicy;
