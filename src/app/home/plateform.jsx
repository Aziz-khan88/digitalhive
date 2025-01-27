"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/home/plateforms.module.scss";
import CommonBtn from "@/src/app/components/common/commonbtn"
import { Col, Container, Row } from "react-bootstrap";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import Link from "next/link";
const OPTIONS = { loop: true, axis: "y" };


const PlateFroms = ({ data }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 1000 })]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <section className={`pt-100 ${styles.plateformsSection}`}>
            <Container className="h-100 gradientBgColor">
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                        <CommonBtn txt="Get Free Consultation" />
                    </Col>
                    <Col md={6} className="text-center">
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.SocailItems.map((item, index) => {
                                        const isActive = index === selectedIndex;
                                        const isPrev = index === (selectedIndex - 1 + data.SocailItems.length) % data.SocailItems.length;
                                        const isNext = index === (selectedIndex + 1) % data.SocailItems.length;

                                        return (
                                            <div
                                                className={`${styles.embla__slide} ${isActive ? styles.active : ""} ${isPrev ? styles.prev : ""} ${isNext ? styles.next : ""}`}
                                                key={index}
                                            >
                                                <Link href={item.link} target="_blank">
                                                    <div className={`${styles.socialIcon} ${item.name}`}>
                                                        <div className={styles.icons} >{item.icon}</div>
                                                        <div className={styles.title}>{item.name}</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default PlateFroms;
