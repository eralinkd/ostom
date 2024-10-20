import React, { useState } from "react";

import CaseInfo from "../../components/caseInfo/CaseInfo";
import bg1 from '../../aseets/img/Cases/1.png';
import bg2 from '../../aseets/img/Cases/2.png';
import bg3 from '../../aseets/img/Cases/3.png';
import styles from "./CasesInfo.module.css";
import { useSwipeable } from "react-swipeable";

function Contact() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 3;

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

    const data = [
        {
            bg: bg1,
            title: 'Inventory Management Optimization',
            description: 'Retail companies often struggle with managing stock levels efficiently across multiple locations, leading to either overstocking or stockouts. Both scenarios result in lost revenue and dissatisfied customers. By automating inventory management, retailers can ensure real-time tracking of products, better predict demand, and streamline their supply chain operations.',
            challenges: [
                'Manual tracking of inventory across multiple warehouses leads to inaccuracies in stock levels.',
                'Overstocking or stockouts occur due to lack of real-time inventory visibility.',
                'Delays in fulfilling customer orders result in lost sales and customer dissatisfaction.'
            ],
            solutions: [
                'Implementation of an automated inventory management system integrated across all warehouse locations.',
                'Real-time tracking of stock levels, demand forecasting, and automated reorder triggers.',
                'Centralized reporting to monitor stock movement and adjust supply chain operations accordingly.'
            ],
            hours: '80 hours',
            money: '$54,000',
            months: '1 month'
        },
        {
            bg: bg2,
            title: 'Regulatory Reporting Automation',
            description: 'Banks are subject to stringent regulatory requirements and must regularly submit reports to various authorities. Manually compiling these reports is not only time-consuming but also increases the risk of errors, which can lead to penalties. Automating regulatory reporting ensures timely submissions, reduces errors, and allows compliance teams to focus on higher-value tasks.',
            challenges: [
                'Manual compilation of data for regulatory reporting is complex and time-consuming.',
                'High risk of inaccuracies and omissions when preparing reports for multiple regulatory bodies.',
                'Compliance teams struggle to keep up with changing regulations and reporting deadlines.'
            ],
            solutions: [
                'An automated reporting system that extracts data from core banking systems and compiles it into regulatory-compliant formats.',
                'Built-in checks for data accuracy and completeness before submission.',
                'Regular updates to ensure reports meet the latest regulatory requirements.'
            ],
            hours: '60 hours',
            money: '$42,000',
            months: '1 month'
        },
        {
            bg: bg3,
            title: 'Accounts Payable Automation',
            description: 'Managing accounts payable (AP) involves processing large volumes of invoices, verifying supplier details, and ensuring timely payments. Manual AP processes are often slow, error-prone, and resource-intensive, resulting in missed payments, penalties, and strained supplier relationships. Automating the AP process streamlines invoice management, approvals, and payment scheduling, reducing errors and ensuring timely payments.',
            challenges: [
                'Manual entry of invoice data is time-consuming and leads to data entry errors.',
                'Invoices require multiple levels of approval, causing delays in payment processing.',
                'Late payments result in penalties and damage relationships with suppliers.'
            ],
            solutions: [
                'Automated accounts payable system that captures invoice data using OCR (optical character recognition).',
                'Automated approval workflows to route invoices for necessary sign-offs before payment.',
                'Scheduled, automatic payments to suppliers to ensure on-time settlements.'
            ],
            hours: '180 hours',
            money: '$120,000',
            months: '2 months'
        },
    ]

    return (


        <section className={styles.cases}>
            <div className={`${styles.galleryWrapper} ${styles.mobileOnly}`} {...handlers}>
                <div
                    className={styles.caseCards}
                    style={
                        isMobile()
                            ? {
                                transform: `translateX(${(-currentIndex + 1) * 100}%)`,
                                transition: "transform 0.5s ease-in-out",
                            }
                            : {}
                    }
                >
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div className={styles.cardWrapper} key={index}>
                            <CaseInfo props={data[index]} number={index + 1} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${styles.indicatorWrapper} ${styles.mobileOnly}`}>
                <div className={styles.indicatorLine}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.indicatorSegment} ${currentIndex === index ? styles.active : ""
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
