"use client"
import styles from "@/styles/services/creatives.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";

import { useEffect, useState } from "react"

const options = { align: 'center', loop: true }


const Creatives = ({ data }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })])
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on("select", onSelect)
        onSelect()
    }, [emblaApi])

    const scrollToSlide = (index) => {
        if (!emblaApi) return
        emblaApi.scrollTo(index)
    }

    return (
        <section className={`pt-100 ${styles.creativesSection}`}>
            <Container>
                <Row>
                    <Col md={10} lg={9} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={11} lg={10} xl={9} xxl={8} className="m-auto ">
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.CreativesItems.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={`${styles.creativesBox}`}>
                                                <div className={styles.infoImg}>
                                                    <Image src={item.img} alt="Digital CTA" fill />
                                                </div>
                                                <div className={styles.usesInfo}>
                                                    <div className={styles.namee}>{item.namee}</div>
                                                    <div className={styles.job}>{item.job}</div>
                                                    <div className={styles.txt}>{item.txt}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.embla__dots}>
                                {data.CreativesItems.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.embla__dot} ${index === selectedIndex ? styles.isActive : ''}`}
                                        onClick={() => scrollToSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Creatives