import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

// Adjusted color scale for the large range of population density
const colorScale = scaleLinear()
  .domain([0, 6000000]) // Adjusted the domain to match the data range
  .range(["#a72bb5", "#0376db"]);

const Map = ({ countriesData }) => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Effect to log countries data when it's received (for debugging)
  

  return (
    <div className="flex justify-center items-center m-0 p-6">
      <div className="w-[70vh] h-[50vh] shadow-xl rounded-lg overflow-hidden bg-white p-2 relative">
        {/* Tooltip for Hovered Country */}
        {hoveredCountry && (
          <div
            style={{
              position: "absolute",
              top: "20px", // Fixed position from the top
              right: "0px", // Fixed position from the right
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
              pointerEvents: "none",
              zIndex: 10,
              maxWidth: "200px",
            }}
          >
            <strong>{hoveredCountry.name}</strong>
            <br />
            Population Density:{" "}
            {hoveredCountry.population_density
              ? hoveredCountry.population_density
              : "Unknown"}
            <br />
            Sentiments:
            <br />
            Positive: {hoveredCountry.sentimentScores?.positive || 0}
            <br />
            Negative: {hoveredCountry.sentimentScores?.negative || 0}
            <br />
            Neutral: {hoveredCountry.sentimentScores?.neutral || 0}
          </div>
        )}

        <ComposableMap
          width={1400}
          height={990}
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 307,
          }}
          style={{
            backgroundColor: "#a7c7e7", // Sea blue color for the background
          }}
        >
          {countriesData && countriesData.length > 0 ? (
            <Geographies geography="https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json">
              {({ geographies }) =>
                geographies.map((geo) => {
                  // Find the corresponding country data by ISO3 code
                  const countryData = countriesData.find((s) => s.ISO3 === geo.id);
                  const populationDensity = countryData
                    ? parseFloat(countryData.population_density)
                    : 0;

                  // Get the sentiment scores
                  const sentimentScores = countryData
                    ? countryData.sentimentScores
                    : { positive: 0, negative: 0, neutral: 0 };

                  // Determine the fill color based on population density
                  const fillColor =
                    countryData && !isNaN(populationDensity)
                      ? colorScale(populationDensity)
                      : "#EEE";

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        hoveredCountry && hoveredCountry.ISO3 === geo.id
                          ? "#FFA500" // Change color on hover
                          : fillColor
                      }
                      stroke="#111"
                      strokeWidth={0.5}
                      onMouseEnter={() => {
                        setHoveredCountry({
                          ISO3: geo.id,
                          name: countryData ? countryData.name : "Unknown",
                          population_density: populationDensity,
                          sentimentScores, // Pass sentiment data to tooltip
                        });
                      }}
                      onMouseLeave={() => setHoveredCountry(null)}
                    />
                  );
                })
              }
            </Geographies>
          ) : (
            <p className="text-center text-gray-600">Loading...</p>
          )}
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
