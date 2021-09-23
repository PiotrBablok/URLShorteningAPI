import React from "react";


import './CopyBtn.css';

function CopyBtn(props) {

    function copyLink() {
        navigator.clipboard.writeText(props.copyLink)
    };

    return (
        <button className='buttonCopy' onClick={copyLink}>Copy</button>
    );
};

export default CopyBtn;