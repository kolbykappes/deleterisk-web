import type { Metadata } from "next";
import Image from "next/image";
import InfoForm from "@/components/InfoForm";

export const metadata: Metadata = {
  title: "Get In Touch - Delete Risk",
  description:
    "Contact Delete Risk to discuss how we can help protect your operations with rapid response and independent loss control.",
};

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-frost-50 to-white">
      <div className="section-container py-10 md:py-16">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.webp"
            alt="Delete Risk"
            width={200}
            height={60}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </div>

        {/* Message */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="heading-2 text-brand-500 mb-4">
            Protect Your Operations. Let&apos;s Talk.
          </h1>
          <p className="body-large text-slate-600">
            Whether you&apos;re preparing for potential risks or responding to
            an active crisis, Delete Risk brings the expertise and rapid
            response your facility needs. Get in touch to discuss how we can
            help protect your operations.
          </p>
        </div>

        {/* Form */}
        <InfoForm />
      </div>
    </main>
  );
}
