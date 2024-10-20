import React, { useState } from "react";

import Button from "../../components/button/Button";
import InfoBar from "../../components/infoBar/InfoBar";
import logo59 from '../../aseets/img/logo-59.svg';
import styles from "./Contact.module.css";

function Contact() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        request: ''
    });

    const showForm = () => {
        setIsFormVisible(true);
    };

    const hideForm = () => {
        setIsFormVisible(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const getCurrentTime = () => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            time: getCurrentTime()
        };

        fetch('https://script.google.com/macros/s/AKfycbxrDjxpRE5LwQ2bluuCDcOhquFrs1d89RZaLU1f5n0DQUEbEFWsVNfBXC4F0w21xTHMkw/exec', {
            method: 'POST',
            body: JSON.stringify(dataToSend)
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setIsFormVisible(false);
            }).catch(error => {
                console.error('Ошибка:', error);
            });
    };

    return (
        <section className={styles.contact} id="contacts">
            <InfoBar text="Contacts"></InfoBar>
            <h1>Transforming businesses with us</h1>
            <p className="f-20 w-regular">Free analyze of potential processes from our business analyst</p>
            <Button text="Contact us" big onClick={showForm}></Button>

            <div className={`${styles.overlay} ${isFormVisible ? styles.visible : ''}`} onClick={hideForm}></div>
            <form className={`${isFormVisible ? styles.visible : ''}`} onSubmit={handleSubmit}>
                <img width="59" height="59" src={logo59} alt="Ostom logo"></img>
                <h3 className="f-48 w-450">Hello!</h3>
                <p className="f-20 w-regular">Send us the completed contact form and we will get back to you as soon as possible.</p>
                <div className={styles.inputsContainer}>
                    <div className={styles.input}>
                        <label htmlFor="name" className="f-14 w-450">Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="f-14 w-regular"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="email" className="f-14 w-450">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="f-14 w-regular"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className={styles.input}>
                    <label htmlFor="request" className="f-14 w-450">Request*</label>
                    <textarea
                        id="request"
                        name="request"
                        className="f-14 w-regular"
                        placeholder="Request"
                        value={formData.request}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <Button text="Confirm" onClick={handleSubmit}></Button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
