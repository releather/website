import type { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import LeatherRestorationBeforeAfter from "./LeatherRestorationBeforeAfter";
import type { LeatherRestorationBeforeAfterItem } from "./LeatherRestorationBeforeAfter";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import LeatherInfo from "@/components/LeatherInfo";
import Issues from "@/components/Issues";
import Process from "@/components/Process";

const title = "Restoring Leather Chairs | ReLeather";
const description =
  "Full service leather cleaning, restoration and dyeing for lounge chairs and recliner chairs. Restore discoloration, scuffs, stains, fading, dryness. Reupholstery for cuts or tears.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-restoration-lounge-chairs" },
  openGraph: { url: "/leather-restoration-lounge-chairs", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const recommendationImages = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1715829379/samples/repairs/Restoration-Hardware-Leather-Sofa-Dry-Leather-Repair.jpg",
    alt: "Dry and Rough Leather Repair",
    title: "Dry and Rough Leather Repair",
    label: "Dry & Rough",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1715827232/samples/repairs/Restoration-Hardware-Leather-Sofa-Discoloration-Repair-200px.jpg",
    alt: "Discoloration Repair",
    title: "Discoloration Repair",
    label: "Discoloration",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1697020657/before-after/leather-reupholstery/leather-couch-worn-tired-fix-leather-recover-service-thumb.jpg",
    alt: "Oily Stains Repair",
    title: "Oily Stains Repair",
    label: "Oily Stains",
  },
];

const benefitsData = [
  {
    title: "Repair vs. Replace Savings:",
    description: (
      <p>
        Restoring high-quality leather chairs is often far more economical than purchasing new ones, especially when the original chair is crafted with premium materials.
      </p>
    ),
  },
  {
    title: "Preserve Value:",
    description: (
      <p>
        High-end leather chairs from well-known brands tend to retain their value due to their recognized quality and durability. Restoration keeps these chairs looking their best, maintaining their market and sentimental value.
      </p>
    ),
  },
  {
    title: "Quality Leather:",
    description: (
      <p>
        These chairs are frequently made with top-grade leathers, which are prized for their longevity and the rich patina they develop over time.
      </p>
    ),
  },
];

