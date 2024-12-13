"use client";
import styles from "@/styles/contentmarketing/servicesmain.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowIcon } from "@/src/app/app-constants";

const slides = [
    {
        title: (<>Book Writing</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        url: "#",
    },
    {
        title: (<>Book Edits</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        url: "#",
    },
    {
        title: (<>Book Publishing</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        url: "#",
    },
    {
        title: (<>Book Marketing</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        url: "#",
    },
    {
        title: (<>Children Book</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        url: "#",
    },
    {
        title: (<>Book Video</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        url: "#",
    },
    {
        title: (<>Audio Book</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        url: "#",
    },
    {
        title: (<>Author Website</>),
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        url: "#",
    }

];

const OPTIONS = { loop: true, align: 'start' }
const ServicesMain = () => {
    const [emblaRef] = useEmblaCarousel(OPTIONS)
    return (
        <section className={`pt-100 ${styles.servicesMainSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Our Services</div>
                        <h2>Comprehensive SEO Services That Deliver Results</h2>
                        <p>We don’t just promise growth; we deliver it. Our data-driven strategies are designed to maximize ROI and help your business thrive in a competitive digital landscape.</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.servicesMainContainer}>
                            {slides.map((item, index) => (
                                <div className={styles.servicesMainItem} key={index}>
                                    <div className={styles.servicesMainImage}>
                                        <div className={styles.title}>{item.title}</div>
                                        <div className={styles.barLine}></div>
                                        <div className={styles.readMore}>
                                            <Link href={item.url}>Read More</Link>
                                        </div>
                                        <Link href={item.url} className={styles.btnReaMore}>
                                            <ArrowIcon />
                                        </Link>
                                        <p>{item.txt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default ServicesMain