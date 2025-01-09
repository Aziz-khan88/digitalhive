"use client"
import styles from "@/styles/services/testimonialservice.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import useEmblaCarousel from 'embla-carousel-react'
import { PauseIcon, PlayIcon } from "@/src/app/app-constants"
import SliderArrow from "@/src/app/components/sliderarrow";
import { useState } from "react"
import Autoplay from 'embla-carousel-autoplay'

const OPTIONS = { align: 'start', loop: true }
const TestimonialServices = ({ data }) => {
    const [playingIndex, setPlayingIndex] = useState(null);
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })])

    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };


    const handlePlayClick = (index) => {
        if (playingIndex === index) {
            setPlayingIndex(null);
        } else {
            setPlayingIndex(index);
        }
    };

    return (
        <section className={`pt-100 ${styles.testServiceSection}`}>
            <Container>
                <Row>
                    <Col md={8}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={4} className="mt-auto d-none d-md-block">
                        <SliderArrow
                            onPrev={prevButtonHandler}
                            onNext={nextButtonHandler}
                        />
                    </Col>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.TestimonialItem.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.testServiceImage}>
                                                {playingIndex !== index ? (
                                                    <Image src={item.img} alt={`Image ${index}`} fill />
                                                ) : null}
                                                {playingIndex === index ? (
                                                    <video width="100%" preload="none" autoPlay>
                                                        <source src={item.videoUrl} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                ) : null}
                                                <div className={`${styles.palyBtn} ${playingIndex === index ? styles.active : ''}`} onClick={() => handlePlayClick(index)}>
                                                    {playingIndex !== index ? (
                                                        <PlayIcon />
                                                    ) :
                                                        <PauseIcon />
                                                    }
                                                </div>
                                            </div>
                                            <div className={styles.testServiceContent}>
                                                <div className={styles.name}>{item.title}</div>
                                                <div className={styles.job}>{item.followers}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className="mt-auto d-sm-block d-md-none">
                        <SliderArrow
                            onPrev={prevButtonHandler}
                            onNext={nextButtonHandler}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TestimonialServices