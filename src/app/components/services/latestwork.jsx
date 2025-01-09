
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/services/latestwork.module.scss"
import ImgSlider from '@/src/app/components/imgslider'


const LatestWork = ({ data }) => {
  const OPTIONS1 = { align: 'start', dragFree: true, direction: 'rtl', loop: true }
  const OPTIONS2 = { align: 'end', dragFree: true, loop: true }
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
            <div className={styles.latestworkBox}>
              <ImgSlider slides={data.LastestWorkItem1} options={OPTIONS2} />
              <ImgSlider slides={data.LastestWorkItem2} options={OPTIONS1} />
              <ImgSlider slides={data.LastestWorkItem3} options={OPTIONS2} />
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default LatestWork

