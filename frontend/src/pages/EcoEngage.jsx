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
import { useGetPostsGroupedByCountryQuery } from '../features/api/apiSlices/postApiSlice';
import { useGetCampaignsByCountryQuery } from '../features/api/apiSlices/campaignApiSlice';

const EcoEngage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("IN");

  // Fetch post data grouped by country
  const { data: postData, isLoading: postLoading } = useGetPostsGroupedByCountryQuery(selectedCountry);
  const selectedCountryData = postData?.find((country) => country.country === selectedCountry);
  const countPositive = selectedCountryData?.sentimentScores?.positive || 0;
  const countNegative = selectedCountryData?.sentimentScores?.negative || 0;
  const trendingTopics = selectedCountryData?.trendingTopics || [];

  // Fetch campaigns by country
  const { data: campaigns, isLoading: campaignLoading, error: campaignError } = useGetCampaignsByCountryQuery(selectedCountry);

  // Country dropdown options
  const countryOptions = [
    { value: "IN", label: "India" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
    { value: "AU", label: "Australia" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page title */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">EcoEngage</h1>
              </div>
            </div>

            {/* Country selection dropdown */}
            <div className="max-w-md mx-auto mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Select Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              >
                {countryOptions.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>

            {/* EcoPulse Section */}
            <EcoSentiment
              selectedCountry={selectedCountry}
              countPositive={countPositive}
              countNegative={countNegative}
              trendingIssues={trendingTopics}
            />

            {/* Campaigns Section */}
            <div className="my-8">
              <h2 className="text-xl font-semibold mb-4">Campaigns in {selectedCountry}</h2>
              {campaignLoading ? (
                <p>Loading campaigns...</p>
              ) : campaignError ? (
                <p>No Campaigns Started for this country</p>
              ) : (
                <CampaignList selectedCountry={selectedCountry} />
              )}
            </div>

            {/* Add Campaign Form */}
            <CampaignForm selectedCountry={selectedCountry} />

            {/* Impact Tracker Section */}
            <ImpactTracker />

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
};

export default EcoEngage;