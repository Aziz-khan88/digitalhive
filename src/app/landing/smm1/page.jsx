import BannerLp from "@/src/app/landing/smm1/bannerlp"
import { ClientImages } from "@/src/app/home/data/data"
import Clients from "@/src/app/home/clients"
import Faqs from "@/src/app/home/faq"
import ContentLp from "@/src/app/landing/smm1/contentlp"
import ServicesLp from "@/src/app/landing/components/serviceslp"
import AwardsLp from "@/src/app/landing/components/awardslp"
import Pricing from '@/src/app/components/services/pricing'
import WhyChooseLp from "@/src/app/landing/seo/whychooselp"
import PorcessLp from "@/src/app/landing/content/porcesslp"
import CreativeLp from "@/src/app/landing/components/creativelp"
import StateCountLP from "@/src/app/landing/components/statecountlp"
import CtaLp from "@/src/app/landing/components/ctalp"
import { ServicesData, StateCounter, WhyChooseData, CtaData, FAQsData, PorcessLpData } from "@/src/app/landing/smm1/data/data"
import { PriceData } from "@/src/app/seo/data/data"

const Page = () => {
    return (
        <>
            <BannerLp />
            <Clients data={ClientImages} landingPage={true} />
            <ContentLp />
            <ServicesLp data={ServicesData} heigthSmall={true} />
            <AwardsLp />
            <Pricing data={PriceData} bg="yes" />
            <PorcessLp data={PorcessLpData} />
            <StateCountLP data={StateCounter} />
            <WhyChooseLp data={WhyChooseData} />
            <CreativeLp />
            <CtaLp data={CtaData} bgBlur={true} />
            <Faqs data={FAQsData} />

        </>
    )
}

export default Page