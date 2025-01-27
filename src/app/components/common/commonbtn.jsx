
"use client";
import PopUp from "@/src/app/components/popup";
import { useState } from 'react'
import { ArrowIcon } from "@/src/app/app-constants";
import styles from "@/styles/components/commonbtn.module.scss"

const CommonBtn = ({ txt, ArrowBtn, SimpleBtn, blackBg, LiveChat, center, BgBlack }) => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };

    return (
        <>
            {ArrowBtn ? (
                <div onClick={() => handleClick()}>
                    {SimpleBtn ? null : <ArrowIcon />}
                    {txt}
                </div>
            ) : LiveChat ? (
                <div className={`${styles.btnFlex} ${center ? styles.center : ""} ${BgBlack ? styles.bgBlack : ""}`}>
                    <div onClick={() => handleClick()} className={styles.btnStyle}>{txt}</div>
                    <div className={styles.chatStyle} onClick={() => handleChatOpen()}>Live Chat</div>
                </div>
            ) : (
                <div className={`commonBtn ${blackBg ? 'blackBg' : ''}`} onClick={() => handleClick()}>
                    <span>{txt}</span>
                </div>
            )}

            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default CommonBtn