const leatherInfoTypes = [
  {
    title: "Full Grain",
    text: (
      <p>
        Full-grain leather is the highest quality leather, made from the top layer of the hide, retaining its natural grain. It is often used in luxury chairs due to its strength, durability, and ability to develop a rich patina. For restoration, full-grain leather needs careful handling to preserve its unique surface while maintaining its natural oils and patina, using professional-grade conditioners to enhance longevity and appearance.
      </p>
    ),
    leathers: [
      {
        name: "Full Grain",
        thumb: "https://res.cloudinary.com/releather-com/image/upload/f_auto/c_crop,w_300,y_50,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Full%20Grain,co_rgb:ffffff/v1725869335/leather/full-grain-leather-example.jpg",
        full: "https://res.cloudinary.com/releather-com/image/upload/f_auto/c_crop,w_300,y_50,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Full%20Grain,co_rgb:ffffff/v1725869335/leather/full-grain-leather-example.jpg",
        alt: "Full grain leather used in quality chairs",
      },
    ],
  },
  {
    title: "Aniline",
    text: (
      <p>
        Aniline leather, a type of full-grain leather, is dyed with soluble dyes to maintain its natural surface characteristics like scars and wrinkles. Often used in high-end chairs for its softness and natural look, it is more prone to staining and fading. Restoration requires gentle cleaning, conditioning, and precise color matching to address scratches or discoloration without compromising the leather&apos;s soft feel or natural beauty.
      </p>
    ),
    leathers: [
      {
        name: "Aniline",
        thumb: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_300,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Aniline,co_rgb:ffffff/v1652587080/leather/Aniline_Mustard_HI.jpg",
        full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_300,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Aniline,co_rgb:ffffff/v1652587080/leather/Aniline_Mustard_HI.jpg",
        alt: "Aniline leather used in luxury chairs",
      },
    ],
  },
  {
    title: "Semi Aniline",
    text: (
      <p>
        Semi-aniline leather is similar to aniline but with a light protective coating to guard against stains while retaining its natural appearance. Used in high-end chairs for a balance of durability and aesthetics, it requires careful restoration to maintain its protective layer. The process involves addressing minor scuffs, stains, or color loss without over-conditioning, preserving both its slight protection and natural look.
      </p>
    ),
    leathers: [
      {
        name: "Semi Aniline",
        thumb: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_400,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Semi%20Aniline,co_rgb:ffffff/v1636920011/leather/SEDONA_cashew_HI.jpg",
        full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_400,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Semi%20Aniline,co_rgb:ffffff/v1636920011/leather/SEDONA_cashew_HI.jpg",
        alt: "Semi aniline leather for high-end chair restoration",
      },
    ],
  },
  {
    title: "Corrected",
    text: (
      <p>
        Corrected grain leather, or top-grain leather, is sanded to remove imperfections and embossed with a consistent grain pattern, often with a protective finish. Used by quality brands for uniformity and durability, it offers a balance of quality and affordability. It requires proper care since once the grain texture wears off, it cannot be effectively restored. Refinishing focuses on repairing any damage to the protective finish and maintaining softness, while ensuring the leather&apos;s grain pattern and uniform appearance are preserved.
      </p>
    ),
    leathers: [
      {
        name: "Corrected Grain",
        thumb: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_400,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Corrected%20Grain,co_rgb:ffffff/v1653008190/leather/Supple_Khaki_HI.jpg",
        full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_400,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Corrected%20Grain,co_rgb:ffffff/v1653008190/leather/Supple_Khaki_HI.jpg",
        alt: "Corrected grain leather for durable chair finishes",
      },
    ],
  },
];

const processSteps = [
  {
    title: "Assessment",
    description: (
      <p>
        We assess the leather&apos;s type and condition. Quality chairs often use aniline leather, which is prone to stains and fading and requires specific care. We tailor the restoration accordingly.
      </p>
    ),
  },
  {
    title: "Leather Cleaning:",
    description: (
      <p>
        Our process starts with a gentle cleanse to remove dirt and buildup while preserving the leather&apos;s surface. This step restores the natural shine without damaging the leather&apos;s finish or texture.
      </p>
    ),
  },
  {
    title: "Leather Conditioning:",
    description: (
      <p>
        Next, we apply a specially formulated conditioner to moisturize, soften, and reinforce the leather. This step guards against cracking and water spots, ensuring the leather stays supple and strong.
      </p>
    ),
  },
  {
    title: "Leather Recoloring:",
    description: (
      <p>
        We carefully treat scuffs and faded areas by matching the original color, renewing the leather&apos;s appearance while maintaining its matte, medium, or gloss finish
      </p>
    ),
  },
  {
    title: "Leather Protection:",
    description: (
      <p>
        Finally, we apply a protective layer that seals in color and provides a barrier against future damage, like stains or water spots, keeping the leather&apos;s preserved.
      </p>
    ),
  },
];

