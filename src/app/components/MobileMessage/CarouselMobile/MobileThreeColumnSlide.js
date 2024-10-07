// components/ThreeColumnSlide.js
import React from "react";
import { motion } from "framer-motion";
import styles from "./MobileThreeColumnSlide.module.css";

export default function ThreeColumnSlide({
  column3Title,
  column3Content,
  interactiveChart,
  column3SubHead,
  logo1, // New props for logos
  logo2, // New props for logos
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={styles.mainPage}>
      {/* Column 2 */}
      <div className={styles.column2}>
        {/* Sponsored by section with logos */}
        <div className={styles.sponsoredBy}>
          <img src={logo1} alt="Logo 1" className={styles.logo} />
          <span className={styles.sponsoredText}>Sponsored by</span>
          <img src={logo2} alt="Logo 2" className={styles.logo} />
        </div>
      </div>

      {/* Column 3 */}
      <div className={styles.column3}>
        <h1 className={styles.column3Title}>{column3Title}</h1>
        <div className={styles.Body}>{column3SubHead}</div>

        {/* Render the interactive chart component */}
        <div className={styles.chartContainer}>{interactiveChart ? interactiveChart : column3Content}</div>
      </div>
    </motion.div>
  );
}