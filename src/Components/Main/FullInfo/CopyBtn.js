import React, {useState} from "react";


import './CopyBtn.css';

function CopyBtn(props) {

    const [btnText, setBtnText] = useState(false);

    function copyLink() {
        setBtnText(true);
        navigator.clipboard.writeText(props.copyLink)
    };

    return (
        btnText === false ?
        <button className='buttonCopy' onClick={copyLink}>Copy</button>
        :
        <button className='buttonCopy' style={{backgroundColor: 'hsl(257, 27%, 26%)'}} onClick={copyLink}>Copied!</button>
    );
};

export default CopyBtn;