import Banner from '@/src/app/components/innerservices/banner'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
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
import { FollowsData, TestimonialData, IndustryItem, PartnerData, CallActionData, BlgosData, FAQsData } from '@/src/app/home/data/data'
import ContentSection from '@/src/app/components/innerservices/content'
import BookTabs from '@/src/app/components/innerservices/booktabs'
import { BannerData, ServicesData, NewsLetterData, ContentData, ProcessData, WorkData, BookTabsData, PriceData, CtaPinkData, IndustriesData } from '@/src/app/children-book-illustration/data/data'
import ServicesMain from '@/src/app/components/services/servicesmain'


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <ServicesMain data={ServicesData} />
            <ContentSection data={ContentData} />
            <Process data={ProcessData} />
            <NewsLetter data={NewsLetterData} />
            <Work data={WorkData} />
            <BookTabs data={BookTabsData} />
            <Pricing bg="yes" data={PriceData} />
            <CTA data={CtaPinkData} />
            <Partners data={PartnerData} />
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
            <Testimonials data={TestimonialData} />
            <CtaForm data={CallActionData} />
            <FollowUs data={FollowsData} />
            <Blogs data={BlgosData} />
            <Faqs data={FAQsData} />
        </>
    )
}

export default Page