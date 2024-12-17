import styles from "@/styles/inner-services/innercontent.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Col, Container, Row } from 'react-bootstrap'

const ContentSection = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.innerServicesContent}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row className={styles.imgBox}>
                    <Col sm={6} md={6}>
                        <Image src={data.img} fill alt="Book Image" />
                    </Col>
                    <Col sm={6} md={6} className="my-auto">
                        <div className={styles.contentBox}>
                            <h2>{data.contentTitle}</h2>
                            <p>{data.contentTxt}</p>
                            <Link href="#" className="commonBtn">Get Free Consultation</Link>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ContentSection