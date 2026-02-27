import type { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";

const title = "Testimonials | ReLeather";
const description =
  "Customer reviews and testimonials for ReLeather leather restoration, dyeing, cleaning, and repair services. Real before & after and stories.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/testimonials" },
  openGraph: { url: "/testimonials", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

type Testimonial = {
  title: string;
  by: string;
  location: string;
  review: string;
  service: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    title: "Leather Restoration and Dyeing Custom Sofa Set in Laguna Niguel, CA",
    by: "L. Hill",
    location: "Laguna Niguel, CA",
    review:
      "We recently had out couch and love seat resurfaced by ReLeather. The eggplant colored leather of our couches had 13 years of ware and sun damage from our living room picture window. I did not have high hopes that they could be restored fully. When my couch and love seat were returned in just over a week, I could not have been happier. They looked brand new, flawless, and the color was perfectly restored. The owners of ReLeather picked up and delivered my furniture in person and were both knowledgeable and courteous. I would highly recommend this company.",
    service: "Leather Restoration Service",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/Leather-Restoration-Purple-Leather-Custom-Sofa-Set-Laguna-Niguel.jpg",
  },
  {
    title: "Leather Restoration and Dyeing Western Tooled Leather Wheeled Luggage Suitcase",
    by: "T. Collins",
    location: "Durango, Colorado",
    review:
      "You guys are so sweet! I'm just glad you are there for my leather cleaning and repair needs. I'm sure I'll have more items to send. Thanks much!",
    service: "Leather Restoration Service",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/Durango-Colorado-Western-Tooled-Natural-Leather-Suitcase-Luggage.jpg",
  },
  {
    title: "Leather Restoration and Dyeing Hancock and Moore Blue Recliner Chair and Ottoman",
    by: "S. White",
    location: "Mission Viejo, CA",
    review:
      "I purchased a navy blue leather recliner and ottoman approximately 15 years ago. It's my favorite chair, thus the leather was worn and showed white on the seat and back. I contacted Roberto and Jose to see if anything could be done. They assured me it would look like new and it does!! Their work is exceptional, they were punctual and completed the job on time and most importantly, they are reasonable. I'm grateful I found them.",
    service: "Leather Restoration Service",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/Mission-Viejo-Leather-Cleaning-Restoration-Hancock-and-Moore-Blue-Recliner-Chair.jpg",
  },
  {
    title: "Leather Couch Repair and Boots",
    by: "Ann",
    location: "Costa Mesa, CA",
    review:
      "Last 4th of July I had a party at my house and friends of mine brought their dogs with them. Due to the fireworks the dogs got on my leather couch and scratched a hole in it. I got a mailer from reLeather.com and they came out the next day and fixed it like new....This 4th I have a new one ( go figure ) and I am calling them back for the repair. I have beautiful leather couches and I am pleased they can make it look like new again for a small price. My daughter also spilled gasoline on her $200.00 suede boots while filling up her car and they were able to restore them to new....Great Business....",
    service: "Leather Refinishing Couch",
  },
  {
    title: "Leather Restoration and Dyeing Designer Handbags",
    by: "Pamela C.",
    location: "Riverdale, New Jersey",
    review:
      "ReLeather makes the process of reworking/dyeing your leather goods very easy. Their customer service is incredible and their workman ship is even better!! Everyone I show the handbag and shoes that I had dyed very specific colors were amazed. You ability to match the color samples I sent you is simply unmatched! I am telling all of my friends about your service, many are in the fashion industry and have handbags in colors they no longer like, yet were not sure what to do with them. I sent a favorite fushia colored Alexander McQueen scarf as a sample...and you matched my handbag to it PERFECTLY!",
    service: "Leather Restoration Service",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/New-Jersey-Leather-Restoration-Dyeing-Fushia-Recolor-Handbag-Purse-Bag.jpg",
  },
  {
    title: "Leather Restoration and Dyeing The Leather Factory Living Room Sofa Set",
    by: "Sharon",
    location: "San Clemente, CA",
    review:
      "I purchased black leather a couch and two love seats in 1990. They were in perfect condition structurally but the leather was faded and cracked. After changing the colors in the room the black leather no longer worked for us. We shopped for new furniture but none of it had the quality of what I already had. Who knew you could dye the leather from black to brown? I was an amazing transformation! The furniture looks brand new. Roberto and Jose where punctual, accommodating, trustworthy and most importantly they know what they are doing.",
    service: "Leather Sofa Change Color",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/San-Clemente-Leather-Restoration-Dyeing-Leather-Factory-Sofa-Couch-Set-Black-Faded.jpg",
  },
  {
    title: "Leather Restoration and Dyeing American Leather Living Room Sofa Set",
    by: "Tory",
    location: "Chicago, Illinois",
    review:
      "When those sofas come off the moving truck I was absolutely speechless. WOW absolutely gorgeous...I could not believe these were my same 8 year old sofas. The color is magnificent and you guys way exceeded my expectations...",
    service: "Leather Sofa Redyeing",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/Rancho-Mirage-Leather-Dyeing-Redyeing-Restoration-New-Color-American-Leather-Sofa-Set.jpg",
  },
  {
    title: "Leather Restoration and Dyeing Leather Factory Sectional Living Room Sofa",
    by: "Ivory Family",
    location: "Irvine, CA",
    review:
      "Everything! We had a sectional redyed from a blue to a deep burgundy. It looks like I just purchased it. Roberto and his dad were very professional and had years of experience dealing with leather. Our sectional was made of a very high grade imported leather from Italy so I was a little bit nervous until I saw the finished results. I could not be more pleased! They were very experienced. They had great suggestions. The job was done on time. You can see they are proud of the work they do and such be.",
    service: "Leather Refinishing Sofa Sectional",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/Irvine-Leather-Repair-Restoration-Dyeing-New-Color-Burgundy-Leather-Sofa-Sectional-Shaped.jpg",
  },
  {
    title: "Leather Restoration and Dyeing Leathercraft Natural Leather Purse",
    by: "Loriann",
    location: "Trabuco Canyon, CA",
    review:
      'There is SO much I love about this company. I went to 3 other places for someone to dye my purse from cream to black, no one would touch it, saying they couldn\'t do it! I found "ReLeather" and they said they could do it.. no problem. I sent it to them and when I got it back, it was perfect! BETTER than I expected (due to the 3 rejections before-I had my doubts, so I had some reservations) They even dropped it off for me no charge!!! The service impressed me tremedously! The work is like "old school": Quality and attention to details. Excellent service!!!!! and super Friendly. I am so impressed I super recommend them!!!!! You wouldn\'t be sorry by any means!!!!! Happy reLeathering :)))))) Loriann',
    service: "Leather Refinishing Purse Handbag",
  },
  {
    title: "Leather Dyeing: Yves Saint Laurent, Allen Edmonds Shoes",
    by: "Nicole T.",
    location: "Miami Beach, Florida",
    review:
      "I found this business through google. I took a chance sending my turquoise yves saint laurent shoes all the way to Cali. I could not be more pleased with the result. The shoes were turquoise and now they are black. The job is perfect.",
    service: "Leather Refinishing Designer Handbag and Shoes",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/Miami-Leather-Restoration-Dyeing-Color-Black-Turqouise-Yves-Saint-Laurent-Designer-Shoes-Pumps.jpg",
  },
  {
    title: "Leather Dyeing & Refinishing: Leather Factory Couches",
    by: "Carol",
    location: "Huntington Beach, CA",
    review:
      "I was so pleased with the excellent job that ReLeather did on my leather furniture. My sofa, love seat, and recliner look brand new! I thought having my leather furniture restored would be extremely expensive and that it would never look like it did when purchased. I was the opposite my furniture is 10 years old and has never looked so good! It was very affordable and quality work. Thank you Jose for a great job.",
    service: "Leather Chair Restoration Service",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/Huntington-Beach-leather-restoration-repair-refurbishing-refinishing-purple-recliner-lounge-chair-discolored-faded-surface.jpg",
  },
  {
    title: "Leather Restoration and Dyeing Stone Creek Classic Leather Couch, Chair with Brass Nailhead Trim",
    by: "Leesa",
    location: "Capistrano Beach, CA",
    review:
      "My experience with Releather was nothing short of excellence at its finest! I called and made an appointment that was focused on my convenience - Roberto showed up promptly. Since I had Googled the repair process I had an idea of what to expect and that helped me to understand that what he described took NO short cuts at all. Being satisfied that this was the right company to work with, I asked if we could schedule a pick up of my sofa and chair, and Roberto said he and Jose could help me right now, they had come prepared! What a pleasant surprise to not be kept waiting. So they loaded everything up in their nice clean van and promised my finished product in less than 2 weeks. Releather was true to their word. My furniture was back and looked brand new in a week and one-half. Their process is impressive and my furniture is beautiful again. That says a lot to me about their skills, commitment to quality and ability to charge a very reasonable price. Wow, I didn't know I had so much to say... After 10 years of daily use, which included sun damage to my leather (and regular use by my dogs), you would never know! The results were absolutely amazing. I couldn't be more pleased.",
    service: "Leather Restoration Service",
    image:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/testimonials/Capistrano-Beach-Leather-Restoration-Dyeing-Stone-Creek-Classic-Sofa-Set-Brown-Faded.jpg",
  },
  {
    title: "Leather Refinishing & Cleaning Leather Factory Sofa Set",
    by: "G. Floerchinger",
    location: "Rancho Santa Margarita, CA",
    review:
      "Honesty. Great workmanship. We checked the BBB for a rating, and your ratings were all 5 Stars, so we decided to use your service. And we now know why you have a 5 rating at BBB. We could not be happier with how you made our leather sofa and chair look after you finished. They look better then we when bought them. We can and will highly recommend your services for anyone looking for their leather to be renewed to original condition and better. Thank you for the service and we will add our 5 star rating to ReLeather.",
    service: "Leather Refinishing & Cleaning",
  },
];

