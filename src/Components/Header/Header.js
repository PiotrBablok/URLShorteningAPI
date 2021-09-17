import React, { useState, useRef, useEffect } from "react";

import logo from '../../images/logo.svg'
import menu from '../../images/bars-solid-menu.svg'
import MobMenu from "./MobMenu/MobMenu";


import './Header.css'


function Header() {
    const [dropMenuState, setDropMenuState] = useState(false)

    function showMenu(){
        setDropMenuState(!dropMenuState);
    }

    const refMenu = useRef();
    const menuBar = useRef();

    console.log(menuBar)
   
    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            console.log(e.target)
            if(refMenu.current && !refMenu.current.contains(e.target)){
                if(menuBar.current && !menuBar.current.contains(e.target)){
                    setDropMenuState(false);
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
            {dropMenuState === true ?<MobMenu ref={refMenu}/>  : false}
        </header>

    )
}

export default Header;