"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/home/plateforms.module.scss";
import CommonBtn from "@/src/app/components/common/commonbtn"
import { Col, Container, Row } from "react-bootstrap";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon, PinterestIcon, YoutubeIcon } from "@/src/app/app-constants";
const OPTIONS = { loop: true, axis: "y" };


export const data = {
    subtitle: "Platforms We",
    title: "Platforms That Power Your Success",
    desc: "We collaborate with the platforms your audience knows and loves. Whether it’s growing your brand, building communities, or driving engagement, we make sure your message resonates where it matters most.",
    SocailItems: [
        { name: "Instagram", link: "https://www.instagram.com/infinitidigitalus/", icon: <InstagramIcon /> },
        { name: "YouTube", link: "https://www.youtube.com/@InfinitiDigitalus", icon: <YoutubeIcon /> },
        { name: "Twitter", link: "https://x.com/Infinitidigitl", icon: <TwitterIcon /> },
        { name: "Facebook", link: "https://www.facebook.com/infinitidigitalus/", icon: <FacebookIcon /> },
        { name: "Pinterest", link: "https://www.pinterest.com/infinitidigitalus/#", icon: <PinterestIcon /> },
        { name: "Linkedin", link: "https://www.linkedin.com/company/infiniti-digitalus", icon: <LinkedInIcon /> },
    ]
}

const PlateFromLp = () => {
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
                        <CommonBtn txt="Get Free Consultation" LiveChat={true} BgBlack={true} />
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

export default PlateFromLp;
