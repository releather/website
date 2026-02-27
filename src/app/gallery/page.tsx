"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";

const galleryItems = [
  {
    serviceType: "Leather Restoration",
    furniture: "Sofa",
    color: "Black",
    leatherType: "Pigmented",
    problem: "Faded Light Surface Cracking Scuffing",
    location: "Laguna Beach",
    description:
      "Laguna Beach sectional sofa restoration focusing on black pigmented leather. Addressed fading, surface cracking, and scuffing, improving seating durability and appearance.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-black-pigmented-faded-light-surface-cracking-scuffing-seating-sectional-laguna-beach-before.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-black-pigmented-faded-light-surface-cracking-scuffing-seating-sectional-laguna-beach-after.png",
  },
  {
    serviceType: "Leather Restoration",
    furniture: "Chair",
    color: "Blue",
    leatherType: "Pigmented",
    problem: "Normal Fading Wear",
    location: "Orange County",
    description:
      "Blue Hancock Moore chair leather showed normal fading and wear. The restoration improved overall color, texture, and durability, revitalizing the chair while preserving its signature style for Orange County interiors.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-blue-pigmented-normal-fading-wear-hancock-moore-orange-county-before.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-blue-pigmented-normal-fading-wear-hancock-moore-orange-county-after.png",
  },
  {
    serviceType: "Leather Restoration",
    furniture: "Sofa",
    color: "Blue",
    leatherType: "Pigmented",
    problem: "Faded Leather",
    location: "Tustin",
    description:
      "Restoration of a blue pigmented sofa with faded leather condition performed at Leather Factory in Tustin. The job involved thorough cleaning and color rejuvenation to restore the original vibrancy and texture of the leather surface.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-blue-pigmented-faded-leather-factory-tustin-before.jpg",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-blue-pigmented-faded-leather-factory-tustin-after.jpg",
  },
  {
    serviceType: "Leather Restoration",
    furniture: "Chair",
    color: "Brown",
    leatherType: "Semi Aniline",
    problem: "Faded Two Tone Color",
    location: "Irvine",
    description:
      "A semi-aniline brown chair in a game room club style from Irvine had its two-tone color restored after fading. This restoration brought back both its elegance and richness.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-brown-semi-aniline-faded-two-tone-color-game-room-club-chair-style-irvine-before.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-brown-semi-aniline-faded-two-tone-color-game-room-club-chair-style-irvine-after.png",
  },
  {
    serviceType: "Leather Restoration",
    furniture: "Chair",
    color: "Brown",
    leatherType: "Aniline",
    problem: "Stained Faded Antique Dining Chair",
    location: "San Diego",
    description:
      "A brown aniline antique dining chair in San Diego with stained and faded leather was carefully restored to enhance its appearance and preserve the finish.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-brown-aniline-stained-faded-antique-dining-chair-san-diego-before.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-brown-aniline-stained-faded-antique-dining-chair-san-diego-after.png",
  },
  {
    serviceType: "Leather Restoration",
    furniture: "Car",
    color: "Black",
    leatherType: "Pigmented",
    problem: "—",
    location: "—",
    description:
      "Restoration of two black leather bucket seats in a car, restoring the seat surface for a clean, refreshed appearance. Project involved full leather reconditioning to revive dark interior tones.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-bucket-seat-restoration-black-before.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-bucket-seat-restoration-black-after.png",
  },
  {
    serviceType: "Leather Restoration",
    furniture: "Car",
    color: "Black",
    leatherType: "Pigmented",
    problem: "Soiled Oily",
    location: "Orange County",
    description:
      "The Porsche classic driver's seats were heavily soiled and oily in black pigmented leather. The restoration included thorough cleaning, conditioning, and color correction, returning the seats to a clean, polished, and durable condition.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-black-pigmented-soiled-oily-classic-seats-driver-porsche-orange-county-before.jpg",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-black-pigmented-soiled-oily-classic-seats-driver-porsche-orange-county-after.jpg",
  },
  {
    serviceType: "Leather Restoration",
    furniture: "Car",
    color: "Beige",
    leatherType: "Pigmented",
    problem: "Faded-Stained",
    location: "Orange County, CA",
    description:
      "Detailed restoration of a beige leather car seat from a BMW 328i, focusing on resurfacing and cleaning to recover original texture and color.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-seat-restoration-beige-bmw-328i-before.jpg",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-seat-restoration-beige-bmw-328i-after.jpg",
  },
  {
    serviceType: "Leather Restoration",
    furniture: "Car",
    color: "Beige",
    leatherType: "Pigmented",
    problem: "Wear Side",
    location: "Orange County",
    description:
      "The front seat panel of a Land Rover was restored to address wear and side damage in beige pigmented leather. The repair included cleaning, filling, and color restoration, achieving a consistent finish and smooth, durable surface.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-beige-pigmented-wear-side-front-seat-panel-restored-land-rover-before.jpg",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-beige-pigmented-wear-side-front-seat-panel-restored-land-rover-after.jpg",
  },
  {
    serviceType: "Leather Dyeing",
    furniture: "Sofa",
    color: "Blue",
    leatherType: "Pigmented",
    problem: "Change Color To Green",
    location: "Laguna Beach",
    description:
      "This blue pigmented tufted leather sofa in Laguna Beach underwent a dye change to a rich green tone. The project included careful preparation and application to maintain the detail of the tufted styling while altering the entire aesthetic.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-sofa-blue-pigmented-change-color-to-green-tufted-style-laguna-beach-before.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-sofa-blue-pigmented-change-color-to-green-tufted-style-laguna-beach-after.jpg",
  },
  {
    serviceType: "Leather Dyeing",
    furniture: "Sofa",
    color: "Brown",
    leatherType: "Aniline",
    problem: "Change Color To Dark Brown",
    location: "",
    description: "",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-sofa-brown-aniline-change-color-to-dark-brown-sectional-thomasville-villa-park-before.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-sofa-brown-aniline-change-color-to-dark-brown-sectional-thomasville-villa-park-after.png",
  },
  {
    serviceType: "Leather Dyeing",
    furniture: "Sofa",
    color: "Brown",
    leatherType: "Pigmented",
    problem: "Change Color To Expresso",
    location: "Laguna Hills",
    description:
      "This project involved dyeing a brown pigmented sleeper sofa by American Leather in Laguna Hills, changing its color to expresso. The service included detailed preparation and precise application to achieve a rich, uniform finish on a high-use furniture piece.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-sofa-brown-pigmented-change-color-to-expresso-sleeper-american-leather-laguna-hills-before.jpg",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-sofa-brown-pigmented-change-color-to-expresso-sleeper-american-leather-laguna-hills-after-extra.jpg",
  },
  {
    serviceType: "Leather Dyeing",
    furniture: "Sofa Sectional",
    color: "Tan",
    leatherType: "Nubuck",
    problem: "Faded And Dry Restored Recolored Grey Pigmented Protected Finish",
    location: "Laguna Beach",
    description:
      "This project involved restoring a tan nubuck sectional that was faded and dry. It was recolored grey, pigmented, and protected with a finish, highlighting before, after, and extra images for a complete restoration record.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/before-after/leather-dyeing-tan-nubuck-faded-and-dry-restored-recolored-grey-pigmented-protected-finish-sectional-laguna-beach-before.jpg",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-tan-nubuck-faded-and-dry-restored-recolored-grey-pigmented-protected-finish-sectional-laguna-beach-after.jpg",
  },
  {
    serviceType: "Leather Cleaning",
    furniture: "Chair",
    color: "Brown",
    leatherType: "Aniline",
    problem: "Dry Weathered",
    location: "Newport Beach",
    description:
      "Cleaning service on brown aniline leather tufted style chairs exhibiting dry, weathered conditions in Newport Beach. This project highlights restoration efforts to maintain the natural leather appearance and extend furniture longevity.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/before-after/leather-cleaning-chair-brown-aniline-dry-weathered-tufted-style-newport-beach.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/before-after/leather-cleaning-chair-brown-aniline-dry-weathered-tufted-style-newport-beach.png",
  },
  {
    serviceType: "Leather Cleaning",
    furniture: "Chair",
    color: "Brown",
    leatherType: "Semi Aniline",
    problem: "Soiled",
    location: "Lake Forest",
    description:
      "A brown semi-aniline leather tufted wingback chair in Lake Forest was professionally cleaned to restore its appearance and remove heavy soiling, revealing its original color and finish.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-chair-brown-semi-aniline-soiled-tufted-wingback-lake-forest-before.jpg",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-chair-brown-semi-aniline-soiled-tufted-wingback-lake-forest-after.jpg",
  },
  {
    serviceType: "Leather Cleaning",
    furniture: "Chair",
    color: "Tan",
    leatherType: "Aniline",
    problem: "Refreshed Tan Tone Restored",
    location: "Orange County",
    description:
      "A tan aniline double-wide chair with soiled and distressed leather was cleaned and restored to a refreshed tan tone, improving its appearance and durability in Orange County.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-tan-aniline-soiled-discolored-dark-tone-distressed-refreshed-tan-tone-restored-double-wide-chair-orange-county-before.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-tan-aniline-soiled-discolored-dark-tone-distressed-refreshed-tan-tone-restored-double-wide-chair-orange-county-after.png",
  },
  {
    serviceType: "Leather Cleaning",
    furniture: "Sofa",
    color: "–",
    leatherType: "Aniline",
    problem: "Fading Surface Marks",
    location: "–",
    description:
      "Loveseat Barcalounger received targeted cleaning to address fading and surface marks. The aniline leather was treated to restore uniform color and enhance overall appearance, preserving texture and softness.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-sofa-aniline-fading-surface-marks-loveseat-barcalounger-before.jpg",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-sofa-aniline-fading-surface-marks-loveseat-barcalounger-after.png",
  },
  {
    serviceType: "Leather Cleaning",
    furniture: "Sofa",
    color: "Brown Two Tone",
    leatherType: "",
    problem: "Restuffing",
    location: "",
    description:
      "Leather cleaning and restuffing of a brown two-tone sectional sofa. The project involved restoring cushioning and cleaning leather surfaces to enhance comfort and visual appeal while preserving the sofa's original color and texture.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-sofa-sectional-brown-two-tone-restuffing-before.png",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-sofa-sectional-brown-two-tone-restuffing-after.png",
  },
  {
    serviceType: "Leather Cleaning",
    furniture: "Sofa",
    color: "Grey",
    leatherType: "Pigmented",
    problem: "Soiled Dirt",
    location: "Fullerton",
    description:
      "A grey pigmented leather sofa by Kelvin Giormani in Fullerton underwent deep cleaning to remove embedded dirt and soiling, reviving its contemporary finish and texture.",
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-sofa-grey-pigmented-soiled-dirt-kelvin-giormani-fullerton-before.jpg",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-sofa-grey-pigmented-soiled-dirt-kelvin-giormani-fullerton-after.jpg",
  },
];

