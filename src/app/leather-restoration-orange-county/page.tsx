import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import Faq from "@/components/Faq";

const title = "Leather Couch Restoration in Orange County | ReLeather";
const description =
  "Your local leather experts in Orange County. Leather restoration, cleaning, dyeing, upholstery. Free pick up & delivery. Fullerton, CA. 5 Year Guarantee.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-restoration-orange-county" },
  openGraph: { url: "/leather-restoration-orange-county", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const whyReLeather = [
  "Orange County family business",
  "Over 25 years leather experience",
  "Same leather process as factory finish",
  "Leather Restoration work 5 Year Guarantee",
  "Fully insured and certified",
  "Top Rated Reviews",
];

const beforeAfterItems = [
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff/v1685089373/before-after/leather-restoration-couch-orange-county-tan-leather-faded-stained-dry-restored-color-before-300px.jpg",
    beforeAlt: "Tan Worn Leather Couch Restored to Original Color in Newport Beach, CA - Before Picture",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff/v1685089373/before-after/leather-restoration-couch-orange-county-tan-leather-faded-stained-dry-restored-color-after-300px.jpg",
    afterAlt: "Tan Worn Leather Couch Restored to Original Color in Newport Beach, CA - After Picture",
    caption: "Tan Worn and Dry Leather Couch Restored to Original Color in Newport Beach, CA",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_lfill,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff/v1655704546/before-after/leather-repaired-chair-cushion-before.jpg",
    beforeAlt: "Cracked Old Antique Leather Side Chair Restored to Original Color in Irvine, CA - Before Picture",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_lfill,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff/v1655704546/before-after/leather-repaired-chair-cushion-after.jpg",
    afterAlt: "Cracked Old Antique Leather Side Chair Restored to Original Color in Irvine, CA - After Picture",
    caption: "Cracked Old Antique Leather Tufted Button Side Chair Set Restored to Original Color in Irvine, CA",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff/v1685891398/before-after/leather-restoration-tufted-lounge-chair-tan-color-before.jpg",
    beforeAlt: "Light Tan Aniline Leather Tufted Lounge Chair Discolored and Oily Stains Fixed in Seal Beach, CA - Before Picture",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff/v1685891398/before-after/leather-restoration-tufted-lounge-chair-tan-color-after.jpg",
    afterAlt: "Light Tan Anilne Leather Tufted Lounge Chair Color Faded and Oily Stains with Missing Upholstered Bottons Fixed, Redyed and Restored in Seal Beach, CA - After Picture",
    caption: "Tan Natural Tufted Leather Lounge Chair Discolored and Oily Stains Fixed in Seal Beach, CA",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff/v1685891548/before-after/leather-couch-color-change-orange-county-custom-charcoal-grey-before-300px.jpg",
    beforeAlt: "Color Change to Custom Grey fro Arizona Leather Sectional Sofa with Chaise in Lake Forest, CA - Before Picture",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff/v1685891548/before-after/leather-couch-color-change-orange-county-custom-charcoal-grey-after_300px.jpg",
    afterAlt: "Color Change to Custom Grey fro Arizona Leather Sectional Sofa with Chaise in Lake Forest, CA - After Picture",
    caption: "Custom Grey Color Change for Arizona Leather Sectional Sofa with Chaise in Lake Forest, CA",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff/v1685894329/before-after/aniline-leather-couch-oil-stained-and-discolored-in-dana-point-orange-county-before-300.jpg",
    beforeAlt: "Worn and Faded Pure Aniline Leather Bradington Young Couch Restored in Dana Point, CA - Before Picture",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff/v1685894329/before-after/aniline-leather-couch-oil-stained-and-discolored-in-dana-point-orange-county-after-300.jpg",
    afterAlt: "Worn and Faded Pure Aniline Leather Bradington Young Couch Restored in Dana Point, CA - After Picture",
    caption: "Worn and Faded Pure Aniline Leather Bradington Young Couch Restored in Dana Point, CA",
  },
];

