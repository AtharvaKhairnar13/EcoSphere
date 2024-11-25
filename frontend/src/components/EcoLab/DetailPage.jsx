import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Banner from '../../partials/Banner';
import images from '../../database/images';
import CarouselLab from './CarouselLab';

const DetailPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <div className="flex h-screen overflow-hidden">
  
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
  
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
          <main className="grow">
  <div className="px-6 sm:px-8 lg:px-10 py-12 w-full max-w-9xl mx-auto"> {/* Increased padding */}
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"> {/* Increased padding */}
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">App Title</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="ml-2 text-gray-500 text-sm">(123 reviews)</span>
          </div>
        </div>
        <div>
          <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none">Play</button>
        </div>
      </div>

      {/* Increased height of the carousel */}
      <div className="mb-6 h-[400px]"> {/* Adjusted height to 400px or you can use h-96 */}
        <CarouselLab images={images} />
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-700 mb-4">
          This is a detailed description of the app, where you can explain the features, benefits, and everything that the app offers. Users can get an idea of what the app does and how it helps them.
        </p>
        <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li className="text-gray-700">Feature 1: High-speed cloud syncing</li>
          <li className="text-gray-700">Feature 2: Offline capabilities for remote work</li>
          <li className="text-gray-700">Feature 3: Integrated task management tools</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Developer Information</h3>
        <p className="text-gray-700 mt-2">Developer Name: Awesome Apps Inc.</p>
        <a href="#" className="text-blue-600 mt-2 inline-block">Visit Developer Website</a>
      </div>

      <div className="border-t pt-6">
        <p className="text-sm text-gray-600">Version 1.2.3 - Updated 3 days ago</p>
        <p className="text-sm text-gray-600">Languages: English</p>
      </div>
    </div>



  
            </div>
          </main>
  
          <Banner />
  
        </div>
      </div>
    );
}

export default DetailPage