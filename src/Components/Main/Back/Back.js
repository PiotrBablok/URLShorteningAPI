import React from "react";

import GetStartedBtn from "../GetStartedBtn/GetStartedBtn";

import './Back.css';

function Back() {
    return (
        <div className='back'>
            <h3>Boost your links today</h3>
            <div className='startedBtn_position'>
                <GetStartedBtn />
            </div>
        </div>
    )
}

export default Back;