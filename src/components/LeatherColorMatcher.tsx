"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
} from "react";
import {
  LEATHER_COLOR_SWATCHES,
  describeSampledColor,
  findClosestLeathers,
  rgbToHex,
  type MatchedLeatherSwatch,
  type RgbColor,
} from "@/lib/leatherColorMatcher";

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
const MATCH_LIMIT = 12;

const brutalistPanelClassName =
  "border-[6px] border-black bg-releather-orange p-2 shadow-[10px_10px_0_0_#000000] sm:p-3";

const brutalistInnerClassName = "border-4 border-black bg-white p-5 sm:p-6";

const buttonClassName =
  "border-4 border-black bg-releather-orange px-6 py-3 font-display text-xl font-black uppercase tracking-tight text-black shadow-[6px_6px_0_0_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-50";

const clearButtonClassName =
  "border-4 border-black bg-white px-6 py-3 font-display text-xl font-black uppercase tracking-tight text-black shadow-[6px_6px_0_0_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none";

type PickMarker = {
  displayX: number;
  displayY: number;
};

type LeatherColorMatcherProps = {
  headingId?: string;
  headingTag?: "h1" | "h2" | "h3";
};

function getImageSampleCoordinates(
  image: HTMLImageElement,
  clientX: number,
  clientY: number,
  containerRect: DOMRect,
): { x: number; y: number } | null {
  const displayedWidth = image.clientWidth;
  const displayedHeight = image.clientHeight;
  const naturalWidth = image.naturalWidth;
  const naturalHeight = image.naturalHeight;

  if (!displayedWidth || !displayedHeight || !naturalWidth || !naturalHeight) {
    return null;
  }

  const scale = Math.min(
    displayedWidth / naturalWidth,
    displayedHeight / naturalHeight,
  );
  const renderedWidth = naturalWidth * scale;
  const renderedHeight = naturalHeight * scale;
  const offsetX = (displayedWidth - renderedWidth) / 2;
  const offsetY = (displayedHeight - renderedHeight) / 2;

  const localX = clientX - containerRect.left - offsetX;
  const localY = clientY - containerRect.top - offsetY;

  if (localX < 0 || localY < 0 || localX > renderedWidth || localY > renderedHeight) {
    return null;
  }

  return {
    x: Math.min(naturalWidth - 1, Math.floor((localX / renderedWidth) * naturalWidth)),
    y: Math.min(naturalHeight - 1, Math.floor((localY / renderedHeight) * naturalHeight)),
  };
}

function getDisplayMarkerPosition(
  image: HTMLImageElement,
  sampleX: number,
  sampleY: number,
): PickMarker | null {
  const displayedWidth = image.clientWidth;
  const displayedHeight = image.clientHeight;
  const naturalWidth = image.naturalWidth;
  const naturalHeight = image.naturalHeight;

  if (!displayedWidth || !displayedHeight || !naturalWidth || !naturalHeight) {
    return null;
  }

  const scale = Math.min(
    displayedWidth / naturalWidth,
    displayedHeight / naturalHeight,
  );
  const renderedWidth = naturalWidth * scale;
  const renderedHeight = naturalHeight * scale;
  const offsetX = (displayedWidth - renderedWidth) / 2;
  const offsetY = (displayedHeight - renderedHeight) / 2;

  return {
    displayX: offsetX + (sampleX / naturalWidth) * renderedWidth,
    displayY: offsetY + (sampleY / naturalHeight) * renderedHeight,
  };
}

