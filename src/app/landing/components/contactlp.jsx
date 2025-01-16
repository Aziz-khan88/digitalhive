import styles from "@/styles/landing/components/contactlp.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ContactFrom from "@/src/app/components/contactfrom";

import Image from "next/image";


const ContactLp = ({ useImg, data }) => {
    return (
        <section className={`${styles.contactLpSection} pt-100`} id="ContactId" >
            <Container className={`${styles.containerBG}`} style={{ backgroundImage: `url(${data.bgImg})` }}>
                <Row className="h-100">
                    <Col md={6} lg={6} className={`my-auto ${useImg ? '' : "order-md-2 order-2"}`}>
                        <div className={styles.contactFooterLp}>
                            {useImg ? <h2>Let’s Bring Your Vision to Life!</h2> : ""}
                            < ContactFrom bgBlack={true} />
                        </div>
                    </Col>
                    <Col md={6} lg={6} className={`my-auto ${useImg ? ' text-center' : "order-md-1 order-1"}`}>
                        {useImg ?
                            <Image src={data.contactImg} alt="Contact Image" width={693} height={625} />
                            :
                            <>
                                <div className={styles.contactBox}>
                                    <div className="subtitle greenColor">{data.subtitle}</div>
                                    <h2>{data.title}</h2>
                                    <p>{data.desc}</p>
                                </div>
                            </>
                        }


                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactLp