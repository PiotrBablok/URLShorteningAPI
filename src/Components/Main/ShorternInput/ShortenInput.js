import React from "react";

import './ShortenInput.css'

function ShortenInput(props) {
    let borderColor = { border: 'none' }

    if (props.alert) {
        borderColor =
        {
            border: '1px solid hsl(0, 100%, 72%)',
        }
    }

    return (
        <div className='shorten'>
            <form onSubmit={props.submitUrl}>
                <input style={borderColor} placeholder='Shorten a link here...' value={props.clearInput} onChange={props.liftData} type='text' />
                {props.alert ? <p className='linkAlert'>Please add a link</p> : <p className='linkAlert' style={{ visibility: 'hidden' }}>Please add a link</p>}
                <button type='submit'>Shorten It!</button>
            </form>
        </div>
    )
}

export default ShortenInput;