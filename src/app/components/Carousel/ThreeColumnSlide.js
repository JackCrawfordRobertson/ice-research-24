import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ThreeColumnSlide.module.css";

export default function ThreeColumnSlide({ column2Title, column2Text, column3Title, column3Content }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.page}
    >
      {/* Column 1 */}
      <div className={styles.column1}>
        <div className={styles.logoContainer}>
          <Image 
            src="/images/ICE-Logo.svg" 
            alt="ICE Research Logo" 
            width={100} 
            height={250} 
            className={styles.logo} 
          />
        </div>
      </div>

      {/* Column 2 */}
      <div className={styles.column2}>
        <h2>{column2Title}</h2>
        <p>{column2Text}</p>
      </div>

      {/* Column 3 */}
      <div className={styles.column3}>
        <h1>{column3Title}</h1>
        <h5>Hover over the chart to inteact with it </h5>
        {/* Render the passed component or content */}
        <div>{column3Content}</div>
      </div>
    </motion.div>
  );
}