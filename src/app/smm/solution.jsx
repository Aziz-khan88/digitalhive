import styles from "@/styles/smm/solution.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"

const SolData = [
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        url: "#",
        bgcolor: "#6A9AFE",
    },
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        url: "#",
        bgcolor: "#10FF7F",
    },
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        url: "#",
        bgcolor: "#FFD600",
    },
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        url: "#",
        bgcolor: "#FF7400",
    },
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        url: "#",
        bgcolor: "#25F4EE",
    },
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        url: "#",
        bgcolor: "#9756E2",
    },
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        url: "#",
        bgcolor: "#F03C3F",
    },
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        url: "#",
        bgcolor: "#6A99FE",
    }

]

const Solution = () => {
    return (
        <section className={`pt-100 ${styles.solutionSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">Our Solutions</div>
                        <h2>Drive Business Growth with Our Tailored Solutions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.solutionContainer}>
                            {SolData.map((item, index) => (
                                <div
                                    className={styles.solutionItem}
                                    key={index}
                                    style={{
                                        '--bgcolor': item.bgcolor || '#ffffff',
                                    }}
                                >
                                    <div className={styles.title}>{item.title}</div>
                                    <p>{item.txt}</p>
                                    <Link href={item.url}>Read More</Link>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Solution;
