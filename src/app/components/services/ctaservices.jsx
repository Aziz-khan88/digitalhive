import Link from 'next/link'
import styles from "@/styles/services/ctaservices.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const CtaServices = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.ctaServicesSection}`}>
            <Container className={`h-100 ${styles.ImageGB}`} style={{ backgroundImage: `url(${data.img})` }}>
                <Row className="h-100">
                    <Col md={12} lg={6} className="my-auto">
                        <div className={styles.ctaServicesTitle}>
                            <h2>{data.title}</h2>
                            <Link href="#" className='commonBtn'>Get Free Consultation</Link>
                        </div>
                    </Col>
                    <Col md={12} lg={6} className='ms-auto text-lg-right'>
                        <div className={styles.ctaServicesTxt}>
                            <p>{data.desc}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default CtaServices