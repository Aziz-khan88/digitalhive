import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/inner-services/twobox.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const TwoBox = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.twoBoxSection} `}>
            <Container >
                <Row>
                    <Col md={6} className='my-auto'>
                        <div className={`${styles.towBoxContainer} ${styles.colorBox}`}
                            style={{
                                '--bgcolor': data.Box1.bgcolor || '#E0F0FF',
                            }}
                        >
                            <h3>{data.Box1.title}</h3>
                            <p>{data.Box1.desc}</p>
                            <Link href="#" className="commonBtn blackBg">Get Free Consultation</Link>
                        </div>
                    </Col>
                    <Col md={6} className='my-auto'>
                        <div className={`${styles.towBoxContainer} ${styles.imageBox} `}>
                            <Image src={data.Box2.TwoBoxImage} fill alt="Customized Package" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TwoBox