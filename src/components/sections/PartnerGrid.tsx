"use client";

import { motion } from "framer-motion";
import { partners, partnerCategories } from "@/data/partners";

export default function PartnerGrid() {
  return (
    <div className="space-y-16">
      {partnerCategories.map((category) => {
        const categoryPartners = partners.filter((p) => p.category === category);
        if (categoryPartners.length === 0) return null;
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-6">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categoryPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center h-20 bg-charcoal-50 border border-charcoal-100 rounded-xl text-sm font-medium text-charcoal-600 hover:border-navy-200 hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
