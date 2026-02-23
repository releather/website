import Link from "next/link";
import Image from "next/image";
import BackToTop from "@/components/BackToTop";

const PHONE = "949-529-4727";
const EMAIL = "info@releather.com";
const VAN_IMG = "https://res.cloudinary.com/releather-com/image/upload/f_webp/f_auto/v1654055821/icons/ReLeather-Delivery-Van.png";
const FOOTER_BG =
  "https://res.cloudinary.com/releather-com/image/upload/f_auto/f_webp/v1654065902/background/background-leather-gradient.png";
const CONDITIONER_IMG =
  "https://res.cloudinary.com/releather-com/image/upload/f_webp/f_auto/v1672063547/products/Leather-Conditioner-Menu-Image.png";

const socialLinks = [
  { href: "https://www.facebook.com/ReLeather", icon: "fab fa-facebook-f", label: "Facebook" },
  { href: "https://www.twitter.com/ReLeather", icon: "fab fa-twitter", label: "Twitter" },
  { href: "https://www.instagram.com/ReLeather", icon: "fab fa-instagram", label: "Instagram" },
  { href: "https://www.yelp.com/biz/releather-mission-viejo", icon: "fab fa-yelp", label: "Yelp" },
];

const paymentIcons = [
  "fab fa-cc-paypal",
  "fab fa-cc-visa",
  "fab fa-cc-mastercard",
  "fab fa-cc-amex",
  "fab fa-cc-discover",
];

const blogLinks = [
  { label: "Aniline Leather?", href: "/aniline-leather-cleaning" },
  { label: "Types of Leather?", href: "/types-of-leather" },
  { label: "Bonded Leather?", href: "/what-is-bonded-leather" },
  { label: "Browse blog posts", href: "/blog" },
];

const credentials = [
  { label: "IICRC", href: "https://www.iicrc.org/" },
  { label: "DCA", href: "https://search.dca.ca.gov/details/5710/A/168021/85b5a2bbf334efb380ade787a14a228a" },
  { label: "BBB A+", href: "https://www.bbb.org/us/ca/fullerton/profile/leather-goods-repair/releather-1126-100112090" },
];

const legalLinks = [
  { label: "Terms of Service", href: "https://drive.google.com/file/d/1Bg1PHAwUCwaCnGSc2EsOPbCCEG6vLkjY/view?usp=drive_link" },
  { label: "Privacy Policy", href: "https://drive.google.com/file/d/1F9haPR10GrXhnOd4054qWGcKnRpswpWj/view?usp=drive_link" },
];

