//Banner
import BannerPoster from "media/services/social-media-marketing/posterImg.webp"
export const BannerData = {
    subtitle: "No. 1 Social Media Marketing Company in the U.S.",
    title: "An Agency You Can Trust",
    desc: "Struggling to cut through the noise on social media? You’re not alone. At Infinitidigital, we create strategies that don’t just get you noticed—they get you results.",
    video: "https://player.vimeo.com/progressive_redirect/playback/1039775965/rendition/720p/file.mp4?loc=external&log_user=0&signature=27eb31d173fb744c4981bffe218fca1bc13be18f86f4fea3e84d75885ed500a7",
    BannerPoster: BannerPoster.src
}
//Services
export const SolData = {
    subtitle: "Our Solutions",
    title: "Solutions That Succeed",
    desc: "We deliver targeted strategies that meet your unique business goals. Whether you focus on growing visibility, fostering customer relationships, or driving conversions, we have a solution for every stage of your social media journey.",
    SolItem: [
        {
            title: "Awareness",
            txt: "Engage the right audience effectively with tailored strategies for memorable brand positioning.",
            url: "#",
            bgcolor: "#6A9AFE",
        },
        {
            title: "Engagement",
            txt: "Utilize interactive content to foster meaningful interactions and enhance brand visibility online.",
            url: "#",
            bgcolor: "#10FF7F",
        },
        {
            title: "Lead Generation",
            txt: "Capture high-quality leads with targeted ads and optimized landing pages for effective solutions.",
            url: "#",
            bgcolor: "#FFD600",
        },
        {
            title: "Brand Loyalty",
            txt: "Build lasting customer relationships through personalized messaging and exclusive loyalty offerings.",
            url: "#",
            bgcolor: "#FF7400",
        },
        {
            title: "Community Management",
            txt: "Create thriving online communities with active involvement and meaningful two-way interactions.",
            url: "#",
            bgcolor: "#25F4EE",
        },
        {
            title: "Conversion Optimization",
            txt: "Enhance user engagement by refining digital journeys to drive actions and measurable results.",
            url: "#",
            bgcolor: "#9756E2",
        },
        {
            title: "Reputation Management",
            txt: "Protect your brand’s image by monitoring mentions and ensuring a trustworthy online presence.",
            url: "#",
            bgcolor: "#F03C3F",
        },
        {
            title: "Retargeting Campaigns",
            txt: "Reconnect with potential customers through targeted ads that remind them of your offerings.",
            url: "#",
            bgcolor: "#6A99FE",
        }
    ]
}
// CTA 
import ImgBg from "media/services/social-media-marketing/ctaBg.webp"
export const CtaData = {
    title: "Tired Of One-Size-Fits-All Solutions? ",
    desc: "We get it. At Infinitidigital, we believe every business deserves a strategy that is as unique as its goals. Our customized packages are built to fit your vision, audience, and budget—so you get the desired results without paying for what you don’t.",
    img: ImgBg.src
}

// Opportunities
import OppImg01 from "media/services/social-media-marketing/opportunities/IMG01.webp"
import OppImg02 from "media/services/social-media-marketing/opportunities/IMG02.webp"
import OppImg03 from "media/services/social-media-marketing/opportunities/IMG03.webp"
import OppImg04 from "media/services/social-media-marketing/opportunities/IMG04.webp"

