import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

// Data with percentages for each category
const data = [
    {
        category: 'Stakeholder',
        Percentage: 48.9,
        color: 'rgba(57, 168, 63, 0.6)',  // Green for "BOTH"
    },
    {
        category: 'Event Team',
        Percentage: 46.7,
        color: 'rgba(224, 46, 46, 0.6)',  // Red for "AN EVENT STRATEGIST"
    },
    {
        category: 'Other',
        Percentage: 4.4,
        color: 'rgba(67, 170, 222, 0.6)',  // Blue for "AN EVENT DELIVERER"
    },
];

// Simple Bar chart component
const SimpleBarChart = () => (
    <div style={{
        height: "70vh",  // Use a responsive height relative to viewport
        maxHeight: '700px', // Set a max height to avoid overflow on larger screens
        width: '100%', 
        paddingTop: '.5em',
      }}>        <ResponsiveBar
            data={data}
            keys={['Percentage']}
            indexBy="category"  // Show category on Y-axis
            margin={{ top: 20, right: 50, bottom: 60, left: 100 }}  // Adjust left and bottom margins for extra padding
            padding={0.3}
            layout="vertical"  // Standard vertical layout
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={({ data }) => data.color}  // Use color from the data
            axisTop={null}
            axisRight={null}  // Remove axis on the right side
            axisBottom={{
                legend: 'Percentage',
                legendPosition: 'middle',
                legendOffset: 50,  // Add more space between X-axis and title
            }}
            axisLeft={{
                tickPadding: 5,  // Add some padding between ticks and labels
                legend: 'Category',
                legendPosition: 'middle',
                legendOffset: -70,  // Add more space between Y-axis and title
            }}
            enableGridX={false}  // Disable vertical grid lines
            enableGridY={false}  // Disable horizontal grid lines
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            enableLabel={false}  // No labels inside the bars
            theme={{
                axis: {
                    ticks: {
                        text: {
                            fontSize: 15,  // Set font size for axis ticks
                        },
                    },
                    legend: {
                        text: {
                            fontSize: 15,  // Set font size for legends
                        },
                    },
                },
                legends: {
                    text: {
                        fontSize: 15,  // Set font size for any additional legends
                    },
                },
            }}
            role="application"
            ariaLabel="Stacked bar chart showing percentage of responses for categories Stakeholder, Event Team, and Other"
        />
    </div>
);

export default SimpleBarChart;