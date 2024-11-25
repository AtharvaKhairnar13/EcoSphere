import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Banner from '../../partials/Banner';
import Datepicker from '../Datepicker';
import NavbarStat from './Navbar';
import CarbonMap from './ClimateAndCarbonEmission/CarbonMap';
import DashboardCard01 from '../../partials/dashboard/DashboardCard01';
import DashboardCard05 from '../../partials/dashboard/DashboardCard05';
import DashboardCard04 from '../../partials/dashboard/DashboardCard04';
import DashboardCard06 from '../../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../../partials/dashboard/DashboardCard11';

const EcoStatWaste = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex items-center justify-center p-4">
          <NavbarStat />
        </div>
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/* Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main className="grow">
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                        {/* Dashboard actions */}
                        <div className="sm:flex sm:justify-between sm:items-center mb-8">

                            {/* Left: Title */}
                            <div className="mb-4 sm:mb-0">
                                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                                    EcoLearn
                                </h1>
                            </div>

                            {/* Right: Actions */}
                            <div className="flex items-center space-x-2">
                                <Datepicker align="right" />
                                {/* Add view button */}
                                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                                    <svg
                                        className="fill-current shrink-0 xs:hidden"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                                    </svg>
                                    <span className="max-xs:sr-only">Add View</span>
                                </button>
                            </div>
                        </div>

                        {/* Flex Layout for Cards and CarbonMap */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* CarbonMap (takes more space on larger screens) */}
                            <div className="flex-1 md:mr-6">
                                <CarbonMap />
                            </div>
                            {/* Dashboard Cards in a column */}
                            <div className="flex flex-col gap-4">
                                <DashboardCard01 />
                                <DashboardCard01 />
                            </div>
                        </div>

                        {/* Flex rows for other cards */}
                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex-1 min-w-[300px]">
                                <DashboardCard01 />
                            </div>
                            <div className="flex-1 min-w-[300px]">
                                <DashboardCard01 />
                            </div>
                            <div className="flex-1 min-w-[300px]">
                                <DashboardCard01 />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex-1 min-w-[300px]">
                                <DashboardCard04 />
                            </div>
                            <div className="flex-1 min-w-[300px]">
                                <DashboardCard05 />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex-1 min-w-[300px]">
                                <DashboardCard08 />
                            </div>
                            <div className="flex-1 min-w-[300px]">
                                <DashboardCard09 />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex-1 min-w-[300px]">
                                <DashboardCard10 />
                            </div>
                            <div className="flex-1 min-w-[300px]">
                                <DashboardCard11 />
                            </div>
                        </div>
                    </div>
                </main>

                <Banner />
            </div>
        </div>
    );
};

export default EcoStatWaste;
