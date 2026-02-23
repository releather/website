import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BlogPostSubsection from "@/components/BlogPostSubsection";
import Faq from "@/components/Faq";

const title = "Herman Miller Eames Chair Repair | ReLeather";
const description =
  "Leather and color restoration for Herman Miller Eames lounge chair and ottoman. Cleaning, restoration, reupholstery, foam replacement. Southern California.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/eames-chair-repair" },
  openGraph: { url: "/eames-chair-repair", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const commonIssues = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1656038522/before-after/oily-faded-leather-eames-chair-repair_n90p7q.jpg",
    alt: "Color Faded and Oil Stained Eames Chair Repair",
    title: "Color Faded and Oil Stained Eames Chair Repair",
    h5: "Discolored and Oil Stained !",
    h6: (
      <>
        → <strong><a href="https://www.releather.com/services/leather-restoration" target="_blank" rel="noopener noreferrer" title="Leather Restoration Fixes Discolored and Oil Stained Leather">Leather Restoration</a></strong> Fixes This
      </>
    ),
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1656038383/before-after/leather-scratches-eames-chair-ottoman-repair-1.jpg",
    alt: "Surface Scratches and Scuffs Eames Chair Repair",
    title: "Surface Scratches and Scuffs Eames Chair Repair",
    h5: "Scratches and Scuffs !",
    h6: (
      <>
        → <strong><a href="https://www.releather.com/services/leather-restoration" target="_blank" rel="noopener noreferrer" title="Leather Restoration Fixes Discolored and Oil Stained Leather">Leather Restoration</a></strong> Fixes This
      </>
    ),
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1656038275/before-after/eames-chair-cracked-leather-repair-2.jpg",
    alt: "Dry Stiff Cracking Leather Eames Chair Repair",
    title: "Dry Stiff Cracking Eames Chair Repair",
    h5: "Dry Cracking Leather !",
    h6: (
      <>
        → <strong><a href="https://www.releather.com/services/leather-upholstery" target="_blank" rel="noopener noreferrer" title="Leather Reupholstery Fixes Dry Stiff Cracking Leather Eames Chair">Leather Replacement</a></strong> Fixes This
      </>
    ),
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1656038720/before-after/sinking-seat-cushion-foam-eames-chair-repair.jpg",
    alt: "Sinking Soft Broken Down Foam Seat Cushion Eames Chair Repair",
    title: "Sinking Soft Broken Down Foam Seat Cushion Eames Chair Repair",
    h5: "Sinking Foam Seat Cushion !",
    h6: (
      <>
        → <strong><a href="https://www.releather.com/services/restuffing-foam-replacement" target="_blank" rel="noopener noreferrer" title="Foam Replacement Fixes Sinking Soft Broken Down Foam Seat Cushion Eames Chair Repair">Foam Replacement</a></strong> Fixes This
      </>
    ),
  },
];

const eamesChairFaqItems = [
  {
    question: "Can Eames chair leather be restored?",
    answer: (
      <p>
        Yes. We offer full leather restoration for Eames lounge chairs and ottomans, addressing color fading, discoloration, scuffs, scratches, light cracking, dryness, and oil stains. We can restore your chair to its original condition.
      </p>
    ),
  },
  {
    question: "How long does Eames chair restoration take?",
    answer: (
      <p>
        Turnaround varies by service—restoration, reupholstery, or foam replacement—and leather availability. We provide an estimated completion time when you submit a <Link href="/estimate" title="Request an Eames chair repair quote">quote request</Link> with photos.
      </p>
    ),
  },
  {
    question: "Do you reupholster Eames chairs?",
    answer: (
      <p>
        Yes. We offer partial and full leather reupholstery for Herman Miller Eames lounge chairs and ottomans, including panel replacement. We carry top grain aniline leather in a range of textures, colors, and finishes to match or refresh your chair.
      </p>
    ),
  },
];