const issuesData = [
  {
    title: "Dry & Rough",
    body: (
      <p>
        Leather may become dry and crack from lack of conditioning or exposure to sunlight. Look for fine lines or splits, in high used areas.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <Image
        src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,h_285,y_100,x_30/bo_5px_solid_rgb:f8991d/v1725867177/before-after/leather-restoration/furniture/blue/chair/leather-restoration-century-blue-leather-club-chair-nailhead-trim-faded-cushion.jpg"
        alt="Sun-damaged and discolored leather on a blue club chair"
        title="Sun-damaged and discolored leather on a blue club chair"
        width={300}
        height={285}
        loading="lazy"
      />
    ),
  },
  {
    title: "Discoloration",
    body: (
      <p>
        Sunlight can fade leather and create uneven coloring. Watch for dark or light patches, paneling, or areas with mismatch color or dullness.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <Image
        src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,h_285,y_135,x_25/bo_5px_solid_rgb:f8991d/v1725867178/before-after/leather-restoration/furniture/blue/chair/leather-restoration-century-blue-leather-club-chair-nailhead-trim-faded-discoloration.jpg"
        alt="Cracked and dried leather cushion on a blue chair"
        title="Cracked and dried leather cushion on a blue chair"
        width={300}
        height={285}
        loading="lazy"
      />
    ),
  },
  {
    title: "Stains & Soiling",
    body: (
      <p>
        Spills and dirt can cause spots or color changes. Liquids may soak in quickly, leading to stains that darken or discolor the leather easily.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <Image
        src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,h_285,y_100,x_25/bo_5px_solid_rgb:f8991d/v1725867177/before-after/leather-restoration/furniture/blue/chair/leather-restoration-century-blue-leather-club-chair-nailhead-trim-faded-cushion.jpg"
        alt="Cracked and dried leather cushion on a blue chair"
        title="Cracked and dried leather cushion on a blue chair"
        width={300}
        height={285}
        loading="lazy"
      />
    ),
  },
];

