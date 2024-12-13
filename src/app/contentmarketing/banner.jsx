import styles from "@/styles/smm/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerPoster from "media/services/smm/posterImg.webp"
import Link from "next/link"

const Banner = () => {
    return (
        <section className={`${styles.bannerServices} ${styles.bannerWithContent}`}>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="m-auto text-center">
                        <div className={styles.subTitle}>Content That Connects, Converts, and Captivates.</div>
                        <h1>Smart Content, Smarter Growth.</h1>
                        <p>Get more traffic, more leads, and more customers with a tailored SEO strategy that works.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="m-auto text-center">
                        <div className={styles.bannerServiceVideo}>
                            <div className={styles.contentBaner}>
                                <h2>Where Creativity Meets Strategy for Real Results.</h2>
                                <p>Unlock the power of strategic storytelling to captivate your audience and drive measurable results. Let us craft your success story.</p>
                                <Link href="#" className="commonBtn">Get Free Consultation</Link>
                            </div>
                            <video
                                autoPlay
                                muted
                                loop
                                preload="auto"
                                aria-label="Background video"
                                loading="eager"
                                poster={BannerPoster.src}
                            >
                                <source src="/videos/ServicesBanner.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner