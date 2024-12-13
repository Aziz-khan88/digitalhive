import Banner from '@/src/app/contentmarketing/banner'
import WhyChoose from "@/src/app/home/whychoose";
import ServicesMain from '@/src/app/contentmarketing/servicesmain'
import CTA from "@/src/app/home/cta";
import Work from '@/src/app/contentmarketing/work';
import Pricing from '@/src/app/smm/pricing';
import Industries from '@/src/app/home/Industries';
import Awards from '@/src/app/home/awards';
import Partners from '@/src/app/home/partners';
import Testimonials from '@/src/app/home/testimonials';
import CtaForm from '@/src/app/home/ctaform';
import FollowUs from '@/src/app/home/followus';
import Blogs from '@/src/app/home/blogs';
import Faqs from '@/src/app/home/faq';
import Process from '@/src/app/contentmarketing/process';

const Page = () => {
    return (
        <>
            <Banner />
            <WhyChoose />
            <ServicesMain />
            <CTA />
            <Work />
            <Pricing bg="yes" />
            <Process />
            <Industries />
            <Partners />
            <Testimonials />
            <Awards />
            <CtaForm />
            <FollowUs />
            <Blogs />
            <Faqs />
        </>
    )
}

export default Page