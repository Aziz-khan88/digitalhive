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
                            <p>At Infinitidigital, our mission is to empower businesses to not just survive but thrive in the fast-paced digital world. We aim to demystify digital marketing, making it accessible, impactful, and profitable for every business we serve. With a steadfast focus on delivering measurable growth, we help brands tell their stories, engage their audiences, and achieve their full potential online.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={`${styles.abtBox} ${styles.txtBlack}`} style={{ background: `url(${IMG02.src})` }}>
                            <h2>Our Vision</h2>
                            <p>At Infinitidigital, we strive to lead the way in revolutionizing the digital marketing space by creating strategies that resonate with people, drive results, and build lasting relationships between brands and their customers. Our goal is to not just meet expectations but to redefine them—setting new industry standards for what success truly looks like.</p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.abtBox} style={{ background: `url(${IMG03.src})` }}>
                            <h2>Our Value</h2>
                            <p>At Infinitidigital, our values guide everything we do. They are the foundation of our approach and the promise we make to every client:</p>
                            <ul className="ContentUl">
                                <li><span>Innovation:</span>Pioneering creative and data-driven solutions to stay ahead of the curve.</li>
                                <li><span>Collaboration:</span>Partnering with our clients to ensure their goals are not just met but exceeded.</li>
                                <li><span>Excellence:</span>Holding ourselves to the highest standards of quality and performance in every project.</li>
                                <li><span>Integrity:</span>Building trust by remaining honest, authentic, and transparent in all interactions.</li>
                                <li><span>Adaptability:</span>Staying flexible to embrace the unique needs and opportunities of every business we serve.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default AbtSection