import styles from "@/styles/landing/components/ctalp.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"

const CtaLp = ({ data, BgDrak }) => {
    return (
        <section className={styles.ctaLpSection} >
            <Container className={`${styles.containerbg} h-100 ${BgDrak ? styles.BgDrak : ""}`} style={{ backgroundImage: `url(${data.img})` }}>
                <Row className="h-100">
                    <Col md={9} lg={7} className="m-auto text-center">
                        <div className={styles.ctaContentSec}>
                            <h2>{data.title}</h2>
                            <p>{data.txt}</p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Let’s Connect" Livechat={true} center={true} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaLp