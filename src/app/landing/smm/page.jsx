import StateCountLP from "@/src/app/landing/components/statecountlp"
import BannerLp from "@/src/app/landing/components/bannerlp"
import ProcessLp from "@/src/app/landing/components/processlp"
import CtaLp from "@/src/app/landing/components/ctalp"
import ServicesLp from "@/src/app/landing/components/serviceslp"
import CreativeLp from "@/src/app/landing/components/creativelp"
import AwardsLp from "@/src/app/landing/components/awardslp"
import PlateFromLp from "@/src/app/landing/components/platefromlp"
import TalkLp from "@/src/app/landing/components/talk"
import MarketTrend from "@/src/app/landing/components/markettrend"
import Pricing from '@/src/app/components/services/pricing'
import { PriceData } from '@/src/app/social-media-marketing/data/data'
import ContactLp from "@/src/app/landing/components/contactlp"
import Faqs from "@/src/app/home/faq";
import { StateCounter, CtaData, FAQsData, ContactData, ServicesData } from "@/src/app/landing/smm/data/data"


const Page = () => {
    return (
        <>
            <BannerLp />
            <StateCountLP data={StateCounter} />
            <ProcessLp />
            <CtaLp data={CtaData} />
            <ServicesLp data={ServicesData} />
            <CreativeLp />
            <TalkLp />
            <PlateFromLp />
            <Pricing data={PriceData} tab={true} />
            <AwardsLp />
            <MarketTrend />
            <Faqs data={FAQsData} />
            <ContactLp useImg={true} data={ContactData} />
        </>
    )
}

export default Page