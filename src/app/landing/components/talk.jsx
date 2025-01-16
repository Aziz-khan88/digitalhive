import CommonBtn from "@/src/app/components/common/commonbtn"
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/landing/components/talk.module.scss"
import BgImage from "media/landing/smm/talk.webp"
import ContactFrom from "@/src/app/components/contactfrom";

const TalkLp = () => {
    return (
        <section className={`${styles.talkLpSec} pt-100`}>
            <Container>
                <Row>
                    <Col md={5}>
                        <div className={styles.BgImage} style={{ backgroundImage: `url(${BgImage.src})` }}>
                            <h2>Talk To <br />
                                Our Experts</h2>
                            <p>Contact us without obligation by email or phone and secure your free consultation.</p>
                            <CommonBtn txt="Let’s Connect" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className={styles.contactFromLp}>
                            <h2>Let’s Bring Your Vision to Life!</h2>
                            <ContactFrom bgBlack={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TalkLp