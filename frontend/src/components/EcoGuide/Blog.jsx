import React, { useState } from 'react';

const Blog = () => {

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main className="grow">
          <article className="bg-white pt-7 p-20 shadow-lg">

            <div className="flex justify-between items-center mb-4 pb-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Popular Articles</span>
              <span className="text-gray-500 text-sm">October 23, 2023</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 pb-4">Best Strategy to Achieve Profitable Harvest</h1>

            {/* Author section */}
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg" // Example avatar (you can replace it with any image URL)
                alt="Author"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <span className="text-gray-800 font-semibold">John Doe</span>
                <span className="text-gray-500 text-sm">Agriculture Expert</span>
              </div>
              {/* Favorite icon */}
              <button className="ml-auto text-gray-500 hover:text-red-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A5 5 0 0012 21a5 5 0 006.879-3.196m-1.748-4.574A4.978 4.978 0 0017 9a4.978 4.978 0 00-1.748-3.196M9.88 3.196A5 5 0 0112 3a5 5 0 012.121.804m0 0A5 5 0 0112 8a5 5 0 01-2.121-.804"
                  />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 text-lg mb-8">
              Optimal strategies for achieving profitable harvests involve a comprehensive approach to farm management, selection of appropriate crop varieties, implementation of efficient practices.
            </p>

            <img
              src="https://wallpaperaccess.com/full/1598226.jpg"
              alt="Orange on tree"
              className="w-[1200px] h-[700px] object-cover mx-auto"
            />

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Achieve a profitable harvest</h2>
              <p className="text-gray-600 mb-4">
                Achieving a profitable harvest involves a series of strategic steps... (content)
              </p>

              <ol className="list-decimal ml-6 text-gray-700 space-y-4">
                <li><strong>Selection of the Right Varieties and Seeds</strong> ... (content)</li>
                <li><strong>Efficient Crop Management</strong> ... (content)</li>
                <li><strong>Use of Agricultural Technology</strong> ... (content)</li>
                <li><strong>Choosing the Right Harvest Time</strong> ... (content)</li>
              </ol>
              <p className="text-center text-gray-500 mt-8">Thank you for reading! Stay tuned for more insights.</p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Blog;
