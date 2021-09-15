import React from "react";

import './ShortenInput.css'

function ShortenInput() {
    return (
        <div className='shorten'>
            <form>
                <input placeholder='Shorten a link here...' type='text' />
                <button>Shorten It!</button>
            </form>
        </div>
    )
}

export default ShortenInput;