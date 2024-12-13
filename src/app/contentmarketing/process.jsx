import styles from "@/styles/contentmarketing/process.module.scss"
import { Col, Container, Row } from 'react-bootstrap'

const data1 = [
    {
        title: "Strategy Development",
        txt: (<>
            <strong>Project Kickoff:</strong>
            <p>Initial meetings to understand client requirements, goals, and target audience.</p>
            <strong>Market Research & Analysis:</strong>
            <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
            <strong>User Persona Development:</strong>
            <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
        </>),

    },
    {
        title: "Content Distribution",
        txt: (<>
            <strong>Project Kickoff:</strong>
            <p>Initial meetings to understand client requirements, goals, and target audience.</p>
            <strong>Market Research & Analysis:</strong>
            <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
            <strong>User Persona Development:</strong>
            <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
        </>),

    },
]
const data2 = [
    {
        title: "Content Planning",
        txt: (<>
            <strong>Project Kickoff:</strong>
            <p>Initial meetings to understand client requirements, goals, and target audience.</p>
            <strong>Market Research & Analysis:</strong>
            <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
            <strong>User Persona Development:</strong>
            <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
        </>),

    }, {
        title: "Performance Analysis",
        txt: (<>
            <strong>Project Kickoff:</strong>
            <p>Initial meetings to understand client requirements, goals, and target audience.</p>
            <strong>Market Research & Analysis:</strong>
            <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
            <strong>User Persona Development:</strong>
            <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
        </>),

    },
]
const data3 = [
    {
        title: "Content Creation",
        txt: (<>
            <strong>Project Kickoff:</strong>
            <p>Initial meetings to understand client requirements, goals, and target audience.</p>
            <strong>Market Research & Analysis:</strong>
            <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
            <strong>User Persona Development:</strong>
            <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
        </>),

    },
    {
        title: "Optimization & Repurposing",
        txt: (<>
            <strong>Project Kickoff:</strong>
            <p>Initial meetings to understand client requirements, goals, and target audience.</p>
            <strong>Market Research & Analysis:</strong>
            <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
            <strong>User Persona Development:</strong>
            <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
        </>),

    }
]
const Process = () => {
    return (
        <section className={`pt-100 ${styles.processSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Our Process</div>
                        <h2>Our Proven Content Marketing Process</h2>
                        <p>Explore our latest projects and see how we’ve helped brands grow, engage, and succeed in the digital world.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={styles.processContianer}>
                            {data1.map((item, index) => (
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
                    <Col md={4}>
                        <div className={styles.processContianer}>
                            {data2.map((item, index) => (
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
                    <Col md={4}>
                        <div className={styles.processContianer}>
                            {data3.map((item, index) => (
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