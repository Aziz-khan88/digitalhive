import styles from "@/styles/smm/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerPoster from "media/services/smm/posterImg.webp"

const Banner = () => {
    return (
        <section className={styles.bannerServices}>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="m-auto text-center">
                        <div className={styles.subTitle}>No. 1 SMM Company In US</div>
                        <h1>We Are a Growth-Focused</h1>
                        <p>Digital Marketing Agency Equipping Businesses for the Digital Era</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="m-auto text-center">
                        <div className={styles.bannerServiceVideo}>
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