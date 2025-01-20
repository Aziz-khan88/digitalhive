
import styles from "@/styles/landing/components/smm1/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"
import ContactFrom from "@/src/app/components/contactfrom"
import LogoImg from "media/landing/smm1/bannerLogo.webp"
import BannerPoster from "media/landing/smm1/BannerPoster.webp"
import Image from "next/image"

const BannerLp = () => {
    return (
        <section className={styles.bannerLpSection} id="BannerId" style={{ backgroundImage: `url(${BannerPoster.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <div className={styles.bannerContentSec}>
                            <h1>Business Owned By You,But Driven By Our Social Media Marketing Services.</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Free Consultation" Livechat={true} BgBlack={true} />
                            </div>
                            <div className={styles.banenrLogo}>
                                <Image src={LogoImg.src} alt="Banner Logos" width={539} height={27} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={5} className="my-auto offset-lg-1">
                        <div className={styles.bannerForms}>
                            <h3>Want to Get a PPC Management Proposal from Infiniti Digital.</h3>
                            <ContactFrom bgBlack="no" blkColor={true} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default BannerLp