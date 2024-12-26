//Banner
import BannerPoster from "media/innerservices/social-media-ads/bannerImg.webp"

export const BannerData = {
    title: "Social Media Advertising Services",
    desc: "Isn't it time to supercharge your online presence? We apply expert social media strategies to accelerate growth, increase local sales, and strengthen your brand’s image.",
    video: "#",
    BannerPoster: BannerPoster.src
}



//Content Data
import ContentImg from "media/innerservices/social-media-ads/Img01.webp"
import { MenuIcon } from "@/src/app/app-constants"
export const ContentData = {
    maintitle: true,
    contentTitle: "Accelerate Your Business Growth with Social Media Ads",
    contentTxt: (<>
        <p>Imagine your brand thriving in the world of social media—a space where every post, every campaign, and every interaction is designed to propel you toward success. Sounds great, right? That’s what we’re here to create: a powerful growth engine that transforms your online presence into a magnet for engagement, conversions, and measurable results.</p>
        <ul className="ContentUl">
            <li><span><MenuIcon /></span>Results-Driven Strategies </li>
            <li><span><MenuIcon /></span>Tailored Solutions </li>
            <li><span><MenuIcon /></span>Creative Excellence</li>
            <li><span><MenuIcon /></span>Proven Success</li>
            <li><span><MenuIcon /></span>Personalized Support</li>
        </ul>
    </>),
    img: ContentImg.src
}

// NewsLetter

import ImgBg from "media/components/newsLetterImg.gif"
export const NewsLetterData = {
    title: "What If Your Ads Reached the Right People Every Time? ",
    desc: "Are you tired of pouring resources into ads that don’t reach your ideal customers? Do not worry. With our targeted ad strategies, we’ll ensure your message connects with the people who matter most—every single time! ",
    img: ImgBg.src
}

//Table Content

export const TableContetData = {
    title: "Social Media Advertising with In Your Reach ",
    desc: "Elevate your brand with tailored social media ads to fit your goals and budget. Connect, engage, and grow—no matter the size of your business.",
    tabledata: {
        feature: [
            "Monthly Social Ad Spend with Network",
            "Account Setup Fee",
            "Platforms Included: Facebook & Instagram",
            "Additonal Social Networks (Twitter, LinkedIn, etc.)",
            "Advance Ad Placements within Network",
            "Initial Campaign Strategy",
            "Ad Creation & Development",
            "Mon-Fri Ad Monitoring",
            "Conversion Tracking Installation",
            "Dedicated Account Rep",
            "Geotargeting & Location Exclusions",
            "Results Analysis/Reporting",
            "Social Media Retargeting",
            "Video Ads (Provide Video or Purchase a Video Plan)",
            "Custom rule based bidding",
            "Landing Pages",
            "Up to two hours of consultation per month",
        ],
        good: [
            "$3500 to $9999",
            "$500 (Call us to waive)",
            "tick",
            "$500 (Call us to waive)",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
        ],
        better: [
            "$3500 to $9999",
            "$500 (Call us to waive)",
            "tick",
            "$500 (Call us to waive)",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
        ],
        best: [
            "$3500 to $9999",
            "$500 (Call us to waive)",
            "tick",
            "$500 (Call us to waive)",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
        ],
    },
};

//Two Box Data 
import TwoBoxImg from "media/innerservices/social-media-ads/twoBoxImage.webp";

export const TwoBoxData = {
    Box1: {
        title: "Reach the Right People with Every Click—Let’s Do It!",
        desc: "Stop guessing and start connecting! With our precise targeting strategies, every click brings you closer to the audience that matters most.",
        bgColor: "#9AFF35"
    },
    Box2: {
        TwoBoxImage: TwoBoxImg
    },
}

//Services
export const InnerServicesData = {
    subtitle: "Our Services",
    title: "Maximize the Impact of Your Ads with Infinitidigital",
    desc: "Imagine your ads doing more than just showing up—connecting, engaging, and converting effortlessly. At Infinitidigital, we craft smarter strategies that make every ad work harder for your success.",
    innerServItem: [
        {
            title: "Targeted Advertising That Connects",
            txt: "Imagine your message reaching the perfect audience every time. With precision targeting, we ensure your ads find the right people, sparking engagement and driving meaningful results.",
            url: "#",
        },
        {
            title: "Creative Campaigns That Captivate",
            txt: "Every great story starts with captivating visuals and compelling words. We design ads that don’t just stop the scroll—they inspire action and leave a lasting impression.",
            url: "#",
        },
        {
            title: "Data-Driven Strategies That Deliver",
            txt: "Numbers tell a story, too, and we use them to guide every move. By analyzing insights, we optimize your campaigns to deliver results that truly matter—more clicks, conversions, and ROI.",
            url: "#",
        },
    ]
}

