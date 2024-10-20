import ExampleCard from "../../components/exampleCard/ExampleCard";
import React from "react";
import i1 from '../../aseets/img/ExampleCard/1.svg'
import i10 from '../../aseets/img/ExampleCard/10.svg'
import i2 from '../../aseets/img/ExampleCard/2.svg'
import i3 from '../../aseets/img/ExampleCard/3.svg'
import i4 from '../../aseets/img/ExampleCard/4.svg'
import i5 from '../../aseets/img/ExampleCard/5.svg'
import i6 from '../../aseets/img/ExampleCard/6.svg'
import i7 from '../../aseets/img/ExampleCard/7.svg'
import i8 from '../../aseets/img/ExampleCard/8.svg'
import i9 from '../../aseets/img/ExampleCard/9.svg'
import styles from "./Examples.module.css";

function Examples() {
    const examples = [
        {
            title: 'Filling out forms',
            img: i1,
        },
        {
            title: 'Navigation in web and enterprise applications',
            img: i2,
        },
        {
            title: 'Perform calculations',
            img: i3,
        },
        {
            title: 'Open and process emails and attachments',
            img: i4,
        },
        {
            title: 'Extract semi-structured and structured data',
            img: i5,
        },
        {
            title: 'Read and write databases',
            img: i6,
        },
        {
            title: 'Connect with system APIs',
            img: i7,
        },
        {
            title: 'Moving files and folders',
            img: i8,
        },
        {
            title: 'Copy und paste Tasks',
            img: i9,
        },
        {
            title: 'Reading and processing information',
            img: i10,
        },
    ]
    return (
        <section className={styles.examples}>
            <div className={styles.container}>
                {Array.from({ length: 10 }).map((_, index) =>
                    <ExampleCard key={index} img={examples[index].img} title={examples[index].title} number={index + 1} />
                )}
            </div>
            <div className={styles.line} id="cases">Use cases</div>
        </section>
    );
}

export default Examples;