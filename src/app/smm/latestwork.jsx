import IMG from "media/services/smm/workImage.webp"
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
          <Col md={6} className='my-auto'>
            <Image src={IMG.src} alt="Digital CTA" width={1440} height={920} className={styles.imgCTAFirst} />
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default LatestWork

