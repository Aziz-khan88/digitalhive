"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import PaymentImg from "media/home/paymentImg.webp"
import { FooterLogo } from "@/src/app/app-constants"

export const subMenuItems = [
    { label: "Social Media Marketing", path: "/social-media-marketing" },
    { label: "Social Media Advertising", path: "/social-media-ads" },
    { label: "Social Media Management", path: "/social-media-management" },
    { label: "Influencer Marketing", path: "/influencer-marketing" },
    { label: "YouTube Optimization", path: "/youtube-optimization" },
    { label: "YouTube Monetization", path: "/youtube-monetization" },
    { label: "Email Marketing", path: "/email-marketing" },
    { label: "Google Ads(PPC)", path: "/ppc-ads" },
    { label: "Amazon Ads", path: "/amazon-ads" },
    { label: "Facebook Ads", path: "/facebook-ads" },

];
const QuickLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Portfolio",
        url: "/portfolio"
    },
    {
        name: "Pricing",
        url: "/pricing"
    },
    {
        name: "Contact Us",
        url: "/contact"
    },
]



const Footer = () => {
    const [activeClass, setActiveClass] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveClass((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className={styles.FooterSection}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={styles.footerMenuSec}>
                                <div className={`${styles.menuItem} ${styles.FooterLogo}`}>
                                    <FooterLogo />
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Quick Links</h6>
                                        <ul>
                                            {QuickLinks.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.url} aria-label={`Visit our ${item.label}`}>{item.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Services Links</h6>
                                        <ul className={styles.serviceslinks}>
                                            {subMenuItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.path} aria-label={`Services our ${item.label}`}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={`${styles.footerContent} ${styles.mainlinks}`}>
                                        <h6>Contact Info</h6>
                                        <div className={styles.contactInfo} target="_blank">
                                            <a href="tel:+1655-487-632" aria-label={`Our Phone Number`}>
                                                Phone: +1655-487-632
                                            </a>
                                        </div>
                                        <div className={styles.contactInfo}>
                                            <a href="mailto:queries@infinitidigital.us" target="_blank" aria-label={`Our Email Address`}>
                                                Email: support@Infinitidigital.com
                                            </a>
                                        </div>
                                        <div className={styles.contactAddress}>
                                            <div>
                                                <a href="#" target="_blank" aria-label={`Our Google Map`}>
                                                    Address: 9402 Synott Rd Apt 114, Houston, TX 77083
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.copyRightSection}>
                <Container className="h-100">
                    <Row className={`${styles.borderStyle} h-100`} >
                        <Col sm={6} md={6} className="my-auto">
                            <div className={styles.CopyRightBox}>
                                <div className={styles.txtCopyRight}>© Copyright 2024 - Infiniti Digital </div>
                                <div className={styles.CopyRightLinks}>
                                    <ul>
                                        <li><Link href="#">Terms of Use</Link></li>
                                        <li><Link href="#"> Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} md={6} className="my-auto text-center text-md-end">
                            <Image src={PaymentImg.src} alt="Payment Image" width={550} height={40} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer