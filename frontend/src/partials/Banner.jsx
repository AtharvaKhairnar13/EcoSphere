import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Bot from '../images/chatbot-removebg-preview.png';

function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const navigate = useNavigate(); // Initialize navigate function

  const query = new URLSearchParams(location.search);
  const template = query.get('template');
  const liteLink =
    template === 'laravel'
      ? 'https://github.com/cruip/laravel-tailwindcss-admin-dashboard-template'
      : 'https://github.com/cruip/tailwind-dashboard-template';

  const handleBannerClick = () => {
    navigate('/eco-bot'); // Navigate to the EcoBot page
  };

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-gray-200 border border-transparent dark:border-gray-700/60 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div
              className="flex items-center space-x-4 text-gray-500 cursor-pointer"
              onClick={handleBannerClick} // Add onClick handler
            >
              <a
                className="font-medium text-gray-50 hover:underline"
                href={liteLink}
                target="_blank"
                rel="noreferrer"
              >
                {/* Optional: Add text or icon for the first link */}
              </a>

              <a
                className="flex items-center font-medium text-emerald-400 hover:underline"
                href="#"
                onClick={(e) => e.preventDefault()} // Prevent default link behavior
              >
                <img
                  className="w-12 h-12 rounded-full mr-2"
                  src={Bot}
                  width="50"
                  height="50"
                  alt="User"
                />
              </a>
            </div>
            <button
              className="text-gray-500 hover:text-gray-400 pl-2 ml-3 border-l border-gray-700/60"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
