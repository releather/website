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
            className="absolute flex h-9 w-12 items-center justify-center rounded-lg bg-red-600/80 shadow-lg transition hover:bg-red-700/80 hover:scale-105"
            aria-hidden
          >
            <svg
              className="ml-0.5 h-6 w-6"
              viewBox="0 0 68 48"
              fill="none"
              aria-hidden
            >
              <path d="M45 24L27 14v20" fill="#fff" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
