import styles from "@/styles/services/solution.module.scss"
import Link from "next/link"
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
                                    <Link href={item.url}>Read More</Link>
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
