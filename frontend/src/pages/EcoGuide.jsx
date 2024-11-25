import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import CarouselGuide from '../components/EcoGuide/CarouselGuide';
import images from '../database/images';
import { Avatar } from '@material-tailwind/react';
import Footer from '../components/EcoGuide/Footer';
import Topics from '../components/EcoGuide/Topics';
import Card1 from '../components/EcoGuide/Card1';
import Card2 from '../components/EcoGuide/Card2';
import HeadingCard from '../components/EcoGuide/HeadingCard';

const EcoGuide = () => {
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
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
  
              {/* Dashboard actions */}
              <div className="sm:flex sm:justify-between sm:items-center mb-8">
  
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">EcoGuide</h1>
                </div>
  
              </div>
  
              {/* Cards */}
              
              <div className="px-2 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-2 bg-white dark:bg-black p-6">
  <div className="bg-gray-200 rounded-lg p-6 text-center mb-8"> {/* Added 'mb-8' for padding */}
    <h3 className="text-gray-500 uppercase tracking-widest mb-2 text-sm">Welcome to EcoGuide</h3>
    <p className="text-2xl font-semibold text-gray-800">
      Craft narratives <span className="inline-block">✍️</span> that ignite 
      <span className="text-red-500">inspiration</span> <span className="inline-block">💡</span>, 
      <span className="text-red-500">knowledge</span> <span className="inline-block">📖</span>, and 
      <span className="text-red-500">entertainment</span> <span className="inline-block">🎬</span>
    </p>
  </div>
  
  {/* Carousel/Slider Section with Bottom Margin */}
  <CarouselGuide images={images} className="mb-8" />

  {/* Latest Articles Section */}
  <div className="flex justify-between items-center py-4 px-6 pt-10">
    <h1 className="text-3xl font-semibold">Latest Articles</h1>
    <h1 className="text-blue-500 cursor-pointer hover:underline flex items-center">
      View all
      <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l6 6-6 6" />
      </svg>
    </h1>
  </div>
  
  {/* Cards Container with Padding & Scrollbar */}
  <div className="overflow-x-auto pb-8">
    <div className="flex space-x-4 px-2">
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
    </div>
  </div>

  {/* Other Sections Follow the Same Structure */}
  <div className="flex justify-between items-center py-4 px-6 pt-10 pb-10">
    <h1 className="text-3xl font-semibold">Must Read</h1>
    <h1 className="text-blue-500 cursor-pointer hover:underline flex items-center">
      View all
      <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l6 6-6 6" />
      </svg>
    </h1>
  </div>
  
  {/* Horizontal Scrolling for Cards */}
  <div className="overflow-x-auto pb-8">
    <div className="flex space-x-4 px-2">
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
    </div>
  </div>

  {/* You can continue this structure for other sections like Editors Pick, Topics, etc. */}

</div>

  
            </div>
          </main>
  
          <Banner />
  
        </div>
      </div>
    );
}

export default EcoGuide