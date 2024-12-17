import styles from "@/styles/services/contentsection.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"


const ContentSection = ({ data }) => {
    return (
        <section className={`p-100 ${styles.contentServices}`}>
            <Container>
                <Row>
                    <Col md={6} className="m-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        {data.desc}
                        <Link href="#" className='commonBtn'>Get Free Consultation</Link>
                    </Col>
                    <Col md={6} className='my-auto text-center'>
                        <Image src={data.img} alt="Digital CTA" width={693} height={625} className={styles.imgCTAFirst} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSection