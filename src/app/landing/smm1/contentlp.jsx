import ImageTxt from "media/landing/smm1/textImage.webp"
import CommonBtn from '@/src/app/components/common/commonbtn'
import styles from "@/styles/landing/components/smm1/content.module.scss"
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'



const ContentLp = () => {
    return (
        <section className={styles.textSection}>
            <Container className={`${styles.bgColor} h-100`}>
                <Row className="h-100">
                    <Col md={7} className="my-auto">
                        <h2>Enter The Digital Era Now, Else Wait For Miracle To Happen!</h2>
                        <p>Let’s face it. Whether you are new to the business arena or have been running an enterprise for many years, there are certain things you wish to have, always!</p>
                        <p>Let’s face it. Whether you are new to the business arena or have been running an enterprise for many years, there are certain things you wish to have, always!</p>
                        <CommonBtn txt="Free Consultation" Livechat={true} BgBlack={true} />
                    </Col>
                    <Col md={5} className="my-auto">
                        <Image src={ImageTxt.src} alt="Text Image" width={554} height={677} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentLp