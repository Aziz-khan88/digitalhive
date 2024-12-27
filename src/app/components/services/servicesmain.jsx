"use client";
import styles from "@/styles/services/servicesmain.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Link from "next/link"
import { ArrowIcon } from "@/src/app/app-constants";

const ServicesMain = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.servicesMainSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.servicesMainContainer}>
                            {data.ServicesItem.map((item, index) => (
                                <div className={styles.servicesMainItem} key={index}>
                                    <div className={styles.servicesMainImage}>
                                        <div className={styles.title}>{item.title}</div>
                                        <div className={styles.barLine}></div>
                                        <div className={styles.readMore}>
                                            <Link href={item.url}>Contact Us</Link>
                                        </div>
                                        <Link href={item.url} className={styles.btnReaMore}>
                                            <ArrowIcon />
                                        </Link>
                                        <p>{item.txt}</p>
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

export default ServicesMain