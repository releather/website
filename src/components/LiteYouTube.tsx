"use client";

import { useState } from "react";
import Image from "next/image";

export type LiteYouTubeProps = {
  /** YouTube video ID (e.g. from watch?v=VIDEO_ID or embed/VIDEO_ID) */
  videoId: string;
  /** Accessible title for the video / play button */
  title?: string;
  /** Optional query params for the embed URL (e.g. "start=3" or "rel=0") */
  embedParams?: string;
  /** Optional className for the wrapper (e.g. for aspect overrides) */
  className?: string;
};

const THUMBNAIL_BASE = "https://img.youtube.com/vi";

export default function LiteYouTube({
  videoId,
  title = "Play video",
  embedParams = "rel=0",
  className = "",
}: LiteYouTubeProps) {
  const [activated, setActivated] = useState(false);

  const thumbnailUrl = `${THUMBNAIL_BASE}/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&${embedParams}`;

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-lg bg-black ${className}`}
    >
      {activated ? (
        <iframe
          title={title}
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          className="absolute inset-0 flex h-full w-full items-center justify-center border-0 bg-transparent p-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2 focus:ring-offset-black"
          aria-label={title}
        >
          <Image
            src={thumbnailUrl}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            className="object-cover"
          />
          <span
            className="absolute flex h-14 w-20 items-center justify-center rounded-lg bg-red-600 text-white shadow-lg transition hover:bg-red-700 hover:scale-105"
            aria-hidden
          >
            <svg
              className="ml-1 h-10 w-10"
              viewBox="0 0 68 48"
              fill="currentColor"
              aria-hidden
            >
              <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.58 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 12.38 0 24 0 24s.06 11.62 1.58 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.42-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 35.62 68 24 68 24s-.06-11.62-1.58-16.26z" />
              <path d="M45 24L27 14v20" fill="#fff" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
