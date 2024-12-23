//Banner
import BannerPoster from "media/innerservices/book-video-trailer/bannerImg.webp"

export const BannerData = {
    title: "Book Marketing Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    video: "",
    BannerPoster: BannerPoster.src
}

//Services

export const ServicesData = {
    subtitle: "Our Services",
    title: "Our Social Media Advertising Services Can Help You:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ServicesItem: [
        {
            title: (<>Ghost Book<br />Writing</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Editing & <br />Proofreading</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Book <br />Formatting</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },
        {
            title: (<>Publishing <br />Support</>),
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit",
            url: "#",
        },

    ]
}

// NewsLetter

import ImgBg from "media/innerservices/book-video-trailer/ctaImage.webp"
export const NewsLetterData = {
    title: "Let’s Build Something Extraordinary Together!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: ImgBg.src
}


//Content Data
import ContentImg from "media/innerservices/book-video-trailer/Img01.webp"
import { MenuIcon } from "@/src/app/app-constants"
export const ContentData = {
    maintitle: true,
    contentTitle: "Why Partner with Our Book Writing Experts?",
    contentTxt: (<>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </>),
    img: ContentImg.src
}
// Process
export const ProcessData = {
    subtitle: "Our Process",
    title: "Our Proven Content Marketing Process",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",

    ProcessItem1: [
        {
            title: "Strategy Development",
            txt: (<>
                <strong>Project Kickoff:</strong>
                <p>Initial meetings to understand client requirements, goals, and target audience.</p>
                <strong>Market Research & Analysis:</strong>
                <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
                <strong>User Persona Development:</strong>
                <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
            </>),

        },
        {
            title: "Content Distribution",
            txt: (<>
                <strong>Project Kickoff:</strong>
                <p>Initial meetings to understand client requirements, goals, and target audience.</p>
                <strong>Market Research & Analysis:</strong>
                <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
                <strong>User Persona Development:</strong>
                <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
            </>),

        },
    ],
    ProcessItem2: [
        {
            title: "Content Planning",
            txt: (<>
                <strong>Project Kickoff:</strong>
                <p>Initial meetings to understand client requirements, goals, and target audience.</p>
                <strong>Market Research & Analysis:</strong>
                <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
                <strong>User Persona Development:</strong>
                <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
            </>),

        }, {
            title: "Performance Analysis",
            txt: (<>
                <strong>Project Kickoff:</strong>
                <p>Initial meetings to understand client requirements, goals, and target audience.</p>
                <strong>Market Research & Analysis:</strong>
                <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
                <strong>User Persona Development:</strong>
                <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
            </>),

        },
    ],
    ProcessItem3: [
        {
            title: "Content Creation",
            txt: (<>
                <strong>Project Kickoff:</strong>
                <p>Initial meetings to understand client requirements, goals, and target audience.</p>
                <strong>Market Research & Analysis:</strong>
                <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
                <strong>User Persona Development:</strong>
                <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
            </>),

        },
        {
            title: "Optimization & Repurposing",
            txt: (<>
                <strong>Project Kickoff:</strong>
                <p>Initial meetings to understand client requirements, goals, and target audience.</p>
                <strong>Market Research & Analysis:</strong>
                <p>Analyze competitors and industry trends to identify unique features and opportunities.</p>
                <strong>User Persona Development:</strong>
                <p>Create personas for the target audience to understand their needs, preferences, and behavior.</p>
            </>),

        }
    ]

}