export default function EamesChairRepairPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Herman Miller Eames Chair Repair"
            subtitle={
              <>
                Leather and Color Restoration
                <br />
                Serving Southern California
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Leather Restoration Service Cost",
              label: (
                <>
                  Get <span className="hidden sm:inline">Leather Restoration Price</span>
                  <span className="sm:hidden">Quote Now!</span>
                </>
              ),
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title: "(949) 529-4727",
              label: (
                <>
                  Or Call Us <i className="fa fa-phone fa-fw" aria-hidden /> (949) 529-4727
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/v1656138029/before-after/leather-restored-eames-chair-repair-before-after.jpg",
              alt: "Leather Restoration and Repair Herman Miller Eames Chair",
              title: "Leather Restoration and Repair Herman Miller Eames Chair",
              width: 450,
              height: 250,
            }}
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Herman Miller Eames Lounge Chair"
              tagline={<em> → Ideal for Repair and Restoration</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              The Herman Miller Eames Lounge Chair is one of the most iconic designs in the furniture industry. Unmatched craftsmanship along with attention to detail has made it a stable in luxury home interiors. The chair was designed by husband and wife team Charles and Ray Eames, who are considered to be among the most important designers of the mid-century modern movement. The Eames Lounge Chair is widely recognized for its timeless style, comfort, and durability. Its unique design combines a molded plywood frame with upholstered cushions, creating a chair that is both stylish and comfortable. The Eames Lounge Chair has been in production since 1956, and its popularity shows no signs of waning. Today, it remains one of the most coveted pieces of furniture on the market.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection title="How Much Do Herman Miller Chairs Cost?" />
            <div className="mt-4 flex flex-col items-center"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/v1656013497/before-after/Eames-Chair.png"
                title="Herman Miller Eames Lounge Chair and Ottoman"
                alt="Herman Miller Eames Lounge Chair and Ottoman"
                width={400}
                height={300}
                loading="lazy"
                className="rounded-[25px]"
              />
              <p className="mt-4 font-sans text-lg text-gray-800">
                <a href="https://store.hermanmiller.com/living-room-furniture-lounge-chairs-ottomans/eames-lounge-chair-and-ottoman/5667.html?lang=en_US" target="_blank" rel="noopener noreferrer" title="Herman Miller Eames Lounge Chair and Ottoman">
                  → Starts at $7,495.00
                </a>{" "}
                <a href="https://store.hermanmiller.com/living-room-furniture-lounge-chairs-ottomans/eames-lounge-chair-and-ottoman/5667.html?lang=en_US" target="_blank" rel="noopener noreferrer" title="Herman Miller Eames Lounge Chair and Ottoman">
                  HermanMiller.com
                </a>
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="How Much Is Replacing Your Herman Miller Eames Chair Costing You?"
              tagline={<em> → Restore for a fraction of replacing an Eames Chair!</em>}
            />
            <div className="mt-4 flex flex-col items-center">
              <i className="fa fa-money text-5xl text-releather-orange" aria-hidden />
              <p className="mt-4 max-w-2xl text-center font-sans text-base leading-relaxed text-gray-800">
                <strong>Replacing</strong> high-end quality leather furniture like a Herman Miller chair can get costly over time. Instead you can save money by <strong>restoring</strong> your quality leather furniture for future generations to enjoy.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <div className="flex flex-col items-center">
              <i className="fa fa-signal text-5xl text-releather-orange" aria-hidden />
              <p className="mt-4 max-w-2xl text-center font-sans text-base leading-relaxed text-gray-800">
                A well made piece of furniture like a Eames Chair is an investment. In a recession, restoring your leather chair can be the most cost-effective way to save money as retail prices rise.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="How Long Do Herman Miller Chairs Last?"
              tagline={<em> → Built to last with proper leather care</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              How long do Herman Miller chairs last? That is a question that many people ask when they are looking for a new chair. There are many factors that go into how long a chair will last. The first factor is the quality of the materials that the chair is made of. Herman Miller chairs are well-known for their high-quality materials. The shells are made from molded wood, and the removable cushions are filled with Polyurethane foam. This combination makes for a sturdy, comfortable chair. The second factor is how often the chair is used. If a chair is only used occasionally, it will last longer than a chair that is used every day. The third factor is how well the chair is cared for. Proper care and maintenance can extend the life of any chair, including Herman Miller chairs. When all of these factors are considered, it is clear that Herman Miller chairs are built to last. Below are the most common leather care and maintenance problems associated with owning leather Eames chairs and their respective leather repair solutions.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {commonIssues.map((item, index) => (
                <figure key={index} className="flex flex-col items-center border-4 border-releather-orange p-4"><Image
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    width={300}
                    height={200}
                    loading="lazy"
                    className="rounded-[25px] object-cover"
                  />
                  <h5 className="mt-3 font-display text-lg font-normal text-releather-orange">
                    {item.h5}
                  </h5>
                  <h6 className="mt-1 font-sans text-base font-light text-gray-800">
                    {item.h6}
                  </h6>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Is A Herman Miller Eames Chair Worth Restoring?"
              tagline={<em> → Ideal for Leather Restoration</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              The Eames lounge chair and ottoman set retails at $7,495.00, making it a leather investment that customers are willing to restore after it starts showing wear and tear. We offer full <strong><a href="https://www.releather.com/services/leather-restoration" target="_blank" rel="noopener noreferrer" title="Leather Restoration">Leather Restoration</a></strong> and <strong><a href="https://www.releather.com/services/leather-upholstery" target="_blank" rel="noopener noreferrer" title="Partial and Full Leather Reupholstery">Partial and Full Leather Reupholstery</a></strong> repair service for the Eames lounge chair, ensuring that this iconic piece of furniture can be enjoyed for many years to come. With proper care and maintenance, the Eames lounge chair will continue to be a beloved part of any home.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Can Eames Chair Leather Be Restored?"
              tagline={<em> → Yes. Leather Restoration Service is Available</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              If you have an Eames chair and ottoman that you wish to restore, we can handle that for you. ReLeather customers understand that their chair is more than just a piece of furniture- it&apos;s an investment. They take into account the value of their chair and want to restore it back to life. That&apos;s why we offer a comprehensive restoration leather service that can address all kinds of surface problems, from color fading and discoloration to scuffs, scratches, light cracking, dryness, and oil stains. We have the knowledge and experience to restore your chair to its original condition. So if you&apos;re looking to restore the value of your Eames chair, please give us a call today. We would be happy to discuss our restoration process with you and answer any questions you may have.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection title="Restore Your Quality Eames Chair and Restore Its Value!" />
            <p className="max-w-3xl font-sans text-base leading-relaxed text-gray-800">
              <em> → We provided leather restoration work on this aged Eames chair. The leather seat and cushions had no noticeable tears, splits, or rips, but the look and feel needed a good refurbishing to get it back into shape. The leather surface was oily so it was treated for body oil build up and stain removal. This chair was in a Mission Viejo resident&apos;s home with only minor exposure to sunlight. However, the overall color was weathered and unevenly discolored. We restored a fresh new coat of dye along with a protective coating to add durability against surface fading, color transfer, color rubbing off, water spotting, and superficial scratches. The process of restoring an Eames chair requires taking apart the removable cushions and masking the wooden frame shells. The result was a fully refreshed looking Eames chair with renewed value and comfort.</em>
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Can Eames Chairs Be Reupholstered?"
              tagline={<em> → Yes. Leather Reupholstery Service is Available</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              You take pride in your Eames chair and ottoman, and why shouldn&apos;t you? They&apos;re comfortable, stylish and built to last. But after years of use, the upholstery may be looking a little worse for wear namely rips, tears, punctures, and deep cracks. That&apos;s where we come in. We offer leather reupholstery service and leather panel replacement. We&apos;ve got a wide range of top grain aniline leather that would match perfectly to your original Eames chair upholstery. And if you want something a little different, we have other leather textures, grades, colors, and finishes to create any look you want. So don&apos;t wait any longer, give us a call today and let us help you bring your Eames chair and ottoman back to its rightful place as the center of your home.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection title="Reupholster Your Quality Eames Chair and Restore Its Value!" />
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/g_north,l_text:montserrat_90_style_light:Before,co_rgb:fff,y_10/v1656022128/before-after/leather-eames-chair-ottoman-reupholstered-before-1.jpg"
                title="Reupholster Eames Chair and Ottoman with New Leather Before Picture"
                alt="Reupholster Eames Chair and Ottoman with New Leather Before Picture"
                width={450}
                height={300}
                loading="lazy"
                className="w-full rounded-[25px] object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/g_north,l_text:montserrat_90_style_light:After,co_rgb:fff,y_10/v1656022128/before-after/leather-eames-chair-ottoman-reupholstered-after-1.jpg"
                title="Reupholster Eames Chair and Ottoman with New Leather After Picture"
                alt="Reupholster Eames Chair and Ottoman with New Leather After Picture"
                width={450}
                height={300}
                loading="lazy"
                className="w-full rounded-[25px] object-cover"
              />
            </div>
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-gray-800">
              <em> → This Herman Miller Eames chair and ottoman set had seen better days. The leather upholstery was old, dry, and cracked. The brown color had also faded due to direct sunlight over the years in this client&apos;s Laguna Beach, CA home. The leather surface lost much of its smooth and supple feel. We recommended Full Leather Upholstery to replace all the worn leather with new matching leather of their choice. They selected a top grain <strong><a href="https://www.releather.com/leather-for-upholstery#Browse" target="_blank" rel="noopener noreferrer" title="semi-aniline black Italian leather">semi-aniline black Italian leather</a></strong>. The results turned out absolutely great. They restored value to their quality chair.</em>
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="How To Clean A Herman Miller Chair"
              tagline={
                <em>
                  {" "}
                  → <strong><a href="https://www.releather.com/leather-cleaner" target="_blank" rel="noopener noreferrer" title="ReLeather Leather Cleaner">ReLeather Leather Cleaner</a></strong>
                </em>
              }
            />
            <div className="overflow-hidden"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/c_crop,g_south,h_400,w_122/v1653615923/products/ReLeather-Best-Leather-Cleaner-For-Leather-Restoration.png"
                width={122}
                height={400}
                title="ReLeather Leather Cleaner Image"
                alt="ReLeather Leather Cleaner Image"
                loading="lazy"
                className="float-right ml-4 mb-4"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                When it comes to an Eames chair repair, there are some things you can do on your own to prolong the life of your investment. For example, regular leather cleaning and conditioning of the leather will help to keep it looking its best. You should also avoid placing the chair in direct sunlight, as this can cause the leather to fade. If you do notice any damage, such as discoloration, color fading, cracking, dryness, stains, gouges or scratches, it is best to request a <strong><a href="https://www.releather.com/estimate" target="_blank" rel="noopener noreferrer" title=" leather restoration quote"> leather restoration quote</a></strong> from us. While Eames lounge chairs are an expensive piece of furniture, they are built to last. With proper maintenance plan, it will give you years of enjoyment.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="How Do I Condition My Eames Lounge Chair?"
              tagline={
                <em>
                  {" "}
                  → <strong><a href="https://www.releather.com/leather-conditioner" target="_blank" rel="noopener noreferrer" title="ReLeather Leather Conditioner">ReLeather Leather Conditioner</a></strong>
                </em>
              }
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Even the best furniture needs a little TLC from time to time. Fortunately, it&apos;s easy to keep your Eames chair looking rich and feeling supple to the touch. Just follow these simple steps: using our ReLeather Leather Conditioner, apply the leather lotion to the entire leather upholstery with a dry terry towel and let dry. Feel free to apply the leather lotion to the wood panels. Once the leather is completely dry, buff the surfaces with a soft, lint-free cloth. By following these simple steps, you can ensure that your Eames chair will stay looking as good as new for years to come.
            </p>
            <div className="mt-6 flex justify-center">
              <a href="https://www.releather.com/leather-conditioner" target="_blank" rel="noopener noreferrer"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/v1643861241/logo/ReLeather-Leather-Conditioner.png"
                  width={150}
                  title="ReLeather Leather Conditioner Image"
                  alt="ReLeather Leather Conditioner Image"
                  loading="lazy"
                />
              </a>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Herman Miller Chair Repair Near Me"
              tagline={<em> → We are located in Orange County</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Wondering where to find a Eames chair repair near me? We have been conveniently located in Fullerton, CA in Orange County since 2008. We are the leather restoration professionals that can help you with your Eames chair. All it will take is filling out estimate request for us to get started on repairing its damages and restoring them back into shape! Schedule an appointment and bring your Herman Chair to our <strong><a href="https://www.releather.com/leather-restoration-orange-county" target="_blank" rel="noopener noreferrer" title="Leather Restoration shop in Orange County">Leather Restoration shop in Orange County</a></strong>.
            </p>
          </section>

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={eamesChairFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
