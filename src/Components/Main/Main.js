import React, { useState } from "react";

import Headline from "./Headline/Headline";
import SiteInfo from "./SiteInfo/SiteInfo";
import GetStartedBtn from "./GetStartedBtn/GetStartedBtn";
import ShortenInput from "./ShorternInput/ShortenInput";
import FullInfo from './FullInfo/FullInfo'
import Back from './Back/Back';

import './Main.css'

const LINKS = [];
const SHORTED_LINKS = [];

function Title() {

    const [newUrl, setNewUrl] = useState('');

    const [currentUrl, setCurrentUrl] = useState(LINKS);

    const [shortedUrls, setShortedUrls] = useState(SHORTED_LINKS)

    function mergeUrls(e) {
        e.preventDefault();
        setCurrentUrl((prevState) => {
            return [...prevState, newUrl]
        })
        setNewUrl('');

        fetch(`https://api.shrtco.de/v2/shorten?url=${newUrl}`)
            .then(data => data.json())
            .then(short => {
                if(short.result['short_link2'] !== undefined){
                    setShortedUrls((prevState) => {
                        return [...prevState,short.result['short_link2']]
                    })
                }  
            })
            .catch(err => console.log('Wyjebało się...'))
    }

    function getUrl(e) {
        setNewUrl(e.target.value);
    }

    return (
        <main className='main'>
            <Headline />
            <SiteInfo />
            <GetStartedBtn />
            <ShortenInput liftData={getUrl} submitUrl={mergeUrls} clearInput={newUrl} />
            <FullInfo standart={currentUrl} short={shortedUrls}/>
            <Back />
        </main>
    )
}

export default Title;