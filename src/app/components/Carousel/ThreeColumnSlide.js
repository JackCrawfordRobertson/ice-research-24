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
  {/* ICE Research Logo */}
  <div className={styles.logoContainer}>
    <Image 
      src="/images/Portrate.svg" 
      alt="ICE Research Logo" 
      width={100} 
      height={300} 
      className={styles.logo} 
    />
  </div>

  {/* Sponsor Section */}
  <div className={styles.sponsorSection}>
    <p className={styles.sponsorText}>Sponsored by</p>
    <Image 
      src="/images/Cvent Logo.png" 
      alt="Sponsor Logo" 
      width={150} 
      height={50} 
      className={styles.bottomLogo} 
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
        <h5>Hover over the chart to interact with it</h5>
        {/* Render the passed component or content */}
        <div>{column3Content}</div>
      </div>
    </motion.div>
  );
}