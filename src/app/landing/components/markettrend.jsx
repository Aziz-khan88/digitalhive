"use client";
import styles from "@/styles/landing/components/markettrend.module.scss"
import { Col, Container, Row } from "react-bootstrap";
import SliderArrow from "../../components/sliderarrow";
import useEmblaCarousel from 'embla-carousel-react'
import IMG01 from "media/landing/smm/market01.webp"
import Image from "next/image";
import CommonBtn from "../../components/common/commonbtn";
import Autoplay from 'embla-carousel-autoplay'



const data = [
    {
        title: "Market Growth",
        txt: "As of 2025, the global social media marketing industry stands as a powerhouse, valued at an impressive $16.6 billion. This dynamic sector is projected to nearly double in size, reaching an estimated $37.9 billion by 2030. The rapid growth underscores the increasing reliance of businesses worldwide on social media platforms to connect with audiences, build brand awareness, and drive measurable outcomes. With ever-evolving trends and advancements, the social media marketing landscape continues to expand, offering limitless opportunities for brands to thrive in the digital age.",
        img: IMG01.src,
    },
    {
        title: "Market Growth",
        txt: "As of 2025, the global social media marketing industry stands as a powerhouse, valued at an impressive $16.6 billion. This dynamic sector is projected to nearly double in size, reaching an estimated $37.9 billion by 2030. The rapid growth underscores the increasing reliance of businesses worldwide on social media platforms to connect with audiences, build brand awareness, and drive measurable outcomes. With ever-evolving trends and advancements, the social media marketing landscape continues to expand, offering limitless opportunities for brands to thrive in the digital age.",
        img: IMG01.src,
    },
    {
        title: "Market Growth",
        txt: "As of 2025, the global social media marketing industry stands as a powerhouse, valued at an impressive $16.6 billion. This dynamic sector is projected to nearly double in size, reaching an estimated $37.9 billion by 2030. The rapid growth underscores the increasing reliance of businesses worldwide on social media platforms to connect with audiences, build brand awareness, and drive measurable outcomes. With ever-evolving trends and advancements, the social media marketing landscape continues to expand, offering limitless opportunities for brands to thrive in the digital age.",
        img: IMG01.src,
    },
    {
        title: "Market Growth",
        txt: "As of 2025, the global social media marketing industry stands as a powerhouse, valued at an impressive $16.6 billion. This dynamic sector is projected to nearly double in size, reaching an estimated $37.9 billion by 2030. The rapid growth underscores the increasing reliance of businesses worldwide on social media platforms to connect with audiences, build brand awareness, and drive measurable outcomes. With ever-evolving trends and advancements, the social media marketing landscape continues to expand, offering limitless opportunities for brands to thrive in the digital age.",
        img: IMG01.src,
    },
]
const OPTIONS = { loop: true, align: 'center' }
const MarketTrend = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })])
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`pt-100 ${styles.markettrendSec}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Market Trends</div>
                        <h2>Lorem Ipsum is simply dummy text</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book text of the printing and typesetting.</p>
                    </Col>
                    <Col md={5} className="mt-auto d-none d-md-block">
                        <SliderArrow
                            onPrev={prevButtonHandler}
                            onNext={nextButtonHandler}
                        />
                    </Col>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.markettrendContainer}>
                                                <div className={styles.markettrendTxt}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.txt}</p>
                                                    <CommonBtn txt="Free Consultation" LiveChat={true} BgBlack={true} />
                                                </div>
                                                <div className={styles.markettrendImg}>
                                                    <Image src={item.img} alt="Image Market Trend" fill />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className="mt-auto d-sm-block d-md-none">
                        <SliderArrow
                            onPrev={prevButtonHandler}
                            onNext={nextButtonHandler}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MarketTrend