export const OpportunitiesData = {
    subtitle: "Our Opportunities",
    title: "Maximize Your Marketing Potential",
    desc: "Wondering what’s possible for your brand? With our expertise, the opportunities are endless. We offer a comprehensive suite of social media solutions designed to maximize your reach and impact.",
    OpportunitiesItem: [
        {
            title: (<>Social Media<br /> Marketing</>),
            txt: "Turn your social platforms into growth engines with engaging, tailored content that resonates.",
            Img: OppImg01.src,
            url: "#",
        },
        {
            title: (<>Influencer<br /> Marketing</>),
            txt: "Want to yoke the power of trusted voices? We connect you with influencers who amplify your brand’s reach and credibility.",
            Img: OppImg02.src,
            url: "#",
        },
        {
            title: (<>YouTube<br /> Optimization</>),
            txt: "Struggling to get eyes on your video content? Our expert strategies help you get found and drive engagement on YouTube.",
            Img: OppImg03.src,
            url: "#",
        },
        {
            title: (<>Search Engine<br /> Optimization</>),
            txt: "Get seen by your audience on search engines and social platforms with SEO strategies that work.",
            Img: OppImg04.src,
            url: "#",
        }

    ]
}
// Pricing
export const PriceData = {
    subtitle: "Our Pricing",
    title: "Affordable Solutions That Deliver Real Results",
    desc: "How much should you invest in social media success? The answer depends on your goals, and we have a solution for every growth stage.",
    PriceItem: [
        {
            bgColor: "#7635FF",
            packagename: "Launch Package",
            titletxt: "Kickstart Your Brand’s Digital Presence",
            price1: "1250",
            price2: "1750",
            price3: "2250",
            discount1: "Monthly",
            discount2: (<>Quarterly <span>(Saves 16%)</span></>),
            discount3: (<> Annually <span>(Saves 28%)</span></>),
            txt: "Ideal for businesses looking to establish a strong presence and build a foundational strategy based on data-backed insights.",
            bodyPoints: [
                {
                    title: "Included Services",
                    points: [
                        "08 High-Impact Static Posts",
                        "Immersive Stories",
                        "02 GIF/Carousel Post",
                        "05 Reels or TikTok-style Short Video",
                        "Branding & Design Consultation",
                        "Basic Hashtag Strategy",
                        "Social Platform Setup & Optimization",
                    ]
                },
                {
                    title: "Platform Management",
                    points: [
                        "Monthly Content Scheduling",
                        "Community Engagement",
                        "Page Optimization"
                    ]
                },
                {
                    title: "Platforms Included",
                    points: [
                        "Facebook",
                        "Instagram",
                    ]
                }
            ],
            para: "",
        },
        {
            bgColor: "#FF6987",
            packagename: "Elevate Package ",
            titletxt: "Take Your Brand to the Next Level",
            price1: "1750",
            price2: "1470",
            price3: "1890",
            discount1: "Monthly",
            discount2: (<>Quarterly <span>(Saves 16%)</span></>),
            discount3: (<> Annually <span>(Saves 28%)</span></>),
            txt: "For businesses ready to grow their online presence and achieve measurable results using a more analytical and data-driven approach.",
            bodyPoints: [
                {
                    title: "Included Services",
                    points: [
                        "10 High-Impact Static Posts",
                        "Immersive Stories",
                        "05 GIF/Carousel Posts",
                        "Branding & Design Consultation",
                        "Advanced Hashtag & SEO Strategy*",
                        "UGC (User-Generated Content) Strategy**",
                        "Social Platform Setup & Optimization",
                        "Social Media Contest or Giveaway",
                    ]
                },
                {
                    title: "Platform Management",
                    points: [
                        "Monthly Content Scheduling & Publishing",
                        "Advanced Community Engagement",
                        "Page Optimization & A/B Testing",
                    ]
                },
                {
                    title: "Advanced Analytics & Reporting",
                    points: [
                        "Monthly Performance Insights",
                        "Competitor Benchmarking",
                    ]
                },
                {
                    title: "Platforms Included",
                    points: [
                        "Facebook",
                        "Instagram",
                        "LinkedIn or X (Optional)",
                    ]
                }
            ],
            bodyNote: [
                {
                    para: "* Please note that this includes only the SEO strategy, not the implementation of SEO services."
                },
                {
                    para: "** Please note that this includes only the UGC strategy, not the creation or management of user-generated content."
                }
            ],

        },
        {
            bgColor: "#9AFF35",
            packagename: "Dominate Package ",
            titletxt: "Achieve Social Media Leadership",
            price1: "2250",
            price2: "1260",
            price3: "1620",
            discount1: "Monthly",
            discount2: (<>Quarterly <span>(Saves 16%)</span></>),
            discount3: (<> Annually <span>(Saves 28%)</span></>),
            txt: "For brands aiming to completely dominate their niche and make data-informed decisions to grow their audience and convert leads into loyal customers.",
            bodyPoints: [
                {
                    title: "Included Services",
                    points: [
                        "15 High-Impact Static Posts",
                        "Engaging Stories",
                        "05 GIF/Carousel Posts",
                        "15 Reels or TikTok-style Short Videos",
                        "Branding & Design Consultation",
                        "Advanced Hashtag & SEO Strategy*",
                        "UGC (User-Generated Content) Strategy**",
                        "Social Platform Setup & Optimization",
                        "Social Media Contest or Giveaway",
                        "Influencer/Brand Ambassador Outreach Strategy***",
                        "Seasonal Campaigns ",
                    ]
                },
                {
                    title: "Platform Management",
                    points: [
                        "Bi-Weekly Content Scheduling & Publishing",
                        "24/7 Community Engagement",
                        "Full Social Page Optimization",
                    ]
                },
                {
                    title: "Advanced Analytics & Reporting",
                    points: [
                        "Bi-Weekly Performance Insights",
                        "Competitor and Industry Analysis",
                        "Lead Generation & Conversion Tracking",
                    ]
                },
                {
                    title: "Platforms Included",
                    points: [
                        "Facebook",
                        "Instagram",
                        "LinkedIn",
                        "Twitter",
                        "TikTok,",
                        "Pinterest or Snapchat (Optional Add-On)"
                    ]
                }
            ],
            bodyNote: [
                {
                    para: "* Please note that this includes only the SEO strategy, not the implementation of SEO services."
                },
                {
                    para: "** Please note that this includes only the UGC strategy, not the creation or management of user-generated content."
                },
                {

                    para: "*** Please note that this includes only the outreach strategy; execution and management of influencer/brand ambassador partnerships are offered as separate services."
                }
            ],

        },

    ]
};

