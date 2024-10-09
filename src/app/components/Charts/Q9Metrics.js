import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

// Data: percentages only
const defaultData = [
  { factor: 'Attendee Satisfaction', percentage: 93.5 },
  { factor: 'Post-Event Surveys', percentage: 76.1 },
  { factor: 'Number of Attendees', percentage: 71.7 },
  { factor: 'Lead Generation', percentage: 58.7 },
  { factor: 'Content Performance', percentage: 52.2 },
  { factor: 'Net Promoter Score', percentage: 39.1 },
  { factor: 'Social Media Engagement', percentage: 37.0 },
  { factor: 'User Activity of Event App', percentage: 17.4 },
  { factor: 'Use of Event App', percentage: 15.2 },
  { factor: 'Other', percentage: 19.6 },
];

const SimpleBarChart = ({ data = defaultData }) => {
  // Ensure data is an array before reversing
  const reversedData = Array.isArray(data) ? [...data].reverse() : [];

  return (
    <div style={{
      height: "70vh",  // Use a responsive height relative to viewport
      maxHeight: '700px', // Set a max height to avoid overflow on larger screens
      width: '100%', 
      background: 'transparent',  // Remove background color
      paddingTop: '.5em',
    }}>
      <ResponsiveBar
        data={reversedData}
        keys={['percentage']}
        indexBy="factor"
        margin={{ top: 20, right: 20, bottom: 50, left: 180 }}  // Adjust left margin for long names
        padding={0.3}
        layout="horizontal"  // Set layout to horizontal
        colors="rgba(82, 179, 232, 0.8)"  // Set all bars to the same blue color
        axisBottom={{
          legend: 'Percentage',
          legendPosition: 'middle',
          legendOffset: 40,
          format: value => `${value}%`,  // Add % mark to the end of each number
        }}
        enableGridX={false}  // Remove vertical grid lines
        enableGridY={false}  // Remove horizontal grid lines
        theme={{
          axis: {
            ticks: { text: { fontSize: ".9em" } },
            legend: { text: { fontSize: ".9em" } },
          },
        }}
        role="application"
        ariaLabel="Bar chart showing percentage of factors"
        tooltip={({ value, indexValue, color }) => (
          <div
            style={{
              padding: '5px 10px',
              color: 'white',
              background: 'rgba(82, 179, 232, 0.8)',  // Blue background
              borderRadius: '5px',
            }}
          >
            <strong>{value}%</strong> in {indexValue}
          </div>
        )}
        labelFormat={value => `${value}%`}  // Add % mark to the end of each label
      />
    </div>
  );
};

export default SimpleBarChart;