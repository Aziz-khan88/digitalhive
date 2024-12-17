//Banner
import BannerPoster from "media/home/bannerPoster.webp"

export const BannerData = {
    title: "Build. Grow. Thrive.",
    desc: "Struggling to get noticed online? You’re not alone. At Digital Hive, we revamp your digital presence into an energetic hub of engagement, traffic, and measurable results. We’re not just providing services but crafting stories that resonate and inspire.",
    video: "https://player.vimeo.com/progressive_redirect/playback/1039775789/rendition/720p/file.mp4?loc=external&log_user=0&signature=8567ae8ef483e82e5fcc1ef124821c26200f8e18bcd1545a174dda0aced9e429",
    BannerPoster: BannerPoster.src
}

//Clients
import Client01 from "media/home/clientsLogo/01.webp";
import Client02 from "media/home/clientsLogo/02.webp";
import Client03 from "media/home/clientsLogo/03.webp";
import Client04 from "media/home/clientsLogo/04.webp";
import Client05 from "media/home/clientsLogo/05.webp";
import Client06 from "media/home/clientsLogo/06.webp";


export const ClientImages = [
    {
        Img: Client01.src,
    },
    {
        Img: Client02.src,
    },
    {
        Img: Client03.src,
    },
    {
        Img: Client04.src,
    },
    {
        Img: Client05.src,
    },
    {
        Img: Client06.src,
    },

]

//About Us 

export const AboutData = {
    subtitle: "About Us",
    title: "Results That Speak Louder Than Words ",
    desc: (<>
        Your goals drive everything we do.At Digital Hive, we make brands shine in today’s crowded online world.Whether it’s a mobile app that impresses, a website that works 24/7, or social media strategies that engage and convert, Digital Hive is here to make it happen.
        <br />We don’t just serve clients; we build partnerships.
    </>),
    points: [
        {
            numbers: "10",
            namee: "Years of Experience"
        }, {
            numbers: "60",
            namee: "Experts Team"
        }, {
            numbers: "1,200",
            namee: "Successful Projects"
        }, {
            numbers: "100",
            namee: "Global Clients"
        }
    ]
}

//Services
import Image01 from "media/home/services/image01.webp"
import Image02 from "media/home/services/image02.webp"
import Image03 from "media/home/services/image03.webp"
import Image04 from "media/home/services/image04.webp"
import Image05 from "media/home/services/image05.webp"
import Image06 from "media/home/services/image06.webp"
export const ServicesData = {
    subtitle: "Our Services",
    title: "Smarter Strategies, Better Results ",
    desc: "Our tailored solutions ensure your success. Here’s how we help:",
    serviceData1: [
        {
            title: "Social Media Marketing",
            txt: "Turn followers into loyal fans with campaigns that connect and captivate.",
            Img: Image01.src,
            url: "#"
        }, {
            title: "Mobile App Development",
            txt: "Build intuitive, engaging apps that keep users coming back.",
            Img: Image03.src,
            url: "#"
        }, {
            title: "Paid Marketing",
            txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus.",
            Img: Image05.src,
            url: "#"
        }
    ],
    serviceData2: [
        {
            title: "SEO",
            txt: "Get noticed by the right audience at the perfect moment with expert optimization strategies",
            Img: Image02.src,
            url: "#"
        }, {
            title: "Web Design & Development",
            txt: "Turn followers into loyal fans with campaigns that connect and captivate.",
            Img: Image04.src,
            url: "#"
        }, {
            title: "Content Marketing",
            txt: "Deliver value with high-quality, impactful content that informs and inspires.",
            Img: Image06.src,
            url: "#"
        }

    ]
}

// CTA 
import ImgBg from "media/home/ctaBg.webp"
export const CtaData = {
    title: "Strategic design solutions that fuel your bottom line.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: ImgBg.src
}
// Work
import WorkImg01 from "media/home/work/work01.webp"
import WorkImg02 from "media/home/work/work02.webp"
import WorkImg03 from "media/home/work/work03.webp"
import WorkImg04 from "media/home/work/work04.webp"
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

