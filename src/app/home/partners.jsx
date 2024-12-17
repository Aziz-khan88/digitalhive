"use client"
import styles from "@/styles/home/partner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

import Image from "next/image";




const Partners = ({ data }) => {
    const [emblaRefClients] = useEmblaCarousel(
        { loop: true, dragFree: true, draggable: true },
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            })
        ]
    );

    const [emblaRefFramework] = useEmblaCarousel(
        { loop: true, direction: 'rtl', dragFree: true, draggable: true },
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            })
        ]
    );

    const ascendingLogos = [...data.PartnerLogos].sort((a, b) => a.logo.localeCompare(b.logo));
    const descendingLogos = [...data.PartnerLogos].sort((a, b) => b.logo.localeCompare(a.logo));
    return (
        <section className={`pt-100 ${styles.partnerSection}`}>
            <Container className="gradientBgColor px-0">
                <Row>
                    <Col md={7}>
                        <div className={styles.partnerHeading}>
                            <div className="subtitle">{data.subtitle}</div>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* Ascending order carousel */}
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRefClients}>
                                <div className={styles.embla__container}>
                                    {ascendingLogos.map((item, index) => (
                                        <div className={styles.embla__slide} key={`client-asc-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.logo} alt={`Client Logo ${index + 1}`} width={316} height={165} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Descending order carousel */}
                        <div className={styles.embla} dir="rtl">
                            <div className={styles.embla__viewport} ref={emblaRefFramework}>
                                <div className={styles.embla__container}>
                                    {descendingLogos.map((item, index) => (
                                        <div className={styles.embla__slide} key={`framework-desc-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.logo} alt={`Framework Logo ${index + 1}`} width={316} height={165} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Partners