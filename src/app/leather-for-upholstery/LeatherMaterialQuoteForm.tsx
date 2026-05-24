"use client";

import { useCallback, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  EMPTY_LEATHER_MATERIAL_QUOTE_FORM,
  LEATHER_QUOTE_IMAGE_OPTIONS,
  LEATHER_QUOTE_SWATCH_SIZE,
  leatherQuoteSwatchUrl,
  validateLeatherMaterialQuoteForm,
  type LeatherMaterialQuoteFieldErrors,
  type LeatherMaterialQuoteFormValues,
} from "@/lib/leatherMaterialQuoteForm";
import { formatPhoneInput } from "@/lib/formatPhoneInput";

const inputClassName =
  "w-full border-2 border-black bg-white px-3 py-2 font-sans text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-1";

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor?: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block font-sans text-sm font-semibold text-gray-800"
    >
      {children}
      {required ? (
        <span className="ml-0.5 text-releather-orange" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  );
}

function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 font-sans text-xs font-semibold text-red-600" role="alert">
      {message}
    </p>
  );
}

function ToggleSwitch({
  id,
  checked,
  onChange,
  label,
  disabled,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <label htmlFor={id} className="font-sans text-sm font-semibold text-gray-800">
        {label}
      </label>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-7 w-[3.25rem] shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-releather-orange focus-visible:ring-offset-2 disabled:opacity-50 ${
          checked ? "bg-releather-orange" : "bg-gray-300"
        }`}
      >
        <span
          className={`pointer-events-none absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out ${
            checked ? "translate-x-[1.35rem]" : "translate-x-0"
          }`}
          aria-hidden
        />
      </button>
    </div>
  );
}

export default function LeatherMaterialQuoteForm() {
  const [values, setValues] = useState<LeatherMaterialQuoteFormValues>(
    EMPTY_LEATHER_MATERIAL_QUOTE_FORM,
  );
  const [errors, setErrors] = useState<LeatherMaterialQuoteFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const update = useCallback(
    <K extends keyof LeatherMaterialQuoteFormValues>(
      key: K,
      value: LeatherMaterialQuoteFormValues[K],
    ) => {
      setValues((prev) => ({ ...prev, [key]: value }));
      setSubmitError(null);
      setErrors((prev) => {
        const next = { ...prev };
        if (key === "name") delete next.name;
        if (key === "phone") delete next.phone;
        if (key === "email") delete next.email;
        if (key === "leatherServiceOptionId") delete next.leatherService;
        delete next.form;
        return next;
      });
    },
    [],
  );

  const updateAddress = useCallback(
    (key: keyof LeatherMaterialQuoteFormValues["address"], value: string) => {
      setValues((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
      setSubmitError(null);
      setErrors((prev) => {
        const next = { ...prev };
        if (key === "address") delete next.address;
        if (key === "city") delete next.city;
        if (key === "state") delete next.state;
        if (key === "zipCode") delete next.zipCode;
        delete next.form;
        return next;
      });
    },
    [],
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateLeatherMaterialQuoteForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setErrors({});

    try {
      const response = await fetch("/api/leather-material-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to submit quote request");
      }

      setIsSuccess(true);
      setValues(EMPTY_LEATHER_MATERIAL_QUOTE_FORM);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className="border-2 border-black bg-releather-orange/15 p-4 font-sans text-sm text-gray-800"
        role="status"
      >
        <p className="font-semibold text-black">Thank you — your quote request was sent.</p>
        <p className="mt-1">We&apos;ll get back to you shortly.</p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-3 inline-flex items-center border-2 border-black bg-white px-3 py-1.5 text-sm font-bold text-black transition hover:bg-black hover:text-white"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-label="Leather material quote form"
    >
      <div>
        <FieldLabel htmlFor="quote-name" required>
          Name
        </FieldLabel>
        <input
          id="quote-name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          disabled={isSubmitting}
          onChange={(e) => update("name", e.target.value)}
          className={inputClassName}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "quote-name-error" : undefined}
        />
        <FieldError id="quote-name-error" message={errors.name} />
      </div>

      <div>
        <FieldLabel htmlFor="quote-company">Company (Optional)</FieldLabel>
        <input
          id="quote-company"
          type="text"
          autoComplete="organization"
          value={values.company}
          disabled={isSubmitting}
          onChange={(e) => update("company", e.target.value)}
          className={inputClassName}
        />
      </div>

      <fieldset className="space-y-3 border-0 p-0">
        <legend className="mb-1.5 font-sans text-sm font-semibold text-gray-800">
          Address<span className="ml-0.5 text-releather-orange">*</span>
        </legend>
        <div>
          <input
            id="quote-address"
            type="text"
            autoComplete="street-address"
            required
            placeholder="Street address"
            value={values.address.address}
            disabled={isSubmitting}
            onChange={(e) => updateAddress("address", e.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? "quote-address-error" : undefined}
          />
          <FieldError id="quote-address-error" message={errors.address} />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <input
              id="quote-city"
              type="text"
              autoComplete="address-level2"
              required
              placeholder="City"
              value={values.address.city}
              disabled={isSubmitting}
              onChange={(e) => updateAddress("city", e.target.value)}
              className={inputClassName}
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? "quote-city-error" : undefined}
            />
            <FieldError id="quote-city-error" message={errors.city} />
          </div>
          <div>
            <input
              id="quote-state"
              type="text"
              autoComplete="address-level1"
              required
              placeholder="State"
              value={values.address.state}
              disabled={isSubmitting}
              onChange={(e) => updateAddress("state", e.target.value)}
              className={inputClassName}
              aria-invalid={Boolean(errors.state)}
              aria-describedby={errors.state ? "quote-state-error" : undefined}
            />
            <FieldError id="quote-state-error" message={errors.state} />
          </div>
          <div>
            <input
              id="quote-zip"
              type="text"
              autoComplete="postal-code"
              required
              placeholder="ZIP"
              value={values.address.zipCode}
              disabled={isSubmitting}
              onChange={(e) => updateAddress("zipCode", e.target.value)}
              className={inputClassName}
              aria-invalid={Boolean(errors.zipCode)}
              aria-describedby={errors.zipCode ? "quote-zip-error" : undefined}
            />
            <FieldError id="quote-zip-error" message={errors.zipCode} />
          </div>
        </div>
        <input type="hidden" name="country" value={values.address.country} />
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="quote-phone" required>
            Phone number
          </FieldLabel>
          <input
            id="quote-phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            disabled={isSubmitting}
            onChange={(e) => update("phone", formatPhoneInput(e.target.value))}
            className={inputClassName}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "quote-phone-error" : undefined}
          />
          <FieldError id="quote-phone-error" message={errors.phone} />
        </div>
        <div>
          <FieldLabel htmlFor="quote-email" required>
            Email
          </FieldLabel>
          <input
            id="quote-email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            disabled={isSubmitting}
            onChange={(e) => update("email", e.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "quote-email-error" : undefined}
          />
          <FieldError id="quote-email-error" message={errors.email} />
        </div>
      </div>

      <fieldset className="border-0 p-0">
        <legend className="mb-2 font-sans text-sm font-semibold text-gray-800">
          What leather are you interested in?
        </legend>
        <div
          className="grid grid-cols-2 gap-2 sm:grid-cols-4"
          role="radiogroup"
          aria-label="Leather service"
        >
          {LEATHER_QUOTE_IMAGE_OPTIONS.map((option) => {
            const selected = values.leatherServiceOptionId === option.id;
            return (
              <label
                key={option.id}
                className={`cursor-pointer border-2 border-black transition ${
                  selected
                    ? "bg-releather-orange"
                    : "bg-white hover:bg-gray-50"
                } ${isSubmitting ? "pointer-events-none opacity-60" : ""}`}
              >
                <input
                  type="radio"
                  name="leather-service"
                  value={option.id}
                  className="sr-only"
                  checked={selected}
                  disabled={isSubmitting}
                  onChange={() => update("leatherServiceOptionId", option.id)}
                />
                <Image
                  unoptimized
                  src={leatherQuoteSwatchUrl(option.imagePath)}
                  alt=""
                  width={LEATHER_QUOTE_SWATCH_SIZE}
                  height={LEATHER_QUOTE_SWATCH_SIZE}
                  className="aspect-square w-full object-contain"
                />
                <span className="block border-t-2 border-black bg-transparent px-1 py-1.5 text-center font-sans text-[11px] font-semibold leading-tight text-black sm:text-xs">
                  {option.label}
                </span>
              </label>
            );
          })}
        </div>
        <FieldError message={errors.leatherService} />
      </fieldset>

      <div>
        <FieldLabel htmlFor="quote-colors">
          Which color(s) are you interested in?
        </FieldLabel>
        <input
          id="quote-colors"
          type="text"
          value={values.colors}
          disabled={isSubmitting}
          onChange={(e) => update("colors", e.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <FieldLabel htmlFor="quote-quantity">How much do you need?</FieldLabel>
        <input
          id="quote-quantity"
          type="text"
          placeholder="(hides / sq. ft. / yards)"
          value={values.quantity}
          disabled={isSubmitting}
          onChange={(e) => update("quantity", e.target.value)}
          className={inputClassName}
        />
      </div>

      <ToggleSwitch
        id="quote-add-details"
        checked={values.addFurtherDetails}
        onChange={(checked) => update("addFurtherDetails", checked)}
        label="Add further details:"
        disabled={isSubmitting}
      />

      {values.addFurtherDetails ? (
        <div>
          <label htmlFor="quote-details" className="sr-only">
            Further details
          </label>
          <textarea
            id="quote-details"
            rows={4}
            value={values.furtherDetails}
            disabled={isSubmitting}
            onChange={(e) => update("furtherDetails", e.target.value)}
            className={`${inputClassName} resize-y min-h-[6rem]`}
          />
        </div>
      ) : null}

      <ToggleSwitch
        id="quote-mailing-list"
        checked={values.mailingList}
        onChange={(checked) => update("mailingList", checked)}
        label="Add me to mailing list!"
        disabled={isSubmitting}
      />

      {submitError ? (
        <p className="font-sans text-sm font-semibold text-red-600" role="alert">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-releather-orange px-5 py-3 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <i className="fa fa-spinner fa-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Submit quote request"
        )}
      </button>
    </form>
  );
}
