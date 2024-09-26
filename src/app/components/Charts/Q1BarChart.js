'use client';

// components/BarChart.js
import { ResponsiveBar } from '@nivo/bar';

const BarChart = () => {
  const data = [
    {
      country: 'USA',
      sales: 50,
    },
    {
      country: 'UK',
      sales: 30,
    },
    {
      country: 'France',
      sales: 70,
    },
    {
      country: 'Germany',
      sales: 60,
    },
  ];

  return (
    <div style={{ height: 700 }}>
 <ResponsiveBar
  data={data}
  keys={['sales']}
  indexBy="country"
  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
  padding={0.3}
  valueScale={{ type: 'linear' }}
  indexScale={{ type: 'band', round: true }}
  colors={() => '#3da9de'}  // Assigning the blue color to the bars
  borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
  axisTop={null}
  axisRight={null}
  axisBottom={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Country',
    legendPosition: 'middle',
    legendOffset: 32,
  }}
  axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Sales',
    legendPosition: 'middle',
    legendOffset: -40,
  }}
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
            itemOpacity: 1,
          },
        },
      ],
    },
  ]}
  role="application"
  ariaLabel="Nivo bar chart demo"
/>
    </div>
  );
};

export default BarChart;