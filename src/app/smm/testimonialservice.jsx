"use client"
import styles from "@/styles/smm/testimonialservice.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import IMG01 from "media/services/smm/testimonial/test01.webp"
import IMG02 from "media/services/smm/testimonial/test02.webp"
import IMG03 from "media/services/smm/testimonial/test03.webp"
import IMG04 from "media/services/smm/testimonial/test04.webp"
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowIcon, PlayIcon } from "@/src/app/app-constants"


const slides = [
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG01.src,
    },
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG02.src,
    },
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG03.src,
    },
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG04.src,
    },
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG01.src,
    },
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG01.src,
    },
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG02.src,
    },
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG03.src,
    },
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG04.src,
    },
    {
        title: "Daniel Gonzalez",
        txt: "CTO / Pronftdesign.com",
        Img: IMG01.src,
    },
]
const OPTIONS = { align: 'start', loop: true }
const TestimonialServices = () => {
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
                        <div className="subtitle">Our Testimonials</div>
                        <h2>Hear From Our Clients</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
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
                                    {slides.map((item, index) => (
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