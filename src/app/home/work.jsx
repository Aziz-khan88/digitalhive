"use client";
import { useState } from "react";
import styles from "@/styles/home/work.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/src/app/app-constants";
import SliderArrow from "@/src/app/components/sliderarrow";
import useEmblaCarousel from 'embla-carousel-react'
import CommonBtn from "@/src/app/components/common/commonbtn"
const OPTIONS = { loop: true, align: 'start' }

const Work = ({ data }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
    const [activeCategory, setActiveCategory] = useState(data.WorkItem[0].category);
    const filteredSlides = data.WorkItem.filter((slide) => slide.category === activeCategory);
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`pt-100 ${styles.workSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={5} className="mt-auto d-none d-md-block">
                        <SliderArrow
                            onPrev={prevButtonHandler}
                            onNext={nextButtonHandler}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className={styles.visibleClass}>
                <Row>
                    <Col md={12}>
                        <ul className={styles.categoryList}>
                            {["Social Media Marketing", "App Development", "Website Development", "Seo", "Content Marketing", "Paid Marketing"].map((category) => (
                                <li
                                    key={category}
                                    className={activeCategory === category ? styles.active : ""}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    <span>{category}</span>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {filteredSlides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.workImage}>
                                                <Image src={item.Img} alt={`Image ${index}`} fill />
                                            </div>
                                            <div className={styles.workContent}>
                                                <h5>{item.title}</h5>
                                                <p>{item.txt}</p>
                                                <div className={styles.btnReaMore}>
                                                    <CommonBtn txt="Get Free Consultation" ArrowBtn={true} />
                                                </div>
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
