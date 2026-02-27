import Link from "next/link";
import Image from "next/image";

const CLOUDINARY_BASE = "https://res.cloudinary.com/releather-com/image/upload";

export const leatherCleaningFaqItems = [
  {
    question: "Q: Why seek professional leather cleaning?",
    answer: (
      <p>
        Owning fine leather is an investment. Professional care and maintenance
        preserves the lasting quality of your leather. Most do-it-yourself
        leather cleaners on the market that treat all leather the same can
        potentially do more harm than good. Our specialized and non-damaging
        leather cleaning services are designed to treat all types and grades of
        leather upholstery. Poor maintenance specifically the accumulation of
        soiling and body oils over time can be harder to remove the longer it
        is left untreated.
      </p>
    ),
  },
  {
    question: "Q: How often is professional cleaning recommended?",
    answer: (
      <>
        <p>
          A leather sofa is a beautiful addition to any home, and with proper
          care, it can last for many years. However, leather is a natural
          material, and it is susceptible to staining from body oils, dirt
          buildup and transfer dye accidents over time. For this reason, it is
          important to clean your leather sofa on a regular basis. The frequency
          of cleaning will depend on how often the sofa is used and the type of
          leather. However, as a general rule, it is best to get your leather
          sofa professionally cleaned at least once every six months to a year.
          This is usually adequate for most leather sofas and will help to
          remove any dirt or build-up and prevent the leather from having
          serious damage.
        </p>
        <p>
          <br />
          <br />
          We offer a yearly cleaning program which preserves your leather free
          of surface dirt, keeps it soft and supple.
        </p>
      </>
    ),
  },
  {
    question: "Q. What leather cleaning product do you recommend?",
    answer: (
      <>
        <p>
          Use our recommended wax free{" "}
          <Link
            href="/leather-conditioner"
            title="Best Leather Conditioner to Keep Leather Clean and Conditioned"
          >
            ReLeather Leather Conditioner
          </Link>
          .
        </p>
        <p>
          <br />
          <br />
          Use of unapproved solutions with excessive polishes or chemicals may
          damage the leather upholstery causing cracks and changes in color.
        </p>
      </>
    ),
  },
  {
    question: "Q. What Type of Leather Can Be Cleaned?",
    answer: (
      <>
        <p>
          Both protected and unprotected aniline leather are suitable. However,
          cleaning some unprotected leathers such as{" "}
          <a
            href={`${CLOUDINARY_BASE}/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg`}
            title="Leather Restoration recommended for Nubuck Leather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nubuck
          </a>{" "}
          can be challenging, and regrettably, we do not provide cleaning
          services specifically for this type of leather.
        </p>
        <p>
          <a
            href={`${CLOUDINARY_BASE}/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg`}
            title="Leather Restoration recommended for Pigmented Leather"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image unoptimized
              src={`${CLOUDINARY_BASE}/c_crop,h_820/w_115,h_100,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg`}
              alt="Type of Leather - Pigmented Leather - for Leather Restoration"
              title="Type of Leather - Pigmented Leather - for Leather Restoration"
              width={115}
              height={100}
              loading="lazy"
              className="my-1 inline"
            />
          </a>
          <a
            href={`${CLOUDINARY_BASE}/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Aniline,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg`}
            title="Leather Restoration recommended for Aniline Leather"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image unoptimized
              src={`${CLOUDINARY_BASE}/c_crop,h_820/w_115,h_100,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Aniline,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg`}
              alt="Type of Leather - Aniline Leather - for Leather Restoration"
              title="Type of Leather - Aniline Leather - for Leather Restoration"
              width={115}
              height={100}
              loading="lazy"
              className="my-1 inline"
            />
          </a>
          <a
            href={`${CLOUDINARY_BASE}/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg`}
            title="Leather Restoration recommended for Semi-Aniline Leather"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image unoptimized
              src={`${CLOUDINARY_BASE}/c_crop,h_820/w_115,h_100,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg`}
              alt="Type of Leather - Semi-Aniline Leather - for Leather Restoration"
              title="Type of Leather - Semi-Aniline Leather - for Leather Restoration"
              width={115}
              height={100}
              loading="lazy"
              className="my-1 inline"
            />
          </a>
        </p>
      </>
    ),
  },
  {
    question:
      "Q. When should I consider Leather Restoration over Leather Cleaning Service?",
    answer: (
      <p>
        For deeply stained, heavily discolored, or excessively oiled leather
        upholstery, we recommend inquiring about our{" "}
        <Link
          href="/services/leather-restoration"
          title="Leather Restoration Service"
        >
          Leather Restoration Services
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Q. Do you spot clean Nubuck Leather?",
    answer: (
      <>
        <p>
          Nubuck leather is very absorbant and in most cases deep stains cannot
          be effectively removed. Unfortunately we do not offer specialized
          cleaning services for this type of leather.
        </p>
        <p>
          <a
            href={`${CLOUDINARY_BASE}/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg`}
            title="Leather Restoration recommended for Nubuck Leather"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image unoptimized
              src={`${CLOUDINARY_BASE}/c_crop,h_820/w_115,h_100,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg`}
              alt="Type of Leather - Nubuck Leather - for Leather Restoration"
              title="Type of Leather - Nubuck Leather - for Leather Restoration"
              width={115}
              height={100}
              loading="lazy"
              className="my-1 inline"
            />
          </a>
        </p>
      </>
    ),
  },
  {
    question:
      "Q: Can leather cleaning remove deeply ingrained dirt from my sofa?",
    answer: (
      <p>
        Leather Cleaning and Conditioning effectively removes surface dirt, but
        deeply ingrained soiling, especially in textured or grainy pebbled
        leather often cannot be lifted with cleaning alone. In such cases, our{" "}
        <Link
          href="/services/leather-restoration"
          title="Learn more about our Leather Restoration service"
        >
          Leather Restoration service
        </Link>{" "}
        is required to recolor and refinish the leather for a uniform
        appearance.
      </p>
    ),
  },
];
