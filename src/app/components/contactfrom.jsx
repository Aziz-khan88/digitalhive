import styles from "@/styles/components/contactform.module.scss"
import Link from "next/link"

const ContactFrom = ({ bg, bgBlack, popop, contactPage, vertical, LandingPage, BlackVertical, blkColor }) => {
    return (
        <form>
            <div className={`${styles.Contactbox} ${bg === "no" ? styles.removeBG : ""} ${bgBlack ? styles.bgBlack : ""} ${LandingPage ? styles.landingPage : ""} ${vertical ? styles.verticalFrom : ""}  ${BlackVertical ? styles.BlackVertical : ""} ${popop === "yes" ? styles.popopFrom : ""} ${blkColor ? styles.blkColor : ""}`}>
                {contactPage ?
                    <>
                        <div className="subtitle">Get In Touch</div>
                        <h6>Please fill out the form below, and we’ll respond as soon as possible.</h6>
                    </>
                    : ""
                }
                <div className={styles.contactItem}>
                    <input type="text" placeholder="Full Name" required />
                </div>
                <div className={styles.contactItem}>
                    <input type="email" placeholder="Email" required />
                </div>
                <div className={styles.contactItem}>
                    <input type="Phone" placeholder="Phone" required />
                </div>
                {!vertical ? (
                    <>
                        <div className={styles.contactItem}>
                            <textarea placeholder="Description"></textarea>
                        </div>
                        <div className={styles.para}>
                            We take your privacy seriously. Read our <Link href="#">Privacy Policy</Link>
                        </div>
                    </>
                ) : null}
                <div className={styles.contactBtn}>
                    <button type="submit" className="commonBtn">{vertical ? "Get a Free SEO Audit" : "Submit"}</button>
                </div>
            </div>
        </form >
    )
}

export default ContactFrom