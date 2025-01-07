import styles from "@/styles/inner-services/webproject.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const WebProjects = ({ data, dataItem }) => {
    return (
        <section className={`pt-100 ${styles.webProjectSection} `}>
            <Container >
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.webProjectContainer}>
                            {dataItem.map((imgSrc, imgIndex) => (
                                <div
                                    className={styles.ImageBox}
                                    key={imgIndex}
                                    style={{ backgroundImage: `url(${imgSrc.img})` }}
                                >

                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default WebProjects