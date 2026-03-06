"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Building2, Briefcase, GraduationCap, Heart, Factory } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import { mspServiceCategories } from "@/data/services";

const benefits = [
  { title: "Predictable IT Costs", description: "Fixed monthly pricing replaces unpredictable break-fix expenses, making budgeting easier." },
  { title: "Proactive, Not Reactive", description: "We monitor and maintain your systems 24/7 to prevent problems before they impact your business." },
  { title: "Access to Expertise", description: "Get an entire team of IT professionals with diverse skills — without the overhead of building one in-house." },
  { title: "Stronger Security Posture", description: "Layered cybersecurity services protect your data, systems, and reputation around the clock." },
  { title: "Focus on Your Business", description: "Offload the complexity of IT management so your team can focus on what they do best." },
  { title: "Scalable Support", description: "Our services scale with your business, so your IT infrastructure grows when you do." },
];

const industries = [
  { icon: Building2, name: "Professional Services" },
  { icon: Briefcase, name: "Financial Services" },
  { icon: GraduationCap, name: "Education" },
  { icon: Heart, name: "Healthcare" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Briefcase, name: "Nonprofit" },
];

export default function MspPage() {
  return (
    <>
      <Hero
        badge="Managed IT Services"
        headline="IT management that lets you focus on your business."
        subheadline="Comprehensive managed services including 24/7 monitoring, cybersecurity, cloud management, help desk support, and strategic IT planning — all from a single trusted partner."
        primaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      {/* Why Outsource */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Managed Services"
            title="Reliable IT without the complexity"
            description="Growing businesses need enterprise-grade IT support, but building an internal team is expensive and time-consuming. Managed services give you access to a full IT department — monitoring, security, support, and strategy — at a fraction of the cost."
          />
        </div>
      </section>

      {/* Service Catalog */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Service Catalog"
            title="Comprehensive IT services under one roof"
            description="Our managed services cover every aspect of your technology environment, from day-to-day support to long-term strategy."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mspServiceCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-charcoal-100 rounded-2xl p-8 hover:shadow-lg hover:border-navy-200 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-navy-50 text-navy-700 mb-5">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-4">{category.title}</h3>
                <ul className="space-y-2.5">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Benefits"
            title="The advantages of managed IT"
            description="Partnering with Toroni & Company for managed services means more than just keeping the lights on."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-charcoal-100 rounded-2xl p-8 hover:shadow-sm transition-shadow"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Who We Serve"
            title="Industries and businesses we support"
            description="Our managed IT services are tailored to the needs of growing businesses across a range of industries."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center justify-center bg-white border border-charcoal-100 rounded-xl p-6 text-center hover:shadow-sm hover:border-navy-200 transition-all"
              >
                <industry.icon className="w-8 h-8 text-navy-700 mb-3" />
                <span className="text-sm font-medium text-charcoal-700">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Ready for IT management you can rely on?"
        description="Let's discuss how our managed services can reduce complexity, strengthen security, and free your team to focus on what matters."
      />
    </>
  );
}
