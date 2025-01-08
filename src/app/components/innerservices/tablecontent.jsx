import styles from '@/styles/inner-services/tablecontent.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { TickIcon } from '@/src/app/app-constants'
import CommonBtn from "@/src/app/components/common/commonbtn"


const TableContent = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.tableContent} `}>
            <Container>
                <Row>
                    <Col md={7}>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.tableContainer}>
                            <div className={styles.tableHeading}>
                                {[...Object.keys(data.tabledata)].map((heading, index) => (
                                    <div className={styles.headingItem} key={index}>
                                        {heading}
                                    </div>
                                ))}
                            </div>
                            <div className={styles.tableRow}>
                                {Object.values(data.tabledata).map((item, index) => (
                                    <div className={styles.tableCol} key={`column-${index}`}>
                                        {item.map((value, i) => (
                                            <div className={styles.tableColItem} key={`item-${index}-${i}`}>
                                                {value === "tick" ? <TickIcon /> : value}
                                            </div>
                                        ))}
                                        <div className={styles.tableColItem} key={`button-${index}`}>
                                            {index !== 0 && (
                                                <button
                                                    className={`${styles.buttonLast} ${styles[`item${index}`]}`}
                                                >
                                                    <CommonBtn txt="Let’s Connect" ArrowBtn={true} SimpleBtn={true} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TableContent