"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}
    >
      {eyebrow && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-[0.15em] mb-3 ${light ? "text-accent-400" : "text-accent-600"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-navy-200" : "text-charcoal-500"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
