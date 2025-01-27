//Banner
import BannerPoster from "media/innerservices/audio-book/bannerImg.webp"

export const BannerData = {
    title: "Immerse Your Listeners",
    desc: "In a world where audiobooks reign, how do you make yours stand out? A captivating audiobook can transport listeners into your story, building anticipation and drawing them in.Let's bring your audiobook to life and create impactful experiences.",
    video: "",
    BannerPoster: BannerPoster.src
}

//Services

export const ServicesData = {
    subtitle: "Our Services",
    title: "Our Audiobook Services",
    desc: "Explore how we turn written words into auditory art. Our audiobook services are designed to enhance your story, captivate listeners, and expand your reach effortlessly.",
    ServicesItem: [
        {
            title: (<>Casting the Perfect<br />Voice</>),
            txt: "We match your book with voice artists who capture the tone, mood, and essence of your writing.",
            url: "#",
        },
        {
            title: (<>High-Quality Audio<br />Production</>),
            txt: "Our state-of-the-art recording and editing ensure crisp, professional-quality audio that keeps listeners hooked.",
            url: "#",
        },
        {
            title: (<>Post-Production &<br />Sound Design</>),
            txt: "From background scores to subtle sound effects, we craft immersive experiences tailored to your book.",
            url: "#",
        },
        {
            title: (<>Distribution<br />Assistance</>),
            txt: "We help optimize your audiobook for platforms like Audible, Google Play, and Apple Books, maximizing visibility.",
            url: "#",
        },

    ]
}

// NewsLetter

import ImgBg from "media/innerservices/audio-book/ctaImage.webp"
export const NewsLetterData = {
    title: "Not Sure Where To Start?",
    desc: "Every story deserves to be heard. Explore our pricing options designed for authors at every stage of their audiobook journey, ensuring top-notch quality and maximum impact.",
    img: ImgBg.src
}


//Content Data
import ContentImg from "media/innerservices/audio-book/Img01.webp"
export const ContentData = {
    maintitle: true,
    contentTitle: "Want To Stand Out In A Crowded Market? ",
    contentTxt: (<>
        <p>Audiobooks are a booming industry, and our services ensure your story shines. From casting the perfect voice to crafting impeccable soundscapes, we’ve got every detail covered. Let us turn your words into a captivating audio experience. Our team combines artistry with precision to create audiobooks that deeply connect with listeners and leave lasting impressions.</p>
    </>),
    img: ContentImg.src
}
// Process
export const ProcessData = {
    subtitle: "Our Process",
    title: "Our Proven Audiobook Production Process",
    desc: "Ready to transform your manuscript into a masterpiece? Explore our step-by-step approach to creating audiobooks that captivate listeners and elevate your story to new heights.",

    ProcessItem1: [
        {
            title: "Story Analysis & Voice Casting",
            txt: (<>
                <strong>Narrative Assessment:</strong>
                <p>Pinpointing the key themes and emotions of your book.</p>
                <strong>Voice Profiles:</strong>
                <p>Shortlisting narrators whose voices bring your characters to life.</p>
                <strong>Author Collaboration:</strong>
                <p>Ensuring the final choice aligns with your vision.</p>
            </>),

        },
        {
            title: "Professional Recording",
            txt: (<>
                <strong>Studio-Grade Equipment:</strong>
                <p>Recording in professional environments for unmatched clarity.</p>
                <strong>Directed Sessions:</strong>
                <p>Guiding narrators for accurate tone and pacing</p>
                <strong>Multiple Takes:</strong>
                <p>Capturing the perfect rendition of every scene.</p>
            </>),

        },
    ],
    ProcessItem2: [
        {
            title: "Precision Editing & Sound Design",
            txt: (<>
                <strong>Audio Polishing:</strong>
                <p>Removing imperfections and enhancing audio quality.</p>
                <strong>Dynamic Soundscapes:</strong>
                <p>Adding subtle effects to enrich the listening experience.</p>
                <strong>Seamless Transitions:</strong>
                <p>Ensuring smooth chapter breaks and scene changes.</p>
            </>),

        }, {
            title: "Distribution Optimization",
            txt: (<>
                <strong>Platform Formatting: </strong>
                <p>Preparing files for Audible, Google Play, and more.</p>
                <strong>Metadata Optimization:</strong>
                <p>Enhancing discoverability with strategic keywords.</p>
                <strong>Launch Strategy:</strong>
                <p>Helping you promote your audiobook effectively.</p>
            </>),

        },
    ],
    ProcessItem3: [
        {
            title: "Post-Launch Support",
            txt: (<>
                <strong>Performance Tracking:</strong>
                <p>Monitoring downloads, reviews, and engagement.</p>
                <strong>Marketing Adjustments:</strong>
                <p>Refining campaigns for ongoing visibility.</p>
                <strong>Audience Engagement Refinement:</strong>
                <p>Leveraging detailed listener analytics to enhance future audiobooks.</p>
            </>),

        },
        {
            title: "Advanced Marketing Strategies",
            txt: (<>
                <strong>Social Media Campaigns:</strong>
                <p>Crafting engaging content to attract new listeners.</p>
                <strong>Influencer Partnerships:</strong>
                <p>Collaborating with audiobook influencers to expand visibility.</p>
                <strong>Targeted Ads:</strong>
                <p>Running campaigns that directly reach your ideal audience.</p>
            </>),

        }
    ]

}
// CTA  Pink
import ImgBgPink from "media/innerservices/audio-book/BgImage.webp"
export const CtaPinkData = {
    title: "Let’s Craft the Perfect Audiobook Package for You",
    desc: "Your story is unique, and your audiobook should be too. Whether you’re looking for immersive narration, advanced soundscapes, or a comprehensive marketing strategy, we’re here to bring your vision to life. Let’s design a custom solution that fits your goals, your budget, and your audience perfectly.",
    img: ImgBgPink.src
}
//Book Tabs
export const BookTabsData = {
    subtitle: "Book Gallery",
    title: "Translating Your Book Into Audio Format",
    desc: "Our experts craft the narrative framework for your audiobook, ensuring that it captivates your audience from the very first moment.",
}

