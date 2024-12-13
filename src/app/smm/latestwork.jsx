import BannerPoster from "media/services/smm/workImage.webp"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/smm/latestwork.module.scss"


const LatestWork = () => {
  return (
    <section className={`pt-100 ${styles.latestworkSection}`}>
      <Container>
        <Row>
          <Col md={7}>
            <div className="subtitle">Our Latest Work</div>
            <h2>Drive Business Growth with Our Tailored Solutions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </Col>
          <Col md={12} className='my-auto'>
            <div className={styles.latestworkVideo}>
              <video
                autoPlay
                muted
                loop
                preload="auto"
                aria-label="Background video"
                className={styles.bannerVideo}
                loading="eager"
                poster={BannerPoster.src}
              >
                <source src="/videos/LastestWork.mp4" type="video/mp4" />
              </video>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default LatestWork

