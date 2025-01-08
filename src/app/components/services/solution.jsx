import styles from "@/styles/services/solution.module.scss"
import CommonBtn from "@/src/app/components/common/commonbtn"
import { Col, Container, Row } from "react-bootstrap"


const Solution = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.solutionSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.solutionContainer}>
                            {data.SolItem.map((item, index) => (
                                <div
                                    className={styles.solutionItem}
                                    key={index}
                                    style={{
                                        '--bgcolor': item.bgcolor || '#ffffff',
                                    }}
                                >
                                    <div className={styles.title}>{item.title}</div>
                                    <p>{item.txt}</p>
                                    <div className={styles.btnSimple}>
                                        <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Solution;
