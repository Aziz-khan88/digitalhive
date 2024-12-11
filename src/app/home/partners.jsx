"use client"
import styles from "@/styles/home/partner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Logo1 from "media/home/partnerLogo/logo1.webp";
import Logo2 from "media/home/partnerLogo/logo2.webp";
import Logo3 from "media/home/partnerLogo/logo3.webp";
import Logo4 from "media/home/partnerLogo/logo4.webp";
import Logo5 from "media/home/partnerLogo/logo5.webp";
import Logo6 from "media/home/partnerLogo/logo6.webp";
import Logo7 from "media/home/partnerLogo/logo7.webp";
import Logo8 from "media/home/partnerLogo/logo8.webp";
import Logo9 from "media/home/partnerLogo/logo9.webp";
import Logo10 from "media/home/partnerLogo/logo10.webp";
import Logo11 from "media/home/partnerLogo/logo11.webp";
import Logo12 from "media/home/partnerLogo/logo12.webp";
import Logo13 from "media/home/partnerLogo/logo13.webp";
import Logo14 from "media/home/partnerLogo/logo14.webp";
import Logo15 from "media/home/partnerLogo/logo15.webp";
import Logo16 from "media/home/partnerLogo/logo16.webp";
import Logo17 from "media/home/partnerLogo/logo17.webp";
import Logo18 from "media/home/partnerLogo/logo18.webp";
import Logo19 from "media/home/partnerLogo/logo19.webp";
import Logo20 from "media/home/partnerLogo/logo20.webp";
import Image from "next/image";


export const ClientsLogos = [
    { logo: Logo1.src },
    { logo: Logo2.src },
    { logo: Logo3.src },
    { logo: Logo4.src },
    { logo: Logo5.src },
    { logo: Logo6.src },
    { logo: Logo7.src },
    { logo: Logo8.src },
    { logo: Logo9.src },
    { logo: Logo10.src },
    { logo: Logo11.src },
    { logo: Logo12.src },
    { logo: Logo13.src },
    { logo: Logo14.src },
    { logo: Logo15.src },
    { logo: Logo16.src },
    { logo: Logo17.src },
    { logo: Logo18.src },
    { logo: Logo19.src },
    { logo: Logo20.src },
];

const Partners = () => {
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

    const ascendingLogos = [...ClientsLogos].sort((a, b) => a.logo.localeCompare(b.logo));
    const descendingLogos = [...ClientsLogos].sort((a, b) => b.logo.localeCompare(a.logo));
    return (
        <section className={`pt-100 ${styles.partnerSection}`}>
            <Container className="gradientBgColor px-0">
                <Row>
                    <Col md={7}>
                        <div className={styles.partnerHeading}>
                            <div className="subtitle">Our Partners</div>
                            <h2>Collaboration That Inspires</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor arcu lectus mauris ut velit sit.</p>
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