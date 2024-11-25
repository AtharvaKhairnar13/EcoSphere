import React from "react";
import CountryCarousel from "./CountryCarousel";
import DashboardCard from "../../partials/dashboard/DashboardCard01";
import { ChipIcon } from "./CountryChip";
import { DefaultTimeline } from "./DefaultTimeline";
import CountryAccordians from "./CountryAccordian";
import Countryimages from "./CountryDe"
import { ProgressLabelOutside } from "./ProgressBar";

const CountryDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold text-gray-800">Country Dashboard</h1>
      </header>

      {/* Country Name and Highlights Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md flex flex-col md:flex-row items-start gap-8">
        {/* Left: Country Name */}
        <div className="flex-[2]">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Republic Of India</h2>
          <p className="text-gray-600 leading-relaxed">
          India, located in South Asia, is the world's largest democracy and a land of rich cultural heritage, 
          diverse traditions, and a rapidly growing economy. Known for its ancient history, vibrant festivals, and 
          diverse landscapes, India is a global hub for technology, innovation, and spirituality.
          </p>
        </div>
        {/* Right: Highlights Carousel */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Highlights</h2>
          <CountryCarousel images={Countryimages} />
        </div>
      </section>
      <div className="mt-6 bg-white p-6 shadow rounded-md">
        <ProgressLabelOutside/>
      </div>

      {/* Overview Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
        <div className="flex gap-x-4 flex-wrap ">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
      </section>

      {/* Environment Policy Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Environmental Policy Overview
        </h2>
        <p className="text-gray-600 leading-relaxed">
        India's environmental policy focuses on sustainable development while balancing economic growth 
        with the protection of natural resources. The country emphasizes conserving biodiversity, managing water 
        and air quality, reducing pollution, and addressing climate change through initiatives like the National 
        Action Plan on Climate Change (NAPCC). India has committed to enhancing renewable energy sources, 
        particularly solar and wind power, as part of its goal to reduce carbon emissions. The policy also supports 
        afforestation, waste management, and green technologies to promote ecological preservation for future 
        generations.
        </p>
      </section>

      {/* Key Metrics Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Metrics</h2>
        <div className="flex gap-x-4 flex-wrap gap-y-5">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Timeline</h2>
        <DefaultTimeline />
      </section>

      {/* Policy Categories Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Policy Categories</h2>
        <CountryAccordians/>
      </section>

      {/* International Commitments Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          International Agreements & Climate Commitments
        </h2>
        <ChipIcon />
      </section>

      {/* External Links Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">External Government Links</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Link 3
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CountryDetails;
