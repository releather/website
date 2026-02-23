import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import Guide from "@/components/Guide";
import LeatherRestorationBeforeAfter from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import type { LeatherRestorationBeforeAfterItem } from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";

const title = "Leather for Dining Chairs | ReLeather";
const description =
  "Leather cleaning, restoration, and dyeing for dining chairs and bar stools. Reupholstery and leather replacement. Aniline, Semi-Aniline, and Protected leather.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-restoration-dining-chairs" },
  openGraph: { url: "/leather-restoration-dining-chairs", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const recommendationImages = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1715829379/samples/repairs/Restoration-Hardware-Leather-Sofa-Dry-Leather-Repair.jpg",
    alt: "Restoration Hardware leather sofa with dry leather repair",
    title: "Restoration Hardware Leather Sofa Dry Leather Repair",
    label: "Dry & Cracked",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1715827232/samples/repairs/Restoration-Hardware-Leather-Sofa-Discoloration-Repair-200px.jpg",
    alt: "Restoration Hardware leather sofa discoloration repair",
    title: "Restoration Hardware Leather Sofa Discoloration Repair",
    label: "Discoloration",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1697020657/before-after/leather-reupholstery/leather-couch-worn-tired-fix-leather-recover-service-thumb.jpg",
    alt: "Worn and tired leather couch in need of restoration",
    title: "Worn and Tired Leather Couch Restoration",
    label: "Oily Stains",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1697020657/before-after/leather-reupholstery/leather-couch-worn-tired-fix-leather-recover-service-thumb.jpg",
    alt: "Leather couch restoration from fabric to leather",
    title: "Fabric to Leather Upholstery Restoration",
    label: "Fabric to Leather",
  },
];

