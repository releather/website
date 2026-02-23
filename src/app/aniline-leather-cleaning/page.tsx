import type { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BlogPostSubsection from "@/components/BlogPostSubsection";

const title = "Aniline Leather Cleaning | ReLeather";
const description =
  "Specialized aniline leather cleaning and restoration for luxury leather furniture. Preservation, rejuvenation, protection. Dry, faded, stained leather.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/aniline-leather-cleaning" },
  openGraph: { url: "/aniline-leather-cleaning", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const recommendationItems = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_200,h_200/v1715829379/samples/repairs/Restoration-Hardware-Leather-Sofa-Dry-Leather-Repair.jpg",
    alt: "Aniline Leather Cleaning for dried out leather on Restoration Hardware sofa",
    title: "Aniline Leather Cleaning for dried and cracked leather furniture",
    label: "Dry & Rough ",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_200,h_200/b_rgb:000000/before-after/faded-leather-couch.png",
    alt: "Aniline Leather Cleaning for uneven leather tone on couch",
    title: "Aniline Leather Cleaning for restoring even color tone to faded leather",
    label: "Color Faded",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/before-after/stained-leather-chair-restoration.png",
    alt: "Aniline Leather Cleaning for oil-stained leather chair restoration",
    title: "Aniline Leather Cleaning for removing oil and grease stains from leather",
    label: "Oil Stains",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/before-after/leather-restoration/furniture/brown/aniline/example/aniline-leather-ring-mark-problem.jpg",
    alt: "Aniline Leather Cleaning for water spots ring marks restoration",
    title: "Aniline Leather Cleaning for water spots ring marks restoration",
    label: "Surface Marks",
  },
];

const processFeatures = [
  { title: "Unprotected", body: "It has no protective top coat or sealant, leaving it exposed and more vulnerable to everyday wear and tear." },
  { title: "Absorbent", body: "The surface easily absorbs water and oils, leading to darkening, spotting, and increased risk of scratches." },
  { title: "Discoloration", body: "Sun exposure causes fading, discoloration, and dryness, creating a weathered look and loss of leather moisture." },
];

const anilineTypes = [
  {
    title: "Pure Aniline",
    body: "The most natural form of leather, treated without surface pigments accented with natural surface marks. It develops a rich patina.",
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Aniline,co_rgb:ffffff/v1652587080/leather/Aniline_Mustard_HI.jpg",
    alt: "Pure Aniline leather with visible natural characteristics",
    titleAttr: "Pure Aniline leather with visible natural characteristics",
  },
  {
    title: "Wax Pull Up",
    body: "Treated with waxes that enhances depth and darkens when pulled or stretched. It shows wear easily and develops a vintage over time.",
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Waxed,co_rgb:ffffff/v1639529981/leather/Concerto_Saddle_HI.jpg",
    alt: "Wax Pull-Up Aniline leather with aged vintage finish",
    titleAttr: "Wax Pull-Up Aniline leather with aged vintage finish",
  },
  {
    title: "Oil Pull Up",
    body: "Infused with artisan oils that shift and lighten with use or pressure. Known for a soft feel and for its rustic and aged character.",
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Oiled,co_rgb:ffffff/v1653007847/leather/Harmony_Brandy_HI.jpg",
    alt: "Oil Pull-Up Aniline leather with rustic patina",
    titleAttr: "Oil Pull-Up Aniline leather with rustic patina",
  },
  {
    title: "Distressed",
    body: "A finish applied to aniline leather to accent natural character. Often combined with wax or oil surface treatments for a rugged look.",
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Distressed,co_rgb:ffffff/v1639529300/leather/Concerto_Dark-Brown_HI.jpg",
    alt: "Distressed Aniline leather with rugged surface finish",
    titleAttr: "Distressed Aniline leather with rugged surface finish",
  },
];

