
"use client";
import PopUp from "@/src/app/components/popup";
import { useState } from 'react'
import { ArrowIcon } from "@/src/app/app-constants";

const CommonBtn = ({ txt, ArrowBtn, SimpleBtn, blackBg, PackageBtn }) => {
    // Chat Code
    // const handleChatOpen = (e) => {
    //     e.preventDefault();
    //     if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
    //         $zopim.livechat.window.show();
    //     }
    // };
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };

    return (
        <>
            {ArrowBtn ?
                <div onClick={() => handleClick()}>
                    {SimpleBtn ? null : <ArrowIcon />} {txt}
                </div>
                :
                <div className={`commonBtn ${blackBg ? 'blackBg' : ''}`} onClick={() => handleClick()}><span>{txt}</span></div>
            }
            {PackageBtn ?
                <span onClick={() => handleClick()}>Get Started</span>
                : ""
            }
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default CommonBtn