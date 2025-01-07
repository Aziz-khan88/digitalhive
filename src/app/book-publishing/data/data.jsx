//Banner
import BannerPoster from "media/innerservices/book-publishing/bannerImg.webp"

export const BannerData = {
    title: "Ready to Publish Your Manuscript?",
    desc: "Your manuscript deserves to be more than just a file on your computer—it’s your story, voice, and dream. Infinitidigital guides you through every step, transforming your manuscript into a professionally published book.",
    video: "",
    BannerPoster: BannerPoster.src
}

//Services

export const ServicesData = {
    subtitle: "Our Services",
    title: "Complete Book Publishing Services",
    desc: "Is formatting, pitching, or choosing a platform keeping you awake? Let us make your life easier! ",
    ServicesItem: [
        {
            title: (<>Manuscript <br />Evaluation</>),
            txt: "We provide detailed feedback on your manuscript’s strengths and marketability and align it with your publishing goals.",
            url: "#",
        },
        {
            title: (<>Formatting  & <br />Layout</>),
            txt: "Our experts create polished layouts for print and digital platforms, ensuring your book meets professional standards.",
            url: "#",
        },
        {
            title: (<>Submission  <br />Assistance</>),
            txt: "We craft professional submission materials, from query letters to synopses, that enhance your chances of success.",
            url: "#",
        },
        {
            title: (<>Marketing  <br />Support</>),
            txt: "We optimize keywords, craft compelling back cover blurbs, and develop strategies that boost your book’s visibility.",
            url: "#",
        },

    ]
}

// NewsLetter

import ImgBg from "media/innerservices/book-publishing/ctaImage.webp"
export const NewsLetterData = {
    title: "What’s Next After Publishing? ",
    desc: "If you’re worried about visibility? We ensure your book gets the spotlight it deserves. We help you sustain momentum and measure success that’s impactful for you and your book.",
    img: ImgBg.src,

}


//Content Data
import ContentImg from "media/innerservices/book-publishing/Img01.webp"
export const ContentData = {
    maintitle: true,
    contentTitle: "Why Partner with Our Book Publishing Experts?",
    contentTxt: (<>
        <p>A crowded market means your book needs to shine.We help craft pitches, query letters, and metadata that make agents, publishers, and readers take notice.From Amazon Kindle to traditional publishers, we simplify the process, ensuring your book reaches the readers it’s meant for.Isn’t it time to take the guesswork out of publishing?.</p>
    </>),
    img: ContentImg.src
}
// Process
export const ProcessData = {
    subtitle: "Our Process",
    title: "Our Recognized Book Publishing Process",
    desc: "Is your manuscript's potential being held back by structural flaws or distracting errors? Let us help you refine your narrative, polish your prose, and unlock your story's full brilliance.",

    ProcessItem1: [
        {
            title: "Initial Consultation",
            txt: (<>
                <strong>Finding the Right Path:</strong>
                <p>Traditional, self-publishing, or hybrid—we help you decide.</p>
                <strong>Market Analysis:</strong>
                <p>Understand your readers and genre trends for maximum impact.</p>
                <strong>Personalized Strategy:</strong>
                <p>Clear steps to turn your manuscript into a published book.</p>
            </>),

        },
        {
            title: "Manuscript Preparation",
            txt: (<>
                <strong>Tailored Formatting:</strong>
                <p>Aligning your manuscript with publishing guidelines.</p>
                <strong>Professional Touches:</strong>
                <p>Polished query letters and synopses.</p>
                <strong>Optional Revisions:</strong>
                <p>Strengthen marketability while keeping your vision intact.</p>
            </>),

        },
    ],
    ProcessItem2: [
        {
            title: "Platform Optimization",
            txt: (<>
                <strong>Digital Excellence:</strong>
                <p>Ready-to-upload Kindle and ePub files.</p>
                <strong>Print Perfection:</strong>
                <p>High-quality layouts for physical copies.</p>
                <strong>Metadata Mastery:</strong>
                <p>Descriptions, keywords, and categories that draw readers in.</p>
            </>),

        }, {
            title: "Submission Support",
            txt: (<>
                <strong>Attention-Grabbing Pitches:</strong>
                <p>Query letters that capture interest.</p>
                <strong>Platform Expertise:</strong>
                <p>Tailored submissions for agents and publishers.</p>
                <strong>Feedback Integration:</strong>
                <p>Address publisher notes with ease.</p>
            </>),

        },
    ],
    ProcessItem3: [
        {
            title: "Marketing Launch",
            txt: (<>
                <strong>Compelling Blurbs:</strong>
                <p>Back cover copy that hooks readers.</p>
                <strong>Strategic Campaigns:</strong>
                <p>Social media buzz and pre-order incentives.</p>
                <strong>Launch Events:</strong>
                <p>Plan giveaways and virtual readings to build excitement.</p>
            </>),

        },
        {
            title: "Post-Publication Support",
            txt: (<>
                <strong>Performance Tracking:</strong>
                <p>Monitor sales and engagement.</p>
                <strong>Continuous Promotion:</strong>
                <p>Campaigns to keep your book thriving.</p>
                <strong>Updates and Refinements:</strong>
                <p>Perfecting your content as feedback rolls in.</p>
            </>),

        }
    ]

}


