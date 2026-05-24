"use client";

import { useState, type FormEvent } from "react";

/** Industry rule of thumb: ~18 sq ft leather per yard of 54" upholstery fabric. */
const YARDS_TO_LEATHER_SQ_FT = 18;
const HIDE_SQ_FT_MIN = 50;
const HIDE_SQ_FT_MAX = 55;

const brutalistPanelClassName =
  "border-[6px] border-black bg-releather-orange p-2 shadow-[10px_10px_0_0_#000000] sm:p-3";

const brutalistInnerClassName =
  "border-4 border-black bg-white p-5 sm:p-6";

const fieldControlClassName =
  "box-border h-14 w-full border-4 border-black bg-white px-4 font-sans text-lg font-bold leading-none text-black focus:border-black focus:outline-none focus:ring-4 focus:ring-releather-orange";

const inputClassName = `${fieldControlClassName} placeholder:font-semibold placeholder:text-black/40`;

const selectClassName = `${fieldControlClassName} appearance-none uppercase tracking-wide`;

const buttonClassName =
  "border-4 border-black bg-releather-orange px-6 py-3 font-display text-xl font-black uppercase tracking-tight text-black shadow-[6px_6px_0_0_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-[6px_6px_0_0_#000000] disabled:hover:translate-x-0 disabled:hover:translate-y-0";

const clearButtonClassName =
  "border-4 border-black bg-white px-6 py-3 font-display text-xl font-black uppercase tracking-tight text-black shadow-[6px_6px_0_0_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none";

function parsePositiveNumber(value: string): number | null {
  const parsed = Number.parseFloat(value.trim());
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
}

function formatNumber(value: number): string {
  return value.toLocaleString("en-US", { maximumFractionDigits: 1 });
}

function estimateHideCount(sqFt: number): { min: number; max: number } {
  return {
    min: Math.ceil(sqFt / HIDE_SQ_FT_MAX),
    max: Math.ceil(sqFt / HIDE_SQ_FT_MIN),
  };
}

function formatHideEstimate({ min, max }: { min: number; max: number }): string {
  if (min === max) {
    return `${min} hide${min === 1 ? "" : "s"}`;
  }
  return `${min}–${max} hides`;
}

type LeatherMaterialCalculatorProps = {
  headingId?: string;
  /** Use h1 on standalone pages; h3 when nested in a guide */
  headingTag?: "h1" | "h3";
};

