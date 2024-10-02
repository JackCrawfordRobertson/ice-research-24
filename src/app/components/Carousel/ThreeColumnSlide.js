// components/ThreeColumnSlide.js
import React from "react";
import {motion} from "framer-motion";
import Column1 from "../Carousel/Column1/Column1"; // Import the new Column1 component
import styles from "./ThreeColumnSlide.module.css";

export default function ThreeColumnSlide({
    column2Title,
    column2Text,
    column3Title,
    column3Content,
    interactiveChart,
    column3SubHead,
}) {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className={styles.mainPage}>
            {/* Column 1 */}
            <Column1 /> {/* Reuse the Column1 component */}
            {/* Column 2 */}
            <div className={styles.column2}>
                <h1 className={styles.Title}>{column2Title}</h1>
                <div className={styles.Body}>{column2Text}</div>
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
