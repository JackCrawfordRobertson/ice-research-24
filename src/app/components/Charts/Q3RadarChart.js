import { ResponsiveRadar } from '@nivo/radar';
import { scaleSequential } from 'd3-scale';
import { interpolateRgb } from 'd3-interpolate';

// Custom color scale from blue to pale grey
const colorScale = scaleSequential()
  .domain([1, 5])
  .interpolator(interpolateRgb('#3da9de', '#e0e0e0'));  // From blue to pale grey

// Original data
const originalData = [
  { factor: 'Salary/Compensation', value: 2.35 },
  { factor: 'Company Culture', value: 2.82 },
  { factor: 'Work Life Balance', value: 3.23 },
  { factor: 'Working from Home', value: 3.61 },
  { factor: 'Career Growth/Compensation', value: 4.18 },
  { factor: 'Holiday Allowance', value: 4.81 },
];

const RadarChart = () => (
  <div style={{
    height: "65vh",  // Use a responsive height relative to viewport
    maxHeight: '700px', // Set a max height to avoid overflow on larger screens
    width: '100%', 
    paddingTop: '.5em',
  }}>    {/* Key scale with numerical values */}
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <strong>Least Important to Most Important</strong>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ marginRight: '10px' }}>1</div>
        <div style={{ height: '10px', width: '200px', background: 'linear-gradient(to left, #3da9de, #e0e0e0)' }}></div>
        <div style={{ marginLeft: '10px' }}>5</div>
      </div>
    </div>

    {/* Radar chart */}
    <ResponsiveRadar
      data={originalData.map(d => ({
        ...d,
        Importance: Number((6 - d.value).toFixed(2))  // Invert and round the value to 2 decimal places
      }))}
      keys={['Importance']}
      indexBy="factor"
      maxValue={5}  // Max value is still 5, but the rendering logic flips the values
      minValue={1}  // Keep the minimum as 1 (center)
      margin={{ top: 70, right: 80, bottom: 50, left: 80 }}
      curve="linearClosed"
      borderColor={(d) => colorScale(6 - d.value)}  // Invert color scale rendering
      borderWidth={3}
      gridLabelOffset={36}
      gridShape="circular"
      fillOpacity={0.1}
      colors="#5fa7d9"
      enableDotLabel={true}
      dotSize={10}
      dotColor={(d) => colorScale(6 - d.value)}  // Invert color scale for dots
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      theme={{
        axis: {
          ticks: { text: { fontSize: ".9em" } },
          legend: { text: { fontSize: ".9em" } },
        },
      }}
    />
  </div>
);

export default RadarChart;