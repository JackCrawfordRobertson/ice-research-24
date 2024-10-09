// components/Column1.js
import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import styles from "./Column1.module.css";

const Column1 = () => {
    return (
        <div className={styles.columnSub} style={{ position: 'relative' }}>
            {/* ICE Research Logo */}
            <div className={styles.logoContainer}>
                <Image
                    src="/images/Portrate.svg"
                    alt="ICE Research Logo"
                    width={70}
                    height={280}
                    className={styles.logo}
                />
            </div>

            {/* Sponsor Section in white box */}
            <div className={styles.contentBox}>
                <Image
                    src="/images/Sponsored by.png"
                    alt="Sponsor Logo"
                    width={30}
                    height={184}
                    className={styles.bottomLogo}
                />
            </div>

            {/* Vertical Rule */}
            <Box
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '1px',
                    backgroundColor: 'rgba(0, 0, 0, 0.12)', // Light grey color
                    marginLeft: '20px', // Add spacing to the left of the vertical rule
                }}
            />
        </div>
    );
};

export default Column1;