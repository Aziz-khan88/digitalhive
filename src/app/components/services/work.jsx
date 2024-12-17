"use client";
import styles from "@/styles/home/work.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/src/app/app-constants";

import useEmblaCarousel from 'embla-carousel-react'

const OPTIONS = { loop: true, align: 'start' }

const Work = ({ data }) => {
    const [emblaRef] = useEmblaCarousel(OPTIONS)
    return (
        <section className={`pt-100 ${styles.workSection}`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="subtitle">Our Recent Work</div>
                        <h2>Bringing Ideas to Life</h2>
                        <p>
                            Explore our latest projects and see how we’ve helped brands grow, engage, and succeed in the digital
                            world.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className={`${styles.visibleClass} ${styles.BookClass}`}>
                <Row>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.WorkItem.map((item, index) => (
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
