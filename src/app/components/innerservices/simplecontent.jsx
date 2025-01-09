import styles from "@/styles/inner-services/innercontent.module.scss"
import Image from "next/image"
import CommonBtn from "@/src/app/components/common/commonbtn"
import { Col, Container, Row } from 'react-bootstrap'

const SimpleContent = ({ data, alternat, software }) => {
    return (
        <section className={`pt-100 ${styles.innerSimpleContent} `}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className={`${alternat ? "order-md-2" : ""} my-auto`} >
                        <div className={styles.contentBox}>
                            <h2>{data.contentTitle}</h2>
                            <div className={styles.paraBox}>{data.contentTxt}</div>
                            <CommonBtn txt="Get Free Consultation" />
                        </div>
                    </Col>
                    <Col md={6} className={`${styles.simpleImage} ${alternat ? "order-md-1" : ""} ${software ? styles.softwareImg : ""} my-auto text-center`}>
                        <Image src={data.img} alt="Book Image"
                            width={software ? 630 : 380}
                            height={software ? 400 : 500}
                        />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default SimpleContent