'use client';

import Preloader from './Preloader/Preloader';
import Carousel from './components/Carousel/Carousel';
import styles from "./page.module.css";
import Navbar from './components/NavBar/Navbar.js';
import { useState } from 'react';
import MobileMessage from './components/MobileMessage/MobileMessage'; // Import the component


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newSlide) => {
    console.log("Current Slide changed from", currentSlide, "to", newSlide);
    setCurrentSlide(newSlide);
  };

  return (
    <>
      {/* Preloader is visible initially */}
      <Preloader />
      <MobileMessage />
      {/* Main content displayed after preloader fades out */}
      <div id="mainContent" className={styles.page}>
        {/* Navbar component */}
        <Navbar setCurrentSlide={handleSlideChange} />

        {/* Carousel component */}
        <Carousel currentSlide={currentSlide} setCurrentSlide={handleSlideChange} />

      </div>
    </>
  );
}