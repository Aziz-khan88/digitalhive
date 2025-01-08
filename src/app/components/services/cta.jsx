import styles from "@/styles/services/ctaservices.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"

const CtaServices = ({ data, bg }) => {
    return (
        <section className={`pt-100 ${styles.ctaServicesSection}`}>
            <Container className={`h-100 ${styles.ImageGB} ${styles.ImageGBPink}`} style={{ backgroundImage: `url(${data.img})` }}>
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <div className={`${styles.ctaServicesTitle} ${styles.BlackBG}`}>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                            <CommonBtn txt="Get Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaServices