import React from "react";

import CopyBtn from "./CopyBtn";

import './LinkLIst.css'

const LinkLIst = (props) => {

    return (
        <div className='linksHolder' >
            {props.links.map(element => {
                return (<div className='linksBlock'>
                    <p className='pLink linksFit'>{element.long}</p>
                    <div className='hr' />
                    <a className='aLink linksFit' target='_blank' rel="noreferrer" href={`${element.shorten}`}>
                        {element.shorten}
                    </a>
                    <CopyBtn copyLink={element.shorten}/>
                </div>)
            })}
        </div>
    )
};

export default LinkLIst;