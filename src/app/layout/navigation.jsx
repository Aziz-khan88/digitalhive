"use client"
import Link from 'next/link'
import styles from "@/styles/layout/navigation.module.scss"
import { Container } from 'react-bootstrap';
import { ArrowIcon, ClosedIcon, MenuIcon, NavIcon, SubMenuIcon } from '@/src/app/app-constants';
import { useState } from 'react';
import { usePathname } from "next/navigation";
const MainServicesLinks = [
    {
        url: "/social-media-marketing",
    },
    {
        url: "/web-development",
    },
    {
        url: "/content-marketing",
    },
    {
        url: "/mobile-app-development",
    },
    {
        url: "/paid-marketing",
    },
    {
        url: "/seo",
    },

]
const SmmMenu = [
    {
        title: "Social Media Ads",
        url: "/social-media-ads",
    },
    {
        title: "Social Media Management",
        url: "/social-media-management",
    },
    {
        title: "Influencer Marketing",
        url: "/influencer-marketing",
    },
    {
        title: "YouTube Optimization",
        url: "/youtube-optimization",
    },
    {
        title: "YouTube Monetization",
        url: "/youtube-monetization",
    },
    {
        title: "Email Marketing",
        url: "/email-marketing",
    },


]
const ContentMarketing = [
    {
        title: "Book Writing",
        url: "/book-writing",
    },
    {
        title: "Book Editing",
        url: "/book-editing",
    },
    {
        title: "Book Publishing",
        url: "/book-publishing",
    },
    {
        title: "Book Marketing",
        url: "/book-marketing",
    },
    {
        title: "Children Book Illustration",
        url: "/children-book-illustration",
    }, {
        title: "Book Video Trailer",
        url: "/book-video-trailer",
    },
    {
        title: "Audio Book",
        url: "/audio-book",
    },
    {
        title: "Book Cover Design",
        url: "/book-cover-design",
    },


]
const WebsiteDesign = [
    {
        title: "Website Design",
        url: "/website-design-services",
    },
    {
        title: "Website Development",
        url: "/website-development-services",
    },
    {
        title: "WordPress Development",
        url: "/wordpress-development-services",
    },
    {
        title: "Shopify Development",
        url: "/shopify-development-services",
    },
    {
        title: "Website Redesign Service",
        url: "/webiste-redesign-services",
    },
    {
        title: "Author Website",
        url: "/author-website-services",
    }

]
const PaidMarketing = [
    {
        title: "PPC Ads Management",
        url: "/ppc-ads",
    },
    {
        title: "Social Media Ads",
        url: "/social-media-ads",
    },
    {
        title: "Amazon Ads",
        url: "/amazon-ads",
    },
    {
        title: "Facebook Ads",
        url: "/facebook-ads",
    },
    {
        title: "YouTube Ads",
        url: "/youtube-ads",
    }
]
const SEO = [
    {
        title: "Local SEO",
        url: "/local-seo",
    },
    {
        title: "White Label SEO",
        url: "/white-label-seo",
    },
    {
        title: "Nationwide SEO",
        url: "/nationwide-seo",
    },
    {
        title: "Small Business SEO",
        url: "/small-bussiness-seo",
    },
    {
        title: "Enterprise SEO",
        url: "/enterprise-seo",
    },
    {
        title: "SEO Agency",
        url: "/seo-agency",
    }
]
const MobileApp = [
    {
        title: "Android App Development",
        url: "/android-app-development",
    },
    {
        title: "iOS App Development",
        url: "/ios-app-development",
    },
    {
        title: "Software Development",
        url: "/software-development",
    },
]
const Navigation = ({ scrolled, isLight }) => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };

    const isActiveLink = (url) => pathname === url;
    const isActiveSubMenu = (menu = [], pathname) => {
        return menu.some((item) => item.url === pathname);
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
                        <Link href="/" >Home</Link>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="/seo">SEO</Link>
                        <div className={styles.subMenuIcon}><SubMenuIcon /></div>
                        <ul className={styles.mobilesubMenu}>
                            {SEO.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="/social-media-marketing" onClick={handleClick}>SMM</Link>
                        <div className={styles.subMenuIcon}><SubMenuIcon /></div>
                        <ul className={styles.mobilesubMenu}>
                            {SmmMenu.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="/paid-marketing">Paid Marketing</Link>
                        <div className={styles.subMenuIcon}><SubMenuIcon /></div>
                        <ul className={styles.mobilesubMenu}>
                            {PaidMarketing.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="/content-marketing">Content Marketing</Link>
                        <div className={styles.subMenuIcon}><SubMenuIcon /></div>
                        <ul className={styles.mobilesubMenu}>
                            {ContentMarketing.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="/mobile-app-development">Mobile App Development</Link>
                        <div className={styles.subMenuIcon}><SubMenuIcon /></div>
                        <ul className={styles.mobilesubMenu}>
                            {MobileApp.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="/web-development">Website Design & Development</Link>
                        <div className={styles.subMenuIcon}><SubMenuIcon /></div>
                        <ul className={styles.mobilesubMenu}>
                            {WebsiteDesign.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>

                    <li onClick={handleClick}>
                        <Link href="/about-us">About</Link>
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
                <li className={isActiveLink("/") ? styles.active : ""}><Link href="/">Home</Link></li>
                <li className={`${styles.subMenu} ${isActiveSubMenu(
                    [
                        ...(Array.isArray(MainServicesLinks) ? MainServicesLinks : []),
                        ...(Array.isArray(SmmMenu) ? SmmMenu : []),
                        ...(Array.isArray(ContentMarketing) ? ContentMarketing : []),
                        ...(Array.isArray(WebsiteDesign) ? WebsiteDesign : []),
                        ...(Array.isArray(WebsiteDesign) ? PaidMarketing : []),
                        ...(Array.isArray(WebsiteDesign) ? SEO : []),
                        ...(Array.isArray(WebsiteDesign) ? MobileApp : []),
                    ],
                    pathname
                ) ? styles.active : ""}`}>
                    <Link href="#" >Services</Link>
                    <div className={styles.submenuContainer}>
                        <Container>
                            <div className={styles.submenuBox}>
                                <div className={styles.titleBox}>
                                    <div className={styles.mainTitle}>Services <span>we offer</span></div>
                                </div>
                                <div className={styles.menuBox}>
                                    <div className={styles.serivesMenuBox}>
                                        <div className={`${styles.serivesMenuItem} ${isActiveSubMenu(SEO) ? styles.active : ""}`} >
                                            <div className={styles.title}><Link href="/seo">SEO<ArrowIcon /></Link></div>
                                            <ul>
                                                {SEO.map((item, index) => (
                                                    <li key={index} className={isActiveLink(item.url) ? styles.active : ""}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={`${styles.serivesMenuItem} ${isActiveSubMenu(SmmMenu) ? styles.active : ""}`} >
                                            <div className={styles.title}><Link href="/social-media-marketing">SMM <ArrowIcon /></Link></div>
                                            <ul>
                                                {SmmMenu.map((item, index) => (
                                                    <li key={index} className={isActiveLink(item.url) ? styles.active : ""}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={`${styles.serivesMenuItem} ${isActiveSubMenu(PaidMarketing) ? styles.active : ""}`} >
                                            <div className={styles.title}><Link href="/paid-marketing">Paid Marketing<ArrowIcon /></Link></div>
                                            <ul>
                                                {PaidMarketing.map((item, index) => (
                                                    <li key={index} className={isActiveLink(item.url) ? styles.active : ""}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={`${styles.serivesMenuItem} ${isActiveSubMenu(ContentMarketing) ? styles.active : ""}`} >
                                            <div className={styles.title}><Link href="/content-marketing">Content Marketing <ArrowIcon /></Link></div>
                                            <ul>
                                                {ContentMarketing.map((item, index) => (
                                                    <li key={index} className={isActiveLink(item.url) ? styles.active : ""}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={`${styles.serivesMenuItem} ${isActiveSubMenu(MobileApp) ? styles.active : ""}`} >
                                            <div className={styles.title}><Link href="/mobile-app-development">Mobile App Development<ArrowIcon /></Link></div>
                                            <ul>
                                                {MobileApp.map((item, index) => (
                                                    <li key={index} className={isActiveLink(item.url) ? styles.active : ""}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div> <div className={`${styles.serivesMenuItem} ${isActiveSubMenu(ContentMarketing) ? styles.active : ""}`} >
                                            <div className={styles.title}><Link href="/web-development">Website Design & Development<ArrowIcon /></Link></div>
                                            <ul>
                                                {WebsiteDesign.map((item, index) => (
                                                    <li key={index} className={isActiveLink(item.url) ? styles.active : ""}><Link href={item.url}><MenuIcon />{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div >
                </li >
                <li className={isActiveLink("/about-us") ? styles.active : ""}><Link href="/about-us">About Us</Link></li>
                <li className={isActiveLink("/blogs") ? styles.active : ""}><Link href="/blogs">Blogs</Link></li>
                <li className={isActiveLink("/contact-us") ? styles.active : ""}><Link href="/contact-us">Contact Us</Link></li>
            </ul >
        </>
    )
}

export default Navigation