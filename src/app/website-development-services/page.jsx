import Banner from '@/src/app/components/innerservices/banner'
import StateCount from '@/src/app/components/innerservices/statecount'
import Process from '@/src/app/components/services/process'
import ContentSection from '@/src/app/components/innerservices/content'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import WebProjects from '@/src/app/components/innerservices/webprojects'
import Pricing from '@/src/app/components/services/pricing'
import Partners from '@/src/app/home/partners'
import Testimonials from '@/src/app/home/testimonials'
import CtaForm from '@/src/app/home/ctaform'
import FollowUs from '@/src/app/home/followus'
import Blogs from '@/src/app/home/blogs'
import Faqs from '@/src/app/home/faq'
import { BannerData, StateCounter, ProcessData, ContentData, NewsLetterData, WebProjectData, PriceData, FAQsData } from '@/src/app/website-development-services/data/data'
import { FollowsData, TestimonialData, PartnerData, CallActionData, BlgosData, } from '@/src/app/home/data/data'

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <StateCount data={StateCounter} />
            <Process data={ProcessData} />
            <ContentSection data={ContentData} simple="yes" />
            <NewsLetter data={NewsLetterData} bgBlack="yes" />
            <WebProjects data={WebProjectData} />
            <Pricing bg="yes" data={PriceData} />
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