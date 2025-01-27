//Banner
import BannerPoster from "media/innerservices/social-media-management/bannerImg.webp"

export const BannerData = {
    title: "Supercharge Your Brand with Social Media Advertising ",
    desc: "Is your social media strategy truly driving growth, or is it just another task on your to-do list? Let’s turn your platforms into powerful tools for engagement, visibility, and results. Because when done right, social media doesn’t just get noticed—it delivers real business impact.",
    video: "",
    BannerPoster: BannerPoster.src
}



//Content Data
import ContentImg from "media/innerservices/social-media-management/Img01.webp"
export const ContentData = {
    maintitle: true,
    contentTitle: "Make Every Click Count with Infinitidigital ",
    contentTxt: (<>
        <p>Make Every Click Count with Infinitidigital you ever wondered why some ads captivate while others fade into the background? The secret lies in strategy. At Infinitidigital, we don’t just run campaigns; we craft journeys that turn curious clicks into loyal customers.</p>
        <p>Why stick to one platform when your audience lives across many? Let’s meet your audience where they are. Ready to connect with the right people at the right time? Let’s make it happen.</p>
    </>),
    img: ContentImg.src
}

// NewsLetter

import ImgBg from "media/components/newsLetterImg.gif"
export const NewsLetterData = {
    title: "Tailored Strategies for Every Platform",
    desc: "Not all platforms are created equal, right? What works on Instagram might flop on LinkedIn. That’s why our approach is customized for each channel. Want to ride the viral wave on TikTok or position your brand as a thought leader on LinkedIn? We’ll make sure your message hits home.",
    img: ImgBg.src
}


//Services

export const ServicesData = {
    subtitle: "Our Services",
    title: "Services Built to Deliver",
    desc: "Social media isn’t just about posting—it’s about connecting. Here’s how we help you dominate the digital landscape:",
    ServicesItem: [
        {
            title: (<>Social <br />Media Marketing</>),
            txt: "Is your brand getting the attention it deserves? Our campaigns boost visibility and foster authentic engagement to turn followers into fans.",
            url: "#",
        },
        {
            title: (<>Content <br />Creation</>),
            txt: "Struggling to stand out? We create visuals, videos, and messaging that stop scrolling thumbs and build lasting impressions.",
            url: "#",
        },
        {
            title: (<>Scheduling & <br />Publishing</>),
            txt: "Timing is everything, isn’t it? We ensure your posts go live when your audience is most active, maximizing visibility and engagement.",
            url: "#",
        },
        {
            title: (<>Community <br />Engagement</>),
            txt: "How do you build trust online? By listening and responding. We manage your conversations, ensuring every interaction strengthens relationships.",
            url: "#",
        },
        {
            title: (<>Social <br />Media Audits</>),
            txt: "Are you leaving opportunities on the table? Let’s uncover hidden growth potential and optimize your strategies for better results.",
            url: "#",
        },
        {
            title: (<>Performance <br />Reporting</>),
            txt: "Numbers don’t lie. We deliver easy-to-understand reports that track engagement, reach, and ROI—so you always know what’s working.",
            url: "#",
        },
        {
            title: (<>Ad Campaign <br />Management</>),
            txt: "Why waste time and money on ads that don’t convert? From planning to execution, we ensure your campaigns drive results.",
            url: "#",
        },
        {
            title: (<>Influencer <br />Collaboration</>),
            txt: "Want your brand to reach new heights? We connect you with influencers who align with your values and audience for impactful partnerships.",
            url: "#",
        }

    ]
}

//Two Box Data 
import TwoBoxImg from "media/innerservices/social-media-management/twoBoxImage.webp";

export const TwoBoxData = {
    Box1: {
        title: "Bring Your Brand to Life with Engaging Social Media Advertising",
        desc: "Transform your digital presence with tailored ad strategies that drive engagement, build connections, and deliver measurable results for your business. Why settle for ordinary when extraordinary is just one campaign away?",
        bgcolor: "#7635FF",
    },
    Box2: {
        TwoBoxImage: TwoBoxImg
    },
}

