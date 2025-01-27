import BannerLp from "@/src/app/landing/seo1/bannerlp"
import ServicesLp from "@/src/app/landing/components/serviceslp"
import ContentSection from "@/src/app/landing/components/contentsec"
import Pricing from '@/src/app/components/services/pricing'
import PackageDetails from "@/src/app/landing/seo1/package"
import AwardsLp from "@/src/app/landing/components/awardslp"
import ServicesLP from "@/src/app/landing/seo1/serviceslp"
import LocationLP from "@/src/app/landing/seo1/location"
import Industries from "@/src/app/home/Industries";
import WhyChooseLp from "@/src/app/landing/seo/whychooselp"
import ProcessLp from "@/src/app/landing/components/processlp"
import Partners from "@/src/app/home/partners"
import ContactLp from "@/src/app/landing/components/contactlp"
import Faqs from "@/src/app/home/faq";
import { ServicesData, WhyChooseData, FAQsData, ContactData } from "@/src/app/landing/seo1/data/data"
import { PriceData } from "@/src/app/seo-service/data/data"
import { IndustriesData, IndustryItem, PartnerData } from "@/src/app/home/data/data";



const Page = () => {
    return (
        <>
            <BannerLp />
            <ServicesLp data={ServicesData} heigthSmall={true} />
            <ContentSection />
            <Pricing data={PriceData} bg="yes" />
            <PackageDetails />
            <AwardsLp />
            <ServicesLP />
            <LocationLP />
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
            <ProcessLp black={true} />
            <Partners data={PartnerData} />
            <WhyChooseLp data={WhyChooseData} />
            <Faqs data={FAQsData} />
            <ContactLp data={ContactData} />
        </>
    )
}

export default Page