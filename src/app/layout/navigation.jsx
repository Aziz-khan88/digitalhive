"use client"
import Link from 'next/link'
import styles from "@/styles/layout/navigation.module.scss"
import { Container } from 'react-bootstrap';
import { ArrowIcon, ClosedIcon, MenuIcon, NavIcon, SubMenuIcon } from '@/src/app/app-constants';
import { useState } from 'react';

const SmmMenu = [
    {
        title: "Social Media Marketing",
        url: "#",
    },
    {
        title: "Social Media Ads",
        url: "/social-media-ads",
    },
    {
        title: "Social Media Management",
        url: "#",
    },
    {
        title: "Influencer Marketing",
        url: "#",
    },
    {
        title: "YouTube Optimization",
        url: "#",
    },
    {
        title: "YouTube Monetization",
        url: "#",
    },
    {
        title: "Book Marketing",
        url: "#",
    },
    {
        title: "Email Marketing",
        url: "#",
    },

]
const ContentMarketing = [
    {
        title: "Book Writing",
        url: "#",
    },
    {
        title: "Book Editing",
        url: "#",
    },
    {
        title: "Book Publishing",
        url: "#",
    },
    {
        title: "Book Marketing",
        url: "#",
    },
    {
        title: "Children Book Illustration",
        url: "#",
    }, {
        title: "Book Video Trailer",
        url: "#",
    },
    {
        title: "Audio Book",
        url: "#",
    },
    {
        title: "Author Website",
        url: "#",
    },
    {
        title: "Book Cover Design",
        url: "#",
    },


]
const WebsiteDesign = [
    {
        title: "Website Design",
        url: "#",
    },
    {
        title: "Website Development",
        url: "#",
    },
    {
        title: "WordPress Development",
        url: "#",
    },
    {
        title: "Shopify Development",
        url: "#",
    },
    {
        title: "Magento Development",
        url: "#",
    },
    {
        title: "Author Website",
        url: "#",
    },
    {
        title: "Wix Website",
        url: "#",
    },


]
const PaidMarketing = [
    {
        title: "PPC Ads Management",
        url: "#",
    },
    {
        title: "Social Media Ads",
        url: "#",
    },
    {
        title: "Amazon Ads",
        url: "#",
    },
    {
        title: "Facebook Ads",
        url: "#",
    },
    {
        title: "YouTube Ads",
        url: "#",
    }
]
const SEO = [
    {
        title: "Local SEO",
        url: "#",
    },
    {
        title: "Social Media Ads",
        url: "#",
    },
    {
        title: "White Label SEO",
        url: "#",
    },
    {
        title: "Nationwide SEO",
        url: "#",
    },
    {
        title: "Small Business SEO",
        url: "#",
    },
    {
        title: "Enterprise SEO",
        url: "#",
    },
    {
        title: "SEO Agency",
        url: "#",
    }
]
const MobileApp = [
    {
        title: "Mobile App Development",
        url: "#",
    },
    {
        title: "Android App Development",
        url: "#",
    },
    {
        title: "iOS App Development",
        url: "#",
    },
    {
        title: "Software Development",
        url: "#",
    },
]
const Navigation = ({ scrolled, isLight }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };
    return (
        <>
            <div onClick={handleClick}
                className={`${isActive ? 'navIcon active' : 'navIcon'} ${isLight ? "" : 'isLight'}  ${scrolled ? "activeScroll" : ''}`}>
                {isActive ? <ClosedIcon /> : <NavIcon />}
            </div>
            <div className={`${styles.mainMobileNavigation}  ${isActive ? `${styles.active}` : ''}`} >
                <ul className={styles.mobileNavigation}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">SMM <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {SmmMenu.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Content Marketing <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {ContentMarketing.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Website Design & Development <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {WebsiteDesign.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Paid Marketing <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {PaidMarketing.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">SEO <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {SEO.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Mobile App Design & Development <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {MobileApp.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li onClick={handleClick}>
                        <Link href="#">About</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link href="#">Blogs</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link href="#">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <ul className={`${styles.menuSection} ${scrolled ? styles.active : ''} ${isLight ? "" : styles.isLight}`} >
                <li><Link href="/">Home</Link></li>
                <li className={styles.subMenu}>
                    <Link href="#">Services</Link>
                    <div className={styles.submenuContainer}>
                        <Container>
                            <div className={styles.submenuBox}>
                                <div className={styles.titleBox}>
                                    <div className={styles.mainTitle}>Services <span>we offer</span></div>
                                </div>
                                <div className={styles.menuBox}>
                                    <div className={styles.serivesMenuBox}>
                                        <div className={styles.serivesMenuItem}>
                                            <div className={styles.title}><Link href="/social-media-marketing">SMM <ArrowIcon /></Link></div>
                                            <ul>
                                                {SmmMenu.map((item, index) => (
                                                    <li key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={styles.serivesMenuItem}>
                                            <div className={styles.title}><Link href="/content-marketing">Content Marketing <ArrowIcon /></Link></div>
                                            <ul>
                                                {ContentMarketing.map((item, index) => (
                                                    <li key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={styles.serivesMenuItem}>
                                            <div className={styles.title}><Link href="/web-development">Website Design & Development<ArrowIcon /></Link></div>
                                            <ul>
                                                {WebsiteDesign.map((item, index) => (
                                                    <li key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={styles.serivesMenuItem}>
                                            <div className={styles.title}><Link href="/paid-marketing">Paid Marketing<ArrowIcon /></Link></div>
                                            <ul>
                                                {PaidMarketing.map((item, index) => (
                                                    <li key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={styles.serivesMenuItem}>
                                            <div className={styles.title}><Link href="/seo">SEO<ArrowIcon /></Link></div>
                                            <ul>
                                                {SEO.map((item, index) => (
                                                    <li key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={styles.serivesMenuItem}>
                                            <div className={styles.title}><Link href="/mobile-app-development">Mobile App<ArrowIcon /></Link></div>
                                            <ul>
                                                {MobileApp.map((item, index) => (
                                                    <li key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </li>
                <li><Link href="">About Us</Link></li>
                <li><Link href="">Blogs</Link></li>
                <li><Link href="">Contact US</Link></li>
            </ul >
        </>
    )
}

export default Navigation