// CTA  Pink
import ImgBgPink from "media/services/social-media-marketing/ctaBgPink.webp"
export const CtaPinkData = {
    title: "Looking To Create Strategies That Deliver? ",
    desc: "Want to deliver the best results? At Infinitidigital, we tailor every campaign to your audience and goals to ensure you see measurable results—no matter your field. Whether you want to build brand awareness, foster relationships, or increase sales, we ensure your business stands out effectively. ",
    img: ImgBgPink.src
}

// Content Section
import ContentImage from "media/services/social-media-marketing/ContentImage.webp"
export const ContentData = {
    subtitle: "Why Choose Us?",
    title: "Outshine Your Competitors with Creative, Results-Driven Strategies",
    desc: (<>
        <p>Why settle for average when your brand can shine? At Infinitidigital, we combine creativity, strategy, and real-world results to help you dominate the competition.</p>
        <p>Innovative solutions are essential to staying ahead of trends with effective strategies.If you’re wondering how to connect with your audience, we craft content that speaks to their needs and interests. We don’t guess when it comes to measuring success—we track everything meticulously. Our reports show exactly how your campaigns perform and where we’re driving growth.</p>
    </>
    ),
    img: ContentImage.src

}
// Latest Work
import Img01 from "media/services/social-media-marketing/latestwork/1.webp"
import Img02 from "media/services/social-media-marketing/latestwork/2.webp"
import Img03 from "media/services/social-media-marketing/latestwork/3.webp"
import Img04 from "media/services/social-media-marketing/latestwork/4.webp"
import Img05 from "media/services/social-media-marketing/latestwork/5.webp"
import Img06 from "media/services/social-media-marketing/latestwork/6.webp"
import Img07 from "media/services/social-media-marketing/latestwork/7.webp"
import Img08 from "media/services/social-media-marketing/latestwork/8.webp"
import Img09 from "media/services/social-media-marketing/latestwork/9.webp"
import Img10 from "media/services/social-media-marketing/latestwork/10.webp"
import Img11 from "media/services/social-media-marketing/latestwork/11.webp"
import Img12 from "media/services/social-media-marketing/latestwork/12.webp"
import Img13 from "media/services/social-media-marketing/latestwork/13.webp"
import Img14 from "media/services/social-media-marketing/latestwork/14.webp"
import Img15 from "media/services/social-media-marketing/latestwork/15.webp"
import Img16 from "media/services/social-media-marketing/latestwork/16.webp"
import Img17 from "media/services/social-media-marketing/latestwork/17.webp"
import Img18 from "media/services/social-media-marketing/latestwork/18.webp"
import Img19 from "media/services/social-media-marketing/latestwork/19.webp"
import Img20 from "media/services/social-media-marketing/latestwork/20.webp"
import Img21 from "media/services/social-media-marketing/latestwork/21.webp"
import Img22 from "media/services/social-media-marketing/latestwork/22.webp"
import Img23 from "media/services/social-media-marketing/latestwork/23.webp"
import Img24 from "media/services/social-media-marketing/latestwork/24.webp"
import Img25 from "media/services/social-media-marketing/latestwork/25.webp"
import Img26 from "media/services/social-media-marketing/latestwork/26.webp"
import Img27 from "media/services/social-media-marketing/latestwork/27.webp"
import Img28 from "media/services/social-media-marketing/latestwork/28.webp"
import Img29 from "media/services/social-media-marketing/latestwork/29.webp"
import Img30 from "media/services/social-media-marketing/latestwork/30.webp"
import Img31 from "media/services/social-media-marketing/latestwork/31.webp"
import Img32 from "media/services/social-media-marketing/latestwork/32.webp"
import Img33 from "media/services/social-media-marketing/latestwork/33.webp"
import Img34 from "media/services/social-media-marketing/latestwork/34.webp"
import Img35 from "media/services/social-media-marketing/latestwork/35.webp"
import Img36 from "media/services/social-media-marketing/latestwork/36.webp"


