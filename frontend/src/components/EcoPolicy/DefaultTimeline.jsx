import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from '@material-tailwind/react';

export function DefaultTimeline({ timelineItems = [] }) {
  const defaultTimelineItems = [
    {
      title: 'Timeline Event 1',
      body: 'The key to more success is to have a lot of pillows. It took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. I’m up to something. Fan luv.',
    },
    {
      title: 'Timeline Event 2',
      body: 'Another milestone in my journey, and I continue to rise higher with each challenge. The process is long, but the results are rewarding.',
    },
    {
      title: 'Timeline Event 3',
      body: 'Every step I take is a step toward success. No matter how hard it gets, I will keep pushing forward. My vision is clear, and my goal is unstoppable.',
    },
  ];

  // Use defaultTimelineItems if no timelineItems are passed as a prop
  const items = timelineItems.length > 0 ? timelineItems : defaultTimelineItems;

  return (
    <div className="w-full bg-gradient-to-r from-indigo-50 to-gray-100 p-8 rounded-lg shadow-xl">
      <Timeline>
        {items.map((item, index) => (
          <TimelineItem key={index} className="group">
            {/* Render connector between timeline items, but not before the first or after the last */}
            {index !== 0 && (
              <TimelineConnector
                className="h-1 bg-gradient-to-t from-indigo-400 to-purple-500 rounded-xl"
                style={{ width: '2px', height: '50px' }}
              />
            )}
            <TimelineHeader className="h-20 flex items-center space-x-4">
              <TimelineIcon
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-full shadow-lg transition-all group-hover:scale-125 group-hover:rotate-6 transform"
              >
                <span className="font-bold text-xl">{index + 1}</span>
              </TimelineIcon>
              <div className="flex flex-col space-y-1">
                <Typography variant="h5" color="blue-gray" className="font-semibold leading-tight">
                  {item.title}
                </Typography>
                <Typography variant="small" color="gray" className="text-xs text-gray-500">
                  {`Event ${index + 1}`}
                </Typography>
              </div>
            </TimelineHeader>
            <TimelineBody className="pb-8 pl-14 pt-6 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out group-hover:bg-gradient-to-l group-hover:from-white group-hover:to-indigo-50">
              <Typography variant="small" color="gray" className="font-normal text-gray-700">
                {item.body}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
