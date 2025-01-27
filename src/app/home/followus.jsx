"use client";
import styles from "@/styles/home/followus.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowIcon, ArrowIconWhite } from "@/src/app/app-constants";
import { useState } from "react";
import Link from "next/link";



const FollowUs = ({ data }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className={`pt-100 ${styles.followSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="mt-3">
                <Row>
                    <Col md={12} className="p-0">
                        {data.FollowsItem.map((item, index) => (
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
                                            <Link href={repeatedItem.url} aria-label={`Follow Us our ${repeatedItem.name}`} target="_blank">
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
