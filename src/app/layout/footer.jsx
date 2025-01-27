import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import Image from "next/image"
import Link from "next/link"
import PaymentImg from "media/home/paymentImg.webp"
import { FooterLogo } from "@/src/app/app-constants"

export const subMenuItems = [
    { label: "Social Media Marketing", path: "/social-media-marketing" },
    { label: "Social Media Advertising", path: "/social-media-advertising-services" },
    { label: "Social Media Management", path: "/social-media-management-service" },
    { label: "Influencer Marketing", path: "/influencer-marketing-service" },
    { label: "YouTube Optimization", path: "/youtube-optimization-service" },
    { label: "YouTube Monetization", path: "/youtube-monetization-service" },
    { label: "Email Marketing", path: "/email-marketing-agency" },
    { label: "Google Ads(PPC)", path: "/ppc-campaign-management-services" },
    { label: "Amazon Ads", path: "/amazon-advertising" },
    { label: "Facebook Ads", path: "/facebook-ads-service" },

];
const QuickLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About Us",
        url: "/about-us"
    },
    {
        name: "Blogs",
        url: "/blogs"
    },
    {
        name: "Contact Us",
        url: "/contact"
    }, {
        name: "Refund Policy",
        url: "/refund-policy"
    },
]



const Footer = () => {
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
                                            <a href="mailto:support@Infinitidigital.com" target="_blank" aria-label={`Our Email Address`}>
                                                Email: support@Infinitidigital.com
                                            </a>
                                        </div>
                                        <div className={styles.contactAddress}>
                                            <div>
                                                <a href="https://maps.app.goo.gl/ZZ3BLKPRJKwJeyZy6" target="_blank" aria-label={`Our Google Map`}>
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
                                <div className={styles.txtCopyRight}>© Copyright 2025 - Infiniti Digital </div>
                                <div className={styles.CopyRightLinks}>
                                    <ul>
                                        <li><Link href="/terms-and-conditions">Terms of Use</Link></li>
                                        <li><Link href="/privacy-policy#"> Privacy Policy</Link></li>
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