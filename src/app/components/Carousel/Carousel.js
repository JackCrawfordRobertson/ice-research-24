'use client';
'use client';

import Slider from "react-slick";
import { useRef, useEffect } from 'react';
import Image from "next/image";
import ThreeColumnSlide from "./ThreeColumnSlide";
import styles from "./Carousel.module.css";
import Button from '@mui/material/Button';

import BarChart from "../Charts/Q1BarChart";

export default function Carousel({ currentSlide, setCurrentSlide }) {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      console.log("Slide changing from", current, "to", next);
      setCurrentSlide(next);
    },
  };

  // Effect to change slide when currentSlide updates
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide); // Programmatically go to the current slide
    }
  }, [currentSlide]);

  return (
    <Slider ref={sliderRef} {...settings} className={styles.carousel}>
      {/* First Slide: Welcome Screen */}
      <div className={styles.slide}>
        

      <div className={styles.backgroundGradient}></div>

        <div className={styles.welcome}>
          <h1>Welcome <br></br>to ICE Research</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentSlide(1)}
          >
            Get Started
          </Button>

          {/* Sponsored Section */}
          <div className={styles.sponsoredSection}>
            <p>Sponsored by</p>
            <Image 
              src="/images/Cvent Logo.png" 
              alt="Sponsor Logo" 
              width={150} 
              height={50} 
              className={styles.sponsorLogo}
            />
          </div>
        </div>
      </div>

      {/* Second Slide: ThreeColumnSlide Component */}
      <div className={styles.slide}>
        <ThreeColumnSlide
          column1Content={<Image src="/images/ICE-Logo.svg" alt="ICE Research Logo" width={150} height={150} className={styles.logo} />}
          column2Title="Welcome to ICE 2024 Research"
          column2Text="The React tutorial library you’re referring to for your website might be “React Tutorial”, but if you’re looking for something more specific to enhance your React skills or implement features on your website, you may want to explore these popular libraries, The React tutorial library you’re referring to for your website might be “React Tutorial”, but if you’re looking for something more specific to enhance your React skills or implement features on your website, you may want to explore these popular libraries: The React tutorial library you’re referring to for your website might be “React Tutorial”, but if you’re looking for something more specific to enhance your React skills or implement features on your website, you may want to explore these popular libraries:"
          column3Title="Research Overview"
          // column3Content={<BarChart />} // Pass BarChart as content for third column
          />
      </div>

      {/* Third Slide: Another Slide */}
      <div className={styles.slide}>
        <ThreeColumnSlide
          column1Content={<Image src="/images/ICE-Logo.svg" alt="Another Logo" width={150} height={150} className={styles.logo} />}
          column2Title="About the Event"
          column2Text="ICE 2024 details."
          column3Title="Event Schedule"
          column3Content={<BarChart />} // Pass BarChart as content for third column
        />
      </div>
    </Slider>
  );
}