const processSteps = [
  { title: "1 Inspection", body: "We identify the type of leather—pigmented, pure aniline, wax/oil pull up, semi-aniline, or nubuck. We inspect for damage including pet scratches, cracks, fading, marks, dryness, more." },
  { title: "2 Cleaning & Conditioning", body: "We prepare the upholstery, deep clean, lift surface dirt, extract oils and ingrained soiling, remove old sealants, moisturize and soften for a supple and durable surface." },
  { title: "3 Leather Restoration", body: "We treat and resurface wear and tear including the removal of surface scratches, cracking, nicks, spots. We use speciality refurbishing treatments to ensure seamless repairs." },
  { title: "4 Color Restoration", body: "We redye the original factory color with acrylic leather dye which won't peel, crack, or rub off. We color match and apply pigment by hand and spray gun for a seamless natural finish." },
  { title: "5 Finish Protection", body: "We seal the leather surface with a protective coating to prevent color transfer, stains, and spots. Our sealant is available in natural, matte, and gloss to match the original finish." },
  { title: "6 Home Delivery", body: "Before delivering your restored leather furniture, we conduct a final inspection and carefully plastic wrap, and deliver your couch, sofa, loveseat, or chairs to your home." },
];

const locationFaqItems = [
  {
    question: "How Much Does Leather Restoration Cost?",
    answer: (
      <p>
        We tailor our services to meet the specific needs of your furniture. Cost varies in terms of furniture size, condition, and upholstery type. We offer onsite inspections and take these factors into account.
      </p>
    ),
  },
  {
    question: "How Long Does Leather Restoration Take?",
    answer: (
      <p>
        Typically takes around 1 to 2 weeks to complete, although the duration may vary depending on services provided.
      </p>
    ),
  },
  {
    question: "What Type of Leather Can Be Restored?",
    answer: (
      <>
        <p>
          We treat and restore the following protected and unprotected aniline leather.
        </p>
        <p className="mt-3 flex flex-wrap gap-2">
          <a href="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg" target="_blank" rel="noopener noreferrer" title="Pigmented Leather"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/w_115,h_100,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg" alt="Type of Leather - Pigmented Leather" width={115} height={100} loading="lazy" className="border-2 border-releather-orange object-cover" />
          </a>
          <a href="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Aniline,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg" target="_blank" rel="noopener noreferrer" title="Aniline Leather"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/w_115,h_100,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Aniline,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg" alt="Type of Leather - Aniline Leather" width={115} height={100} loading="lazy" className="border-2 border-releather-orange object-cover" />
          </a>
          <a href="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg" target="_blank" rel="noopener noreferrer" title="Semi-Aniline Leather"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/w_115,h_100,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg" alt="Type of Leather - Semi-Aniline Leather" width={115} height={100} loading="lazy" className="border-2 border-releather-orange object-cover" />
          </a>
          <a href="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg" target="_blank" rel="noopener noreferrer" title="Nubuck Leather"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/w_115,h_100,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg" alt="Type of Leather - Nubuck Leather" width={115} height={100} loading="lazy" className="border-2 border-releather-orange object-cover" />
          </a>
        </p>
      </>
    ),
  },
  {
    question: "What Type of Sealant Finishes Are Available?",
    answer: (
      <>
        <p>
          Choose from a natural, matte, or gloss sealant, designed to maintain the leather&apos;s original natural appearance.
        </p>
        <p className="mt-3 flex flex-wrap gap-2">
          <a href="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_300/l_,l_text:montserrat_30_style_light:Natural%20Finish,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-natural-finish.jpg" target="_blank" rel="noopener noreferrer" title="Natural Finish"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/w_104,h_90,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Natural,co_rgb:ffffff,y_10/v1653279850/before-after/leather-dyeing-natural-finish.jpg" alt="Leather Couch Restoration Natural Finish Type Applied" width={104} height={90} loading="lazy" className="border-2 border-releather-orange object-cover" />
          </a>
          <a href="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_300/l_,l_text:montserrat_30_style_light:Glossy%20Finish,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-glossy-finish.jpg" target="_blank" rel="noopener noreferrer" title="Glossy Finish"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/w_104,h_90,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Glossy,co_rgb:ffffff,y_10/v1653279850/before-after/leather-dyeing-glossy-finish.jpg" alt="Leather Couch Restoration Glossy Finish Type Applied" width={104} height={90} loading="lazy" className="border-2 border-releather-orange object-cover" />
          </a>
          <a href="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_300/l_,l_text:montserrat_30_style_light:Matte%20Finish,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-matte-finish.jpg" target="_blank" rel="noopener noreferrer" title="Matte Finish"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/w_104,h_90,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Matte,co_rgb:ffffff,y_10/v1653279850/before-after/leather-dyeing-matte-finish.jpg" alt="Leather Couch Restoration Matte Finish Type Applied" width={104} height={90} loading="lazy" className="border-2 border-releather-orange object-cover" />
          </a>
        </p>
      </>
    ),
  },
];

export default function LeatherRestorationOrangeCountyPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Leather Couch Restoration in Orange County"
            subtitle={<span className="text-xl">📍 Your local leather experts!</span>}
            primaryCta={{
              href: "/estimate",
              title: "Leather Couch Restoration Service Cost",
              label: "Leather Couch Restoration Quote",
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title: "(949) 529-4727",
              label: "(949)-529-4727",
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/v1684991621/before-after/leather-restoraton-orange-county-leather-chairs-restored-before-after.jpg",
              alt: "Leather Restoration Orange County Old Leather Chairs Restored - Before and After",
              title: "Leather Restoration Orange County Old Leather Chairs Restored - Before and After",
              width: 560,
              height: 400,
            }}
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Leather Couch Restoration Near Me
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <h4 className="mb-4 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
                  Why → ReLeather
                </h4>
                <ul className="list-none space-y-2 p-0 font-sans text-base leading-relaxed text-gray-800">
                  {whyReLeather.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 before:content-['→'] before:font-bold before:text-releather-orange">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1683467763/before-after/leather-sofa-restoration-customer-orange-county.jpg"
                  alt="The best leather restoration company - Satisfied Customer from Orange County"
                  title="The best leather restoration company - Satisfied Customer from Orange County"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="border-4 border-releather-orange object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h3 className="font-display text-xl font-normal tracking-tight text-black">
              ReLeather Leather Restoration Orange County
            </h3>
            <h3 className="mt-1 font-display text-xl font-normal tracking-tight text-black">
              Orange County Leather Restoration Company
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              📍{" "}
              <a
                href="https://goo.gl/maps/vm82ZFK2XCCHVEm6A?coh=178573&entry=tt"
                target="_blank"
                rel="noopener noreferrer"
                title="Leather Restoration Orange County Company ReLeather Location"
                className="font-medium text-releather-orange underline underline-offset-2 hover:text-black"
              >
                751 S State College Blvd, Unit 38, Fullerton, CA 92831
              </a>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/v1654055821/icons/ReLeather-Delivery-Van.png"
                alt="Leather Couch Restoration Free Pick Up and Delivery in Orange County"
                title="Leather Couch Restoration Free Pick Up and Delivery in Orange County"
                width={120}
                height={80}
                loading="lazy"
              />
              <p className="font-sans text-base font-bold text-black">
                <strong>Free Pick Up &amp; Delivery in Orange County</strong>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/v1654055599/logo/logo.png"
                alt="ReLeather Leather Restoration Logo"
                title="ReLeather Leather Restoration Logo"
                width={100}
                height={60}
                loading="lazy"
              />
              <p className="font-sans text-base font-bold text-black">ReLeather Since 2008</p>
            </div>
            <p className="mt-6 font-sans text-base leading-relaxed text-gray-800">
              ReLeather is the trusted name in leather restoration Orange County and recommended by leather furniture manufacturers. We provide quality leather restoration and dyeing services designed to restore the original look and feel of your leather furniture and goods. Let our experienced and certified leather technicians by IICRC (Institute of Inspection Cleaning and Restoration Certification) repair and care for your valuable leather. When you hire us, your leather is in the hands of technicians trained and accredited to provide you with dependable service that meets the industry standard of care. Restoring your leather not only makes a difference in preserving the quality of your leather but also saves you money.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,w_270/e_vignette/v1685467689/company/leather-couch-restoration-expert-worker-in-orange-county.jpg"
                alt="ReLeather Orange County Leather Sofa Restoration Shop Experts"
                title="ReLeather Orange County Leather Sofa Restoration Experts"
                width={270}
                height={270}
                loading="lazy"
                className="border-4 border-releather-orange object-cover"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                Jose, Leather Technician (LCT)
                <br />
                Orange County, CA USA
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Complete Leather Restoration &amp; Upholstery Services in Orange County
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/services/leather-restoration"
                title="Leather Restoration Service"
                className="inline-flex border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Leather Restoration
              </Link>
              <Link
                href="/services/leather-cleaning"
                title="Professional Leather Cleaning Service"
                className="inline-flex border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Leather Cleaning
              </Link>
              <Link
                href="/services/leather-dyeing"
                title="Leather Dyeing Service"
                className="inline-flex border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Leather Dyeing
              </Link>
              <Link
                href="/services/leather-upholstery"
                title="Leather Reupholstery Service"
                className="inline-flex border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Leather Upholstery
              </Link>
            </div>
            <h4 className="mt-6 font-display text-lg font-normal tracking-tight text-black">
              → Luxury Leather Sofa, Chairs, Loveseats, Car Seats, Cushions
            </h4>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h5 className="mb-6 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
              Before and After
            </h5>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {beforeAfterItems.map((item, i) => (
                <figure key={i} className="border-4 bg-releather-dark p-4" style={{ borderColor: "#23262f" }}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">Before</p><Image
                        src={item.beforeSrc}
                        alt={item.beforeAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover border-2 border-[#23262f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">After</p><Image
                        src={item.afterSrc}
                        alt={item.afterAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover border-2 border-[#23262f]"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-4 border-t-2 border-gray-500 pt-4 font-sans text-sm font-medium text-white">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h6 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              Why Choose Leather Restoration?
            </h6>
            <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-releather-orange">
              → 3 Benefits
            </h6>
            <ul className="mt-6 list-none space-y-6 p-0">
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal tracking-tight text-black">Value</h6>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Luxury brand name, American or Italian made leather furniture is an expense. By repairing, you <em>renew the value</em> of your quality leather.
                </p>
              </li>
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal tracking-tight text-black">Savings</h6>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  <em>Replacing quality leather furniture is costly.</em> Save money by restoring your quality furniture for future generations to enjoy.
                </p>
              </li>
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal tracking-tight text-black">Recession</h6>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  <em>Leather furniture is an investment.</em> In a recession, restoring is the <em>cost-effective way to save money</em> as retail prices rise.
                </p>
              </li>
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h6 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              Signs of Leather Couch Damage
            </h6>
            <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-releather-orange">
              → 4 Common Problems
            </h6>
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
              <li className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_250,w_250,x_165,y_370//ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Faded,co_rgb:ffffff/v1653700009/before-after/faded-leather-couch.png"
                  alt="Color Faded and Discolored of a Aniline Leather Sofa"
                  title="Color Faded and Discolored of a Aniline Leather Sofa"
                  width={175}
                  height={175}
                  loading="lazy"
                  className="mx-auto border-2 border-releather-orange object-cover"
                />
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-800">
                  Discolored leather from direct sunlight exposure especially in leathers with minimal protection.
                </p>
              </li>
              <li className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_150,w_200,x_210,y_400//ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Cracked,co_rgb:ffffff/v1653699338/before-after/cracked-leather-cushion-restoration.png"
                  alt="Cracking of a Aniline Leather Sofa"
                  title="Cracking of Aniline Leather Sofa"
                  width={175}
                  height={175}
                  loading="lazy"
                  className="mx-auto border-2 border-releather-orange object-cover"
                />
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-800">
                  Cracking leather from loss of moisture makes your leather texture rough and easy to rip.
                </p>
              </li>
              <li className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_250,w_250,x_200,y_460//ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Scratched,co_rgb:ffffff/v1653624183/before-after/scratched-leather-chair.png"
                  alt="Scratched of a Aniline Leather Sofa"
                  title="Scratched of Aniline Leather Sofa"
                  width={175}
                  height={175}
                  loading="lazy"
                  className="mx-auto border-2 border-releather-orange object-cover"
                />
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-800">
                  Scratched leather from damage to the leather surface results in visible scuffs, marks, abrasions.
                </p>
              </li>
              <li className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_225,w_225,x_274,y_23/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Stained,co_rgb:ffffff/v1653624183/before-after/stained-leather-chair-restoration.png"
                  alt="Stained of a Aniline Leather Sofa"
                  title="Stained of Aniline Leather Sofa"
                  width={175}
                  height={175}
                  loading="lazy"
                  className="mx-auto border-2 border-releather-orange object-cover"
                />
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-800">
                  Stained leather from spills and oily headrests, armrests penetrate the pores in aniline leather.
                </p>
              </li>
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h6 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              How Does Leather Couch Restoration Work?
            </h6>
            <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-releather-orange">
              → 6 Step-by-Step Process
            </h6>
            <p className="mt-6 font-sans text-base leading-relaxed text-gray-800">
              Throughout the entire restoration process, we will keep you informed about the progress and provide updates on timelines, so you are always in the loop.
              Trust ReLeather for the comprehensive restoration of your leather. Our expertise, attention to detail, and commitment to customer satisfaction ensures your furniture becomes a centerpiece in your home once again.
            </p>
            <ul className="mt-8 list-none space-y-4 p-0">
              {processSteps.map((step, i) => (
                <li key={i} className="border-4 border-black p-4">
                  <h5 className="font-display text-lg font-normal tracking-tight text-black">{step.title}</h5>
                  <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">{step.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h6 className="mb-8 font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              What Our Customers Are Saying
            </h6>
            <ul className="list-none space-y-10 p-0">
              <li className="border-4 border-black p-6">
                <div className="flex flex-wrap items-center gap-4"><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/v1655688729/icons/google-review-leather-restoration.png"
                    alt="Google 5 Star Reviews Leather Couch Restoration - ReLeather"
                    width={150}
                    height={50}
                    loading="lazy"
                  /><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1685126530/before-after/leather-restoration-couch-positive-review-customer-from-orange-county.jpg"
                    alt="Leather Restoration Technician Repairing a Leather Couch"
                    width={125}
                    height={125}
                    loading="lazy"
                    className="rounded-full border-4 border-releather-orange object-cover"
                  />
                </div>
                <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
                  Recently had our 14 year old leather corner group sofa restored by ReLeather.  They did an AMAZING job of restoring it to &quot;like New&quot; condition.  As you can see from the before and after photos, it was a truly amazing transformation.  <strong>They not only restored the color of the sofa back to its original color, but repaired piping and restuffed cushions</strong>. It literally is like new for a fraction of the cost of replacement. These guys are artists with leather restoration and worth every penny! 😊 <strong>from Newport Beach, CA</strong>
                </p>
              </li>
              <li className="border-4 border-black p-6">
                <div className="flex flex-wrap items-center gap-4"><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/v1655689091/icons/facebook-reviews-leather-restoration.png"
                    alt="Facebook 5 Star Reviews Leather Couch Restoration - ReLeather"
                    width={150}
                    height={50}
                    loading="lazy"
                  /><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1685124929/before-after/leather-restoration-technician-working-on-couch.jpg"
                    alt="Leather Restoration Technician Repairing a Leather Couch"
                    width={125}
                    height={125}
                    loading="lazy"
                    className="rounded-full border-4 border-releather-orange object-cover"
                  />
                </div>
                <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
                  We absolutely love our couch that they did. <em>We get so many compliments on it. It looks brand new</em>. We were going to get rid of the couch, but couldn&apos;t find a replacement for it. It seats 10 people and fits our family perfectly. I had heard about the ReLeather shop and thought we would check it out. They are amazing!!!! Our couch was a throw away and now it is the focal point of our family room. 👍 <strong>from Anaheim, CA</strong>
                </p>
              </li>
              <li className="border-4 border-black p-6">
                <div className="flex flex-wrap items-center gap-4"><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/v1683479486/logo/yelp-5-star-leather-couch-restoration-company-best.png"
                    alt="Yelp 5 Star Reviews Leather Couch Restoration - ReLeather"
                    width={150}
                    height={50}
                    loading="lazy"
                  /><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1685123026/before-after/positive-review-from-leather-restoration-customer-in-orange-county.jpg"
                    alt="The best leather restoration company - Satisfied Customer from Orange County"
                    width={125}
                    height={125}
                    loading="lazy"
                    className="rounded-full border-4 border-releather-orange object-cover"
                  />
                </div>
                <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
                  Jose &amp; Roberto are craftsmen of the highest order, gentlemen of the first degree &amp; honest, reliable businessmen <strong>They restored a 15 year old sofa &amp; 2 matching chairs that appeared ready for the curb to look showroom new</strong>. They were on time, did what they promised and charged a fair and reasonable price. We were so pleased with their work that we called them back to do the same for other chairs &amp; ottomans. In a word, OUTSTANDING. Highly recommended in Orange County. 🤩 <strong>from Laguna Niguel, CA</strong>
                </p>
              </li>
            </ul>
          </section>

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={locationFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
