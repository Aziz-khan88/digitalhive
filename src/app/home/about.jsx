import styles from "@/styles/home/about.module.scss"
import { Col, Container, Row } from 'react-bootstrap'

const About = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.abtSection}`}>
            <Container className="gradientBgColor">
                <Row>
                    <Col>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                        <div className={styles.abtCounter}>
                            {data.points.map((item, index) => (
                                <div className={styles.counterPoints} key={index}>
                                    <div className={styles.abtnumbers}>{item.numbers}<span>+</span></div>
                                    <div className={styles.abttxt}>{item.namee}</div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About