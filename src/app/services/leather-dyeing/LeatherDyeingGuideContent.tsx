import { GuideSection } from "@/components/Guide";
import Image from "next/image";

export default function LeatherDyeingGuideContent() {
  return (
    <>
      <GuideSection>
        Change Color? No Problem!
      </GuideSection>
      <p>
        <em>→ What you need to know about changing the color of your leather furniture:</em>
      </p>
      <p>
        Leather is a durable and flexible material that can be found in many
        different colors. Customers may want to change the color of their
        leather furniture. Depending on the type of leather, your furniture may
        be a good candidate for a new and fresh color. Leather upholstery on
        most types of furnishings, such as sofas and chairs, is aniline which
        refers to the tanning of the leather during production. Aniline
        leathers finished with a pigmented or semi coated surface are better
        suited for leather dyeing because they accept recoloring quite well.
      </p>
      <p>
        Leather upholstery can showcase a traditional or contemporary look
        simply by choosing the right color. However, you need to consider the
        original color of your leather before choosing an intense shade like
        black or red. When dyeing leather to a different color, there are some
        guidelines we always recommend following: Always choose a slightly
        lighter or darker tone for the best results. Dyeing from one end of the
        color spectrum to the other can present some challenges. We avoid
        dyeing delicate leathers from a light to an intense dark tone because
        this often requires a heavier coat of leather dye which can affect the
        degree of suppleness of the leather. For example we generally restain
        white leather to darker shades such as off-white, beige, bone, cream.
        So choose wisely!
      </p>
      <p><Image unoptimized
          src="https://res.cloudinary.com/releather-com/image/upload/v1652831784/samples/leather-change-color-example.jpg"
          title="Leather Change Color Work Sample on Nubuck Leather Various Shades of Brown Dye"
          alt="Leather Change Color Work Sample on Nubuck Leather Various Shades of Brown Dye"
          loading="lazy"
        />
      </p>
      <p>
        This is a well worn leather cushion cover. It has all the classic wear
        and tear signs that you would expect to find with an old, tan sofa such
        as fading, dryness, stains, and scuffs from regular use over time- but
        also some interesting dyeing work we&apos;ve done on it too! For
        example: various brown shades which we recommended to our customer for
        this type of aniline leather, not only did it match better with their
        home decor; if cared for properly this leather can last a long time!
      </p>
    </>
  );
}
