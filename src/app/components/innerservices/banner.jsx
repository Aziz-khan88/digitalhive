import styles from "@/styles/services/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"

const Banner = ({ data }) => {
    return (
        <section className={`${styles.innerBannerServices}`}>
            <Container className={styles.bgBlack}>
                <Row>
                    <Col sm={6} md={6} lg={5} className="m-auto">
                        <div className={styles.contentBaner}>
                            <h1>{data.title}</h1>
                            <p>{data.desc}</p>
                            <Link href="#" className="commonBtn">Get Free Consultation</Link>
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={7}>
                        <div className={styles.bannerServiceVideo}>
                            <video
                                autoPlay
                                muted
                                loop
                                preload="auto"
                                aria-label="Background video"
                                loading="eager"
                                poster={data.BannerPoster}
                            >
                                <source src={data.video} type="video/mp4" />
                            </video>
                        </div>
                    </Col>

                </Row>

            </Container>
        </section >
    )
}

export default Banner