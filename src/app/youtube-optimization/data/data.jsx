//Banner
import BannerPoster from "media/innerservices/youtube-optimization/bannerImg.webp"

export const BannerData = {
    title: "YouTube Optimization Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    video: "#",
    BannerPoster: BannerPoster.src
}



//Content Data
import ContentImg from "media/innerservices/youtube-optimization/Img01.webp"
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
            title: (<>Keyword Research &<br />Video SEO</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Title & Description<br />Optimization</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Thumbnail<br />Design</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Tag & Metadata<br />Optimization</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Channel<br />Branding</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Playlist Creation & <br />Organization</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Audience Analytics<br />& Reporting</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Engagement <br />Strategies</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },

    ]
}

//Content Data
import ContentImg1 from "media/innerservices/youtube-optimization/Img02.webp"
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