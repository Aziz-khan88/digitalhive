"use client";
import styles from "@/styles/home/work.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/src/app/app-constants";
import useEmblaCarousel from 'embla-carousel-react'
import SliderArrow from "@/src/app/components/sliderarrow";
import CommonBtn from "@/src/app/components/common/commonbtn"
import Autoplay from 'embla-carousel-autoplay'
const OPTIONS = { loop: true, align: 'start' }

const Work = ({ data, category }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })])
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };


    const filteredWorkItems = data.WorkItem.filter(item => item.category === category);

    return (
        <section className={`pt-100 ${styles.workSection}`}>
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
                </Row>
            </Container>
            <Container className={`${styles.visibleClass} ${styles.BookClass}`}>
                <Row>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {filteredWorkItems.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.workImage}>
                                                <Image src={item.Img} alt={`Image ${index}`} fill />
                                            </div>
                                            <div className={styles.workContent}>
                                                <h4>{item.title}</h4>
                                                <p>{item.txt}</p>
                                                <CommonBtn txt="Get Free Consultation" />
                                            </div>
                                            <Link href={item.url} className={styles.arrowBg}>
                                                <ArrowIcon />
                                            </Link>
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
    );
};

export default Work;
