//Banner
import BannerPoster from "media/innerservices/email-marketing/bannerImg.webp"

export const BannerData = {
    title: "Drive Results with Targeted Email Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    video: "#",
    BannerPoster: BannerPoster.src
}



//Content Data
import ContentImg from "media/innerservices/email-marketing/Img01.webp"
export const ContentData = {
    maintitle: true,
    contentTitle: "Transform Your Social Media Presence",
    contentTxt: (<>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
    </>),
    img: ContentImg.src
}

// NewsLetter

import ImgBg from "media/components/newsLetterImg.gif"
export const NewsLetterData = {
    title: "Let’s Build Something Extraordinary Together!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: ImgBg.src
}

//Services
export const ServicesData = {
    subtitle: "Our Services",
    title: "Our YouTube Optimization Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ServicesItem: [
        {
            title: (<>Monetization Eligibility<br />Setup</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Ad Revenue<br />Optimization</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Channel Growth <br />Strategies</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Content Strategy <br />Development</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Brand Sponsorship<br />Opportunities</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Membership &<br />Merchandise Setup</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Chat & Sticker<br /> Management</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Analytics & <br />PerformanceTracking</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },

    ]
}

//Content Data
import ContentImg1 from "media/innerservices/email-marketing/Img02.webp"
import { MenuIcon } from "@/src/app/app-constants"
export const ContentData1 = {
    maintitle: true,
    contentTitle: "What You’ll Gain with YouTube Optimization",
    contentTxt: (<>
        <ul className="ContentUl">
            <li><span><MenuIcon /></span>Improved audience engagement and retention.</li>
            <li><span><MenuIcon /></span>Improved audience engagement and retention.</li>
            <li><span><MenuIcon /></span>Improved audience engagement and retention.</li>
            <li><span><MenuIcon /></span>Improved audience engagement and retention.</li>
            <li><span><MenuIcon /></span>Improved audience engagement and retention.</li>
        </ul>
    </>),
    img: ContentImg1.src
}