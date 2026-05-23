"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  EMPTY_ESTIMATE_FORM,
  ESTIMATE_COLOR_OPTIONS,
  ESTIMATE_COUNT_OPTIONS,
  ESTIMATE_DETACHABLE_OPTIONS,
  ESTIMATE_FILE_UPLOAD_FIELD_IDS,
  ESTIMATE_ITEM_TYPE_OPTIONS,
  ESTIMATE_MAILING_LIST_VALUE,
  ESTIMATE_MAX_FILES_PER_FIELD,
  ESTIMATE_SERVICE_OPTIONS,
  showEstimateChairCount,
  showEstimateColorSelection,
  showEstimateCushionCount,
  showEstimateDetachableFixed,
  showEstimateSofaCount,
  validateEstimateForm,
  type EstimateFieldErrors,
  type EstimateFileUploadFieldId,
  type EstimateFormValues,
} from "@/lib/estimateForm";

const inputClassName =
  "w-full border-2 border-black bg-white px-3 py-2 font-sans text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-1";

const FILE_UPLOAD_LABELS: Record<EstimateFileUploadFieldId, string> = {
  hqD5MA1798MKCjs6dA9aUQ: "Upload a file (1)",
  jmLoCZjxjFRNv1T8KX6V7Q: "Upload a file (2)",
  nMmCATSigGoBiNdbe2syvm: "Upload a file (3)",
  sB7FqLvgeZyrodg8gKQCMS: "Upload a file (4)",
  vTCUfmzeqRrxVpv5ZWPruW: "Upload a file (5)",
  dGWv99x7UELapkuBj6LhTJ: "Upload a file",
};

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
  caption,
  disabled,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  caption?: string;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between gap-3">
        <div>
          <label htmlFor={id} className="font-sans text-sm font-semibold text-gray-800">
            {label}
          </label>
          {caption ? (
            <p className="font-sans text-xs text-gray-600">{caption}</p>
          ) : null}
        </div>
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
    </div>
  );
}

