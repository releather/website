import Benefits from "@/components/Benefits";
import { cloudinaryDisplayUrl } from "@/lib/cloudinary";

const italyFlagUrl =
  "https://res.cloudinary.com/leathera/image/upload/w_240,h_144,c_limit,bo_1px_solid_rgb:555555/v1716563273/icons/flag-of-italy.jpg";

const benefitIconFrameClassName =
  "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border-2 border-releather-orange";

const benefitFlagIconClassName =
  "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden";

const leatherForUpholsteryBenefits = [
  {
    badge: "Quality",
    title: "Italian Upholstery Leather",
    icon: (
      <span className={benefitFlagIconClassName} aria-hidden>
        <img
          src={cloudinaryDisplayUrl(italyFlagUrl)}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </span>
    ),
    description: (
      <p className="mb-0">
        Our leather is finished in Italy, known for its quality and craftsmanship.
        Expect rich color, beautiful texture, and a refined look.
      </p>
    ),
  },
  {
    badge: "Variety",
    title: "Various Colors & Textures",
    icon: (
      <span
        className={`${benefitIconFrameClassName} bg-releather-orange text-black`}
        aria-hidden
      >
        <i className="fa fa-swatchbook text-2xl" aria-hidden />
      </span>
    ),
    description: (
      <p className="mb-0">
        We stock high-end upholstery leather in many colors, grains, and finishes
        — from smooth and modern to natural and textured.
      </p>
    ),
  },
  {
    badge: "Durability",
    title: "Residential & Commercial Use",
    icon: (
      <span
        className={`${benefitIconFrameClassName} bg-releather-orange text-black`}
        aria-hidden
      >
        <i className="fa fa-shield text-2xl" aria-hidden />
      </span>
    ),
    description: (
      <p className="mb-0">
        Our leather is durable and made to last. Ideal for sofas, chairs, offices,
        hospitality spaces, and high-traffic areas.
      </p>
    ),
  },
];

export default function LeatherForUpholsteryBenefits() {
  return (
    <Benefits id="benefits" embedded benefits={leatherForUpholsteryBenefits} />
  );
}
