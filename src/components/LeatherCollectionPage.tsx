import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import type { UpholsteryLeatherCollection } from "@/lib/upholsteryLeatherCollections";
import {
  LEATHER_MATERIAL_QUOTE_URL,
  UPHOLSTERY_LEATHER_COLLECTIONS,
  collectionCompositeImageUrl,
  upholsteryLeatherCollectionHref,
} from "@/lib/upholsteryLeatherCollections";

type LeatherCollectionPageProps = {
  collection: UpholsteryLeatherCollection;
};

export default function LeatherCollectionPage({
  collection: c,
}: LeatherCollectionPageProps) {
  const heroSrc = collectionCompositeImageUrl(c.overlayText, c.imageFile, 600);
  const otherCollections = UPHOLSTERY_LEATHER_COLLECTIONS.filter(
    (x) => x.slug !== c.slug,
  );

  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title={c.name}
            subtitle={<span className="text-gray-800">{c.tagline}</span>}
            primaryCta={{
              href: LEATHER_MATERIAL_QUOTE_URL,
              title: `${c.name} — leather material estimate`,
              "aria-label": `${c.name} — leather material estimate`,
              label: "Get Leather Material Quote!",
            }}
            image={{
              src: heroSrc,
              alt: `${c.name} — Italian upholstery leather`,
              title: `${c.name} for upholstery`,
              width: 600,
              height: 400,
            }}
          />

          <section
            className="border-t-4 border-black pt-12"
            aria-labelledby={`${c.slug}-body`}
          >
            <h2
              id={`${c.slug}-body`}
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              About this collection
            </h2>
            <div className="mt-4 space-y-4 font-sans text-lg leading-relaxed text-gray-800">
              {c.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <p className="mt-8 font-sans text-base text-gray-700">
              <Link
                href="/leather-for-upholstery#collections"
                className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
              >
                Back to all upholstery leather collections
              </Link>
              {" · "}
              <Link
                href="/types-of-leather"
                className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
              >
                Types of leather finishes
              </Link>
              {" · "}
              <Link
                href="/services/leather-upholstery"
                className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
              >
                Leather reupholstery service
              </Link>
            </p>
          </section>

          <section className="mt-12 border-t border-gray-200 pt-10">
            <h3 className="font-display text-xl font-normal text-black sm:text-2xl">
              Explore more collections
            </h3>
            <ul className="mt-4 columns-1 gap-x-8 font-sans text-base text-gray-800 sm:columns-2">
              {otherCollections.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={upholsteryLeatherCollectionHref(o.slug)}
                    className="text-black hover:underline"
                    title={`${o.name} collection`}
                  >
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
