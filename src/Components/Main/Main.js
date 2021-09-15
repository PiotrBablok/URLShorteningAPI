import React from "react";

import Headline from "./Headline/Headline";
import SiteInfo from "./SiteInfo/SiteInfo";
import GetStartedBtn from "./GetStartedBtn/GetStartedBtn";
import ShortenInput from "./ShorternInput/ShortenInput";
import FullInfo from './FullInfo/FullInfo'
import Back from './Back/Back';

import './Main.css'

function Title() {
    return (
        <main className='main'>
            <Headline />
            <SiteInfo />
            <GetStartedBtn />
            <ShortenInput />
            <FullInfo />
            <Back />
        </main>
    )
}

export default Title;