import React from 'react';
import LineChart from '../../../charts/LineChart01';
import { chartAreaGradient } from '../../../charts/ChartjsConfig';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../../utils/Utils';

function BiodiversityIndexCard({
  biodiversityScore = 62, // Default biodiversity score
  biodiversityScores = [78, 76, 75, 74, 72, 71, 70, 68, 67, 65, 64, 63, 62], // Default biodiversity score data
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
}) {
  // Determine the biodiversity trend based on the current score
  const trend = biodiversityScore < biodiversityScores[biodiversityScores.length - 1] ? 'Declining' : 'Improving';
  const trendColor = trend === 'Declining' ? 'red' : 'green';

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        data: biodiversityScores,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors[trendColor][700])}, 0)` },
            { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors[trendColor][700])}, 0.2)` },
          ]);
        },
        borderColor: tailwindConfig().theme.colors[trendColor][700],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors[trendColor][700],
        pointHoverBackgroundColor: tailwindConfig().theme.colors[trendColor][700],
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
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Biodiversity Index</h2>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Biodiversity Score</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">{biodiversityScore}</div>
          <div className={`text-sm font-medium text-${trendColor}-700 px-1.5 bg-${trendColor}-500/20 rounded-full`}>
            {trend}
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          Evaluates the diversity and health of ecosystems based on the number of species and threats to ecosystems.
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

export default BiodiversityIndexCard;
