import Banner from '@/src/app/components/services/banner'
import WhyChoose from "@/src/app/home/whychoose";
import ServicesMain from '@/src/app/components/services/servicesmain'
import CTA from "@/src/app/home/cta";
import Work from '@/src/app/components/services/work';
import Pricing from '@/src/app/components/services/pricing';
import Industries from '@/src/app/home/Industries';
import Awards from '@/src/app/home/awards';
import Partners from '@/src/app/home/partners';
import Testimonials from '@/src/app/home/testimonials';
import CtaForm from '@/src/app/home/ctaform';
import FollowUs from '@/src/app/home/followus';
import Blogs from '@/src/app/home/blogs';
import Faqs from '@/src/app/home/faq';
import Process from '@/src/app/components/services/process';
import { AwardsData, FollowsData, IndustriesData, PartnerData, BlgosData, WorkData, IndustryItem } from '@/src/app/home/data/data';
import { FAQsData, PriceData, ProcessData, ServicesData, CtaData, CallActionData, ChooseUsData, BannerData, TestimonialData } from '@/src/app/seo/data/data';


const Page = () => {
    return (
        <>
            <Banner data={BannerData} bgtxt="" />
            <ServicesMain data={ServicesData} />
            <WhyChoose data={ChooseUsData} />
            <Process data={ProcessData} />
            <CTA data={CtaData} />
            <Work data={WorkData} category="Seo" />
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