// Pricing
export const PriceData = {
    subtitle: "Our Pricing",
    title: "Uplift Your Story with Captivating Audios",
    desc: "Ready to transform your manuscript into a masterpiece? Explore our affordable packages to creating audiobooks that captivate listeners and embellish your story.",
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


// Industrie Data
export const IndustriesData = {
    subtitle: "Industries We Serve",
    title: "Solutions Tailored to Your Industry ",
    desc: "Whatever your niche, we’ve got the expertise. At Infinitidigital, we’re dedicated to delivering customized solutions that resonate with your vision.",

}


//Testimonials
import { ClutchLogo, TrustpilotLogo, GoogleLogo, Forbes, Upcity } from "@/src/app/app-constants";
export const TestimonialData = {
    subtitle: "Happy Clients",
    title: "Happy Clients: What Authors Are Saying",
    desc: "Discover the transformative experiences of authors who partnered with Infinitidigital. From stellar narration to impactful marketing, hear how we helped bring their stories to life in extraordinary ways.",
    Testslider: [
        {
            txt: "Infinitidigital’s audiobook production was flawless. The narrator captured my characters perfectly, and the final product exceeded all expectations. They even incorporated my feedback at every step, ensuring my vision came to life. My readers now rave about the immersive experience, and I’ve seen a notable boost in my audience. I couldn’t be happier!",
            icon: <TrustpilotLogo />,
            namee: "Liam T.",
            job: "Author of Shadows of the Lost",
        },
        {
            txt: "Working with Infinitidigital was the best decision I made for my book. The audio quality was exceptional, and the distribution support was invaluable. The team’s expertise ensured my audiobook reached a global audience seamlessly. Sales have doubled since the audiobook launch, and I’ve received glowing reviews from listeners worldwide!",
            icon: <TrustpilotLogo />,
            namee: "Emma W.",
            job: "Author of Echoes of Time",
        },
        {
            txt: "As a debut author, I was nervous about creating an audiobook. Infinitidigital made the process seamless and fun. They walked me through every step, from voice casting to distribution, with incredible patience and professionalism. The feedback has been incredible, and my audience continues to grow with each passing week!",
            icon: <TrustpilotLogo />,
            namee: "Sophia R.",
            job: "Author of Threads of Fate",
        },
        {
            txt: "From start to finish, the team at Infinitidigital went above and beyond. The soundscapes added depth to my story, and the narrator’s performance was captivating. The audiobook has become a centerpiece in my marketing efforts, receiving rave reviews from both new and loyal readers. My readers loved it, and so did I!",
            icon: <TrustpilotLogo />,
            namee: "Noah J.",
            job: "Author of The Final Voyage",
        },
        {
            txt: "Infinitidigital’s expertise transformed my manuscript into a stunning audiobook. Their attention to detail and creative input made all the difference. From helping me select the perfect narrator to fine-tuning the final edit, their team ensured everything was flawless. I’m thrilled with the results and the overwhelmingly positive listener feedback!",
            icon: <TrustpilotLogo />,
            namee: "Ava K.",
            job: "Author of Whispers in the Dark",
        },

    ]
}
// Call to Action

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Your Audiobook Dreams Made Real",
    desc: "Do you have a story yearning to be heard? Whether it’s breathing life into your manuscript or reaching a global audience, Infinitidigital is here to make your audiobook vision a reality. Let’s transform your words into a powerful listening experience together."
}

// FAQs
export const FAQsData = {
    subtitle: "FAQs",
    title: "Frequently Asked Questions",

    Fqaslist: [
        {
            title: "How does Infinitidigital approach audiobook production?",
            txt: "We tailor every audiobook to the author’s vision. From casting narrators to final edits, our team collaborates with you every step of the way. By combining creativity with technical expertise, we ensure the audiobook captures your story’s essence while meeting industry standards for quality and distribution."
        },
        {
            title: "Can you create audiobooks for all genres?",
            txt: "Absolutely! Whether it’s a fast-paced thriller, a heartfelt romance, or an inspiring self-help book, we adapt our approach to suit your genre. By understanding your book’s unique qualities, we craft audiobooks that captivate and resonate with your audience."
        },
        {
            title: "How long does the process take?",
            txt: "Timelines vary based on the audiobook’s length and complexity. On average, production takes 4-8 weeks. This timeframe ensures every aspect—from narration to editing—is polished to perfection, resulting in a product you’ll be proud to share."
        },
        {
            title: "What if I’m not satisfied with the narration?",
            txt: "Your satisfaction is our priority. We provide multiple narrator options and revisions to guarantee a result that aligns with your expectations. Our collaborative approach ensures your audiobook truly reflects your vision and story."
        },
        {
            title: "How do you optimize audiobooks for distribution?",
            txt: "We prepare your audiobook for major platforms like Audible and Google Play by formatting files, optimizing metadata, and crafting a tailored launch strategy. Our goal is to maximize visibility and ensure your audiobook reaches the right audience effectively."
        },

    ]

}