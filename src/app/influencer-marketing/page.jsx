import Banner from '@/src/app/components/innerservices/banner'
import { BannerData, ContentData, NewsLetterData, TableContetData, TwoBoxData, InnerServicesData, ContentData1 } from '@/src/app/influencer-marketing/data/data'
import ContentSection from '@/src/app/components/innerservices/content'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import TableContent from '@/src/app/components/innerservices/tablecontent'
import TwoBox from '@/src/app/components/innerservices/twobox'
import InnerServices from '@/src/app/components/innerservices/innerservices'
import { PlatformsData, TestimonialData, CallActionData, FollowsData, BlgosData, FAQsData } from '@/src/app/home/data/data'
import PlateFroms from "@/src/app/home/plateform";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <ContentSection data={ContentData} bggray="yes" />
            <NewsLetter data={NewsLetterData} />
            <TableContent data={TableContetData} />
            <TwoBox data={TwoBoxData} />
            <InnerServices data={InnerServicesData} />
            <ContentSection data={ContentData1} bggray="yes" />
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