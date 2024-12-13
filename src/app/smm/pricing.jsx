import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/smm/pricing.module.scss"
import { CheckedIcon } from "@/src/app/app-constants"


const Pricing = ({ bg }) => {
    return (
        <section className={`pt-100 ${styles.pricingSection} ${bg === "yes" ? styles.blackBG : ""}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Our Pricing</div>
                        <h2>Quality Discounts Elevate Your Social Media Presence Today!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </Col>
                    <Col md={5}>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.pricingContainer}>
                            <div className={styles.pricingItem}
                                style={{
                                    '--bgcolor': "#7635FF" || '#262626',
                                }}>
                                <div className={styles.packageHeader}>
                                    <div className={styles.packageName}>Basic Package</div>
                                    <div className={styles.packagePrice}>$350/<span>Monthly</span></div>
                                    <div className={styles.packagepara}>We have something in store for everyone, and that something is affordable services</div>
                                    <div className={styles.packagebutton}>Get Started</div>
                                </div>
                                <div className={styles.packageBody}>
                                    <div className={styles.listingTitle}>Social Media Posts</div>
                                    <ul>
                                        <li><CheckedIcon />Total 15 Posts Per Month</li>
                                        <li><CheckedIcon />10 Graphic Social Posts</li>
                                        <li><CheckedIcon />05 Videos/Reels</li>
                                        <li><CheckedIcon />Stories</li>
                                    </ul>
                                    <div className={styles.listingTitle}>Social Platforms Supported</div>
                                    <ul>
                                        <li><CheckedIcon />Facebook</li>
                                        <li><CheckedIcon />Instagram</li>
                                        <li><CheckedIcon />TikTok / LinkedIn</li>
                                    </ul>
                                    <div className={styles.listingTitle}> Social Ads Management</div>
                                    <ul>
                                        <li><CheckedIcon />Unlimited Campaigns Per Month</li>
                                        <li><CheckedIcon />Facebook & Instagram Paid Ads</li>
                                        <li><CheckedIcon />Unlimited Ad sets Per Month</li>
                                        <li><CheckedIcon />Detailed Campaign Monitoring & Optimization</li>
                                    </ul>

                                </div>
                            </div>
                            <div className={styles.pricingItem}
                                style={{
                                    '--bgcolor': "#FF6987" || '#262626',
                                }}
                            >
                                <div className={styles.packageHeader}>
                                    <div className={styles.packageName}>Advanced Package</div>
                                    <div className={styles.packagePrice}>$500/<span>Monthly</span></div>
                                    <div className={styles.packagepara}>We have something in store for everyone, and that something is affordable services</div>
                                    <div className={styles.packagebutton}>Get Started</div>
                                </div>
                                <div className={styles.packageBody}>
                                    <div className={styles.listingTitle}>Social Media Posts</div>
                                    <ul>
                                        <li><CheckedIcon />Total 15 Posts Per Month</li>
                                        <li><CheckedIcon />10 Graphic Social Posts</li>
                                        <li><CheckedIcon />05 Videos/Reels</li>
                                        <li><CheckedIcon />Stories</li>
                                    </ul>
                                    <div className={styles.listingTitle}>Social Platforms Supported</div>
                                    <ul>
                                        <li><CheckedIcon />Facebook</li>
                                        <li><CheckedIcon />Instagram</li>
                                        <li><CheckedIcon />TikTok / LinkedIn</li>
                                    </ul>
                                    <div className={styles.listingTitle}> Social Ads Management</div>
                                    <ul>
                                        <li><CheckedIcon />Unlimited Campaigns Per Month</li>
                                        <li><CheckedIcon />Facebook & Instagram Paid Ads</li>
                                        <li><CheckedIcon />Unlimited Ad sets Per Month</li>
                                        <li><CheckedIcon />Detailed Campaign Monitoring & Optimization</li>
                                    </ul>

                                </div>
                            </div>
                            <div className={styles.pricingItem}
                                style={{
                                    '--bgcolor': "#9AFF35" || '#262626',
                                }}
                            >
                                <div className={styles.packageHeader}>
                                    <div className={styles.packageName}>Enterprise Package</div>
                                    <div className={styles.packagePrice}>$750/<span>Monthly</span></div>
                                    <div className={styles.packagepara}>We have something in store for everyone, and that something is affordable services</div>
                                    <div className={styles.packagebutton}>Get Started</div>
                                </div>
                                <div className={styles.packageBody}>
                                    <div className={styles.listingTitle}>Social Media Posts</div>
                                    <ul>
                                        <li><CheckedIcon />Total 15 Posts Per Month</li>
                                        <li><CheckedIcon />10 Graphic Social Posts</li>
                                        <li><CheckedIcon />05 Videos/Reels</li>
                                        <li><CheckedIcon />Stories</li>
                                    </ul>
                                    <div className={styles.listingTitle}>Social Platforms Supported</div>
                                    <ul>
                                        <li><CheckedIcon />Facebook</li>
                                        <li><CheckedIcon />Instagram</li>
                                        <li><CheckedIcon />TikTok / LinkedIn</li>
                                    </ul>
                                    <div className={styles.listingTitle}> Social Ads Management</div>
                                    <ul>
                                        <li><CheckedIcon />Unlimited Campaigns Per Month</li>
                                        <li><CheckedIcon />Facebook & Instagram Paid Ads</li>
                                        <li><CheckedIcon />Unlimited Ad sets Per Month</li>
                                        <li><CheckedIcon />Detailed Campaign Monitoring & Optimization</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Pricing