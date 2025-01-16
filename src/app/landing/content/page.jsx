import BannerLp from "@/src/app/landing/content/bannerlp"
import WhyChooseLp from "@/src/app/landing/seo/whychooselp"
import CtaLp from "@/src/app/landing/components/ctalp"
import ServicesLp from "@/src/app/landing/content/serviceslp"
import MarketPoints from "@/src/app/landing/content/marketpoints"
import PorcessLp from "@/src/app/landing/content/porcesslp"
import Pricing from '@/src/app/components/services/pricing'
import TalkLp from "@/src/app/landing/components/talk"
import AwardsLp from "@/src/app/landing/components/awardslp"
import PlateFromLp from "@/src/app/landing/components/platefromlp"
import Faqs from "@/src/app/home/faq";
import ContactLp from "@/src/app/landing/components/contactlp"
import BookTabs from '@/src/app/components/innerservices/booktabs'
import { PriceData } from "@/src/app/seo/data/data"
import { WhyChooseData, CtaData, ServiceslpData, MarketPointsData, PorcessLpData, ContactData, FAQsData, BookTabsData } from "@/src/app/landing/content/data/data"
import { BookTabsItem } from '@/src/app/content-marketing/data/data'

const Page = () => {
    return (
        <>
            <BannerLp />
            <WhyChooseLp data={WhyChooseData} />
            <CtaLp data={CtaData} BgDrak={true} />
            <ServicesLp data={ServiceslpData} />
            <MarketPoints data={MarketPointsData} />
            <PorcessLp data={PorcessLpData} />
            <TalkLp />
            <Pricing data={PriceData} tab={true} bg="yes" />
            <BookTabs data={BookTabsData} dataItem={BookTabsItem} />
            <AwardsLp />
            <PlateFromLp />
            <Faqs data={FAQsData} />
            <ContactLp data={ContactData} />
        </>
    )
}

export default Page