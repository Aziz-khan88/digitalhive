import Link from 'next/link'
import styles from "@/styles/smm/ctaservices.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ImgBg from "media/services/smm/ctaBgPink.webp"

const CtaServices = () => {
    return (
        <section className={`pt-100 ${styles.ctaServicesSection}`}>
            <Container className={`h-100 ${styles.ImageGB}`} style={{ backgroundImage: `url(${ImgBg.src})` }}>
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <div className={styles.ctaServicesTitle}>
                            <h2>Want a Customized Package Tailored Just for You?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <Link href="#" className='commonBtn'>Get Free Consultation</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaServices