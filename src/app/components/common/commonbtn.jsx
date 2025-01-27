
"use client";
import PopUp from "@/src/app/components/popup";
import { useState } from 'react'
import { ArrowIcon } from "@/src/app/app-constants";
import styles from "@/styles/components/commonbtn.module.scss"

const CommonBtn = ({ txt, ArrowBtn, SimpleBtn, blackBg, LiveChat, center, BgBlack }) => {
    // Chat Code
    const openChat = () => {
        if (window.LC_API) {
            window.LC_API.open_chat_window();
        } else {
            console.error('LiveChat API is not loaded');
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
                    <div className={styles.chatStyle} onClick={openChat}>Live Chat</div>
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