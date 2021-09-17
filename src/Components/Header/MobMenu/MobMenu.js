import React, {forwardRef} from 'react';

import './MobMenu.css'

const MobMenu = forwardRef((props,ref) => {

    return (
        <div ref={ref} className='mobMenu'>
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