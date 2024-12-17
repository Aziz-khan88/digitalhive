
import styles from "@/styles/inner-services/statecount.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const StateCount = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.stateCountSection}`}>
            <Container >
                <Row>
                    <Col md={7} className="my-auto">
                        <h2>Your App Journey: Designed, Developed, Delivered</h2>
                        <p>Your app journey begins with a vision, and we’re here to transform it into reality. Through careful design, expert development, and seamless.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={3}>
                        <div className={styles.stateCountItem}>
                            200+
                            <div className={styles.title}>App Launched</div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className={styles.stateCountItem}>
                            100+
                            <div className={styles.title}>App Development Experts</div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className={styles.stateCountItem}>
                            3M
                            <div className={styles.title}>Active App Users</div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className={styles.stateCountItem}>
                            4.9
                            <div className={styles.title}>Rating On Clutch</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default StateCount