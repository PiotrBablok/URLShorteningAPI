import React from "react";

import './LinkLIst.css'

function LinkLIst(props) {
    return (
        <div className='linksHolder' >
            {props.links.map(element => {
                return (<div className='linksBlock'>
                    <p className='link linkBorder linksAdjust'>{element.long}</p>
                    <a className='link linksAdjust' target='_blank' rel="noreferrer" href={`${element.shorten}`}>
                        {element.shorten}
                    </a>
                </div>)
            })}
        </div>
    )
}

export default LinkLIst;