const beforeAfterItems = galleryItems.map((item) => {
  const titleBase = `${item.serviceType} ${item.furniture} ${item.color} ${item.location || ""}`.trim();
  return {
    beforeSrc: item.beforeSrc,
    beforeAlt: `${titleBase} Before`,
    beforeTitle: `${titleBase} Before`,
    afterSrc: item.afterSrc,
    afterAlt: `${titleBase} After`,
    afterTitle: `${titleBase} After`,
    caption: (
      <dl className="mt-0 font-sans text-sm text-white">
        <div className="border-b border-gray-500 py-1">
          <dt className="inline font-bold text-releather-orange">Service type:</dt>{" "}
          <dd className="inline">{item.serviceType}</dd>
        </div>
        <div className="border-b border-gray-500 py-1">
          <dt className="inline font-bold text-releather-orange">Furniture:</dt>{" "}
          <dd className="inline">{item.furniture}</dd>
        </div>
        <div className="border-b border-gray-500 py-1">
          <dt className="inline font-bold text-releather-orange">Color:</dt>{" "}
          <dd className="inline">{item.color}</dd>
        </div>
        {item.leatherType ? (
          <div className="border-b border-gray-500 py-1">
            <dt className="inline font-bold text-releather-orange">Type of leather:</dt>{" "}
            <dd className="inline">{item.leatherType}</dd>
          </div>
        ) : null}
        <div className="border-b border-gray-500 py-1">
          <dt className="inline font-bold text-releather-orange">Problem:</dt>{" "}
          <dd className="inline">{item.problem}</dd>
        </div>
        <div className="border-b border-gray-500 py-1">
          <dt className="inline font-bold text-releather-orange">Location:</dt>{" "}
          <dd className="inline">{item.location || "—"}</dd>
        </div>
        {item.description ? (
          <div className="pt-2">
            <dt className="font-bold text-releather-orange">Description:</dt>{" "}
            <dd className="mt-1">{item.description}</dd>
          </div>
        ) : null}
      </dl>
    ),
  };
});

