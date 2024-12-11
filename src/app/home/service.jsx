import styles from "@/styles/home/service.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image01 from "media/home/services/image01.webp"
import Image02 from "media/home/services/image02.webp"
import Image03 from "media/home/services/image03.webp"
import Image04 from "media/home/services/image04.webp"
import Image05 from "media/home/services/image05.webp"
import Image06 from "media/home/services/image06.webp"
import Image from "next/image"
import Link from "next/link"
import { ArrowIcon } from "@/src/app/app-constants"

const serviceData1 = [
    {
        title: "Social Media Marketing",
        txt: "We craft tailored digital strategies that fuel growth, engage audiences, and deliver measurable results.",
        Img: Image01.src,
        url: "#"
    }, {
        title: "Mobile App Development",
        txt: "We craft tailored digital strategies that fuel growth, engage audiences, and deliver measurable results.",
        Img: Image03.src,
        url: "#"
    }, {
        title: "Paid Marketing",
        txt: "We craft tailored digital strategies that fuel growth, engage audiences, and deliver measurable results.",
        Img: Image05.src,
        url: "#"
    }
]
const serviceData2 = [
    {
        title: "SEO",
        txt: "We craft tailored digital strategies that fuel growth, engage audiences, and deliver measurable results.",
        Img: Image02.src,
        url: "#"
    }, {
        title: "Website Development",
        txt: "We craft tailored digital strategies that fuel growth, engage audiences, and deliver measurable results.",
        Img: Image04.src,
        url: "#"
    }, {
        title: "Content Marketing",
        txt: "We craft tailored digital strategies that fuel growth, engage audiences, and deliver measurable results.",
        Img: Image06.src,
        url: "#"
    }

]

const Service = () => {
    return (
        <section className={`pt-100 ${styles.serviceSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Our Services</div>
                        <h2>Powering Your Digital Success</h2>
                        <p>We craft tailored digital strategies that fuel growth, engage audiences, and deliver measurable results.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={6}>
                        <div className={styles.servicesBox}>
                            {serviceData1.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <div className={styles.servicesImage}>
                                        <Image src={item.Img} fill alt={item.title} />
                                    </div>
                                    <div className={styles.servicesContent}>
                                        <h3><ArrowIcon />{item.title}</h3>
                                        <p>{item.txt}</p>
                                        <Link href={item.url} className="commonBtn">Read More</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col md={6} sm={6}>
                        <div className={styles.servicesBox}>
                            {serviceData2.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <div className={styles.servicesImage}>
                                        <Image src={item.Img} fill alt={item.title} />
                                    </div>
                                    <div className={styles.servicesContent}>
                                        <h3><ArrowIcon />{item.title}</h3>
                                        <p>{item.txt}</p>
                                        <Link href={item.url} className="commonBtn">Read More</Link>
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

export default Service