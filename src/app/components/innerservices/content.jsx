import styles from "@/styles/inner-services/innercontent.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Col, Container, Row } from 'react-bootstrap'

const ContentSection = ({ data, bggray, simple }) => {
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
                <Row className={`${bggray === "yes" ? styles.bggray : ""} ${styles.imgBox} ${simple === "yes" ? styles.SimpleBg : ''}`} >
                    <Col md={6} className={simple === "yes" ? styles.imgSimple : ''} >
                        {simple === "yes" ?
                            <Image src={data.img} alt="Book Image" width={460} height={550} />
                            :
                            <Image src={data.img} fill alt="Book Image" className={styles.imgCover} />
                        }
                    </Col>
                    <Col md={6} className="my-auto">
                        <div className={styles.contentBox}>
                            <h2>{data.contentTitle}</h2>
                            <div className={styles.paraBox}>{data.contentTxt}</div>
                            <Link href="#" className="commonBtn">Get Free Consultation</Link>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ContentSection