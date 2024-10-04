import { AppBar, Toolbar, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';

const Navbar = ({ setCurrentSlide, currentSlide }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const tabs = [
    "Welcome",
    "Summary",
    "Strategist or Deliver",
    "Team Size",
    "Salary",
    "Budgeting",
    "Skills",
    "Challenges",
    "Technology",
    "ROI",
    "Metrics",
  ];

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
    setCurrentSlide(newValue); // Update current slide on tab click
  };

  useEffect(() => {
    setCurrentTab(currentSlide);
  }, [currentSlide]);

  return (
    <AppBar
      position="sticky"  // Sticky navbar that doesn't push content
      sx={{
        backgroundColor: '#9b9b9b',  // Solid grey background
        height: '64px',  // Fixed height
        boxSizing: 'border-box',  // Ensure padding doesn't affect height
        boxShadow: 'none',  // Remove the default drop shadow
      }}
    >
      <Toolbar style={{ justifyContent: 'center' }}>
        {!isMobile && (
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            centered
            TabIndicatorProps={{
              style: { display: 'none' }, // Hide the default underline indicator
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.toUpperCase()}
                sx={{
                  fontWeight: 'bold',
                  fontSize: '.8rem',
                  padding: '12px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',  // Smooth transition for background and text color
                  color: currentTab === index ? 'white' : 'white',  // White text for selected tab, black for unselected
                  backgroundColor: currentTab === index ? '#3da9de' : 'transparent',  // Blue background when selected
                  '&:hover': {
                    backgroundColor: currentTab === index ? '#3da9de' : 'rgba(0, 0, 0, 0.08)',
                    color: 'white', // Keep text white on hover when selected
                  },
                  '&.Mui-selected': {
                    color: 'white !important',  // Force white text on selected tab
                  },
                }}
              />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;