export const LastestWorkData = {
    subtitle: "Our Latest Work",
    title: "Driving Results That Speak for Themselves",
    desc: "How do you know we deliver? Just look at the success stories.From viral campaigns to measurable ROI, our work speaks louder than words.At Infinitidigital, we don’t just discuss results—we show them.",
    LastestWorkItem1: [
        { img: Img01.src },
        { img: Img02.src },
        { img: Img03.src },
        { img: Img04.src },
        { img: Img05.src },
        { img: Img06.src },
        { img: Img07.src },
        { img: Img08.src },
        { img: Img09.src },
        { img: Img10.src },
        { img: Img11.src },
        { img: Img12.src },
    ],
    LastestWorkItem2: [
        { img: Img13.src },
        { img: Img14.src },
        { img: Img15.src },
        { img: Img16.src },
        { img: Img17.src },
        { img: Img18.src },
        { img: Img19.src },
        { img: Img20.src },
        { img: Img21.src },
        { img: Img22.src },
        { img: Img23.src },
        { img: Img24.src },
    ],
    LastestWorkItem3: [
        { img: Img25.src },
        { img: Img26.src },
        { img: Img27.src },
        { img: Img28.src },
        { img: Img29.src },
        { img: Img30.src },
        { img: Img31.src },
        { img: Img32.src },
        { img: Img33.src },
        { img: Img34.src },
        { img: Img35.src },
        { img: Img36.src },
    ]

}
//Testimonials
import { ClutchLogo, TrustpilotLogo, GoogleLogo, Forbes, Upcity } from "@/src/app/app-constants";
export const TestimonialData = {
    subtitle: "Our Testimonials",
    title: "Hear From Our Happy Clients",
    desc: "Real results. Real stories. See how businesses like yours have transformed their social media presence with our innovative solutions.",
    Testslider: [
        {
            txt: "Infinitidigital completely revamped our social media strategy, and the results have been incredible! Our follower count skyrocketed, and engagement levels are at an all-time high. Their creative campaigns not only capture our brand's voice but also connect deeply with our audience. We couldn't be happier with the impact they’ve made!",
            icon: < ClutchLogo />,
            namee: "Sophia R.",
            job: "Founder of Bakery Owner",
        },
        {
            txt: "Infinitidigital transformed our social media presence. Their posts are engaging, creative, and perfectly aligned with our brand. We’ve seen a massive uptick in followers, likes, and, most importantly, sales!",
            icon: < TrustpilotLogo />,
            namee: "Michael T.",
            job: "Founder of Fitness Entrepreneur",
        },
        {
            txt: "Social media was always overwhelming until Infinitidigital took the reins. Their strategy boosted our engagement rates and created a loyal community around our brand. They’ve been a lifesaver!",
            icon: <GoogleLogo />,
            namee: "Emma L.",
            job: "Owner at E-Commerce Business",
        },
        {
            txt: "Infinitidigital’s social media campaigns are next-level. Their creativity and attention to detail brought our brand to life online, helping us connect with a wider audience. We’re thrilled with the results!",
            icon: < Forbes />,
            namee: "James K.",
            job: "CEO of Real Estate Agency",
        },
        {
            txt: "From content creation to ad strategy, Infinitidigital does it all. Our social media channels now look professional and are driving traffic to our website like never before. Their expertise is unmatched!",
            icon: <Upcity />,
            namee: "Emily R.",
            job: "Founder of StyleHive Boutique",
        }
    ]
}

