import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import Banner from '../../partials/Banner';
import Navbar from './Navbar';
import DashboardCard1 from '../EcoStats/ClimateAndCarbonEmission/dashboard/DashboardCard1';
import EcoRecommendations from './EcoRecommendation';

const EcoTrackerHome = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <div className="flex h-screen overflow-hidden">
  
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex items-center justify-center p-4">
          <Navbar />
        </div>
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
  
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
          <main className="grow">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
  
              {/* Dashboard actions */}
              <div className="sm:flex sm:justify-between sm:items-center mb-8">

  
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">EcoTrackerHome</h1>
                </div>

                <div className="flex items-center space-x-2">
                                {/* Add view button */}
                    <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                        <svg
                            className="fill-current shrink-0 xs:hidden"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                        >
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="max-xs:sr-only">Add data</span>
                    </button>
                </div>
  
              </div>
  
              {/* Cards */}
              <div className="grid grid-cols-12 gap-6">
              <DashboardCard1 
                  title="Energy Consumption (kWh)" 
                  salesAmount={3500} 
                  salesChangePercentage={-12} 
              />

                <DashboardCard1 
                    title="Carbon Footprint" 
                    salesAmount={4.2} 
                    salesChangePercentage={8} 
                />
                <DashboardCard1 
                    title="Waste Contribution (kg)" 
                    salesAmount={25} 
                    salesChangePercentage={2} 
                />
                <DashboardCard1 
                    title="Water Consumption (liters)" 
                    salesAmount={190} 
                    salesChangePercentage={8} 
                />
                <DashboardCard1 
                    title="Public Transport Usage" 
                    salesAmount={60} 
                    salesChangePercentage={1} 
                />
                <DashboardCard1 
                    title="Electric Vehicle Usage" 
                    salesAmount={320} 
                    salesChangePercentage={10} 
                />
              </div>
              <EcoRecommendations/>
            </div>
          </main>
  
          <Banner />
  
        </div>
      </div>
    );
}

export default EcoTrackerHome