const beforeAfterItems: LeatherRestorationBeforeAfterItem[] = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746995733/before-after/leather-restoration/furniture/dining-chair/brown/mission-viejo-leather-restore-game-room-leather-club-chairs.jpg",
    beforeAlt:
      "Leather refinishing for faded brown game room club chairs in Irvine",
    beforeTitle:
      "Leather refinishing for faded brown game room club chairs in Irvine",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746995733/before-after/leather-restoration/furniture/dining-chair/brown/mission-viejo-leather-restore-game-room-leather-club-chairs.jpg",
    afterAlt:
      "Leather refinishing for faded brown game room club chairs in Irvine",
    afterTitle:
      "Leather refinishing for faded brown game room club chairs in Irvine",
    serviceType: "Leather Recoloring",
    furniture: "Game Room Chair",
    color: (
      <a
        href="https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_pinto_HI.jpg"
        title="View Sedona Pinto Leather Sample"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1636920011/leather/SEDONA_pinto_HI.jpg"
          alt="Sedona Pinto Semi-Aniline Leather Sample"
          title="Sedona Pinto Semi-Aniline Leather Sample"
          width={250}
          height={50}
          loading="lazy"
        />
      </a>
    ),
    leatherType: "Semi-Aniline",
    problem: "Faded dry sun exposure",
    location: "Irvine, CA",
    description:
      "These handcrafted club chairs arrived faded and dry from sun exposure. We refinished the leather to restore its base color, natural texture, and accented grain—common issues with unprotected leather that's lost its finish over time.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746996539/before-after/leather-restoration/furniture/dining-chair/brown/Irvine-Leather-Refinishing-Dining-Chair-Faded-Color-Worn.jpg",
    beforeAlt:
      "Leather Redyeing for Dining Chair in Irvine with Faded Color",
    beforeTitle:
      "Leather Redyeing for Dining Chair in Irvine with Faded Color",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746996539/before-after/leather-restoration/furniture/dining-chair/brown/Irvine-Leather-Refinishing-Dining-Chair-Faded-Color-Worn.jpg",
    afterAlt:
      "Leather Redyeing for Dining Chair in Irvine with Faded Color",
    afterTitle:
      "Leather Redyeing for Dining Chair in Irvine with Faded Color",
    serviceType: "Leather Recoloring",
    furniture: "Dining Chair",
    color: (
      <a
        href="https://res.cloudinary.com/releather-com/image/upload/v1638909286/leather/PALETTE_tan_HI.jpg"
        title="View Palette Tan Protected Leather Sample"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1638909286/leather/PALETTE_tan_HI.jpg"
          alt="Palette Tan Protected Leather Sample"
          title="Palette Tan Protected Leather Sample"
          width={250}
          height={50}
          loading="lazy"
        />
      </a>
    ),
    leatherType: "Protected Leather",
    problem: "Faded color oil grease stains",
    location: "Irvine, CA",
    description:
      "This leather dining chair set arrived with faded color and finish. The originally bright tan hue on the seat and back was restored through expert redyeing. Since the chairs were used daily in a dining area, we also treated and removed oil and grease stains from the leather.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/v1747048472/before-after/leather-reupholstery/dining-chairs/exotic/huntington-beach-recover-wood-dining-chiars-set-hide-hair-1.jpg",
    beforeAlt:
      "Reupholster Mesh Dining Chair with Hair-On-Hide in Huntington Beach",
    beforeTitle:
      "Reupholster Mesh Dining Chair with Hair-On-Hide in Huntington Beach",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/v1747048472/before-after/leather-reupholstery/dining-chairs/exotic/huntington-beach-recover-wood-dining-chiars-set-hide-hair-1.jpg",
    afterAlt:
      "Reupholster Mesh Dining Chair with Hair-On-Hide in Huntington Beach",
    afterTitle:
      "Reupholster Mesh Dining Chair with Hair-On-Hide in Huntington Beach",
    serviceType: "Leather Recovering",
    furniture: "Dining Chair",
    color: (
      <a
        href="https://res.cloudinary.com/releather-com/image/upload/v1747049357/leather/cowhide/Cowhide_Leather_Chestnut.png"
        title="View Exotic Cowhide Leather in Chestnut"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1747049357/leather/cowhide/Cowhide_Leather_Chestnut.png"
          alt="Exotic Cowhide Leather in Chestnut"
          title="Exotic Cowhide Leather in Chestnut"
          width={250}
          height={50}
          loading="lazy"
        />
      </a>
    ),
    leatherType: "Hair-On-Hide",
    problem: "Mesh seats minor damage",
    location: "Huntington Beach, CA",
    description: (
      <>
        These wooden dining chairs originally had mesh seats with minor damage.
        To enhance durability and design, we removed the straw material, added{" "}
        <Link
          href="/services/restuffing-foam-replacement"
          aria-label="Learn more about our medium-density foam restuffing service"
        >
          medium-density foam
        </Link>
        , and reupholstered the seats in elegant medium brown hair-on cowhide.
        Brass tacks completed the refined look. Designed for furniture,
        accessories, throw pillows, and rugs, this leather is durable against
        normal wear and tear and allows for easy cleaning with a light vacuum
        or brush.
      </>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/v1747048471/before-after/leather-reupholstery/dining-chairs/exotic/huntington-beach-recover-bar-stool-hair-on-hide-stenciled-zebra-print.jpg",
    beforeAlt:
      "Hair-on-hide zebra print leather bar stool upholstery in exotic cowhide",
    beforeTitle:
      "Hair-on-hide zebra print leather bar stool upholstery in exotic cowhide",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/v1747048471/before-after/leather-reupholstery/dining-chairs/exotic/huntington-beach-recover-bar-stool-hair-on-hide-stenciled-zebra-print.jpg",
    afterAlt:
      "Hair-on-hide zebra print leather bar stool upholstery in exotic cowhide",
    afterTitle:
      "Hair-on-hide zebra print leather bar stool upholstery in exotic cowhide",
    serviceType: "Leather Recovering",
    furniture: "Bar Stool",
    color: (
      <a
        href="https://res.cloudinary.com/releather-com/image/upload/v1747049369/leather/cowhide/Cowhide_Leather_Zebra.jpg"
        title="View Cowhide Leather Zebra Sample"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_250,h_50/bo_2px_solid_rgb:f8991d/v1747049369/leather/cowhide/Cowhide_Leather_Zebra.jpg"
          alt="Zebra print hair-on-hide leather swatch from Exotic collection"
          title="Zebra print hair-on-hide leather swatch from Exotic collection"
          width={250}
          height={50}
          loading="lazy"
        />
      </a>
    ),
    leatherType: "Hair-On-Hide",
    problem: "Custom zebra print recovering",
    location: "Huntington Beach, CA",
    description:
      "This bar stool set was custom reupholstered in a plush zebra print using premium hair-on-hide leather. The bold design adds a playful yet stylish accent to the space. Known for its durability and easy maintenance, this exotic leather is ideal for statement furniture pieces.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746444025/before-after/leather-reupholstery/dining-chairs/brown/Leather-Upholstery-Cromwellian-Chairs-San-Diego-Before-1.jpg",
    beforeAlt: "Before Reupholstery of Cromwellian Leather Chair San Diego",
    beforeTitle: "Before Reupholstery of Cromwellian Leather Chair San Diego",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1746444026/before-after/leather-reupholstery/dining-chairs/brown/Leather-Upholstery-Cromwellian-Chairs-San-Diego-After-1.jpg",
    afterAlt: "After Leather Reupholstery Cromwellian Chair San Diego",
    afterTitle: "After Leather Reupholstery Cromwellian Chair San Diego",
    serviceType: "Leather Recovering",
    furniture: "Cromwellian Chair",
    color: (
      <a
        href="https://res.cloudinary.com/releather-com/image/upload/v1639529981/leather/Concerto_Saddle_HI.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/v1639529981/leather/Concerto_Saddle_HI.jpg"
          alt="Concerto Saddle Leather Sample"
          title="Concerto Saddle Leather Sample"
          width={250}
          height={50}
          loading="lazy"
        />
      </a>
    ),
    leatherType: "Aniline Leather",
    problem: "Tears stains dryness generations of wear",
    location: "San Diego, CA",
    description:
      "We recovered a set of heirloom Cromwellian chairs using distressed waxed leather for dining chairs, preserving their rustic charm. Generations of wear—tears, stains, and dryness—had aged them. With fresh foam, brass nails, and rich leather for dining chairs, the 17th-century style was thoughtfully brought back to life.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747051371/before-after/leather-restoration/furniture/dining-chair/red/Leather-Restoration-Red-Leather-Bar-Stool-Before_.png",
    beforeAlt: "red leather bar stool before leather restoration",
    beforeTitle: "red leather bar stool before leather restoration",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/v1747051371/before-after/leather-restoration/furniture/dining-chair/red/Leather-Restoration-Red-Leather-Bar-Stool-After.png",
    afterAlt: "red leather bar stool after leather restoration",
    afterTitle: "red leather bar stool after leather restoration",
    serviceType: "Leather Restoration",
    furniture: "Bar Stool",
    color: "Red",
    leatherType: "Protected",
    problem: "Restoration",
    location: "—",
    description:
      "Red leather bar stool before and after leather restoration.",
  },
];

export default function LeatherRestorationDiningChairsPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Leather for Dining Chairs"
            subtitle={
              <>
                <em>Upgrade Dining Chairs</em>
                <br />
                Restore Leather. Replace Leather.
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Get a quote to restore or replace the leather on your dining chairs with premium materials and expert craftsmanship.",
              "aria-label":
                "Get a quote to restore or replace the leather on your dining chairs with premium materials and expert craftsmanship.",
              label: (
                <>
                  Get{" "}
                  <span className="hidden sm:inline">
                    Leather For Dining Chair{" "}
                  </span>
                  Quote
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_560,h_315/bo_10px_solid_rgb:f8991d/v1746444026/before-after/leather-reupholstery/dining-chairs/brown/Leather-Upholstery-Cromwellian-Chairs-San-Diego-After-1.jpg",
              alt: "Leather for dining chairs - reupholstered Cromwellian chairs after restoration",
              title: "Leather for dining chairs - reupholstered Cromwellian chairs after restoration",
              width: 560,
              height: 315,
            }}
            body={
              <p>
                We provide leather cleaning, restoration, and dyeing for dining
                chairs and bar stools. Services address fading, scuffs, stains,
                and surface dryness. For cuts or heavy wear, we offer{" "}
                <Link
                  href="/services/leather-upholstery"
                  aria-label="Read more about our partial or full leather reupholstery service"
                >
                  partial or full reupholstery
                </Link>
                . Old leather can be replaced with a custom leather option. We
                stock{" "}
                <a
                  href="https://www.releather.com/types-of-leather#aniline"
                  aria-label="Learn more about Aniline leather"
                >
                  Aniline
                </a>
                ,{" "}
                <a
                  href="https://www.releather.com/types-of-leather#semi-aniline"
                  aria-label="Learn more about Semi-Aniline leather"
                >
                  Semi-Aniline
                </a>
                , and{" "}
                <a
                  href="https://www.releather.com/types-of-leather#pigmented"
                  aria-label="Learn more about Protected (pigmented) leather"
                >
                  Protected
                </a>{" "}
                leather types.
              </p>
            }
          />

          <section
            id="recommendation"
            className="border-t-4 border-black pt-12"
            aria-labelledby="recommendation-heading"
          >
            <h6
              id="recommendation-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              <span className="border-2 border-black bg-releather-orange px-2 py-0.5">
                Recommended for:
              </span>
            </h6>
            <p className="mt-4 font-sans text-base font-bold text-gray-800">
              <strong>
                Dining Chairs, Bar Stools, Dinette Chairs, Side Chairs, Accent
                Chairs, Host Chairs
              </strong>
            </p>
            <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-4 lg:px-2">
              {recommendationImages.map((item) => (
                <li key={item.label} className="text-center">
                  <div className="mx-auto max-w-[200px] border-4 border-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
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

          <Guide
            id="guide"
            header={{
              title: "ReLeathering for Dining Chairs",
              tagline: "→ Restore or Recover Your Leather",
            }}
          >
            <p>
              Recoloring vs Reupholstery: What&apos;s Right for Your Chairs?
              Recoloring is cost-effective. Reupholstery includes new leather
              and more labor. Pick based on your chair&apos;s damage and design
              goals
            </p>
            <h5>Can Your Leather Chairs Be Restored?</h5>
            <div className="float-right ml-6 mb-4 w-[280px] shrink-0 sm:w-[320px]">
              <figure className="brutalist-image-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_450,h_450/bo_10px_solid_rgb:f8991d/v1747051827/before-after/leather-restoration/furniture/dining-chair/brown/Leather-Restoration-Tan-Leather-Dining-Chair-Set.jpg"
                  alt="leather restoration tan dining chair set"
                  title="leather restoration tan dining chair set"
                  width={450}
                  height={450}
                  loading="lazy"
                />
              </figure>
              <p className="brutalist-caption mt-2">
                Tan leather dining chairs restored with rich color and
                protection finish.
              </p>
            </div>
            <p>
              Look for fading, dryness, stains, scratches, or rips.{" "}
              <Link
                href="/services/leather-restoration"
                aria-label="Leather Restoration service"
              >
                Leather Restoration
              </Link>{" "}
              can treat these.
            </p>
            <h5>Can You Replace the Leather on Dining Chairs?</h5>
            <p>
              For heavy wear or a new look, full reupholstery may be best. This
              is part of our Leather Reupholstery service for worn dining chairs.
            </p>
            <h5>Best Leather for Dining Chairs</h5>
            <p>
              Protected leather is best for families—durable and easy to clean.
              Aniline leather is elegant but high-maintenance. Choose based on
              usage.
            </p>
            <h5>Why Choose Leather Over Fabric?</h5>
            <p>
              Leather is durable, stylish, and easy to clean. Unlike fabric, it
              resists spills and lasts longer—perfect for dining use and daily
              wear.
            </p>
          </Guide>

          <LeatherRestorationBeforeAfter items={beforeAfterItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}
