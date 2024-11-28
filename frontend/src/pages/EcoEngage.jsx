import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import { HorizontalCard } from '../components/HorizontalCardPulse'; 
import EcoSentiment from '../components/EcoEngage/EcoSentiment';
import CampaignList from '../components/EcoEngage/CampaignList';
import CampaignForm from '../components/EcoEngage/CampaignForm';
import ImpactTracker from '../components/EcoEngage/ImpactTracker';

const EcoEngage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("India");
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
              <div className="sm:flex sm:justify-between sm:items-center mb-8">
  
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">EcoEngage</h1>
                </div>
  
              </div>
  
              {/* Cards */}
              <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Country Selection Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Select Country
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {/* EcoPulse Section */}
        <EcoSentiment selectedCountry={selectedCountry} />
        <CampaignList selectedCountry={selectedCountry} />
        <CampaignForm selectedCountry={selectedCountry} />
        <ImpactTracker />
      </main>
  
            </div>
          </main>
  
          <Banner />
  
        </div>
      </div>
    );
}

export default EcoEngage