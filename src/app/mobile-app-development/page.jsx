import Banner from '@/src/app/components/services/banner'
import WhyChoose from "@/src/app/home/whychoose";
import ServicesMain from '@/src/app/components/services/servicesmain'
import CTA from "@/src/app/home/cta";
import Work from '@/src/app/components/services/work';
import Pricing from '@/src/app/components/services/pricing';
import Industries from '@/src/app/home/Industries';
import ContentSection from '@/src/app/components/innerservices/content'
import ContentAlternet from '@/src/app/components/innerservices/contentalternet'
import Awards from '@/src/app/home/awards';
import Partners from '@/src/app/home/partners';
import Testimonials from '@/src/app/home/testimonials';
import CtaForm from '@/src/app/home/ctaform';
import FollowUs from '@/src/app/home/followus';
import Blogs from '@/src/app/home/blogs';
import Faqs from '@/src/app/home/faq';
import Process from '@/src/app/components/services/process';
import { AwardsData, FollowsData, PartnerData, IndustryItem, WorkData, BlgosData } from '@/src/app/home/data/data';
import { FAQsData, PriceData, ProcessData, ServicesData, CtaData, CallActionData, ChooseUsData, BannerData, IndustriesData, ContentData, ContentData1, ContentData3, TestimonialData } from '@/src/app/mobile-app-development/data/data';


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <ServicesMain data={ServicesData} />
            <WhyChoose data={ChooseUsData} />
            <Process data={ProcessData} />
            <ContentSection data={ContentData} simple="yes" />
            <ContentAlternet data={ContentData1} alternat="yes" simple="yes" />
            <ContentSection data={ContentData3} simple="yes" />
            <CTA data={CtaData} />
            <Work data={WorkData} category="App Development" />
            <Pricing bg="yes" data={PriceData} />
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
            <Partners data={PartnerData} />
            <Testimonials data={TestimonialData} />
            <Awards data={AwardsData} />
            <CtaForm data={CallActionData} />
            <FollowUs data={FollowsData} />
            <Blogs data={BlgosData} />
            <Faqs data={FAQsData} />

        </>
    )
}

export default Page