export default function EstimateForm() {
  const [values, setValues] = useState<EstimateFormValues>(EMPTY_ESTIMATE_FORM);
  const [filesByField, setFilesByField] = useState<
    Partial<Record<EstimateFileUploadFieldId, File[]>>
  >({});
  const [errors, setErrors] = useState<EstimateFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const showColor = showEstimateColorSelection(values.service);
  const showDetachable = showEstimateDetachableFixed(
    values.service,
    values.itemTypes,
  );
  const showSofa = showEstimateSofaCount(values.itemTypes);
  const showChair = showEstimateChairCount(values.itemTypes);
  const showCushion = showEstimateCushionCount(values.itemTypes);

  const totalSelectedFiles = useMemo(
    () =>
      Object.values(filesByField).reduce(
        (count, files) => count + (files?.length ?? 0),
        0,
      ),
    [filesByField],
  );

  const update = useCallback(
    <K extends keyof EstimateFormValues>(
      key: K,
      value: EstimateFormValues[K],
    ) => {
      setValues((prev) => ({ ...prev, [key]: value }));
      setSubmitError(null);
      setErrors((prev) => {
        const next = { ...prev };
        if (key === "firstName") delete next.firstName;
        if (key === "lastName") delete next.lastName;
        if (key === "phone") delete next.phone;
        if (key === "email") delete next.email;
        if (key === "service") delete next.service;
        if (key === "itemTypes") delete next.itemTypes;
        if (key === "colorSelection") delete next.colorSelection;
        if (key === "detachableFixed") delete next.detachableFixed;
        if (key === "detailsText") delete next.detailsText;
        delete next.form;
        return next;
      });
    },
    [],
  );

  const updateAddress = useCallback(
    (key: keyof EstimateFormValues["address"], value: string) => {
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

  const toggleItemType = useCallback((itemValue: string) => {
    setValues((prev) => {
      const selected = prev.itemTypes.includes(itemValue)
        ? prev.itemTypes.filter((item) => item !== itemValue)
        : [...prev.itemTypes, itemValue];
      return { ...prev, itemTypes: selected };
    });
    setSubmitError(null);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.itemTypes;
      delete next.form;
      return next;
    });
  }, []);

  const handleFilesChange = useCallback(
    (fieldId: EstimateFileUploadFieldId, fileList: FileList | null) => {
      const nextFiles = fileList ? Array.from(fileList) : [];
      setFilesByField((prev) => ({
        ...prev,
        [fieldId]: nextFiles.slice(0, ESTIMATE_MAX_FILES_PER_FIELD),
      }));
      setSubmitError(null);
      setErrors((prev) => {
        const next = { ...prev };
        delete next.files;
        delete next.form;
        return next;
      });
    },
    [],
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateEstimateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setErrors({});

    try {
      const payload = new FormData();
      payload.append("values", JSON.stringify(values));

      for (const fieldId of ESTIMATE_FILE_UPLOAD_FIELD_IDS) {
        const files = filesByField[fieldId] ?? [];
        for (const file of files) {
          payload.append(fieldId, file);
        }
      }

      const response = await fetch("/api/estimate", {
        method: "POST",
        body: payload,
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to submit estimate request");
      }

      setIsSuccess(true);
      setValues(EMPTY_ESTIMATE_FORM);
      setFilesByField({});
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
      aria-label="Leather restoration estimate form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="estimate-first-name" required>
            First Name
          </FieldLabel>
          <input
            id="estimate-first-name"
            type="text"
            autoComplete="given-name"
            required
            value={values.firstName}
            disabled={isSubmitting}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "estimate-first-name-error" : undefined}
          />
          <FieldError id="estimate-first-name-error" message={errors.firstName} />
        </div>
        <div>
          <FieldLabel htmlFor="estimate-last-name" required>
            Last Name
          </FieldLabel>
          <input
            id="estimate-last-name"
            type="text"
            autoComplete="family-name"
            required
            value={values.lastName}
            disabled={isSubmitting}
            onChange={(e) => update("lastName", e.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "estimate-last-name-error" : undefined}
          />
          <FieldError id="estimate-last-name-error" message={errors.lastName} />
        </div>
      </div>

      <fieldset className="space-y-3 border-0 p-0">
        <legend className="mb-1.5 font-sans text-sm font-semibold text-gray-800">
          Address<span className="ml-0.5 text-releather-orange">*</span>
        </legend>
        <div>
          <input
            id="estimate-address"
            type="text"
            autoComplete="street-address"
            required
            placeholder="Street address"
            value={values.address.address}
            disabled={isSubmitting}
            onChange={(e) => updateAddress("address", e.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? "estimate-address-error" : undefined}
          />
          <FieldError id="estimate-address-error" message={errors.address} />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <input
              id="estimate-city"
              type="text"
              autoComplete="address-level2"
              required
              placeholder="City"
              value={values.address.city}
              disabled={isSubmitting}
              onChange={(e) => updateAddress("city", e.target.value)}
              className={inputClassName}
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? "estimate-city-error" : undefined}
            />
            <FieldError id="estimate-city-error" message={errors.city} />
          </div>
          <div>
            <input
              id="estimate-state"
              type="text"
              autoComplete="address-level1"
              required
              placeholder="State"
              value={values.address.state}
              disabled={isSubmitting}
              onChange={(e) => updateAddress("state", e.target.value)}
              className={inputClassName}
              aria-invalid={Boolean(errors.state)}
              aria-describedby={errors.state ? "estimate-state-error" : undefined}
            />
            <FieldError id="estimate-state-error" message={errors.state} />
          </div>
          <div>
            <input
              id="estimate-zip"
              type="text"
              autoComplete="postal-code"
              required
              placeholder="ZIP"
              value={values.address.zipCode}
              disabled={isSubmitting}
              onChange={(e) => updateAddress("zipCode", e.target.value)}
              className={inputClassName}
              aria-invalid={Boolean(errors.zipCode)}
              aria-describedby={errors.zipCode ? "estimate-zip-error" : undefined}
            />
            <FieldError id="estimate-zip-error" message={errors.zipCode} />
          </div>
        </div>
        <input type="hidden" name="country" value={values.address.country} />
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="estimate-email" required>
            Email
          </FieldLabel>
          <input
            id="estimate-email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            disabled={isSubmitting}
            onChange={(e) => update("email", e.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "estimate-email-error" : undefined}
          />
          <FieldError id="estimate-email-error" message={errors.email} />
        </div>
        <div>
          <FieldLabel htmlFor="estimate-phone" required>
            Phone Number
          </FieldLabel>
          <input
            id="estimate-phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            disabled={isSubmitting}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "estimate-phone-error" : undefined}
          />
          <FieldError id="estimate-phone-error" message={errors.phone} />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="estimate-service" required>
          What leather service are you interested in?
        </FieldLabel>
        <select
          id="estimate-service"
          required
          value={values.service}
          disabled={isSubmitting}
          onChange={(e) => {
            update("service", e.target.value);
            if (!showEstimateColorSelection(e.target.value)) {
              update("colorSelection", null);
            }
          }}
          className={inputClassName}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "estimate-service-error" : undefined}
        >
          <option value="">Select a service</option>
          {ESTIMATE_SERVICE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FieldError id="estimate-service-error" message={errors.service} />
      </div>

      <fieldset className="border-0 p-0">
        <legend className="mb-2 font-sans text-sm font-semibold text-gray-800">
          What type of leather item?<span className="ml-0.5 text-releather-orange">*</span>
        </legend>
        <div
          className="grid grid-cols-2 gap-2 sm:grid-cols-3"
          role="group"
          aria-label="Leather item types"
        >
          {ESTIMATE_ITEM_TYPE_OPTIONS.map((option) => {
            const selected = values.itemTypes.includes(option.value);
            const inputId = `estimate-item-${option.id}`;

            return (
              <label
                key={option.id}
                htmlFor={inputId}
                className={`cursor-pointer border-2 border-black transition ${
                  selected
                    ? "bg-releather-orange"
                    : "bg-white hover:bg-gray-50"
                } ${isSubmitting ? "pointer-events-none opacity-60" : ""}`}
              >
                <input
                  id={inputId}
                  type="checkbox"
                  className="sr-only"
                  checked={selected}
                  disabled={isSubmitting}
                  onChange={() => toggleItemType(option.value)}
                />
                <Image
                  unoptimized
                  src={option.imageUrl}
                  alt=""
                  width={160}
                  height={160}
                  className="aspect-square w-full object-cover"
                />
                <span className="block border-t-2 border-black px-1 py-1.5 text-center font-sans text-[11px] font-semibold leading-tight text-black sm:text-xs">
                  {option.label}
                </span>
              </label>
            );
          })}
        </div>
        <FieldError message={errors.itemTypes} />
      </fieldset>

      {showColor ? (
        <fieldset className="border-0 p-0">
          <legend className="mb-2 font-sans text-sm font-semibold text-gray-800">
            Color Selection<span className="ml-0.5 text-releather-orange">*</span>
          </legend>
          <div
            className="grid grid-cols-2 gap-2 sm:grid-cols-4"
            role="radiogroup"
            aria-label="Color selection"
          >
            {ESTIMATE_COLOR_OPTIONS.map((option) => {
              const selected = values.colorSelection === option.value;
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
                    name="estimate-color"
                    value={option.value}
                    className="sr-only"
                    checked={selected}
                    disabled={isSubmitting}
                    onChange={() => update("colorSelection", option.value)}
                  />
                  <Image
                    unoptimized
                    src={option.imageUrl}
                    alt=""
                    width={120}
                    height={120}
                    className="aspect-square w-full object-cover"
                  />
                  <span className="block border-t-2 border-black px-1 py-1.5 text-center font-sans text-[11px] font-semibold leading-tight text-black sm:text-xs">
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
          <FieldError message={errors.colorSelection} />
        </fieldset>
      ) : null}

      {showDetachable ? (
        <fieldset className="border-0 p-0">
          <legend className="mb-2 font-sans text-sm font-semibold text-gray-800">
            Are the seat cushions detachable or fixed to the furniture?
            <span className="ml-0.5 text-releather-orange">*</span>
          </legend>
          <div className="grid gap-2 sm:grid-cols-2" role="radiogroup">
            {ESTIMATE_DETACHABLE_OPTIONS.map((option) => {
              const selected = values.detachableFixed === option.value;
              return (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center gap-2 border-2 border-black px-3 py-2 font-sans text-sm font-semibold transition ${
                    selected
                      ? "bg-releather-orange text-black"
                      : "bg-white text-black hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="estimate-detachable"
                    value={option.value}
                    className="sr-only"
                    checked={selected}
                    disabled={isSubmitting}
                    onChange={() => update("detachableFixed", option.value)}
                  />
                  {option.label}
                </label>
              );
            })}
          </div>
          <FieldError message={errors.detachableFixed} />
        </fieldset>
      ) : null}

      {showSofa || showChair || showCushion ? (
        <div className="grid gap-4 sm:grid-cols-3">
          {showSofa ? (
            <div>
              <FieldLabel htmlFor="estimate-sofa-count">How many sofas?</FieldLabel>
              <select
                id="estimate-sofa-count"
                value={values.sofaCount}
                disabled={isSubmitting}
                onChange={(e) => update("sofaCount", e.target.value)}
                className={inputClassName}
              >
                {ESTIMATE_COUNT_OPTIONS.map((option) => (
                  <option key={`sofa-${option}`} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {showChair ? (
            <div>
              <FieldLabel htmlFor="estimate-chair-count">How many chairs?</FieldLabel>
              <select
                id="estimate-chair-count"
                value={values.chairCount}
                disabled={isSubmitting}
                onChange={(e) => update("chairCount", e.target.value)}
                className={inputClassName}
              >
                {ESTIMATE_COUNT_OPTIONS.map((option) => (
                  <option key={`chair-${option}`} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {showCushion ? (
            <div>
              <FieldLabel htmlFor="estimate-cushion-count">How many cushions?</FieldLabel>
              <select
                id="estimate-cushion-count"
                value={values.cushionCount}
                disabled={isSubmitting}
                onChange={(e) => update("cushionCount", e.target.value)}
                className={inputClassName}
              >
                <option value="">Select</option>
                {ESTIMATE_COUNT_OPTIONS.map((option) => (
                  <option key={`cushion-${option}`} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
      ) : null}

      <ToggleSwitch
        id="estimate-attach-photos"
        checked={values.attachPhotos}
        onChange={(checked) => {
          update("attachPhotos", checked);
          if (!checked) setFilesByField({});
        }}
        label="Attach Photos"
        caption="to help us prepare your quote."
        disabled={isSubmitting}
      />

      {values.attachPhotos ? (
        <div className="space-y-3 border-2 border-black bg-gray-50 p-4">
          <p className="font-sans text-sm font-semibold text-gray-800">
            Upload photos ({totalSelectedFiles} selected)
          </p>
          {ESTIMATE_FILE_UPLOAD_FIELD_IDS.map((fieldId) => {
            const selectedFiles = filesByField[fieldId] ?? [];
            return (
              <div key={fieldId}>
                <FieldLabel htmlFor={`estimate-file-${fieldId}`}>
                  {FILE_UPLOAD_LABELS[fieldId]}
                </FieldLabel>
                <input
                  id={`estimate-file-${fieldId}`}
                  type="file"
                  multiple
                  disabled={isSubmitting}
                  accept="image/*,.pdf,.heic,.heif"
                  onChange={(e) => handleFilesChange(fieldId, e.target.files)}
                  className="block w-full font-sans text-sm text-gray-800 file:mr-3 file:border-2 file:border-black file:bg-white file:px-3 file:py-1.5 file:font-sans file:text-sm file:font-semibold file:text-black hover:file:bg-gray-100"
                />
                {selectedFiles.length > 0 ? (
                  <p className="mt-1 font-sans text-xs text-gray-600">
                    {selectedFiles.map((file) => file.name).join(", ")}
                  </p>
                ) : null}
              </div>
            );
          })}
          <FieldError message={errors.files} />
        </div>
      ) : null}

      <ToggleSwitch
        id="estimate-add-details"
        checked={values.addDetails}
        onChange={(checked) => update("addDetails", checked)}
        label="Add Details"
        caption="on the issue or specify requests."
        disabled={isSubmitting}
      />

      {values.addDetails ? (
        <div>
          <FieldLabel htmlFor="estimate-details">Share further details:</FieldLabel>
          <textarea
            id="estimate-details"
            rows={4}
            value={values.detailsText}
            disabled={isSubmitting}
            onChange={(e) => update("detailsText", e.target.value)}
            className={`${inputClassName} min-h-[6rem] resize-y`}
            aria-invalid={Boolean(errors.detailsText)}
            aria-describedby={errors.detailsText ? "estimate-details-error" : undefined}
          />
          <FieldError id="estimate-details-error" message={errors.detailsText} />
        </div>
      ) : null}

      <label className="flex cursor-pointer items-start gap-3 font-sans text-sm text-gray-800">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 border-2 border-black accent-releather-orange"
          checked={values.mailingList}
          disabled={isSubmitting}
          onChange={(e) => update("mailingList", e.target.checked)}
        />
        <span>
          <span className="font-semibold">Sign up to our leather care mailing list!</span>
          <span className="mt-0.5 block text-xs text-gray-600">
            {ESTIMATE_MAILING_LIST_VALUE}
          </span>
        </span>
      </label>

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