function SpeechBubble({
  children,
  tailSide = "left",
  className = "",
}: {
  children: React.ReactNode;
  tailSide?: "left" | "right" | "bottom";
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-visible rounded-2xl border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#f8991d] sm:p-6 lg:p-8 ${className}`}
    >
      {/* Chunky speech-bubble tail */}
      {tailSide === "left" && (
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-[14px] border-r-black border-t-transparent border-b-transparent border-l-transparent"
          aria-hidden
        />
      )}
      {tailSide === "right" && (
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-[14px] border-l-black border-t-transparent border-b-transparent border-r-transparent"
          aria-hidden
        />
      )}
      {tailSide === "bottom" && (
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-[14px] border-t-black border-l-transparent border-r-transparent border-b-transparent"
          aria-hidden
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Testimonials"
            subtitle={
              <>
                <strong>What our customers say</strong>
                <br />
                <em>Reviews &amp; before &amp; after.</em>
              </>
            }
          />

          <section
            id="testimonials-list"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="testimonials-heading"
          >
            <h2 id="testimonials-heading" className="sr-only">
              Customer testimonials
            </h2>
            <ul className="flex flex-col gap-10" role="list">
              {testimonials.map((t, index) => {
                const hasImage = Boolean(t.image);
                const tailSide: "left" | "right" | "bottom" = hasImage
                  ? index % 2 === 0
                    ? "left"
                    : "right"
                  : "bottom";
                return (
                  <li key={`${t.by}-${t.location}-${index}`}>
                    <article
                      className={`overflow-hidden border-4 border-black bg-white shadow-[6px_6px_0_0_#f8991d] ${hasImage ? "grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]" : ""}`}
                      style={
                        hasImage && index % 2 === 1
                          ? { direction: "rtl" }
                          : undefined
                      }
                    >
                      {hasImage && t.image ? (
                        <div
                          className="relative min-h-[200px] bg-gray-200 sm:min-h-[260px]"
                          style={
                            index % 2 === 1 ? { direction: "ltr" } : undefined
                          }
                        >
                          <Image unoptimized
                            src={t.image}
                            alt=""
                            width={600}
                            height={400}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : null}
                      <div
                        className={`flex flex-col justify-center ${hasImage ? "border-t-4 border-black p-4 sm:border-t-0 sm:border-l-4 sm:border-r-0 sm:p-6 lg:p-8" : "p-4 sm:p-6 lg:p-8"} ${index % 2 === 1 && hasImage ? "sm:border-l-0 sm:border-r-4" : ""}`}
                        style={
                          index % 2 === 1 && hasImage
                            ? { direction: "ltr" }
                            : undefined
                        }
                      >
                        <SpeechBubble tailSide={tailSide}>
                          <p className="font-sans text-sm font-medium uppercase tracking-wide text-releather-orange">
                            {t.service}
                          </p>
                          <h3 className="mt-2 font-display text-lg font-normal tracking-tight text-black sm:text-xl">
                            {t.title}
                          </h3>
                          <p className="mt-1 font-sans text-sm text-gray-600">
                            By {t.by} · {t.location}
                          </p>
                          <blockquote className="mt-4 font-sans text-gray-800 leading-relaxed">
                            &ldquo;{t.review}&rdquo;
                          </blockquote>
                        </SpeechBubble>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
