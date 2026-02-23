import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BlogPostSubsection from "@/components/BlogPostSubsection";
import Faq from "@/components/Faq";

const title = "Replacement Cushions for Leather Couch | ReLeather";
const description =
  "Leather couch seat cushion replacement and reupholstery. Full and partial reupholstery, leather matching. Torn, cracked, creased, pet damage. Orange County and mail-in.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/replacement-cushions-for-leather-couch" },
  openGraph: { url: "/replacement-cushions-for-leather-couch", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const processSteps = [
  {
    title: "Get Quote",
    body: "Submit form and include photos to provide us with detailed information and visuals of your cushion.",
  },
  {
    title: "Pickup/Mail",
    body: "Local customers can drop off or opt for us to collect the cushions. You can also ship us the cushion cover.",
  },
  {
    title: "Delivery",
    body: "Delivery of your seat cushions varies depending on the job and leather material. Average time is 2 weeks.",
  },
];

const recommendedItems = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1697020657/before-after/leather-reupholstery/leather-couch-ripped-rip-tear-torn-fix-leather-recover-service-thumb.jpg",
    alt: "Leather Seat Cushion Replacement Fixes Ripped Torn Leather Couch Sofa Chair - Close Image",
    title: "Leather Seat Cushion Replacement Fixes Ripped Torn Leather Couch Sofa Chair - Close Image",
    label: "Tear",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1697020657/before-after/leather-reupholstery/leather-couch-cracked-dry-fix-leather-recover-service-thumb.jpg",
    alt: "Leather Cushion Replacement replaces cracked split leather seat sofa couch cushions",
    title: "Leather Cushion Replacement replaces cracked split leather seat sofa couch cushions",
    label: "Cracks",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/w_200,h_200/v1686222871/before-after/leather-cleaning/leather-conditioning-couch-dry-rough-cracking-surface-close-up.jpg",
    alt: "Leather Couch Seat Replacement Covers replaces exessively creased, loose, saggy leather seats",
    title: "Leather Couch Seat Replacement Covers replaces exessively creased, loose, saggy leather seats",
    label: "Creases",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1697020657/before-after/leather-reupholstery/leather-couch-worn-tired-fix-leather-recover-service-thumb.jpg",
    alt: "Leather Couch Seat Replacement Covers replaces worn out tired leather seats cushion",
    title: "Leather Couch Seat Replacement Covers replaces worn out tired leather seats cushion",
    label: "Oily",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1697366873/before-after/leather-reupholstery/leather-cushion-replacement-for-pet-damage-seat-dog-puppy-chew-cat-scratched-thumb.jpg",
    alt: "Leather Couch Seat Replacement Covers replaces pet dog puppy chewed ripped clawed cat scratched leather seats cushion",
    title: "Leather Couch Seat Replacement Covers replaces pet dog puppy chewed ripped clawed cat scratched leather seats cushion",
    label: "Pets",
  },
];

const leatherMatchingItems = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_250,w_250,x_165,y_370//ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Grades,co_rgb:ffffff,g_south,y_200/v1653007847/leather/Harmony_Brandy_HI.jpg",
    alt: "Types of Leather Grades Top Grain Leather for Leather Couch Cushion Replacement and Recover",
    title: "Types of Leather Grades Top Grain Leather for Leather Couch Cushion Replacement and Recover",
    h6: "Top Grain Aniline, Pigmented, Nubuck, Oil & Wax",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_250,w_475,x_215,y_270/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Finishes,co_rgb:ffffff,g_south,y_200/v1697310847/before-after/leather-reupholstery/leather-finshes.jpg",
    alt: "Types of Leather Grades Top Grain Leather for Leather Couch Cushion Replacement and Recover",
    title: "Types of Leather Grades Top Grain Leather for Leather Couch Cushion Replacement and Recover",
    h6: "Matte, Glossy, Natural Surface Coating",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_250,w_250,x_215,y_370//ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Textures,co_rgb:ffffff,g_south,y_200/v1697312188/before-after/leather-reupholstery/leather-textures.jpg",
    alt: "Types of Leather Texture Fine Pebbled Grain Distressed Embossed for Leather Couch Cushion Replacement and Recover",
    title: "Types of Leather Texture Fine Pebbled Grain Distressed Embossed for Leather Couch Cushion Replacement and Recover",
    h6: "Fine, Pebbled Grain, Distressed, Embossed",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_scale/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Colors,co_rgb:ffffff,g_south,y_200/v1697311216/before-after/leather-reupholstery/leather-colors.jpg",
    alt: "Leather Colors Available for Leather Couch Replacement and Recover",
    title: "Leather Colors Available for Leather Couch Replacement and Recover",
    h6: "Wide Selection of Colors",
  },
];

