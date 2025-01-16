import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/content/processlp.module.scss"
import CommonBtn from "@/src/app/components/common/commonbtn"

const PorcessLp = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.processLpSec}`} id="ProcessId">
            <Container>
                <Row>
                    <Col md={8} lg={8} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.processPoints}>
                            {data.PorcessLpItem.map((item, index) => (
                                <div className={styles.processItem} key={index}>
                                    <div className={styles.processContent}>
                                        <span>0{index + 1}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.para}</p>
                                        <div className={styles.btnStyle}>
                                            <CommonBtn txt="Let’s connect" ArrowBtn={true} SimpleBtn={true} />
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

export default PorcessLp