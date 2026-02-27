import Link from "next/link";
import Image from "next/image";
import { GuideSection } from "@/components/Guide";
import LeatherRestorationFinishes from "./LeatherRestorationFinishes";

export default function LeatherRestorationGuideContent() {
  return (
    <>
      <div className="my-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
        <Link
          href="#Faded-Leather"
          title="Faded leather restoration"
          className="group block border-4 border-black bg-releather-orange p-5 text-center font-sans text-lg font-bold leading-snug transition hover:border-releather-dark hover:bg-black"
        >
          <span className="text-white group-hover:text-releather-orange">
            <span className="text-2xl" aria-hidden>&ldquo;</span>
            My leather seats are faded discolored and need restoring!
            <span className="text-2xl" aria-hidden>&rdquo;</span>
          </span>
        </Link>
        <Link
          href="#Cracking-Leather"
          title="Cracking leather restoration"
          className="group block border-4 border-black bg-releather-orange p-5 text-center font-sans text-lg font-bold leading-snug transition hover:border-releather-dark hover:bg-black"
        >
          <span className="text-white group-hover:text-releather-orange">
            <span className="text-2xl" aria-hidden>&ldquo;</span>
            My leather sofa is drying out, stiff and cracking!
            <span className="text-2xl" aria-hidden>&rdquo;</span>
          </span>
        </Link>
        <Link
          href="#Stained-Leather"
          title="Stained leather restoration"
          className="group block border-4 border-black bg-releather-orange p-5 text-center font-sans text-lg font-bold leading-snug transition hover:border-releather-dark hover:bg-black"
        >
          <span className="text-white group-hover:text-releather-orange">
            <span className="text-2xl" aria-hidden>&ldquo;</span>
            My leather seats are oily and need help removing stains
            <span className="text-2xl" aria-hidden>&rdquo;</span>
          </span>
        </Link>
      </div>

      <GuideSection id="can-leather-be-restored">
        Can Leather Furniture be restored?
      </GuideSection>
      <p>
        Leather is a durable material made from the skin of an animal and it can
        last for many years with proper leather care and maintenance. However,
        over time, leather can become cracked, faded, stained, and damaged.
        While some people might believe that worn leather is too difficult to
        repair, this is not the case.{" "}
        <Link href="/services" title="Leather Restoration Services">
          <strong>Professional leather restoration services</strong>
        </Link>{" "}
        can repair and restore leather to its original condition and even made to
        look better than new.
      </p>

      <GuideSection>How to restore your leather furniture so it lasts longer:</GuideSection>
      <p>
        <em>→ Cleaner, Conditioner.</em>
      </p>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
        <p>
          The most effective repair kit you, the customer, can use are leather
          products such as a leather cleaner and leather conditioner.{" "}
          <Link
            href="/leather-conditioner"
            title="Leather Conditioner for Leather Restoration"
          >
            <strong>ReLeather Leather Conditioner</strong>
          </Link>{" "}
          for leather furniture is ideal for routine leather care. This product
          will help to hydrate the leather, restore its natural oils, prevent
          cracked leather and keep your leather feeling soft and supple. This
          leather conditioner bottle is easy to use. Apply a small amount of
          leather lotion with a cloth to the leather surface in a circular motion
          and let dry.
        </p>
        <div className="shrink-0"><Image unoptimized
            src="https://res.cloudinary.com/releather-com/image/upload/v1643861241/logo/ReLeather-Leather-Conditioner.png"
            width={120}
            height={120}
            alt="Leather Conditioner for Restoring Leather"
            title="Leather Conditioner for Restoring Leather"
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
        <p>
          Another popular fix is to use a leather cleaner.{" "}
          <Link
            href="/leather-cleaner"
            title="Leather Cleaner for Leather Restoration"
          >
            <strong>ReLeather Leather Cleaner</strong>
          </Link>{" "}
          keeps your leather sofa in pristine condition just wipe your leather
          seats clean. This leather care product is excellent for removing
          stains, dirt, dust, grime, and even soiling in the grain of pebble
          leather seats.
        </p>
        <div className="shrink-0"><Image unoptimized
            src="https://res.cloudinary.com/releather-com/image/upload/c_crop,g_south,h_400,w_122/v1653615923/products/ReLeather-Best-Leather-Cleaner-For-Leather-Restoration.png"
            width={73}
            height={240}
            alt="Leather Cleaner for Restoring Leather"
            title="Leather Cleaner for Restoring Leather"
            loading="lazy"
          />
        </div>
      </div>

      <p>
        There are several DIY leather restoration projects that can be used to
        remove general wear on a leather couch, leather chair, leather car
        seats, or leather goods. There are also many{" "}
        <strong>leather repair kits</strong> in the market. However, the
        benefits of using leather restoration services outweigh the time and
        money of trying to do it yourself. Invest in results you will
        absolutely love. For example, a leather repair kit offers short fixes
        like a makeshift leather patch for tears on a leather seat or leather
        upholstery when it may just need to be replaced, reupholstered. The
        leather restoration process requires special skills and knowledge from
        identifying the type of leather to executing the right leather repair
        solution for the problem. So, for quality leather repair and leather
        care, leather restoration services is your best option.
      </p>

      <GuideSection>
        How to identify whether your furniture needs leather restoration?:
      </GuideSection>
      <p>
        <em>→ Faded, Cracked, Scratched, Stained.</em>
      </p>
      <p>
        If you notice any of the the following issues on your leather items,
        it&apos;s a sign you need to search for a professional leather
        restoration and leather repair services. Be sure to fix your leather
        furniture before the sofas and chairs gets worse and the repairs get
        more expensive!
      </p>

      <GuideSection id="Types-Leather-Restoration-Finishes">
        The three most common types of finishes for restored leather are:
      </GuideSection>
      <p>
        <em>→ Natural, Glossy, Matte.</em>
      </p>
      <LeatherRestorationFinishes />
    </>
  );
}