const beforeAfterItems: LeatherRestorationBeforeAfterItem[] = [
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/before-after/leather-dyeing/brown/leather-redyeing-tub-chair-before.jpg",
    beforeAlt: "Before custom leather dyeing of designer tub armchair in Los Angeles",
    beforeTitle: "Before custom leather dyeing of designer tub armchair in Los Angeles",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/before-after/leather-dyeing/brown/leather-redyeing-tub-chair-after.jpg",
    afterAlt: "After espresso brown leather dyeing of designer tub armchair in Los Angeles",
    afterTitle: "After espresso brown leather dyeing of designer tub armchair in Los Angeles",
    serviceType: "Custom Color Change",
    furniture: "Designer Tub Chair",
    color: <a href="https://res.cloudinary.com/releather-com/image/upload/v1639529981/leather/Luxor_Espresso_HI.jpg" title="Espresso leather swatch - custom color change option" target="_blank" rel="noopener noreferrer"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1639529981/leather/Luxor_Espresso_HI.jpg" alt="Espresso leather swatch for custom color change" title="Espresso leather swatch - custom color change option" width={250} height={50} loading="lazy" /></a>,
    leatherType: "Semi-Aniline Leather",
    problem: "Custom redyeing espresso brown",
    location: "Los Angeles, CA",
    description: "This designer leather tub chair was revitalized with a fresh, custom color to enhance our customer's living room. The chosen espresso dark brown shade beautifully contrasts with her existing decor, adding a sophisticated touch. Our customer expressed her satisfaction with the outcome, praising our \"job well done!\"",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746444025/before-after/leather-reupholstery/dining-chairs/brown/Leather-Upholstery-Cromwellian-Chairs-San-Diego-Before-2.jpg",
    beforeAlt: "Leather Upholstery Cromwellian Chairs San Diego Before Restoration",
    beforeTitle: "Leather Upholstery Cromwellian Chairs San Diego Before Restoration",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746444025/before-after/leather-reupholstery/dining-chairs/brown/Leather-Upholstery-Cromwellian-Chairs-San-Diego-After-2.jpg",
    afterAlt: "Leather Upholstery Cromwellian Chairs San Diego After Restoration",
    afterTitle: "Leather Upholstery Cromwellian Chairs San Diego After Restoration",
    serviceType: "Leather Recovering",
    furniture: "Cromwellian Chair",
    color: <a href="https://res.cloudinary.com/releather-com/image/upload/v1639529981/leather/Concerto_Saddle_HI.jpg" target="_blank" rel="noopener noreferrer"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1639529981/leather/Concerto_Saddle_HI.jpg" alt="Concerto Saddle Leather Sample" title="Concerto Saddle Leather Sample" width={250} height={50} loading="lazy" /></a>,
    leatherType: "Aniline Leather",
    problem: "Tears stains dryness age",
    location: "Oceanside / San Diego, CA",
    description: "We had the opportunity to recover a set of Cromwellian chairs passed down through generations. Tears, stains, dryness, and age had taken their toll. The customer chose distressed waxed leather to preserve the rustic look. With new brass nails and foam, we completed the restoration of this historic 17th-century style.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746524246/before-after/leather-restoration/furniture/metallic/chair/Indian-Wells-Palm-Springs-Leather-Restoration-Designer-Swivel-Chair-Metallic-Gold-Leather-Before.jpg",
    beforeAlt: "Before restoration of metallic gold leather swivel chair in Indian Wells",
    beforeTitle: "Before restoration of metallic gold leather swivel chair in Indian Wells",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746524246/before-after/leather-restoration/furniture/metallic/chair/Indian-Wells-Palm-Springs-Leather-Restoration-Designer-Swivel-Chair-Metallic-Gold-Leather-After.jpg",
    afterAlt: "After restoration of metallic gold leather swivel chair in Indian Wells",
    afterTitle: "After restoration of metallic gold leather swivel chair in Indian Wells",
    serviceType: "Leather Restoration",
    furniture: "Swivel Chair",
    color: <a href="https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_80_style_light:Mushroom,co_rgb:ffffff/leather/Metallic/Metallic_Leather_Mushroom.jpg" target="_blank" rel="noopener noreferrer"><Image src="https://res.cloudinary.com/leathera/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/Metallic/Metallic_Leather_Mushroom.jpg" alt="Metallic Mushroom leather swatch used for restoration" title="Metallic Mushroom leather swatch used for restoration" width={250} height={50} loading="lazy" /></a>,
    leatherType: "Protected leather",
    problem: "Faded wear cracking spotting",
    location: "Indian Wells Palm Desert, CA",
    description: "This designer swivel lounge chair is glowing again after a full leather restoration. The metallic finish had faded, and the seat showed wear, cracking, and spotting. We custom-blended metallic dyes to match the original tone and restore its brilliant gold color and refined appearance.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_5px_solid_rgb:f8991d/v1746528644/before-after/leather-reupholstery/dining-chairs/brown/ladera-ranch-reupholstered-bonded-leather-high-back-accent-dining-room-side-chair.jpg",
    beforeAlt: "Leather reupholstery of high back dining chairs in Orange County",
    beforeTitle: "Leather reupholstery of high back dining chairs in Orange County",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_5px_solid_rgb:f8991d/v1746528644/before-after/leather-reupholstery/dining-chairs/brown/ladera-ranch-reupholstered-bonded-leather-high-back-accent-dining-room-side-chair.jpg",
    afterAlt: "Leather reupholstery of high back dining chairs in Orange County",
    afterTitle: "Leather reupholstery of high back dining chairs in Orange County",
    serviceType: "Leather Recovering",
    furniture: "High Back Dining Chairs",
    color: <a href="https://res.cloudinary.com/releather-com/image/upload/v1638909286/leather/PALETTE_espresso_HI.jpg" title="Espresso color leather sample used in dining chair reupholstery" target="_blank" rel="noopener noreferrer"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1638909286/leather/PALETTE_espresso_HI.jpg" alt="Espresso brown leather swatch for high back dining chairs" title="Espresso brown leather swatch for high back dining chairs" width={250} height={50} loading="lazy" /></a>,
    leatherType: "Protected Leather",
    problem: "Wear cracking bonded leather",
    location: "Orange County, CA",
    description: "These elegant tall-back dining chairs from Macy's were originally upholstered in bonded leather. Our customer observed wear and cracking on the seats. We replaced the faux material with durable, high-quality brown leather for a long-lasting, refined finish.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746537514/before-after/leather-reupholstery/chair/brown/mission-viejo-leather-reupholstery-ripped-punctured-chair-cushion-chippendale-style-wingback-chair.jpg",
    beforeAlt: "Leather reupholstery for brown Chippendale style wingback chair",
    beforeTitle: "Leather reupholstery for brown Chippendale style wingback chair",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746537514/before-after/leather-reupholstery/chair/brown/mission-viejo-leather-reupholstery-ripped-punctured-chair-cushion-chippendale-style-wingback-chair.jpg",
    afterAlt: "Leather reupholstery for brown Chippendale style wingback chair",
    afterTitle: "Leather reupholstery for brown Chippendale style wingback chair",
    serviceType: "Leather Recovering",
    furniture: "Wingback Chair",
    color: <a href="https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_pinto_HI.jpg" title="Sedona Pinto Leather Sample" target="_blank" rel="noopener noreferrer"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1636920011/leather/SEDONA_pinto_HI.jpg" alt="Sedona pinto leather sample for reupholstery" title="Sedona pinto leather sample for reupholstery" width={250} height={50} loading="lazy" /></a>,
    leatherType: "Protected Leather",
    problem: "Ripped worn Chippendale style",
    location: "Irvine, CA",
    description: "These elegant tall-back dining chairs from Macy's were originally upholstered in bonded leather. Our customer observed wear and cracking on the seats. We replaced the faux material with genuine brown leather, ensuring greater durability and longer-lasting performance.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746537326/before-after/leather-restoration/furniture/chair/brown/Newport-Beach-Century-Furniture-Brown-Leather-Color-Restoration-Recliner-Chair.jpg",
    beforeAlt: "Century Furniture leather recliner restored in Newport Beach",
    beforeTitle: "Century Furniture leather recliner restored in Newport Beach",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746537326/before-after/leather-restoration/furniture/chair/brown/Newport-Beach-Century-Furniture-Brown-Leather-Color-Restoration-Recliner-Chair.jpg",
    afterAlt: "Century Furniture leather recliner restored in Newport Beach",
    afterTitle: "Century Furniture leather recliner restored in Newport Beach",
    serviceType: "Leather Restoration",
    furniture: "Bustle Back Recliner",
    color: <a href="https://res.cloudinary.com/releather-com/image/upload/v1638909286/leather/PALETTE_harness-brown_HI.jpg" title="Palette Harness Brown Leather Sample" target="_blank" rel="noopener noreferrer"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1638909286/leather/PALETTE_harness-brown_HI.jpg" alt="Palette harness brown leather sample for restoration" title="Palette harness brown leather sample for restoration" width={250} height={50} loading="lazy" /></a>,
    leatherType: "Protected Leather",
    problem: "Oil stains bustle pillow",
    location: "Newport Beach, CA",
    description: "This Century Furniture recliner had oil stains on the top bustle back pillow due to body oils. We treated the leather to remove buildup, refinished it to restore the original saddle color, and sealed the leather to protect against future oil damage.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746537674/before-after/leather-reupholstery/chair/brown/huntington-beach-recover-vintage-wingback-chair-distressed-leather-zebra-print-1.jpg",
    beforeAlt: "Custom reupholstered zebra print leather wingback chair",
    beforeTitle: "Custom reupholstered zebra print leather wingback chair",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746537674/before-after/leather-reupholstery/chair/brown/huntington-beach-recover-vintage-wingback-chair-distressed-leather-zebra-print-2.jpg",
    afterAlt: "Distressed brown leather and zebra print chair upholstery",
    afterTitle: "Distressed brown leather and zebra print chair upholstery",
    serviceType: "Leather Recovering",
    furniture: "Wingback Chair",
    color: <a href="https://res.cloudinary.com/releather-com/image/upload/v1639529300/leather/Concerto_Mushroom_HI.jpg" title="Concerto Mushroom Leather Sample" target="_blank" rel="noopener noreferrer"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1639529300/leather/Concerto_Mushroom_HI.jpg" alt="Concerto mushroom leather sample for chair recovering" title="Concerto mushroom leather sample for chair recovering" width={250} height={50} loading="lazy" /></a>,
    leatherType: "Distressed Leather, Hair-on-Hide",
    problem: "Custom zebra distressed recover",
    location: "Huntington Beach, CA",
    description: "We refreshed this antique wingback chair with custom leather upholstery. It now features a striking mix of African Tanned Zebra Print hair-on-hide leather and distressed brown top-grain leather. The seat cushion is reversible. We also restained the carved frame and polished the brass tacks.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d//v1636920011/before-after/leather-restoration/furniture/brown/two-tone/Mission-Viejo-Century-Furniture-Leather-Color-Restoration-Recliner-Chair.jpg",
    beforeAlt: "Leather Restoration Century Furniture Recliner Chair Huntington Beach",
    beforeTitle: "Leather Restoration Century Furniture Recliner Chair Huntington Beach",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d//v1636920011/before-after/leather-restoration/furniture/brown/two-tone/Mission-Viejo-Century-Furniture-Leather-Color-Restoration-Recliner-Chair.jpg",
    afterAlt: "Leather Restoration Century Furniture Recliner Chair Huntington Beach",
    afterTitle: "Leather Restoration Century Furniture Recliner Chair Huntington Beach",
    serviceType: "Leather Restoration",
    furniture: "Bustle Back Chair",
    color: <a href="https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_pinto_HI.jpg" title="SEDONA Pinto Leather Swatch" target="_blank" rel="noopener noreferrer"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d//v1636920011/leather/SEDONA_pinto_HI.jpg" alt="SEDONA Pinto Leather Swatch" title="SEDONA Pinto Leather Swatch" width={250} height={50} loading="lazy" /></a>,
    leatherType: "Semi-Aniline Leather",
    problem: "Fading two-tone recoloring",
    location: "Huntington Beach, CA",
    description: "This Century Furniture recliner with a bustle back and nailhead trim was restored after fading from age. We re-dyed it to match its original hue and revived the natural two-tone finish with a fresh lacquer coating.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d//v1746537878/before-after/leather-restoration/furniture/chair/beige/Leather-Restoration-for-Straight-Back-Bow-Arm-Morris-Recliner-Irvine-CA.jpg",
    beforeAlt: "Leather Restoration Morris Recliner Chair Irvine",
    beforeTitle: "Leather Restoration Morris Recliner Chair Irvine",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d//v1746537878/before-after/leather-restoration/furniture/chair/beige/Leather-Restoration-for-Straight-Back-Bow-Arm-Morris-Recliner-Irvine-CA.jpg",
    afterAlt: "Leather Restoration Morris Recliner Chair Irvine",
    afterTitle: "Leather Restoration Morris Recliner Chair Irvine",
    serviceType: "Leather Restoration",
    furniture: "Recliner Chair",
    color: <a href="https://res.cloudinary.com/releather-com/image/upload/v1638909286/leather/PALETTE_sandstone_HI.jpg" title="PALETTE Sandstone Leather Swatch" target="_blank" rel="noopener noreferrer"><Image src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d//v1638909286/leather/PALETTE_sandstone_HI.jpg" alt="PALETTE Sandstone Leather Swatch" title="PALETTE Sandstone Leather Swatch" width={250} height={50} loading="lazy" /></a>,
    leatherType: "Protected Leather",
    problem: "Cracked beige embedded soil",
    location: "Irvine, CA",
    description: "This Stickley Morris chair had cracked beige leather and embedded soil that resisted deep cleaning. We resurfaced and recolored the leather, restoring both its texture and the original warm tone.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_450,w_450,x_0,y_60/l_text:montserrat_40_style_light:Before,co_rgb:000000,g_south_west,y_25,x_25/bo_10px_solid_rgb:000000/v1725867176/before-after/leather-restoration/furniture/blue/chair/leather-restoration-century-blue-leather-club-chair-nailhead-trim-faded-before.jpg",
    beforeAlt: "Before restoration blue leather chair with nailhead trim",
    beforeTitle: "Before restoration blue leather chair with nailhead trim",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_450,w_450,x_0,y_60/l_text:montserrat_40_style_light:After,co_rgb:000000,g_south_west,y_25,x_25/bo_10px_solid_rgb:000000/v1725867177/before-after/leather-restoration/furniture/blue/chair/leather-restoration-century-blue-leather-club-chair-nailhead-trim-faded-after.jpg",
    afterAlt: "After restoration of blue brand-name leather club chair",
    afterTitle: "After restoration of blue brand-name leather club chair",
    serviceType: "Leather Restoration",
    furniture: "Club Chair",
    color: "Blue",
    leatherType: "Protected",
    problem: "Faded discoloration nailhead trim",
    location: "—",
  },
];

