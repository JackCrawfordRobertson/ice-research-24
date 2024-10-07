"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"; // Import Swiper styles
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import dynamic from "next/dynamic";
import styles from "./MobileCarousel.module.css";

// Dynamically import the slides
const WelcomeSlide = dynamic(() => import("./WelcomeSlide/MobileWelcomeSlide"), {ssr: false});
const ThreeColumnGrid = dynamic(() => import("../CarouselMobile/Summery/MobileSummery"), {ssr: false});
const ThreeColumnSlide = dynamic(() => import("./MobileThreeColumnSlide"), {ssr: false});
const TreemapChart = dynamic(() => import("../../Charts/Q1TreeMap"), {ssr: false});
const Q2StackedBar = dynamic(() => import("../../Charts/Q2StackedBar"), {ssr: false});
const Q3RadarChart = dynamic(() => import("../../Charts/Q3RadarChart"), {ssr: false});

export default function Carousel({currentSlide, setCurrentSlide}) {
    const [swiperInstance, setSwiperInstance] = useState(null);

    // Swiper settings
    const settings = {
        slidesPerView: 1,
        spaceBetween: 30,
        onSlideChange: (swiper) => setCurrentSlide(swiper.activeIndex),
        onSwiper: setSwiperInstance,
        allowTouchMove: true,
    };

    // Programmatically change the slide when currentSlide changes
    useEffect(() => {
        if (swiperInstance && typeof swiperInstance.slideTo === "function") {
            swiperInstance.slideTo(currentSlide);
        }
    }, [currentSlide, swiperInstance]);

    return (
        <div className={styles.sliderWrapper}>
            <Swiper {...settings}>
                {/* First Slide */}
                <SwiperSlide>
                    <InViewSlide>
                        <WelcomeSlide setCurrentSlide={setCurrentSlide} />
                    </InViewSlide>
                </SwiperSlide>

                {/* Second Slide */}

                <SwiperSlide>
                    <InViewSlide>
                        <ThreeColumnSlide
                            column2Title="Comprehensive Analysis and Key Insights"
                            column2Text="In our 2024 ICE research, we took a deep dive into the events industry's ever-changing landscape. While sustainability is still a top priority for our team at ICE-HUB, we uncovered other fascinating insights, too."
                            interactiveChart={<ThreeColumnGrid />} // Pass your interactive chart component here
                        />
                    </InViewSlide>
                </SwiperSlide>

                {/* Third Slide */}

                <SwiperSlide>
                    <InViewSlide>
                        <ThreeColumnSlide
                            logo1="/images/Cvent Logo.png" // Correct path to the logo
                            logo2="/images/Cvent Logo.png" // Correct path to the logo
                            column3Title="ARE YOU AN EVENT STRATEGIST OR EVENT DELIVER?"
                            column3SubHead="Most corporate event creators (46.6%) identify as both Event Strategists and Deliverers, handling both planning and logistics. A significant 39.7% focus only on strategy, while 13.8% handle logistics. Overall, there’s a stronger emphasis on strategic roles."
                            interactiveChart={<TreemapChart />} // Pass your interactive chart component here
                        />
                    </InViewSlide>
                </SwiperSlide>

                {/* Third Slide */}
                <SwiperSlide>
                    <InViewSlide>
                        <ThreeColumnSlide
                            column2Title="Team Structure and Size"
                            column2Text="In terms of team size, the majority of corporate event planners worked in small teams, with 55.6% reporting teams of 1-5 members, and 34.5% organising between 1 and 30 events per year. This is an X increase of 2023 to 2024. External agencies (62.3%) and freelancers (37.7%) were commonly hired to manage workloads, particularly during periods of event overload. This reliance on external resources highlights the need for flexibility and the ability to scale up operations quickly in response to demand. 
"
                            column3Title="Team Structure and Size"
                            column3SubHead="Hover over and click on the chart to interact with the data."
                            interactiveChart={<Q2StackedBar />} // Pass your interactive chart component here
                        />
                    </InViewSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <InViewSlide>
                        <ThreeColumnSlide
                            column2Title="How important is salary when choosing a job role?"
                            column2Text="The most important factor for respondents when choosing a job role is Salary/Compensation, with an average rank of 3.65. This is closely followed by Company Culture and Work-Life Balance, which suggests that while financial considerations are crucial, workplace environment and personal well-being are also significant factors. Holiday Allowance is ranked as the least important, indicating that it may not be as immediate a concern compared to factors that impact day-to-day experiences."
                            column3Title="Salary Importance"
                            column3SubHead="Hover over the chart to interact with the data."
                            interactiveChart={<Q3RadarChart />} // Pass your interactive chart component here
                        />
                    </InViewSlide>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

// In-view hook for optimising performance
function InViewSlide({children}) {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1});
    return <div ref={ref}>{inView && children}</div>;
}
