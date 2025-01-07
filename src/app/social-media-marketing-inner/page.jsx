import Banner from '@/src/app/components/innerservices/banner'
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
import { FollowsData, BlgosData, PlatformsData, PartnerData, IndustryItem } from '@/src/app/home/data/data'
import { ProcessData, BannerData, CallActionData, ChooseUsData, CtaPinkData, FAQsData, IndustriesData, InnerServicesData, NewsLetterData, PriceData, WorkData, TestimonialData } from '@/src/app/social-media-marketing-inner/data/data'


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <InnerServices data={InnerServicesData} />
            <NewsLetter data={NewsLetterData} />
            <WhyChoose data={ChooseUsData} />
            <PlateFroms data={PlatformsData} />
            <Process data={ProcessData} />
            <Work data={WorkData} />
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