// Partner Data
import Logo1 from "media/home/partnerLogo/logo1.webp";
import Logo2 from "media/home/partnerLogo/logo2.webp";
import Logo3 from "media/home/partnerLogo/logo3.webp";
import Logo4 from "media/home/partnerLogo/logo4.webp";
import Logo5 from "media/home/partnerLogo/logo5.webp";
import Logo6 from "media/home/partnerLogo/logo6.webp";
import Logo7 from "media/home/partnerLogo/logo7.webp";
import Logo8 from "media/home/partnerLogo/logo8.webp";
import Logo9 from "media/home/partnerLogo/logo9.webp";
import Logo10 from "media/home/partnerLogo/logo10.webp";
import Logo11 from "media/home/partnerLogo/logo11.webp";
import Logo12 from "media/home/partnerLogo/logo12.webp";
import Logo13 from "media/home/partnerLogo/logo13.webp";
import Logo14 from "media/home/partnerLogo/logo14.webp";
import Logo15 from "media/home/partnerLogo/logo15.webp";
import Logo16 from "media/home/partnerLogo/logo16.webp";
import Logo17 from "media/home/partnerLogo/logo17.webp";
import Logo18 from "media/home/partnerLogo/logo18.webp";
import Logo19 from "media/home/partnerLogo/logo19.webp";
import Logo20 from "media/home/partnerLogo/logo20.webp";
export const PartnerData = {
    subtitle: "Our Partners",
    title: "Collaboration That Inspires",
    desc: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor arcu lectus mauris ut velit sit.",
    PartnerLogos: [
        { logo: Logo1.src },
        { logo: Logo2.src },
        { logo: Logo3.src },
        { logo: Logo4.src },
        { logo: Logo5.src },
        { logo: Logo6.src },
        { logo: Logo7.src },
        { logo: Logo8.src },
        { logo: Logo9.src },
        { logo: Logo10.src },
        { logo: Logo11.src },
        { logo: Logo12.src },
        { logo: Logo13.src },
        { logo: Logo14.src },
        { logo: Logo15.src },
        { logo: Logo16.src },
        { logo: Logo17.src },
        { logo: Logo18.src },
        { logo: Logo19.src },
        { logo: Logo20.src },
    ]
}


//Industries 
import Img01 from "media/home/industires/industy01.webp"
import Img02 from "media/home/industires/industy02.webp"
import Img03 from "media/home/industires/industy03.webp"
import Img04 from "media/home/industires/industy04.webp"
import Img05 from "media/home/industires/industy05.webp"
import Img06 from "media/home/industires/industy06.webp"
import Img07 from "media/home/industires/industy07.webp"
export const IndustriesData = {
    subtitle: "Our Industries",
    title: "Solutions Tailored to Your Industry ",
    desc: "Whatever your niche, we’ve got the expertise:",
    IndustryItem: [
        {
            title: "B2b Business",
            txt: "Increase leads and close deals with marketing strategies that work for complex sales cycles.",
            Img: Img01.src,
            url: "#",
        },
        {
            title: "Construction",
            txt: "Build trust and connect with clients through campaigns and websites designed for credibility.",
            Img: Img02.src,
            url: "#",
        },
        {
            title: "Education",
            txt: "Engage students, parents, and educators with SEO and marketing that inspire action.",
            Img: Img03.src,
            url: "#",
        },
        {
            title: "Events",
            txt: "Create unforgettable moments by driving attendance and boosting engagement.",
            Img: Img04.src,
            url: "#",
        },
        {
            title: "E-commerce",
            txt: "Maximize sales with high-converting websites and compelling campaigns",
            Img: Img04.src,
            url: "#",
        },
        {
            title: "Content Creator",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            Img: Img05.src,
            url: "#",
        },
        {
            title: "Automotive",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            Img: Img06.src,
            url: "#",
        },
        {
            title: "Spots",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            Img: Img07.src,
            url: "#",
        }
    ]
}

