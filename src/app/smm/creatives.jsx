"use client"
import styles from "@/styles/smm/creatives.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";
import IMG01 from "media/services/smm/Influencer/Influencer1.webp"
import IMG02 from "media/services/smm/Influencer/Influencer2.webp"
import IMG03 from "media/services/smm/Influencer/Influencer3.webp"
import { useEffect, useState } from "react"

const options = { align: 'center', loop: true }

const slider = [
    {
        txt: "2.5M followers",
        namee: "@roger",
        job: "Travel Influencer",
        img: IMG01.src,
    },
    {
        txt: "2.5M followers",
        namee: "@lydia",
        job: "Lifestyle Influencer",
        img: IMG02.src,
    }
    ,
    {
        txt: "2.5M followers",
        namee: "@marialevin",
        job: "Content Creator",
        img: IMG03.src,
    },
    {
        txt: "2.5M followers",
        namee: "@roger",
        job: "Travel Influencer",
        img: IMG01.src,
    },
    {
        txt: "2.5M followers",
        namee: "@lydia",
        job: "Lifestyle Influencer",
        img: IMG02.src,
    }
    ,
    {
        txt: "2.5M followers",
        namee: "@marialevin",
        job: "Content Creator",
        img: IMG03.src,
    },

]
const Creatives = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })])
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on("select", onSelect)
        onSelect() // Set initial index
    }, [emblaApi])

    const scrollToSlide = (index) => {
        if (!emblaApi) return
        emblaApi.scrollTo(index)
    }

    return (
        <section className={`pt-100 ${styles.creativesSection}`}>
            <Container>
                <Row>
                    <Col md={9} className="m-auto text-center">
                        <div className="subtitle">Happy Influencer</div>
                        <h2>Outshine the Competition with Bold, Dynamic Creatives!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto ">
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slider.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={`${styles.creativesBox}`}>
                                                <div className={styles.infoImg}>
                                                    <Image src={item.img} alt="Digital CTA" fill />
                                                </div>
                                                <div className={styles.usesInfo}>
                                                    <div className={styles.namee}>{item.namee}</div>
                                                    <div className={styles.job}>{item.job}</div>
                                                    <div className={styles.txt}>{item.txt}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.embla__dots}>
                                {slider.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.embla__dot} ${index === selectedIndex ? styles.isActive : ''}`}
                                        onClick={() => scrollToSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Creatives