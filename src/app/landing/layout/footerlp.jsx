import React from 'react'
import styles from "@/styles/layout/footer.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import PaymentImg from "media/home/paymentImg.webp"
import Link from "next/link"
import Image from "next/image"
const FooterLp = () => {
    return (
        <section className={`${styles.copyRightLp} ${styles.copyRightSection}`}>
            <Container className="h-100">
                <Row className={`${styles.borderStyle} h-100`} >
                    <Col sm={6} md={6} className="my-auto">
                        <div className={styles.CopyRightBox}>
                            <div className={styles.txtCopyRight}>© Copyright 2025 - Infiniti Digital </div>
                            <div className={styles.CopyRightLinks}>
                                <ul>
                                    <li><Link href="#">Terms of Use</Link></li>
                                    <li><Link href="#"> Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                    </Col>
                    <Col sm={6} md={6} className="my-auto text-center text-md-end">
                        <Image src={PaymentImg.src} alt="Payment Image" width={550} height={40} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FooterLp