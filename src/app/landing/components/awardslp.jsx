"use client";
import styles from "@/styles/landing/components/awardslp.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import SliderArrow from "@/src/app/components/sliderarrow";
import Autoplay from 'embla-carousel-autoplay'


//Awards
import { ClutchLogo, TrustpilotLogo, GoogleLogo, Forbes, Upcity } from "@/src/app/app-constants";
export const data = {
    subtitle: "Awards & Recognitions",
    title: "Celebrating Excellence, Innovation, and Results",
    desc: "Our awards and recognitions reflect our clients' trust in us and our unwavering commitment to delivering results. At Infinitidigital, we don’t just aim for success—we earn it.",
    slides: [
        {
            txt: "Recognized for excellence in delivering innovative digital solutions that drive measurable results for businesses worldwide.",
            icon: <ClutchLogo />,
            namee: "Amanda T.",
            job: "CTO / Pronftdesign.com",
            color: "#DFFFBF",

        },
        {
            txt: "Highly rated for customer satisfaction, transparency, and proven strategies that help brands thrive.",
            icon: <TrustpilotLogo />,
            namee: "Amanda T.",
            job: "CTO / Pronftdesign.com",
            color: "#E0F0FF",
        },
        {
            txt: "Celebrated for our expertise in SEO, PPC, and delivering top-notch digital growth through industry-leading practices.",
            icon: <GoogleLogo />,
            namee: "Amanda T.",
            job: "CTO / Pronftdesign.com",
            color: "#FFCDD7",

        },
        {
            txt: "Honored as a trusted member for thought leadership and exceptional contributions to the digital marketing industry.",
            icon: <Forbes />,
            namee: "Amanda T.",
            job: "CTO / Pronftdesign.com",
            color: "#DFFFBF",

        },
        {
            txt: "Recognized for consistently delivering outstanding marketing solutions and fostering meaningful business growth for clients across industries.",
            icon: <Upcity />,
            namee: "Amanda T.",
            job: "CTO / Pronftdesign.com",
            color: "#E0F0FF",

        },
        {
            txt: "Celebrated for innovative use of technology in crafting highly effective digital marketing campaigns that set new benchmarks.",
            icon: <GoogleLogo />,
            namee: "Amanda T.",
            job: "CTO / Pronftdesign.com",
            color: "#FFCDD7",

        }

    ]
}


const OPTIONS = { loop: true, align: 'center' }
const AwardsLp = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })])
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`pt-100 ${styles.awardsLpSec}`} id="TestimonialsId">
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
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
                                    {data.slides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.awardsLpBoxs} style={{
                                                background: `linear-gradient(150deg, #FFFFFF 13.78%, ${item.color} 90.15%)`
                                            }}>
                                                <div className={styles.awardsContent}>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.txt}</p>
                                                </div>
                                                <div className={styles.infoTest}>
                                                    <div className={styles.usesInfo}>
                                                        <div className={styles.namee}>{item.namee}</div>
                                                        <div className={styles.job}>{item.job}</div>
                                                    </div>
                                                    <div className={styles.usesIcon}>
                                                        {item.icon}
                                                    </div>
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

export default AwardsLp