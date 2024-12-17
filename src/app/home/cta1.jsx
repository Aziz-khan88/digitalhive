import Link from 'next/link'
import styles from "@/styles/home/cta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'


const CTA = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.ctaSection} ${styles.bgHeight}`}>
            <Container className={`h-100 ${styles.blackGB} ${styles.bgP0}`} >
                <Row className='h-100'>
                    <Col md={6} className='my-auto'>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                        <Link href="" className='commonBtn'>Get Free Consultation</Link>
                    </Col>
                    <Col md={6} className='mt-auto text-right'>
                        <Image src={data.img} alt="Digital CTA" width={560} height={530} className={styles.imgCTA} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTA