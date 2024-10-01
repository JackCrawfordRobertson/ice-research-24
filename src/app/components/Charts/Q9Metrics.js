import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

// Data: percentages only
const data = [
  { factor: 'Attendee Satisfaction', percentage: 93.5, color: 'rgba(57, 168, 63, 0.6)' },
  { factor: 'Post-Event Surveys', percentage: 76.1, color: 'rgba(224, 46, 46, 0.6)' },
  { factor: 'Number of Attendees', percentage: 71.7, color: 'rgba(67, 170, 222, 0.6)' },
  { factor: 'Lead Generation', percentage: 58.7, color: 'rgba(255, 204, 0, 0.6)' },
  { factor: 'Content Performance', percentage: 52.2, color: 'rgba(255, 102, 0, 0.6)' },
  { factor: 'Net Promoter Score', percentage: 39.1, color: 'rgba(153, 102, 204, 0.6)' },
  { factor: 'Social Media Engagement', percentage: 37.0, color: 'rgba(0, 153, 204, 0.6)' },
  { factor: 'User Activity of Event App', percentage: 17.4, color: 'rgba(0, 204, 153, 0.6)' },
  { factor: 'Use of Event App', percentage: 15.2, color: 'rgba(0, 204, 102, 0.6)' },
  { factor: 'Other', percentage: 19.6, color: 'rgba(204, 0, 204, 0.6)' },
];

// Simple Bar chart component
const SimpleBarChart = () => (
  <div style={{ height: '600px', width: '100%' }}>
    <ResponsiveBar
      data={data}
      keys={['percentage']}
      indexBy="factor"
      margin={{ top: 20, right: 50, bottom: 50, left: 80 }}
      padding={0.3}
      layout="vertical"
      colors={({ data }) => data.color}
      axisBottom={{
        legend: 'Percentage',
        legendPosition: 'middle',
        legendOffset: 40,
      }}
      axisLeft={{
        legend: 'Category',
        legendPosition: 'middle',
        legendOffset: -50,
      }}
      theme={{
        axis: {
          ticks: { text: { fontSize: 14 } },
          legend: { text: { fontSize: 14 } },
        },
      }}
      role="application"
      ariaLabel="Bar chart showing percentage of factors"
    />
  </div>
);

export default SimpleBarChart;