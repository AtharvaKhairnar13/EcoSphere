import React from "react";

const InputBar = () => (
  <div className="flex items-center rounded-full px-4 py-2 w-full">
    <input
      type="text"
      placeholder="Type your message..."
      className="flex-grow bg-transparent focus:outline-none rounded-full text-gray-800 px-4"
    />
    <button className="w-12 h-12 flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 19.5L21 12 3.75 4.5v7.5l10.5 0L3.75 19.5z"
        />
      </svg>
    </button>
  </div>
);

export default InputBar;