const beforeAfterSlides = [
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747563679/before-after/leather-restoration/furniture/brown/aniline/Aniline-Leather-Cushion-Comparison-Faded-to-Restored-Before.jpg",
    beforeAlt: "Before aniline leather cushion restoration faded brown surface",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747563679/before-after/leather-restoration/furniture/brown/aniline/Aniline-Leather-Cushion-Comparison-Faded-to-Restored-After.jpg",
    afterAlt: "After aniline leather cushion restoration rich brown color restored",
    caption: "American Leather tan aniline leather cushion restored from heavy wear and fading to rich finish.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747659880/before-after/leather-restoration/furniture/brown/aniline/Tan-Aniline-Leather-Restoration-Couch-Costa-Mesa-Before.png",
    beforeAlt: "Before tan aniline leather couch restoration with heavy wear",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747659880/before-after/leather-restoration/furniture/brown/aniline/Tan-Aniline-Leather-Restoration-Couch-Costa-Mesa-After.png",
    afterAlt: "After tan aniline leather couch restoration with renewed finish",
    caption: "Pottery Barn tan aniline waxed leather couch restored from wear and tear in Costa Mesa, CA.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747845143/before-after/leather-restoration/furniture/brown/aniline/tan-aniline-leather-ottoman-set-faded-color-restored-before.png",
    beforeAlt: "Before photo of faded tan aniline leather ottoman set restoration",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747845143/before-after/leather-restoration/furniture/brown/aniline/tan-aniline-leather-ottoman-set-faded-color-restored-after.png",
    afterAlt: "After photo of restored tan aniline leather ottoman set",
    caption: "Restoration of a faded tan aniline leather ottoman set shown side by side.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/furniture/chair/aniline/tan/chair-pottery-barn-tan-aniline-faded-scratched-stained-before.png",
    beforeAlt: "Before image of faded scratched stained tan aniline leather chair restoration",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/furniture/chair/aniline/tan/chair-pottery-barn-tan-aniline-faded-scratched-stained-after.png",
    afterAlt: "After image of restored tan aniline leather chair with clean even finish",
    caption: "Pottery Barn tan aniline leather chair restoration from faded, scratched, stained.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747916101/before-after/leather-restoration/furniture/chair/aniline/tan/chair-tan-aniline-waxed-faded-stained-pottery-barn-before.png",
    beforeAlt: "Before image of tan aniline leather Pottery Barn chair faded and stained",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747916101/before-after/leather-restoration/furniture/chair/aniline/tan/chair-tan-aniline-waxed-faded-stained-pottery-barn-after.png",
    afterAlt: "After image of restored tan aniline leather Pottery Barn chair",
    caption: "Restored tan aniline Pottery Barn chair with faded waxed finish renewed.",
  },
];

export default function AnilineLeatherCleaningPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Aniline Leather Cleaning"
            subtitle={
              <>
                <em>Specialized Care &amp; Restoration</em>
                <br />
                For Luxury Leather
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Get a quote for aniline leather cleaning to restore softness and remove stains or discoloration from delicate natural leather furniture.",
              label: (
                <>
                  Get
                  <span className="hidden sm:inline"> Aniline Leather Cleaning </span>
                  Quote
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_560,h_315/bo_10px_solid_rgb:f8991d/leather-cleaning/aniline-leather-couch.jpg",
              alt: "Aniline Leather Cleaning on couch – delicate and professional leather restoration",
              title: "Aniline Leather Cleaning for delicate and natural leather couches",
              width: 560,
              height: 315,
            }}
            body={
              <p>
                Aniline leather is a luxurious upholstery option because of its natural beauty and softness, but it&apos;s also the most delicate type of leather you can choose for your couches or chairs. It is prone to stains, scratches, and drying out without proper care. At ReLeather, we specialize in cleaning and restoring aniline leather&apos;s finish and color.
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
              Designer Couch, Sofa Sectional, Chair, Recliner
            </p>
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {recommendationItems.map((item, index) => (
                <li key={index} className="flex flex-col items-center border-4 border-black p-4"><Image
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                  <strong className="mt-2 font-sans text-black">{item.label}</strong>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="process"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="process-heading"
          >
            <BlogPostSubsection
              title="Aniline Leather Cleaning &amp; Restoration"
              tagline={<em> → Preservation, Rejuvenation, &amp; Protection</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Aniline leather needs special care due to its porous, transparent nature. Our restoration treatment is designed to <strong>enhance the natural look</strong> of your sofa while preserving its unique characteristics without using paints, which can alter the leather&apos;s original appearance, texture, and finish. We target color loss, minor stains, and scratches. After treatment, your sofa will look <strong>refreshed and rejuvenated</strong>, with a deeper, more even tone. The overall color may appear <strong>slightly darker</strong> than its current shade due to the treatment and retouching. We apply a protective finish to enhance durability. Here are the features of Aniline Leather that make it high-maintenance:
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <ul className="list-none space-y-6 p-0">
                {processFeatures.map((feature, index) => (
                  <li key={index} className="border-4 border-black p-4">
                    <h5 className="font-display text-xl font-normal tracking-tight text-black">
                      {feature.title}
                    </h5>
                    <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                      {feature.body}
                    </p>
                  </li>
                ))}
              </ul>
              <figure className="border-4 border-releather-orange p-2"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/v1747235785/before-after/leather-restoration/furniture/brown/aniline/aniline-leather-cushion-color-faded.png"
                  alt="Aniline leather cleaning closeup showing color faded sofa restoration"
                  title="Aniline leather cleaning closeup showing color faded sofa restoration"
                  width={450}
                  height={450}
                  loading="lazy"
                />
                <figcaption className="mt-2 font-sans text-sm text-gray-700">
                  Color Faded Aniline Leather Seat Cushion
                </figcaption>
              </figure>
            </div>
            <figure className="mt-8 border-4 border-releather-orange p-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload//before-after/leather-restoration/furniture/blue/aniline/Leather-Restoration-Faded-Distressed-Blue-Leather-Seat-Cushions.png"
                alt="Leather Restoration of Faded Distressed Blue Leather Seat Cushions"
                title="Leather Restoration of Faded Distressed Blue Leather Seat Cushions"
                width={650}
                height={300}
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="mt-2 font-sans text-sm text-gray-700">
                Color Faded Blue Distressed Aniline Leather Seat Cushion Restored
              </figcaption>
            </figure>
          </section>

          <section
            id="leather-info"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="leather-info-heading"
          >
            <BlogPostSubsection
              title="Types of Aniline Leather"
              tagline={<em> → Pure, Wax Pull-Up, Oil Pull-Up</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Aniline Leather is a type of leather finished with penetrating dyes. In the tanning process, the pigment thoroughly penetrates the leather hide while maintaining the natural characteristics of the leather surface such as healed scars, pores, bites, blemishes and other natural marks.
            </p>
            {anilineTypes.map((type, index) => (
              <div key={index} className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h4 className="font-display text-xl font-normal tracking-tight text-black">
                    {type.title}
                  </h4>
                  <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                    {type.body}
                  </p>
                </div>
                <div className="flex justify-center"><Image
                    src={type.src}
                    alt={type.alt}
                    title={type.titleAttr}
                    width={250}
                    height={250}
                    loading="lazy"
                    className="border-[5px] border-releather-orange"
                  />
                </div>
              </div>
            ))}
          </section>

          <section
            id="issues"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="issues-heading"
          >
            <BlogPostSubsection
              title="Common Aniline Leather Repairs"
              tagline={<em> → From color fading to soiling</em>}
            />
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747476567/before-after/leather-restoration/furniture/brown/aniline/aniline-leather-couch-cleaning-color-restoration-tan-before.png"
                  alt="Faded aniline leather couch before restoration showing discoloration and wear"
                  title="Faded aniline leather couch before restoration showing discoloration and wear"
                  width={450}
                  height={450}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  ❌ Faded Color
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  This tan aniline leather couch shows discoloration and spotting after years in a sunlit room—typical for high-end furniture.
                </p>
              </div>
              <div className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747476568/before-after/leather-restoration/furniture/brown/aniline/aniline-leather-couch-cleaning-color-restoration-tan-after.png"
                  alt="Restored aniline leather couch with rich and even color after treatment"
                  title="Restored aniline leather couch with rich and even color after treatment"
                  width={450}
                  height={450}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  ✅ Restored Color
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  We treated superficial marks and revived the aniline leather with a consistent, refreshed color while preserving its natural beauty.
                </p>
              </div>
              <div className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747486849/before-after/leather-restoration/furniture/brown/aniline/aniline-leather-couch-armrest-dryness-before.png"
                  alt="Dry aniline leather armrest before restoration on Thomasville sofa"
                  title="Dry aniline leather armrest before restoration on Thomasville sofa"
                  width={450}
                  height={450}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  ❌ Drying Out
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Closer look at a Thomasville sofa armrest with dry aniline leather. The surface felt rough to the touch.
                </p>
              </div>
              <div className="border-4 border-black p-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747486848/before-after/leather-restoration/furniture/brown/aniline/aniline-leather-couch-armrest-dryness-after.png"
                  alt="Moisturized aniline leather armrest after restoration on Thomasville sofa"
                  title="Moisturized aniline leather armrest after restoration on Thomasville sofa"
                  width={450}
                  height={450}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  ✅ Moisturized
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  We reconditioned the leather and restored its smooth texture while enriching the tone of the aniline surface.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Designer Aniline Distressed Leather Sofa Restored"
              tagline={<em> → Faded color restoration</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This designer distressed leather sofa set features reversible leather and fabric cushions. Over time, the leather developed a faded patina. Our Aniline Color Restoration service revived the deep brown color and restored a uniform, rich tone throughout.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1715954710/before-after/leather-restoration/furniture/restoration-hardware/aniline-leather-cleaning-restoration-couch.jpg"
                alt="before image of aniline distressed leather sofa restoration"
                title="before image of aniline distressed leather sofa restoration"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1715954710/before-after/leather-restoration/furniture/restoration-hardware/aniline-leather-cleaning-restoration-sofa.jpg"
                alt="after image of aniline distressed leather sofa restoration"
                title="after image of aniline distressed leather sofa restoration"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Leather Type:</strong></dt>
                <dd>Distressed Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Furniture Type:</strong></dt>
                <dd>Sofa Set</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Brand:</strong></dt>
                <dd>Designer</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Service:</strong></dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Collection:</strong></dt>
                <dd>Concerto</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Color:</strong></dt>
                <dd>
                  <a href="https://res.cloudinary.com/releather-com/image/upload/leather/Concerto_Dark-Brown_HI.jpg" title="Concerto Dark Brown Leather Sample" target="_blank" rel="noopener noreferrer"><Image
                      src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1715954710/leather/Concerto_Dark-Brown_HI.jpg"
                      alt="Concerto dark brown leather sample used in restoration"
                      title="Concerto dark brown leather sample used in restoration"
                      width={250}
                      height={50}
                      loading="lazy"
                    />
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Luxury Designer Aniline Leather Chair Set in Newport Coast, CA"
              tagline={<em> → Color Loss, Recolor Treatment</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              These luxury antiqued-style side chairs by designer Alfonso Marina were sun-bleached and needing moisturizing. Our aniline recoloring treatment restored the original richness and character, reviving their visual appeal while preserving their supple texture.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747226151/before-after/leather-restoration/furniture/brown/aniline/Aniline-Leather-Cleaning-Chair-Color-Restoration-Before-2.png"
                alt="Before aniline leather cleaning on brown chair showing faded color"
                title="Before aniline leather cleaning on brown chair showing faded color"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747226149/before-after/leather-restoration/furniture/brown/aniline/Aniline-Leather-Cleaning-Chair-Color-Restoration-After-2.png"
                alt="After aniline leather cleaning on brown chair showing restored color"
                title="After aniline leather cleaning on brown chair showing restored color"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Leather Type:</strong></dt>
                <dd>Aniline Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Furniture Type:</strong></dt>
                <dd>Side Chairs</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Brand:</strong></dt>
                <dd>Alfonso Marina</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Service:</strong></dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Collection:</strong></dt>
                <dd>Aniline</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Color:</strong></dt>
                <dd>
                  <a href="https://res.cloudinary.com/releather-com/image/upload/leather/Aniline_Mustard_HI.jpg" title="Aniline Mustard Leather Sample" target="_blank" rel="noopener noreferrer"><Image
                      src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1747845144/leather/Aniline_Mustard_HI.jpg"
                      alt="Aniline Mustard Leather Sample for Side Chairs"
                      title="Aniline Mustard Leather Sample for Side Chairs"
                      width={250}
                      height={50}
                      loading="lazy"
                    />
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Aniline Leather Chair Restored in Seal Beach, CA"
              tagline={<em> → Sun Bleached and Soiled Leather</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This designer tufted club chair, originally tan, had faded into a pale patina with visible dirt buildup. We professionally cleaned and recolored the aniline leather, restoring its richness while retaining its natural surface character.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747382339/before-after/leather-restoration/furniture/chair/aniline/tan/Aniline-Leather-Restoration-Tufted-Club-Chair-Before.png"
                alt="Before photo of Aniline leather restoration on tufted club chair in Seal Beach"
                title="Before photo of Aniline leather restoration on tufted club chair in Seal Beach"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747382339/before-after/leather-restoration/furniture/chair/aniline/tan/Aniline-Leather-Restoration-Tufted-Club-Chair-After.png"
                alt="After photo of Aniline leather restoration on tufted club chair in Seal Beach"
                title="After photo of Aniline leather restoration on tufted club chair in Seal Beach"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Leather Type:</strong></dt>
                <dd>Aniline Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Furniture Type:</strong></dt>
                <dd>Tufted Club Chair</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Brand:</strong></dt>
                <dd>Designer</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Service:</strong></dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Collection:</strong></dt>
                <dd>Concerto</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Color:</strong></dt>
                <dd>
                  <a href="https://res.cloudinary.com/releather-com/image/upload/leather/Concerto_Saddle_HI.jpg" title="View Concerto Saddle leather sample" target="_blank" rel="noopener noreferrer"><Image
                      src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1747382339/leather/Concerto_Saddle_HI.jpg"
                      alt="Concerto Saddle leather sample used in aniline leather chair restoration"
                      title="Concerto Saddle leather sample used in aniline leather chair restoration"
                      width={250}
                      height={50}
                      loading="lazy"
                    />
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Designer Tan Aniline Leather Ottoman Sectional"
              tagline={<em> → Fading, Marks, and Spotting</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This designer tan aniline leather ottoman sectional had noticeable discoloration, fading, and minor surface wear. We enriched the faded color, treated surface spotting, and restored uniformity across each ottoman to bring back its premium appearance.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747845144/before-after/leather-restoration/furniture/brown/aniline/tan-aniline-leather-ottoman-set-faded-color-restored-comparison.png"
                alt="Before photo of faded tan aniline leather ottoman sectional"
                title="Before photo of faded tan aniline leather ottoman sectional"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747845144/before-after/leather-restoration/furniture/brown/aniline/tan-aniline-leather-ottoman-set-faded-color-restored.png"
                alt="After photo of restored tan aniline leather ottoman sectional"
                title="After photo of restored tan aniline leather ottoman sectional"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Leather Type:</strong></dt>
                <dd>Aniline Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Furniture Type:</strong></dt>
                <dd>Sectional</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Brand:</strong></dt>
                <dd>Designer</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Service:</strong></dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Collection:</strong></dt>
                <dd>Concerto</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black"><strong>Color:</strong></dt>
                <dd>
                  <a href="https://res.cloudinary.com/releather-com/image/upload/leather/Concerto_Saddle_HI.jpg" title="Concerto Saddle Leather Sample" target="_blank" rel="noopener noreferrer"><Image
                      src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1747845144/leather/Concerto_Saddle_HI.jpg"
                      alt="Concerto Saddle Aniline Leather Sample"
                      title="Concerto Saddle Aniline Leather Sample"
                      width={250}
                      height={50}
                      loading="lazy"
                    />
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section id="before-after" className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Before &amp; After"
              tagline={<em>→ Aniline Leather Restoration Projects </em>}
            />
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {beforeAfterSlides.map((slide, index) => (
                <figure key={index} className="border-4 bg-releather-dark p-4" style={{ borderColor: "#23262f" }}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">Before</p><Image
                        src={slide.beforeSrc}
                        alt={slide.beforeAlt}
                        width={200}
                        height={200}
                        loading="lazy"
                        className="aspect-square w-full object-contain border-2 border-[#23262f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">After</p><Image
                        src={slide.afterSrc}
                        alt={slide.afterAlt}
                        width={200}
                        height={200}
                        loading="lazy"
                        className="aspect-square w-full object-contain border-2 border-[#23262f]"
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
        </div>
      </main>
      <Footer />
    </>
  );
}
