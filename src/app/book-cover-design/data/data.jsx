//Banner
import BannerPoster from "media/innerservices/book-cover-design/bannerImg.webp"

export const BannerData = {
    title: "Bring Your Story to Life",
    desc: "Ever wonder how to captivate your readers at first glance? A beautifully designed book cover is the gateway to your story. Whether for a heartwarming romance or a gripping thriller, Infinitidigital ensures your book stands out on shelves and screens. Let’s make your cover an irresistible invitation to dive into your world.",
    video: "",
    BannerPoster: BannerPoster.src
}

//Services

export const ServicesData = {
    subtitle: "Our Services",
    title: "Captivate Readers With Exceptional Book Cover Designs",
    desc: "Let your story speak through its cover. Our tailored design services transform your ideas into visual art that excites and entices readers. Explore how we craft covers that not only look stunning but also convey your story’s essence, captivating your target audience effortlessly.",
    ServicesItem: [
        {
            title: (<>Concept <br />Development</>),
            txt: "We collaborate with you to create designs that reflect your narrative’s tone and themes.",
            url: "#",
        },
        {
            title: (<>Professional Design <br />Execution</>),
            txt: "From typography to imagery, we ensure every detail aligns with your book’s identity and market trends.",
            url: "#",
        },
        {
            title: (<>Industry-Ready<br />Formatting</>),
            txt: "From typography to imagery, we ensure every detail aligns with your book’s identity and market trends.",
            url: "#",
        },
        {
            title: (<>Publishing <br />Formatting</>),
            txt: "We deliver designs optimized for print and digital platforms, ensuring your book looks flawless everywhere.",
            url: "#",
        },

    ]
}

// NewsLetter

import ImgBg from "media/innerservices/book-cover-design/ctaImage.webp"
export const NewsLetterData = {
    title: "Unleash the Power of Design",
    desc: "Don’t settle for ordinary. Reach out today to explore how our custom covers can elevate your book to the next level.",
    img: ImgBg.src
}


//Content Data
import ContentImg from "media/innerservices/book-cover-design/Img01.webp"
export const ContentData = {
    maintitle: true,
    contentTitle: "Why Choose Infinitidigital for Your Book Cover Design?",
    contentTxt: (<>
        <p>Want your book to shine in a crowded market? A stunning cover sets your book apart and captures readers’ attention instantly. Not sure where to begin? From conceptualizing designs to perfecting the final touches, we handle every detail precisely. Need a professional edge? Our team combines creativity and market insight to craft covers that resonate with your genre and audience.</p>
    </>),
    img: ContentImg.src
}
// Process
export const ProcessData = {
    subtitle: "Our Process",
    title: "Your Book Cover Journey Starts Here",
    desc: "Discover how we seamlessly transform your vision into a captivating book cover. Each step of our process is designed to bring your ideas to life and create a memorable first impression.Ready to make your book unforgettable? Explore our step- by - step approach to designing covers that demand attention and reflect your story’s soul.",

    ProcessItem1: [
        {
            title: "Creative Briefing & Conceptualization",
            txt: (<>
                <strong>Author Consultation:</strong>
                <p>Collaborating with you to capture your vision.</p>
                <strong>Genre Alignment:</strong>
                <p>Ensuring the design resonates with your target audience.</p>
                <strong>Mood Boards:</strong>
                <p>Presenting curated inspirations to set the creative direction.</p>
            </>),

        },
        {
            title: "Custom Artwork & Graphic Design",
            txt: (<>
                <strong>Hand-Drawn Elements:</strong>
                <p>Incorporating illustrations tailored to your story.</p>
                <strong>Typography Mastery:</strong>
                <p>Selecting fonts that complement your narrative.</p>
                <strong>Color Psychology:</strong>
                <p>Using hues that evoke the right emotions.</p>
            </>),

        },
    ],
    ProcessItem2: [
        {
            title: "Mockups & Revisions",
            txt: (<>
                <strong>Multiple Drafts: </strong>
                <p>Offering diverse options for your review.</p>
                <strong>Feedback Integration:</strong>
                <p>Adjusting designs based on your input.</p>
                <strong>Polished Final Drafts:</strong>
                <p>Delivering a cover that exceeds expectations.</p>
            </>),

        }, {
            title: "Formatting for Print & Digital",
            txt: (<>
                <strong>Resolution Optimization:</strong>
                <p>Ensuring crisp visuals for every format.</p>
                <strong>Platform-Specific Sizes:</strong>
                <p>Tailoring dimensions for Amazon, IngramSpark, and more.</p>
                <strong>Spine & Back Covers:</strong>
                <p>Completing the design for physical books.</p>
            </>),

        },
    ],
    ProcessItem3: [
        {
            title: "Post-Design Support",
            txt: (<>
                <strong>Marketing Graphics: </strong>
                <p>Creating promotional materials featuring your cover.</p>
                <strong>File Management:</strong>
                <p>Providing all necessary files for future use.</p>
                <strong>Design Updates:</strong>
                <p>Offering tweaks for reprints or special editions.</p>
            </>),

        },
        {
            title: "Advanced Design Features",
            txt: (<>
                <strong>Foil Stamping:</strong>
                <p>Adding metallic accents for a luxurious touch.</p>
                <strong>Embossing/Debossing:</strong>
                <p>Creating texture that makes your cover stand out.</p>
                <strong>Special Finishes:</strong>
                <p>Gloss, matte, or soft-touch laminations for a unique feel.</p>
            </>),

        }
    ]

}



