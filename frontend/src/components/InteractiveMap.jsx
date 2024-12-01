import React, { useEffect } from "react";

// Define the interactive map component
const InteractiveMap = ({ dataSet }) => {
  useEffect(() => {
    // Check if Datamaps and window/document are available
    if (typeof window !== "undefined" && typeof document !== "undefined" && window.Datamap) {
      
      const map = new window.Datamap({
        element: document.querySelector("#hs-users-datamap"),  // Ensure the container is available
        projection: "mercator",  // Map projection type
        responsive: true,  // Allow responsive resizing
        fills: {
          defaultFill: "#d1d5db", // Default fill color for countries
          MAJOR: "#9ca3af",  // Color for major countries
        },
        data: dataSet,  // Provide the dataset
        geographyConfig: {
          borderColor: "rgba(0, 0, 0, .09)",  // Border color for countries
          highlightFillColor: "#3b82f6",  // Highlight color on hover
          highlightBorderColor: "#3b82f6",  // Border color on hover
          popupTemplate: (geo, data) => {
            // Popup template when hovering over a country
            return `<div class="hoverinfo">
              <strong>${data.customName || geo.properties.name}</strong><br>
              Active: ${data.active?.value || "N/A"} (${data.active?.percent || "N/A"}%)
              <br>New: ${data.new?.value || "N/A"} (${data.new?.percent || "N/A"}%)
            </div>`;
          },
        },
      });

      // Click event to interact with countries
      map.svg.selectAll(".datamaps-subunit").on("click", function (geography) {
        const countryData = dataSet[geography.id];
        if (countryData) {
          alert(`You clicked on ${countryData.customName || geography.properties.name}`);
        } else {
          alert(`No data available for ${geography.properties.name}`);
        }
      });
    } else {
      console.error("Datamaps is not loaded.");
    }
  }, [dataSet]);  // Re-run the effect when `dataSet` changes

  return (
    <div>
      {/* Map container */}
      <div id="hs-users-datamap" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default InteractiveMap;
