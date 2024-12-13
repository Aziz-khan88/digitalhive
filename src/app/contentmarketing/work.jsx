"use client";
import styles from "@/styles/home/work.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/src/app/app-constants";
import Img01 from "media/services/contentmarketing/img01.webp"
import Img02 from "media/services/contentmarketing/img02.webp"
import Img03 from "media/services/contentmarketing/img03.webp"
import Img04 from "media/services/contentmarketing/img04.webp"
import useEmblaCarousel from 'embla-carousel-react'
const slides = [
    {
        title: "Music App",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img01.src,
        url: "#",
        category: "Mobile App Development",
    },
    {
        title: "E-commerce Website",
        txt: "Creating seamless online shopping experiences to drive sales and improve user engagement.",
        Img: Img02.src,
        url: "#",
        category: "Mobile App Development",
    },
    {
        title: "Social Media Campaign",
        txt: "Driving brand awareness and engagement through strategic social media marketing.",
        Img: Img03.src,
        url: "#",
        category: "Mobile App Development",
    },
    {
        title: "Another App",
        txt: "Innovative solutions for mobile users.",
        Img: Img04.src,
        url: "#",
        category: "Mobile App Development",
    },
    {
        title: "Music App",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img01.src,
        url: "#",
        category: "Mobile App Development",
    },
    {
        title: "E-commerce Website",
        txt: "Creating seamless online shopping experiences to drive sales and improve user engagement.",
        Img: Img02.src,
        url: "#",
        category: "Mobile App Development",
    },
    {
        title: "Social Media Campaign",
        txt: "Driving brand awareness and engagement through strategic social media marketing.",
        Img: Img03.src,
        url: "#",
        category: "Mobile App Development",
    },
    {
        title: "Another App",
        txt: "Innovative solutions for mobile users.",
        Img: Img04.src,
        url: "#",
        category: "Mobile App Development",
    },
    {
        title: "Social Media Campaign",
        txt: "Driving brand awareness and engagement through strategic social media marketing.",
        Img: Img03.src,
        url: "#",
        category: "Website Development",
    },
    {
        title: "Another App",
        txt: "Innovative solutions for mobile users.",
        Img: Img04.src,
        url: "#",
        category: "Website Development",
    },
    {
        title: "Music App",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img01.src,
        url: "#",
        category: "Website Development",
    },
    {
        title: "E-commerce Website",
        txt: "Creating seamless online shopping experiences to drive sales and improve user engagement.",
        Img: Img02.src,
        url: "#",
        category: "Website Development",
    },
    {
        title: "E-commerce Website",
        txt: "Creating seamless online shopping experiences to drive sales and improve user engagement.",
        Img: Img02.src,
        url: "#",
        category: "Social Media Marketing",
    },
    {
        title: "Social Media Campaign",
        txt: "Driving brand awareness and engagement through strategic social media marketing.",
        Img: Img03.src,
        url: "#",
        category: "Social Media Marketing",
    },
    {
        title: "Music App",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img01.src,
        url: "#",
        category: "Social Media Marketing",
    },

    {
        title: "Another App",
        txt: "Innovative solutions for mobile users.",
        Img: Img04.src,
        url: "#",
        category: "Social Media Marketing",
    },

];
const OPTIONS = { loop: true, align: 'start' }

const Work = () => {
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
                                    {slides.map((item, index) => (
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
