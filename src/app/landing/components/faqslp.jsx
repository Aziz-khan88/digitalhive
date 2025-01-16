"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/faqs.module.scss";
import { PlusFaqIcon } from "@/src/app/app-constants";
export const data = {
    subtitle: "FAQs",
    title: "Frequently Asked Question?",

    Fqaslist: [
        {
            title: "What services does Infinitidigital offer ",
            txt: "Infinitidigital specializes in a comprehensive suite of digital marketing and development solutions. Our offerings include search engine optimization (SEO), social media marketing, mobile app development, web design, and content marketing. Every service is customized to help your business succeed and stand out."
        },
        {
            title: "How does Infinitidigital ensure results for its clients?",
            txt: "We take a strategic, data-driven approach to deliver measurable outcomes. Infinitidigital begins by analyzing your business objectives and audience. With tailored strategies, ongoing refinements, and transparent progress reports, we ensure each campaign drives the desired results."
        },
        {
            title: "Can Infinitidigital handle projects for small and large businesses? ",
            txt: "Yes, Infinitidigital works with companies of all sizes, from startups to global enterprises. Our flexible services are designed to scale with your needs, whether you’re seeking a foundational digital marketing plan or an advanced strategy for sustained growth."
        },
        {
            title: "What industries does Infinitidigital specialize in? ",
            txt: "Infinitidigital serves various industries, including retail, technology, healthcare, and education. Our team draws on deep experience to create targeted strategies tailored to the needs of each sector, ensuring impactful results for businesses of any niche."
        },
        {
            title: "How can I get started with Infinitidigital?",
            txt: "Getting started is simple. Contact us via our website or call to arrange a consultation. We’ll take the time to understand your objectives and challenges, then design a detailed plan to elevate your brand’s digital presence and drive success."
        }
    ]

}
const FaqsLp = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                    </Col>
                    <Col xl={12} lg={12} md={12} >
                        {data.Fqaslist.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={styles.faqsTitle}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {items.title}
                                    <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                                        <PlusFaqIcon />
                                    </div>
                                </div>
                                <div className={styles.faqscontent}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default FaqsLp;
