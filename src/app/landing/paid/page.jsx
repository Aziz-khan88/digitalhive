import StateCountLP from "@/src/app/landing/components/statecountlp"
import BannerLp from "@/src/app/landing/paid/bannerlp"
import StateCount from '@/src/app/components/innerservices/statecount'
import ServicesLp from "@/src/app/landing/components/serviceslp"
import ProcessLp from "@/src/app/landing/components/processlp"
import WebProjects from '@/src/app/components/innerservices/webprojects'
import AwardsLp from "@/src/app/landing/components/awardslp"
import TalkLp from "@/src/app/landing/components/talk"
import Pricing from '@/src/app/components/services/pricing'
import { PriceData } from '@/src/app/social-media-marketing/data/data'
import ContactLp from "@/src/app/landing/components/contactlp"
import Faqs from "@/src/app/home/faq";
import { StateCounter, FAQsData, ContactData, StateCounterPoints, WebProjectData, SimpleContent, ServicesData } from "@/src/app/landing/paid/data/data"
import { WebProjectItem } from '@/src/app/web-development/data/data'

const Page = () => {
    return (
        <>
            <BannerLp />
            <StateCountLP data={StateCounter} video={true} />
            <ServicesLp data={ServicesData} />
            <StateCount data={StateCounterPoints} />
            <StateCountLP data={SimpleContent} alternet={true} video={true} />
            <ProcessLp />
            <TalkLp />
            <Pricing data={PriceData} bg="yes" />
            <WebProjects data={WebProjectData} dataItem={WebProjectItem} />
            <AwardsLp />
            <Faqs data={FAQsData} />
            <ContactLp data={ContactData} />
        </>
    )
}

export default Page