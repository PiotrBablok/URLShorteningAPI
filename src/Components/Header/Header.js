import React, { useState, useRef, useEffect } from "react";

import logo from '../../images/logo.svg'
import menu from '../../images/bars-solid-menu.svg'
import MobMenu from "./MobMenu/MobMenu";


import './Header.css'


function Header() {
    const [dropMenuState, setDropMenuState] = useState('hidden')

    function showMenu(){
        if(dropMenuState === 'hidden'){
            setDropMenuState('visible')
        }else {
            setDropMenuState('hidden')
        }
    }

    const refMenu = useRef();
    const menuBar = useRef();
   
    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            if(refMenu.current && !refMenu.current.contains(e.target)){
                if(menuBar.current && !menuBar.current.contains(e.target)){
                    setDropMenuState('hidden');
                }
            }
        })
    }, [])

    return (
        <header>
            <nav className='siteNav'>
                <img className='logo' src={logo} alt='logo' />
                <img ref={menuBar} className='menuBar' onClick={showMenu} src={menu} alt='menu' />
            </nav>
            <MobMenu visible={dropMenuState} ref={refMenu}/> 
        </header>

    )
}

export default Header;