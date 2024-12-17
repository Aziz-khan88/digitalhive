"use client"
import styles from "@/styles/services/testimonialservice.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"

import useEmblaCarousel from 'embla-carousel-react'
import { ArrowIcon, PlayIcon } from "@/src/app/app-constants"



const OPTIONS = { align: 'start', loop: true }
const TestimonialServices = ({ data }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`pt-100 ${styles.testServiceSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={5}>
                        <div className={styles.embla_container}>
                            <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                <ArrowIcon direction="prev" />
                            </div>
                            <div className={styles.embla_next} onClick={nextButtonHandler}>
                                <ArrowIcon direction="next" />
                            </div>
                        </div> </Col>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.TestimonialItem.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.testServiceImage}>
                                                <Image src={item.Img} alt={`Image ${index}`} fill />
                                                <div className={styles.palyBtn}>
                                                    <PlayIcon />
                                                </div>
                                            </div>
                                            <div className={styles.testServiceContent}>
                                                <div className={styles.name}>{item.title}</div>
                                                <div className={styles.job}>{item.txt}</div>
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

export default TestimonialServices