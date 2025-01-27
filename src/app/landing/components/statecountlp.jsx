
import styles from "@/styles/inner-services/statecount.module.scss"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"

const StateCountLP = ({ data, video, alternet }) => {
    return (
        <section className={`pt-100 ${styles.stateCountSection} ${video ? styles.videoSection : ""}`} id="AboutId">
            <Container>
                <Row className={styles.stateCountLp}>
                    <Col md={6} className="my-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <div>{data.desc}</div>
                        <CommonBtn txt="Get Free Consultation" LiveChat={true} BgBlack={true} />
                    </Col>
                    <Col md={6}>
                        <div className={styles.contuerImg}>
                            {video ?
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    aria-label="Background video"
                                    className={styles.contuerVideo}
                                    loading="eager"
                                    poster={data.img}
                                >
                                    <source src={data.video} type="video/mp4" />
                                </video>
                                :
                                <Image src={data.img} alt="Contact Image" fill />
                            }
                        </div>
                    </Col>
                </Row>
                {!video ?
                    <Row>
                        {data.stateItem.map((item, index) => (
                            <Col sm={6} md={3} key={index}>
                                <div className={styles.stateCountItem}>
                                    {item.numbers}
                                    <div className={styles.title}> {item.namee}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    : ""
                }
            </Container>
        </section>
    )
}

export default StateCountLP