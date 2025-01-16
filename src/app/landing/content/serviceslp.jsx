import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/content/serviceslp.module.scss"
import CommonBtn from "@/src/app/components/common/commonbtn"


const ServicesLp = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.servicesSec}`} id="ServicesId">
            <Container>
                <Row>
                    <Col md={12} lg={10} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.servicesBox}>
                            {data.ServicesItem.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <div className={styles.titleBox}>
                                        <div className={styles.svgBox}>
                                            {item.icon}
                                        </div>
                                        <div className={styles.headingBox}>
                                            {item.title}
                                        </div>
                                    </div>
                                    <div className={styles.paraContent}>
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

export default ServicesLp