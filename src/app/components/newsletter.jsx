import styles from "@/styles/components/newsletter.module.scss"

const NewsLetterFrom = () => {
    return (
        <div className={styles.newsletterBox}>
            <form>
                <div className={styles.newsletterInput}>
                    <input type="email" placeholder="What’s Your Work Email" required />
                    <button type="submit">Get Started</button>
                </div>
            </form>
        </div>

    )
}

export default NewsLetterFrom