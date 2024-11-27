import React, { useState } from 'react';

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
import CarouselLab from '../components/EcoLab/CarouselLab';
import images from '../database/images';
import { CardLab } from '../components/EcoLab/Card';
import Simulatorimages from '../components/EcoLab/Simulator';

const EcoLab = () => {
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
            <div className="px-0 sm:px-1 lg:px-8 py-2 w-full max-w-9xl">
  
              {/* Dashboard actions */}
              <div className="sm:flex sm:justify-between sm:items-center mb-8">
  
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">EcoLab</h1>
                </div>
              </div>
  
              {/* Cards */}
              <CarouselLab images={Simulatorimages}/>
              <div className="flex flex-wrap gap-10 justify-start mx-24 pl-12 p-15 my-20">
                <CardLab />
              </div>
            </div>
          </main>
  
          <Banner />
  
        </div>
      </div>
    );
}

export default EcoLab