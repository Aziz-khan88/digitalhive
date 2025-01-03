import styles from "@/styles/services/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"

const Banner = ({ data, bgtxt }) => {
    return (
        <section className={`${styles.bannerServices} ${bgtxt === "yes" ? styles.bannerWithContent : ""} `}>
            <Container>
                <Row>
                    <Col md={10} lg={10} className="m-auto text-center">
                        <div className={styles.servicesContent}>
                            <div className={styles.subTitle}>{data.subtitle}</div>
                            <h1>{data.title}</h1>
                            <p>{data.desc}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="m-auto text-center">
                        <div className={styles.bannerServiceVideo}>
                            {bgtxt === "yes" ?
                                <div className={styles.contentBaner}>
                                    <h2>{data.bannerTitle}</h2>
                                    <p>{data.bannerContent}</p>
                                    <Link href="#" className="commonBtn">Get Free Consultation</Link>
                                </div>
                                : null
                            }
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
        </section>
    )
}

export default Banner