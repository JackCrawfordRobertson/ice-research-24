"use client";

import Slider from "react-slick";
import {useRef, useEffect} from "react";
import Image from "next/image";
import ThreeColumnSlide from "./ThreeColumnSlide";
import styles from "./Carousel.module.css";
import WelcomeSlide from "./WelcomeSlide/WelcomeSlide"; // Import the new WelcomeSlide component

//charts
import TreemapChart from "../Charts/Q1TreeMap";
import Q2StackedBar from "../Charts/Q2StackedBar";
import Q3RadarChart from "../Charts/Q3RadarChart";

export default function Carousel({currentSlide, setCurrentSlide}) {
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
            {/* First Slide: WelcomeSlide Component */}
            <div className={styles.slide}>
                <WelcomeSlide setCurrentSlide={setCurrentSlide} />
            </div>

            {/* Second Slide: ThreeColumnSlide Component */}
            <div className={styles.slide}>
                <ThreeColumnSlide
                    column1Content={
                        <Image
                            src="/images/ICE-Logo.svg"
                            alt="ICE Research Logo"
                            width={150}
                            height={150}
                            className={styles.logo}
                        />
                    }
                    column2Title="Welcome to ICE 2024 Research"
                    column2Text="The React tutorial library you’re referring to for your website might be “React Tutorial”, but if you’re looking for something more specific to enhance your React skills or implement features on your website, you may want to explore these popular libraries."
                    column3Title="Research Overview"
                    // interactiveChart={<InteractiveChart />}  // Pass your interactive chart component here
                />
            </div>

            {/* Third Slide: Another Slide */}
            <div className={styles.slide}>
                <ThreeColumnSlide
                    column1Content={
                        <Image
                            src="/images/ICE-Logo.svg"
                            alt="Another Logo"
                            width={150}
                            height={150}
                            className={styles.logo}
                        />
                    }
                    column2Title="ARE YOU AN EVENT STRATEGIST OR EVENT DELIVER?"
                    column2Text={
                        <>
                            Corporate event creators tend to identify themselves as fulfilling both roles—Event
                            Strategists and Event Deliverers—with 46.6% selecting 'Both.' A significant portion (39.7%)
                            identified solely as Event Strategists (focused on high-level planning and decision making),
                            while a smaller group (13.8%) viewed themselves as primarily Event Deliverers (focused on
                            logistics and execution). <br />
                            <br /> Therefore, most respondents see themselves involved in both strategic and operational
                            aspects of event planning, with a slightly stronger leaning towards strategy.
                        </>
                    }
                    column3Title="EVENT STRATEGIST OR EVENT DELIVER"
                    interactiveChart={<TreemapChart />} // Pass your interactive chart component here
                />
            </div>

            <div className={styles.slide}>
                <ThreeColumnSlide
                    column1Content={
                        <Image
                            src="/images/ICE-Logo.svg"
                            alt="Another Logo"
                            width={150}
                            height={150}
                            className={styles.logo}
                        />
                    }
                    column2Title="Team Structure and Size"
                    column2Text={
                        <>
                            In terms of team size, the majority of corporate event planners worked in small teams, with
                            43.1% reporting teams of 1-5 members, and 34.5% organising between 1 and 30 events per year.
                            This is an 52.63% increase of 2023 to 2024.
                            <br />
                            <br />
                            External agencies (62.3%) and freelancers (37.7%) were commonly hired to manage workloads,
                            particularly during periods of event overload. This reliance on external resources
                            highlights the need for flexibility and the ability to scale up operations quickly in
                            response to demand.
                        </>
                    }
                    column3Title="Team Structure and Size"
                    interactiveChart={<Q2StackedBar />} // Pass your interactive chart component here
                />
            </div>

            <div className={styles.slide}>
                <ThreeColumnSlide
                    column1Content={
                        <Image
                            src="/images/ICE-Logo.svg"
                            alt="Another Logo"
                            width={150}
                            height={150}
                            className={styles.logo}
                        />
                    }
                    column2Title="How important is salary when choosing a job role"
                    column2Text={
                        <>
                           The most important factor for respondents when choosing a job role is Salary/Compensation, with an average rank of 2.35. This is closely followed by Company Culture and Work-Life Balance, which suggests that while financial considerations are crucial, workplace environment and personal well-being are also significant factors. Holiday Allowance is ranked as the least important, indicating that it may not be as immediate a concern compared to factors that impact day-to-day experiences.
                        </>
                    }
                    column3Title="Salary Importance"
                    interactiveChart={<Q3RadarChart />} // Pass your interactive chart component here
                />
            </div>
        </Slider>
    );
}
