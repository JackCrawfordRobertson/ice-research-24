import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Button, Stack } from '@mui/material';

const StackedBarChart = () => {
  const rawData = [
    { category: '1-5', '2023': 2, '2024': 2.5 },
    { category: '6-10', '2023': 0.7, '2024': 1.1 },
    { category: '11-20', '2023': 0.6, '2024': 1.3 },
    { category: '21-50', '2023': 0.4, '2024': 0.6 },
    { category: '50-100', '2023': 0.1, '2024': 0.3 },
  ];

  const data = rawData.map(item => {
    const total = item['2023'] + item['2024'];
    return {
      category: item.category,
      '2023': ((item['2023'] / total) * 100).toFixed(1),
      '2024': ((item['2024'] / total) * 100).toFixed(1),
    };
  });

  const yearColors = {
    '2023': 'rgba(224, 46, 46, 0.6)',
    '2024': 'rgba(67, 170, 222, 0.6)'
  };

  const [visibleKeys, setVisibleKeys] = useState(['2023', '2024']);

  const handleFilter = (year) => {
    if (visibleKeys.includes(year) && visibleKeys.length > 1) {
      setVisibleKeys(visibleKeys.filter(key => key !== year));
    } else if (!visibleKeys.includes(year)) {
      setVisibleKeys([...visibleKeys, year]);
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      height: isMobile ? "45vh" : "70vh",
      maxHeight: isMobile ? '400px' : '700px',
      width: '100%',
    }}>
      <ResponsiveBar
        data={data}
        keys={visibleKeys}
        indexBy="category"
        margin={{
          top: 15,
          right: 10,
          bottom: isMobile ? 90 : 80,
          left: isMobile ? 50 : 100,
        }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={({ id }) => yearColors[id]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: isMobile ? -45 : 0,
          legend: 'Team Size',
          legendPosition: 'middle',
          legendOffset: isMobile ? 60 : 50,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Percentage',
          legendPosition: 'middle',
          legendOffset: isMobile ? -40 : -70,
        }}
        enableGridX={false}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="Nivo bar chart demo"
        // Add percentage to tooltip
        tooltip={({ id, value, indexValue, color }) => (
          <div
            style={{
              padding: '5px 10px',
              color: 'white',
              background: color,
              borderRadius: '5px',
            }}
          >
            <strong>{id}:</strong> {value}% in category {indexValue}
          </div>
        )}
        // Add larger, bold numbers behind the bars
        label={({ value }) => `${value}%`}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        labelFormat={value => `${value}%`}
        theme={{
          axis: {
            ticks: { text: { fontSize: ".9em" } },
            legend: { text: { fontSize: ".9em" } },
          },
          labels: {
            text: {
              fontSize: '.9em', // Make numbers bigger
              fontWeight: 'bold', // Make numbers bold
            },
          },
        }}
      />

      {/* Toggle Buttons */}
      {!isMobile && (
        <Stack direction="row" justifyContent="center" spacing={2} style={{ marginTop: '0px' }}>
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
      )}
    </div>
  );
};

export default StackedBarChart;