import React from 'react';
import LineChart from '../../../charts/LineChart01';
import { chartAreaGradient } from '../../../charts/ChartjsConfig';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../../utils/Utils';

// Function to determine WQI level based on the WQI value
const getWqiLevel = (wqiValue) => {
  if (wqiValue >= 0 && wqiValue <= 50) {
    return { level: 'Excellent', color: 'green' };
  } else if (wqiValue >= 51 && wqiValue <= 75) {
    return { level: 'Good', color: 'blue' };
  } else if (wqiValue >= 76 && wqiValue <= 100) {
    return { level: 'Fair', color: 'yellow' };
  } else if (wqiValue >= 101 && wqiValue <= 150) {
    return { level: 'Poor', color: 'orange' };
  } else if (wqiValue >= 151 && wqiValue <= 200) {
    return { level: 'Very Poor', color: 'red' };
  } else if (wqiValue >= 201) {
    return { level: 'Critical', color: 'purple' };
  }
  return { level: 'Unknown', color: 'gray' }; // Default case
};

function WaterQualityCard({
  wqiValue = 88, // Default WQI value
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
  chartDataValues = [85, 88, 90, 89, 87, 91, 92, 93, 90, 89, 86, 84, 85], // Default WQI data values
}) {
  const { level: wqiLevel, color: wqiColor } = getWqiLevel(wqiValue);

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
            { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors[wqiColor][500])}, 0)` },
            { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors[wqiColor][500])}, 0.2)` },
          ]);
        },
        borderColor: tailwindConfig().theme.colors[wqiColor][500],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors[wqiColor][500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors[wqiColor][500],
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
          {/* Removed title */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Water Quality Index (WQI)</h2>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">WQI Level</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">{wqiValue}</div>
          <div className={`text-sm font-medium text-${wqiColor}-700 px-1.5 bg-${wqiColor}-500/20 rounded-full`}>
            {wqiLevel}
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          Measures the safety and cleanliness of water sources, assessing factors like pH, dissolved oxygen, turbidity, and contamination from chemicals.
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

export default WaterQualityCard;

