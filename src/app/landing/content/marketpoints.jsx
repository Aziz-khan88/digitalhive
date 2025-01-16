"use client"
import { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/content/marketpoints.module.scss"
import Image from "next/image"
import CommonBtn from '../../components/common/commonbtn'

const MarketPoints = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0)  // Default active tab set to the first item (index 0)

    const handleTabClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index) // Toggle active state for tabs
    }

    return (
        <section className={`pt-100 ${styles.marketPointsSec}`}>
            <Container className="gradientBgColor">
                <Row>
                    <Col md={12} lg={10} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.marketPointsBox}>
                            <div className={styles.marketPointsItem}>
                                {data.MarketPointsItem.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.tab} ${activeIndex === index ? styles.activeTab : ''}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                            <div className={styles.tabContent}>
                                {data.MarketPointsItem.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.marketPointsContent} ${activeIndex === index ? styles.activeContent : ''}`}
                                    >
                                        <div className={styles.contentBox}>
                                            <h4>{item.title}</h4>
                                            <p>{item.para}</p>
                                            <CommonBtn txt="Let’s Connect" />
                                        </div>
                                        <div className={styles.imgContainer}>
                                            <div className={styles.imageBox}>
                                                <Image src={item.img} alt={item.title} fill />
                                            </div>
                                        </div>
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

export default MarketPoints
