import React from "react";

import './LinkLIst.css'

function LinkLIst(props) {

    console.log(props.links.standart)

    return (
        <div className='links'>
            {props.links.standart.map(element => {
               return <p className='link'>{element}</p>;
            })}

            {props.links.short.map(element => {
               return <p className='link'>{element}</p>;
            })}
        </div>
    )
}

export default LinkLIst;