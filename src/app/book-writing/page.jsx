import Banner from '@/src/app/components/innerservices/banner'
import { ProcessData, contentData, WorkData, BannerData, BlgosData, CallActionData, ChooseUsData, CtaPinkData, FAQsData, IndustriesData, InnerServicesData, NewsLetterData, PartnerData, PlatformsData, PriceData, BookTabsData } from '@/src/app/social-media-ads/data/data'
import InnerServices from '@/src/app/components/innerservices/innerservices'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import WhyChoose from '@/src/app/home/whychoose'
import PlateFroms from '@/src/app/home/plateform'
import Process from '@/src/app/components/services/process'
import Work from '@/src/app/components/services/work'
import Pricing from '@/src/app/components/services/pricing'
import CTA from '@/src/app/components/services/cta'
import Partners from '@/src/app/home/partners'
import Industries from '@/src/app/home/Industries'
import Testimonials from '@/src/app/home/testimonials'
import CtaForm from '@/src/app/home/ctaform'
import FollowUs from '@/src/app/home/followus'
import Blogs from '@/src/app/home/blogs'
import Faqs from '@/src/app/home/faq'
import { FollowsData, TestimonialData } from '@/src/app/home/data/data'
import ContentSection from '@/src/app/components/innerservices/content'
import BookTabs from '@/src/app/components/innerservices/booktabs'
import StateCount from '@/src/app/components/innerservices/statecount'


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <InnerServices data={InnerServicesData} />
            <StateCount />
            <NewsLetter data={NewsLetterData} />
            <ContentSection data={contentData} />
            <WhyChoose data={ChooseUsData} />
            <PlateFroms data={PlatformsData} />
            <Process data={ProcessData} />
            <BookTabs data={BookTabsData} />
            <Work data={WorkData} />
            <Pricing bg="yes" data={PriceData} />
            <CTA data={CtaPinkData} bg="black" />
            <Partners data={PartnerData} />
            <Industries data={IndustriesData} />
            <Testimonials data={TestimonialData} />
            <CtaForm data={CallActionData} />
            <FollowUs data={FollowsData} />
            <Blogs data={BlgosData} />
            <Faqs data={FAQsData} />


        </>
    )
}

export default Page