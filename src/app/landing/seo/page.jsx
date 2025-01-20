import StateCountLP from "@/src/app/landing/components/statecountlp"
import BannerLp from "@/src/app/landing/seo/bannerlp"
import CtaLp from "@/src/app/landing/components/ctalp"
import WhyChooseLp from "@/src/app/landing/seo/whychooselp"
import ProcessLp from "@/src/app/landing/components/processlp"
import CaseStudyLp from "@/src/app/landing/seo/casestudy"
import ServicesMain from '@/src/app/components/services/servicesmain'
import Pricing from '@/src/app/components/services/pricing'
import { PriceData } from "@/src/app/seo/data/data"
import AwardsLp from "@/src/app/landing/components/awardslp"
import Industries from "@/src/app/home/Industries";
import PlateFromLp from "@/src/app/landing/components/platefromlp"
import Faqs from "@/src/app/home/faq";
import ContactLp from "@/src/app/landing/components/contactlp"
import { StateCounter, CtaData, WhyChooseData, ServicesData, FAQsData, ContactData } from "@/src/app/landing/seo/data/data"
import TalkLp from "@/src/app/landing/components/talk"
import { IndustriesData, IndustryItem } from "@/src/app/home/data/data";



const Page = () => {
    return (
        <>
            <BannerLp />
            <StateCountLP data={StateCounter} />
            <WhyChooseLp data={WhyChooseData} />
            <CtaLp data={CtaData} />
            <ProcessLp black={true} />
            <ServicesMain data={ServicesData} greenbg={true} />
            <CaseStudyLp />
            <Pricing data={PriceData} />
            <TalkLp />
            <AwardsLp />
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
            <PlateFromLp />
            <Faqs data={FAQsData} />
            <ContactLp data={ContactData} />
        </>
    )
}

export default Page