// Influencers

import KyleecampBell from "media/services/social-media-marketing/testimonial/@kyleecampbell.webp"
import JulesJessica from "media/services/social-media-marketing/testimonial/@julesjessica.webp"
import ListingWithLexi from "media/services/social-media-marketing/testimonial/@ListingWithLexi.webp"
import JaimeGabaldoni from "media/services/social-media-marketing/testimonial/@jaime_gabaldoni.webp"
import BlissedHappiness from "media/services/social-media-marketing/testimonial/@blissedhappiness.webp"
import PbadvanceDaeshetics from "media/services/social-media-marketing/testimonial/@pbadvancedaesthetics.webp"
import OdyssEyeLixir from "media/services/social-media-marketing/testimonial/@odysseyelixir.webp"
import Cece_Barnes from "media/services/social-media-marketing/testimonial/@cece_barnes.webp"
import JuliAkhara from "media/services/social-media-marketing/testimonial/@juliakhara.webp"
export const CreativesData = {
    subtitle: "Delighted Influencers",
    title: "Stand Out with Bold, Engaging Creatives",
    desc: "Capture attention and outshine competitors with creative content that resonates. Our dynamic visuals and innovative storytelling are designed to make your brand unforgettable, connecting you with audiences in a way that drives engagement and builds loyalty.",
    TestimonialItem: [
        {
            title: "@kyleecampbell",
            followers: "2.5M followers",
            img: KyleecampBell.src,
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025063978/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d283dfca3cedf261ae45bed8cab7851db1615720816cfaf43f1e47bb014df32c"
        },
        {
            title: "@julesjessica",
            followers: "2.5M followers",
            img: JulesJessica.src,
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066117/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8d1a86947dcae31184561ad5f8fb908d67055513b640b4c40fd7312534178fb0"
        },
        {
            title: "@ListingWithLexi",
            followers: "2.5M followers",
            img: ListingWithLexi.src,
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066183/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9ffac14f02ce8697f6db1f3f70b5d434a23d5fdf1e9412a5f47571de8e9ec230"
        },
        {
            title: "@jaime_gabaldoni",
            followers: "2.5M followers",
            img: JaimeGabaldoni.src,
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066071/rendition/1080p/file.mp4?loc=external&log_user=0&signature=bad7c7d8ee92a5255fac15114d27d741de6ab32bf6d704a69f102ba25d8091fa"
        },
        {
            title: "@blissedhappiness",
            followers: "2.5M followers",
            img: BlissedHappiness.src,
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066007/rendition/720p/file.mp4?loc=external&log_user=0&signature=c3b1fd513e8b3d4de419bb2dbdfa09b1204254989f6f1b3da8373382ea13b6ea"
        },
        {
            title: "@pbadvancedaesthetics",
            followers: "2.5M followers",
            img: PbadvanceDaeshetics.src,
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066285/rendition/720p/file.mp4?loc=external&log_user=0&signature=b066eb183249e621627614175fe47e0f457c98a45846a87ff47ce719a6e66027"
        },
        {
            title: "@odysseyelixir",
            followers: "2.5M followers",
            img: OdyssEyeLixir.src,
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066238/rendition/1080p/file.mp4?loc=external&log_user=0&signature=46c97b9249be10bc57cd45bad5b1ce675c6e10b284f8a7f0cf54d4e91953ac61"
        },
        {
            title: "@cece_barnes",
            followers: "2.5M followers",
            img: Cece_Barnes.src,
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066042/rendition/720p/file.mp4?loc=external&log_user=0&signature=c0d7439d62c18c7485d83502527f1ea62fe0b02d9e3afd2ca667b378bbfa0cf9"
        },
        {
            title: "@juliakhara",
            followers: "2.5M followers",
            img: JuliAkhara.src,
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066139/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3cb38a1ecd6989c375ae7cf2d0734c140ca327551422edce447ebddd1174c0e3"
        },

    ]
}