const processExtraMedia = (
  <figure className="border-4 border-black bg-white p-4"><Image
      src="https://res.cloudinary.com/releather-com/image/upload/c_crop,h_465,w_410,x_12,y_60/l_text:montserrat_40_style_light:Faded!,co_rgb:000000,g_south_west,y_25,x_25/v1725867178/before-after/leather-restoration/furniture/blue/chair/leather-restoration-century-blue-leather-club-chair-nailhead-trim-faded-discoloration.jpg"
      alt="Faded brand-name leather chair before restoration"
      title="Faded brand-name leather chair before restoration"
      width={410}
      height={465}
      loading="lazy"
      className="w-full object-contain"
    />
    <figcaption className="mt-2 font-sans text-sm text-gray-700">
      Faded brand-name leather chair showing discoloration before restoration.
    </figcaption>
  </figure>
);

const faqItems = [
  {
    question: "How often should I have my leather chairs restored?",
    answer: (
      <>
        <p>The frequency of leather restoration depends on usage and wear. Typically, professional restoration every 5 to 7 years maintains appearance and durability. Regular care—like conditioning and cleaning—helps extend time between restorations.</p><Image src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1725867177/before-after/leather-restoration/furniture/blue/chair/leather-restoration-century-blue-leather-club-chair-nailhead-trim-faded-cushion.jpg" alt="leather restoration faded blue club chair" title="leather restoration faded blue club chair" width={450} height={450} loading="lazy" />
      </>
    ),
  },
  {
    question: "Can leather restoration fix deep scratches and cracks?",
    answer: (
      <>
        <p>We can resurface scratches and cracks during restoration. However, if the crack is too deep, it can&apos;t be fully repaired without compromising the leather&apos;s integrity. We assess the damage and tailor our service to restore the leather effectively and safely.</p><Image src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1715794039/samples/repairs/Restoration-Hardware-Leather-Sofa-Couch-Scratches-Scratch-200.jpg" alt="leather restoration for sofa with scratches" title="leather restoration for sofa with scratches" width={450} height={450} loading="lazy" />
      </>
    ),
  },
  {
    question: "What will be done to the nail heads of my chair during restoration?",
    answer: (
      <>
        <p>We may either carefully mask each nail head with tape to protect it or remove and replace them with new matching ones, depending on the condition and your preference. Our goal is to preserve the original look while restoring the leather.</p><Image src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1725867178/before-after/leather-restoration/furniture/blue/chair/leather-restoration-century-blue-leather-club-chair-nailhead-trim-faded-nailhead.jpg" alt="leather chair nailhead restoration process" title="leather chair nailhead restoration process" width={450} height={450} loading="lazy" />
      </>
    ),
  },
];

export default function LeatherRestorationLoungeChairsPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Restoring Leather Chairs"
            subtitle={
              <>
                <em>Leather Renewed! Worth Restored!</em>
                <br />
                Restoring Quality Leather Chairs
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Request a quote for restoring leather chairs with damage such as discoloration, dryness, or wear",
              "aria-label": "Request a quote for restoring leather chairs",
              label: (
                <>
                  Get <span className="hidden sm:inline">Leather Chair Restoration </span>Quote
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_560,h_315/before-after/leather-restoration/furniture/brown/two-tone/Mission-Viejo-Century-Furniture-Leather-Color-Restoration-Recliner-Chair.jpg",
              alt: "Before and after image of restoring Century Furniture leather recliner chair with faded two-tone finish",
              title: "Restoring Century Furniture leather recliner chair with color fading and wear – two-tone brown finish",
              width: 560,
              height: 315,
            }}
            body={
              <p>
                We offer full service leather cleaning, restoration and dyeing for lounge chairs and recliner chairs. Our leather services address issues like discoloration, scuffs, stains, fading, dryness, and more. For chairs with deep damage such as cuts or tears, we also provide full and partial leather reupholstery solutions.
              </p>
            }
          />

          <section
            id="recommendation"
            className="border-t-4 border-black pt-12"
            aria-labelledby="recommendation-heading"
          >
            <h2
              id="recommendation-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              <span className="border-2 border-black bg-releather-orange px-2 py-0.5">
                Recommended for:
              </span>
            </h2>
            <p className="mt-4 font-sans text-base font-bold text-gray-800">
              <strong>Club Chair, Recliner Chair, Wingback Chair, Eames Chair, Side Chair</strong>
            </p>
            <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 lg:gap-4 lg:px-2">
              {recommendationImages.map((item) => (
                <li key={item.label} className="text-center">
                  <div className="mx-auto max-w-[200px] border-4 border-black"><Image
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="h-[200px] w-full border-b-4 border-black object-cover"
                    />
                    <strong className="block border-t-2 border-black bg-white px-2 py-2 font-sans font-bold text-black">
                      {item.label}
                    </strong>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <Benefits
            id="benefits"
            title="Restoring Quality Brand-Name Leather Chairs:"
            subtitle="→ A Smart Investment"
            intro={
              <>
                <figure className="brutalist-image-frame w-[280px] sm:w-[320px]"><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/ar_1:1,w_450,h_350/v1725878772/samples/service/Leather-Restoration-Chair.png"
                    alt="Leather restoration of premium brand chair using expert repair techniques"
                    title="Restoring leather chair with expert restoration and renewal techniques"
                    width={450}
                    height={350}
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </figure>
                <p className="font-sans text-base font-medium leading-relaxed text-gray-700">
                  Quality brand-name leather chairs, known for their superior craftsmanship and luxurious materials. Understanding the specific leather characteristics, proper maintenance, and expectations for long-term care and cost, can help preserve their value. Restoring your premium leather chairs is a wise choice for several key reasons:
                </p>
              </>
            }
            benefits={benefitsData}
          />

          <LeatherInfo
            id="leather-info"
            heading="Types of Leather Used in Quality Chairs"
            subheading="Top Grain, Aniline, Protected"
            intro={
              <p>
                Understanding these different types of leather and their unique characteristics is crucial for proper restoration. Each type of leather requires a tailored approach to cleaning, conditioning, and repairing to maintain its value, appearance, and durability. Proper restoration methods not only extend the lifespan of these chairs but also preserve their luxurious look and feel
              </p>
            }
            types={leatherInfoTypes}
            thumbSize={250}
            popupImageMaxHeight="90vh"
          />

          <Process
            id="process"
            title="How We Restore Quality Brand-Name Leather Chairs"
            subtitle="Step by Step"
            steps={processSteps}
            extraMedia={processExtraMedia}
          />

          <Issues
            id="issues"
            heading="Common Leather Chair Repairs"
            subheading="From Fading to Cracks"
            issues={issuesData}
            columnsPerRow={3}
            mediaBelowTitle
          />

          <LeatherRestorationBeforeAfter items={beforeAfterItems} />

          <Faq id="faq" heading="Frequently Asked Questions" items={faqItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}
