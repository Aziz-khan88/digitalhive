"use client";
import styles from "@/styles/home/clients.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
const options = { loop: true }

const Clients = ({ data, landingBanner, landingPage }) => {
    const [emblaRef] = useEmblaCarousel(options,
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            }),
        ]
    );

    return (
        <>
            <section className={landingPage ? styles.mainSectionClients : ""}>
                <Container fluid>
                    <Row>
                        {landingPage ?
                            <Col md={7} className="m-auto text-center">
                                <h2>Platform we Love working with</h2>
                                <p>Jumpto1 Social Media Marketing means more traffic, more calls and more sales! We offer data-driven strategies.</p>
                            </Col>
                            : ""}
                        <Col md={12} >
                            <section className={`${styles.clientSlider} ${landingBanner ? styles.landingSlider : ""} ${landingPage ? styles.landingPageBanner : ""}`}>
                                <div className={styles.embla}>
                                    <div className={styles.embla__viewport} ref={emblaRef}>
                                        <div className={styles.embla__container}>
                                            {data.map((item, index) => (
                                                <div className={styles.embla__slide} key={index}>
                                                    <div className={styles.imgBox}>
                                                        <Image src={item.Img} alt={`Client ${index}`} fill />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
};

export default Clients;
