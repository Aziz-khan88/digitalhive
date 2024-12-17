import Link from 'next/link'
import styles from "@/styles/home/cta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'


const CTA1 = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.ctaSection}`}>
            <Container className={`h-100 ${styles.blackGB}`} >
                <Row className='h-100'>
                    <Col md={6} className='my-auto'>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                        <Link href="" className='commonBtn'>Get Free Consultation</Link>
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