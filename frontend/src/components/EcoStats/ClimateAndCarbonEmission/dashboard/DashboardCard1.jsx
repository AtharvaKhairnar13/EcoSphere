import React from 'react';
import { Link } from 'react-router-dom';

import LineChart01 from '../../../../charts/LineChart01';
import DropdownEditMenu from '../../../DropdownEditMenu';
import { hexToRGB, tailwindConfig } from '../../../../utils/Utils';
import { chartAreaGradient } from '../../../../charts/ChartjsConfig';

function DashboardCard1({
  title = "Ranking", // Default title
  chartData = {
    labels: [
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
      '01-01-2024',
      '02-01-2024',
      '03-01-2024',
      '04-01-2024',
      '05-01-2024',
      '06-01-2024',
      '07-01-2024',
      '08-01-2024',
      '09-01-2024',
      '10-01-2024',
      '11-01-2024',
      '12-01-2024',
      '01-01-2025',
    ],
    datasets: [
      // Indigo line
      {
        data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532],
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
            { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` }
          ]);
        },
        borderColor: tailwindConfig().theme.colors.violet[500],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
      // Gray line
      {
        data: [532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234, 314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642],
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  },
  salesAmount = 24780,  // Default sales amount
  salesChangePercentage = 49,  // Default sales change percentage
  dropdownOptions = [
    { label: "Option 1", link: "#0" },
    { label: "Option 2", link: "#0" },
    { label: "Remove", link: "#0", color: "text-red-500" }
  ]
}) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h2>
          {/* Menu button */}
          {/* <DropdownEditMenu align="right" className="relative inline-flex">
            {dropdownOptions.map((option, index) => (
              <li key={index}>
                <Link 
                  className={`font-medium text-sm ${option.color ? option.color : "text-gray-600 dark:text-gray-300"} hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3`} 
                  to={option.link}>
                  {option.label}
                </Link>
              </li>
            ))}
          </DropdownEditMenu> */}
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">${salesAmount}</div>
          <div className={`text-sm font-medium ${salesChangePercentage >= 0 ? "text-green-700 bg-green-500/20" : "text-red-700 bg-red-500/20"} px-1.5 rounded-full`}>
            {salesChangePercentage >= 0 ? `+${salesChangePercentage}%` : `${salesChangePercentage}%`}
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart01 data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard1;
