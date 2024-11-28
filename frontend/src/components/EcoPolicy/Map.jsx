import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

// GeoJSON URL for the world map
const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

// Adjusted color scale with green, yellow, and red shades for EPI values (High EPI = Green, Low EPI = Red)
const colorScale = scaleLinear()
  .domain([20, 50, 80]) // Domain from 0 (worst EPI) to 100 (best EPI)
  .range(["#FF0000", "#FFFF00", "#008000"]); // Red to Yellow to Green

const Map = () => {
  const [countries, setCountries] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

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

  const handleCountryClick = (geo, countryData) => {
    console.log(`Selected country: ${countryData ? countryData.name : "Unknown"}`);
    setSelectedCountry(geo.id); // Set the selected country ISO3 code
  };

  return (
    <div className="flex justify-center items-center m-0 p-6">
      <div className="w-full h-[78vh] shadow-xl rounded-lg overflow-hidden bg-white p-2 relative">
        {/* Tooltip for Hovered Country */}
        {hoveredCountry && (
          <div
            style={{
              position: "absolute",
              top: "20px", // Fixed position from the top
              right: "20px", // Fixed position from the right
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
            EPI: {hoveredCountry.EPI ? hoveredCountry.EPI : "Unknown"}
          </div>
        )}
        <ComposableMap
          width={1400}
          height={760}
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 287,
          }}
          style={{
            backgroundColor: "#a7c7e7", // Sea blue color for the background
          }}
        >
          {countries.length > 0 ? (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryData = countries.find((s) => s.ISO3 === geo.id);
                  const EPI = countryData ? parseFloat(countryData.EPI_2024) : 0;

                  // Determine the fill color for each country
                  const fillColor =
                    countryData && !isNaN(EPI) ? colorScale(EPI) : "#EEE";

                  // Check if this country is selected
                  const isSelected = selectedCountry === geo.id;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        isSelected
                          ? "#FF6347" // Selected country color (Tomato)
                          : hoveredCountry && hoveredCountry.ISO3 === geo.id
                          ? "#FFF000" // Hovered country color (Orange)
                          : fillColor
                      }
                      stroke="#111"
                      strokeWidth={0.5}
                      onMouseEnter={() => {
                        setHoveredCountry({
                          ISO3: geo.id,
                          name: countryData ? countryData.name : "Unknown",
                          EPI: EPI,
                        });
                      }}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => handleCountryClick(geo, countryData)} // Handle country click
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