// Workimport 
import WorkImg01 from "media/services/content-marketing/img01.webp"
import WorkImg02 from "media/services/content-marketing/img02.webp"
import WorkImg03 from "media/services/content-marketing/img03.webp"
import WorkImg04 from "media/services/content-marketing/img04.webp"
export const WorkData = {
    subtitle: "Our Recent Work",
    title: "Bringing Ideas to Life",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    WorkItem: [
        {
            title: "Music App",
            txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
            Img: WorkImg01.src,
            url: "#",
            category: "Mobile App Development",
        },
        {
            title: "E-commerce Website",
            txt: "Creating seamless online shopping experiences to drive sales and improve user engagement.",
            Img: WorkImg02.src,
            url: "#",
            category: "Mobile App Development",
        },
        {
            title: "Social Media Campaign",
            txt: "Driving brand awareness and engagement through strategic social media marketing.",
            Img: WorkImg03.src,
            url: "#",
            category: "Mobile App Development",
        },
        {
            title: "Another App",
            txt: "Innovative solutions for mobile users.",
            Img: WorkImg04.src,
            url: "#",
            category: "Mobile App Development",
        },
        {
            title: "Music App",
            txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
            Img: WorkImg01.src,
            url: "#",
            category: "Mobile App Development",
        },
        {
            title: "E-commerce Website",
            txt: "Creating seamless online shopping experiences to drive sales and improve user engagement.",
            Img: WorkImg02.src,
            url: "#",
            category: "Mobile App Development",
        },
        {
            title: "Social Media Campaign",
            txt: "Driving brand awareness and engagement through strategic social media marketing.",
            Img: WorkImg03.src,
            url: "#",
            category: "Mobile App Development",
        },
        {
            title: "Another App",
            txt: "Innovative solutions for mobile users.",
            Img: WorkImg04.src,
            url: "#",
            category: "Mobile App Development",
        },
        {
            title: "Social Media Campaign",
            txt: "Driving brand awareness and engagement through strategic social media marketing.",
            Img: WorkImg03.src,
            url: "#",
            category: "Website Development",
        },
        {
            title: "Another App",
            txt: "Innovative solutions for mobile users.",
            Img: WorkImg04.src,
            url: "#",
            category: "Website Development",
        },
        {
            title: "Music App",
            txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
            Img: WorkImg01.src,
            url: "#",
            category: "Website Development",
        },
        {
            title: "E-commerce Website",
            txt: "Creating seamless online shopping experiences to drive sales and improve user engagement.",
            Img: WorkImg02.src,
            url: "#",
            category: "Website Development",
        },
        {
            title: "E-commerce Website",
            txt: "Creating seamless online shopping experiences to drive sales and improve user engagement.",
            Img: WorkImg02.src,
            url: "#",
            category: "Social Media Marketing",
        },
        {
            title: "Social Media Campaign",
            txt: "Driving brand awareness and engagement through strategic social media marketing.",
            Img: WorkImg03.src,
            url: "#",
            category: "Social Media Marketing",
        },
        {
            title: "Music App",
            txt: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
            Img: WorkImg01.src,
            url: "#",
            category: "Social Media Marketing",
        },

        {
            title: "Another App",
            txt: "Innovative solutions for mobile users.",
            Img: WorkImg04.src,
            url: "#",
            category: "Social Media Marketing",
        },

    ]
}


//Book Tabs
import Book01 from "media/innerservices/book/book01.webp"
import Book02 from "media/innerservices/book/book02.webp"
import Book03 from "media/innerservices/book/book03.webp"
import Book04 from "media/innerservices/book/book04.webp"
import Book05 from "media/innerservices/book/book05.webp"
import Book06 from "media/innerservices/book/book06.webp"
import Book07 from "media/innerservices/book/book07.webp"
import Book08 from "media/innerservices/book/book08.webp"
import Book09 from "media/innerservices/book/book09.webp"
import Book10 from "media/innerservices/book/book10.webp"
export const BookTabsData = {
    subtitle: "Book Gallery",
    title: "Diverse Expertise Across Genres",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    BookTabs: [
        {
            tabtitle: "Fiction",
            images: [
                Book01.src,
                Book02.src,
                Book03.src,
                Book04.src,
                Book05.src,
                Book06.src,
                Book07.src,
                Book08.src,
                Book09.src,
                Book10.src,
            ],
        },
        {
            tabtitle: "Non-Fiction",
            images: [
                Book06.src,
                Book07.src,
                Book08.src,
                Book09.src,
                Book10.src,
                Book01.src,
                Book02.src,
                Book03.src,
                Book04.src,
                Book05.src,
            ],
        },
        {
            tabtitle: "Biographies",
            images: [
                Book01.src,
                Book02.src,
                Book03.src,
                Book08.src,
                Book09.src,
                Book10.src,
                Book04.src,
                Book05.src,
                Book06.src,
                Book07.src,
            ],
        },
        {
            tabtitle: "Children’s Books",
            images: [
                Book05.src,
                Book06.src,
                Book07.src,
                Book08.src,
                Book09.src,
                Book01.src,
                Book02.src,
                Book03.src,
                Book04.src,
                Book10.src,
            ],
        },
        {
            tabtitle: "Personal Stories",
            images: [
                Book06.src,
                Book07.src,
                Book08.src,
                Book09.src,
                Book10.src,
                Book01.src,
                Book02.src,
                Book03.src,
                Book04.src,
                Book05.src,
            ],
        },
    ],
}

