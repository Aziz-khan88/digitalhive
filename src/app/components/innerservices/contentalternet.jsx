import styles from "@/styles/inner-services/innercontent.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Col, Container, Row } from 'react-bootstrap'

const ContentAlternet = ({ data, bggray, simple, alternat, software }) => {
    return (
        <section className={`pt-100 ${styles.innerServicesContent} `}>
            <Container>
                <Row className={`${bggray === "yes" ? styles.bggray : ""} ${styles.imgBox} ${simple === "yes" ? styles.SimpleBg : ''}`}>

                    <Col md={6} className="my-auto">
                        <div className={`${styles.contentBox} ${alternat === "yes" ? styles.alternatcontentBox : ''}`}>
                            <h2>{data.contentTitle}</h2>
                            <div className={styles.paraBox}>{data.contentTxt}</div>
                            <Link href="#" className="commonBtn">Get Free Consultation</Link>
                        </div>
                    </Col>
                    <Col md={6} className={`${simple === "yes" ? styles.imgSimple : ''} ${software === "yes" ? styles.imgSoftware : ''} ${alternat === "yes" ? styles.alternatImage : ''}`} >
                        {simple === "yes" ?
                            <Image src={data.img} alt="Book Image" width={460} height={550} />
                            :
                            <Image src={data.img} fill alt="Book Image" className={styles.imgCover} />
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentAlternet