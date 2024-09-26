'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = ({ setCurrentSlide }) => {
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
  const buttonRefs = useRef([]);
  const [highlightProps, setHighlightProps] = useState({ width: 0, left: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Burger menu state
  const buttons = ['Welcome', 'Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];

  // Initialize highlight position on page load
  useLayoutEffect(() => {
    if (buttonRefs.current[currentButtonIndex]) {
      const initialWidth = buttonRefs.current[currentButtonIndex].offsetWidth;
      const initialLeft = buttonRefs.current[currentButtonIndex].offsetLeft;
      setHighlightProps({
        width: initialWidth,
        left: initialLeft,
      });
    }
  }, []);

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
    setCurrentButtonIndex(index);

    if (buttonRefs.current[index]) {
      const newWidth = buttonRefs.current[index].offsetWidth;
      const newLeft = buttonRefs.current[index].offsetLeft;
      setHighlightProps({
        width: newWidth,
        left: newLeft,
      });
    }

    // Close the burger menu after clicking an option on mobile
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Burger Menu Button for Mobile */}
      <div className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`} />
        <div className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`} />
        <div className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`} />
      </div>

      {/* Menu items (visible on desktop, conditionally visible on mobile) */}
      <div className={`${styles.buttonContainer} ${isMenuOpen ? styles.openMenu : ''}`}>
        <motion.div
          className={styles.highlight}
          animate={highlightProps}
          transition={{ duration: 0.3 }}
        />
        {buttons.map((item, index) => (
          <button
            key={index}
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => handleButtonClick(index)}
            className={`${styles.button} ${
              currentButtonIndex === index ? styles.active : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;