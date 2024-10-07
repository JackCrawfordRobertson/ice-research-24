// components/ThreeColumnSlide.js
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component
import styles from "./MobileThreeColumnSlide.module.css";

export default function ThreeColumnSlide({
  column3Title,
  column3Content,
  interactiveChart,
  column3SubHead,
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={styles.mainPage}>
      {/* Column 2 */}
      <div className={styles.column2}>
        {/* Sponsored by section with hard-coded logos using Next.js Image */}
        <div className={styles.sponsoredBy}>
          <Image
            src="/images/Landscape.svg"
            alt="Logo 1"
            className={styles.logo}
            width={200}  // Set appropriate width
            height={50}  // Set appropriate height
          />
          
        </div>
      </div>

      {/* Column 3 */}
      <div className={styles.column3}>
        <h1 className={styles.column3Title}>{column3Title}</h1>
        <div className={styles.Body}>{column3SubHead}</div>

        {/* Render the interactive chart component */}
        <div className={styles.chartContainer}>
          {interactiveChart ? interactiveChart : column3Content}
        </div>
      </div>
    </motion.div>
  );
}