type PopImage = { src: string; alt: string; label: string };

export default function GalleryPage() {
  const [popImage, setPopImage] = useState<PopImage | null>(null);

  const closeModal = useCallback(() => setPopImage(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (popImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [popImage, closeModal]);

  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Before and After Portfolio"
            subtitle="Leather restoration, dyeing, and cleaning results."
            primaryCta={{
              href: "/estimate",
              title: "Get a quote",
              "aria-label": "Get a quote",
              label: "Get Quote",
            }}
          />

          <section
            id="portfolio"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="portfolio-heading"
          >
            <header className="mb-10 text-center">
              <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
                <h1
                  id="portfolio-heading"
                  className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl"
                >
                  Before & After
                </h1>
              </div>
              <p className="mt-4 font-sans text-2xl font-bold leading-snug text-gray-800">
                → Gallery
              </p>
            </header>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {beforeAfterItems.map((item, index) => (
                <figure
                  key={index}
                  className="border-4 bg-releather-dark p-4"
                  style={{ borderColor: "#23262f" }}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                        Before
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setPopImage({
                            src: item.beforeSrc,
                            alt: item.beforeAlt,
                            label: `${item.beforeAlt} (Before)`,
                          })
                        }
                        className="block w-full transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                        title={item.beforeTitle}
                      ><Image unoptimized
                          src={item.beforeSrc}
                          alt={item.beforeAlt}
                          width={300}
                          height={225}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-contain"
                          style={{ borderWidth: "2px", borderColor: "#23262f" }}
                        />
                      </button>
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                        After
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setPopImage({
                            src: item.afterSrc,
                            alt: item.afterAlt,
                            label: `${item.afterAlt} (After)`,
                          })
                        }
                        className="block w-full transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                        title={item.afterTitle}
                      ><Image unoptimized
                          src={item.afterSrc}
                          alt={item.afterAlt}
                          width={300}
                          height={225}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-contain"
                          style={{ borderWidth: "2px", borderColor: "#23262f" }}
                        />
                      </button>
                    </div>
                  </div>
                  <figcaption className="mt-4 border-t-2 border-gray-500 pt-4">
                    <div className="font-sans text-base font-medium text-white">
                      {item.caption}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />

      {popImage && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center px-6 py-10 backdrop-blur-sm"
          style={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 70%, rgba(255,255,255,0.2) 0%, transparent 45%)",
              "rgba(0,0,0,0.35)",
            ].join(", "),
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeModal}
        >
          <div
            className="relative w-fit max-w-[95vw] overflow-visible rounded-2xl border-2 border-[#f8991d] bg-white p-5 pb-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full text-xl font-bold transition"
              style={{ backgroundColor: "#f8991d", color: "#000" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#000";
                e.currentTarget.style.color = "#f8991d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f8991d";
                e.currentTarget.style.color = "#000";
              }}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex justify-center pt-2"><Image unoptimized
                src={popImage.src}
                alt={popImage.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
            <p className="mt-3 text-center font-sans text-base font-bold text-black">
              {popImage.label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
