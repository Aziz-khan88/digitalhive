
"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/inner-services/booktabs.module.scss"
import Image from "next/image"



const BookTabs = ({ data, dataItem }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className={`pt-100 ${styles.bookTabs}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabContainer}>
                            <div className={styles.tabHeader}>
                                <ul>
                                    {dataItem.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={activeTab === index ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            <span>{tab.tabtitle}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.tabBody}>
                                {dataItem[activeTab].images.map((imgSrc, imgIndex) => (
                                    <div className={styles.ImageBox} key={imgIndex}>
                                        <Image src={imgSrc} alt={`Book ${imgIndex + 1}`} fill />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BookTabs