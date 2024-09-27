// components/Column1.js
import React from "react";
import Image from "next/image";
import styles from "./Column1.module.css";

const Column1 = () => {
    return (
        <div className={styles.columnSub}>
            {/* ICE Research Logo */}
            <div className={styles.logoContainer}>
                <Image
                    src="/images/Portrate.svg"
                    alt="ICE Research Logo"
                    width={100}
                    height={350}
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
        </div>
    );
};

export default Column1;