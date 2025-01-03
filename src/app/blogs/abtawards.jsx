import styles from "@/styles/about/abtawardssection.module.scss"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'

const AbtAwards = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.abtAwardsSection}`}>
            <Container>
                <Row>
                    <Col md={8} className='m-auto text-center'>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='m-auto text-center'>
                        <div className={styles.awardsGrid}>
                            {data.images.map((src, index) => (
                                <div className={styles.awardsItem} key={index} >
                                    <Image src={src} alt={`Award ${index + 1}`} fill />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default AbtAwards