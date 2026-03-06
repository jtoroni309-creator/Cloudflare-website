"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  index?: number;
}

export default function ServiceCard({ title, description, icon: Icon, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-white border border-charcoal-100 rounded-2xl p-8 hover:shadow-lg hover:border-navy-200 transition-all duration-300"
    >
      {Icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-navy-50 text-navy-700 mb-5 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-navy-900 mb-2">{title}</h3>
      <p className="text-sm text-charcoal-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
