import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import React from 'react';

// Data with categories and percentages, including colors with opacity
const data = {
    name: "All Skills",
    color: "rgba(200, 200, 200, 0.3)",  // Set background bubble to light grey
    children: [
        { name: "AI and Technology Proficiency", value: 91.1, color: 'rgba(255, 105, 97, 0.6)' },  // Red with opacity
        { name: "Data Analysis", value: 66.1, color: 'rgba(100, 181, 246, 0.6)' },  // Blue with opacity
        { name: "Stakeholder Management", value: 64.3, color: 'rgba(129, 199, 132, 0.6)' },  // Green with opacity
        { name: "Sustainability Practices", value: 57.1, color: 'rgba(255, 241, 118, 0.6)' },  // Yellow with opacity
        { name: "Marketing and Promotion", value: 55.4, color: 'rgba(255, 183, 77, 0.6)' },  // Orange with opacity
        { name: "Other", value: 3.6, color: 'rgba(149, 117, 205, 0.6)' }  // Purple with opacity
    ]
};

// Circle Packing chart component with background color and opacity for bubbles
const CirclePackingChart = () => (
    <div style={{ height: '700px', width: '1000px', padding: '20px', borderRadius: '10px' }}>
        <ResponsiveCirclePacking
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            id="name"  // Category names as identity
            value="value"  // Use the percentage as the value for bubble size
            colors={({ data }) => data.color}  // Use custom RGBA colors with opacity
            padding={5}  // Increase padding between bubbles
            enableLabels={true}  // Enable labels inside bubbles
            labelTextColor={{
                from: 'color',
                modifiers: [['darker', 3]]  // Darker text inside bubbles for better contrast
            }}
            labelSkipRadius={10}  // Skip labels for small bubbles
            borderWidth={2}  // Set the border width around bubbles
            borderColor={{
                from: 'color',
                modifiers: [['darker', 0.5]]  // Darker border color for better separation
            }}
            animate={true}
            motionStiffness={90}
            motionDamping={12}
        />
    </div>
);

export default CirclePackingChart;