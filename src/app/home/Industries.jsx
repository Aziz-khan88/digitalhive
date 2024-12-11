"use client";
import styles from "@/styles/home/industry.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Img01 from "media/home/industires/industy01.webp"
import Img02 from "media/home/industires/industy02.webp"
import Img03 from "media/home/industires/industy03.webp"
import Img04 from "media/home/industires/industy04.webp"
import Img05 from "media/home/industires/industy05.webp"
import Img06 from "media/home/industires/industy06.webp"
import Img07 from "media/home/industires/industy07.webp"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowIcon } from "@/src/app/app-constants";

const slides = [
    {
        title: "B2b Business",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img01.src,
        url: "#",
    },
    {
        title: "Construction",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img02.src,
        url: "#",
    },
    {
        title: "Education",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img03.src,
        url: "#",
    },
    {
        title: "Events",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img04.src,
        url: "#",
    },
    {
        title: "Content Creator",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img05.src,
        url: "#",
    },
    {
        title: "Automotive",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img06.src,
        url: "#",
    },
    {
        title: "Spots",
        txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
        Img: Img07.src,
        url: "#",
    }

];

const OPTIONS = { loop: true, align: 'start' }
const Industries = () => {
    const [emblaRef] = useEmblaCarousel(OPTIONS)
    return (
        <section className={`pt-100 ${styles.industriesSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Our Industries</div>
                        <h2>Transforming Businesses Across Diverse Industries</h2>
                        <p>We craft tailored digital strategies that fuel growth, engage audiences, and deliver measurable results.</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.industriesImage}>
                                                <Image src={item.Img} alt={`Image ${index}`} fill />
                                            </div>
                                            <div className={styles.industriesContent}>
                                                <h4>{item.title}</h4>
                                                <p>{item.txt}</p>
                                                <Link href={item.url} className={styles.btnReaMore}>
                                                    <ArrowIcon />Get Free Consultation
                                                </Link>
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

export default Industries