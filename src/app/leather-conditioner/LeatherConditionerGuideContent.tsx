import Link from "next/link";
import Image from "next/image";
import LiteYouTube from "@/components/LiteYouTube";

export default function LeatherConditionerGuideContent() {
  return (
    <>
      <p>
        Learn how to make your next leather cleaning duties a success. Watch this quick video guide to make to most of your leather conditioner
      </p>

      <p>
        ReLeather Care is a specialized wax-free leather lotion formulated to clean, condition, protect finished, exotic, and naked leathers. Keeps leather soft and supple. Renews leathers natural sheen that repels water spotting and cracking. Safely removes dirt, soil without sticky residue, and will not darken finish. Recommended for finished{" "}
        <Link href="/types-of-leather#Wax-Pull-Up-Leather">aniline</Link> (included distressed, wax pull-up, oil pull-up) and{" "}
        <Link href="/types-of-leather#Semi-Aniline-Leather">semi-aniline</Link> leather,{" "}
        <Link href="/types-of-leather#Pigmented-Leather">pigmented or protected</Link> leathers. Not intended for use on{" "}
        <Link href="/types-of-leather#Nubuck">nubuck</Link> or suede leather.
      </p>

      <p>
        <i className="fa fa-quote-left fa" aria-hidden />
        {" "}Our leather conditioner restores top grain leather{" "}
        <i className="fa fa-quote-right fa" aria-hidden />
      </p>

      <div className="overflow-hidden">
        <LiteYouTube
          videoId="8lyJrU-PcA8"
          title="Leather conditioner guide"
          embedParams="rel=0"
          className="float-right ml-6 mb-4 h-[200px] w-[356px] max-w-full rounded-lg sm:h-[225px] sm:w-[400px]"
        />
        <p className="font-display text-2xl font-normal leading-tight text-black sm:text-3xl">
          Preserving your leather investment starts with a proven Leather Conditioner!
        </p>
        <p className="mt-4">
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.releather.com/leather-conditioner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#3B5998] bg-[#3B5998] px-4 py-2 font-sans font-bold text-white !no-underline transition hover:opacity-90"
          >
            <i className="fab fa-facebook fa-2x text-white" aria-hidden />
            <span className="text-white">Share on Facebook</span>
          </Link>
        </p>
      </div>

      <p>
        When house cleaning is on the agenda, your comfy leather couch is something you don&apos;t want to miss. Regular cleaning and conditioning at least once a month or every three months helps extend the life of your furniture. Choosing the right leather care products makes the difference.
      </p>

      <div className="overflow-hidden">
        <figure className="brutalist-image-frame float-right ml-6 mb-4 w-[280px] shrink-0 sm:w-[320px]"><Image unoptimized
            src="https://res.cloudinary.com/releather-com/image/upload/v1654145295/icons/Leather-Restoration-Couch.png"
            alt="Leather Conditioning a Leather Sofa Couch Chair"
            title="Leather Conditioning a Leather Sofa Couch Chair"
            width={320}
            height={240}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </figure>
        <p>
          Knowing the <Link href="/types-of-leather" title="Type of Leather of your Sofa">type of leather</Link> you have in your living room is important. Chemical polishes and oily cleaners can damage delicate leathers. Our <Link href="/leather-conditioner#buy" title="ReLeather Leather Conditioner">leather conditioner</Link> is designed for home owners who want to keep up with the care and maintenance of their quality leather. This professional formulated solution preserves luxury leather including furniture, sofas, chairs, car seat upholstery, handbags, and more. Professional <Link href="/services/leather-cleaning">Leather Cleaning Services</Link> is also available.
        </p>
      </div>

      <div className="overflow-hidden">
        <figure className="brutalist-image-frame float-left mr-6 mb-4 w-[280px] shrink-0 sm:w-[320px]"><Image unoptimized
            src="https://res.cloudinary.com/releather-com/image/upload/v1654145295/icons/Leather-Restoration-Car-Seat.png"
            alt="Leather Conditioner for Car Seats"
            title="Leather Conditioner for Car Seats"
            width={320}
            height={240}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </figure>
        <p>
        Add this unique conditioning formula to your cleaning supplies. You will notice the difference next time you wipe down your leather sofa. You can even safely apply this lotion to your car seats to keep the leather feeling soft and flexible. This solution is ideal for any weathered leather in need of a good moisturizing.
        </p>
      </div>
    </>
  );
}
