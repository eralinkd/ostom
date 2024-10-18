import InfoBar from '../../components/infoBar/InfoBar';
import styles from './What.module.css'

function What() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <InfoBar text='What is RPA?'/>
                    <h1>What does RPA offer?</h1>
                </div>
                <div className={styles.info}>
                    <p className={`${styles.big} f-20 w-450`}>Companies that successfully implement RPA can increase their operational efficiency by up to 80%.</p>
                    <p className='f-14 w-regular'>Robotic Process Automation (RPA) is a technology that aims to automate manual and repetitive tasks and business processes through the use of software robots.
                        <br></br><br></br>
                        The infrastructure of the existing systems is not changed, but existing applications such as ERP, CRM, HRM systems and office applications are automated.
                        <br></br><br></br>
                        In principle, all activities that a person performs on a computer can be automated. The question we can answer together with you is which processes should be automated.</p>
                </div>
            </div>
        </section>
    );
}

export default What