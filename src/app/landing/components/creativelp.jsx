
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/services/latestwork.module.scss"
import ImgSlider from '@/src/app/components/imgslider'

// Latest Work
import Img01 from "media/services/social-media-marketing/latestwork/1.webp"
import Img02 from "media/services/social-media-marketing/latestwork/2.webp"
import Img03 from "media/services/social-media-marketing/latestwork/3.webp"
import Img04 from "media/services/social-media-marketing/latestwork/4.webp"
import Img05 from "media/services/social-media-marketing/latestwork/5.webp"
import Img06 from "media/services/social-media-marketing/latestwork/6.webp"
import Img07 from "media/services/social-media-marketing/latestwork/7.webp"
import Img08 from "media/services/social-media-marketing/latestwork/8.webp"
import Img09 from "media/services/social-media-marketing/latestwork/9.webp"
import Img10 from "media/services/social-media-marketing/latestwork/10.webp"
import Img11 from "media/services/social-media-marketing/latestwork/11.webp"
import Img12 from "media/services/social-media-marketing/latestwork/12.webp"
import Img13 from "media/services/social-media-marketing/latestwork/13.webp"
import Img14 from "media/services/social-media-marketing/latestwork/14.webp"
import Img15 from "media/services/social-media-marketing/latestwork/15.webp"
import Img16 from "media/services/social-media-marketing/latestwork/16.webp"
import Img17 from "media/services/social-media-marketing/latestwork/17.webp"
import Img18 from "media/services/social-media-marketing/latestwork/18.webp"
import Img19 from "media/services/social-media-marketing/latestwork/19.webp"
import Img20 from "media/services/social-media-marketing/latestwork/20.webp"
import Img21 from "media/services/social-media-marketing/latestwork/21.webp"
import Img22 from "media/services/social-media-marketing/latestwork/22.webp"
import Img23 from "media/services/social-media-marketing/latestwork/23.webp"
import Img24 from "media/services/social-media-marketing/latestwork/24.webp"
import Img25 from "media/services/social-media-marketing/latestwork/25.webp"
import Img26 from "media/services/social-media-marketing/latestwork/26.webp"
import Img27 from "media/services/social-media-marketing/latestwork/27.webp"
import Img28 from "media/services/social-media-marketing/latestwork/28.webp"
import Img29 from "media/services/social-media-marketing/latestwork/29.webp"
import Img30 from "media/services/social-media-marketing/latestwork/30.webp"
import Img31 from "media/services/social-media-marketing/latestwork/31.webp"
import Img32 from "media/services/social-media-marketing/latestwork/32.webp"
import Img33 from "media/services/social-media-marketing/latestwork/33.webp"
import Img34 from "media/services/social-media-marketing/latestwork/34.webp"
import Img35 from "media/services/social-media-marketing/latestwork/35.webp"
import Img36 from "media/services/social-media-marketing/latestwork/36.webp"


export const data = {
    subtitle: "Our Latest Work",
    title: "Driving Results That Speak for Themselves",
    desc: "How do you know we deliver? Just look at the success stories.From viral campaigns to measurable ROI, our work speaks louder than words.At Infinitidigital, we don’t just discuss results—we show them.",
    LastestWorkItem1: [
        { img: Img01.src },
        { img: Img02.src },
        { img: Img03.src },
        { img: Img04.src },
        { img: Img05.src },
        { img: Img06.src },
        { img: Img07.src },
        { img: Img08.src },
        { img: Img09.src },
        { img: Img10.src },
        { img: Img11.src },
        { img: Img12.src },
    ],
    LastestWorkItem2: [
        { img: Img13.src },
        { img: Img14.src },
        { img: Img15.src },
        { img: Img16.src },
        { img: Img17.src },
        { img: Img18.src },
        { img: Img19.src },
        { img: Img20.src },
        { img: Img21.src },
        { img: Img22.src },
        { img: Img23.src },
        { img: Img24.src },
    ],
    LastestWorkItem3: [
        { img: Img25.src },
        { img: Img26.src },
        { img: Img27.src },
        { img: Img28.src },
        { img: Img29.src },
        { img: Img30.src },
        { img: Img31.src },
        { img: Img32.src },
        { img: Img33.src },
        { img: Img34.src },
        { img: Img35.src },
        { img: Img36.src },
    ]

}

const CreativeLp = () => {
    const OPTIONS1 = { align: 'start', dragFree: true, direction: 'rtl', loop: true }
    const OPTIONS2 = { align: 'end', dragFree: true, loop: true }
    return (
        <section className={`pt-100 ${styles.latestworkSection}`} id="PortfolioId">
            <Container>
                <Row>
                    <Col md={8} className="mx-auto text-center">
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

export default CreativeLp

