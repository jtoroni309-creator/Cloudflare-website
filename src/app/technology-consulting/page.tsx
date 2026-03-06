"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import ServiceCard from "@/components/sections/ServiceCard";
import CtaBanner from "@/components/sections/CtaBanner";
import { techServices } from "@/data/services";

export default function TechConsultingPage() {
  return (
    <>
      <Hero
        badge="Technology Implementation & Consulting"
        headline="From strategy to implementation — and everything in between."
        subheadline="Many firms stop at recommendations. Toroni & Company helps clients move from strategy to implementation and ongoing support — delivering real results, not just reports."
        primaryCta={{ label: "Explore Solutions", href: "/contact" }}
      />

      {/* Core Message */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3 block">Our Difference</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                Not just a consultant. Not just a reseller. A true implementation partner.
              </h2>
              <p className="mt-6 text-charcoal-500 leading-relaxed">
                Most consulting firms hand you a strategy deck and walk away. Most resellers sell you a product and move on. Toroni & Company does both — and stays with you through implementation, optimization, and beyond.
              </p>
              <p className="mt-4 text-charcoal-500 leading-relaxed">
                We help businesses evaluate their technology landscape, select the right solutions, lead implementation projects, coordinate vendors, manage change, and provide ongoing support. From day one through day one thousand, we&apos;re your partner.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy-950 rounded-2xl p-10 text-white"
            >
              <h3 className="text-xl font-bold mb-6">The consulting gap we close</h3>
              <div className="space-y-6">
                {[
                  { before: "Strategy reports that collect dust", after: "Actionable plans with hands-on implementation" },
                  { before: "Vendor recommendations without follow-through", after: "End-to-end vendor coordination and project management" },
                  { before: "Technology purchases without adoption", after: "Change management and post-implementation optimization" },
                ].map((item) => (
                  <div key={item.before}>
                    <div className="flex items-start gap-2 text-navy-300 text-sm line-through opacity-60">
                      {item.before}
                    </div>
                    <div className="flex items-start gap-2 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-end technology consulting and implementation"
            description="Every engagement is tailored to your business. Here's how we help clients plan, implement, and optimize technology."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How we work"
            description="A proven approach that moves from understanding to action to results."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "We assess your current technology, processes, and goals to understand where you are and where you want to go." },
              { step: "02", title: "Plan", desc: "We build a roadmap and business case for the right solutions, timelines, and budgets." },
              { step: "03", title: "Implement", desc: "We lead the implementation — configuring systems, coordinating vendors, and managing the project end-to-end." },
              { step: "04", title: "Optimize", desc: "After go-live, we tune performance, train users, and provide ongoing support to maximize your investment." },
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-navy-100 mb-4">{phase.step}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{phase.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8">
                    <ArrowRight className="w-5 h-5 text-charcoal-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Ready to move from strategy to execution?"
        description="Let's discuss your technology goals and build a plan to get there — together."
        ctaLabel="Explore Solutions"
      />
    </>
  );
}
