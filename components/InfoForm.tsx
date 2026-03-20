"use client";

import { useState, useRef, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  position?: string;
  file?: string;
}

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export default function InfoForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone.trim() && !/^[\d\s()+-]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      newErrors.file = `File must be under ${MAX_FILE_SIZE_MB}MB`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("company", formData.company);
      body.append("position", formData.position);
      if (file) body.append("businessCard", file);

      const response = await fetch("/api/info", {
        method: "POST",
        body,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
    } catch {
      alert(
        "Failed to submit. Please try again or email us directly at info@deleterisk.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
    if (errors.file) {
      setErrors((prev) => ({ ...prev, file: undefined }));
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="w-20 h-20 bg-shield-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="heading-2 text-brand-500 mb-4">Thank You!</h2>
          <p className="body-large text-slate-600">
            Thank you for your interest, we will be in touch.
          </p>
        </div>
      </div>
    );
  }

  const inputClasses = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border ${
      errors[field]
        ? "border-red-500 focus:ring-red-500"
        : "border-slate-300 focus:ring-brand-500"
    } focus:outline-none focus:ring-2 focus:border-transparent transition-colors`;

  return (
    <div className="max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className={inputClasses("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.smith@company.com"
              className={inputClasses("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className={inputClasses("phone")}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Company <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className={inputClasses("company")}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
            />
            {errors.company && (
              <p id="company-error" className="mt-1 text-sm text-red-600">
                {errors.company}
              </p>
            )}
          </div>

          {/* Position */}
          <div className="md:col-span-2">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Your Title / Role"
              className={inputClasses("position")}
              aria-invalid={!!errors.position}
              aria-describedby={errors.position ? "position-error" : undefined}
            />
            {errors.position && (
              <p id="position-error" className="mt-1 text-sm text-red-600">
                {errors.position}
              </p>
            )}
          </div>

          {/* Business Card Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Business Card
            </label>
            {file ? (
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-300 bg-frost-50">
                <svg
                  className="w-5 h-5 text-shield-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                <span className="text-sm text-slate-700 truncate flex-1">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={removeFile}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                  aria-label="Remove file"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <label
                htmlFor="businessCard"
                className="flex flex-col items-center justify-center px-4 py-6 rounded-lg border-2 border-dashed border-slate-300 hover:border-shield-400 cursor-pointer transition-colors bg-white"
              >
                <svg
                  className="w-8 h-8 text-slate-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="text-sm text-slate-600">
                  Click to upload a file
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  Max {MAX_FILE_SIZE_MB}MB
                </span>
              </label>
            )}
            <input
              ref={fileInputRef}
              type="file"
              id="businessCard"
              onChange={handleFileChange}
              className="sr-only"
              accept="image/*,.pdf,.vcf"
            />
            {errors.file && (
              <p className="mt-1 text-sm text-red-600">{errors.file}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-500 text-center">
          Your information is confidential. We&apos;ll use it only to respond to
          your inquiry.
        </p>
      </form>
    </div>
  );
}
