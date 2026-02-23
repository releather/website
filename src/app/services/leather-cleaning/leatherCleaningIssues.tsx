import Image from "next/image";
const C = "https://res.cloudinary.com/releather-com/image/upload";

export const leatherCleaningIssuesHeading = "5 Common Issues Cleaning Leather Sofa";

export const leatherCleaningIssuesItems = [
  {
    title: "Ingrained Dirt",
    body: (
      <p>
        Common dirt can be removed with a thorough agitation on the leather
        surface. However, ingrained soiling in the grain and pores of the
        leather can be harder to clean. This service may have to be
        accompanied by <strong> retouching and color refreshing</strong>. But
        no matter how bad the dirt, our team of experts can help get your
        leather to its former glory. Please refer to the following examples:
      </p>
    ),
    media: (
      <a
        href={`${C}/g_center,l_text:montserrat_50_style_light:Ingrained%20Dirt,co_rgb:ffffff/v1653252682/before-after/dirty-leather-grain.jpg`}
        title="Leather Cleaning - Ingrained Leather Soiling"
        aria-label="Leather Cleaning - Ingrained Leather Soiling"
      ><Image
          src={`${C}/c_scale,w_200/g_center,l_text:montserrat_20_style_light:Ingrained%20Dirt,co_rgb:ffffff/v1653252682/before-after/dirty-leather-grain.jpg`}
          alt="Leather Cleaning - Ingrained Leather Soiling"
          title="Leather Cleaning - Ingrained Leather Soiling"
          width={200}
          height={200}
          loading="lazy"
          className="rounded-[25px] object-cover"
        />
      </a>
    ),
  },
  {
    title: "Body Oils",
    body: (
      <p>
        Hair and hand oils often appear on the head cushions from hand oils
        penetrating the leather upholstery as dark spots. Leathers with
        protective finishes are better suited for this type of wear because the
        build up stays on the surface of the leather furniture and it can
        easily be wiped off. Treatment can remove and prevent undue wear from .
      </p>
    ),
  },
  {
    title: "Ink Stains",
    body: (
      <p>
        If your leather couch has been the victim of an ink stain, the type of
        leather will determine the best course of treatment for an ink stain.
        Pigmented and other protected leathers are uniform in color and can be
        recolored to conceal any direct ink marks. However, pure aniline and
        other naked leathers are more difficult to treat because the ink
        absorbs into the pores of the leather.
      </p>
    ),
    media: (
      <div className="flex justify-center"><Image
          src={`${C}/g_center,l_text:montserrat_50_style_light:Ink%20Mark,co_rgb:ffffff/v1655096099/leather/ink-mark-on-leather-sofa-cushion.jpg`}
          alt="Pen Ink mark on leather sofa couch cushion"
          title="Pen Ink mark on leather sofa couch cushion"
          width={300}
          height={300}
          loading="lazy"
          className="rounded-[25px] object-cover"
        />
      </div>
    ),
  },
  {
    title: "Dye Transfer",
    body: (
      <p>
        Dye transfer can be an issue with some natural naked leathers. The dye
        from blue jeans can transfer dye onto porous leather surfaces such as
        pure aniline leather. The process called dye transfer happens when a
        piece of clothing rubs against a sofa upholstered in natural leather.
        The colors in the dyes bleed from one material to another, causing a
        discoloration.
      </p>
    ),
  },
  {
    title: "Pet Odors",
    body: (
      <p>
        If you&apos;re a pet owner, chances are you&apos;re all too familiar
        with the occasional pet odor. Pet odors can be tough to get rid of.
        Unfortunately, our pet urine removal treatment services are not
        effective treating or removing cat urine. However, a thorough cleaning
        and conditioning of your leather furniture set may help to reduce or
        eliminate most common odor sources.
      </p>
    ),
  },
];
