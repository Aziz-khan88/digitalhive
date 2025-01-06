"use client"
import styles from "@/styles/home/testimonials.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'


const options = { loop: true }
import SliderArrow from "@/src/app/components/sliderarrow";
const Testimonials = ({ data }) => {
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
                    <Col md={8} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="m-auto text-center">
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.Testslider.map((item, index) => (
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
                        <SliderArrow
                            onPrev={prevButtonHandler}
                            onNext={nextButtonHandler}
                            center="yes"
                        />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Testimonials