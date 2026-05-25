import Link from "next/link";
import Image from "next/image";
import LeatherGuideCallout, {
  leatherGuideLinkClassName,
} from "@/components/LeatherGuideCallout";
import {
  upholsteryFeaturedCalloutHeadingClassName,
  upholsteryOrangeSubheadingCenteredClassName,
  upholsterySectionHeadingCenteredClassName,
  upholsteryBlackSubheadingCenteredClassName,
} from "@/lib/upholsteryBrutalistTypography";
import LeatherGrainComparison from "@/components/LeatherGrainComparison";
import LeatherUpholsteryChoiceGuide from "@/components/LeatherUpholsteryChoiceGuide";
import LeatherThicknessGuide from "@/components/LeatherThicknessGuide";
import LeatherUpholsteryDurabilitySection from "@/components/LeatherUpholsteryDurabilitySection";
import {
  leatherForUpholsteryThicknessIntro,
  leatherForUpholsteryThicknessRanges,
} from "./leatherForUpholsteryThicknessInfo";

const protectedLeatherImageUrl =
  "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_600/g_center,l_text:montserrat_75_style_light:Protected,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg";

export default function LeatherForUpholsteryGuideContent() {
  return (
    <>
      <p>
        When it comes to choosing the right upholstery material for your home, genuine leather is often the superior choice. Leather is durable, easy to clean, and has a classic look that never goes out of style. In addition, leather is a natural material are more breathable and will age gracefully. Upholstery leather can also be more comfortable than other materials, as it tends to be softer and cooler to the touch. Whether you&apos;re looking for a timeless sofa or a chic accent chair, leather upholstered furniture is always a smart choice.
      </p>

      <div
        id="how-made"
        className="not-prose mx-auto mt-12 max-w-[1280px] scroll-mt-24 bg-white [text-shadow:none]"
      >
        <h3 className={upholsterySectionHeadingCenteredClassName}>
          How Are Upholstery Leather Hides Made?
        </h3>
        <p className={`mt-8 ${upholsteryOrangeSubheadingCenteredClassName}`}>
          From Raw Hide to Finished Leather
        </p>
      </div>

      <div className="overflow-hidden">
        <figure className="brutalist-image-frame float-left mr-6 mb-4 w-[280px] shrink-0 sm:w-[320px]"><Image unoptimized
            src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450/v1654909894/leather/Leather-Tanning-How-Leather-Is-Made.jpg"
            alt="Leather Tanning Process How Leather Is Made"
            title="Leather Tanning Process How Leather Is Made"
            width={450}
            height={300}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </figure>
        <p>
          Leather is a material made from the skins of animals, usually a cow. The process of making leather begins by soaking the skin in a chemical solution that helps to break down the tissue and remove any hair or other debris. Once the skin has been prepared, it is stretched and dried, then treated with another chemical solution that helps to preserve it. Tanning involves soaking the hide in a mixture of water, chromium salts, and chemicals, which helps to preserve it and make it more flexible. Finally, the leather is dyed and finished to give it a smooth, soft, consistent surface. Leather is commonly used for upholstery, clothing, and a variety of other products. Thanks to its durability and resistance to wear and tear, leather is an ideal material for many different applications.
        </p>
      </div>

      <figure
        className="not-prose mx-auto mt-8 max-w-[1280px] border-[6px] border-black bg-releather-orange p-2 shadow-[10px_10px_0_0_#000000] sm:p-3"
        aria-label="How upholstery leather is made: five-step process from raw hide to finished leather"
      >
        <div className="border-4 border-black bg-white p-1 sm:border-[5px] sm:p-2">
          <Image
            unoptimized
            src="https://res.cloudinary.com/releather-com/image/upload/v1779626987/leather/how-leather-upholstery-is-made.jpg"
            alt="Infographic showing five steps of leather production: raw hide, soaking and cleaning, stretching and drying, tanning, and dying and finishing"
            title="How upholstery leather is made"
            width={1280}
            height={480}
            loading="lazy"
            className="block h-auto w-full object-contain"
          />
        </div>
      </figure>

      <LeatherGrainComparison />

      <LeatherThicknessGuide
        intro={leatherForUpholsteryThicknessIntro}
        ranges={leatherForUpholsteryThicknessRanges}
      />

      <div className="not-prose mx-auto mt-12 max-w-[1280px] bg-white [text-shadow:none]">
        <h3
          id="leather-upholstery-choice-heading"
          className={upholsterySectionHeadingCenteredClassName}
        >
          How to Choose the Right Leather for Your Home
        </h3>
        <p className={`mt-8 ${upholsteryBlackSubheadingCenteredClassName}`}>
          Protected Leather{" "}
          <span className="mx-1 text-releather-orange sm:mx-1.5" aria-hidden>
            VS
          </span>{" "}
          Unprotected Leather
        </p>
      </div>

      <LeatherGuideCallout
        title="Protected Leather"
        className="my-8"
        titleClassName={upholsteryFeaturedCalloutHeadingClassName}
        image={{
          src: protectedLeatherImageUrl,
          alt: "Protected leather swatch",
          title: "Protected",
        }}
      >
        <p>
          There are a few things to keep in mind in order to choose the right leather for your home and understanding the type of leather is essential. The first thing to consider is the level of wear and tear that the leather sofa will be subjected to. If you have active kids or pets, you&apos;ll want to choose a durable top grain leather that can withstand some abuse, stain resistant, and easy to clean. We recommend <strong>Protected</strong> aniline dyed leather upholstery such as{" "}
          <Link
            href="/types-of-leather#pigmented-leather"
            title="Pigmented Aniline Leather"
            className={leatherGuideLinkClassName}
          >
            Pigmented
          </Link>
          ,{" "}
          <Link
            href="/types-of-leather#corrected-leather"
            title="Corrected Aniline Leather"
            className={leatherGuideLinkClassName}
          >
            Corrected grain
          </Link>
          ,{" "}
          <Link
            href="/types-of-leather#semi-aniline-leather"
            title="Semi-Aniline Leather"
            className={leatherGuideLinkClassName}
          >
            Semi-Aniline
          </Link>{" "}
          leather. These upholstery leather hides are more uniform in color or can have a two-tone texture finish. Secondly, consider the climate and direct sunlight in your home. If you live in a dry climate, you&apos;ll want to choose a leather that is treated for moisture resistance or routinely use a{" "}
          <Link
            href="/leather-conditioner"
            title="Leather Conditioner for Leather Upholstery Furniture"
            className={leatherGuideLinkClassName}
          >
            Leather Conditioner
          </Link>{" "}
          to keep your leather soft and moisturized. If you live in a hot and humid climate, <strong>Unprotected</strong> leather material will fade and crack in the heat much faster because they are not finished with a protective coating.
        </p>
      </LeatherGuideCallout>

      <LeatherUpholsteryChoiceGuide />

      <LeatherUpholsteryDurabilitySection />
    </>
  );
}
