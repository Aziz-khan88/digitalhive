import styles from "@/styles/home/about.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ContactFrom from "@/src/app/components/contactfrom"

const CtaForm = () => {
    return (
        <section className={`pt-100 ${styles.abtSection}`}>
            <Container className="gradientBgColor">
                <Row>
                    <Col sm={5} md={5} lg={6} xl={5} className="my-auto">
                        <div className="subtitle">Contact Us</div>
                        <h2>Let’s Bring Your Vision to Life!</h2>
                        <p>Have a question or ready to take your business to the next level? Reach out to us and let’s create something amazing together!</p>
                    </Col>
                    <Col md={7} sm={7} lg={6} xl={6} className="offset-xl-1">
                        <ContactFrom />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaForm