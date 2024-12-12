"use client";
import styles from "@/styles/smm/opportunities.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Img01 from "media/services/smm/opportunities/IMG01.webp"
import Img02 from "media/services/smm/opportunities/IMG02.webp"
import Img03 from "media/services/smm/opportunities/IMG03.webp"
import Img04 from "media/services/smm/opportunities/IMG04.webp"
import Img05 from "media/services/smm/opportunities/IMG01.webp"
import Img06 from "media/services/smm/opportunities/IMG02.webp"
import Img07 from "media/services/smm/opportunities/IMG03.webp"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowIcon } from "@/src/app/app-constants";

const slides = [
    {
        title: (<>Social Media<br /> Marketing</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        Img: Img01.src,
        url: "#",
    },
    {
        title: (<>Influencer<br /> Marketing</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        Img: Img02.src,
        url: "#",
    },
    {
        title: (<>YouTube<br /> Optimization</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        Img: Img03.src,
        url: "#",
    },
    {
        title: (<>Search Engine<br /> Optimization</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        Img: Img04.src,
        url: "#",
    },
    {
        title: (<>Social Media<br /> Marketing</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        Img: Img05.src,
        url: "#",
    },
    {
        title: (<>Social Media<br /> Marketing</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        Img: Img06.src,
        url: "#",
    },
    {
        title: (<>Social Media<br /> Marketing</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        Img: Img07.src,
        url: "#",
    }

];

const OPTIONS = { loop: true, align: 'start' }
const Opportunities = () => {
    const [emblaRef] = useEmblaCarousel(OPTIONS)
    return (
        <section className={`pt-100 ${styles.opportunitiesSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Our Opportunities</div>
                        <h2>What Marketing Opportunities We Bring To Your Disposal?</h2>
                        <p>We craft tailored digital strategies that fuel growth, engage audiences, and deliver measurable results.</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.opportunitiesImage}>
                                                <div className={styles.title}>{item.title}</div>
                                                <div className={styles.barLine}></div>
                                                <Image src={item.Img} alt={`Image ${index}`} fill />
                                                <Link href={item.url} className={styles.btnReaMore}>
                                                    <ArrowIcon />
                                                </Link>
                                                <p>{item.txt}</p>
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

export default Opportunities