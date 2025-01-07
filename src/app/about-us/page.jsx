import Banner from '@/src/app/components/services/banner'
import { AbtData, BannerData, AboutData, NewsLetterData, AbtAwardsData, FAQsData } from '@/src/app/about-us/data/data'
import AbtSection from '@/src/app/about-us/abt'
import About from "@/src/app/home/about";
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import AbtAwards from '@/src/app/about-us/abtawards';
import Awards from '@/src/app/home/awards';
import Partners from '@/src/app/home/partners';
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import { FollowsData, TestimonialData, BlgosData, AwardsData, CallActionData, PartnerData, } from '@/src/app/home/data/data';

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <AbtSection data={AbtData} />
            <About data={AboutData} />
            <NewsLetter data={NewsLetterData} />
            <AbtAwards data={AbtAwardsData} />
            <Awards data={AwardsData} />
            <Partners data={PartnerData} />
            <Testimonials data={TestimonialData} />
            <CtaForm data={CallActionData} />
            <FollowUs data={FollowsData} />
            <Blogs data={BlgosData} />
            <Faqs data={FAQsData} />

        </>
    )
}

export default Page