import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BlogPostSubsection from "@/components/BlogPostSubsection";
import Faq from "@/components/Faq";

const title = "Leather Car Steering Wheel Restoration in Orange County | ReLeather";
const description =
  "Professional leather steering wheel restoration in Orange County. ReLeather repairs cracks, fading, wear, and oils on all car brands. Quality craftsmanship.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-car-steering-wheel-restoration-in-orange-county" },
  openGraph: { url: "/leather-car-steering-wheel-restoration-in-orange-county", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const processSteps = [
  {
    title: "Inspection & Assessment",
    body: "We carefully examine your steering wheel to identify all damage, including cracks, fading, and wear patterns. Our experts assess the leather condition and determine the best restoration approach.",
  },
  {
    title: "Cleaning & Preparation",
    body: "We thoroughly clean the steering wheel, removing dirt, oils, and old conditioning products. This preparation ensures optimal adhesion and color matching for the restoration process.",
  },
  {
    title: "Repair & Recoloring",
    body: "We repair cracks and tears using professional techniques, then match and apply the perfect color to restore your steering wheel's original appearance. Our color matching ensures seamless results.",
  },
  {
    title: "Conditioning & Protection",
    body: (
      <>
        We apply <Link href="/leather-conditioner" title="Premium Leather Conditioner for Steeing Wheels">premium leather conditioner</Link> to enhance suppleness and a protective finish. The final step ensures your steering wheel feels smooth and protected.
      </>
    ),
  },
];

const steeringWheelFaqItems = [
  {
    question: "How much does steering wheel restoration cost?",
    answer: (
      <p>
        Steering wheel restoration costs vary based on damage extent and leather type.
      </p>
    ),
  },
  {
    question: "How long does steering wheel restoration take?",
    answer: (
      <p>
        The work can be completed same day to a few days depending on the extent of damage and leather type.
      </p>
    ),
  },
  {
    question: "Where is the work performed?",
    answer: (
      <p>
        The work is performed at our shop in <Link href="/leather-restoration-orange-county" title="Leather Restoration Orange County">Leather Restoration Orange County</Link>.
      </p>
    ),
  },
  {
    question: "What is the service guarantee on the work?",
    answer: (
      <p>
        We provide a 1 year guarantee on the work. Any normal wear is not covered.
      </p>
    ),
  },
];

export default function LeatherCarSteeringWheelRestorationPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Leather Car Steering Wheel Restoration in Orange County"
            subtitle={
              <>
                <strong>Restore Your Steering Wheel</strong>
                <br />
                Professional steering wheel restoration.
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Request a Steering Wheel restoration quote",
              label: (
                <>
                  Get
                  <span className="hidden sm:inline"> Steering Wheel Restoration </span>
                  Quote
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,b_black,w_560,h_315,y_60,x_60,g_west/bo_10px_solid_rgb:f8991d/blog/leather-restoration-steering-wheel.png",
              alt: "Leather restoration steering wheel",
              title: "Leather Restoration Steering Wheel",
              width: 560,
              height: 315,
            }}
            body={
              <p>
                Over time, your leather steering wheel absorbs oils from your hands, sunlight fades the finish, and the leather loses its grip and color. At ReLeather, we specialize in <Link href="/services/leather-restoration" title="Leather Restoration Service">restoring worn, cracked, and faded leather</Link> steering wheels. Our leather technicians use premium materials and proven techniques to deliver lasting results. We service all car makes and models with quality craftsmanship and attention to detail.
              </p>
            }
          />

          <section
            id="recommendation"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="recommendation-heading"
          >
            <h6 id="recommendation-heading" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              Recommended for:
            </h6>
            <p className="mt-2 font-sans font-bold text-black">
              Cracks, Discoloration, Fading, Oily, Wear
            </p>
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
              <li className="flex flex-col items-center border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_200,h_200,x_285,y_80,b_rgb:ffffff/bo_2px_solid_rgb:ccc/before-after/leather-restoration-car-steering-wheel-restoration-black-before.png"
                  alt="Cracks and Cracking Leather Steering Wheel Repair"
                  title="Cracks and Cracking Leather Steering Wheel Repair"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <strong className="mt-2 font-sans text-black">Cracks</strong>
              </li>
              <li className="flex flex-col items-center border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_200,h_200,x_375/before-after/leather-restoration-car-steering-wheel-repair-beige-before.jpg"
                  alt="Worn Discoloration Leather Steering Wheel Repair"
                  title="Worn Discoloration Leather Steering Wheel Repair"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <strong className="mt-2 font-sans text-black">Discolored</strong>
              </li>
              <li className="flex flex-col items-center border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/before-after/leather-restoration/example/oily-leather-steering-wheel-restored.png"
                  alt="Oily Leather Steering Wheel Repair"
                  title="Oily Leather Steering Wheel Repair"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <strong className="mt-2 font-sans text-black">Oily</strong>
              </li>
              <li className="flex flex-col items-center border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_200,h_200,x_50,y_400,b_rgb:ffffff/bo_2px_solid_rgb:ccc/before-after/leather-restoration-car-grey-pigmented-steering-wheel-lexus-fullerton-before.jpg"
                  alt="Wear"
                  title="Wear"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <strong className="mt-2 font-sans text-black">Wear</strong>
              </li>
            </ul>
          </section>

          <section
            id="process"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="process-heading"
          >
            <BlogPostSubsection
              title="Steering Wheel Restoration Process"
              tagline={<em> → Step by Step</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Our comprehensive steering wheel restoration process involves four key steps: thorough inspection and assessment of damage, professional cleaning and preparation, precise repair and color matching, and final conditioning and protection. Each step is carefully executed to ensure your steering wheel looks and feels renewed.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <ul className="list-none space-y-6 p-0">
                {processSteps.map((step, index) => (
                  <li key={index} className="border-4 border-black p-4">
                    <h5 className="font-display text-xl font-normal tracking-tight text-black">
                      {step.title}
                    </h5>
                    <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ul>
              <figure className="border-4 border-releather-orange p-2"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/before-after/leather-restoration-car-black-pigmented-worn-dirt-oils-steering-wheel-bmw-newport-beach-before.jpg"
                  alt="Steering wheel inspection and assessment process"
                  title="Steering wheel inspection and assessment process"
                  width={450}
                  height={450}
                  loading="lazy"
                />
                <figcaption className="mt-2 font-sans text-sm text-gray-700">
                  Professional inspection of steering wheel damage and condition assessment.
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="spotlight" className="mt-12 border-t-4 border-black pt-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,h_450,w_450,x_0,y_60,b_white/l_text:montserrat_40_style_light:Before,co_rgb:f8991d,g_south_west,y_25,x_25/bo_10px_solid_rgb:000000/before-after/leather-restoration-car-steering-wheel-restoration-black-before.png"
                alt="Leather restoration car steering wheel restoration black before"
                title="Leather Restoration Car Steering Wheel Restoration Black Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-black object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,h_450,w_450,x_0,y_60,b_white/l_text:montserrat_40_style_light:After,co_rgb:f8991d,g_south_west,y_25,x_25/bo_10px_solid_rgb:000000/before-after/leather-restoration-car-steering-wheel-restoration-black-after.png"
                alt="Leather restoration car steering wheel restoration black after"
                title="Leather Restoration Car Steering Wheel Restoration Black After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-black object-cover"
              />
            </div>
          </section>

          {/* Showcase 1: Grey Mercedes Fullerton */}
          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Grey Steering Wheel Leather Restoration in Fullerton, CA"
              tagline={<em> → Mercedes Benz Wear Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This showcase demonstrates our work in restoring a Mercedes-Benz steering wheel with  discoloration. The grey leather had developed areas darkened by oils and accumulated dirt, especially in the grip area, which required professional cleaning, color matching, and restoration techniques to achieve a restored and even appearance. The project included <Link href="/auto-leather-dyeing" title="Complete Auto Interior Leather Restoration">complete auto interior leather restoration</Link>.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-grey-pigmented-wear-steering-wheel-mercedes-benz-fullerton-before.jpg"
                alt="Leather restoration car grey pigmented wear steering wheel mercedes benz fullerton before"
                title="Leather Restoration Car Grey Pigmented Wear Steering Wheel Mercedes Benz Fullerton Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-grey-pigmented-wear-steering-wheel-mercedes-benz-fullerton-after.jpg"
                alt="Leather restoration car grey pigmented wear steering wheel mercedes benz fullerton after"
                title="Leather Restoration Car Grey Pigmented Wear Steering Wheel Mercedes Benz Fullerton After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Pigmented Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Car</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Mercedes Benz</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Grey pigmented wear steering wheel leather restoration">
                    Pigmented
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/PALETTE_grey_HI.jpg"
                    alt="Grey pigmented wear steering wheel leather restoration"
                    title="Grey pigmented wear steering wheel leather restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          {/* Showcase 2: Orange Porsche Mission Viejo */}
          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Orange Steering Wheel Leather Restoration in Mission Viejo, CA"
              tagline={<em> → Porsche Refinishing Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This showcase restored a Porsche sports car racing steering wheel that was in need of color refresh . The grey and orange contrast leather had developed minor discoloration, which required deep cleaning, conditioning, and color treatment. We closely matched the car&apos;s unique color palette to achieve an even finish. This was part of the front bucket seat restoration.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-orange-pigmented-refinishing-steering-wheel-porsche-mission-viejo-before.jpg"
                alt="Leather restoration car orange pigmented refinishing steering wheel porsche mission viejo before"
                title="Leather Restoration Car Orange Pigmented Refinishing Steering Wheel Porsche Mission Viejo Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-orange-pigmented-refinishing-steering-wheel-porsche-mission-viejo-after.jpg"
                alt="Leather restoration car orange pigmented refinishing steering wheel porsche mission viejo after"
                title="Leather Restoration Car Orange Pigmented Refinishing Steering Wheel Porsche Mission Viejo After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Pigmented Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Furniture Type</dt>
                <dd>Car</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Porsche</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Orange pigmented refinishing steering wheel leather restoration">
                    Pigmented
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_175,h_50/bo_2px_solid_rgb:f8991d/leather/PALETTE_mango_HI.jpg"
                    alt="Orange pigmented refinishing steering wheel leather restoration"
                    title="Orange pigmented refinishing steering wheel leather restoration"
                    loading="lazy"
                    width={175}
                    height={50}
                  /><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_175,h_50/bo_2px_solid_rgb:f8991d/leather/PALETTE_grey_HI.jpg"
                    alt="Grey pigmented steering wheel leather restoration"
                    title="Grey pigmented steering wheel leather restoration"
                    loading="lazy"
                    width={175}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          {/* Showcase 3: Grey Lexus Fullerton */}
          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Grey Steering Wheel Leather Restoration in Fullerton, CA"
              tagline={<em> → Lexus Pigmented Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This before-and-after showcase shows a steering wheel removed from the car and showing significant wear. The top coating had worn off and cracked along the grip areas, and the leather surface had become shiny from normal hand oils. The grey leather was  cleaned, resurfaced for a smooth finish, and color refinished to achieve a fully restored appearance. Even if you&apos;re outside our service area, you can still get your steering wheel professionally restored. <Link href="/estimate" title="Get Steering Wheel Restoration estimate">Get a quote and ship it to us today!</Link>
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-grey-pigmented-steering-wheel-lexus-fullerton-before.jpg"
                alt="Leather restoration car grey pigmented steering wheel lexus fullerton before"
                title="Leather Restoration Car Grey Pigmented Steering Wheel Lexus Fullerton Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-grey-pigmented-steering-wheel-lexus-fullerton-after.jpg"
                alt="Leather restoration car grey pigmented steering wheel lexus fullerton after"
                title="Leather Restoration Car Grey Pigmented Steering Wheel Lexus Fullerton After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Pigmented Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Car</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Lexus</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Grey pigmented steering wheel leather restoration">
                    Pigmented
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/PALETTE_grey_HI.jpg"
                    alt="Grey pigmented steering wheel leather restoration"
                    title="Grey pigmented steering wheel leather restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          {/* Showcase 4: Beige Ford */}
          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Beige Steering Wheel Leather Restoration in Los Angeles, CA"
              tagline={<em> → Ford Oiled Wear Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This before-and-after showcase shows an all-leather Ford interior, including a steering wheel showing wear. The handle areas had the top surface chipped off, combined with fading and accumulated dirt and oils. The beige leather was professionally cleaned, conditioned, recolored, and sealed to restore its appearance and protect against future wear.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-beige-pigmented-oiled-wear-steering-wheel-ford-orange-county-before.jpg"
                alt="Leather restoration car beige pigmented oiled wear steering wheel ford orange county before"
                title="Leather Restoration Car Beige Pigmented Oiled Wear Steering Wheel Ford Orange County Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-beige-pigmented-oiled-wear-steering-wheel-ford-orange-county-after.jpg"
                alt="Leather restoration car beige pigmented oiled wear steering wheel ford orange county after"
                title="Leather Restoration Car Beige Pigmented Oiled Wear Steering Wheel Ford Orange County After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Pigmented Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Car</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Ford</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Beige pigmented oiled wear steering wheel leather restoration">
                    Pigmented
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/PALETTE_mocha_HI.jpg"
                    alt="Beige pigmented oiled wear steering wheel leather restoration"
                    title="Beige pigmented oiled wear steering wheel leather restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          {/* Showcase 5: Black BMW Fullerton */}
          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Black Steering Wheel Leather Restoration in Fullerton"
              tagline={<em> → BMW Worn Oily Wear Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This before-and-after showcase features a BMW steering wheel finished in black pigmented leather. The surface had become dull and uneven from normal hand oils, with signs of wear along the grip areas. The leather was carefully cleaned and conditioned, then recolored to achieve a deep, even black finish. A final protective coating was applied to maintain the restored look and guard against normal use.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-black-pigmented-worn-oily-wear-steering-wheel-bmw-fullerton-before.jpg"
                alt="Leather restoration car black pigmented worn oily wear steering wheel bmw fullerton before"
                title="Leather Restoration Car Black Pigmented Worn Oily Wear Steering Wheel Bmw Fullerton Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-black-pigmented-worn-oily-wear-steering-wheel-bmw-fullerton-after.jpg"
                alt="Leather restoration car black pigmented worn oily wear steering wheel bmw fullerton after"
                title="Leather Restoration Car Black Pigmented Worn Oily Wear Steering Wheel Bmw Fullerton After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Pigmented Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Car</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>BMW</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Black pigmented worn oily wear steering wheel leather restoration">
                    Pigmented
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/PALETTE_black_HI.jpg"
                    alt="Black pigmented worn oily wear steering wheel leather restoration"
                    title="Black pigmented worn oily wear steering wheel leather restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          {/* Showcase 6: Beige Mercedes Newport Beach */}
          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Beige Steering Wheel Leather Restoration in Newport Beach"
              tagline={<em> → Mercedes Benz Worn Dirt Oils Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              The Mercedes-Benz steering wheel in beige pigmented leather had developed light spotting and an uneven finish from normal use, signaling the need for a complete restoration. <Link href="/services/leather-cleaning" title="Leather Cleaning and Conditioning Steering Wheel">Leather cleaning and conditioning</Link> were performed, then the leather was recolored, evening out the tone and texture across the grip areas. This steering wheel restoration was part of a full interior project, where all beige leather surfaces in the car were fully refreshed and protected.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-beige-pigmented-worn-dirt-oils-steering-wheel-mercedes-benz-newport-beach-before.jpg"
                alt="Leather restoration car beige pigmented worn dirt oils steering wheel mercedes benz newport beach before"
                title="Leather Restoration Car Beige Pigmented Worn Dirt Oils Steering Wheel Mercedes Benz Newport Beach Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-beige-pigmented-worn-dirt-oils-steering-wheel-mercedes-benz-newport-beach-after.jpg"
                alt="Leather restoration car beige pigmented worn dirt oils steering wheel mercedes benz newport beach after"
                title="Leather Restoration Car Beige Pigmented Worn Dirt Oils Steering Wheel Mercedes Benz Newport Beach After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Pigmented Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Car</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Mercedes Benz</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Beige pigmented worn dirt oils steering wheel leather restoration">
                    Pigmented
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/PALETTE_mocha_HI.jpg"
                    alt="Beige pigmented worn dirt oils steering wheel leather restoration"
                    title="Beige pigmented worn dirt oils steering wheel leather restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          {/* Showcase 7: Beige Mercedes Newport Beach, CA */}
          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Beige Steering Wheel Leather Restoration in Newport Beach, CA"
              tagline={<em> → Mercedes Benz Worn Dirt Oils Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              The Mercedes-Benz steering wheel features a beige pigmented leather grip with wood trim, which had developed wear, dirt buildup, and discoloration from hand oils. The leather sections were restored with specialized cleaning and color treatments, while the wood trim was polished and resealed to bring back its natural luster. A final protective coating ensures the steering wheel maintains its appearance and resists future wear.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-steering-wheel-repair-beige-before.jpg"
                alt="Leather restoration car steering wheel repair beige before"
                title="Leather Restoration Car Steering Wheel Repair Beige Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-steering-wheel-repair-beige-after.jpg"
                alt="Leather restoration car steering wheel repair beige after"
                title="Leather Restoration Car Steering Wheel Repair Beige After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Pigmented Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Car</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Mercedes Benz</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Beige pigmented worn dirt oils steering wheel leather restoration">
                    Pigmented
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/PALETTE_mocha_HI.jpg"
                    alt="Beige pigmented worn dirt oils steering wheel leather restoration"
                    title="Beige pigmented worn dirt oils steering wheel leather restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          <section
            id="leather-info"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="leather-info-heading"
          >
            <BlogPostSubsection
              title="Types of Leather Used in Steering Wheel"
              tagline={<em> → Pigmented, Nappa </em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Understanding the type of leather used in steering wheels is crucial for applying proper restoration methods that preserve quality, appearance, and durability. At ReLeather, our restoration process applies to genuine Pigmented and Nappa Leathers—the two most common materials found in luxury vehicles such as BMW, Mercedes-Benz, and Audi. These leathers can be professionally cleaned, resurfaced, and refinished to restore their original color and texture.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h4 className="font-display text-xl font-normal tracking-tight text-black">
                  Pigmented Leather
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Pigmented leather features a protective coating that provides excellent durability and resistance to wear, making it ideal for high-traffic areas like steering wheels. It is the most common leather type used in luxury vehicles and known for its smooth or slightly textured surface and consistent color appearance. This leather offers superior color retention, is easy to maintain, and holds up well against daily use. For restoration, it should be refinished using water-based automotive leather colorants and sealers rather than aniline dyes.
                </p>
              </div>
              <div className="flex justify-center"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_50,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Pigmented,co_rgb:ffffff/leather/PALETTE_tan_HI.jpg"
                  alt="Pigmented leather example for steering wheel restoration"
                  title="Pigmented leather example for steering wheel restoration"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="border-[5px] border-releather-orange"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h4 className="font-display text-xl font-normal tracking-tight text-black">
                  Nappa Leather
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Nappa leather is known for its exceptional softness and supple feel, making it a premium choice for luxury cars and exclusive models. Made from top-grain or <Link href="/types-of-leather" title="Full Grain Leather Explanation">full-grain hides</Link> that are lightly corrected and pigmented with a soft-touch finish, it offers a luxurious, natural feel while maintaining durability for daily driving. This leather type requires careful handling and specialized restoration techniques, and should be treated like other pigmented leathers—avoiding penetrating dyes and using water-based automotive leather colorants instead.
                </p>
              </div>
              <div className="flex justify-center"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_50,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Nappa,co_rgb:ffffff/leather/full-grain-leather-example.jpg"
                  alt="Nappa leather example for steering wheel restoration"
                  title="Nappa leather example for steering wheel restoration"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="border-[5px] border-releather-orange"
                />
              </div>
            </div>
          </section>

          <section
            id="issues"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="issues-heading"
          >
            <BlogPostSubsection
              title="Common Leather Issues Found in Steering Wheel"
              tagline={
                <em>
                  {" "}
                  → Cracks, Fading, Scratches, Wear, Stains
                </em>
              }
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Identifying common leather problems in steering wheels is essential for effective restoration. Early detection of issues like cracks, fading, scratches, wear, and stains allows for proper treatment planning and prevents further damage. Understanding these problems helps determine the most appropriate restoration techniques and materials needed for best results.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,h_285,x_185,y_80,b_rgb:ffffff/bo_5px_solid_rgb:f8991d/before-after/leather-restoration-car-steering-wheel-restoration-black-before.png"
                  alt="Cracks issue example for steering wheel restoration"
                  title="Cracks issue example for steering wheel restoration"
                  width={300}
                  height={285}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  Cracking
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Cracks in steering wheel leather typically develop from prolonged use and exposure to UV rays, causing the leather to become <strong>brittle and split</strong>. These cracks can compromise the wheel&apos;s appearance and comfort.
                </p>
              </div>
              <div className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,h_285,x_375/bo_5px_solid_rgb:f8991d/before-after/leather-restoration-car-steering-wheel-repair-beige-before.jpg"
                  alt="Fading issue example for steering wheel restoration"
                  title="Fading issue example for steering wheel restoration"
                  width={300}
                  height={285}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  Fading
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Fading occurs when the leather&apos;s color deteriorates due to sun exposure and regular handling, resulting in an<strong> uneven or washed-out spotting </strong>that diminishes the wheel&apos;s aesthetic appeal.
                </p>
              </div>
              <div className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/w_300,h_285/bo_5px_solid_rgb:f8991d/before-after/leather-restoration/example/oily-leather-steering-wheel-restored.png"
                  alt="Scratches issue example for steering wheel restoration"
                  title="Scratches issue example for steering wheel restoration"
                  width={300}
                  height={285}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  Oily
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Oils from your hand gripping can create a <strong>sticky, shiny, or slippery surface</strong> on your steering wheel. This buildup not only diminishes the leather&apos;s texture and grip but also leaves the wheel looking dull and worn.
                </p>
              </div>
              <div className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,h_285,y_400,x_50/bo_5px_solid_rgb:f8991d/before-after/leather-restoration-car-grey-pigmented-steering-wheel-lexus-fullerton-before.jpg"
                  alt="Wear issue example for steering wheel restoration"
                  title="Wear issue example for steering wheel restoration"
                  width={300}
                  height={285}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  Wear
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Wear patterns develop from constant use and friction, causing the <strong>leather to thin and lose its original texture</strong> and matte finish, resulting in smooth, shiny areas that indicate significant usage.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <p className="mb-8 font-sans text-base leading-relaxed text-gray-800">
              Understanding the restoration process and timeline helps you make informed decisions about your steering wheel restoration project. These common questions address key concerns about cost, duration, and results.
            </p>
            <Faq
              id="faq"
              heading="Frequently Asked Questions about Steering Wheel Restoration"
              items={steeringWheelFaqItems}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
