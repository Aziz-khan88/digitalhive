
import Awards from '@/src/app/home/awards'
import Blogs from '@/src/app/home/blogs'
import CtaForm from '@/src/app/home/ctaform'
import Faqs from '@/src/app/home/faq'
import FollowUs from '@/src/app/home/followus'
import Industries from '@/src/app/home/Industries'
import Work from '@/src/app/components/services/work'
import PlateFroms from '@/src/app/home/plateform'
import Testimonials from '@/src/app/home/testimonials'
import Banner from '@/src/app/components/services/banner'
import ContentSection from '@/src/app/components/services/contentsection'
import CTA from '@/src/app/components/services/cta'
import CtaServices from '@/src/app/components/services/ctaservices'
import LatestWork from '@/src/app/components/services/latestwork'
import Opportunities from '@/src/app/components/services/opportunities'
import Pricing from '@/src/app/components/services/pricing'
import Solution from '@/src/app/components/services/solution'
import TestimonialServices from '@/src/app/components/services/testimonialservice'
import { BannerData, CallActionData, ContentData, CtaData, CtaPinkData, FAQsData, LastestWorkData, OpportunitiesData, PriceData, SolData, CreativesData, TestimonialData } from '@/src/app/social-media-marketing/data/data'
import { AwardsData, IndustriesData, PlatformsData, FollowsData, BlgosData, IndustryItem, WorkData } from '@/src/app/home/data/data'


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Solution data={SolData} />
            <CtaServices data={CtaData} />
            <Opportunities data={OpportunitiesData} />
            <Pricing data={PriceData} tab={true} />
            <CTA data={CtaPinkData} />
            <Work data={WorkData} category="Social Media Marketing" />
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
            <ContentSection data={ContentData} />
            <LatestWork data={LastestWorkData} />
            <Awards data={AwardsData} />
            <PlateFroms data={PlatformsData} />
            <Testimonials data={TestimonialData} />
            <TestimonialServices data={CreativesData} />
            <CtaForm data={CallActionData} />
            <FollowUs data={FollowsData} />
            <Blogs data={BlgosData} />
            <Faqs data={FAQsData} />
        </>
    )
}

export default Page