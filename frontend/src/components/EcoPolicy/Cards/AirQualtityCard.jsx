import React from 'react';
import LineChart from '../../../charts/LineChart01';
import { chartAreaGradient } from '../../../charts/ChartjsConfig';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../../utils/Utils';

// Function to determine AQI level based on the AQI value
const getAqiLevel = (aqiValue) => {
  if (aqiValue >= 0 && aqiValue <= 50) {
    return { level: 'Good', color: 'green' };
  } else if (aqiValue >= 51 && aqiValue <= 100) {
    return { level: 'Moderate', color: 'yellow' };
  } else if (aqiValue >= 101 && aqiValue <= 150) {
    return { level: 'Unhealthy for Sensitive Groups', color: 'orange' };
  } else if (aqiValue >= 151 && aqiValue <= 200) {
    return { level: 'Unhealthy', color: 'red' };
  } else if (aqiValue >= 201 && aqiValue <= 300) {
    return { level: 'Very Unhealthy', color: 'purple' };
  } else if (aqiValue >= 301 && aqiValue <= 500) {
    return { level: 'Hazardous', color: 'brown' };
  }
  return { level: 'Unknown', color: 'gray' }; // Default case
};

function AirQualityCard({
  aqiValue = 85, // Default AQI value
  chartLabels = [
    '12-01-2022',
    '01-01-2023',
    '02-01-2023',
    '03-01-2023',
    '04-01-2023',
    '05-01-2023',
    '06-01-2023',
    '07-01-2023',
    '08-01-2023',
    '09-01-2023',
    '10-01-2023',
    '11-01-2023',
    '12-01-2023',
  ], // Default chart labels
  chartDataValues = [50, 65, 70, 55, 60, 75, 85, 90, 80, 70, 65, 60, 55], // Default AQI data values
}) {
  const { level: aqiLevel, color: aqiColor } = getAqiLevel(aqiValue);

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        data: chartDataValues,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors[aqiColor][500])}, 0)` },
            { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors[aqiColor][500])}, 0.2)` },
          ]);
        },
        borderColor: tailwindConfig().theme.colors[aqiColor][500],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors[aqiColor][500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors[aqiColor][500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <div className="px-5 pt-5">
      <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Air Quality Index (AQI)</h2>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">AQI Level</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">{aqiValue}</div>
          <div className={`text-sm font-medium text-${aqiColor}-700 px-1.5 bg-${aqiColor}-500/20 rounded-full`}>
            {aqiLevel}
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          Measures levels of air pollution, including particulate matter (PM2.5), nitrogen dioxide (NO2), and carbon monoxide (CO).
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default AirQualityCard;