//Content Data
import ContentImg1 from "media/innerservices/social-media-ads/Img02.webp"
export const ContentData1 = {
    maintitle: true,
    contentTitle: "Grow Your Brand, One Click at a Time!",
    contentTxt: (<>
        <p>Social media is more than just posts—it’s a powerful platform to build your brand, connect with your audience, and drive real results. Let Infinitidigital help you turn followers into customers with campaigns that deliver measurable success.</p>
        <p className="boldFont">Social Media That Works for You</p>
        <p>
            <strong>Smart Targeting:</strong> <br />Reach the right audience with precision.<br />
            <strong>Engaging Content:</strong><br />Posts that spark conversations and drive loyalty.<br />
            <strong>ROI-Focused:</strong><br />Every campaign is optimized for maximum impact.<br />
            <strong>Tailored Solutions:</strong><br />Strategies designed to match your unique goals.<br />
        </p >
    </>),
    img: ContentImg1.src
}
//Platforms 
import { DiscordIcon, FacebookIcon, InstagramIcon, RedditIcon, YoutubeIcon } from "@/src/app/app-constants";
export const PlatformsData = {
    subtitle: "Platforms We Work With",
    title: "Connecting You to the Right Ones!",
    desc: "Expand your brand’s reach across the platforms that matter most. From Reddit to YouTube, we’ll help you connect, engage, and grow where your audience lives.",
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

//Testimonials

import { ClutchLogo, TrustpilotLogo, GoogleLogo, Forbes, Upcity } from "@/src/app/app-constants";
export const TestimonialData = {
    subtitle: "Happy Clients",
    title: "What Our Clients Say About Our Mobile App Solutions",
    desc: "At Inifnitidigital, client success is at the heart of everything we do. From transforming visibility to driving measurable growth, we’ve helped businesses across industries achieve exceptional results.",
    Testslider: [
        {
            txt: "Infinitidigital transformed our social media presence. Their targeted ad campaigns helped us double our online sales in three months! The team is creative, responsive, and truly understands how to connect with the right audience.",
            icon: < ClutchLogo />,
            namee: "Sarah P.",
            job: "Marketing Director at GlowFashion",
        },
        {
            txt: "We struggled to generate leads, but Infinitidigital’s social media advertising services turned things around. Their data-driven approach and tailored strategies increased engagement by 40% with measurable conversion boosts. I highly recommend them!",
            icon: <TrustpilotLogo />,
            namee: "James R.",
            job: "CEO of ApexTech Solutions",
        },
        {
            txt: "Working with Infinitidigital was the best decision for our local business. Their ads brought more foot traffic to our café than we imagined possible. Their team’s creativity and precision are unmatched!",
            icon: <GoogleLogo />,
            namee: "Emily T.",
            job: "Owner of Bean Haven Café",
        },
        {
            txt: "Infinitidigital’s expertise in social media advertising is phenomenal. They delivered a campaign that grew our following and brought in high-quality leads. Their ability to track performance and refine strategies is a game-changer.",
            icon: <Forbes />,
            namee: "Mark L.",
            job: "Sales Manager at Visionary Tech",
        },
        {
            txt: "As a content creator, I needed a team that understood my audience. Infinitidigital’s ads boosted my visibility and helped me land sponsorships I never thought possible. They made my brand shine!",
            icon: <Upcity />,
            namee: "Rachel M.",
            job: "Founder of InspireWithRachel",
        }
    ]
}

// Call to Action

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Connect, Convert, and Grow with Infinitidigital",
    desc: "Imagine reaching the right audience at the perfect moment—our social media ads make it happen. From sparking conversations to driving conversions, we help your brand grow effortlessly. Want to see how? "
}

// Follow US
export const FollowsData = {
    subtitle: "Follow US",
    title: "Stay Connected Across Platforms",
    desc: "Your audience is everywhere, and so are we. Whether you’re on Instagram, Reddit, YouTube, Facebook, or Discord, our tailored strategies ensure your brand engages where it matters most. Connect, interact, and grow with us.",
    FollowsItem: [
        { name: "Instagram", url: "#" },
        { name: "Reddit ", url: "#" },
        { name: "YouTube", url: "#" },
        { name: "Facebook", url: "#" },
        { name: "Discord", url: "#" },
    ]
}

// Blgos
import IMG01 from "media/home/blogs/blog1.webp"
import IMG02 from "media/home/blogs/blog2.webp"
import IMG03 from "media/home/blogs/blog3.webp"
export const BlgosData = {
    subtitle: "Our Blogs",
    title: "Stay Inspired with Our Latest Insights",
    desc: "Explore our latest blogs and learn how we use expert digital marketing strategies to help businesses grow, engage, and succeed.",
    BlogsData: [
        {
            title: "Hear From Our Clients",
            date: "24 August, 2024",
            time: "26 min",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod",
            category: "Paid Social Strategies",
            img: IMG01.src,
        },
        {
            title: "Hear From Our Clients",
            date: "24 August, 2024",
            time: "26 min",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod",
            category: "The ROI of Social Ads",
            img: IMG02.src,
        }, {
            title: "Hear From Our Clients",
            date: "24 August, 2024",
            time: "26 min",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod",
            category: "Social Media Advertising",
            img: IMG03.src,
        }
    ]

}



// FAQs


export const FAQsData = {
    subtitle: "FAQs",
    title: "Frequently Asked Question?",

    Fqaslist: [
        {
            title: "What platforms do you use for social media advertising?",
            txt: "We advertise on platforms like Facebook, Instagram, YouTube, TikTok, Reddit, and LinkedIn. Each strategy is tailored to fit the unique dynamics of your audience on these platforms."
        },
        {
            title: "How does Infinitidigital ensure my ads reach the right audience? ",
            txt: "We use advanced targeting tools to identify and engage your ideal customers based on their demographics, interests, behaviors, and online activity. This ensures your ads resonate with the people who matter most to your business."
        },
        {
            title: "How long does social media advertising take to see results?",
            txt: "Many clients see increased engagement and traffic within the first 2-4 weeks. Consistent campaigns over 2-3 months usually yield the best results for significant ROI and conversions."
        },
        {
            title: "Can social media advertising work for small businesses?",
            txt: "Absolutely! Our flexible strategies are designed to fit businesses of all sizes. Whether you’re a startup looking to build awareness or a small business aiming to drive local sales, we’ll create campaigns that deliver results."
        },
        {
            title: "How do you measure the success of a social media advertising campaign?",
            txt: "We track key performance metrics such as impressions, clicks, conversions, and ROI. Our detailed reports provide clear insights into what’s working and how we’re optimizing your campaigns for even better results."
        }
    ]

}