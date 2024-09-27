import { ResponsiveRadar } from '@nivo/radar';
import { scaleSequential } from 'd3-scale';
import { interpolateRgb } from 'd3-interpolate';

// Custom color scale from the specific blue to pale grey
const colorScale = scaleSequential()
  .domain([1, 5])  // 1 = most important (darker), 5 = least important (lighter)
  .interpolator(interpolateRgb('#3da9de', '#e0e0e0'));  // From blue to pale grey

// Original ranks of factors
const originalData = [
  { factor: 'Salary/Compensation', value: 2.35 },
  { factor: 'Company Culture', value: 2.82 },
  { factor: 'Work Life Balance', value: 3.23 },
  { factor: 'Working from Home', value: 3.61 },
  { factor: 'Career Growth/Compensation', value: 4.18 },
  { factor: 'Holiday Allowance', value: 4.81 },
];

const RadarChart = () => (
  <div style={{ height: '650px', width: '100%', paddingTop: '20px' }}>
    {/* Key scale with numerical values */}
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <strong>Most Important to Least Important</strong>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ marginRight: '10px' }}>1</div>
        <div style={{ height: '10px', width: '200px', background: 'linear-gradient(to right, #3da9de, #e0e0e0)' }}></div>
        <div style={{ marginLeft: '10px' }}>5</div>
      </div>
    </div>

    {/* Radar chart */}
    <ResponsiveRadar
      data={originalData}
      keys={['value']}
      indexBy="factor"
      maxValue={5}  // Set the maximum value as 5 (since 5 is the highest/worst rank in your dataset)
      minValue={1}  // Set minimum value as 1 for the radar chart scale
      margin={{ top: 70, right: 80, bottom: 50, left: 80 }}
      curve="linearClosed"
      // Apply dynamic color to the web's connecting lines based on the importance using the color scale
      borderColor={(d) => colorScale(d.value)}  // Color lines based on value using the heatmap
      borderWidth={3}  // Increase the line width for better visualization of the gradient
      gridLabelOffset={36}
      gridShape="circular"
      fillOpacity={0.1}  // Lower fill opacity to make the web stand out
      colors="#5fa7d9"  // Set the color of the radar chart to blue
      enableDotLabel={true}
      dotSize={10}
      // Apply dynamic color based on importance using the color scale for the dots (nodes)
      dotColor={(d) => colorScale(d.value)}  // Dot color based on value using the heatmap
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
);

export default RadarChart;