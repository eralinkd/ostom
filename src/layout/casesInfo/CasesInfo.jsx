import CaseInfo from "../../components/caseInfo/CaseInfo";
import React from "react";
import bg from '../../aseets/img/Cases/3.png'
import styles from "./CasesInfo.module.css";

function CasesInfo() {
    const data = {
        bg: bg,
        title: 'SOX compliance audit',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit libero placerat imperdiet neque et elit. Sollicitudin vivamus ac nullam vel felis sem.',
        challenges: [
            'Manual verification of revenue data integrity and consistency across multiple systems (Oracle, Salesforce, TrueCommerce, SFTP servers, shipment websites) is complex and time-consuming.',
            'High potential for human error when reconciling and cross-referencing data from different systems, leading to compliance risks during SOX audits.',
            'Dependence on key personnel to perform checks and validations, resulting in delays and inefficiencies in the audit process.'
        ],
        solutions: [
            'An automated process that performs scheduled checks of revenue data across Oracle, Salesforce, TrueCommerce, and SFTP servers to ensure consistency and accuracy.',
            'Automated reconciliation and validation of data integrity across systems, with exception handling and discrepancy reporting.',
            'Generation of detailed audit-ready reports that streamline the SOX audit process and ensure compliance with regulatory requirements.'
        ],
        hours: '80 hours',
        money: '$54,000',
        months: '1 month'
    }
    return (
        <section className={styles.cases}>
            {Array.from({ length: 3 }).map((_, index) =>
                <CaseInfo key={index} props={data} number={index + 1} />
            )}
        </section>
    )
}

export default CasesInfo