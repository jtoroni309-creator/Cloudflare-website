"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import PartnerGrid from "@/components/sections/PartnerGrid";
import { varBenefits } from "@/data/services";

export default function PartnershipsPage() {
  return (
    <>
      <Hero
        badge="Partnerships & VAR"
        headline="Your single point of accountability across a broad technology ecosystem."
        subheadline="As a Value-Added Reseller, Toroni & Company doesn't just sell products — we source, evaluate, procure, implement, and manage solutions so you get the right technology at the right price with the right support."
        primaryCta={{ label: "Discuss Your Technology Needs", href: "/contact" }}
      />

      {/* What is a VAR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3 block">Value-Added Reseller</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                More than a vendor. A technology partner.
              </h2>
              <p className="mt-6 text-charcoal-500 leading-relaxed">
                A Value-Added Reseller (VAR) is a company that partners with technology manufacturers and publishers to deliver solutions to businesses — with added expertise, support, and services that go far beyond the transaction.
              </p>
              <p className="mt-4 text-charcoal-500 leading-relaxed">
                When you work with Toroni & Company as your VAR, you get a trusted advisor who understands your business, evaluates options objectively, and ensures every technology investment aligns with your goals and delivers measurable value.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-charcoal-50 rounded-2xl p-10 border border-charcoal-100"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-6">Why work with a VAR?</h3>
              <ul className="space-y-4">
                {[
                  "Access to competitive pricing and volume discounts",
                  "Expert guidance on product selection and licensing",
                  "Reduced risk through vendor-agnostic recommendations",
                  "Streamlined procurement across multiple vendors",
                  "Ongoing support beyond the initial purchase",
                  "A single trusted partner for your entire technology stack",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VAR Benefits */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Help"
            title="The Toroni & Company VAR advantage"
            description="From initial sourcing through lifecycle management, we provide end-to-end value at every stage of your technology investment."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-charcoal-100 rounded-2xl p-8 hover:shadow-lg hover:border-navy-200 transition-all duration-300"
              >
                <div className="text-xs font-bold text-accent-600 mb-3">0{i + 1}</div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Ecosystem"
            title="A broad network of technology partnerships"
            description="We maintain partnerships across every major technology category so you always have access to the right solutions for your business."
          />
          <div className="mt-16">
            <PartnerGrid />
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Let's find the right technology for your business."
        description="Tell us about your current challenges and goals, and we'll help you evaluate, source, and implement the right solutions."
        ctaLabel="Discuss Your Needs"
      />
    </>
  );
}
