import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ queryData, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter suggestions based on input
    if (value.trim() !== '') {
      const suggestions = queryData.filter((item) =>
        item.heading.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(suggestions);
    } else {
      setFilteredSuggestions([]);
    }

    // Show suggestions only if there is input
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.heading); // Set the input to selected suggestion
    setFilteredSuggestions([]); // Clear suggestions after selection
    setShowSuggestions(false); // Hide suggestions
    onSelect(suggestion); // Pass selected suggestion to parent component
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowSuggestions(false); // Hide suggestions if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mb-6 w-full max-w-md mx-auto" ref={inputRef}>
      {/* Input Field */}
      <div className="relative">
        <input
          type="text"
          className="w-full p-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search Eco Topics..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => searchTerm.trim() !== '' && setShowSuggestions(true)} // Re-show suggestions on focus if input is not empty
        />
        {/* Magnifying Glass Icon */}
        <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
            />
          </svg>
        </span>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-20">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.heading}
            </li>
          ))}
        </ul>
      )}

      {/* No Suggestions Found */}
      {showSuggestions && searchTerm.trim() !== '' && filteredSuggestions.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-center text-gray-500">
          No suggestions found
        </div>
      )}
    </div>
  );
};

export default SearchBar;
