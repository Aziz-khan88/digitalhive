import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/about/abtsection.module.scss"
import IMG01 from "media/about/img01.webp"
import IMG02 from "media/about/Img02.webp"
import IMG03 from "media/about/Img03.webp"


const AbtSection = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.abtSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                        <div className={styles.abtBox} style={{ background: `url(${IMG01.src})` }}>
                            <h2>Our Mission</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat Lorem.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={`${styles.abtBox} ${styles.txtBlack}`} style={{ background: `url(${IMG02.src})` }}>
                            <h2>Our Vision</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat Lorem.</p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.abtBox} style={{ background: `url(${IMG03.src})` }}>
                            <h2>Our Value</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat Lorem.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default AbtSection