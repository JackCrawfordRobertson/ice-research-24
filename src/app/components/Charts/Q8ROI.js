import { ResponsiveRadar } from '@nivo/radar';
import { scaleSequential } from 'd3-scale';
import { interpolateRgb } from 'd3-interpolate';

// Inverted color scale from pale grey to blue
const colorScale = scaleSequential()
  .domain([1, 5])
  .interpolator(interpolateRgb('#e0e0e0', '#3da9de')); // From pale grey to blue

// Original data
const originalData = [
  { factor: 'Content Creation', value: 2.47 },
  { factor: 'Attendee Engagement', value: 3.33 },
  { factor: 'Budget', value: 3.51 },
  { factor: 'Venue Selection', value: 3.77 },
  { factor: 'Marketing and Promotion', value: 5 },
  { factor: 'Diversity, Equity & Inclusion', value: 5.17 },
  { factor: 'Technology Integration', value: 6.05 },
  { factor: 'Sustainability', value: 6.58 },
];

// Calculate min and max values
const dataMin = Math.min(...originalData.map(d => d.value));
const dataMax = Math.max(...originalData.map(d => d.value));

// Normalize and invert the data
const data = originalData.map(d => {
  const normalizedValue = ((d.value - dataMin) / (dataMax - dataMin)) * 4 + 1;
  const invertedValue = 6 - normalizedValue;
  const Importance = Number(invertedValue.toFixed(2));
  return {
    factor: d.factor,
    Importance,
  };
});

const RadarChart = () => (
  <div style={{
    height: "65vh",  // Use a responsive height relative to viewport
    maxHeight: '700px', // Set a max height to avoid overflow on larger screens
    width: '100%', 
    paddingTop: '.5em',
  }}>    {/* Key scale with numerical values */}
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <strong>Least Important to Most Important</strong>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
        }}
      >
        <div style={{ marginRight: '10px' }}>1</div>
        <div
          style={{
            height: '10px',
            width: '200px',
            background: 'linear-gradient(to right, #e0e0e0, #3da9de)',
          }}
        ></div>
        <div style={{ marginLeft: '10px' }}>5</div>
      </div>
    </div>

    {/* Radar chart */}
    <ResponsiveRadar
      data={data}
      keys={['Importance']}
      indexBy="factor"
      maxValue={5}
      minValue={1}
      margin={{ top: 70, right: 80, bottom: 50, left: 80 }}
      curve="linearClosed"
      borderColor={(d) => colorScale(d.value)}
      borderWidth={3}
      gridLabelOffset={36}
      gridShape="circular"
      fillOpacity={0.1}
      colors="#5fa7d9"
      enableDotLabel={true}
      dotSize={10}
      dotColor={(d) => colorScale(d.value)}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      animate={true}
      motionConfig="wobbly"
    />
  </div>
);

export default RadarChart;