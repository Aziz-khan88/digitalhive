
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo1/bannerlp.module.scss"
import CommonBtn from "@/src/app/components/common/commonbtn"
import Image from "next/image"
import BannerImg from "media/landing/seo1/bannerlp.webp"
import ContactFrom from "@/src/app/components/contactfrom"
import StateCount from '@/src/app/components/innerservices/statecount'
import { StateCounterPoints } from "@/src/app/landing/seo1/data/data"

const Bannerlp = () => {
    return (
        <section className={styles.bannerLpSection} id="BannerId">
            <Container >
                <Row>
                    <Col md={12} lg={9} className="m-auto text-center">
                        <div className={styles.bannerContentSec}>
                            <h1>The Best <span>SEO</span><br />Marketing Agency.</h1>
                            <p>Low-quality content can hold your business back. At Infiniti Digital, we craft engaging, high-impact content that captivates.</p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Get Your Free SEO Audit Now" Livechat={true} center={true} BgBlack={true} />
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={10} className="m-auto text-center">
                        <div className={styles.banenrLogo}>
                            <Image src={BannerImg.src} alt="Banner Logos" width={953} height={655} />
                        </div>
                        <StateCount data={StateCounterPoints} landingBanner={true} coloum="yes" RoundedStyle={true} />
                    </Col>
                    <Col md={12} lg={10} className="m-auto text-center">
                        <div className={styles.banneerFrom}>
                            <h3>Get A Free SEO Audit</h3>
                            <ContactFrom vertical={true} BlackVertical={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Bannerlp