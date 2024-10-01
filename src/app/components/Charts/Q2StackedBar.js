// components/StackedBarChart.js
import React, { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Button, Stack } from '@mui/material';

const StackedBarChart = () => {
  // Updated data with team sizes and counts for 2023 and 2024
  const rawData = [
    {
        category: '1-5',
        '2023': 2,  // Scaled down from 20
        '2024': 2.5  // Scaled down from 25
    },
    {
        category: '6-10',
        '2023': 0.7,  // Scaled down from 7
        '2024': 1.1   // Scaled down from 11
    },
    {
        category: '11-20',
        '2023': 0.6,  // Scaled down from 6
        '2024': 1.3   // Scaled down from 13
    },
    {
        category: '21-50',
        '2023': 0.4,  // Scaled down from 4
        '2024': 0.6   // Scaled down from 6
    },
    {
        category: '50-100',
        '2023': 0.1,  // Scaled down from 1
        '2024': 0.3   // Scaled down from 3
    },
];

  // Define hex colors for each year
  const yearColors = {
    '2023': 'rgba(224, 46, 46, 0.6)',  // Custom color for 2023 with opacity
    '2024': 'rgba(67, 170, 222, 0.6)'    // Custom color for 2024 with opacity
  };

  // Define keys for the years
  const [visibleKeys, setVisibleKeys] = useState(['2023', '2024']);

  // Handle toggling the visibility of each year's data, ensuring at least one year is always visible
  const handleFilter = (year) => {
    if (visibleKeys.includes(year) && visibleKeys.length > 1) {
      setVisibleKeys(visibleKeys.filter(key => key !== year));
    } else if (!visibleKeys.includes(year)) {
      setVisibleKeys([...visibleKeys, year]);
    }
  };

  return (
    <div style={{ height: '700px' }}>
      <ResponsiveBar
        data={rawData}
        keys={visibleKeys}  // Show only the selected years
        indexBy="category"  // Categories are displayed on the x-axis
        margin={{ top: 50, right: 130, bottom: 80, left: 100 }}  // Increase bottom and left margins for title padding
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={({ id }) => yearColors[id]}  // Use color with opacity for each year
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Team Size',
          legendPosition: 'middle',
          legendOffset: 50,  // More padding for the x-axis title
          fontSize: 20,  // Larger font size for the x-axis title
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          legendPosition: 'middle',
          legendOffset: -70,  // More padding for the y-axis title
          fontSize: 20,  // Larger font size for the y-axis title
        }}
        enableGridX={false}  // Disable background chart lines (grid)
        enableGridY={false}  // Disable vertical grid lines
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in category: ${e.indexValue}`}
      />

      {/* Toggle Buttons */}
      <Stack direction="row" justifyContent="center" spacing={2} style={{ marginTop: '20px' }}>
        <Button
          variant={visibleKeys.includes('2023') ? 'contained' : 'outlined'}
          onClick={() => handleFilter('2023')}
          sx={{
            backgroundColor: visibleKeys.includes('2023') ? yearColors['2023'] : '',
            color: visibleKeys.includes('2023') ? 'white' : '',
            borderColor: yearColors['2023']
          }}
        >
          Toggle 2023 Data
        </Button>
        <Button
          variant={visibleKeys.includes('2024') ? 'contained' : 'outlined'}
          onClick={() => handleFilter('2024')}
          sx={{
            backgroundColor: visibleKeys.includes('2024') ? yearColors['2024'] : '',
            color: visibleKeys.includes('2024') ? 'white' : '',
            borderColor: yearColors['2024']
          }}
        >
          Toggle 2024 Data
        </Button>
      </Stack>
    </div>
  );
};

export default StackedBarChart;