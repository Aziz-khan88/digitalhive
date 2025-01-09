import Banner from '@/src/app/components/innerservices/banner'
import StateCount from '@/src/app/components/innerservices/statecount'
import ServicesMain from '@/src/app/components/services/servicesmain'
import Process from '@/src/app/components/services/process'
import ContentSection from '@/src/app/components/innerservices/content'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import Work from '@/src/app/components/services/work'
import Partners from '@/src/app/home/partners'
import Testimonials from '@/src/app/home/testimonials'
import CtaForm from '@/src/app/home/ctaform'
import FollowUs from '@/src/app/home/followus'
import Blogs from '@/src/app/home/blogs'
import Faqs from '@/src/app/home/faq'
import { BannerData, StateCounter, ProcessData, ContentData, ContentData1, ContentData2, ContentData3, NewsLetterData, ServicesData } from '@/src/app/android-app-development/data/data'
import { FollowsData, TestimonialData, PartnerData, CallActionData, BlgosData, FAQsData, WorkData } from '@/src/app/home/data/data'
import SimpleContent from '@/src/app/components/innerservices/simplecontent'

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <StateCount data={StateCounter} />
            <ServicesMain data={ServicesData} />
            <NewsLetter data={NewsLetterData} />
            <ContentSection data={ContentData2} simple="yes" height={true} bgBlack="yes" />
            <Process data={ProcessData} />
            <SimpleContent data={ContentData} />
            <SimpleContent data={ContentData1} alternat="yes" />
            <SimpleContent data={ContentData3} />
            <Work data={WorkData} category="App Development" />
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