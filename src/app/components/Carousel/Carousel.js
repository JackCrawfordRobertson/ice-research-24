'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import styles from "./Carousel.module.css";

// Dynamically import the slides
const WelcomeSlide = dynamic(() => import("./WelcomeSlide/WelcomeSlide"), { ssr: false });
const ThreeColumnGrid = dynamic(() => import("../Carousel/Summery/ThreeColumnGrid"), { ssr: false });
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
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Swiper settings
  const settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    onSlideChange: (swiper) => setCurrentSlide(swiper.activeIndex),
    onSwiper: setSwiperInstance, 
    allowTouchMove: false, 
  };

  // Programmatically change the slide when currentSlide changes
  useEffect(() => {
    if (swiperInstance && typeof swiperInstance.slideTo === 'function') {
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
                    column2Title="ARE YOU AN EVENT STRATEGIST OR EVENT DELIVER?"
                    column2Text="Corporate event creators tend to identify themselves as fulfilling both roles—Event Strategists and Event Deliverers—with 46.6% selecting 'Both.' A significant portion (39.7%) identified solely as Event Strategists (focused on high-level planning and decision making), while a smaller group (13.8%) viewed themselves as primarily Event Deliverers (focused on logistics and execution). Therefore, most respondents see themselves involved in both strategic and operational aspects of event planning, with a slightly stronger leaning towards strategy."
                    column3Title="EVENT STRATEGIST OR EVENT DELIVER"
                    column3SubHead="Hover over the chart to interact with the data."
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
        <SwiperSlide>
          <InViewSlide>
          <ThreeColumnSlide
                    column2Title="Event Budgeting and Financial Management"
                    column2Text="Budget management remains a core part of the responsibilities for corporate event planners. Nearly half of the respondents (48.9%) stated that stakeholders were responsible for setting the event budget, while 46.7% indicated that the event team itself took on this responsibility."
                    column3Title="Financial Management."
                    column3SubHead="Hover over the chart to interact with the data."
                    interactiveChart={<Q4Bar />} // Lazily loaded BarChart
                />
          </InViewSlide>
        </SwiperSlide>
        <SwiperSlide>
          <InViewSlide>
          <ThreeColumnSlide
                    column2Title="Future Skills for Event Professionals"
                    column2Text="As technology continues to transform the events industry, AI and technology proficiency were seen as the most important future skills for corporate event planners, with 26.98% of respondents emphasising the need for technical know-how. Data analysis skills were also highly valued (19.58%), as event planners seek to make data-driven decisions to optimise event performance. Stakeholder management (19.05%) and sustainability practices (16.91%) were other skills deemed essential for future success, underscoring the multifaceted nature of corporate event planning."
                    column3Title="Most Important Future Skills"
                    column3SubHead="Hover over the chart to interact with the data."
                    interactiveChart={<Q5Bubble />} // Lazily loaded BarChart
                />
          </InViewSlide>
        </SwiperSlide>
        <SwiperSlide>
          <InViewSlide>
          <ThreeColumnSlide
                    column2Title="Challenges Faced by Corporate Event Planners"
                    column2Text="Budget constraints were reported as the most significant challenge for corporate event planners, with 47.7% of respondents ranking it as their top concern for the coming 12 months. Stakeholder management (22.7%) and technology integration (27.3%) were also highlighted as major hurdles. Additionally, 50% of planners expect their team sizes to remain the same over the next year, despite the increasing complexity of events. This highlights the pressure on event planners to deliver high-quality, innovative experiences with limited resources. Sustainability practices also presented a challenge, with 70.2% of respondents citing cost as the biggest barrier to incorporating sustainable initiatives into their events."
                    column3Title="Challenges Faced by Event Planners"
                    column3SubHead="Hover over the chart to interact with the data."
                    interactiveChart={<Q6RadarChart />} // Lazily loaded BarChart
                />
          </InViewSlide>
        </SwiperSlide>
        <SwiperSlide>
          <InViewSlide>
          <ThreeColumnSlide
                    column2Title="Technology Adoption"
                    column2Text="Many event planners already utilise AI to enhance various aspects of event management, with 41.4% of respondents reporting its use in content generation, logistics, and data analysis. The rise of hybrid event formats was also noted, with 74.5% seeing it as an enduring trend for the industry. As organisations become more conscious of their environmental impact, sustainability emerged as a lower priority than technology integration, with respondents focusing on other practices in their events first."
                    interactiveChart={<Q7TechnologyAdoption />} // Lazily loaded BarChart
                />
          </InViewSlide>
        </SwiperSlide>
        <SwiperSlide>
          <InViewSlide>
          <ThreeColumnSlide
                    column2Title="ROI and Success Metrics"
                    column2Text="The data suggests that event planners prioritise elements that directly impact the attendee experience, such as content creation, engagement, and budget management. While important, factors like technology integration and sustainability are considered less critical, indicating that planners might still view them as supporting, rather than central, components in delivering successful events. This highlights a potential opportunity for greater emphasis on sustainable practices and technological advancements in future event strategies."
                    column3Title="Priorities when organising an event"
                    column3SubHead="HHover over the chart to interact with the data."
                    interactiveChart={<Q8ROI />} // Lazily loaded BarChart
                />
          </InViewSlide>
        </SwiperSlide>
        <SwiperSlide>
          <InViewSlide>
          <ThreeColumnSlide
                    column2Title="ROI and Success Metrics"
                    column2Text="When measuring the success of their events, the majority of corporate event planners prioritised attendee satisfaction, with 93.5% using this as a key metric. Post-event surveys were also widely used (76.1%), along with tracking the number of attendees (71.7%). Lead generation (58.7%) and content performance (52.2%) emerged as other significant indicators of success, reflecting the importance of events as not only networking opportunities but also as business development and marketing tools. Interestingly, 39.1% used net promoter scores (NPS) to gauge loyalty and satisfaction, while 37% monitored social media engagement, indicating a slow but growing interest in digital touchpoints and audience sentiment post-event."
                    column3Title="Metrics used to measure the success of your events"
                    column3SubHead="Hover over the chart to interact with the data."
                    interactiveChart={<Q9Metrics />} // Lazily loaded BarChart
                />
          </InViewSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// In-view hook for optimising performance
function InViewSlide({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return <div ref={ref}>{inView && children}</div>;
}