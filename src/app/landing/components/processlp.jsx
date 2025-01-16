"use client"
import { useEffect } from "react";
import styles from "@/styles/landing/components/processlp.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const data = [
    {
        title: "Increased Brand Awareness",
        txt: "Expand your reach and make your brand unforgettable. Our strategies ensure your business stands out and stays top-of-mind with your target audience."
    },
    {
        title: "Increased Brand Awareness",
        txt: "Expand your reach and make your brand unforgettable. Our strategies ensure your business stands out and stays top-of-mind with your target audience."
    },
    {
        title: "Increased Brand Awareness",
        txt: "Expand your reach and make your brand unforgettable. Our strategies ensure your business stands out and stays top-of-mind with your target audience."
    },
    {
        title: "Increased Brand Awareness",
        txt: "Expand your reach and make your brand unforgettable. Our strategies ensure your business stands out and stays top-of-mind with your target audience."
    },
    {
        title: "Increased Brand Awareness",
        txt: "Expand your reach and make your brand unforgettable. Our strategies ensure your business stands out and stays top-of-mind with your target audience."
    }
]

const ProcessLp = ({ black }) => {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.25
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const items = document.querySelectorAll(`.${styles.itemBox}`);
        items.forEach(item => {
            observer.observe(item);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className={`pt-100 ${styles.processLpSec} ${black ? styles.blackBg : ""}`} id="ProcessId">
            <Container>
                <Row>
                    <Col md={8} lg={8} className="mx-auto text-center">
                        <div className="subtitle">Our Process</div>
                        <h2>How We Help Your Brand Grow.</h2>
                        <p>
                            Elevate your brand with targeted social media strategies that drive engagement, grow your audience, and deliver results!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={styles.itemBox}
                            >
                                <span>0{index + 1}</span>
                                <h2>{item.title}</h2>
                                <p>{item.txt}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProcessLp;
