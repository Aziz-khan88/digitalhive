import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"
import ContentImg from "media/landing/seo1/contentImage.webp"
import Image from "next/image"


const ContentSec = () => {
    return (
        <section className="pt-100">
            <Container>
                <Row>
                    <Col md={6} lg={6} className="my-auto">
                        <h2>Optimize Your Website Today, As There Comes No Better Tomorrow!</h2>
                        <p>Let’s face it. Whether you are new to the business arena or have been running an enterprise for many years, there are certain things you wish to have, ALWAYS. Sales, Revenue, and Profit! And who brings these requisites? Customers and only CUSTOMERS! But are you having trouble getting those ideal customers? If yes, need not worry. Have Jumpto1 on your side to BE THE NUMBER 1, BE ON NUMBER 1, And enjoy heavy footfalls in your business arena with our professional SEO services!.</p>
                        <CommonBtn txt="Get Your Free SEO Audit Now" Livechat={true} BgBlack={true} />
                    </Col>
                    <Col md={6} lg={6} className="my-auto ">
                        <Image src={ContentImg.src} alt="Banner Logos" width={675} height={450} className="mt-5 mt-md-0" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec