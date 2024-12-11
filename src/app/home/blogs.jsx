import styles from "@/styles/home/blogs.module.scss"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'
import IMG01 from "media/home/blogs/blog1.webp"
import IMG02 from "media/home/blogs/blog2.webp"
import IMG03 from "media/home/blogs/blog3.webp"
import Link from "next/link"

const BlogsData = [
    {
        title: "Hear From Our Clients",
        date: "24 August, 2024",
        time: "26 min",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod",
        category: "Paid Marketing",
        img: IMG01.src,
    },
    {
        title: "Hear From Our Clients",
        date: "24 August, 2024",
        time: "26 min",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod",
        category: "Mobile App Design",
        img: IMG02.src,
    }, {
        title: "Hear From Our Clients",
        date: "24 August, 2024",
        time: "26 min",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod",
        category: "SEO Development & Marketing",
        img: IMG03.src,
    }
]

const Blogs = () => {
    return (
        <section className={`pt-100 ${styles.blogsSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Our Blogs</div>
                        <h2>Our Recent Blogs</h2>
                        <p>Explore our latest projects and see how weve helped brands grow, engage, and succeed in the digital world.</p>
                    </Col>
                </Row>
                <Row>
                    {BlogsData.map((item, index) => (
                        <Col md={4} sm={6} key={index}>
                            <div className={styles.blogItem}>
                                <div className={styles.blogImg}>
                                    <Image src={item.img} alt="Blog Image" fill />
                                </div>
                                <div className={styles.blogTxt}>
                                    <div className={styles.categoryItem}>{item.category}</div>
                                    <h5>{item.title}</h5>
                                    <div className={styles.datatime}>{item.date} . {item.time}</div>
                                    <p>{item.txt}</p>
                                </div>

                            </div>
                        </Col>
                    ))}
                    <Col md={7} className="text-center mt-5 mt-md-4 m-auto">
                        <Link href="#" className="commonBtn">View All Blogs</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Blogs