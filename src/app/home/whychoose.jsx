import styles from "@/styles/home/whychoose.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const WhyChoose = () => {
    return (
        <section className={`pt-100 ${styles.whychooseSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Why Choose Us</div>
                        <h2>Your Trusted Partner for Excellence</h2>
                        <p>Explore our latest projects and see how we’ve helped brands grow, engage, and succeed in the digital world.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={4} className={styles.colChange}>
                        <div className={`${styles.whychooseBox} ${styles.Box1}`}>
                            <div className={styles.whychooseContainer}>
                                <div className={styles.title}>Proven Results, Real Impact</div>
                                <div className={styles.txt}>We don’t just promise growth; we deliver it. Our data-driven strategies are designed to maximize ROI and help your business thrive in a competitive digital landscape.</div>
                            </div>
                            <div className={styles.count}>01</div>
                        </div>
                        <div className={`${styles.whychooseBox} ${styles.Box2}`}>
                            <div className={styles.whychooseContainer}>
                                <div className={styles.title}>Transparent & Measurable Results</div>
                                <div className={styles.txt}>We believe in full transparency. With regular reports and real-time analytics, you can track the progress of your campaigns and see exactly where your investment is going.</div>
                            </div>
                            <div className={styles.count}>02</div>

                        </div>
                    </Col>
                    <Col md={12} lg={4} className={styles.colChange}>
                        <div className={`${styles.whychooseBox} ${styles.Box3}`}>
                            <div className={styles.whychooseContainer}>
                                <div className={styles.title}>Tailored Solutions for Every Business</div>
                                <div className={styles.txt}>Every business is unique. That’s why we craft personalized digital marketing strategies that align with your goals, budget, and audience to ensure long-term success.</div>
                            </div>
                            <div className={styles.count}>03</div>
                        </div>
                    </Col>
                    <Col md={12} lg={4} className={styles.colChange}>
                        <div className={`${styles.whychooseBox} ${styles.Box4}`}>
                            <div className={styles.whychooseContainer}>
                                <div className={styles.title}>Expertise Across Multiple Channels</div>
                                <div className={styles.txt}>From SEO and PPC to social media and email marketing, our team has extensive experience across all digital channels to provide integrated, multi-faceted solutions.</div>
                            </div>
                            <div className={styles.count}>04</div>
                        </div>
                        <div className={`${styles.whychooseBox} ${styles.Box5}`}>
                            <div className={styles.whychooseContainer}>
                                <div className={styles.title}>A Dedicated Team Invested in Your Success</div>
                                <div className={styles.txt}>Your success is our success. We work closely with you, offering ongoing support and making adjustments to ensure your marketing efforts are always optimized for the best results.</div>
                            </div>
                            <div className={styles.count}>05</div>
                        </div>
                    </Col>
                </Row >
            </Container >
        </section >
    )
}

export default WhyChoose