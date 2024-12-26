//Banner
import BannerPoster from "media/innerservices/social-media-management/bannerImg.webp"

export const BannerData = {
    title: "Supercharge Your Brand with Social Media Advertising ",
    desc: "Is your social media strategy truly driving growth, or is it just another task on your to-do list? Let’s turn your platforms into powerful tools for engagement, visibility, and results. Because when done right, social media doesn’t just get noticed—it delivers real business impact.",
    video: "#",
    BannerPoster: BannerPoster.src
}



//Content Data
import ContentImg from "media/innerservices/social-media-management/Img01.webp"
export const ContentData = {
    maintitle: true,
    contentTitle: "Make Every Click Count with Infinitidigital ",
    contentTxt: (<>
        <p>Have you ever wondered why some ads captivate while others fade into the background? The secret lies in strategy. At Infinitidigital, we don’t just run campaigns; we craft journeys that turn curious clicks into loyal customers. Why stick to one platform when your audience lives across many? Whether it’s driving traffic on Facebook, starting trends on TikTok, or growing professional networks on LinkedIn, we craft strategies tailored to each platform’s unique advantages. </p>
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
            txt: "Struggling to stand out? We create visuals, videos, and messaging that stop scrolling thumbs and build lasting impressions",
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
            txt: "We were struggling to make an impact online until Infinitidigital came on board. Their Instagram strategy boosted engagement by 80%, and we started seeing results almost immediately.",
            icon: <ClutchLogo />,
            namee: "Sophia T.",
            job: "Marketing Manager, BrightLeaf Naturals",
        },
        {
            txt: "Our Facebook campaigns used to feel like throwing darts in the dark. Thanks to Infinitidigital, we saw a 60% increase in leads within weeks. These guys know their stuff!",
            icon: <TrustpilotLogo />,
            namee: "Josh B.",
            job: "Founder, EcoKart Solutions",
        },
        {
            txt: "IWe needed a fresh approach to reach Gen Z, and Infinitidigital delivered. Their TikTok campaign doubled our followers and sparked conversations we’d never seen.",
            icon: <GoogleLogo />,
            namee: "Elena C.",
            job: "Brand Manager, GlowVibe",
        },
        {
            txt: "Working with Infinitidigital was the best decision we made. Their personalized LinkedIn strategy brought us high-quality leads and positioned us as industry leaders.",
            icon: <Forbes />,
            namee: "Adam P.",
            job: "CEO, FutureEdge Innovations",
        },
        {
            txt: "Our collaboration with Infinitidigital connected us with the right influencers. In just a month, we gained over 500K impressions and saw direct sales growth.",
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
            title: ". How do you ensure my ads reach the right people?",
            txt: "Ever feel like your ads are being ignored? We don’t let that happen. By analyzing demographics, behaviors, and interests, we precisely target your ideal audience."
        },
        {
            title: "Can I really measure social media ROI?",
            txt: "Absolutely. Our performance reports break down key metrics like conversions, engagement, and cost per result—no fluff—just clear data to show what’s working."
        },
        {
            title: "What platforms do you recommend for my business? ",
            txt: "It depends on your goals! Want visual impact? Instagram’s your go-to. Need to reach professionals? LinkedIn. Our team will guide you based on your audience and objectives."
        },
        {
            title: "How long before I see results?",
            txt: "While some strategies show quick wins in weeks, social media is also about sustainable growth. We balance immediate impact with long-term success."
        },
        {
            title: "Do you handle content creation too?",
            txt: "Yes! From eye-catching visuals to persuasive copy, we handle everything to ensure your ads resonate and drive action."
        }
    ]

}
