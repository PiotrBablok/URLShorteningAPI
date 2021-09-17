import React from "react";

import './FullInfo.css'

import Brand from '../../../images/icon-brand-recognition.svg'
import Detailed from '../../../images/icon-detailed-records.svg'
import Fully from '../../../images/icon-fully-customizable.svg'
import LinkLIst from "./LinkLIst";

function FullInfo(props) {

    

    return (
        <div className='fullInfo'>
            <LinkLIst links={props}/>
            <h3>Adanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>

            <div className='frame'>
                <div className='picto'>
                    <img src={Brand} alt='chart' />
                </div>
                <h4>Brand Recognition</h4>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded
                    links help instil confidence in your content.</p>
            </div>

            <div className='frame'>
                <div className='picto detailed'>
                    <img src={Detailed} alt='pointer' />
                </div>
                <h4>Detailed Records</h4>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage
                    with your content helps inform better decision.</p>
            </div>

            <div className='frame'>
                <div className='picto'>
                    <img src={Fully} alt='burhses'/>
                </div>
                <h4>Fully Customizable</h4>
                <p>Improve brand awareness and content discoverability trough customizable links,
                    superchaging audience engagment.</p>
            </div>
            <div className='vLine'></div>
        </div>
    );
};

export default FullInfo;