const commonIssues = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1697020657/before-after/leather-reupholstery/leather-couch-ripped-rip-tear-torn-fix-leather-recover-service-thumb.jpg",
    alt: "Leather Couch Seat Replacement Covers replaces old torn ripped cut leather seats cushion",
    title: "Leather Couch Seat Replacement Covers replaces old torn ripped cut leather seats cushion",
    h4: "Torn Leather",
    text: "Replace cushion cover to repair rips and tears from dried worn out leather. ",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1697020657/before-after/leather-reupholstery/leather-couch-cracked-dry-fix-leather-recover-service-thumb.jpg",
    alt: "Leather Couch Seat Replacement Covers replaces old cracking dried dry leather seats cushion",
    title: "Leather Couch Seat Replacement Covers replaces old cracking dried dry leather seats cushion",
    h4: "Cracking Leather",
    text: "Leather cushion replacement is the fix for cracks in old leather seats.",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1686222871/before-after/leather-cleaning/leather-conditioning-couch-dry-rough-cracking-surface-close-up.jpg",
    alt: "Leather Couch Seat Replacement Covers replaces creased saggy loose creasing leather seats cushion",
    title: "Leather Couch Seat Replacement Covers replaces creased saggy loose creasing leather seats cushion",
    h4: "Creased Leather",
    text: "Cushion recovering removes creases and sagging in aging leather cushions.",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1697020657/before-after/leather-reupholstery/leather-couch-worn-tired-fix-leather-recover-service-thumb.jpg",
    alt: "Leather Couch Seat Replacement Covers replaces oil spotting grease stains body oils from head hair body arms leather seats cushion",
    title: "Leather Couch Seat Replacement Covers replaces oil spotting grease stains body oils from head hair body arms leather seats cushion",
    h4: "Oiled Leather",
    text: "Reupholster cushions to remove dark spot stains from body, head, and arms oils.",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1697366873/before-after/leather-reupholstery/leather-cushion-replacement-for-pet-damage-seat-dog-puppy-chew-cat-scratched-thumb.jpg",
    alt: "Leather Couch Seat Replacement Covers replaces pet dog puppy chewed ripped clawed cat scratched leather seats cushion",
    title: "Leather Couch Seat Replacement Covers replaces pet dog puppy chewed ripped clawed cat scratched leather seats cushion",
    h4: "Damaged Leather",
    text: "Replace a pet damaged cushion, whether it's a dog's chewing or cat scratches.",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_125/v1697368072/before-after/leather-reupholstery/leather-repuholstery-for-seat-cushions-thumb.jpg",
    alt: "Re-upholster new dining room chair seats, restaurant seating, or throw pillows.",
    title: "Re-upholster new dining room chair seats, restaurant seating, or throw pillows",
    h4: "Custom Cushions",
    text: "Re-upholster new dining room chair seats, restaurant seating, or throw pillows.",
  },
];

