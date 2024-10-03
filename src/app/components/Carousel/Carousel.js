"use client";

import dynamic from "next/dynamic";
import Slider from "react-slick";
import { useRef, useEffect } from "react";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import styles from "./Carousel.module.css";
import ThreeColumnGrid from "../Carousel/Summery/ThreeColumnGrid";
import LoadingSpinner from "../Carousel/LoadingSpinner"; // Loading spinner

// Dynamically import each chart component to lazy load them
const WelcomeSlide = dynamic(() => import("./WelcomeSlide/WelcomeSlide"), { ssr: false });
const ThreeColumnSlide = dynamic(() => import("./ThreeColumnSlide"), { ssr: false });
const TreemapChart = dynamic(() => import("../Charts/Q1TreeMap"), { ssr: false });
const Q2StackedBar = dynamic(() => import("../Charts/Q2StackedBar"), { ssr: false });
const Q3RadarChart = dynamic(() => import("../Charts/Q3RadarChart"), { ssr: false });
const Q4Bar = dynamic(() => import("../Charts/Q4Bar"), { ssr: false });
const Q5Bubble = dynamic(() => import("../Charts/Q5Bubble"), { ssr: false });
const Q6RadarChart = dynamic(() => import("../Charts/Q6RadarChart"), { ssr: false });
const Q7TechnologyAdoption = dynamic(() => import("../Charts/Q7TechnologyAdoption"), { ssr: false });
const Q8ROI = dynamic(() => import("../Charts/Q8ROI"), { ssr: false });
const Q9Metrics = dynamic(() => import("../Charts/Q9Metrics"), { ssr: false });

export default function Carousel({ currentSlide, setCurrentSlide }) {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    beforeChange: (current, next) => {
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
    <div className={styles.sliderWrapper}>
      <Slider ref={sliderRef} {...settings} className={styles.carousel}>
        {/* First Slide: WelcomeSlide Component */}
        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <WelcomeSlide setCurrentSlide={setCurrentSlide} />
          </Suspense>
        </SlideWithInView>

        {/* Second Slide: ThreeColumnSlide Component */}
        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="Comprehensive Analysis and Key Insights"
              column2Text="In our 2024 ICE research, we took a deep dive into the events industry's ever-changing landscape. While sustainability is still a top priority for our team at ICE-HUB, we uncovered other fascinating insights, too."
              interactiveChart={<ThreeColumnGrid />} // Pass your interactive chart component here
            />
          </Suspense>
        </SlideWithInView>

        {/* Third Slide: ThreeColumnSlide Component */}
        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="ARE YOU AN EVENT STRATEGIST OR EVENT DELIVER?"
              column2Text="Corporate event creators tend to identify themselves as fulfilling both roles—Event Strategists and Event Deliverers—with 46.6% selecting 'Both.' A significant portion (39.7%) identified solely as Event Strategists."
              interactiveChart={<TreemapChart />} // Pass your interactive chart component here
            />
          </Suspense>
        </SlideWithInView>

        {/* Fourth Slide: Team Structure and Size */}
        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="Team Structure and Size"
              column2Text="In terms of team size, the majority of corporate event planners worked in small teams, with 43.1% reporting teams of 1-5 members, and 34.5% organising between 1 and 30 events per year."
              interactiveChart={<Q2StackedBar />} // Pass your interactive chart component here
            />
          </Suspense>
        </SlideWithInView>

        {/* Additional slides follow the same pattern */}
        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="How important is salary when choosing a job role?"
              column2Text="The most important factor for respondents when choosing a job role is Salary/Compensation."
              interactiveChart={<Q3RadarChart />} // Pass your interactive chart component here
            />
          </Suspense>
        </SlideWithInView>

        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="Event Budgeting and Financial Management"
              column2Text="Budget management remains a core part of the responsibilities for corporate event planners."
              interactiveChart={<Q4Bar />} // Lazily loaded BarChart
            />
          </Suspense>
        </SlideWithInView>

        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="Future Skills for Event Professionals"
              column2Text="AI and technology proficiency were seen as the most important future skills for corporate event planners."
              interactiveChart={<Q5Bubble />} // Lazily loaded BarChart
            />
          </Suspense>
        </SlideWithInView>
        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="Future Skills for Event Professionals"
              column2Text="AI and technology proficiency were seen as the most important future skills for corporate event planners."
              interactiveChart={<Q5Bubble />} // Lazily loaded BarChart
            />
          </Suspense>
        </SlideWithInView>
        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="Future Skills for Event Professionals"
              column2Text="AI and technology proficiency were seen as the most important future skills for corporate event planners."
              interactiveChart={<Q5Bubble />} // Lazily loaded BarChart
            />
          </Suspense>
        </SlideWithInView>
        <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="Future Skills for Event Professionals"
              column2Text="AI and technology proficiency were seen as the most important future skills for corporate event planners."
              interactiveChart={<Q5Bubble />} // Lazily loaded BarChart
            />
          </Suspense>
        </SlideWithInView>
        {/* <SlideWithInView>
          <Suspense fallback={<LoadingSpinner />}>
            <ThreeColumnSlide
              column2Title="Future Skills for Event Professionals"
              column2Text="AI and technology proficiency were seen as the most important future skills for corporate event planners."
              interactiveChart={<Q5Bubble />} // Lazily loaded BarChart
            />
          </Suspense>
        </SlideWithInView> */}

        {/* Repeat for other slides */}
      </Slider>
    </div>
  );
}

// Function to handle the slide visibility using the intersection observer
function SlideWithInView({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load only once when in view
    threshold: 0.1, // Adjust threshold for when to consider in view
  });

  return (
    <div ref={ref}>
      {inView ? children : <LoadingSpinner />} {/* Render the component or fallback based on visibility */}
    </div>
  );
}