//Book Tabs
export const BookTabsData = {
    subtitle: "Book Gallery",
    title: "We Excel in Diverse, Distinctive Genres",
    desc: "Pitching your book can be intimidating. Let us help you make an impression. With Infinitidigital, you have the roadmap to success! ",
}

// Pricing
export const PriceData = {
    subtitle: "Our Pricing",
    title: "Invest in Your Story and Uplift Your Authorial Presence",
    desc: "Ready to turn your ideas into a published masterpiece? Our book-writing packages cater to first-time authors and seasoned storytellers, bringing your literary vision to life with flair!",
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
import ImgBgPink from "media/innerservices/book-publishing/BgImage.webp"
export const CtaPinkData = {
    title: "Want a Custom Package?",
    desc: "Overwhelmed by self-publishing platforms? Let us tailor our services to fit your specific needs. Contact us for a personalized quote. We make it easy, ensuring your book stands out digitally and in print.",
    img: ImgBgPink.src
}
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
    title: "Hear It from Authors Like You",
    desc: "Do you know where your book fits in the publishing world? We start with a one-on-one session to identify your goals and outline the best strategies.",
    Testslider: [
        {
            txt: "Infinitidigital made publishing easy. They didn’t just polish my book—they amplified its potential. They turned my book into a global success, from optimizing metadata to launching strategic campaigns. Readers worldwide are connecting with my story, and I couldn’t have done it without their exceptional team! Their approach to understanding my goals and market trends gave my book the spotlight it deserved.",
            icon: <ClutchLogo />,
            namee: "Jessica W.",
            job: "Author of The Heart’s Compass",
        },
        {
            txt: "Self-publishing felt overwhelming until I partnered with Infinitidigital. Their professional formatting, tailored pitches, and insightful marketing strategies made all the difference. Now, my book is a bestseller on Amazon, with a steady stream of five-star reviews and a growing fan base. The team’s expertise and constant support ensured that every aspect of my book exceeded expectations.",
            icon: <TrustpilotLogo />,
            namee: "David K.",
            job: "Author of Silent Echoes",
        },
        {
            txt: "Infinitidigital was a game-changer for my publishing journey. Their submission materials caught the attention of top publishers, and their guidance on positioning my book was invaluable. Today, my book has reached shelves across the country, and I owe so much to their expertise and dedication! They took my vision and turned it into something extraordinary",
            icon: < GoogleLogo />,
            namee: "Emma H.",
            job: "Author of Rising Tides",
        },
        {
            txt: "As an indie author, I needed a team that understood my challenges, and Infinitidigital delivered in every way. Their detailed formatting, captivating blurbs, and strategic promotions helped my book stand out. Sales are thriving, and my audience continues to grow. Their dedication and personalized approach ensured my success in a competitive market.",
            icon: <TrustpilotLogo />,
            namee: "Liam J.",
            job: "Author of Threads of Time",
        },
        {
            txt: "The thought of publishing my book felt overwhelming, but Infinitidigital turned it into a smooth, exciting process. Their attention to detail was outstanding, from perfecting the manuscript to crafting an incredible marketing plan. My book is now a category bestseller, and I couldn’t be happier! Their comprehensive approach gave me confidence every step of the way.",
            icon: <TrustpilotLogo />,
            namee: "Sophia R.",
            job: "Author of Echoes of the Soul",
        }
    ]
}
// Call to Action

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Does Your Manuscript Meet Industry Standards? ",
    desc: "Still pondering over what to do with your manuscript? We refine it for seamless submission and reader appeal. Get in touch now to make your book a bestseller! "
}

// FAQs
export const FAQsData = {
    subtitle: "FAQs",
    title: "Your Book Marketing Questions Answered",

    Fqaslist: [
        {
            title: "How does Infinitidigital approach book publishing?",
            txt: "Infinitidigital creates tailored publishing strategies for each author. We handle everything from detailed manuscript evaluations to platform-specific optimizations to ensure your book stands out. With expert guidance at every step, we make publishing straightforward and successful. Our team takes the stress out of the publishing process so you can focus on what you do best—writing."
        },
        {
            title: "How long does the publishing process take?",
            txt: "The timeline depends on the complexity of your needs. Formatting and platform setup often take 2-3 weeks, while comprehensive publishing plans, including marketing strategies, may require 6-8 weeks. We prioritize quality and efficiency to meet your goals, ensuring that each step is completed with precision and care to deliver an exceptional final product."
        },
        {
            title: "Can you help with both self-publishing and traditional publishing?",
            txt: "Absolutely! Whether self-publishing on platforms like Amazon or pursuing traditional publishers, we guide you through the process. Our services include formatting, crafting compelling pitches, and ensuring your book is submission-ready for agents or editors. With tailored support, we help you choose the path that best suits your book’s goals and audience."
        },
        {
            title: "What is metadata optimization, and why is it important?",
            txt: "Metadata covers your book’s title, description, keywords, and categories. Optimizing these elements makes your book more discoverable to readers searching for similar content. Strong metadata can significantly boost your book’s visibility and sales potential, creating a solid foundation for long-term success in a competitive market."
        },
        {
            title: "Do you provide post-publication support?",
            txt: "Yes! We offer services to track sales performance, refine marketing campaigns, and plan ongoing promotions. Our team ensures your book thrives post-publication, maintaining momentum and reaching new readers over time. We stay with you every step of the way to adapt strategies and maximize your book’s success."
        }
    ]

}