import styles from "@/styles/contact/contact.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ContactBG from "media/contact/contactBG.webp"
import Image from "next/image"
import ContactFrom from "@/src/app/components/contactfrom"
import Faqs from "@/src/app/home/faq"
import { FAQsData } from "@/src/app/home/data/data"

const Page = () => {
    return (
        <>
            <section className={styles.bannerContact}>
                <Container className={styles.ContactBG}>
                    <Row className="h-100">
                        <Col md={6} className={styles.ContactImage}>
                            <Image src={ContactBG.src} alt="Contact BG" fill />
                        </Col>
                        <Col md={6} className="m-auto">

                            <ContactFrom bg="no" contactPage={true} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Faqs data={FAQsData} />
        </>
    )
}

export default Page