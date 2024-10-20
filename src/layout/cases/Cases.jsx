import React, { useState } from "react";

import CaseCard from "../../components/caseCard/CaseCard";
import bg1 from '../../aseets/img/CaseCard/bg-1.svg'
import bg2 from '../../aseets/img/CaseCard/bg-2.svg'
import bg3 from '../../aseets/img/CaseCard/bg-3.svg'
import bg4 from '../../aseets/img/CaseCard/bg-4.svg'
import bg5 from '../../aseets/img/CaseCard/bg-5.svg'
import styles from "./Cases.module.css";
import { useSwipeable } from "react-swipeable";

function Contact() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 5;

    const cases = [
        {
            title: 'Import Invoices from FedEx website to Oracle',
            hours: '80 hours',
            money: '$54,000',
            months: '1 month',
            bg: bg1,
        },
        {
            title: 'Populate Oracle with information from remittance advises',
            hours: '60 hours',
            money: '$42,000',
            months: '1 month',
            bg: bg2,
        },
        {
            title: 'SOX compliance audit',
            hours: '180 hours',
            money: '$120,000',
            months: '2 months',
            bg: bg3,
        },
        {
            title: 'Loan Applicant Screening',
            hours: '200 hours',
            money: '$135,000',
            months: '6 weeks',
            bg: bg4,
        },
        {
            title: 'Oracle FabConnect Reporting',
            hours: '70 hours',
            money: '$50,000',
            months: '3 weeks',
            bg: bg5,
        },
    ]

    const handleSwipe = (direction) => {
        if (direction === "LEFT") {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
        } else if (direction === "RIGHT") {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT"),
        onSwipedRight: () => handleSwipe("RIGHT"),
    });

    // Function to determine if it is a mobile view
    const isMobile = () => window.innerWidth <= 768;

    return (
        <section className={styles.contact}>
            <div className={styles.heading}>
                <h1>Watch use cases</h1>
            </div>
            <div className={`${styles.galleryWrapper} ${styles.mobileOnly}`} {...handlers}>
                <div
                    className={styles.caseCards}
                    style={
                        isMobile()
                            ? {
                                  transform: `translateX(${(-currentIndex + 2) * 100}%)`,
                                  transition: "transform 0.5s ease-in-out",
                              }
                            : {}
                    }
                >
                    {Array.from({ length: totalCards }).map((_, index) => (
                        <div className={styles.cardWrapper} key={index}>
                            <CaseCard number={index + 1} case={cases[index]} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${styles.indicatorWrapper} ${styles.mobileOnly}`}>
                <div className={styles.indicatorLine}>
                    {Array.from({ length: totalCards }).map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.indicatorSegment} ${
                                currentIndex === index ? styles.active : ""
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