export default function LeatherColorMatcher({
  headingId = "leather-color-matcher-heading",
  headingTag: HeadingTag = "h1",
}: LeatherColorMatcherProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [pickedColor, setPickedColor] = useState<RgbColor | null>(null);
  const [pickedHex, setPickedHex] = useState<string | null>(null);
  const [marker, setMarker] = useState<PickMarker | null>(null);
  const [matches, setMatches] = useState<MatchedLeatherSwatch[]>([]);
  const [samplePoint, setSamplePoint] = useState<{ x: number; y: number } | null>(null);

  const revokeObjectUrl = useCallback((url: string | null) => {
    if (url?.startsWith("blob:")) {
      URL.revokeObjectURL(url);
    }
  }, []);

  useEffect(() => {
    return () => revokeObjectUrl(imageUrl);
  }, [imageUrl, revokeObjectUrl]);

  const drawImageToCanvas = useCallback((image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
      return;
    }

    context.drawImage(image, 0, 0);
  }, []);

  const resetPickState = useCallback(() => {
    setPickedColor(null);
    setPickedHex(null);
    setMarker(null);
    setMatches([]);
    setSamplePoint(null);
  }, []);

  const loadImageFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) {
        setUploadError("Please upload an image file (JPG, PNG, WEBP, etc.).");
        return;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        setUploadError("Image must be 10 MB or smaller.");
        return;
      }

      revokeObjectUrl(imageUrl);
      resetPickState();
      setUploadError(null);
      setFileName(file.name);
      setImageUrl(URL.createObjectURL(file));
    },
    [imageUrl, resetPickState, revokeObjectUrl],
  );

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      loadImageFile(file);
    }
    event.target.value = "";
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragOver(false);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      loadImageFile(file);
    }
  }

  function handleClearImage() {
    revokeObjectUrl(imageUrl);
    setImageUrl(null);
    setFileName(null);
    setUploadError(null);
    resetPickState();
  }

  function handleImageLoaded() {
    const image = imageRef.current;
    if (image) {
      drawImageToCanvas(image);
    }
  }

  function handleImageClick(event: React.MouseEvent<HTMLDivElement>) {
    const image = imageRef.current;
    const canvas = canvasRef.current;
    const container = pickerRef.current;

    if (!image || !canvas || !container) {
      return;
    }

    const sample = getImageSampleCoordinates(
      image,
      event.clientX,
      event.clientY,
      container.getBoundingClientRect(),
    );

    if (!sample) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const pixel = context.getImageData(sample.x, sample.y, 1, 1).data;
    const rgb: RgbColor = { r: pixel[0], g: pixel[1], b: pixel[2] };
    const hex = rgbToHex(rgb);
    const markerPosition = getDisplayMarkerPosition(image, sample.x, sample.y);

    setSamplePoint(sample);
    setPickedColor(rgb);
    setPickedHex(hex);
    setMarker(markerPosition);
    setMatches(findClosestLeathers(LEATHER_COLOR_SWATCHES, rgb, MATCH_LIMIT));
  }

  useEffect(() => {
    if (!samplePoint || !imageRef.current) {
      return;
    }

    const updateMarker = () => {
      const image = imageRef.current;
      if (!image) {
        return;
      }
      setMarker(getDisplayMarkerPosition(image, samplePoint.x, samplePoint.y));
    };

    updateMarker();
    window.addEventListener("resize", updateMarker);
    return () => window.removeEventListener("resize", updateMarker);
  }, [samplePoint, imageUrl]);

  const colorInsight = pickedColor ? describeSampledColor(pickedColor) : null;

  return (
    <section
      className="not-prose mx-auto my-10 max-w-[1280px] scroll-mt-24 bg-white"
      aria-labelledby={headingId}
    >
      <HeadingTag
        id={headingId}
        className="text-balance text-center font-display text-3xl font-black uppercase leading-none tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Leather Color Matcher
      </HeadingTag>

      <p className="mt-6 text-balance text-center font-display text-xl font-black uppercase tracking-tight text-releather-orange sm:text-2xl md:text-3xl">
        Upload a photo. Click a color. Find matching leathers.
      </p>

      <p className="mx-auto mt-6 max-w-4xl text-balance text-center font-sans text-base font-semibold leading-relaxed text-black sm:text-lg">
        Upload a photo of your furniture, fabric swatch, or room inspiration.
        Click anywhere on the image to sample that color and see the closest
        upholstery leather options from our collections.
      </p>

      <article className={`mt-10 ${brutalistPanelClassName}`} aria-labelledby="upload-image-heading">
        <div className={brutalistInnerClassName}>
          <h2
            id="upload-image-heading"
            className="border-b-[6px] border-releather-orange pb-3 font-display text-2xl font-black uppercase leading-none tracking-tight text-black sm:text-3xl"
          >
            Upload Image
          </h2>

          {!imageUrl ? (
            <div
              className={`mt-6 border-4 border-dashed bg-white p-8 text-center transition-colors sm:p-10 ${
                isDragOver
                  ? "border-releather-orange bg-releather-orange/10"
                  : "border-black"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <p className="font-sans text-base font-semibold leading-relaxed text-black sm:text-lg">
                Drag and drop an image here, or choose a file from your device.
              </p>
              <button
                type="button"
                className={`mt-6 ${buttonClassName}`}
                onClick={() => fileInputRef.current?.click()}
              >
                Choose Image
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-4 border-black bg-releather-orange px-4 py-3">
                <p className="mb-0 font-sans text-sm font-bold text-black sm:text-base">
                  {fileName ?? "Uploaded image"}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className={buttonClassName}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Replace
                  </button>
                  <button type="button" className={clearButtonClassName} onClick={handleClearImage}>
                    Remove
                  </button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </div>

              <div
                ref={pickerRef}
                className="relative overflow-hidden border-4 border-black bg-black shadow-[6px_6px_0_0_#000000]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imageRef}
                  src={imageUrl}
                  alt="Uploaded reference for leather color matching"
                  className="mx-auto block max-h-[min(70vh,720px)] w-full cursor-crosshair object-contain"
                  onLoad={handleImageLoaded}
                  onClick={handleImageClick}
                />
                {marker ? (
                  <span
                    className="pointer-events-none absolute z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_2px_#000000]"
                    style={{
                      left: marker.displayX,
                      top: marker.displayY,
                      backgroundColor: pickedHex ?? "#ffffff",
                    }}
                    aria-hidden
                  />
                ) : null}
              </div>

              <p className="mb-0 font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
                Click anywhere on the image to sample a color and see matching leathers below.
              </p>
            </div>
          )}

          {uploadError ? (
            <p className="mt-4 font-sans text-sm font-bold text-black" role="alert">
              {uploadError}
            </p>
          ) : null}

          <canvas ref={canvasRef} className="hidden" aria-hidden />
        </div>
      </article>

      {pickedHex && pickedColor && colorInsight ? (
        <div
          className="mt-8 border-4 border-black bg-releather-orange p-3 shadow-[6px_6px_0_0_#000000]"
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-wrap items-start gap-4 border-2 border-black bg-white px-4 py-4 sm:px-6">
            <span
              className="h-16 w-16 shrink-0 border-4 border-black shadow-[4px_4px_0_0_#000000]"
              style={{ backgroundColor: pickedHex }}
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-black uppercase tracking-wide text-black sm:text-base">
                Sampled color
              </p>
              <p className="mt-1 font-display text-2xl font-black uppercase leading-tight text-releather-orange sm:text-3xl">
                {colorInsight.description}
              </p>
              <p className="mt-3 font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
                {colorInsight.designerTip}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {matches.length > 0 ? (
        <section className="mt-10" aria-labelledby="matched-leathers-heading">
          <h2
            id="matched-leathers-heading"
            className="border-b-[6px] border-releather-orange pb-3 text-center font-display text-2xl font-black uppercase leading-none tracking-tight text-black sm:text-3xl"
          >
            Closest Matching Leathers
          </h2>

          <ul className="mt-6 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {matches.map((match) => (
              <li key={match.name}>
                <Link
                  href={match.url}
                  title={`View ${match.name}`}
                  className="group block border-4 border-black bg-white shadow-[6px_6px_0_0_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                >
                  <div className="relative aspect-[360/230] overflow-hidden border-b-4 border-black bg-white">
                    <Image
                      src={match.image}
                      alt={match.name}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover transition-transform group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-3">
                    <p className="mb-0 font-sans text-xs font-bold leading-snug text-black sm:text-sm">
                      {match.name}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="mx-auto mt-8 max-w-3xl border-l-[6px] border-releather-orange bg-white px-4 py-3 text-center font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
        Colors on screen can vary by monitor, lighting, and camera settings. Use
        these matches as a starting point and order leather samples before
        committing to a full hide order.
      </p>
    </section>
  );
}
