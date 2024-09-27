// components/TreemapChart.js
import React from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap';

const TreemapChart = () => {
  const data = {
    name: "Event Roles",
    children: [
      { name: "BOTH", value: 27, color: "#39a83f" },        // Personalized color for "Both"
      { name: "AN EVENT STRATEGIST", value: 23, color: "#e02e2e" },  // Custom color (Tomato Red)
      { name: "AN EVENT DELIVERER", value: 8, color: "#43aade" },    // Personalized color for "An Event Deliverer"
    ]
  };

  // Calculate the total value of all the categories
  const totalValue = data.children.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div style={{ height: "760px", width: '100%', paddingTop: '.5em' }}>
      <ResponsiveTreeMap
        data={data}
        identity="name"
        value="value"
        label={(node) => (
          <tspan style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {`${node.id}: ${(node.value / totalValue * 100).toFixed(1)}%`}
          </tspan>
        )}
        labelSkipSize={0}  // Ensure labels aren't skipped due to size
        labelTextColor="#000"  // Set label text color to gray
        colors={(node) => node.data.color}  // Set personalized colors
        borderWidth={0}  // Remove the border/keyline
        tile="squarify"  // Use a better tile strategy to fill space
        leavesOnly={true}  // Only show the leaves of the treemap
        innerPadding={10}  // Add padding between boxes
        outerPadding={0}  // Add padding around the outer edges
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={({ node }) => (
          <div
            style={{
              padding: '5px 10px',
              background: node.data.color,
              color: 'white',
              borderRadius: '4px',
            }}
          >
            <strong>{node.id}: {(node.value / totalValue * 100).toFixed(1)}%</strong>
          </div>
        )}
        labelOrientation="horizontal"  // Keep the text horizontal and easy to read
        isInteractive={true}  // Ensure the chart remains interactive
      />
    </div>
  );
};

export default TreemapChart;