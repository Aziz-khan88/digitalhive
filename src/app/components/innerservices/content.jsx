import styles from "@/styles/inner-services/innercontent.module.scss"
import Image from "next/image"
import CommonBtn from "@/src/app/components/common/commonbtn"
import { Col, Container, Row } from 'react-bootstrap'

const ContentSection = ({ data, bggray, simple, bgBlack, software, height }) => {
    return (
        <section className={`pt-100 ${styles.innerServicesContent} `}>
            <Container>
                {data.maintitle !== true ?
                    <Row>
                        <Col md={7}>
                            <div className="subtitle">{data.subtitle}</div>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                        </Col>
                    </Row>
                    : null
                }
                <Row className={`${bggray === "yes" ? styles.bggray : ""} ${bgBlack === "yes" ? styles.bgBlack : ""} ${styles.imgBox} ${simple === "yes" ? styles.SimpleBg : ''}`}>
                    <Col md={6} className={`${simple === "yes" ? styles.imgSimple : ''} ${software === "yes" ? styles.imgSoftware : ''} my-auto order-2 order-md-1`} >
                        {simple === "yes" ?
                            <div className={styles.bgSimple}>
                                <Image
                                    src={data.img}
                                    alt="Book Image"
                                    width={height ? 525 : 650}
                                    height={height ? 500 : 420}
                                />
                            </div>
                            :
                            <Image src={data.img} fill alt="Book Image" className={styles.imgCover} />
                        }
                    </Col>
                    <Col md={6} className="my-auto order-1 order-md-2">
                        <div className={styles.contentBox}>
                            <h2>{data.contentTitle}</h2>
                            <div className={styles.paraBox}>{data.contentTxt}</div>
                            <CommonBtn txt="Get Free Consultation" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ContentSection