"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/home/plateforms.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import useEmblaCarousel from "embla-carousel-react";
import { DiscordIcon, FacebookIcon, InstagramIcon, RedditIcon, YoutubeIcon } from "@/src/app/app-constants";
import Autoplay from 'embla-carousel-autoplay'
const OPTIONS = { loop: true, axis: "y" };
const SocailItems = [
    { name: "Instagram", link: "#", icon: <InstagramIcon /> },
    { name: "YouTube", link: "#", icon: <YoutubeIcon /> },
    { name: "Reddit", link: "#", icon: <RedditIcon /> },
    { name: "Facebook", link: "#", icon: <FacebookIcon /> },
    { name: "Discord", link: "#", icon: <DiscordIcon /> },
    { name: "Reddit", link: "#", icon: <RedditIcon /> },
    { name: "Facebook", link: "#", icon: <FacebookIcon /> },
    { name: "Discord", link: "#", icon: <DiscordIcon /> },
];

const PlateFroms = () => {
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
                        <div className="subtitle">Platforms We</div>
                        <h2>Platforms We Work With</h2>
                        <p>
                            Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <Link href="#" className="commonBtn">
                            Get Free Consultation
                        </Link>
                    </Col>
                    <Col md={6} className="text-center">
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {SocailItems.map((item, index) => {
                                        const isActive = index === selectedIndex;
                                        const isPrev = index === (selectedIndex - 1 + SocailItems.length) % SocailItems.length;
                                        const isNext = index === (selectedIndex + 1) % SocailItems.length;

                                        return (
                                            <div
                                                className={`${styles.embla__slide} ${isActive ? styles.active : ""} ${isPrev ? styles.prev : ""} ${isNext ? styles.next : ""}`}
                                                key={index}
                                            >
                                                <div className={`${styles.socialIcon} ${item.name}`}>
                                                    <div className={styles.icons} >{item.icon}</div>
                                                    <div className={styles.title}>{item.name}</div>
                                                </div>
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
