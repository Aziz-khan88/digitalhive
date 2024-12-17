import styles from "@/styles/home/about.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ContactFrom from "@/src/app/components/contactfrom"

const CtaForm = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.abtSection}`}>
            <Container className="gradientBgColor">
                <Row>
                    <Col sm={5} md={5} lg={6} xl={5} className="my-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
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