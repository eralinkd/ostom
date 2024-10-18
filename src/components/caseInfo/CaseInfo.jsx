import './CaseInfo.css'

import Button from '../button/Button';
import InfoBar from '../infoBar/InfoBar';
import React from "react";
import img1 from '../../aseets/img/CaseCard/1.svg'
import img2 from '../../aseets/img/CaseCard/2.svg'
import img3 from '../../aseets/img/CaseCard/3.svg'

function CaseInfo(p) {
    const props = {
        ...p.props,
        number: p.number,
    };

    const backgroud = {
        backgroundImage: `url(${props.bg})`,
    }

    return (
        <div className="UI_caseInfo" style={backgroud}>
            <div className='number-wrapper'>
                <div className="number f-20">{props.number}</div>
                <p className='f-20'>Case</p>
            </div>
            <div className="container">
                <div className="info">
                    <p className='f-48'>{props.title}</p>
                    <p className='f-20'>{props.description}</p>
                </div>
                <div className='left-container'>
                    <div className="text">
                        <div className="challenge">
                            <InfoBar text='The Challenge' />
                            <ul>
                                {props.challenges.map((challenge, index) => (
                                    <li className="f-14 w-regular" key={index}>{challenge}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="solution">
                            <InfoBar text='The Solution' />
                            <ul>
                                {props.solutions.map((solution, index) => (
                                    <li className="f-14 w-regular" key={index}>{solution}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img width="54" height="48" src={img1} alt="clock icon"></img>
                            <p className='f-16'>{props.hours}</p>
                            <p className="desc f-14">saving per month</p>
                        </div>
                        <div className="icon">
                            <img width="51" height="51" src={img2} alt="money icon"></img>
                            <p className='f-16'>{props.money}</p>
                            <p className="desc f-14">saving per year*</p>
                        </div>
                        <div className="icon">
                            <img width="47" height="47" src={img3} alt="calendar icon"></img>
                            <p className='f-16'>{props.months}</p>
                            <p className="desc f-14">for implementation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <Button text={'Get started'}></Button>
            </div>
        </div>
    )
}

export default CaseInfo