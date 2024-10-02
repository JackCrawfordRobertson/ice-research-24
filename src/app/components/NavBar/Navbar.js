import { AppBar, Toolbar, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

const Navbar = ({ setCurrentSlide }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navbarRef = useRef(null); // Ref to capture the AppBar element

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
    setCurrentSlide(newValue);
  };

  // Recalculate the height whenever the screen is resized
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
      }
    };

    // Set initial height
    updateNavbarHeight();

    // Listen for resize events
    window.addEventListener('resize', updateNavbarHeight);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  return (
    <AppBar
      ref={navbarRef} // Attach the ref to the AppBar
      position="static"
      style={{ backgroundColor: 'rgba(155, 155, 155, 0.9)' }}
    >
      <Toolbar style={{ justifyContent: 'center' }}> {/* Center the tabs */}
        {!isMobile && (
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            textColor="inherit"
            centered // This centers the text within the Tabs component
            TabIndicatorProps={{
              style: {
                backgroundColor: '#3da9de', // Set the underline colour to blue
                height: '4px', // Increase the thickness of the underline
              }
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.toUpperCase()}
                style={{ fontWeight: 'bold', fontSize: '.8rem' }} // Optional: style each tab
              />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;