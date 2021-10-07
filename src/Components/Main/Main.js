import React, { useState, useEffect } from "react";

import Headline from "./Headline/Headline";
import SiteInfo from "./SiteInfo/SiteInfo";
import GetStartedBtn from "./GetStartedBtn/GetStartedBtn";
import ShortenInput from "./ShorternInput/ShortenInput";
import FullInfo from './FullInfo/FullInfo'
import Back from './Back/Back';

import './Main.css'

function Title() {

    //Load shorted links from localstore
    function storeData() {
        const localData = sessionStorage.getItem('linkData');
        return localData ? JSON.parse(localData) : [];
    }

    const [newUrl, setNewUrl] = useState('');
    const [currentUrl, setCurrentUrl] = useState(storeData());
    const [alertStatus, setAlertStatus] = useState(false);

     //Save the generated links to sessionStorage
     useEffect(() => {
        sessionStorage.setItem('linkData', JSON.stringify(currentUrl))
    }, [currentUrl]);

    //Fetch data from API 
    function mergeUrls(e) {
        e.preventDefault();
        if (newUrl !== '') {
            setAlertStatus(false);
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
                .catch(err => console.log(err))
        } else {
            setAlertStatus(true);
        }
        setNewUrl('');
    }

    //Listens for user input
    function getUrl(e) {
        setNewUrl(e.target.value);
    }

    return (
        <main className='main'>
            <Headline />
            <SiteInfo />
            <div className='btn_position'>
                <GetStartedBtn />
            </div>
            <ShortenInput liftData={getUrl} alert={alertStatus} submitUrl={mergeUrls} clearInput={newUrl} />
            <FullInfo passData={currentUrl} />
            <Back />
        </main>
    )
}

export default Title;