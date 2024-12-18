import Banner from "@/src/app/home/banner";
import About from "@/src/app/home/about";
import Service from "@/src/app/home/service";
import CTA from "@/src/app/home/cta";
import Work from "@/src/app/home/work";
import Partners from "@/src/app/home/partners";
import Industries from "@/src/app/home/Industries";
import WhyChoose from "@/src/app/home/whychoose";
import PlateFroms from "@/src/app/home/plateform";
import Awards from "@/src/app/home/awards";
import CTA1 from "@/src/app/home/cta1";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import { AboutData, AwardsData, BannerData, BlgosData, CallActionData, ChooseUsData, CtaData, CtaData01, FAQsData, FollowsData, IndustriesData, IndustryItem, PartnerData, PlatformsData, ServicesData, TestimonialData, WorkData } from "@/src/app/home/data/data";


export default function Home() {
  return (
    <>
      <Banner data={BannerData} />
      <About data={AboutData} />
      <Service data={ServicesData} />
      <CTA data={CtaData} />
      <Work data={WorkData} />
      <Partners data={PartnerData} />
      <Industries data={IndustriesData} IndustryData={IndustryItem} />
      <WhyChoose data={ChooseUsData} />
      <PlateFroms data={PlatformsData} />
      <Awards data={AwardsData} />
      <CTA1 data={CtaData01} />
      <Testimonials data={TestimonialData} />
      <CtaForm data={CallActionData} />
      <FollowUs data={FollowsData} />
      <Blogs data={BlgosData} />
      <Faqs data={FAQsData} />
    </>
  );
}
