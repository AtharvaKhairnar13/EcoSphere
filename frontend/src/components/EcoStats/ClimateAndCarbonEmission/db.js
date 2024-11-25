// TotalCarbonEmissionData.js

export const totalCarbonEmissionData = [
    {
      title: "Total Carbon Emission",
      chartData: {
        labels: [
          '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', 
          '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', 
          '2016', '2017', '2018', '2019', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [2500, 2600, 2700, 2850, 3000, 3100, 3300, 3500, 3600, 3400, 3700, 3800, 4000, 4200, 4300, 4450, 4600, 4700, 4850, 5000, 4950, 5100, 5200],
            fill: true,
            borderColor: '#6366F1',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 5200,
      changePercentage: 5,
    },
  ];

// PerCapitaCarbonEmissionData.js

export const perCapitaCarbonEmissionData = [
    {
      title: "Per Capita Carbon Emission",
      chartData: {
        labels: [
          '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', 
          '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', 
          '2016', '2017', '2018', '2019', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [4.2, 4.3, 4.5, 4.7, 5.0, 5.3, 5.6, 5.8, 5.9, 5.7, 6.0, 6.2, 6.4, 6.7, 6.9, 7.0, 7.2, 7.3, 7.5, 7.8, 7.9, 8.1, 8.3],
            fill: true,
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 8.3,
      changePercentage: 2.5,
    },
  ];

  // TemperatureChangeData.js

export const temperatureChangeData = [
    {
      title: "Temperature Change",
      chartData: {
        labels: [
          '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', 
          '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', 
          '2016', '2017', '2018', '2019', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [0.6, 0.62, 0.65, 0.7, 0.75, 0.8, 0.83, 0.9, 0.92, 0.91, 0.95, 1.0, 1.1, 1.15, 1.2, 1.22, 1.25, 1.3, 1.33, 1.4, 1.45, 1.5, 1.52],
            fill: true,
            borderColor: '#F59E0B',
            backgroundColor: 'rgba(245, 158, 11, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 1.52,
      changePercentage: 1.3,
    },
  ];

  
// CountryRankingData.js

export const countryRankingData = [
    {
      title: "Ranking of Country",
      chartData: {
        labels: [
          '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', 
          '2018', '2019', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [10, 9, 8, 7, 7, 6, 5, 4, 4, 3, 3, 2, 1],
            borderColor: '#EF4444',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 1,
      changePercentage: 10,
    },
  ];
// CarbonIntensityData.js

export const carbonIntensityData = [
    {
      title: "Carbon Intensity of Energy",
      chartData: {
        labels: [
          '2000', '2005', '2010', '2015', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [600, 590, 580, 550, 530, 520, 510],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 510,
      changePercentage: -1.9,
    },
  ];
// SeaLevelRiseData.js

export const seaLevelRiseData = [
    {
      title: "Sea Level Rise",
      chartData: {
        labels: [
          '2000', '2005', '2010', '2015', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [2.0, 2.5, 3.0, 3.5, 4.0, 4.3, 4.5],
            borderColor: '#E11D48',
            backgroundColor: 'rgba(225, 29, 72, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 4.5,
      changePercentage: 5,
    },
  ];

  // HeatwavesData.js

export const heatwavesData = [
    {
      title: "Frequency of Heatwaves",
      chartData: {
        labels: [
          '2000', '2005', '2010', '2015', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [10, 12, 15, 18, 20, 22, 25],
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 25,
      changePercentage: 13.6,
    },
  ];

  // StormsData.js

export const stormsData = [
    {
      title: "Storms and Hurricanes Frequency",
      chartData: {
        labels: [
          '2000', '2005', '2010', '2015', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [8, 10, 12, 14, 16, 17, 18],
            borderColor: '#34D399',
            backgroundColor: 'rgba(52, 211, 153, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 18,
      changePercentage: 5.9,
    },
  ];
// WildfiresData.js

export const wildfiresData = [
    {
      title: "Wildfires",
      chartData: {
        labels: [
          '2000', '2005', '2010', '2015', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [150, 200, 250, 300, 350, 375, 400],
            borderColor: '#F97316',
            backgroundColor: 'rgba(249, 115, 22, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 400,
      changePercentage: 6.7,
    },
  ];
// RainfallPatternsData.js

export const rainfallPatternsData = [
    {
      title: "Rainfall Patterns",
      chartData: {
        labels: [
          '2000', '2005', '2010', '2015', '2020', '2021', '2022'
        ],
        datasets: [
          {
            data: [1200, 1150, 1100, 1080, 1050, 1040, 1030],
            borderColor: '#9333EA',
            backgroundColor: 'rgba(147, 51, 234, 0.2)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.2,
          },
        ],
      },
      amount: 1030,
      changePercentage: -1.0,
    },
  ];
      