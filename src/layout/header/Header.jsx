import Button from '../../components/button/Button'
import logo from '../../aseets/img/header-logo.svg'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img alt='Ostom logo' src={logo}></img>
            <ul>
                <li><a href='#header'>Home</a></li>
                <li><a href='#header'>About</a></li>
                <li><a href='#header'>Portfolio</a></li>
                <li><a href='#header'>Cases</a></li>
                <li><a href='#header'>Contacts</a></li>
            </ul>
            <Button text={'Contact us'} big></Button>
        </header>
    )
}

export default Header