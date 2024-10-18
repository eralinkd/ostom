import InfoBar from '../../components/infoBar/InfoBar';
import logo from '../../aseets/img/logo-66.svg'
import styles from './About.module.css'

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <InfoBar text='About us'/>
                    <h1>Who are we?</h1>
                    <img className='logo-66' alt='Ostom logo' src={logo}></img>
                </div>
                <div className={styles.info}>
                    <p className='f-20 w-450'>End-to-end RPA solutions to help you successfully become a fully automated enterprise</p>
                    <p className='f-14 w-regular'>Ostom is a team of young Ukrainians united by a common goal of creating innovative and reliable solutions for businesses. Our specialists are always ready to help you find the best solutions for your needs.</p>
                </div>
            </div>
        </section>
    );
}

export default About