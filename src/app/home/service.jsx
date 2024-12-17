import styles from "@/styles/home/service.module.scss"
import { Col, Container, Row } from 'react-bootstrap'

import Image from "next/image"
import Link from "next/link"
import { ArrowIcon } from "@/src/app/app-constants"


const Service = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.serviceSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={6}>
                        <div className={styles.servicesBox}>
                            {data.serviceData1.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <div className={styles.servicesImage}>
                                        <Image src={item.Img} fill alt={item.title} />
                                    </div>
                                    <div className={styles.servicesContent}>
                                        <h3><ArrowIcon />{item.title}</h3>
                                        <p>{item.txt}</p>
                                        <Link href={item.url} className="commonBtn">Read More</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col md={6} sm={6}>
                        <div className={styles.servicesBox}>
                            {data.serviceData2.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <div className={styles.servicesImage}>
                                        <Image src={item.Img} fill alt={item.title} />
                                    </div>
                                    <div className={styles.servicesContent}>
                                        <h3><ArrowIcon />{item.title}</h3>
                                        <p>{item.txt}</p>
                                        <Link href={item.url} className="commonBtn">Read More</Link>
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

export default Service