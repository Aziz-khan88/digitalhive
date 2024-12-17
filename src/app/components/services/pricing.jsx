import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/pricing.module.scss"
import { CheckedIcon } from "@/src/app/app-constants"


const Pricing = ({ data, bg }) => {
    return (
        <section className={`pt-100 ${styles.pricingSection} ${bg === "yes" ? styles.blackBG : ""}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={5}>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.pricingContainer}>
                            {data.PriceItem.map((item, index) => (
                                <div className={styles.pricingItem}
                                    style={{
                                        '--bgcolor': `${item.bgColor}` || '#262626',
                                    }}
                                    key={index}>
                                    <div className={styles.packageHeader}>
                                        <div className={styles.packageName}>{item.packagename}</div>
                                        <div className={styles.packagePrice}>${item.price}/<span>Monthly</span></div>
                                        <div className={styles.packagepara}>{item.txt}</div>
                                        <div className={styles.packagebutton}>Get Started</div>
                                    </div>
                                    <div className={styles.packageBody}>
                                        {item.bodyPoints.map((point, idx) => (
                                            <div key={idx}>
                                                <div className={styles.listingTitle}>{point.title}</div>
                                                <ul>
                                                    {point.points.map((p, i) => (
                                                        <li key={i}><CheckedIcon />{p}</li>
                                                    ))
                                                    }
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Pricing