import Banner from '@/src/app/components/services/banner'
import { BannerData, CallActionData, BlgosData, FAQsData } from '@/src/app/blogs/data/data'
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import { FollowsData, TestimonialData } from '@/src/app/home/data/data';

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Blogs data={BlgosData} />
            <Testimonials data={TestimonialData} />
            <CtaForm data={CallActionData} />
            <FollowUs data={FollowsData} />
            <Faqs data={FAQsData} />

        </>
    )
}

export default Page