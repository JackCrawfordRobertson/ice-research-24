import React, { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Typography, Slider, Box } from '@mui/material';

// Pseudo data for four different charts
const data1 = [
  { category: 'Event Registration', percentage: 90.9 },
  { category: 'Hybrid Events', percentage: 74.5 },
  { category: 'Web-streaming', percentage: 72.7 },
  { category: 'Chat GPT', percentage: 43.6 },
  { category: 'B2B Matchmaking', percentage: 18.2 },
  { category: 'Augmented Reality', percentage: 16.4 }
];

const data2 = [
  { category: 'Yes', percentage: 41.4 },
  { category: 'No', percentage: 31 },
  { category: 'Considering it', percentage: 27.6 }
];

const data3 = [
  { category: 'Content Generation', percentage: 83.8 },
  { category: 'Logistics & Planning', percentage: 32.4 },
  { category: 'Data Analysis', percentage: 29.7 },
  { category: 'Personalising Attendee Experience', percentage: 21.6 }
];

const data4 = [
  { category: 'Somewhat Comfortable', percentage: 45 },
  { category: 'Neutral', percentage: 27.5 },
  { category: 'Somewhat Uncomfortable', percentage: 15 },
  { category: 'Very Comfortable', percentage: 7.5 },
  { category: 'Very Uncomfortable', percentage: 5 }
];

// Component for rendering a vertical bar chart
const BarChart = ({ data, title }) => (
  <div style={{
    height: "50vh",  // Use a responsive height relative to viewport
    maxHeight: '700px', // Set a max height to avoid overflow on larger screens
    width: '100%', 
    paddingTop: '.5em',
  }}>    {/* Styled title to match the `.Title` and `.column3Title` CSS styles */}
    <Typography 
  variant="h6" 
  align="left" 
  gutterBottom 
  style={{ 
    fontSize: '1.8rem', 
    fontWeight: 'bold', 
    margin: '0 0 0.5em 0', 
    textTransform: 'uppercase', 
    color: '#7f8c8d',  // Matching color for `.column3Title`
    lineHeight: '1'    // Adjust line height, '1' means no extra spacing
  }}  
>
  {title}
</Typography>

    <ResponsiveBar
      data={data}
      keys={['percentage']}
      indexBy="category"
      margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
      padding={0.3}
      layout="vertical"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors="rgba(61, 169, 222, 0.6)"  // Custom blue color with 60% opacity
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickPadding: 5,
        legend: 'Percentage',
        legendPosition: 'middle',
        legendOffset: 36
      }}
      axisLeft={{
        tickPadding: 5,
        legend: 'Category',
        legendPosition: 'middle',
        legendOffset: -50
      }}
      enableGridX={false}
      enableGridY={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      enableLabel={false}
      theme={{
        axis: {
          ticks: { text: { fontSize: ".9em" } },
          legend: { text: { fontSize: ".9em" } },
        },
      }}
    />
  </div>
);

const MultiChartComponent = () => {
  const [currentChart, setCurrentChart] = useState(0);

// Chart data and titles for each chart
const chartData = [
  { data: data1, title: 'Event tech used in your team?' },
  { data: data2, title: 'Are you using AI in event planning?' },
  { data: data3, title: 'In what areas are you using AI?' },
  { data: data4, title: 'How comfortable are you with AI in events?' }
];

  // Colors for the slider track
  const sliderColors = {
    0: '#3da9de',
    1: '#5fa7d9',
    2: '#89c2d9',
    3: '#a2d8e6',
  };

  return (
    <div>
      {/* Display the current chart */}
      <BarChart data={chartData[currentChart].data} title={chartData[currentChart].title} />

      {/* Title for the slider */}
      <Typography 
        variant="body1" 
        align="center" 
        gutterBottom 
        style={{ marginTop: '5em', fontWeight: 'bold' }}  // Reduced margin top for closer spacing
      >
        Drag the slider to cycle through the questions.
      </Typography>

      {/* Slider to change the charts */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Slider
          value={currentChart}
          min={0}
          max={chartData.length - 1}
          step={1}
          onChange={(e, newValue) => setCurrentChart(newValue)}
          track="normal"
          marks={[
            { value: 0, label: 'Question 1' },
            { value: 1, label: 'Question 2' },
            { value: 2, label: 'Question 3' },
            { value: 3, label: 'Question 4' },
          ]}
          sx={{
            color: sliderColors[currentChart],  // Dynamic color based on chart index
            width: '100%',  // Full width for the slider
            maxWidth: '600px',  // Limit max width to make it look good
            margin: '0 auto',
            marginTop: '1em',
          }}
        />
      </Box>
    </div>
  );
};

export default MultiChartComponent;