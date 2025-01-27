//Banner
import BannerPoster from "media/innerservices/book-writing/bannerImg.webp"

export const BannerData = {
    title: "Struggling to Get Your Story Written? ",
    desc: "Your story deserves to be told, loved, and shared—but crafting it into a compelling book can feel overwhelming. Are you struggling to transform your ideas into a masterpiece? Let Infinitidigital turn your vision into a beautifully written book with tailored strategies that bring your story to life.",
    video: "",
    BannerPoster: BannerPoster.src
}

//Services

export const ServicesData = {
    subtitle: "Our Services",
    title: "Comprehensive Book Writing Services",
    desc: "Stuck with a mountain of ideas but failing to deliver? Don't worry; let Infinitidigital help guide you on your journey to becoming a bestseller!",
    ServicesItem: [
        {
            title: (<>Ghost Book<br />Writing</>),
            txt: "From concept development to the final manuscript, we ensure your voice is authentically captured, making your story shine.",
            url: "#",
        },
        {
            title: (<>Editing & <br />Proofreading</>),
            txt: "Our editors refine every detail, ensuring your manuscript is polished, professional, and ready for publication.",
            url: "#",
        },
        {
            title: (<>Book <br />Formatting</>),
            txt: "Our formatting services ensure a flawless presentation for print or digital platforms.",
            url: "#",
        },
        {
            title: (<>Publishing <br />Support</>),
            txt: "From preparing submission materials to designing your book cover, we help you every step of the way.",
            url: "#",
        },

    ]
}



//Content Data
import ContentImg from "media/innerservices/book-writing/Img01.webp"
import { MenuIcon } from "@/src/app/app-constants"
export const ContentData = {
    maintitle: true,
    contentTitle: "Why Partner with Our Book Writing Experts?",
    contentTxt: (<>
        <p>Writing a book is no small feat—it’s a journey of creativity, discipline, and strategy.  That’s why our team is here to guide you, from brainstorming ideas to the final chapter.</p>
        <p>Whether it’s a novel, memoir, or business book, we craft every project with a clear, engaging narrative tailored to your voice and purpose. Our expertise ensures that your book resonates with readers and positions it for success in today’s competitive market.</p>
    </>),
    img: ContentImg.src
}
// Process
export const ProcessData = {
    subtitle: "Our Process",
    title: "Our Proven Book Writing Process",
    desc: "Does your story have a clear direction? We help define your book’s purpose, audience, and goals to craft a roadmap that sets the foundation for success.",

    ProcessItem1: [
        {
            title: "Strategy Development",
            txt: (<>
                <strong>Concept Clarity:</strong>
                <p>Ensure your book’s idea is solid, unique, and ready to engage readers.</p>
                <strong>Audience Insights:</strong>
                <p>Tailor your narrative to resonate with your target audience.</p>
                <strong>Genre Expertise:</strong>
                <p>Align your story’s tone and style with the expectations of your genre.</p>
            </>),

        },
        {
            title: "Content Planning",
            txt: (<>
                <strong>Chapter Outlines:</strong>
                <p>Break down your story into manageable, cohesive sections.</p>
                <strong>Theme Development:</strong>
                <p>Strengthen central themes to ensure a consistent and impactful narrative.</p>
                <strong>Creative Collaboration:</strong>
                <p>Work closely with our team to refine ideas and maintain your unique voice.</p>
            </>),

        },
    ],
    ProcessItem2: [
        {
            title: "Content Refinement",
            txt: (<>
                <strong>Comprehensive Edits:</strong>
                <p>Addressing structure, tone, and readability.</p>
                <strong>Consistency Checks:</strong>
                <p>Ensuring narrative elements align and flow seamlessly.</p>
                <strong>AReader-Centric Revisions:</strong>
                <p>Fine-tuning content to meet audience expectations.</p>
            </>),

        }, {
            title: "Performance Analysis",
            txt: (<>
                <strong>Constructive Critiques:</strong>
                <p>Insights to strengthen your manuscript at every stage.</p>
                <strong>Beta Reader Insights:</strong>
                <p>Optional feedback from target readers for added perspectives.</p>
                <strong>Milestone Assessments:</strong>
                <p>Evaluating progress to ensure goals are met.</p>
            </>),

        },
    ],
    ProcessItem3: [
        {
            title: "Publishing Preparation",
            txt: (<>
                <strong>Submission Materials:</strong>
                <p>Crafting query letters, synopses, and proposals.</p>
                <strong>Formatting Excellence:</strong>
                <p>Ensuring your book meets all technical specifications.</p>
                <strong>Launch Strategy:</strong>
                <p>Guidance on promoting your book for maximum impact.</p>
            </>),

        },
        {
            title: "Content Creation",
            txt: (<>
                <strong>Engaging Narratives:</strong>
                <p>Stories that hook readers from the first page to the last.</p>
                <strong>Authentic Voice:</strong>
                <p>Maintain a tone that reflects your personality and purpose.</p>
                <strong>Attention to Detail:</strong>
                <p>Crafting scenes, characters, and concepts with depth and care.</p>
            </>),

        }
    ]

}


// NewsLetter

