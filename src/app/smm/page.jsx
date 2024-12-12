
import Awards from '@/src/app/home/awards'
import Blogs from '@/src/app/home/blogs'
import CtaForm from '@/src/app/home/ctaform'
import Faqs from '@/src/app/home/faq'
import FollowUs from '@/src/app/home/followus'
import Industries from '@/src/app/home/Industries'
import PlateFroms from '@/src/app/home/plateform'
import Banner from '@/src/app/smm/banner'
import ContentSection from '@/src/app/smm/contentsection'
import Creatives from '@/src/app/smm/creatives'
import CTA from '@/src/app/smm/cta'
import CtaServices from '@/src/app/smm/ctaservices'
import LatestWork from '@/src/app/smm/latestwork'
import Opportunities from '@/src/app/smm/opportunities'
import Pricing from '@/src/app/smm/pricing'
import Solution from '@/src/app/smm/solution'
import TestimonialServices from '@/src/app/smm/testimonialservice'

const Page = () => {
    return (
        <>
            <Banner />
            <Solution />
            <CtaServices />
            <Opportunities />
            <Pricing />
            <CTA />
            <Industries />
            <ContentSection />
            <LatestWork />
            <Awards />
            <PlateFroms />
            <Creatives />
            <TestimonialServices />
            <CtaForm />
            <FollowUs />
            <Blogs />
            <Faqs />
        </>
    )
}

export default Page