// Call to Action

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Make Your Social Media Dreams Come True",
    desc: "Have questions, or are you ready to take the next step? Let’s collaborate to create a social media strategy that drives growth and delivers results."
}


// FAQs
export const FAQsData = {
    subtitle: "FAQs",
    title: "Your Questions, Answered",
    Fqaslist: [
        {
            title: "What makes Infinitidigital’s SMM services unique?",
            txt: "Infinitidigital’s Social Media Marketing services stand out because we craft strategies tailored to your brand’s goals and audience. By blending innovation with data-driven insights, we ensure every campaign is unique and impactful. Our approach emphasizes creative solutions and measurable results, delivering meaningful engagement and long-term growth for your business."
        },
        {
            title: "Which platforms do you specialize in for social media marketing?",
            txt: "We specialize in optimizing campaigns across major platforms such as Facebook, Instagram, YouTube, Reddit, and Discord. Our team customizes content to align with the distinct dynamics of each platform. Whether it’s creating visually engaging posts for Instagram or fostering authentic conversations on Reddit, we ensure your brand achieves maximum visibility and impact."
        },
        {
            title: "How do you measure the success of a social media campaign?",
            txt: "We track success using key metrics like engagement rates, conversions, reach, and ROI. At Infinitidigital, our detailed reporting provides actionable insights into campaign performance. By analyzing results and making continuous improvements, we ensure your strategies not only meet but exceed your objectives, driving meaningful growth for your brand."
        },
        {
            title: "Do you offer customized social media marketing packages? ",
            txt: "Yes, Infinitidigital provides customized social media packages tailored to your unique goals and budget. Whether you’re a startup aiming for brand awareness or an established business looking to scale, our tailored solutions include audience targeting, content creation, and ad campaigns—delivering maximum value and measurable success."
        },
        {
            title: "How quickly can I see results from your SMM services?",
            txt: "The timeframe for seeing results depends on the scope and strategy of your campaign. While significant outcomes like revenue growth may take time, many clients notice improvements in engagement and reach within 4-6 weeks. Our strategies prioritize steady progress and sustainable growth, ensuring results that align with your business goals."
        }
    ]

}