const beforeAfterSlides = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1697182010/before-after/leather-reupholstery/Leather-Seat-Cushion-Replacements-ReLeather-Before.jpg",
    beforeAlt: "Ripped Leather Sofa Seat Cushion Recovered with New Matching Leather - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1697182010/before-after/leather-reupholstery/Leather-Seat-Cushion-Replacements-ReLeather-After.jpg",
    afterAlt: "Ripped Leather Sofa Seat Cushion Recovered with New Matching Leathr - After Picture",
    caption: "Worn Out and Ripped Leather Living Room Couch Seat Cushion Recovered with New Matching Leather",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1697379630/before-after/leather-reupholstery/leather-reupholstery-wingback-chair-cushion-before.jpg",
    beforeAlt: "Cracked, Creased, Wrinkled Leather Seat Cushion Chippendale Wing Back Chair Reupholstered with Matching Leather - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_lfill,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1697379631/before-after/leather-reupholstery/leather-repupholstery-wingback-chair-cushion-after.jpg",
    afterAlt: "Cracked, Creased, Wrinkled Leather Seat Cushion Chippendale Wing Back Chair Reupholstered with Matching Leather - After Picture",
    caption: "Cracked, Creased, Wrinkled Leather Chippendale Wing Back Seat Cushion Chair Reupholstered",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1697380530/before-after/leather-reupholstery/leather-cushion-replace-recover-before.jpg",
    beforeAlt: "Torn Seams on T-Shaped Brown Leather Lounge Chair Seat Cushion Recovered with Top Grain Leather - After Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1697380531/before-after/leather-reupholstery/leather-cushion-replace-recover-after.jpg",
    afterAlt: "Torn Seams on T-Shaped Brown Leather Lounge Chair Seat Cushion Recovered with Top Grain Leather - After Picture",
    caption: "Torn Seams on T-Shaped Brown Leather Lounge Chair Seat Cushion Recovered with Top Grain Leather ",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1697294434/before-after/leather-reupholstery/leather-cushion-replaced-with-new-black-leather-before.jpg",
    beforeAlt: "Dry and Worn Out Piano Shaped Black Leather Sofa Sectional Seat Cushion Reupholstered - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300,c_crop,g_south_west/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1697294434/before-after/leather-reupholstery/leather-cushion-replaced-with-new-black-leather-after.jpg",
    afterAlt: "Dry and Worn Out Piano Shaped Black Leather Sofa Sectional Seat Cushion Reupholstered - After Picture",
    caption: "Dry and Worn Out Piano Shaped Black Leather Sofa Sectional Seat Cushion Reupholstered",
  },
];

const cushionFaqItems = [
  {
    question: "Can you fix rips, holes, splits on a leather cushion?",
    answer: (
      <p>
        We do not offer Leather Repair/Patching/Handstitching for rips or tears. We offer Partial or Full Leather Upholstery, which replaces damaged leather with new matching leather. This service requires purchasing leather and disassembling the upholstery.
      </p>
    ),
  },
  {
    question: "Can you match natural aniline leather?",
    answer: (
      <p>
        When using our Partial Leather Reupholstery service, it can be difficult to find a perfect match for older batches of natural aniline leather. This can lead to a noticeable difference between the new and existing leather on your furniture. Therefore, we suggest opting for our Full Leather Reupholstery service instead.
      </p>
    ),
  },
  {
    question: "How Does Mail-In Leather Reupholstery for Cushions Work?",
    answer: (
      <p>
        We offer a mail-in Leather Reupholstery service for your cushions. The cost will vary depending on the size, shape, and type of leather. Return shipping is quoted separately.
        <br />
        <br />
        To proceed, we need you to send the original leather covers so we can accurately measure the dimensions of your cushions. If all your cushions are the same size, you only need to send one cover.
        <br />
        <br />
        We have a wide selection of leather colors, textures, and finishes, and will choose the material that best matches your existing upholstery. Please note, however, that an exact match may not always be possible, especially if the leather is older or has developed a patina.
      </p>
    ),
  },
  {
    question: "Can you reupholster undetachable couch cushions?",
    answer: (
      <p>
        Yes. We do offer reupholstery for cushions that are affixed to the furniture frame. It&apos;s important to note that this service is more expensive and involves more labor since it often requires disassembling the entire piece of furniture. In addition, this service is only available for customers within our service area.
      </p>
    ),
  },
  {
    question: "What if I'm outside your service area?",
    answer: (
      <p>
        We are located in Southern California, and some of our upholstery services are limited to customers within our service area. However, if you are outside of our service area and need leather for your reupholstery project, you can explore our leather collection here:{" "}
        <a href="https://www.releather.com/leather-for-upholstery" title="Leather Hides for Sale">
          https://www.releather.com/leather-for-upholstery
        </a>
        <br />
        <br />
        If you find a leather option you&apos;re interested in, please contact us for a quote, and we&apos;ll be happy to assist you with your purchase.
      </p>
    ),
  },
  {
    question: "Will a newly reupholstered cushion match the rest of my furniture?",
    answer: (
      <p>
        When reupholstering a single cushion, we carefully select a leather that closely matches your existing upholstery. However, due to natural aging and the worn-in patina of the original leather, the new cushion may not blend seamlessly with the rest of the furniture.
      </p>
    ),
  },
];

export default function ReplacementCushionsForLeatherCouchPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Replacement Cushions for Leather Couch"
            subtitle="👋 Goodbye Worn, Torn Leather Seats!"
            primaryCta={{
              href: "/estimate",
              title: "Leather Couch Sofa Chair Cleaning and Conditioning Service Cost",
              label: (
                <>
                  Get
                  <span className="hidden sm:inline"> Replacement Cushion </span>
                  Quote
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/v1697022958/before-after/leather-reupholstery/leather-couch-seat-replacement-service-450-250.jpg",
              alt: "Leather Couch Seat Replacement Service",
              title: "Leather Couch Seat Replacement Service",
              width: 450,
              height: 250,
            }}
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              <i className="fa fa-fw fa-medkit hidden sm:inline" aria-hidden /> Service Guide
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Want to restore the comfort and elegance of your favorite seating spot? You&apos;ve come to the right place! Our leather reupholstery service offers the perfect solution for those seeking to recover cushions. Learn about replacing cushions, how our services work, and the materials we offer. So let&apos;s dive in!
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="How Does Replacement Cushions Work?"
              tagline={<em> → 3 easy steps for a hassle-free experience</em>}
            />
            <ul className="list-none space-y-4 p-0">
              {processSteps.map((step, index) => (
                <li key={index} className="border-4 border-black p-4">
                  <h6 className="font-display text-xl font-normal tracking-tight text-black">
                    <em>{index + 1}</em> <br /> {step.title}
                  </h6>
                  <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">{step.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Understanding the Need for Replacement Cushions "
              tagline={<em> → Leather Cushion Wear & Tear </em>}
            />
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/v1697183842/before-after/leather-reupholstery/leather-cushion-replacement-couch.jpg"
                alt="Leather Seat Cushion Replacements by ReLeather - Before Image"
                loading="lazy"
                width={400}
                height={300}
                className="float-right ml-4 mb-4 rounded border-4 border-black"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                Over time, even the highest quality leather couch cushions can start to show signs of wear and tear. Everyday use, exposure to sunlight, spills, and general aging can lead to cracks, creases, and a loss of cushioning. Instead of investing in an entirely new couch, replacing the cushions can breathe new life into your beloved leather furniture. <strong>Replacing a cushion saves you money</strong> and preserves your budget. Learn more about our comprehensive solutions for recovering leather seat cushions:{" "}
              </p>
            </div>
          </section>

          <section
            id="recommendation"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="recommendation-heading"
          >
            <h6 id="recommendation-heading" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              Recommended for:
            </h6>
            <p className="mt-2 font-sans font-bold text-black">
              <strong>Luxury Leather Sofa, Chair Cushions, Dining Chair Seats, Ottoman Top Pads </strong>
            </p>
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedItems.map((item, index) => (
                <li key={index} className="flex flex-col items-center border-4 border-black p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="rounded object-cover"
                  />
                  <span className="mt-2 font-sans text-black">{item.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Replacement Cushion Service"
              tagline={<em> → Full and Partial Replacement</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              We offer both{" "}
              <a
                href="https://www.releather.com/services/leather-upholstery#leather-upholstery"
                target="_blank"
                rel="noopener noreferrer"
                title="Full Leather Reupholstery for Leather Couch Cushion Replacement"
              >
                full leather reupholstery
              </a>{" "}
              and{" "}
              <a
                href="https://www.releather.com/services/leather-upholstery#leather-reupholstery"
                target="_blank"
                rel="noopener noreferrer"
                title="Partial Leather Reupholstery for Leather Couch Cushion Replacement"
              >
                partial leather re-upholstery
              </a>{" "}
              services, allowing you to choose the level of restoration that suits your needs. Whether you need to replace all the cushions or just a few, we&apos;ve got you covered.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/g_south,y_10,l_text:montserrat_50_style_light:Before,co_rgb:000000/w_400,c_crop,g_south_west/v1697294434/before-after/leather-reupholstery/leather-cushion-replaced-with-new-black-leather-before.jpg"
                alt="Leather Cushion Seat Replaced With New Black Leather - Before"
                title="Leather Cushion Seat Replaced With New Black Leather - Before"
                loading="lazy"
                width={400}
                height={300}
                className="w-full rounded object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/g_south,y_10,l_text:montserrat_50_style_light:After,co_rgb:000000/w_400,c_crop,,g_south_west/v1697294434/before-after/leather-reupholstery/leather-cushion-replaced-with-new-black-leather-after.jpg"
                alt="Leather Cushion Seat Replaced With New Black Leather - After"
                title="Leather Cushion Seat Replaced With New Black Leather - After"
                loading="lazy"
                width={400}
                height={300}
                className="w-full rounded object-cover"
              />
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Leather Matching"
              tagline={<em> → Leather Texture, Color, and Style</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              We understand the importance of a good match. Our team can match your current leather upholstery with our Italian leathers, making sure the new cushions blend seamlessly with your couch. Browse our{" "}
              <a
                href="https://www.releather.com/leather-for-upholstery"
                target="_blank"
                rel="noopener noreferrer"
                title="Leather Material for Leather Couch Cushion Replacement"
              >
                leather material
              </a>{" "}
              to help you visualize and select the right leather for your cushion replacement, based on texture, color, finish, and style. Alternatively, we can help you select a leather that complements your leather sofa or chair beautifully. Here we highlight the diversity of leather types we&apos;re experienced with.
            </p>
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {leatherMatchingItems.map((item, index) => (
                <li key={index} className="flex flex-col items-center border-4 border-releather-orange p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    width={175}
                    height={175}
                    loading="lazy"
                    className="object-cover"
                  />
                  <h6 className="mt-2 text-center font-display text-base font-normal text-black">
                    {item.h6}
                  </h6>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Types of Cushions"
              tagline={<em> → We reupholster various cushion styles</em>}
            />
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/v1697304553/before-after/leather-reupholstery/leather-replacement-cushion-recover-these-types-of-leather-cushions.png"
                alt="Leather Seat Cushion Replacements Types of Cushions"
                loading="lazy"
                width={400}
                height={300}
                className="float-right ml-4 mb-4"
              />
              <ul className="list-none space-y-2 p-0 font-sans text-base leading-relaxed text-gray-800">
                <li>
                  <strong>Box Cushions:</strong> Clean design cushion with squared corners.
                </li>
                <li>
                  <strong>Tufted Cushions:</strong> Button or stitch tufting, a classic look.
                </li>
                <li>
                  <strong>T-Cushions:</strong> T-shaped design fitted for various chairs.
                </li>
                <li>
                  <strong>Backrest Cushions:</strong> Placed against the back of the furniture.
                </li>
                <li>
                  <strong>Wedge Cushions:</strong> Triangle shaped seat and fits into the corner of a sofa sectional.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Common Issues Solved by Leather Cushion Replacement"
              tagline={<em> → Renew, Restore, and Revive Your Leather Furniture</em>}
            />
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {commonIssues.map((item, index) => (
                <li key={index} className="border-4 border-releather-orange bg-releather-dark p-2">
                  <div className="flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      width={125}
                      height={125}
                      loading="lazy"
                    />
                  </div>
                  <h4 className="mt-3 font-display text-xl font-normal tracking-tight text-white">
                    {item.h4}
                  </h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-gray-300">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title={
                <>
                  <i className="fa fa-fw fa-camera hidden sm:inline" aria-hidden /> Leather Cushion Replacement Before &amp; After
                </>
              }
            />
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
              {beforeAfterSlides.map((slide, index) => (
                <figure
                  key={index}
                  className="border-4 bg-releather-dark p-4"
                  style={{ borderColor: "#23262f" }}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                        Before
                      </p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.beforeSrc}
                        alt={slide.beforeAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full border-2 border-[#23262f] object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                        After
                      </p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.afterSrc}
                        alt={slide.afterAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full border-2 border-[#23262f] object-contain"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-4 border-t-2 border-gray-500 pt-4 font-sans text-base font-medium text-white">
                    {slide.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection title="Conclusion" />
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/v1697388318/before-after/leather-reupholstery/leather-cushions-recovered.jpg"
                alt="Leather Seat Cushion Replacements by ReLeather"
                title="Leather Seat Cushion Replacements by ReLeather"
                loading="lazy"
                width={400}
                height={300}
                className="float-right ml-4 mb-4 rounded border-4 border-black"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                If your leather couch cushions have seen better days, don&apos;t despair. Our leather restoration and re-upholstery service offers a cost-effective and sustainable solution. Whether you choose to visit our shop in Fullerton or send us your slip covers, we&apos;re here to ensure your leather couch remains a source of comfort and pride for years to come. Explore our leather materials, learn about our process, and get in touch with our team to get started on your cushion replacement journey today. Your leather couch will thank you!
              </p>
            </div>
          </section>

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={cushionFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
