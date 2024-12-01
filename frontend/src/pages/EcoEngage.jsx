import React, { useState , useEffect} from 'react';

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
import { GoogleGenerativeAI } from "@google/generative-ai";

const EcoEngage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [preciseTrendingTopic, setPreciseTrendingTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch post data grouped by country
  const { data: postData, isLoading: postLoading } = useGetPostsGroupedByCountryQuery(selectedCountry);
  const selectedCountryData = postData?.find((country) => country.country === selectedCountry);
  const countPositive = selectedCountryData?.sentimentScores?.positive || 0;
  const countNegative = selectedCountryData?.sentimentScores?.negative || 0;
  const trendingTopics = selectedCountryData?.trendingTopics || [];
  const posts = selectedCountryData?.posts.map((post) => post.content) || [];

  // Fetch campaigns by country
  const { data: campaigns, isLoading: campaignLoading, error: campaignError } = useGetCampaignsByCountryQuery(selectedCountry);

  // Initialize GoogleGenerativeAI
  const API_KEY = "AIzaSyBXh39japRVTEI8lUu0_jUVaipeGqVdh70"; // Replace with your actual API key
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You are an AI assistant designed to analyze climate-related data and generate concise, relevant, and impactful trending topics. Focus on providing short, precise phrases that resonate with the given context and align with the theme of climate education and advocacy.",
  });

  const handleSubmitTrendingTopic = async (country, posts, trendingTopics) => {
    setLoading(true);
    try {
      // Construct the question for Gemini AI
      const question = `
        Given the following data for the country "${country}":
        Posts:
        ${posts.map((post, index) => `${index + 1}. ${post}`).join("\n")}
        
        Trending Topics with their values:
        ${trendingTopics.map((topic) => `${topic.topic}: ${topic.value}`).join("\n")}
        
        Based on this data, suggest a  most precise statement for each trending topic that represents the current climate discussions in "${country}".
      `;

      const result = await model.generateContent(question); // Ask Gemini AI the crafted question
      const response = await result.response;
      const text = await response.text();
      const plainText = text.replace(/[*#]/g, ""); // Remove markdown syntax

      
     
    // Split the response by new lines or other delimiters as needed
    const preciseTrendingTopics = plainText.split('\n').map(line => {
      const [topic, description] = line.split(':');
      return { topic: topic, description: description };
    }).filter(item => item.topic && item.description);

    // Set the preciseTrendingTopics state
    setPreciseTrendingTopic(preciseTrendingTopics);

  } catch (error) {
    console.error('Error generating trending topic:', error);
    setError('Error generating trending topic. Please try again.');
  } finally {
    setLoading(false);
  }
  };
  console.log('Precise Trending Topics:', JSON.stringify(preciseTrendingTopic, null, 2));

  // Trigger handleSubmitTrendingTopic whenever postData or selectedCountry changes
  useEffect(() => {
    if (selectedCountryData) {
      handleSubmitTrendingTopic(selectedCountry, posts, trendingTopics);
    }
  }, [selectedCountryData, selectedCountry]);

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
              <label className="block text-sm font-medium text-gray-700">Select Country</label>
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
              preciseTrendingTopic={preciseTrendingTopic} // Pass precise trending topic
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