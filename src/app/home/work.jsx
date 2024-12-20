"use client";
import { useState } from "react";
import styles from "@/styles/home/work.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/src/app/app-constants";

import useEmblaCarousel from 'embla-carousel-react'

const OPTIONS = { loop: true, align: 'start' }

const Work = ({ data }) => {
    const [emblaRef] = useEmblaCarousel(OPTIONS)
    const [activeCategory, setActiveCategory] = useState(data.WorkItem[0].category);
    const filteredSlides = data.WorkItem.filter((slide) => slide.category === activeCategory);

    return (
        <section className={`pt-100 ${styles.workSection}`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
            </Container>
            <Container className={styles.visibleClass}>
                <Row>
                    <Col md={12}>
                        <ul className={styles.categoryList}>
                            {["Mobile App Development", "Website Development", "Social Media Marketing"].map((category) => (
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
                                                <h4>{item.title}</h4>
                                                <p>{item.txt}</p>
                                                <Link href={item.url} className="commonBtn">
                                                    Get Free Consultation
                                                </Link>
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
                </Row>
            </Container>
        </section>
    );
};

export default Work;
