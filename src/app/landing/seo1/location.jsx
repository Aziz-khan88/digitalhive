import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/landing/components/seo1/location.module.scss"
import BgImg from "@/public/landing/seo1/catImg.webp"

const data = [
    { value: "Arlington" },
    { value: "Atlanta" },
    { value: "Austin" },
    { value: "Baltimore" },
    { value: "Chicago" },
    { value: "Cleveland" },
    { value: "Dallas" },
    { value: "Denver" }
]
const LocationLP = () => {
    return (
        <section className={`pt-100 ${styles.locationSection}`}>
            <Container className={`${styles.locationContainer}`} style={{ backgroundImage: `url(${BgImg.src})` }}>
                <Row>
                    <Col md={12} lg={10} xl={9} className="text-center mx-auto">
                        <h2>Providing SEO Services to multiple cities across USA & Canada</h2>
                        <div className={styles.LocaionBox}>
                            {data.map((item, index) => (
                                <div className={styles.LocaionItem} key={index}>
                                    {item.value}
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LocationLP