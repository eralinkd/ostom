import React from "react";
import f from '../../aseets/img/Footer/f.svg'
import i from '../../aseets/img/Footer/i.svg'
import l from '../../aseets/img/Footer/l.svg'
import logo from '../../aseets/img/header-logo.svg'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.icons}>
                    <a href="#header">
                        <img src={f} alt="Facebook link icon"></img>
                    </a>
                    <a href="#header">
                        <img src={l} alt="LinkedIn link icon"></img>
                    </a>
                    <a href="#header">
                        <img src={i} alt="Instagram link icon"></img>
                    </a>
                </div>
                <img src={logo} alt="Ostom logo" className={styles.logo}></img>
            </div>
            <div className={styles.bottom}>
                <p className="f-14 w-regular">Copyright <span>©</span> 2024 by Ostom</p>
                <ul>
                    <li><a className="f-14 w-regular" href="#header">Privacy Policy</a></li>
                    <li><a className="f-14 w-regular" href="#header">Terms of Service</a></li>
                    <li><a className="f-14 w-regular" href="#header">Cookies Settings</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer