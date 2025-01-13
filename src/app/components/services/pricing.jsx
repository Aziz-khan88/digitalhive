"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/pricing.module.scss"
import { CheckedIcon } from "@/src/app/app-constants"
import CommonBtn from "@/src/app/components/common/commonbtn";


const Pricing = ({ data, bg, tab }) => {
    const [selectedPrice, setSelectedPrice] = useState(1);
    const handlePriceClick = (priceIndex) => {
        setSelectedPrice(priceIndex);
    };

    return (
        <section className={`pt-100 ${styles.pricingSection} ${bg === "yes" ? styles.blackBG : ""}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={5} className="mt-auto">
                        {tab ? (
                            <ul className={styles.tabBody}>
                                <li onClick={() => handlePriceClick(1)} className={selectedPrice === 1 ? styles.active : ""}>
                                    Monthly
                                </li>
                                <li onClick={() => handlePriceClick(2)} className={selectedPrice === 2 ? styles.active : ""}>
                                    Quarterly
                                </li>
                                <li onClick={() => handlePriceClick(3)} className={selectedPrice === 3 ? styles.active : ""}>
                                    Annually
                                </li>
                            </ul>
                        ) : (
                            ""
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.pricingContainer}>
                            {data.PriceItem.map((item, index) => (
                                <div className={styles.pricingItem}
                                    style={{
                                        '--bgcolor': `${item.bgColor}` || '#262626',
                                    }}
                                    key={index}>
                                    <div className={styles.packageHeader}>
                                        <div className={styles.packageName}>{item.packagename}</div>
                                        <div className={styles.packagePrice}>${item[`price${selectedPrice}`] || item.price}/<span>{item[`discount${selectedPrice}`] || "Monthly"}</span></div>
                                        {item.titletxt ? <div className={styles.packageSubTxt}>{item?.titletxt}</div> : ""}
                                        <div className={styles.packagepara}>{item.txt}</div>
                                        <div className={styles.packagebutton}> <CommonBtn ArrowBtn={true} SimpleBtn={true} txt="Get Started" /></div>
                                    </div>
                                    <div className={styles.packageBody}>
                                        {item.bodyPoints.map((point, idx) => (
                                            <div key={idx}>
                                                <div className={styles.listingTitle}>{point.title}</div>
                                                <ul>
                                                    {point.points.map((p, i) => (
                                                        <li key={i}><CheckedIcon />{p}</li>
                                                    ))
                                                    }

                                                </ul>
                                            </div>
                                        ))}
                                        {item.bodyNote && item.bodyNote.length > 0 && (
                                            <>
                                                <div className={styles.titleNote}>Notes</div>
                                                <div className={styles.packageNote}>
                                                    {item.bodyNote.map((paraNote, ind) => (
                                                        <p key={ind}>{paraNote.para}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Pricing