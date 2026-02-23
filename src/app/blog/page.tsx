import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";

const title = "Blog | ReLeather";
const description =
  "Leather restoration, repair, and care tips from ReLeather. Desk restoration, steering wheel repair, sofa repair, briefcase repair, and more.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const blogPosts = [
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/c_pad,b_black,w_600,h_500,y_80,x_60,g_west/l_image:upload:background:releather-watermark/fl_relative,w_0.25/o_100/fl_layer_apply,g_north_east,x_0.06,y_0.09/g_east,l_text:montserrat_28_style_light:Leather%20Desk%20Restoration,co_rgb:f8991d,y_-220/blog/leather-restoration-desk-technician.png",
    imageAlt: "Leather desk restoration in Orange County",
    href: "/leather-desk-restoration",
    title: "Restoring a Leather Top Desk",
    excerpt: "Explore leather desk restoration in Orange County, CA, covering faded, scratched, or stained desks. Learn the step-by-step process, types of leather, common wear issues, and see before-and-after results restoring color, finish, and protective coating.",
    continueTitle: "Blog about Restoring a Leather Top Desk Restoration in Orange County",
    continueAlt: "Blog about Leather Desk Restoration in Orange County",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/blog/leather-restoration-steering-wheel.png",
    imageAlt: "Leather car steering wheel restoration in Orange County",
    href: "/leather-car-steering-wheel-restoration-in-orange-county",
    title: "Leather Car Steering Wheel Restoration in Orange County",
    excerpt: "Professional leather steering wheel restoration in Orange County. ReLeather repairs cracks, fading, wear, and oils on all car brands using expert cleaning, color matching, and protective finishing for a smooth, even, and long-lasting result.",
    continueTitle: "Blog about Leather Car Steering Wheel Restoration in Orange County",
    continueAlt: "Blog about Leather Car Steering Wheel Restoration in Orange County",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/blog/Restoration-Hardware-Leather-Sofa-Repair-Blog-ReLeather.jpg",
    imageAlt: "Restoration Hardware leather sofa repair",
    href: "/restoration-hardware-leather-sofa-repair",
    title: "Restoration Hardware Leather Sofa Repair",
    excerpt: "Discover expert services for restoring Restoration Hardware leather sofas. Learn about professional cleaning, conditioning, color repair, and cushion restoration to fix discoloration, fading, and sagging while preserving quality and comfort.",
    continueTitle: "Blog about Restoration Hardware Leather Sofa Repair",
    continueAlt: "Blog about Restoration Hardware Leather Sofa Repair",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/blog/Tumi-Briefcase-Restoration.jpg",
    imageAlt: "Tumi briefcase leather repair",
    href: "/tumi-briefcase-repair",
    title: "Tumi Briefcase Leather Repair",
    excerpt: "Expert Tumi briefcase restoration including deep cleaning, color renewal, scratch repair, and leather conditioning. Restore the look, structure, and durability of your travel essentials with professional leather care.",
    continueTitle: "Blog about Tumi Briefcase Leather Repair",
    continueAlt: "Blog about Tumi Briefcase Leather Repair",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/blog/leather-restoration-purse-releather-blog-image.png",
    imageAlt: "Designer purse restoration",
    href: "/designer-purse-restoration",
    title: "Designer Purse Restoration",
    excerpt: "Professional restoration for designer purses and luxury handbags. Repair faded color, worn leather, scratches, and finish damage while preserving structure and value with expert leather refinishing techniques.",
    continueTitle: "Blog about Designer Purse Leather Restoration",
    continueAlt: "Blog about Designer Purse Leather Restoration",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/blog/blog-replace-leather-seat-cushions.jpg",
    imageAlt: "Replacement cushions for leather couch",
    href: "/replacement-cushions-for-leather-couch",
    title: "Replacement Cushions for Leather Couch",
    excerpt: "Learn how replacement cushions can restore comfort and extend the lifespan of your leather couch. Discover options for foam support, seat structure, and professional leather reupholstery solutions.",
    continueTitle: "Blog about Replacement Cushions for Leather Couch",
    continueAlt: "Blog about Replacement Cushions for Leather Couch",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/blog/blog-is-it-worth-restoring-eames-chair-repair.jpg",
    imageAlt: "Is an Eames chair worth restoring?",
    href: "/eames-chair-repair",
    title: "Is An Eames Chair Worth Restoring?",
    excerpt: "Explore whether restoring an Eames chair makes sense. Learn about leather repair, structural restoration, cost considerations, and preserving the value of iconic mid-century furniture.",
    continueTitle: "Blog about Is An Eames Chair Worth Restoring?",
    continueAlt: "Blog about Is An Eames Chair Worth Restoring?",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/blog/blog-different-types-of-leather.jpg",
    imageAlt: "Different types of leather",
    href: "/types-of-leather",
    title: "Different Types of Leather",
    excerpt: "Learn about common leather types including aniline, semi-aniline, and pigmented leather. Understand their characteristics, durability, maintenance needs, and how they compare for furniture use.",
    continueTitle: "Blog about Different Types of Leather",
    continueAlt: "Blog about Different Types of Leather",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/v1771784004/blog/blog-clean-aniline-leather.png",
    imageAlt: "What is aniline leather? Cleaning and restoration",
    href: "/aniline-leather-cleaning",
    title: "What is Aniline Leather?",
    excerpt: "Discover how to clean and restore aniline leather furniture. Learn proper care methods, maintenance tips, and when professional leather cleaning and refinishing may be needed.",
    continueTitle: "Blog about Aniline Leather Cleaning and Restoration",
    continueAlt: "Blog about Aniline Leather Cleaning and Restoration",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/v1771784012/blog/what-is-bonded-leather.png",
    imageAlt: "What is bonded leather?",
    href: "/what-is-bonded-leather",
    title: "What is Bonded Leather?",
    excerpt: "Understand the difference between bonded leather and genuine leather. Learn about durability, appearance, maintenance, and repair options for bonded leather furniture.",
    continueTitle: "Blog about What is Bonded Leather",
    continueAlt: "Blog about What is Bonded Leather",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/v1771784006/blog/leather-repair-vs-replace-infographic.png",
    imageAlt: "3 reasons to repair over replace leather",
    href: "/blog/3-reasons-repair-vs-replace-leather",
    title: "3 Reasons to Repair over Replace Leather",
    excerpt: "Discover why repairing leather furniture can save money and preserve quality. Learn three powerful reasons to restore instead of replace worn or damaged leather.",
    continueTitle: "Blog about 3 Reasons to Repair over Replace Leather",
    continueAlt: "Blog about 3 Reasons to Repair over Replace Leather",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/v1771784007/blog/ReLeather-5-Common-Leather-Issues-Cover.png",
    imageAlt: "5 common issues with leather furniture",
    href: "/blog/5-leather-issues-of-leather-furniture",
    title: "5 Common Issues with Leather Furniture",
    excerpt: "Learn about the most common leather furniture problems including cracking, fading, peeling, discoloration, and wear. Discover how professional leather repair addresses these issues.",
    continueTitle: "Blog about 5 Common Issues with Leather Furniture",
    continueAlt: "Blog about 5 Common Issues with Leather Furniture",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/v1771784010/blog/ReLeather-What-Is-Aniline-Pigmented-Leather.png",
    imageAlt: "What is aniline leather and pigmented leather?",
    href: "/blog/what-is-aniline-leather-and-pigmented-leather",
    title: "What is Aniline Leather and Pigmented Leather?",
    excerpt: "Learn the difference between aniline and pigmented leather used in high-end furniture. Understand their benefits, drawbacks, durability, and maintenance requirements.",
    continueTitle: "Blog about Aniline and Pigmented Leather",
    continueAlt: "Blog about Aniline and Pigmented Leather",
  },
  {
    image: "https://res.cloudinary.com/releather-com/image/upload/v1771784009/blog/ReLeather-How-to-Safely-Clean-your-Leather-Sofa.png",
    imageAlt: "How to safely clean your leather sofa",
    href: "/blog/how-to-safely-clean-your-leather-sofa",
    title: "How to Safely Clean Your Leather Sofa",
    excerpt: "Learn safe cleaning and conditioning methods for leather sofas. Regular maintenance helps extend the lifespan of your furniture while preserving softness, color, and protective finish.",
    continueTitle: "Blog about How to Safely Clean Your Leather Sofa",
    continueAlt: "Blog about How to Safely Clean Your Leather Sofa",
  },
];

