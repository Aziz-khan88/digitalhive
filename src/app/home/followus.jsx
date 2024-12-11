"use client";
import styles from "@/styles/home/followus.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowIcon, ArrowIconWhite } from "@/src/app/app-constants";
import { useState } from "react";
import Link from "next/link";

const Follows = [
    { name: "Instagram", url: "#" },
    { name: "Reddit ", url: "#" },
    { name: "YouTube", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "Discord", url: "#" },
];

const FollowUs = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className={`pt-100 ${styles.followSection}`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="subtitle">Follow US</div>
                        <h2>Social Media & Contact</h2>
                        <p>
                            We craft tailored digital strategies that fuel growth, engage
                            audiences, and deliver measurable results.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col md={12} className="p-0">
                        {Follows.map((item, index) => (
                            <div
                                className={`${styles.boxContainer} ${hoveredIndex === index ? styles.boxContainerFluid : ""
                                    }`}
                                key={index}
                            >
                                {(hoveredIndex === index
                                    ? Array(10).fill(item)
                                    : [item]
                                ).map((repeatedItem, repeatedIndex) => (
                                    <div
                                        className={styles.followItem}
                                        onMouseOver={() => setHoveredIndex(index)}
                                        onMouseOut={() => setHoveredIndex(null)}
                                        key={`${index}-${repeatedIndex}`}

                                    >
                                        <div className={styles.title}>{repeatedItem.name}</div>
                                        <div className={styles.links}>
                                            <Link href={repeatedItem.url}>
                                                {hoveredIndex === index ? <ArrowIconWhite /> : <ArrowIcon />}

                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FollowUs;
