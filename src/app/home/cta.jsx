import styles from "@/styles/home/cta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import CommonBtn from "@/src/app/components/common/commonbtn"

const CTA1 = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.ctaSection}`}>
            <Container className={`h-100 ${styles.blackGB}`} >
                <Row className='h-100'>
                    <Col md={6} className='my-auto'>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                        <CommonBtn txt="Get Free Consultation" />
                    </Col>
                    <Col md={6} className='my-auto ms-auto text-right'>
                        <Image src={data.img} alt="Digital CTA" width={560} height={530} className={styles.imgCTAFirst} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTA1