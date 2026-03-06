"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  headline: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CtaBanner({
  headline,
  description,
  ctaLabel = "Schedule a Consultation",
  ctaHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {headline}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-100 transition-colors text-sm"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
