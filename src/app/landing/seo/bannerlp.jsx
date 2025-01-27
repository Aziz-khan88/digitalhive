import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo/bannerlp.module.scss"
import LogoImg from "media/landing/seo/bannerImage.webp"
import BannerPoster from "media/landing/seo/BannerPoster.webp"
import CommonBtn from "@/src/app/components/common/commonbtn"
import Image from "next/image"
import ContactFrom from "@/src/app/components/contactfrom"

const BannerLp = () => {
    return (
        <section className={styles.bannerLpSection} id="BannerId">
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={11} lg={10} className="m-auto text-center">
                        <div className={styles.bannerContentSec}>
                            <h1>Your Vision, Our Expertise Crafted in Code.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Get Your Free SEO Audit Now" LiveChat={true} center={true} />
                            </div>
                            <div className={styles.banenrLogo}>
                                <Image src={LogoImg.src} alt="Banner Logos" width={1020} height={280} />
                            </div>
                            <div className={styles.banneerFrom}>
                                <h3>Get A Free SEO Audit</h3>
                                <ContactFrom vertical={true} />
                            </div>
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
                <source src="https://player.vimeo.com/progressive_redirect/playback/1046801832/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2c94f1e7762d41a9dbfe69cd7aaf7ee2c617a42439881a8b4c335e9ea9285271" type="video/mp4" />
            </video>
        </section>
    )
}

export default BannerLp

