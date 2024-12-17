"use client";
import styles from "@/styles/home/awards.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowIcon } from "@/src/app/app-constants";




const OPTIONS = { loop: true, align: 'start' }
const Awards = ({ data }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`pt-100 ${styles.awardsSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={5} className="my-auto">
                        <div className={styles.embla_container}>
                            <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                <ArrowIcon direction="prev" />
                            </div>
                            <div className={styles.embla_next} onClick={nextButtonHandler}>
                                <ArrowIcon direction="next" />
                            </div>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.slides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.awardsBoxs}>
                                                <div className={styles.awardsIcon}>
                                                    {item.icon}
                                                </div>
                                                <div className={styles.awardsContent}>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.txt}</p>
                                                </div>
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

export default Awards