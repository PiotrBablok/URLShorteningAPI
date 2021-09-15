import React, {useState} from "react";

import logo from '../../images/logo.svg'
import menu from '../../images/bars-solid-menu.svg'
import MobMenu from "./MobMenu/MobMenu";

import './Header.css'

function Header() {

    const [dropMenuState, setdropMenuState] = useState(false)

    function dropMenu() {
        setdropMenuState(!dropMenuState)
    }

    return (
        <header>
            <nav className='siteNav'>
                <img className='logo' src={logo} alt='logo' />
                <img className='menuBar' onClick={dropMenu} src={menu} alt='menu' />
            </nav>
            {dropMenuState === true? <MobMenu /> : false}
        </header>

    )
}

export default Header;