//Testimonials
import { ClutchLogo, TrustpilotLogo, GoogleLogo, Forbes, Upcity } from "@/src/app/app-constants";
export const TestimonialData = {
    subtitle: "Happy Clients",
    title: "What Our Clients Are Saying",
    desc: "At Inifnitidigital, client success is at the heart of everything we do. From transforming visibility to driving measurable growth, we’ve helped businesses across industries achieve exceptional results.",
    Testslider: [
        {
            txt: "We were struggling to make an impact online until Infinitidigital came on board. Their Instagram strategy transformed our engagement, resulting in an 80% boost. The results were almost immediate, leading to a noticeable increase in brand awareness. Infinitidigital really understood our needs and tailored their approach to fit them perfectly.",
            icon: <ClutchLogo />,
            namee: "Sophia T.",
            job: "Marketing Manager, BrightLeaf Naturals",
        },
        {
            txt: "Our Facebook campaigns felt like throwing darts in the dark before Infinitidigital joined us. They implemented strategies that led to a remarkable 60% increase in leads within just weeks. The clarity and focus they provided transformed our outreach. It's clear that these guys truly understand the intricacies of digital marketing. We're thrilled with the results!",
            icon: <TrustpilotLogo />,
            namee: "Josh B.",
            job: "Founder, EcoKart Solutions",
        },
        {
            txt: "To connect with Gen Z, we needed a fresh approach, and Infinitidigital delivered exactly that. Their TikTok campaign doubled our followers and ignited conversations we’d never experienced before. The creativity and innovation they brought to the table were remarkable. We’re excited about the new engagement and vibrant community they helped foster.",
            icon: <GoogleLogo />,
            namee: "Elena C.",
            job: "Brand Manager, GlowVibe",
        },
        {
            txt: "Working with Infinitidigital was one of the best decisions for our business. Their personalized LinkedIn strategy significantly elevated our brand's presence, bringing in high-quality leads and positioning us as industry leaders. The professional approach and insight they offered were invaluable. We're grateful for their partnership in driving our growth forward!",
            icon: <Forbes />,
            namee: "Adam P.",
            job: "CEO, FutureEdge Innovations",
        },
        {
            txt: "Our collaboration with Infinitidigital was a game-changer. They connected us with the right influencers, and we gained over 500K impressions in just a month. This partnership resulted in a significant spike in direct sales, transforming our marketing strategy. Their expertise in influencer marketing truly made a difference, and we're delighted with the outcomes.",
            icon: <Upcity />,
            namee: "Lila  W.",
            job: "Social Media Manager, StyleSphere",
        }
    ]
}



// FAQs


export const FAQsData = {
    subtitle: "FAQs",
    title: "Frequently Asked Question?",

    Fqaslist: [
        {
            title: "How do you ensure my ads reach the right people?",
            txt: "We thoroughly analyze demographics and interests to reach your target audience effectively. This strategic targeting enhances your ads' visibility and engagement. By focusing on your ideal customers, we improve interaction rates. Our goal is to maximize the impact of your advertising."
        },
        {
            title: "Can I really measure social media ROI?",
            txt: "Yes, measuring social media ROI is not only possible but crucial for your strategy. We provide detailed performance reports highlighting key metrics such as conversions and engagement. This ensures you understand what’s working and what isn’t. Our clear data empowers you to make informed decisions."
        },
        {
            title: "What platforms do you recommend for my business? ",
            txt: "The best platforms depend on your specific business objectives and audience. If visual impact is key, Instagram is a top choice. Alternatively, if you're targeting professionals, LinkedIn would be more suitable. We work closely with you to identify the platforms that align with your goals."
        },
        {
            title: "How long before I see results?",
            txt: "Some strategies may yield quick wins in just a few weeks. However, social media is also about fostering long-term relationships and growth. We emphasize both immediate results and sustainable success to benefit your business. Patience and consistent effort are essential for lasting impact."
        },
        {
            title: "Do you handle content creation too?",
            txt: "Absolutely. We manage all aspects of content creation for you. Our team creates engaging visuals and compelling copy to connect with your audience. This comprehensive service ensures your ads drive effective action so you can focus on other important areas of your business with peace of mind."
        }
    ]

}
