import styles from "@/styles/landing/components/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerPoster from "media/landing/smm/bannerImg.webp"
import LogoImg from "media/landing/smm/bannerlogos.webp"
import Image from "next/image"
import CommonBtn from "@/src/app/components/common/commonbtn"


const BannerLp = () => {
    return (
        <section className={styles.bannerLpSection} id="BannerId">
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} lg={10} className="mx-auto mt-auto text-center">
                        <div className={styles.bannerContentSec}>
                            <div className={styles.banenrLogo}>
                                <Image src={LogoImg.src} alt="Banner Logos" width={725} height={40} />
                            </div>
                            <h1>Transform Your Brand with Expert Social Media Marketing.</h1>
                            <p>Drive engagement, amplify reach, and grow your brand with expert social media strategies tailored for success.</p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Free Consultation" LiveChat={true} center={true} />
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
                <source src="https://player.vimeo.com/progressive_redirect/playback/1048884947/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6c947d88a8cbe4af33dff296c7678ea0fb700eae835690f1c2baf6406e286c23" type="video/mp4" />
            </video>
        </section>
    )
}

export default BannerLp