"use client";
import styles from "@/styles/services/opportunities.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import CommonBtn from "@/src/app/components/common/commonbtn"



const OPTIONS = { loop: true, align: 'start' }
const Opportunities = ({ data }) => {
    const [emblaRef] = useEmblaCarousel(OPTIONS)
    return (
        <section className={`pt-100 ${styles.opportunitiesSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>

                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.OpportunitiesItem.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.opportunitiesImage}>
                                                <div className={styles.title}>{item.title}</div>
                                                <div className={styles.barLine}></div>
                                                <Image src={item.Img} alt={`Image ${index}`} fill />
                                                <div className={styles.btnReaMore}>
                                                    <CommonBtn ArrowBtn={true} />
                                                </div>
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