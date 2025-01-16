import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/landing/components/seo/whychoose.module.scss"
import CommonBtn from '@/src/app/components/common/commonbtn'


const WhyChooseLp = ({ data }) => {
    return (
        <section className={`${styles.whychooseSecLp} pt-100`}>
            <Container>
                <Row>
                    <Col md={6} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.whychooselpContainer}>
                            {data.WhyChooseItem.map((item, index) => (
                                <div className={styles.whychooselpItem} key={index}>
                                    <h5>{item.title}</h5>
                                    <p>{item.txt}</p>
                                    <div className={styles.btnArrow}>
                                        <CommonBtn ArrowBtn={true} />
                                    </div>

                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChooseLp