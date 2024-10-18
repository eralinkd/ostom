import CaseCard from '../../components/caseCard/CaseCard';
import InfoBar from '../../components/infoBar/InfoBar';
import React from "react";
import styles from "./Cases.module.css";

function Cases() {
    return (
        <section className={styles.cases}>
            <div className={styles.heading}>
                <InfoBar text='OUR PORTFOLIO'/>
                <h2>Watch use cases</h2>
            </div>

            <div className={styles.caseCards}>
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
            </div>
        </section>
    );
}

export default Cases;