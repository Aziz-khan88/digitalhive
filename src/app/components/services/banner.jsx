import styles from "@/styles/services/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"

const Banner = ({ data, bgtxt, web }) => {
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
                        <div className={`${styles.bannerServiceVideo} ${web ? styles.webVideo : ''}`}>
                            {bgtxt === "yes" ?
                                <div className={styles.contentBaner}>
                                    <h2>{data.bannerTitle}</h2>
                                    <p>{data.bannerContent}</p>
                                    <CommonBtn txt="Get Free Consultation" />
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