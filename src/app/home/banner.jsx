import styles from "@/styles/home/banner.module.scss"
import Link from "next/link"
import { Col, Container, Row } from 'react-bootstrap'
import Clients from "@/src/app/home/clients"
import BannerPoster from "media/home/bannerPoster.webp"
const Banner = () => {


    return (
        <section className={styles.MainBanner}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} sm={8} className="my-auto">
                        <div className={styles.bannerContent}>
                            <h1>Powering our Digital Success</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <Link href="#" className="commonBtn">Get Free Consultation</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video
                autoPlay
                muted
                loop
                preload="auto"
                aria-label="Background video"
                className={styles.bannerVideo}
                loading="eager"
                poster={BannerPoster.src}
            >
                <source src="/videos/BannerVideo.mp4" type="video/mp4" />
            </video>
            <Clients />
        </section>
    )
}

export default Banner