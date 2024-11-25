import React, { useState, useRef, useEffect } from 'react';

const HorizontalFilterBar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [isAuthorOpen, setIsAuthorOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Refs for dropdowns
  const dropdownRefs = {
    category: useRef(null),
    tag: useRef(null),
    author: useRef(null),
    date: useRef(null),
    sort: useRef(null),
  };

  // Function to toggle dropdowns
  const toggleDropdown = (setDropdown) => {
    setDropdown((prev) => !prev);
  };

  // Close dropdowns if clicked outside
  const handleClickOutside = (event) => {
    for (const key in dropdownRefs) {
      if (
        dropdownRefs[key].current &&
        !dropdownRefs[key].current.contains(event.target)
      ) {
        if (key === 'category') setIsCategoryOpen(false);
        if (key === 'tag') setIsTagOpen(false);
        if (key === 'author') setIsAuthorOpen(false);
        if (key === 'date') setIsDateOpen(false);
        if (key === 'sort') setIsSortOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-around p-4 bg-white rounded-lg shadow-md mb-6 border border-gray-200">
      {/* Category Filter */}
      <div className="relative" ref={dropdownRefs.category}>
        <button
          onClick={() => toggleDropdown(setIsCategoryOpen)}
          className="flex items-center text-gray-700 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 transition duration-200"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M3 9h18m-6 12H3m0-12h18m-6 12H3m6 0h12M3 9h18" />
          </svg>
          <span>Category</span>
        </button>
        {isCategoryOpen && (
          <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg mt-2 border border-gray-200">
            <ul className="p-2">
              {['Technology', 'Health', 'Finance', 'Education', 'Lifestyle'].map((item) => (
                <li key={item} className="flex items-center hover:bg-gray-100 transition duration-200">
                  <input
                    id={item.toLowerCase().replace(/\s+/g, '-')}
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={item.toLowerCase().replace(/\s+/g, '-')}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tag Filter */}
      <div className="relative" ref={dropdownRefs.tag}>
        <button
          onClick={() => toggleDropdown(setIsTagOpen)}
          className="flex items-center text-gray-700 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 transition duration-200"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M8 16h8m-4-8h4m-4 4h4m-8 0h4m-4-4h4M4 6h8m4 0h4m-4 4h4M4 18h8m4 0h4" />
          </svg>
          <span>Tags</span>
        </button>
        {isTagOpen && (
          <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg mt-2 border border-gray-200">
            <ul className="p-2">
              {['JavaScript', 'React', 'CSS', 'Node.js', 'Python'].map((item) => (
                <li key={item} className="flex items-center hover:bg-gray-100 transition duration-200">
                  <input
                    id={item.toLowerCase().replace(/\s+/g, '-')}
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={item.toLowerCase().replace(/\s+/g, '-')}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Author Filter */}
      <div className="relative" ref={dropdownRefs.author}>
        <button
          onClick={() => toggleDropdown(setIsAuthorOpen)}
          className="flex items-center text-gray-700 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 transition duration-200"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2h-2M4 4h2a2 2 0 012 2v14a2 2 0 01-2 2H4M4 8h8m-8 4h8m-8 4h8" />
          </svg>
          <span>Author</span>
        </button>
        {isAuthorOpen && (
          <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg mt-2 border border-gray-200">
            <ul className="p-2">
              {['John Doe', 'Jane Smith', 'Emily Johnson', 'Michael Brown'].map((item) => (
                <li key={item} className="flex items-center hover:bg-gray-100 transition duration-200">
                  <input
                    id={item.toLowerCase().replace(/\s+/g, '-')}
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={item.toLowerCase().replace(/\s+/g, '-')}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Date Filter */}
      <div className="relative" ref={dropdownRefs.date}>
        <button
          onClick={() => toggleDropdown(setIsDateOpen)}
          className="flex items-center text-gray-700 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 transition duration-200"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v2M8 2v2M4 6h16M4 10h16M4 14h16M4 18h16M4 22h16" />
          </svg>
          <span>Date</span>
        </button>
        {isDateOpen && (
          <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg mt-2 border border-gray-200">
            <ul className="p-2">
              {['Last 24 hours', 'Last week', 'Last month', 'Custom range'].map((item) => (
                <li key={item} className="flex items-center hover:bg-gray-100 transition duration-200">
                  <input
                    id={item.toLowerCase().replace(/\s+/g, '-')}
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={item.toLowerCase().replace(/\s+/g, '-')}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Sort By Filter */}
      <div className="relative" ref={dropdownRefs.sort}>
        <button
          onClick={() => toggleDropdown(setIsSortOpen)}
          className="flex items-center text-gray-700 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 transition duration-200"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Sort By</span>
        </button>
        {isSortOpen && (
          <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg mt-2 border border-gray-200">
            <ul className="p-2">
              {['Newest', 'Oldest', 'Most Popular', 'Highest Rated'].map((item) => (
                <li key={item} className="flex items-center hover:bg-gray-100 transition duration-200">
                  <input
                    id={item.toLowerCase().replace(/\s+/g, '-')}
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={item.toLowerCase().replace(/\s+/g, '-')}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalFilterBar;
