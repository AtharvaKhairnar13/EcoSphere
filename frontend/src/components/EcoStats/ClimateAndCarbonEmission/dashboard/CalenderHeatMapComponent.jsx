import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const CalendarHeatmapComponent = () => {
  // Sample data for the heatmap
  const mockData = [
    { date: '2024-11-01', count: 3 },
    { date: '2024-11-02', count: 1 },
    { date: '2024-11-05', count: 4 },
    { date: '2024-11-10', count: 2 },
    { date: '2024-11-11', count: 7 },
    { date: '2024-11-15', count: 5 },
    { date: '2024-11-20', count: 8 },
    { date: '2024-11-21', count: 6 },
    { date: '2024-11-22', count: 9 },
  ];

  // Tooltip data formatting
  const getTooltipData = (value) => {
    if (!value || !value.date) {
      return '';
    }
    return `Date: ${value.date}, Count: ${value.count}`;
  };

  // Custom inline styles for color mapping as a fallback if Tailwind doesn't work
  const getColorStyle = (count) => {
    if (!count) return { fill: '#f3f4f6' }; // Default light gray for empty cells
    const colors = [
      '#d1fae5', // Green-100
      '#a7f3d0', // Green-200
      '#6ee7b7', // Green-300
      '#34d399', // Green-400
      '#10b981', // Green-500
      '#059669', // Green-600
      '#047857', // Green-700
      '#065f46', // Green-800
      '#064e3b', // Green-900
      '#0f766e', // Dark green for highest value
    ];
    return { fill: colors[Math.min(count - 1, colors.length - 1)] };
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-xl font-bold mb-4">React Calendar Heatmap Example</h2>
      <div className="overflow-x-auto">
        <div className="inline-block">
          <CalendarHeatmap
            startDate={new Date('2024-11-01')}
            endDate={new Date('2024-11-30')}
            values={mockData}
            classForValue={(value) => {
              // Return an empty string as Tailwind CSS classes might not apply to SVGs
              return '';
            }}
            // Use inline styles to ensure colors are applied correctly
            transformDayElement={(element, value) => {
              const style = getColorStyle(value?.count);
              return React.cloneElement(element, {
                style,
              });
            }}
            tooltipDataAttrs={(value) => ({
              'data-tooltip-id': 'heatmap-tooltip',
              'data-tooltip-content': getTooltipData(value),
            })}
            showWeekdayLabels={true}
          />
          <ReactTooltip id="heatmap-tooltip" />
        </div>
      </div>
    </div>
  );
};

export default CalendarHeatmapComponent;
