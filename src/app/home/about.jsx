import styles from "@/styles/home/about.module.scss"
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    return (
        <section className={`pt-100 ${styles.abtSection}`}>
            <Container className="gradientBgColor">
                <Row>
                    <Col>
                        <div className="subtitle">About Us</div>
                        <h2>Your Digital Growth Partner</h2>
                        <p>We’re more than just a digital marketing agency—we’re your growth partner. At [Agency Name], we blend creativity with data-driven strategies to craft personalized solutions that get results. With a passion for innovation and a commitment to excellence, we help brands like yours stand out, connect with audiences, and thrive in the digital landscape. Let’s build something amazing together.</p>
                        <div className={styles.abtCounter}>
                            <div className={styles.counterPoints}>
                                <div className={styles.abtnumbers}>10<span>+</span></div>
                                <div className={styles.abttxt}>Years of Experience</div>
                            </div>
                            <div className={styles.counterPoints}>
                                <div className={styles.abtnumbers}>60<span>+</span></div>
                                <div className={styles.abttxt}>Experts Team</div>
                            </div>
                            <div className={styles.counterPoints}>
                                <div className={styles.abtnumbers}>1,200<span>+</span></div>
                                <div className={styles.abttxt}>Successful Projects</div>
                            </div>
                            <div className={styles.counterPoints}>
                                <div className={styles.abtnumbers}>100<span>+</span></div>
                                <div className={styles.abttxt}>Global Clients</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About