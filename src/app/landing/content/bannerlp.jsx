import styles from "@/styles/landing/components/content/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"
import ContactFrom from "@/src/app/components/contactfrom"
import BannerImg from "media/landing/content/bannerImg.webp"
import Image from "next/image"
import BannerPoster from "media/landing/paid/BannerPoster.webp"
import Clients from "@/src/app/home/clients"
import { ClientImages } from "@/src/app/home/data/data"
import { StateCounterPoints } from "@/src/app/landing/content/data/data"
import StateCount from '@/src/app/components/innerservices/statecount'


const BannerLp = () => {
    return (
        <section className={styles.bannerLpSection} id="BannerId" >
            <Container>
                <Row>
                    <Col md={6} lg={8} className="my-auto">
                        <div className={styles.bannerContentSec}>
                            <div className={styles.bannerTxt}>
                                <h1>Don’t Let Poor Content Hold Back Your Business</h1>
                                <p>Low-quality content can hold your business back. At Infiniti Digital, we craft engaging, high-impact content that captivates.</p>
                                <div className={styles.btnFlex}>
                                    <CommonBtn txt="Free Consultation" Livechat={true} />
                                </div>
                            </div>
                            <div className={styles.banenrImg}>
                                <Image src={BannerImg.src} alt="Banner Logos" width={374} height={498} />
                            </div>
                        </div>
                    </Col>
                    <Col md={5} lg={4} className="my-auto">
                        <div className={styles.bannerForms}>
                            <ContactFrom bgBlack="no" />
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
                                <source src="https://player.vimeo.com/progressive_redirect/playback/1047142466/rendition/720p/file.mp4?loc=external&log_user=0&signature=50ee6e7da9ea3f9bfaef422247278b12de3faee353eb5382a105315bbacc18e8" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Clients data={ClientImages} landingBanner={true} />
                    </Col>
                    <Col md={12}>
                        <StateCount data={StateCounterPoints} landingBanner={true} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerLp