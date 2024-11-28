import React from "react";
import CountryCarousel from "./CountryCarousel";
import DashboardCard from "../../partials/dashboard/DashboardCard01";
import { ChipIcon } from "./CountryChip";
import { DefaultTimeline } from "./DefaultTimeline";
import CountryAccordians from "./CountryAccordian";
import Countryimages from "./CountryDe";
import { ProgressLabelOutside } from "./ProgressBar";
import CapitalCard from "./Cards/CapitalCard";
import PopulationCard from "./Cards/NumberCard";
import AreaCard from "./Cards/Area";
import AirQualityCard from "./Cards/AirQualtityCard";
import WaterQualityCard from "./Cards/WaterQualityCard";
import DeforestationCard from "./Cards/DeforestationCard";
import CarbonFootprintCard from "./Cards/CarbonFootPrintCard";
import BiodiversityIndexCard from "./Cards/BiodiversityCard";
import WasteManagementCard from "./Cards/WasteManagementCard";
import ExternalLinksSection from "./Cards/ExternalLinks";

const CountryDetails = ({ countryData }) => {
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{countryData.name}</h2>
          <p className="text-gray-600 leading-relaxed">{countryData.details}</p>
        </div>
        {/* Right: Highlights Carousel */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Highlights</h2>
          <CountryCarousel images={countryData.carouselImages} />
        </div>
      </section>
      <div className="mt-6 bg-white p-6 shadow rounded-md">
        <ProgressLabelOutside EPI={countryData.epiValue} />
      </div>

      {/* Overview Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
        <div className="flex gap-x-4 flex-wrap">
          <CapitalCard
            city={countryData.capitalCity}
            country={countryData.name}
            description={countryData.capitalDescription}
            backgroundImage={countryData.backgroundImage}
          />
          <PopulationCard
            populationData={countryData.population}
            populationGrowth={countryData.populationGrowth}
            chartLabels={countryData.populationGrowth.chartLabels}
            chartData={countryData.populationGrowth.chartData}
          />
          <AreaCard areaData={countryData.areaData} />
        </div>
      </section>

      {/* Environment Policy Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Environmental Policy Overview
        </h2>
        <p className="text-gray-600 leading-relaxed">{countryData.environmentalPolicyOverview}</p>
      </section>

      {/* Key Metrics Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Metrics</h2>
  <div className="flex flex-wrap justify-center gap-6 p-4">
    <div className="w-full sm:w-1/2 md:w-1/3">
      <AirQualityCard
        aqiValue={countryData.airQualityIndex.value} 
        chartLabels={countryData.airQualityIndex.chartLabels}
        chartDataValues={countryData.airQualityIndex.chartData}
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3">
      <WaterQualityCard
        wqiValue={countryData.waterQualityIndex.value}
        chartLabels={countryData.waterQualityIndex.chartLabels}
        chartDataValues={countryData.waterQualityIndex.chartData}
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3">
      <DeforestationCard 
        deforestationRate={countryData.deforestationRate.value}
        deforestationRates={countryData.deforestationRate.chartData}
        chartLabels={countryData.deforestationRate.chartLabels}
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3">
      <CarbonFootprintCard 
        carbonFootprint={countryData.carbonFootprint}
        carbonFootprintData={countryData.carbonFootprintData}
        chartLabels={countryData.carbonFootprintLabels}
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3">
      <BiodiversityIndexCard 
        biodiversityScore={countryData.biodiversityScore.value}
        biodiversityScores={countryData.biodiversityScore.chartData}
        chartLabels={countryData.biodiversityScore.chartLabels}
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3">
      <WasteManagementCard 
        recyclingRate={countryData.recyclingRate.value}
        recyclingData={countryData.recyclingRate.chartData}
        chartLabels={countryData.recyclingRate.chartLabels}
      />
    </div>
  </div>
      </section>

      {/* Timeline Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Timeline</h2>
        <DefaultTimeline timelineItems={countryData.timelineEvents} />
      </section>

      {/* Policy Categories Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Policy Categories</h2>
        <CountryAccordians cardData={countryData.defaultCardData} />
      </section>

      {/* International Commitments Section */}
      <section className="mt-6 bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          International Agreements & Commitments
        </h2>
        <ChipIcon chipData={countryData.chipData} />
      </section>

      {/* External Links Section */}
      <ExternalLinksSection linksData={countryData.defaultLinksData} />
    </div>
  );
};

export default CountryDetails;
