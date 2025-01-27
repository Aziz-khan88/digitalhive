import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/packagedetails.module.scss"
import CommonBtn from "@/src/app/components/common/commonbtn"
import BgBlack from "media/landing/seo1/contactBg.webp"
import { CheckedIcon } from "@/src/app/app-constants"


const PackageDetails = () => {
    return (
        <section className={`pt-100  ${styles.tablleLP}`}>
            <Container className={styles.bgContentLP} style={{ backgroundImage: `url(${BgBlack.src})` }}>
                <Row>
                    <Col md={12} lg={10} className="m-auto">
                        <div className="text-center">
                            <div className="subtitle">The Unlimited</div>
                            <h2>The Complete Internet Marketing Package!</h2>
                            <p>Let’s face it. Whether you are new to the business arena or have been running an enterprise for many years.</p>
                        </div>
                        <div className={styles.tableContent}>
                            <div className={styles.itemTableContent}>
                                <h5>Search Engine Optimization</h5>
                                <ul>
                                    <li><CheckedIcon />Upto 100 Keywords</li>
                                    <li><CheckedIcon />Competitor Analysis</li>
                                    <li><CheckedIcon />Articles</li>
                                    <li><CheckedIcon />Blog Posts</li>
                                    <li><CheckedIcon />Press Releases</li>
                                    <li><CheckedIcon />Guest Blogs</li>
                                    <li><CheckedIcon />Power Posts</li>
                                    <li><CheckedIcon />Featured Posts</li>
                                    <li><CheckedIcon />Infographics</li>
                                    <li><CheckedIcon />Videos</li>
                                    <li><CheckedIcon />Directory Submissions</li>
                                    <li><CheckedIcon />Classified Ads</li>
                                    <li><CheckedIcon />Community Participation</li>
                                    <li><CheckedIcon />Business Profiles</li>
                                    <li><CheckedIcon />Google Analytics Installation</li>
                                    <li><CheckedIcon />Google Webmaster Installation</li>
                                    <li><CheckedIcon />Google Places Submissions</li>
                                    <li><CheckedIcon />Conversation Tracking</li>
                                    <li><CheckedIcon />Weekly Rankings Report</li>
                                    <li><CheckedIcon />Before and After Progress Reports</li>
                                    <li><CheckedIcon />Social Media Posts</li>
                                    <li><CheckedIcon />Monthly Progress Report</li>
                                </ul>
                            </div>
                            <div className={styles.itemTableContent}>
                                <h5>Paid Search Advertizing</h5>
                                <ul>
                                    <li><CheckedIcon />Google Ads</li>
                                    <li><CheckedIcon />Bing Ads</li>
                                    <li><CheckedIcon />Keyword Research</li>
                                    <li><CheckedIcon />Competitor Analysis</li>
                                    <li><CheckedIcon />Ads Creation</li>
                                    <li><CheckedIcon />Banner Creation</li>
                                    <li><CheckedIcon /> AdWords Account Setup</li>
                                    <li><CheckedIcon /> AdWords Account Configuration</li>
                                    <li><CheckedIcon />Daily Spend Configuration</li>
                                    <li><CheckedIcon />Search Metrics Configuration</li>
                                    <li><CheckedIcon />Daily Bid Adjustment</li>
                                    <li><CheckedIcon />Daily Campaign Monitoring</li>
                                    <li><CheckedIcon /> Keyword Optimization</li>
                                    <li><CheckedIcon />Negative Keyword Identification</li>
                                    <li><CheckedIcon />Google Webmaster Installation</li>
                                    <li><CheckedIcon /> Weekly Ranking Report</li>
                                    <li><CheckedIcon />Google Analytics Report</li>
                                    <li><CheckedIcon />Monthly Progress Report</li>
                                </ul>
                                <h5>Branding</h5>
                                <ul>
                                    <li><CheckedIcon />Featured Posts on Yahoo</li>
                                    <li><CheckedIcon />Featured Posts On Entrepreneur</li>
                                    <li><CheckedIcon />Featured Blog Posts</li>
                                </ul>
                            </div>
                            <div className={styles.itemTableContent}>
                                <h5>Social Media Marketing</h5>
                                <ul>
                                    <li><CheckedIcon />Facebook/Twitter Page Creation</li>
                                    <li><CheckedIcon />Facebook/Twitter Posts & Outreach</li>
                                    <li><CheckedIcon />LinkedIn Profile Creation</li>
                                    <li><CheckedIcon />LinkedIn Posts and Outreach</li>
                                    <li><CheckedIcon />Instagram/Pinterest Page Creation</li>
                                    <li><CheckedIcon />Instagram/Pinterest Posts and Outreach</li>
                                    <li><CheckedIcon />YouTube Channel Creation</li>
                                    <li><CheckedIcon />YouTube Videos and Outreach</li>
                                    <li><CheckedIcon />Weekly/Monthly Progress Reports</li>
                                </ul>
                                <h5>Social Media Marketing</h5>
                                <ul>
                                    <li><CheckedIcon />Facebook Ads</li>
                                    <li><CheckedIcon />Twitter Ads</li>
                                    <li><CheckedIcon />LinkedIn Ads</li>
                                    <li><CheckedIcon />Instagram Ads</li>
                                    <li><CheckedIcon />YouTube Ads</li>
                                    <li><CheckedIcon />Progress Reports</li>
                                </ul>
                                <h5>Website Optimization</h5>
                                <ul>
                                    <li><CheckedIcon />Landing Page Optimization</li>
                                    <li><CheckedIcon />Call to Action Optimization</li>
                                    <li><CheckedIcon />Content Optimization</li>
                                    <li><CheckedIcon />Mobile Friendly Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className={styles.bgBlack}>
                <Row>
                    <Col md={12} lg={8} className="m-auto text-center">
                        <div className="subtitle">Free 30 Min Consultation</div>
                        <h4>Call for Custom Pricing & Strategy</h4>
                        <div className={styles.btnFlex}>
                            <CommonBtn txt="Get Your Free SEO Audit Now" LiveChat={true} center={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PackageDetails