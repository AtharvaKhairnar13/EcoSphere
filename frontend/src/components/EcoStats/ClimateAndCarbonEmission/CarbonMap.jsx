import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

// GeoJSON URL for the world map
const geoUrl =
  "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

// Adjusted color scale for the large range of population density
const colorScale = scaleLinear()
  .domain([0, 6000000]) // Adjusted the domain to match the data range
  .range(["#a72bb5", "#0376db"]);

const CarbonMap = () => {
  const [countries, setCountries] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Fetch country data
  const getData = () => {
    fetch("http://localhost:4000/countries", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Countries data:", data); // Debugging line
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  };

  // Effect to fetch data when component mounts
  useEffect(() => {
    getData();
  }, []);

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
          {countries.length > 0 ? (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryData = countries.find(
                    (s) => s.ISO3 === geo.id
                  );
                  const populationDensity = countryData
                    ? parseFloat(countryData.population_density)
                    : 0;

                  // Determine the fill color for each country
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

export default CarbonMap;
