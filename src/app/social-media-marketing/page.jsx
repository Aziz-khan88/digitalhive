
import Awards from '@/src/app/home/awards'
import Blogs from '@/src/app/home/blogs'
import CtaForm from '@/src/app/home/ctaform'
import Faqs from '@/src/app/home/faq'
import FollowUs from '@/src/app/home/followus'
import Industries from '@/src/app/home/Industries'
import PlateFroms from '@/src/app/home/plateform'
import Banner from '@/src/app/components/services/banner'
import ContentSection from '@/src/app/components/services/contentsection'
import Creatives from '@/src/app/components/services/creatives'
import CTA from '@/src/app/components/services/cta'
import CtaServices from '@/src/app/components/services/ctaservices'
import LatestWork from '@/src/app/components/services/latestwork'
import Opportunities from '@/src/app/components/services/opportunities'
import Pricing from '@/src/app/components/services/pricing'
import Solution from '@/src/app/components/services/solution'
import TestimonialServices from '@/src/app/components/services/testimonialservice'
import { BannerData, BlgosData, CallActionData, ContentData, CreativesData, CtaData, CtaPinkData, FAQsData, LastestWorkData, OpportunitiesData, PriceData, SolData, TestimonialData } from '@/src/app/social-media-marketing/data/data'
import { AwardsData, IndustriesData, PlatformsData, FollowsData, IndustryItem } from '@/src/app/home/data/data'

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Solution data={SolData} />
            <CtaServices data={CtaData} />
            <Opportunities data={OpportunitiesData} />
            <Pricing data={PriceData} />
            <CTA data={CtaPinkData} />
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
            <ContentSection data={ContentData} />
            <LatestWork data={LastestWorkData} />
            <Awards data={AwardsData} />
            <PlateFroms data={PlatformsData} />
            <Creatives data={CreativesData} />
            <TestimonialServices data={TestimonialData} />
            <CtaForm data={CallActionData} />
            <FollowUs data={FollowsData} />
            <Blogs data={BlgosData} />
            <Faqs data={FAQsData} />
        </>
    )
}

export default Page