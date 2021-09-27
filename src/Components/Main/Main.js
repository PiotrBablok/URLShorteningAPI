import React, { useState, useEffect } from "react";

import Headline from "./Headline/Headline";
import SiteInfo from "./SiteInfo/SiteInfo";
import GetStartedBtn from "./GetStartedBtn/GetStartedBtn";
import ShortenInput from "./ShorternInput/ShortenInput";
import FullInfo from './FullInfo/FullInfo'
import Back from './Back/Back';

import './Main.css'

function Title() {

    const [newUrl, setNewUrl] = useState('');
    const [currentUrl, setCurrentUrl] = useState(() => {
        const localData = sessionStorage.getItem('linkData');
        return localData ? JSON.parse(localData) : [];
    });

    //Fetch data frim API 
    function mergeUrls(e) {
        e.preventDefault();
        if (newUrl !== '') {
            fetch(`https://api.shrtco.de/v2/shorten?url=${newUrl}`)
                .then(data => data.json())
                .then(short => {
                    if (short.result['full_short_link2'] !== undefined) {
                        setCurrentUrl((prevState) => {
                            return [...prevState, {
                                long: short.result['original_link'],
                                shorten: short.result['full_short_link2']
                            }]
                        })
                    }
                })
                .catch(err => { console.log(err) })
        }
        setNewUrl('');
    }

    //Listens for user input
    function getUrl(e) {
        setNewUrl(e.target.value);
    }

    useEffect(() => {
        sessionStorage.setItem('linkData',  JSON.stringify(currentUrl))
    }, [currentUrl]);

    return (
        <main className='main'>
            <Headline />
            <SiteInfo />
            <GetStartedBtn />
            <ShortenInput liftData={getUrl} submitUrl={mergeUrls} clearInput={newUrl} />
            <FullInfo passData={currentUrl} />
            <Back />
        </main>
    )
}

export default Title;