// Why Choose Us
export const ChooseUsData = {
    subtitle: "Why Choose Us",
    title: "Creating Impactful Solutions That Matter",
    desc: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor arcu lectus mauris ut velit sit.",
    Content1: [
        {
            title: "Expert Team",
            txt: "Strategists, designers, and developers who bring their A-game to every project."
        },
        {
            title: "Custom Solutions",
            txt: "Strategies designed around your unique goals and challenges."
        }
    ],
    Content2: [
        {
            title: "Proven Success",
            txt: "A track record of impactful projects across diverse industries."
        }
    ],
    Content3: [
        {
            title: "Client-First Approach",
            txt: "Collaboration and communication that put your vision at the forefront."
        },
        {
            title: "Lorem ipsum dolor sit amet",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
    ]

}


//Platforms 
import { DiscordIcon, FacebookIcon, InstagramIcon, RedditIcon, YoutubeIcon } from "@/src/app/app-constants";
export const PlatformsData = {
    subtitle: "Platforms We",
    title: "Platforms We Work With",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: ImgBg.src,
    SocailItems: [
        { name: "Instagram", link: "#", icon: <InstagramIcon /> },
        { name: "YouTube", link: "#", icon: <YoutubeIcon /> },
        { name: "Reddit", link: "#", icon: <RedditIcon /> },
        { name: "Facebook", link: "#", icon: <FacebookIcon /> },
        { name: "Discord", link: "#", icon: <DiscordIcon /> },
        { name: "Reddit", link: "#", icon: <RedditIcon /> },
        { name: "Facebook", link: "#", icon: <FacebookIcon /> },
        { name: "Discord", link: "#", icon: <DiscordIcon /> },
    ]
}

//Awards
import { ClutchLogo, TrustpilotLogo, GoogleLogo } from "@/src/app/app-constants";
export const AwardsData = {
    subtitle: "Our Awards",
    title: "Awards & Recognitions",
    desc: "Discover the accolades that highlight our commitment to innovation, creativity, and results-driven strategies in the ever-evolving landscape of social media marketing.",
    slides: [
        {
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            icon: <ClutchLogo />,

        },
        {
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            icon: <TrustpilotLogo />,

        },
        {
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            icon: <GoogleLogo />,

        },
        {
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            icon: <ClutchLogo />,

        },
        {
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            icon: <TrustpilotLogo />,

        },
        {
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            icon: <GoogleLogo />,

        },
        {
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            icon: <ClutchLogo />,

        },

    ]
}

// CTA  01
import ImgBg1 from "media/home/ctaBg1.webp"
export const CtaData01 = {
    title: "Strategic design solutions that fuel your bottom line.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: ImgBg1.src
}

//Testimonials

export const TestimonialData = {
    subtitle: "Happy Clients",
    title: "Hear It from Our Clients ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    Testslider: [
        {
            txt: "Digital Hive transformed our online presence. From zero visibility to ranking on the first page, they delivered beyond our expectations.",
            icon: <ClutchLogo />,
            namee: "Amanda T.",
            job: "Founder of BrightTech Solutions",
        },
        {
            txt: "Their team’s dedication and expertise are unmatched. Our sales have doubled since partnering with Digital Hive!",
            icon: <TrustpilotLogo />,
            namee: "James M.",
            job: "COO of NovaRetail Solutions",
        },
        {
            txt: "Digital Hive helped us exceed our targets with a comprehensive digital strategy. Highly recommended!",
            icon: <GoogleLogo />,
            namee: "Sarah K.",
            job: "MD at GreenWave Industries",
        },
        {
            txt: "Partnering with Digital Hive was the best decision for our brand’s growth. Their expertise is unparalleled.",
            icon: <TrustpilotLogo />,
            namee: "Tom L.",
            job: "CEO of BuildPro Solutions",
        },
        {
            txt: "Our online sales skyrocketed thanks to their incredible SEO and web design services!",
            icon: <ClutchLogo />,
            namee: "Emily R.",
            job: "Founder of StyleHive Boutique",
        }
    ]
}
// Call to Action

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Your Journey to Success Starts Now ",
    desc: "Your vision deserves a powerful digital presence. Let’s craft strategies that drive results and create stories worth sharing."
}

// Blgos
import IMG01 from "media/home/blogs/blog1.webp"
import IMG02 from "media/home/blogs/blog2.webp"
import IMG03 from "media/home/blogs/blog3.webp"
export const BlgosData = {
    subtitle: "Our Blogs",
    title: "Insights and Inspiration ",
    desc: "Stay ahead of the curve with expert tips and trends. Our blog delivers the latest on SEO, social media, web design, and more to fuel your growth.",
    BlogsData: [
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

}

// FAQs


export const FAQsData = {
    subtitle: "FAQs",
    title: "Frequently Asked Question?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    Fqaslist: [
        {
            title: "What services does Digital Hive offer? ",
            txt: "Digital Hive provides a comprehensive range of digital marketing and development services, including SEO, social media marketing, mobile app development, web design, and content marketing. We tailor our solutions to meet your business's specific needs."
        },
        {
            title: "How does Digital Hive ensure results for its clients? ",
            txt: "Our strategies are data-driven and goal-oriented. We focus on understanding your business objectives and delivering measurable results through customized solutions, ongoing optimization, and transparent reporting."
        },
        {
            title: "Can Digital Hive handle projects for small and large businesses? ",
            txt: "Yes, we work with businesses of all sizes, from startups to established enterprises. Our scalable solutions ensure that we meet your unique requirements and help you achieve growth."
        },
        {
            title: "What industries does Digital Hive specialize in? ",
            txt: "We serve various industries, including retail, technology, healthcare, education, and more. Our experience allows us to create effective strategies tailored to each sector's needs."
        },
        {
            title: "How can I get started with Digital Hive?",
            txt: "It's simple. Contact us through our website or give us a call to schedule a consultation. We’ll discuss your goals and create a customized plan to help your business thrive."
        }
    ]

}
// Follow US
export const FollowsData = {
    subtitle: "Follow US",
    title: "Social Media & Contact",
    desc: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor arcu lectus mauris ut velit sit.",
    FollowsItem: [
        { name: "Instagram", url: "#" },
        { name: "Reddit ", url: "#" },
        { name: "YouTube", url: "#" },
        { name: "Facebook", url: "#" },
        { name: "Discord", url: "#" },
    ]
}