export default function BlogPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Blog"
            subtitle={
              <>
                <strong>Leather restoration &amp; care</strong>
                <br />
                <em>Tips, guides, and before &amp; after.</em>
              </>
            }
          />

          <section
            id="blog-list"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="blog-list-heading"
          >
            <h2
              id="blog-list-heading"
              className="sr-only"
            >
              Blog posts
            </h2>
            <ul className="flex flex-col gap-8" role="list">
              {blogPosts.map((post) => (
                <li key={post.href}>
                  <article
                    className="grid grid-cols-1 overflow-hidden border-4 border-black bg-white shadow-[6px_6px_0_0_#f8991d] lg:grid-cols-[1.2fr_1fr]"
                    aria-labelledby={`blog-title-${post.href.replace(/\//g, "-")}`}
                  >
                    <div className="relative min-h-[200px] bg-gray-200 sm:min-h-[260px]">
                      <Link href={post.href} className="block h-full focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          title={post.imageAlt}
                          width={600}
                          height={400}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-col justify-center border-t-4 border-black p-5 sm:border-t-0 sm:border-l-4 sm:border-t-0 sm:p-6 lg:p-8">
                      <h2 id={`blog-title-${post.href.replace(/\//g, "-")}`} className="font-display text-xl font-normal tracking-tight text-black sm:text-2xl">
                        <Link
                          href={post.href}
                          className="text-black underline decoration-releather-orange underline-offset-2 hover:decoration-black focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-3 font-sans text-gray-800">
                        {post.excerpt}
                      </p>
                      <p className="mt-4">
                        <Link
                          href={post.href}
                          title={post.continueTitle}
                          aria-label={post.continueAlt}
                          className="inline-block border-4 border-black bg-releather-orange px-4 py-2 font-sans font-bold text-black shadow-[4px_4px_0_0_#000] transition hover:bg-black hover:text-releather-orange"
                        >
                          Continue Reading
                        </Link>
                      </p>
                    </div>
                  </article>
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
