import Button from '../../components/button/Button'
import logo from '../../aseets/img/header-logo.svg'
import styles from './Header.module.css'
import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false)
    
    return (
        <header id='header' className={`${styles.header} ${open ? styles.open : ''}`}>
            <img alt='Ostom logo' src={logo}></img>
            <ul>
                <li><a href='#header'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#cases'>Cases</a></li>
                <li><a href='#contacts'>Contacts</a></li>
            </ul>
            <Button text={'Contact us'} big></Button>

            <section className={styles.mobileHeader}>
                <img alt='Ostom logo' src={logo}></img>
                <section className={styles.burger} onClick={() => { setOpen(!open) }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </section>

            <nav className={styles.mobileNav}>
                <ul className={styles.tabs}>
                    <li><a href='#header'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#cases'>Cases</a></li>
                    <li><a href='#contacts'>Contacts</a></li>
                </ul>
            </nav>

            <section className={styles.languages}></section>
        </header>
    )
}

export default Header