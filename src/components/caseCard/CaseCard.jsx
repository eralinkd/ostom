import './CaseCard.css'

import Button from '../button/Button.jsx'
import React from "react";
import img1 from '../../aseets/img/CaseCard/1.svg'
import img2 from '../../aseets/img/CaseCard/2.svg'
import img3 from '../../aseets/img/CaseCard/3.svg'

function CaseCard(props) {
    return (
        <div className='UI_caseCard_wrapper'>
            <div className='number_wrapper'>
                <div className='number f-14'>1</div>
                <p className='f-14'>Case</p>
            </div>

            <div className='card'>
                <p className='f-20 ml-15 pr-30'>Import Invoices from FedEx website to Oracle</p>
                <div className="icons">
                    <div className="icon">
                        <img width="54" height="48" src={img1} alt="clock icon"></img>
                        <p className='f-16'>80 hours</p>
                        <p className="desc f-14">saving per month</p>
                    </div>
                    <div className="icon">
                        <img width="51" height="51" src={img2} alt="money icon"></img>
                        <p className='f-16'>80 hours</p>
                        <p className="desc f-14">saving per year*</p>
                    </div>
                    <div className="icon">
                        <img width="47" height="47" src={img3} alt="calendar icon"></img>
                        <p className='f-16'>80 hours</p>
                        <p className="desc f-14">for implementation</p>
                    </div>
                </div>

                <div className='button-container'>
                    <Button text={'Get started'}></Button>
                </div>
            </div>
        </div>
    )
}

export default CaseCard