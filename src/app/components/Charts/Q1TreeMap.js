import React, { useState, useEffect } from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap';

const TreemapChart = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile as <= 768px
    };

    // Run on initial render
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    name: "Event Roles",
    children: [
      { name: "BOTH", value: 27, color: "#39a83f" },
      { name: "AN EVENT STRATEGIST", value: 23, color: "#e02e2e" },
      { name: "AN EVENT DELIVERER", value: 8, color: "#43aade" },
    ]
  };

  // Calculate the total value of all the categories
  const totalValue = data.children.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div style={{
      height: isMobile ? "45vh" : "70vh",  // Mobile height: 50vh, Desktop height: 70vh
      maxHeight: isMobile ? '400px' : '700px',  // Mobile max height: 400px, Desktop max height: 700px
      width: '100%', 
      paddingTop: '.5em',
    }}>
      <ResponsiveTreeMap
        data={data}
        identity="name"
        value="value"
        label={(node) => (
          <tspan style={{ fontSize: ".8rem", fontWeight: "bold" }}>
            {`${node.id}: ${(node.value / totalValue * 100).toFixed(1)}%`}
          </tspan>
        )}
        labelSkipSize={0}  // Ensure labels aren't skipped due to size
        labelTextColor="#000"
        colors={(node) => node.data.color}
        borderWidth={0}
        tile="squarify"
        leavesOnly={true}
        innerPadding={10}
        outerPadding={0}
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
        labelOrientation="horizontal"
        isInteractive={true}
      />
    </div>
  );
};

export default TreemapChart;