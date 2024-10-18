import ExampleCard from "../../components/exampleCard/ExampleCard";
import React from "react";
import img from "../../aseets/img/ExampleCard/10.svg";
import styles from "./Examples.module.css";

function Examples() {
    return (
        <section className={styles.examples}>
            <div className={styles.container}>
                {Array.from({ length: 10 }).map((_, index) =>
                    <ExampleCard key={index} img={img} title={'Copy und paste Tasks'} number={index + 1} />
                )}
            </div>
            <div className={styles.line}>Use cases</div>
        </section>
    );
}

export default Examples;