export default function Footer() {
  return (
    <footer
      id="g-footer"
      className="bg-black text-white"
      style={{
        backgroundImage: `url(${FOOTER_BG})`,
        backgroundRepeat: "repeat-x",
      }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-6 sm:px-6 sm:pt-10 sm:pb-8 lg:px-8 lg:pt-12 lg:pb-10">
        <div className="grid gap-8 pb-8 lg:grid-cols-4 lg:gap-10 lg:pb-10">
          {/* Column 1: Social, Blog button, Blog links with file icon */}
          <div className="flex flex-col gap-5 border-b border-gray-500 pb-6 lg:border-b-0 lg:border-r lg:border-gray-500 lg:pr-8 lg:pb-0">
            <div>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-white">
                Social Media
              </h3>
              <ul className="mt-2 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-300 transition hover:text-releather-orange"
                      aria-label={link.label}
                    >
                      <i className={link.icon} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-white">
                Blog
              </h3>
              <ul className="mt-2 space-y-1.5">
                {blogLinks.map((link) => (
                  <li key={link.href} className="flex items-center gap-2">
                    <i className="fas fa-file-alt shrink-0 text-xs text-releather-orange" aria-hidden />
                    <Link
                      href={link.href}
                      className="font-sans text-sm font-medium text-gray-300 transition hover:text-releather-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Safe & Secure, then Payments */}
          <div className="flex flex-col gap-5 border-b border-gray-500 pb-6 lg:border-b-0 lg:border-r lg:border-gray-500 lg:pr-8 lg:pb-0">
            <div>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-white">
                Safe & Secure
              </h3>
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                {credentials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm font-medium text-gray-300 transition hover:text-releather-orange"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-white">
                Payments
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {paymentIcons.map((icon) => (
                  <li key={icon}>
                    <i className={`${icon} text-base text-gray-400`} aria-hidden />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-white">
                Legal
              </h3>
              <ul className="mt-2 space-y-1">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm font-medium text-gray-300 transition hover:text-releather-orange"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Leather Conditioner product */}
          <div className="flex flex-col items-center border-b border-gray-500 pb-6 text-center lg:border-b-0 lg:border-r lg:border-gray-500 lg:pr-8 lg:pb-0">
            <div className="font-sans text-sm font-semibold uppercase tracking-wide text-white">
              Leather Conditioner
            </div>
            <span className="mt-1 font-sans text-sm italic text-releather-orange">
              Restore the beauty of your leather!
            </span>
            <Image
              src={CONDITIONER_IMG}
              alt="Leather Conditioner"
              title="Leather Conditioner"
              width={65}
              height={124}
              loading="lazy"
              className="mt-3 h-[124px] w-[65px] object-contain"
            />
            <Link
              href="/leather-conditioner"
              className="mt-4 inline-block rounded border-2 border-releather-orange bg-releather-orange px-5 py-2.5 font-sans text-sm font-medium text-black transition hover:bg-black hover:text-releather-orange"
            >
              Buy Now
            </Link>
          </div>

          {/* Column 4: Company information with schema */}
          <div
            className="g-contact flex flex-col space-y-3 font-sans text-sm"
            itemScope
            itemType="http://schema.org/LocalBusiness"
          >
            <div className="g-contact-item flex items-start gap-2">
              <span className="fa fa-building fa-fw mt-0.5 shrink-0 text-releather-orange" aria-hidden />
              <div>
                <div itemProp="name">
                  <Link href="/about-us" className="font-medium text-white hover:text-releather-orange">
                    ReLeather LLC
                  </Link>
                </div>
                <div itemProp="url">
                  <a href="https://www.releather.com/" className="font-medium text-releather-orange hover:underline">
                    https://www.releather.com
                  </a>
                </div>
              </div>
            </div>
            <div
              className="g-contact-item flex items-start gap-2"
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <span className="fa fa-map-marker fa-fw mt-0.5 shrink-0 text-releather-orange" aria-hidden />
              <div className="text-gray-300">
                <div itemProp="streetAddress">751 S State College Blvd Unit 38</div>
                <div>
                  <span itemProp="addressLocality">Fullerton</span>, <span itemProp="addressRegion">CA</span> <span itemProp="postalCode">92831</span>
                </div>
              </div>
            </div>
            <div className="g-contact-item flex items-start gap-2">
              <span className="fa fa-phone fa-fw mt-0.5 shrink-0 text-releather-orange" aria-hidden />
              <div>
                <a
                  href={`tel:${PHONE.replace(/-/g, "")}`}
                  className="font-medium text-gray-300 transition hover:text-releather-orange"
                  itemProp="telephone"
                >
                  (949) 529-4727
                </a>
              </div>
            </div>
            <div className="g-contact-item flex items-start gap-2">
              <span className="fa fa-envelope fa-fw mt-0.5 shrink-0 text-releather-orange" aria-hidden />
              <div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-medium text-gray-300 transition hover:text-releather-orange"
                  itemProp="email"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="g-contact-item flex items-start gap-2">
              <span className="fa fa-truck fa-fw mt-0.5 shrink-0 text-releather-orange" aria-hidden />
              <div>
                <Image
                  src={VAN_IMG}
                  alt="Leather Furniture Delivery Van"
                  width={180}
                  height={70}
                  loading="lazy"
                  className="h-auto w-[180px] max-w-full object-contain"
                />
              </div>
            </div>
            <div itemProp="paymentAccepted" className="hidden">
              cash, check, credit card, invoice, paypal
            </div>
            <div itemProp="geo" itemScope itemType="http://schema.org/GeoCoordinates" className="hidden">
              <meta itemProp="latitude" content="33.617073" />
              <meta itemProp="longitude" content="-117.680747" />
            </div>
          </div>
        </div>

        <div className="pt-6 text-center font-sans text-sm font-medium text-gray-500">
          <p>© {new Date().getFullYear()} ReLeather LLC. All rights reserved.</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
