"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, DollarSign, Target, LineChart, FileText, Users, BarChart3, Lightbulb, ShieldCheck } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import ServiceCard from "@/components/sections/ServiceCard";
import CtaBanner from "@/components/sections/CtaBanner";
import { cfoServices } from "@/data/services";

const icons = [TrendingUp, PieChart, DollarSign, LineChart, BarChart3, Target, Lightbulb, FileText, Users, ShieldCheck];

export default function FractionalCfoPage() {
  return (
    <>
      <Hero
        badge="Fractional CFO Services"
        headline="Executive-level financial leadership — without the full-time cost."
        subheadline="Toroni & Company provides fractional CFO services that give growing businesses access to strategic financial insight, planning, and operational improvement when they need it most."
        primaryCta={{ label: "Talk to an Advisor", href: "/contact" }}
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                Strategic finance for growing businesses
              </h2>
              <p className="mt-6 text-charcoal-500 leading-relaxed">
                Not every company needs — or can afford — a full-time CFO. But every growing business needs strategic financial leadership. Our fractional CFO services give you the insight, discipline, and planning capabilities of an experienced finance executive on a flexible, part-time basis.
              </p>
              <p className="mt-4 text-charcoal-500 leading-relaxed">
                As part of the broader Toroni & Company platform, our financial consulting connects directly to our technology and operations expertise — so your financial strategy is always aligned with your technology investments and business goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CFO Services"
            title="Comprehensive financial leadership"
            description="From day-to-day financial operations to high-level strategic planning, our fractional CFO services cover the full spectrum."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cfoServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={icons[i % icons.length]}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Connected Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3 block">Connected Approach</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                Finance + Technology + Operations
              </h2>
              <p className="mt-6 text-charcoal-500 leading-relaxed">
                What makes Toroni & Company different from a standalone fractional CFO provider is our cross-functional strength. We don&apos;t just look at the numbers — we connect financial strategy to your technology investments and operational processes.
              </p>
              <p className="mt-4 text-charcoal-500 leading-relaxed">
                That means your CFO engagement isn&apos;t siloed. It informs and is informed by your IT strategy, your ERP implementation, your cloud migration, and your operational efficiency initiatives. The result is a more holistic, more effective approach to growing your business.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {[
                { label: "Technology Strategy", desc: "IT investments aligned with financial goals" },
                { label: "Financial Operations", desc: "Systems and processes that drive efficiency" },
                { label: "Business Intelligence", desc: "Data-driven insights across all functions" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="bg-charcoal-50 border border-charcoal-100 rounded-xl p-6 hover:bg-white hover:shadow-sm hover:border-navy-200 transition-all"
                >
                  <div className="text-xs font-bold text-accent-600 mb-1">0{i + 1}</div>
                  <div className="font-semibold text-navy-900">{item.label}</div>
                  <div className="text-sm text-charcoal-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Get the financial leadership your business needs."
        description="Let's discuss how a fractional CFO engagement can strengthen your financial strategy and support your growth."
        ctaLabel="Talk to an Advisor"
      />
    </>
  );
}