// Pricing
export const PriceData = {
    subtitle: "Our Pricing",
    title: "Quality Discounts Elevate Your Social Media Presence Today!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    PriceItem: [
        {
            bgColor: "#7635FF",
            packagename: "Basic Package",
            price: "350",
            txt: "We have something in store for everyone, and that something is affordable services",
            bodyPoints: [
                {
                    title: "Social Media Posts",
                    points: [
                        "Total 15 Posts Per Month",
                        "10 Graphic Social Posts",
                        "05 Videos / Reels",
                        "Stories"
                    ]
                },
                {
                    title: "Social Platforms Supported",
                    points: [
                        "Facebook",
                        "Instagram",
                        "TikTok / LinkedIn"
                    ]
                },
                {
                    title: "Social Ads Management",
                    points: [
                        "Unlimited Campaigns Per Month",
                        "Facebook & Instagram Paid Ads",
                        "Unlimited Ad sets Per Month",
                        "Detailed Campaign Monitoring & Optimization",
                    ]
                }
            ]
        },
        {
            bgColor: "#FF6987",
            packagename: "Advanced Package",
            price: "500",
            txt: "We have something in store for everyone, and that something is affordable services",
            bodyPoints: [
                {
                    title: "Social Media Posts",
                    points: [
                        "Total 15 Posts Per Month",
                        "10 Graphic Social Posts",
                        "05 Videos / Reels",
                        "Stories"
                    ]
                },
                {
                    title: "Social Platforms Supported",
                    points: [
                        "Facebook",
                        "Instagram",
                        "TikTok / LinkedIn"
                    ]
                },
                {
                    title: "Social Ads Management",
                    points: [
                        "Unlimited Campaigns Per Month",
                        "Facebook & Instagram Paid Ads",
                        "Unlimited Ad sets Per Month",
                        "Detailed Campaign Monitoring & Optimization",
                    ]
                }
            ]
        },
        {
            bgColor: "#9AFF35",
            packagename: "Enterprise Package",
            price: "750",
            txt: "We have something in store for everyone, and that something is affordable services",
            bodyPoints: [
                {
                    title: "Social Media Posts",
                    points: [
                        "Total 15 Posts Per Month",
                        "10 Graphic Social Posts",
                        "05 Videos / Reels",
                        "Stories"
                    ]
                },
                {
                    title: "Social Platforms Supported",
                    points: [
                        "Facebook",
                        "Instagram",
                        "TikTok / LinkedIn"
                    ]
                },
                {
                    title: "Social Ads Management",
                    points: [
                        "Unlimited Campaigns Per Month",
                        "Facebook & Instagram Paid Ads",
                        "Unlimited Ad sets Per Month",
                        "Detailed Campaign Monitoring & Optimization",
                    ]
                }
            ]
        }
    ]
};

// CTA  Pink
import ImgBgPink from "media/innerservices/book-video-trailer/BgImage.webp"
export const CtaPinkData = {
    title: "Want a Customized Package Tailored Just for You?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: ImgBgPink.src
}
// Industrie Data
export const IndustriesData = {
    subtitle: "Industries We Serve",
    title: "Solutions Tailored to Your Industry ",
    desc: "Whatever your niche, we’ve got the expertise. At Infinitidigital, we’re dedicated to delivering customized solutions that resonate with your vision.",

}