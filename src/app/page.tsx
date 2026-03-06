"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Monitor, BarChart3, Lightbulb, Handshake, Cog } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import CtaBanner from "@/components/sections/CtaBanner";

const pillars = [
  {
    icon: Handshake,
    title: "Partnerships & VAR",
    description: "Access the right technology through our broad ecosystem of vendor partnerships. We source, procure, and manage solutions on your behalf.",
    href: "/partnerships",
  },
  {
    icon: Shield,
    title: "Managed IT Services",
    description: "Comprehensive IT management including 24/7 monitoring, cybersecurity, cloud services, and strategic planning — so you can focus on your business.",
    href: "/managed-it-services",
  },
  {
    icon: BarChart3,
    title: "Fractional CFO",
    description: "Executive-level financial leadership without the full-time cost. Strategic planning, forecasting, and financial operations improvement.",
    href: "/fractional-cfo",
  },
];

const differentiators = [
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "We start by understanding your business goals and building a technology and financial roadmap to get you there.",
  },
  {
    icon: Cog,
    title: "Implementation & Execution",
    description: "We don't stop at recommendations. Our team rolls up their sleeves and helps you deploy, configure, and optimize solutions.",
  },
  {
    icon: Monitor,
    title: "Ongoing Management",
    description: "After go-live, we provide managed services, support, and continuous improvement to ensure long-term value.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Consulting & Technology"
        headline="We bridge the gap between consulting and execution."
        subheadline="Technology solutions, managed services, and strategic business guidance — delivered by a partner who helps you plan and implement, not just advise."
        primaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Services", href: "#services" }}
      />

      {/* Service Pillars */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Three pillars of business performance"
            description="Toroni & Company combines technology solutions, managed services, and strategic consulting under one roof — giving you a single partner for planning, implementation, and ongoing support."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={pillar.href}
                  className="group block bg-white border border-charcoal-100 rounded-2xl p-10 hover:shadow-xl hover:border-navy-200 transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-navy-50 text-navy-700 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{pillar.title}</h3>
                  <p className="text-charcoal-500 leading-relaxed mb-6">{pillar.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 group-hover:text-navy-900 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Approach"
            title="What sets us apart"
            description="Many firms stop at recommendations. Toroni & Company helps clients move from strategy to implementation and ongoing support — closing the gap between advice and results."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-10 border border-charcoal-100 h-full">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-navy-900 text-white mb-5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-charcoal-500 leading-relaxed">{item.description}</p>
                </div>
                {i < differentiators.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-charcoal-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3 block">End-to-End Support</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                We help businesses evaluate, procure, implement, optimize, and support technology.
              </h2>
              <p className="mt-6 text-charcoal-500 leading-relaxed">
                From initial assessment through long-term management, Toroni & Company provides a continuum of services that ensures your technology investments deliver real business value. Our cross-functional expertise across IT, operations, and finance means we see the full picture — not just the technology.
              </p>
              <Link
                href="/technology-consulting"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors text-sm"
              >
                Explore Our Approach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Evaluate", desc: "Assess your current landscape" },
                { label: "Procure", desc: "Source the right solutions" },
                { label: "Implement", desc: "Deploy and configure" },
                { label: "Optimize", desc: "Tune for performance" },
                { label: "Support", desc: "Manage and maintain" },
                { label: "Advise", desc: "Strategic guidance" },
              ].map((step, i) => (
                <div
                  key={step.label}
                  className="bg-charcoal-50 border border-charcoal-100 rounded-xl p-6 hover:bg-white hover:shadow-sm hover:border-navy-200 transition-all duration-200"
                >
                  <div className="text-xs font-semibold text-accent-600 mb-1">0{i + 1}</div>
                  <div className="font-semibold text-navy-900">{step.label}</div>
                  <div className="text-xs text-charcoal-400 mt-1">{step.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-4xl text-navy-400 mb-8">&ldquo;</div>
            <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed max-w-3xl mx-auto">
              Toroni & Company transformed how we think about technology. They didn&apos;t just recommend solutions — they implemented them and continue to manage our entire IT environment.
            </blockquote>
            <div className="mt-8">
              <div className="text-white font-semibold">Client Testimonial</div>
              <div className="text-navy-300 text-sm">Mid-Market Business Leader</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Placeholder */}
      <section className="py-16 bg-charcoal-50 border-y border-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-charcoal-400 mb-8">
            Trusted Technology Partnerships
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
            {["Microsoft", "Cisco", "Dell", "CrowdStrike", "Veeam", "Sage Intacct"].map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-16 bg-white border border-charcoal-100 rounded-lg text-xs font-medium text-charcoal-400"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Let's discuss your technology and business needs."
        description="Whether you need managed IT services, strategic consulting, or hands-on implementation support, we're here to help."
        ctaLabel="Talk to an Advisor"
      />
    </>
  );
}
