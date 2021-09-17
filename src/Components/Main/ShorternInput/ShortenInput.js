import React from "react";

import './ShortenInput.css'

function ShortenInput(props) {
    return (
        <div className='shorten'>
            <form onSubmit={props.submitUrl}>
                <input placeholder='Shorten a link here...' value={props.clearInput} onChange={props.liftData} type='text' />
                <button type='submit'>Shorten It!</button>
            </form>
        </div>
    )
}

export default ShortenInput;