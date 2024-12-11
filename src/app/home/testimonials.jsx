"use client"
import styles from "@/styles/home/testimonials.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowIcon, ClutchLogo, TrustpilotLogo, GoogleLogo } from "@/src/app/app-constants";
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'
const options = { loop: true }
const slider = [
    {
        txt: "Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firm's workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.",
        icon: <ClutchLogo />,
        namee: "Daniel Gonzalez",
        job: "CTO / Pronftdesign.com",
    },
    {
        txt: "Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firm's workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.",
        icon: <TrustpilotLogo />,
        namee: "Daniel Gonzalez",
        job: "CTO / Pronftdesign.com",
    }
    ,
    {
        txt: "Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firm's workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.",
        icon: <GoogleLogo />,
        namee: "Daniel Gonzalez",
        job: "CTO / Pronftdesign.com",
    }
]
const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 }), ClassNames()])
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`pt-100 ${styles.testimonialsSection} sliderTestimonial`}>
            <Container>
                <Row>
                    <Col md={7} className="m-auto text-center">
                        <div className="subtitle">Happy Clients</div>
                        <h2>What Our Clients Say</h2>
                        <p>Explore our latest projects and see how we've helped brands grow, engage, and succeed in the digital world.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="m-auto text-center">
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slider.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={`${styles.testBox} testBoxBG`}>
                                                <div className={styles.testContent}>“{item.txt}”</div>
                                                <div className={styles.infoTest}>
                                                    <div className={styles.usesInfo}>
                                                        <div className={styles.namee}>{item.namee}</div>
                                                        <div className={styles.job}>{item.job}</div>
                                                    </div>
                                                    <div className={styles.usesIcon}>
                                                        {item.icon}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <div className={styles.embla_container}>
                            <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                <ArrowIcon direction="prev" />
                            </div>
                            <div className={styles.embla_next} onClick={nextButtonHandler}>
                                <ArrowIcon direction="next" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Testimonials