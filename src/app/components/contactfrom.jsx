import styles from "@/styles/components/contactform.module.scss"
import Link from "next/link"

const ContactFrom = ({ bg, popop, contactPage }) => {
    return (
        <form>
            <div className={`${styles.Contactbox} ${bg === "no" ? styles.removeBG : ""}  ${popop === "yes" ? styles.popopFrom : ""}`}>
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
                <div className={styles.contactItem}>
                    <textarea placeholder="Description"></textarea>
                </div>
                <div className={styles.para}>
                    We take your privacy seriously. Read our <Link href="#">Privacy Policy</Link>
                </div>
                <div className={styles.contactBtn}>
                    <button type="submit" className="commonBtn">Submit </button>
                </div>
            </div>
        </form>
    )
}

export default ContactFrom