import React from 'react';
import LineChart from '../../../charts/LineChart01';
import { chartAreaGradient } from '../../../charts/ChartjsConfig';
import { tailwindConfig, hexToRGB } from '../../../utils/Utils';

function PopulationCard({ populationData, populationGrowth, chartLabels, chartData }) {

  const chartConfig = {
    labels: chartLabels || [
      '12-01-2010',
      '01-01-2011',
      '01-01-2012',
      '01-01-2013',
      '01-01-2014',
      '01-01-2015',
      '01-01-2016',
      '01-01-2017',
      '01-01-2018',
      '01-01-2019',
      '01-01-2020',
      '01-01-2021',
      '01-01-2022',
      '01-01-2023',
    ],
    datasets: [
      {
        data: chartData || [20000000, 21000000, 22000000, 23000000, 24000000, 25000000, 26000000, 27000000, 28000000, 29000000, 30000000, 31000000, 32000000, 33000000],
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0)` },
            { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.2)` },
          ]);
        },
        borderColor: tailwindConfig().theme.colors.blue[500],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.blue[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
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
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Country Population</h2>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Population</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">{populationData}</div>
          {populationGrowth && (
            <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">
              {populationGrowth > 0 ? `+${populationGrowth}%` : `${populationGrowth}%`}
            </div>
          )}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartConfig} width={389} height={128} />
      </div>
    </div>
  );
}

export default PopulationCard;
