'use client';

import Preloader from './Preloader/Preloader';
import Carousel from './components/Carousel/Carousel';
import styles from "./page.module.css";
import Navbar from './components/NavBar/Navbar.js';
import { useState, useEffect } from 'react';
import MobileMessage from './components/MobileMessage/MobileMessage';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newSlide) => {
    console.log("Current Slide changed from", currentSlide, "to", newSlide);
    setCurrentSlide(newSlide);
  };

  const handleResize = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      const availableHeight = window.innerHeight - navbarHeight;
      const carouselContainer = document.querySelector(`.${styles.carouselContainer}`);
      if (carouselContainer) {
        carouselContainer.style.height = `${availableHeight}px`;
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Preloader />
      <MobileMessage />
      
      <div id="mainContent" className={styles.page}>
        <Navbar setCurrentSlide={handleSlideChange} currentSlide={currentSlide} />  {/* Pass currentSlide to Navbar */}
        
        <div className={styles.carouselContainer}>
          <Carousel currentSlide={currentSlide} setCurrentSlide={handleSlideChange} />
        </div>
      </div>
    </>
  );
}