import ImgBg from "media/innerservices/book-writing/ctaImage.webp"
export const NewsLetterData = {
    title: "Various Expertise Across Genres",
    desc: "Bring your characters and worlds to life with writing that captures readers’ imaginations. Turn your experiences into narratives that inspire and connect with others.",
    img: ImgBg.src
}




//Book Tabs

export const BookTabsData = {
    subtitle: "Book Gallery",
    title: "Bringing Your Story to Life Across Genres",
    desc: "Wondering how to share your personal experiences in a meaningful way? Explore ways to turn your stories into narratives that connect and inspire others. ",

}


// Pricing
export const PriceData = {
    subtitle: "Our Pricing",
    title: "Invest in Your Story and Uplift Your Authorial Presence",
    desc: "Ready to turn your ideas into a published masterpiece? Our book-writing packages cater to both first-time authors and seasoned storytellers, bringing your literary vision to life with flair!",
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
import ImgBgPink from "media/innerservices/book-writing/BgImage.webp"
export const CtaPinkData = {
    title: "Want a Custom-made Package Just for You?",
    desc: "Do you feel like your story deserves unique attention? Let’s collaborate to create a personalized writing experience. Whether outlining your first book or refining your final draft, we design services that align with your goals and aspirations. Your book is one-of-a-kind—why should your writing process be any different?",
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
            txt: "Infinitidigital helped turn my scattered ideas into a cohesive and compelling memoir. Their team guided me through every step, and the finished book exceeded all my expectations. Their attention to detail and professionalism made the process seamless, and I’m thrilled to share my story with the world!",
            icon: <ClutchLogo />,
            namee: "Laura D.",
            job: "Author of Threads of My Journey",
        },
        {
            txt: "Working with Infinitidigital was a game-changer. They understood my vision and brought it to life with stunning precision. Their creativity and collaboration turned my ideas into a story I’m proud of. From brainstorming to the final draft, their expertise made the process smooth and enjoyable. Highly recommend!",
            icon: <TrustpilotLogo />,
            namee: "Michael T.",
            job: "Author of Beyond the Horizon",
        },
        {
            txt: "I was overwhelmed with the idea of writing a book until I found Infinitidigital. Their team helped me structure my thoughts and created a manuscript that I’m incredibly proud of. They made my dream a reality and supported me through each stage with clarity and care.",
            icon: <GoogleLogo />,
            namee: "Emily T.",
            job: "Author of Adventures with Benny",
        },
        {
            txt: "Infinitidigital’s team is exceptional! They clarified my ideas, refined my writing, and made the entire process seamless. Their ability to understand my objectives and deliver a polished manuscript gave me confidence. My business book is now something I can confidently present to my audience.",
            icon: <TrustpilotLogo />,
            namee: "James P.",
            job: "Author of The Entrepreneur’s Edge",
        },
        {
            txt: "I had a story in my head for years but didn’t know where to start. Infinitidigital turned my thoughts into a novel that I’m truly proud of. Their creative process is unmatched, and their team’s professionalism ensured my book reached its fullest potential. I’m incredibly grateful for their support!",
            icon: <TrustpilotLogo />,
            namee: "Sophia K.",
            job: "Author of Shadows and Sunlight",
        }
    ]
}
// Call to Action

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Captivate Readers with Your Story Today",
    desc: "Are you ready to tell your story? Whether you’re beginning your writing journey or need help completing your manuscript, Infinitidigital is here to assist. Let’s collaborate to create a book that captivates readers and leaves a lasting legacy."
}

// FAQs
export const FAQsData = {
    subtitle: "FAQs",
    title: "Your Book Marketing Questions Answered",

    Fqaslist: [
        {
            title: "How does Infinitidigital approach book writing?",
            txt: "At Infinitidigital, we craft each book with a personalized touch. From understanding your unique voice and vision to creating structured outlines, we ensure every step aligns with your goals. Our team deepens your ideas, shaping them into a manuscript that resonates with readers. Whether it's a gripping novel or an inspiring memoir, we bring your story to life with precision and creativity."
        },
        {
            title: "How long does the book writing process take?",
            txt: "The timeline depends on the complexity and scope of your project. On average, shorter manuscripts may take 3-4 months, while comprehensive works like novels can extend to 6-9 months. We prioritize quality and ensure that every chapter is polished to perfection. Regular updates keep you informed and engaged throughout the journey so your vision is never lost."
        },
        {
            title: "Can you write in genres I’m unfamiliar with?",
            txt: "Absolutely! Our team includes experienced writers across diverse genres—from fiction and nonfiction to children’s books and biographies. Even if you're venturing into uncharted creative waters, we’ll provide insights and guidance to ensure your book meets the genre's expectations while remaining authentic to your voice."
        },
        {
            title: "What level of involvement do I have in the writing process?",
            txt: "You’re as involved as you want to be! Some clients prefer a hands-off approach, trusting us to develop their ideas, while others like collaborating closely. We adapt to your preferences, offering regular updates, drafts, and opportunities for feedback. It’s your story; we’re here to ensure it is told how you envision it."
        },
        {
            title: "How do you ensure the book captures my voice?",
            txt: "Our process starts with in-depth conversations to understand your tone, style, and goals. We analyze your existing material or preferences to reflect your unique voice. Through drafts and revisions, we refine the manuscript, ensuring the narrative feels authentic to you while meeting professional standards."
        },
    ]

}