import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo1/serviceslp.module.scss"
import CommonBtn from "@/src/app/components/common/commonbtn"
import ServicesImg from "media/landing/seo1/servicesbg.webp"

const ServicesLP = () => {
    return (
        <section className={`pt-100 ${styles.servicesLPSec}`} style={{ backgroundImage: `url(${ServicesImg.src})` }}>
            <Container>
                <Row>
                    <Col md={8} className="m-auto text-center">
                        <div className="subtitle">SEO Services</div>
                        <h2>Our SEO Services</h2>
                        <p>Low-quality content can hold your business back. At Infiniti Digital, we craft engaging, high-impact content that captivates.</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.servicesBox}>
                            <div className={styles.servicesItem}>
                                <h5>Keyword Research & Strategy</h5>
                                <p>Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing.</p>
                                <div className={styles.readMore}>
                                    <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h5>Keyword Research & Strategy</h5>
                                <p>Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing.</p>
                                <div className={styles.readMore}>
                                    <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h5>Keyword Research & Strategy</h5>
                                <p>Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing.</p>
                                <div className={styles.readMore}>
                                    <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h5>Keyword Research & Strategy</h5>
                                <p>Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing.</p>
                                <div className={styles.readMore}>
                                    <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h5>Keyword Research & Strategy</h5>
                                <p>Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing.</p>
                                <div className={styles.readMore}>
                                    <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h5>Keyword Research & Strategy</h5>
                                <p>Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing.</p>
                                <div className={styles.readMore}>
                                    <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h5>Keyword Research & Strategy</h5>
                                <p>Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing.</p>
                                <div className={styles.readMore}>
                                    <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h5>Keyword Research & Strategy</h5>
                                <p>Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing.</p>
                                <div className={styles.readMore}>
                                    <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h5>Keyword Research & Strategy</h5>
                                <p>Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing.</p>
                                <div className={styles.readMore}>
                                    <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServicesLP