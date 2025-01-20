
import styles from "@/styles/inner-services/statecount.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const StateCount = ({ data, coloum, landingBanner, RoundedStyle }) => {
    return (
        <section className={` ${styles.stateCountSection} ${landingBanner ? "" : 'pt-100'} ${RoundedStyle ? styles.RoundedStyle : 'pt-100'}`}>
            <Container>
                {!landingBanner ?
                    <Row>
                        <Col md={7} className="my-auto">
                            <div className="subtitle">{data.subtitle}</div>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                        </Col>
                    </Row>
                    : ""
                }
                <Row>
                    {data.stateItem.map((item, index) => (
                        <Col sm={6} md={coloum === "yes" ? 4 : 3} key={index}>
                            <div className={styles.stateCountItem}>
                                {item.numbers}
                                <div className={styles.title}> {item.namee}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default StateCount