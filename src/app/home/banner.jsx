import styles from "@/styles/home/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Clients from "@/src/app/home/clients"
import { ClientImages } from "@/src/app/home/data/data"
import CommonBtn from "@/src/app/components/common/commonbtn"

const Banner = ({ data }) => {


    return (
        <section className={styles.MainBanner}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} sm={8} className="my-auto">
                        <div className={styles.bannerContent}>
                            <h1>{data.title}</h1>
                            <p >{data.desc}</p>
                            <CommonBtn txt="Get Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <video
                autoPlay
                muted
                loop
                preload="auto"
                aria-label="Background video"
                className={styles.bannerVideo}
                loading="eager"
                poster={data.BannerPoster}
            >
                <source src={data.video} type="video/mp4" />
            </video>
            <Clients data={ClientImages} />
        </section>
    )
}

export default Banner