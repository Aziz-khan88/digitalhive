import Link from 'next/link'
import styles from "@/styles/home/cta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import ImgBg from "media/home/ctaBg.webp"

const CTA1 = () => {
    return (
        <section className={`pt-100 ${styles.ctaSection}`}>
            <Container className={`h-100 ${styles.blackGB}`} >
                <Row className='h-100'>
                    <Col md={6} className='my-auto'>
                        <h2>Strategic design solutions that fuel your bottom line.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <Link href="" className='commonBtn'>Get Free Consultation</Link>
                    </Col>
                    <Col md={6} className='my-auto ms-auto text-right'>
                        <Image src={ImgBg.src} alt="Digital CTA" width={560} height={530} className={styles.imgCTAFirst} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTA1