import Link from "next/link";
import Image from "next/image";

export default function LeatherUpholsteryGuideContent() {
  return (
    <>
      <div className="overflow-hidden">
        <figure className="brutalist-image-frame float-left mr-6 mb-4 w-[280px] shrink-0 sm:w-[320px]"><Image unoptimized
            src="https://res.cloudinary.com/releather-com/image/upload/v1771656983/before-after/leather-reupholstery/reupholster-leather-wingback-chair.jpg"
            alt="Reupholster leather wingback chair"
            title="Leather reupholstery wingback chair"
            width={320}
            height={240}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </figure>
        <p className="font-sans text-base leading-relaxed text-gray-800">
          Leather Upholstery service is split into two separate restoration
          services: Full and Partial. For sofas or chairs in need of a complete
          recovering or upgrade, we offer Full Leather Upholstery to recover the
          entire piece of furniture with your choice of leather. For well-worn,
          ripped, or torn leather seating, panels, or other sections, we offer
          Partial Leather Upholstery to replace the damaged leather with new
          matching leather.{" "}
          <Link
            href="https://www.releather.com/services/restuffing-foam-replacement"
            title="Foam Replacement and Restuffing Sofa Cushions"
          >
            Foam Replacement and Restuffing Sofa Cushions
          </Link>{" "}
          is available to add suspension support to your seating. We offer our
          Leather Reupholstery services to residential and commercial customers.
        </p>
        <p className="mt-4 font-sans text-base font-bold text-black">
          <i className="fa fa-fw fa-medkit" aria-hidden /> Common Leather
          Upholstery Issues
        </p>
        <ul className="mt-2 list-inside list-disc font-sans text-base leading-relaxed text-gray-800">
          <li>My leather furniture needs to be recovered</li>
          <li>My leather is too worn and needs to be replaced</li>
          <li>My leather is ripped and torn and needs to be recovered</li>
        </ul>
      </div>
      <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
        <strong>Did you know?</strong> Upholstering in leather has a fascinating
        benefit. Leather is cool in the summer and warm in the winter.
        Here&apos;s why: Leather is porous like our skin. When leather was a
        hide, it protected the animal from the harsh elements. When the weather
        was hot, it opened up allowing more air to flow through so the animal
        was cooler. In the winter the hide constricted, retaining more warmth.
        Imitation leather or vinyl does not breathe and is cold in winter and
        sweaty in the summer.
      </p>
    </>
  );
}
