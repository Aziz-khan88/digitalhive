import styles from "@/styles/inner-services/newsletter.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import NewsLetterFrom from "@/src/app/components/newsletter"

const NewsLetter = ({ data, bgBlack }) => {
    return (
        <section className={`pt-100 ${styles.newsletterSection}`}>
            <Container className={`h-100 ${styles.bgContainer} ${bgBlack === "yes" ? styles.bgBlack : ""}`}>
                <Row className="h-100">
                    <Col md={7} className="my-auto">
                        <div className={styles.newsletterContent}>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                            <NewsLetterFrom />
                        </div>

                    </Col>
                    <Col md={5} className="my-auto pe-md-0 p-0">
                        <div className={styles.newsletterVideo}>
                            <Image src={data.img} alt="Image" fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default NewsLetter