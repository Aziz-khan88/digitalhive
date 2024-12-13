import styles from "@/styles/smm/contentsection.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ImgBg from "media/services/smm/ContentImage.webp"
import Image from "next/image"
import Link from "next/link"


const ContentSection = () => {
    return (
        <section className={`p-100 ${styles.contentServices}`}>
            <Container>
                <Row>
                    <Col md={6} className="m-auto">
                        <div className="subtitle">Why Choose Us</div>
                        <h2>Outshine Your Competitors with Engaging Creative Solutions!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna veniam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <Link href="#" className='commonBtn'>Get Free Consultation</Link>
                    </Col>
                    <Col md={6} className='my-auto text-center'>
                        <Image src={ImgBg.src} alt="Digital CTA" width={693} height={625} className={styles.imgCTAFirst} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSection