import React, { forwardRef } from 'react';

import './MobMenu.css'

const nonVis = {
    visibility: 'hidden',
    opacity: '0',
    transition: 'visibility 0s linear 300ms, opacity 300ms'
}

const vis = {
    visibility: 'visible',
    opacity: '1',
    transition: 'visibility 0s linear 0s, opacity 300ms'
}

const MobMenu = forwardRef((props, ref) => {
    return (
        <div style={(props.visible === 'hidden' ? nonVis : vis)} ref={ref} className='mobMenu'>
            <ul >
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <div className='hr' />
            <ul className='login'>
                <li>Login</li>
                <li className='sign'>Sign Up</li>
            </ul>
        </div>
    )
})

export default MobMenu;