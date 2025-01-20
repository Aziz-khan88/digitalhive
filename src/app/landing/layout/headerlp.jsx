"use client"
import { MainLogo } from "@/src/app/app-constants"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/layout/headerlp.module.scss"
import { useState, useEffect } from "react";
import { ClosedIcon, NavIcon } from '@/src/app/app-constants';
import { usePathname } from 'next/navigation';

const HeaderLp = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isLight, setIsLight] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsLight(pathname === '/landing/content' || pathname === '/landing/smm1' || pathname === '/landing/seo1');
    }, [pathname]);


    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <section className={`${styles.headerSection} ${scrolled ? styles.active : ''} ${isLight ? styles.isLight : ""}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} md={2} lg={2} xl={2} xxl={3} className="my-auto">
                        <div className={`${styles.mainLogo} `}>
                            <Link href="#BannerId">
                                <MainLogo />
                            </Link>
                        </div>
                    </Col>
                    <Col xs={6} md={8} lg={8} xl={8} xxl={7} className="my-auto">
                        <div onClick={handleClick}
                            className={`${isActive ? 'navIcon active' : 'navIcon'} ${isLight ? "isLight" : ""} ${scrolled ? "activeScroll" : ''}`}>
                            {isActive ? <ClosedIcon /> : <NavIcon />}
                        </div>
                        <ul className={`${styles.menuSection} ${isActive ? `${styles.menuActive}` : ''} ${isLight ? styles.isLight : ""} ${scrolled ? styles.active : ''}`} >
                            <li ><Link href="#AboutId" onClick={handleClick}>About Us</Link></li>
                            <li ><Link href="#ProcessId" onClick={handleClick}>Process</Link></li>
                            <li ><Link href="#ServicesId" onClick={handleClick}>Services</Link></li>
                            <li ><Link href="#PortfolioId" onClick={handleClick}>Portfolio</Link></li>
                            <li ><Link href="#PricingId" onClick={handleClick}>Pricing</Link></li>
                            <li ><Link href="#TestimonialsId" onClick={handleClick}>Testimonials</Link></li>
                            <li ><Link href="#ContactId" onClick={handleClick}>Contact</Link></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={2} lg={2} xl={2} xxl={2} className="my-auto d-md-block d-none">
                        <Link href="tel:123-123123" className={`commonBtn ${styles.lastBtn}`} aria-label="Visit our Contact">
                            +1 312 379 5987
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeaderLp;
