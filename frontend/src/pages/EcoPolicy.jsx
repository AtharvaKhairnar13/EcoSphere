import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import CountryDetails from "../components/EcoPolicy/CountryDetails.jsx";
import Map from "../components/EcoPolicy/Map.jsx";
import countryData from "../components/EcoPolicy/CountryData/CountryData.js"
// Sample country list for search functionality
const countryList = [
  "India", "USA", "Russia", "China", "Brazil", "Canada", "Australia", "Germany", "France", "Japan", "UK"
  // Add all countries or import from an API
];

const EcoPolicy = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); // To manage suggestion visibility
  const [selectedCountry, setSelectedCountry] = useState(null); // Manage selected country state

  // Ref for search input and suggestions
  const searchRef = useRef(null);
  const suggestionRef = useRef(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredCountries([]);
    } else {
      const filtered = countryList.filter(country =>
        country.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  const handleSelectCountry = (country) => {
    setSearchQuery(country);
    setSelectedCountry(country); // Set the selected country
    setFilteredCountries([]); // Hide suggestions after selection
    setShowSuggestions(false); // Hide suggestions after selection
  };

  // Close suggestions if click is outside of the search input or suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target) && suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div className="relative z-10">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/* Site header */}
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

            {/* Search Bar */}
            <div className="relative mb-6" ref={searchRef}>
              <input
                type="text"
                value={searchQuery}
                onClick={toggleSuggestions} // Toggle suggestions on click
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search country..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {showSuggestions && filteredCountries.length > 0 && (
                <ul
                  ref={suggestionRef}
                  className="absolute left-0 right-0 bg-white border border-gray-300 shadow-lg mt-1 rounded-lg max-h-60 overflow-y-auto z-20"
                >
                  {filteredCountries.map((country, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectCountry(country)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Map Component */}
            <div className="z-0">
              <Map />
            </div>

            <hr />

            {/* CountryDetails Component */}
            <div>
              {selectedCountry && <CountryDetails countryData={countryData[selectedCountry]} />} {/* Pass selected country as a prop */}
            </div>
          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
};

export default EcoPolicy;
