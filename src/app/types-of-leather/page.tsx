import type { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";

const title = "Types of Leather | ReLeather";
const description =
  "Guide to aniline leather finishes: pure aniline, wax pull-up, oil pull-up, nubuck, semi-aniline, pigmented, corrected, and bonded leather.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/types-of-leather" },
  openGraph: { url: "/types-of-leather", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const leatherTypes = [
  {
    id: "Pure-Aniline",
    title: "Pure Aniline Leather ",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pure%20Aniline,co_rgb:ffffff,y_10/v1652587080/leather/Aniline_Mustard_HI.jpg",
    alt: "Pure-Aniline",
    paragraphs: [
      "A pure aniline leather is unique in that it retains the natural look and feel of the hide. It has little to no protective coating, making it more susceptible to staining from body oils, color fading, and surface scratches, so it requires special care. Aniline leather is the most luxurious and expensive leather option. An aniline hide that has undergone a limited finishing process is more valuable because it showcases all of the imperfections and blemishes of the leather, giving it character. ",
      "Most leather coverings in the market are aniline dyed. Due to its special maintenance needs, pure aniline leather is best used for low-use items. It generally is not suitable for an active household. Overall this unfinished leather is the perfect choice for those who want to add a touch of luxury to their home.",
    ],
  },
  {
    id: "Wax-Pull-Up-Leather",
    title: "Wax Pull Up Leather",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Wax%20Pull-Up,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg",
    alt: "Wax-Pull-Up-Leather",
    paragraphs: [
      "Wax pull up leather is treated with waxes and oils to give it a shiny and/or distressed finish. What makes this material unique is that when the leather is stretched, the oils or waxes cause the color of the leather to migrate and become lighter in those pulled surface areas. The wax treatment makes the leather more resistant against light wear, while also giving it a softer, more pliable texture. However, some wax pull up leathers can be difficult to care for because these leathers can prematurely fade from direct sunlight and easily absorb body oils and water damage. Wax pull up leather is often used in high-end furniture and fashion, as it provides a luxurious look and feel. Wax pull up leather is a unique and stylish choice for anyone looking for both style and function. ",
    ],
  },
  {
    id: "Oil-Pull-Up-Leather",
    title: "Oil Pull Up Leather ",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Oil%20Pull%20Up,co_rgb:ffffff,y_10/v1653007847/leather/Harmony_Brandy_HI.jpg",
    alt: "Oil-Pull-Up-Leather",
    paragraphs: [
      " Oil pull-up leather is finished with natural oils to give a unique weathered patina. Oil pull-up leather is made using a variety of different techniques, but the most common method involves applying oil either on the flesh or grain side and then passing it through a roller. This causes the oil to be pulled up into the top layer, creating the marbled effect. This finished leather is prized for its rich color and unique grain pattern. It's also known for being soft and supple, making it a popular choice for upholstery and fashion. Oil pull-up Leather also requires special care to maintain its luster and prevent damage. Keep it out of direct sunlight and away from heat sources. Never use harsh chemicals or abrasive cleaners. With proper care, oil pull-up Leather will retain its natural beauty for many years to come. ",
    ],
  },
  {
    id: "Nubuck",
    title: "Nubuck Leather ",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg",
    alt: "Nubuck",
    paragraphs: [
      " Nubuck leather is a top-grain cow hide that has been sanded, brushed, or buffed on the grain side to give it a velvety surface. They are pigmented with transparent dyes and a protective coating may be added to the surfaces. Nubuck is incredibly soft and supple and similar to suede, but is more of a natural grain. It is also more expensive than suede, and is often considered to be a more luxury material. Nubuck leather is often used in upholstery, shoes, and other high-use items. It is also quite expensive, due to its durability and luxurious feel. Nubuck is also known for being difficult to care for, as it stains easily and is susceptible to water damage. For this reason, many people opt for nubuck leather alternatives, such as pure aniline leather. With proper care nubuck can last for many years. ",
    ],
  },
  {
    id: "Semi-Aniline-Leather",
    title: "Semi-Aniline Leather ",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg",
    alt: "Semi-Aniline-Leather",
    paragraphs: [
      "Semi-aniline leather is a type of leather that has been dyed with aniline and then given a light surface pigmentation. This treatment helps to protect the leather from fading and other types of damage, while still allowing the natural grain of the hide to show through resulting in a more uniform and/or two tone appearance. The buffing and sanding of the top layer of the hide removes any natural markings and imperfections. Semi-aniline leather is readily used in high-end furniture and car upholstery because it provides a refined look and feel. In terms of protection and durability, it falls somewhere between full-grain aniline leather and protected leather, making it a good choice for areas that see a lot of wear and tear. However, it's worth noting that semi-aniline leather is not as resistant to staining as protected leather, so it may require more care and maintenance.",
    ],
  },
  {
    id: "Pigmented-Leather",
    title: "Pigmented Leather ",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg",
    alt: "Pigmented-Leather",
    paragraphs: [
      " Pigmented leather also known as protected leather  is treated with a coating and finish that ensures color consistency and makes it resistant to staining and moisture. This treatment can be applied to both full-grain and top-grain leather, and it helps to extend the lifespan of the material. Pigmented leather is often used in furniture upholstery, as well as in auto upholstery, clothing and accessories. It is available in a wide range of colors, and the finish can be either glossy or matte. The main advantage of protected leather is that it requires less maintenance than uncoated leather. However, it is important to note that the coating can eventually wear away, exposing the underlying leather to damage. For this reason, it is important to follow the manufacturer's instructions when cleaning and caring for pigmented leather. With proper care, pigmented leather can last for many years.",
    ],
  },
  {
    id: "Corrected-Leather",
    title: "Corrected Leather",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Corrected,co_rgb:ffffff,y_10/v1653008190/leather/Supple_Khaki_HI.jpg",
    alt: "Corrected-Leather",
    paragraphs: [
      " Corrected leather is a type of leather that has been treated to improve its appearance. The hides are often sanded down and coated with pigments or dyes. This process can help to cover up imperfections and give the leather a more color consistent look. It is also treated to create a uniform grain or decorative pattern throughout the hide. This pattern is embossed or stamped directly onto leather. Corrected leather is often used in upholstery, clothing, and accessories. It is typically more affordable than full-grain leather and has a more consistent texture. Corrected leather can make for an ideal choice for an active household. However, corrected leather is not as durable as full-grain leather and is more susceptible to staining and fading. When choosing corrected leather, it is important to consider the intended use and desired appearance because normal wear and tear can often be difficult to repair. ",
    ],
  },
  {
    id: "Bonded-Leather",
    title: "Bonded Leather ",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/g_center,l_text:montserrat_90_style_light:Bonded,co_rgb:ffffff,y_10/v1653008720/leather/Bonded-Leather.jpg",
    alt: "Bonded-Leather",
    paragraphs: [
      " Bonded Leather, also known as reconstituted leather or blended leather, is a man-made material created from leather scraps that have been shredded and bonded back together with adhesives. This material can resemble the look and feel of real leather. However unlike full-grain or top-grain leather, bonded leather does not have a natural grain surface, making it less durable, breathable, and more susceptible to cracking and peeling over time. Bonded Leather is often used for furniture upholstery, car seats, and other items where a leather look is desired but the durability of natural leather is not required. While bonded leather may not be as high quality as natural leather, it is often more affordable and can provide versatility. ",
    ],
  },
];

export default function TypesOfLeatherPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Types of Leather"
            body={
              <div className="overflow-hidden">
                <p>
                  Aniline leather is a type of leather that is dyed through with aniline dyes, meaning that the colorant penetrates the entire thickness of the skin. After the dyeing process, the natural scars and markings on the animal will be visible on the surface of leather, along with an even coloration. Aniline leather is often used in high-end furniture and fashion accessories. It has a luxurious look and feel, and it&apos;s very durable. If you&apos;re looking for a sophisticated, stylish material, aniline leather is a great option.
                </p>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.releather.com/what-is-aniline-leather"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="float-right ml-4 mb-4 block font-sans font-medium text-releather-orange underline underline-offset-2 hover:text-black"
                >
                  Share on Facebook
                </a>
              </div>
            }
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Type of Aniline Leather Finishes
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Aniline leather has many different types of  finishes, each with their own unique characteristics. Understanding the differences can be difficult for beginners who may not know what they&apos;re looking at when faced with a selection in stores or online retailers - but don&apos;t worry! We&apos;ve compiled this guide to help you make sense out all those choices!
            </p>
          </section>

          {leatherTypes.map((type) => (
            <section
              key={type.id}
              id={type.id}
              className="mt-12 border-t-4 border-black pt-12"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
                    {type.title}
                  </h2>
                  {type.paragraphs.map((para, i) => (
                    <p key={i} className="mt-4 font-sans text-base leading-relaxed text-gray-800">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center"><Image
                    src={type.imgSrc}
                    alt={type.alt}
                    width={550}
                    height={550}
                    loading="lazy"
                    className="border-[5px] border-releather-orange"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}