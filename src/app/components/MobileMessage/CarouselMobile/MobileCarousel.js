"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"; // Import Swiper styles
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import dynamic from "next/dynamic";
import styles from "./MobileCarousel.module.css";
import CallToAction from "./CallToAction";

// Dynamically import the slides
const WelcomeSlide = dynamic(() => import("./WelcomeSlide/MobileWelcomeSlide"), {ssr: false});
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

                {/* Third Slide */}

                <SwiperSlide>
                    <InViewSlide>
                        <ThreeColumnSlide
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
                            column3Title="Team Structure and Size"
                            column3SubHead="Most corporate event planners work in small teams, with 55.6% in teams of 1-5 members. Around 34.5% organise 1-30 events annually, and external support from agencies (62.3%) and freelancers (37.7%) is commonly used during busy periods. This highlights the need for flexibility and the ability to scale operations quickly."
                            interactiveChart={<Q2StackedBar />} // Pass your interactive chart component here
                        />
                    </InViewSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <InViewSlide>
                        <ThreeColumnSlide
                            interactiveChart={<CallToAction />} // Pass your interactive chart component here
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
