import styles from "@/styles/services/process.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const Process = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.processSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={4} >
                        <div className={styles.processContianer}>
                            {data.ProcessItem1.map((item, index) => (
                                <div className={styles.processItem} key={index}>
                                    <div className={styles.processContent}>
                                        <div className={styles.title}>
                                            {item.title}
                                        </div>
                                        <div className={styles.content}>
                                            {item.txt}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div className={styles.processContianer}>
                            {data.ProcessItem2.map((item, index) => (
                                <div className={styles.processItem} key={index}>
                                    <div className={styles.processContent}>
                                        <div className={styles.title}>
                                            {item.title}
                                        </div>
                                        <div className={styles.content}>
                                            {item.txt}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div className={styles.processContianer}>
                            {data.ProcessItem3.map((item, index) => (
                                <div className={styles.processItem} key={index}>
                                    <div className={styles.processContent}>
                                        <div className={styles.title}>
                                            {item.title}
                                        </div>
                                        <div className={styles.content}>
                                            {item.txt}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Process