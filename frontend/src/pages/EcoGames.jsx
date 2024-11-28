import React, { useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner from '../partials/Banner';
import CarouselGames from '../components/EcoGames/CarouselGames';
import images from '../database/images';
import { GamesCard } from '../components/EcoGames/GamesCard';
import EcoGamesLogo from "../images/EcoGames.png";
import { ChipIcon } from '../components/EcoGames/ChipIcon';
import Gamesimages from '../components/EcoGames/GamesCarouselImages';

const EcoGames = () => {
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
            <div className="px-4 sm:px-6 lg:px-8 w-full max-w-9xl mx-auto">
  
              {/* Dashboard actions */}
              <div className="sm:flex sm:justify-between sm:items-center pl-0 sm:pl-24 p-5">
                <h1 className="text-3xl sm:text-3xl text-gray-800 dark:text-gray-100 font-extrabold leading-tight tracking-wider flex items-center space-x-2 hover:text-blue-500 transition-all duration-300">
                  <span className="font-extrabold">EcoGames</span>
                </h1>
              </div>

              <CarouselGames images={Gamesimages}/>

              {/* Cards */}
              <div className="flex flex-wrap gap-9 justify-center mx-auto p-20">
                <GamesCard />
                
              </div>

  
            </div>
          </main>
  
          <Banner />
  
        </div>
      </div>
    );
}

export default EcoGames