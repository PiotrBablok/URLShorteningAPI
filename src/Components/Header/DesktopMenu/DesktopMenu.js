import React from "react";

import './DesktopMenu.css'

function DesktopMenu() {
    return (
        <div className='desktopMenu'>
            <ul className='desktopMenu_pages'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <ul className='desktopMenu_login'>
                <li>Login</li>
                <li className='desktopSign'>Sign Up</li>
            </ul>
        </div>
    )
}

export default DesktopMenu;