//Book Tabs
export const BookTabsData = {
    subtitle: "Book Gallery",
    title: "Genres Matter, Let’s Make Yours Shine",
    desc: "Different genres deserve distinct identities. Our tailored book cover designs ensure every story, from epic fantasies to poignant memoirs, captivates its target audience. Let’s create a cover that speaks to your genre’s heart and soul.",
}

// Pricing
export const PriceData = {
    subtitle: "Our Pricing",
    title: "Pricing Packages for Book Cover Design",
    desc: "Not sure where to start? Our flexible packages are designed to fit every author’s needs and budget. Choose the one that suits you best, or let’s craft a custom solution that’s just right for your book.",
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
import ImgBgPink from "media/innerservices/book-cover-design/BgImage.webp"
export const CtaPinkData = {
    title: "Your Vision, Our Design",
    desc: "Let’s bring your ideas to life with designs that captivate and inspire. Get started now to craft a cover that tells your story.",
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
    desc: "What are you waiting for? Be a part of a success story with Infinitidigital",
    Testslider: [
        {
            txt: "Infinitidigital’s book cover design was breathtaking. They took the time to understand my vision and transformed it into a piece of art that resonated deeply with my readers. Every element, from the colors to the typography, was crafted with precision and care. The impact on my book’s sales has been extraordinary, and I can’t thank them enough!",
            icon: <ClutchLogo />,
            namee: "Sophia L.",
            job: "Author of Dreams Unfolded",
        },
        {
            txt: "The cover Infinitidigital designed for my book exceeded all my expectations. Their attention to detail and understanding of my genre brought my story to life visually. I’ve received countless compliments, and it’s clear that this cover has played a pivotal role in attracting new readers. The team’s creativity and professionalism truly set them apart.",
            icon: <TrustpilotLogo />,
            namee: "James T.",
            job: "Author of Echoes of the Past",
        },
        {
            txt: "Since launching my book with the new cover from Infinitidigital, my sales have skyrocketed. Their ability to combine market trends with my unique story was remarkable. The design not only stands out but also connects with my target audience effortlessly. It’s everything I hoped for and more—a true game-changer for my publishing journey!",
            icon: <GoogleLogo />,
            namee: "Emily R.",
            job: "Author of Whispers in the Wind",
        },
        {
            txt: "As an indie author, I needed a professional, eye-catching cover that could compete with traditionally published books. Infinitidigital delivered beyond my expectations. Their innovative approach, combined with their dedication to perfection, made my book stand out. The result? A steady rise in sales and reader engagement that I could only dream of before!",
            icon: <Forbes />,
            namee: "Liam J.",
            job: "Author of Threads of Time",
        }, {
            txt: "Infinitidigital’s team transformed my rough ideas into a visually stunning cover that truly represents my story. Their collaborative approach and unmatched expertise made the entire process smooth and enjoyable. My book cover now receives glowing reviews from readers and industry professionals alike. It’s a testament to their skill and passion for what they do.",
            icon: < Upcity />,
            namee: "Ava K.",
            job: "Author of Shadows of Eternity",
        },
    ]
}
// Call to Action

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Let’s Create a Cover That Sells",
    desc: "Transform your manuscript into a showstopper. Contact us today and see how a professional book cover can boost your sales and visibility."
}

// FAQs
export const FAQsData = {
    subtitle: "FAQs",
    title: "Frequently Asked Questions",

    Fqaslist: [
        {
            title: "How does Infinitidigital approach book cover design?",
            txt: "We take a personalized approach, tailoring every cover to the author’s vision and the book’s unique themes. Our team collaborates closely with you, incorporating market insights and creative expertise to craft a cover that captivates readers. From initial concepts to final touches, we ensure every detail aligns with your goals and exceeds your expectations."
        },
        {
            title: "Can you design covers for all genres?",
            txt: "Absolutely! We specialize in creating covers for a wide range of genres, from fantasy and romance to non-fiction and memoirs. Our designs are carefully crafted to resonate with your specific audience, ensuring your book stands out in a competitive market while staying true to its essence."
        },
        {
            title: "How long does the process take?",
            txt: "The timeline depends on the complexity of the design, but most projects are completed within 2-4 weeks. This includes initial consultations, drafts, revisions, and finalizing the design. We prioritize both efficiency and quality to deliver results you’ll love within a reasonable timeframe."
        },
        {
            title: "What if I need changes after the design is done?",
            txt: "We provide post-design support to accommodate any updates you might need. Whether it’s adjustments for a reprint, new promotional materials, or design tweaks, our team is here to ensure your cover continues to meet your expectations and market demands."
        },
        {
            title: "Do you provide files for both print and digital?",
            txt: "Yes! We deliver high-resolution files optimized for print and digital formats. Whether you’re publishing on Amazon, IngramSpark, or other platforms, our designs are tailored to meet the specific requirements, ensuring your book looks flawless everywhere it’s displayed."
        }
    ]

}