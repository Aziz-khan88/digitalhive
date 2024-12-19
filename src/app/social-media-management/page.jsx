import Banner from '@/src/app/components/innerservices/banner'
import ContentSection from '@/src/app/components/innerservices/content'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import TableContent from '@/src/app/components/innerservices/tablecontent'
import TwoBox from '@/src/app/components/innerservices/twobox'
import PlateFroms from "@/src/app/home/plateform";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import ServicesMain from '@/src/app/components/services/servicesmain'
import { PlatformsData, TestimonialData, CallActionData, FollowsData, BlgosData, FAQsData } from '@/src/app/home/data/data'
import { BannerData, ContentData, NewsLetterData, TwoBoxData, ServicesData } from '@/src/app/social-media-management/data/data'

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <ContentSection data={ContentData} bggray="yes" />
            <NewsLetter data={NewsLetterData} />
            <ServicesMain data={ServicesData} />
            <TwoBox data={TwoBoxData} />
            <PlateFroms data={PlatformsData} />
            <Testimonials data={TestimonialData} />
            <CtaForm data={CallActionData} />
            <FollowUs data={FollowsData} />
            <Blogs data={BlgosData} />
            <Faqs data={FAQsData} />
        </>
    )
}

export default Page