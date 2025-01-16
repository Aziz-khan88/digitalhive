"use client";
import styles from "@/styles/landing/components/serviceslp.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"

//Services
export const data = {
    subtitle: "Our Services",
    title: "From Vision to Reality",
    desc: "Your website starts with understanding your goals—because every great project begins with clarity and focus. Here’s how we make it happen:",
    ServicesItem: [
        {
            title: (<>Social Media Strategy <br />Development</>),
            txt: (<>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
            </>),
        },
        {
            title: (<>Social Media Strategy <br />Development</>),
            txt: (<>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
            </>),

        },
        {
            title: (<>Social Media Strategy <br />Development</>),
            txt: (<>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
            </>),

        },
        {
            title: (<>Social Media Strategy <br />Development</>),
            txt: (<>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
            </>),

        },
        {
            title: (<>Social Media Strategy <br />Development</>),
            txt: (<>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
            </>),

        },
        {
            title: (<>Social Media Strategy <br />Development</>),
            txt: (<>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
                <p>Collaborating closely, we uncover the essence of your goals and audience. This ensures your website’s foundation is aligned with your brand’s vision.</p>
            </>),
        },

    ]
}

const ServicesLp = () => {
    return (
        <section className={`pt-100 ${styles.servicesLpSection}`} id="ServicesId">
            <Container>
                <Row>
                    <Col md={7} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.servicesLpContainer}>
                            {data.ServicesItem.map((item, index) => (
                                <div className={styles.servicesLpItem} key={index}>
                                    <div className={styles.servicesLpImage}>
                                        <div className={styles.title}>{item.title}</div>
                                        <div className={styles.barLine}></div>
                                        <div className={styles.readMore}>
                                            <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} />
                                        </div>
                                        <div className={styles.btnReaMore}>
                                            <CommonBtn txt="" ArrowBtn={true} />
                                        </div>
                                        <div>{item.txt}</div>
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

export default ServicesLp