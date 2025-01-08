import styles from "@/styles/services/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"
import Image from "next/image"

const Banner = ({ data }) => {
    return (
        <section className={`${styles.innerBannerServices}`}>
            <Container className={styles.bgBlack}>
                <Row>
                    <Col sm={6} md={6} lg={5} className="m-auto">
                        <div className={styles.contentBaner}>

                            <h1>{data.title}</h1>
                            <p>{data.desc}</p>
                            <CommonBtn txt="Get Free Consultation" />
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={7}>
                        <div className={styles.bannerServiceVideo}>
                            {data.video !== "" ?
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
                                :
                                <Image src={data.BannerPoster} alt="Banner Images" fill />
                            }
                        </div>
                    </Col>

                </Row>

            </Container>
        </section >
    )
}

export default Banner