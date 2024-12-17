
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/services/latestwork.module.scss"


const LatestWork = ({ data }) => {
  return (
    <section className={`pt-100 ${styles.latestworkSection}`}>
      <Container>
        <Row>
          <Col md={7}>
            <div className="subtitle">{data.subtitle}</div>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
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
                poster={data.poster}
              >
                <source src={data.video} type="video/mp4" />
              </video>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default LatestWork

