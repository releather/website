import Link from "next/link";

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/releather-com/image/upload";

export const leatherDyeingFaqItems = [
  {
    question: "Q: How much dose it cost to redye my leather?",
    answer: (
      <p>
        Cost varies based on size, condition, and upholstery. Some colors are
        more labor intensive and we factor this into the cost.
      </p>
    ),
  },
  {
    question: "Q: How Do I Keep My Leather Clean After Color Change?",
    answer: (
      <p>
        After dyeing or color change service, we recommend to care for your
        leather furniture or goods by gently applying our{" "}
        <Link
          href="/leather-conditioner"
          title="Best Leather Conditioner to Keep Leather Clean and Conditioned"
        >
          ReLeather Leather Conditioner
        </Link>{" "}
        every 3 months to keep them moisturized and protected.
      </p>
    ),
  },
  {
    question: "Q. How Long Does Leather Dyeing Take?",
    answer: (
      <p>
        Typically takes around 2 weeks to complete, although the duration may
        vary based on the scale of the job.
      </p>
    ),
  },
  {
    question: "Q. What Type of Leather Can Be Dyed?",
    answer: (
      <>
        <p>
          Both protected and unprotected aniline leather are suitable. However,
          aniline leather treated with artisan waxes and oils are not
          recommended.
        </p>
        <p>
          <a
            href={`${CLOUDINARY_BASE}/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg`}
            title="Leather Restoration recommended for Pigmented Leather"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
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
            <img
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
            <img
              src={`${CLOUDINARY_BASE}/c_crop,h_820/w_115,h_100,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg`}
              alt="Type of Leather - Semi-Aniline Leather - for Leather Restoration"
              title="Type of Leather - Semi-Aniline Leather - for Leather Restoration"
              width={115}
              height={100}
              loading="lazy"
              className="my-1 inline"
            />
          </a>
          <a
            href={`${CLOUDINARY_BASE}/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg`}
            title="Leather Restoration recommended for Nubuck Leather"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
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
    question: "Q. What Type of Sealant Finishes Are Available?",
    answer: (
      <>
        <p>
          Choose from a natural, matte, or gloss sealant, designed to maintain
          the leather&apos;s natural look.
        </p>
        <p>
          <a
            href={`${CLOUDINARY_BASE}/c_scale,w_300/l_,l_text:montserrat_30_style_light:Natural%20Finish,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-natural-finish.jpg`}
            title="Leather Couch Restoration Natural Finish Type Applied"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${CLOUDINARY_BASE}/c_crop,h_820/w_104,h_90,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Natural,co_rgb:ffffff,y_10/v1653279850/before-after/leather-dyeing-natural-finish.jpg`}
              alt="Leather Couch Restoration Natural Finish Type Applied"
              title="Leather Couch Restoration Natural Finish Type Applied"
              width={104}
              height={90}
              loading="lazy"
              className="my-1 inline"
            />
          </a>
          <a
            href={`${CLOUDINARY_BASE}/c_scale,w_300/l_,l_text:montserrat_30_style_light:Glossy%20Finish,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-glossy-finish.jpg`}
            title="Leather Couch Restoration Glossy Finish Type Applied"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${CLOUDINARY_BASE}/c_crop,h_820/w_104,h_90,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Glossy,co_rgb:ffffff,y_10/v1653279850/before-after/leather-dyeing-glossy-finish.jpg`}
              alt="Leather Couch Restoration Glossy Finish Type Applied"
              title="Leather Couch Restoration Glossy Finish Type Applied"
              width={104}
              height={90}
              loading="lazy"
              className="my-1 inline"
            />
          </a>
          <a
            href={`${CLOUDINARY_BASE}/c_scale,w_300/l_,l_text:montserrat_30_style_light:Matte%20Finish,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-matte-finish.jpg`}
            title="Leather Couch Restoration Matte Finish Type Applied"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${CLOUDINARY_BASE}/c_crop,h_820/w_104,h_90,c_scale/r_10:40:25/b_rgb:23262f/g_center,l_text:montserrat_16_style_light:Matte,co_rgb:ffffff,y_10/v1653279850/before-after/leather-dyeing-matte-finish.jpg`}
              alt="Leather Couch Restoration Matte Finish Type Applied"
              title="Leather Couch Restoration Matte Finish Type Applied"
              width={104}
              height={90}
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
      "Q: Can you redye old leather to a darker or lighter color?",
    answer: (
      <p>
        We can change the color of your leather to be lighter or darker. We
        generally recommend choosing a slightly lighter or darker tone for best
        results. To maintain the leather&apos;s durability and suppleness, we
        recommend avoiding colors at the opposite end of the spectrum.
      </p>
    ),
  },
];
