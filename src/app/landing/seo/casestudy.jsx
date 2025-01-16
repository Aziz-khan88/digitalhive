import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/landing/components/seo/casestudy.module.scss"
import Image from 'next/image'
import Logo01 from "media/landing/seo/work/logo1.webp"
import Logo02 from "media/landing/seo/work/logo2.webp"
import Link from 'next/link'


const data = [
    {
        title: "From 3 keywords to outranking Amazon",
        url: "#",
        logo: Logo01.src,
        bgColor: "#CD4A49"
    },
    {
        title: "From 3 keywords to outranking Amazon",
        url: "#",
        logo: Logo02.src,
        bgColor: "#73B9DB"
    },
    {
        title: "From 3 keywords to outranking Amazon",
        url: "#",
        logo: Logo01.src,
        bgColor: "#60C664"
    },
    {
        title: "From 3 keywords to outranking Amazon",
        url: "#",
        logo: Logo01.src,
        bgColor: "#C79600"
    },
    {
        title: "From 3 keywords to outranking Amazon",
        url: "#",
        logo: Logo02.src,
        bgColor: "#60C664"
    },
    {
        title: "From 3 keywords to outranking Amazon",
        url: "#",
        logo: Logo02.src,
        bgColor: "#C79600"
    },
    {
        title: "From 3 keywords to outranking Amazon",
        url: "#",
        logo: Logo01.src,
        bgColor: "#CD4A49"
    },

    {
        title: "From 3 keywords to outranking Amazon",
        url: "#",
        logo: Logo01.src,
        bgColor: "#73B9DB"
    },


]

const CaseStudyLp = () => {
    return (
        <section className={`${styles.casestudyLpSection} pt-100`} id="BannerId">
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={8} lg={8} className="m-auto text-center">
                        <div className='subtitle'>Case Studies</div>
                        <h2>Featured Case Studies</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.casestudyLpBox}>
                            {data.map((item, index) => (
                                <div className={styles.casestudyItem} key={index}
                                    style={{
                                        '--bgcolor': `${item.bgColor}` || '#7635FF',
                                    }}
                                >
                                    <Image src={item.logo} alt={item.title} width={300} height={150} />
                                    <div className={styles.casestudyTxt}>
                                        <p>{item.title}</p>
                                        <Link href={item.url}>View Detail</Link>
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

export default CaseStudyLp