export default function LeatherMaterialCalculator({
  headingId = "how-much-leather",
  headingTag: HeadingTag = "h3",
}: LeatherMaterialCalculatorProps) {
  const [fabricYards, setFabricYards] = useState("");
  const [yardageResult, setYardageResult] = useState<number | null>(null);
  const [yardageError, setYardageError] = useState<string | null>(null);

  const [hideAmount, setHideAmount] = useState("");
  const [hideUnit, setHideUnit] = useState<"sq-ft" | "yards">("sq-ft");
  const [hideResult, setHideResult] = useState<{ sqFt: number; hides: { min: number; max: number } } | null>(null);
  const [hideError, setHideError] = useState<string | null>(null);

  function handleYardageConvert(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const yards = parsePositiveNumber(fabricYards);
    if (yards == null) {
      setYardageResult(null);
      setYardageError("Enter a valid yardage amount greater than zero.");
      return;
    }
    setYardageError(null);
    setYardageResult(yards * YARDS_TO_LEATHER_SQ_FT);
  }

  function handleHideCalculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = parsePositiveNumber(hideAmount);
    if (amount == null) {
      setHideResult(null);
      setHideError("Enter a valid amount greater than zero.");
      return;
    }

    const sqFt =
      hideUnit === "yards" ? amount * YARDS_TO_LEATHER_SQ_FT : amount;

    setHideError(null);
    setHideResult({ sqFt, hides: estimateHideCount(sqFt) });
  }

  function handleYardageClear() {
    setFabricYards("");
    setYardageResult(null);
    setYardageError(null);
  }

  function handleHideClear() {
    setHideAmount("");
    setHideUnit("sq-ft");
    setHideResult(null);
    setHideError(null);
  }

  return (
    <section
      className="not-prose mx-auto my-10 max-w-[1280px] scroll-mt-24 bg-white [text-shadow:none]"
      aria-labelledby={headingId}
    >
      <HeadingTag
        id={headingId}
        className="text-balance text-center font-display text-3xl font-black uppercase leading-none tracking-tight text-black [text-shadow:none] sm:text-4xl md:text-5xl lg:text-6xl"
      >
        How Much Leather Do I Need?
      </HeadingTag>

      <p className="mt-6 text-balance text-center font-display text-xl font-black uppercase tracking-tight text-releather-orange [text-shadow:none] sm:text-2xl md:text-3xl">
        Material Calculator &amp; Measurement Converter
      </p>

      <p className="mx-auto mt-6 max-w-4xl text-balance text-center font-sans text-base font-semibold leading-relaxed text-black sm:text-lg">
        Leather is sold by the hide and measured by the square foot. If you are
        working from upholstery fabric yardage, use the calculators below to
        convert fabric yards into approximate leather square footage and estimate
        how many hides you may need for your project.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <article className={brutalistPanelClassName} aria-labelledby="yardage-converter-heading">
          <div className={brutalistInnerClassName}>
            <h4
              id="yardage-converter-heading"
              className="border-b-[6px] border-releather-orange pb-3 font-display text-2xl font-black uppercase leading-none tracking-tight text-black [text-shadow:none] sm:text-3xl"
            >
              Fabric Yardage → Sq Ft
            </h4>
            <p className="mt-4 font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
              Enter your upholstery fabric yardage to convert it into approximate
              leather square footage.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleYardageConvert}>
              <div>
                <label
                  htmlFor="fabric-yardage-input"
                  className="mb-2 block font-display text-base font-black uppercase tracking-tight text-black sm:text-lg"
                >
                  Fabric yards
                </label>
                <input
                  id="fabric-yardage-input"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="any"
                  placeholder="e.g. 18"
                  value={fabricYards}
                  onChange={(event) => setFabricYards(event.target.value)}
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button type="submit" className={buttonClassName}>
                  Convert
                </button>
                <button
                  type="button"
                  className={clearButtonClassName}
                  onClick={handleYardageClear}
                >
                  Clear
                </button>
              </div>
            </form>

            {yardageError ? (
              <p className="mt-4 font-sans text-sm font-bold text-black" role="alert">
                {yardageError}
              </p>
            ) : null}

            {yardageResult != null ? (
              <div
                className="mt-6 border-4 border-black bg-releather-orange p-3 shadow-[4px_4px_0_0_#000000]"
                role="status"
                aria-live="polite"
              >
                <div className="border-2 border-black bg-white px-4 py-5 text-center">
                  <p className="font-display text-sm font-black uppercase tracking-wide text-black sm:text-base">
                    Approximate leather needed
                  </p>
                  <p className="mt-2 font-display text-4xl font-black uppercase leading-none text-releather-orange [text-shadow:none] sm:text-5xl">
                    {formatNumber(yardageResult)} sq ft
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </article>

        <article className={brutalistPanelClassName} aria-labelledby="hide-estimator-heading">
          <div className={brutalistInnerClassName}>
            <h4
              id="hide-estimator-heading"
              className="border-b-[6px] border-releather-orange pb-3 font-display text-2xl font-black uppercase leading-none tracking-tight text-black [text-shadow:none] sm:text-3xl"
            >
              Hide Estimator
            </h4>
            <p className="mt-4 font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
              Enter your project total in square feet or fabric yardage to estimate
              how many hides to order.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleHideCalculate}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_8.5rem] md:grid-rows-[auto_auto] md:gap-x-4 md:gap-y-2">
                <label
                  htmlFor="hide-amount-input"
                  className="block font-display text-base font-black uppercase tracking-tight text-black sm:text-lg md:col-start-1 md:row-start-1"
                >
                  Project amount
                </label>
                <input
                  id="hide-amount-input"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="any"
                  placeholder={hideUnit === "yards" ? "e.g. 18" : "e.g. 324"}
                  value={hideAmount}
                  onChange={(event) => setHideAmount(event.target.value)}
                  className={`${inputClassName} md:col-start-1 md:row-start-2`}
                />

                <label
                  htmlFor="hide-unit-select"
                  className="block font-display text-base font-black uppercase tracking-tight text-black sm:text-lg md:col-start-2 md:row-start-1"
                >
                  Unit
                </label>
                <select
                  id="hide-unit-select"
                  value={hideUnit}
                  onChange={(event) =>
                    setHideUnit(event.target.value as "sq-ft" | "yards")
                  }
                  className={`${selectClassName} md:col-start-2 md:row-start-2`}
                >
                  <option value="sq-ft">Sq Ft</option>
                  <option value="yards">Yards</option>
                </select>
              </div>

              <div className="flex flex-wrap gap-3">
                <button type="submit" className={buttonClassName}>
                  Calculate
                </button>
                <button
                  type="button"
                  className={clearButtonClassName}
                  onClick={handleHideClear}
                >
                  Clear
                </button>
              </div>
            </form>

            {hideError ? (
              <p className="mt-4 font-sans text-sm font-bold text-black" role="alert">
                {hideError}
              </p>
            ) : null}

            {hideResult != null ? (
              <div
                className="mt-6 border-4 border-black bg-releather-orange p-3 shadow-[4px_4px_0_0_#000000]"
                role="status"
                aria-live="polite"
              >
                <div className="border-2 border-black bg-white px-4 py-5 text-center">
                  <p className="font-display text-sm font-black uppercase tracking-wide text-black sm:text-base">
                    Approximate hides needed
                  </p>
                  <p className="mt-2 font-display text-4xl font-black uppercase leading-none text-releather-orange [text-shadow:none] sm:text-5xl">
                    {formatHideEstimate(hideResult.hides)}
                  </p>
                  <p className="mt-3 font-sans text-sm font-semibold text-black">
                    Based on {formatNumber(hideResult.sqFt)} sq ft total
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </article>
      </div>

      <p className="mx-auto mt-8 max-w-3xl border-l-[6px] border-releather-orange bg-white px-4 py-3 text-center font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
        These estimates are approximate. Upholstery hides vary in size and shape,
        typically ranging from {HIDE_SQ_FT_MIN} to {HIDE_SQ_FT_MAX} sq ft per hide.
        Always order extra for pattern matching, defects, and waste—especially on
        large pieces like sofas and sectionals.
      </p>
    </section>
  );
}
