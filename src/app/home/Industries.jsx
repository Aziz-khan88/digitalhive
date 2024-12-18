"use client";
import styles from "@/styles/home/industry.module.scss"
import { Col, Container, Row } from 'react-bootstrap'

import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowIcon } from "@/src/app/app-constants";

const OPTIONS = { loop: true, align: 'start' }
const Industries = ({ data, IndustryData }) => {
    const [emblaRef] = useEmblaCarousel(OPTIONS)
    return (
        <section className={`pt-100 ${styles.industriesSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {IndustryData.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.industriesImage}>
                                                <Image src={item.Img} alt={`Image ${index}`} fill />
                                            </div>
                                            <div className={styles.industriesContent}>
                                                <h4>{item.title}</h4>
                                                <p>{item.txt}</p>
                                                <Link href={item.url} className={styles.btnReaMore}>
                                                    <ArrowIcon />Get Free Consultation
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Industries