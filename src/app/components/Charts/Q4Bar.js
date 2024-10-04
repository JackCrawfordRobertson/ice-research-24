import React from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap';

const TreemapChart = () => {
  // Correct hierarchical data structure for Nivo Treemap
  const data = {
    name: 'root',  // Root node is required
    children: [
      {
        category: 'STAKEHOLDER',
        Percentage: 48.9,
        color: 'rgba(57, 168, 63, 0.6)',  // Green for "BOTH"
      },
      {
        category: 'EVENT TEAM',
        Percentage: 46.7,
        color: 'rgba(224, 46, 46, 0.6)',  // Red for "AN EVENT STRATEGIST"
      },
      {
        category: 'OTHER',
        Percentage: 4.4,
        color: 'rgba(67, 170, 222, 0.6)',  // Blue for "AN EVENT DELIVERER"
      },
    ],
  };

  // Calculate the total value of all the categories
  const totalValue = data.children.reduce((acc, cur) => acc + cur.Percentage, 0);

  return (
    <div style={{
      height: "70vh",  // Use a responsive height relative to viewport
      maxHeight: '700px', // Set a max height to avoid overflow on larger screens
      width: '100%',
      paddingTop: '.5em',
    }}>
      <ResponsiveTreeMap
        data={data}
        identity="category"  // Identity is now based on the "category" key in data
        value="Percentage"    // Use "Percentage" as the value key
        label={(node) => (
          <tspan style={{ fontSize: ".8rem", fontWeight: "bold" }}>
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