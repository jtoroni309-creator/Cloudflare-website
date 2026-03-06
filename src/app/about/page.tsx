"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Lightbulb, Handshake } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import CtaBanner from "@/components/sections/CtaBanner";

const values = [
  { icon: Handshake, title: "Partnership Over Transactions", description: "We build long-term relationships grounded in trust, transparency, and shared goals — not one-time sales." },
  { icon: Lightbulb, title: "Practical Over Theoretical", description: "We deliver actionable solutions, not slide decks. Every recommendation comes with a clear path to implementation." },
  { icon: Target, title: "Outcomes Over Activity", description: "We measure success by business results — not hours billed. Our focus is always on delivering tangible value." },
  { icon: Users, title: "Cross-Functional Thinking", description: "We connect technology, finance, and operations to give clients a holistic view of their business." },
  { icon: Heart, title: "Client-First Always", description: "We recommend what's right for the client, even when that means less revenue for us. Trust is everything." },
  { icon: Eye, title: "Transparency & Accountability", description: "We communicate clearly, set honest expectations, and own our commitments from start to finish." },
];

const team = [
  { name: "Leadership Name", role: "Managing Partner", bio: "With over 20 years of experience in technology consulting and business advisory, our managing partner leads Toroni & Company's vision and client relationships." },
  { name: "Leadership Name", role: "Director of Technology", bio: "A seasoned technologist with deep expertise in enterprise systems, cloud architecture, and managed services delivery." },
  { name: "Leadership Name", role: "Director of Finance", bio: "A CPA and finance executive with extensive experience in FP&A, strategic planning, and fractional CFO engagements." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About Us"
        headline="Strategy meets execution. That's who we are."
        subheadline="Toroni & Company was founded on a simple belief: businesses deserve a partner who doesn't just advise — but helps them implement, manage, and grow."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
      />

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600 mb-3 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                Built to bridge the gap
              </h2>
              <div className="mt-8 space-y-4 text-charcoal-500 leading-relaxed">
                <p>
                  Too many businesses have experienced the frustration of hiring a consultant who delivers a binder of recommendations and walks away — leaving the hard work of implementation to someone else. Or purchasing technology from a reseller who disappears after the invoice is paid.
                </p>
                <p>
                  Toroni & Company was built to eliminate that gap. We combine the strategic insight of a consulting firm, the product expertise of a value-added reseller, the operational reliability of a managed services provider, and the financial acumen of a CFO — all under one roof.
                </p>
                <p>
                  The result is a partner who understands the full picture of your business and can help you plan, implement, manage, and optimize across technology, operations, and finance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-charcoal-100 rounded-2xl p-10"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-navy-900 text-white mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Our Mission</h3>
              <p className="text-charcoal-500 leading-relaxed">
                To empower growing businesses with the technology solutions, operational support, and financial insight they need to thrive — delivered through trusted, long-term partnerships built on execution, not just advice.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-charcoal-100 rounded-2xl p-10"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-navy-900 text-white mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Our Approach</h3>
              <p className="text-charcoal-500 leading-relaxed">
                We start with understanding — not selling. Every engagement begins with a deep dive into your business, your challenges, and your goals. From there, we build a tailored plan and execute alongside you, staying accountable for results at every step.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="What we believe"
            description="These principles guide every engagement, every recommendation, and every relationship."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-charcoal-100 rounded-2xl p-8 hover:shadow-sm transition-shadow"
              >
                <value.icon className="w-8 h-8 text-navy-700 mb-4" />
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{value.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title="Our team"
            description="Experienced professionals with deep expertise across technology, finance, and operations."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-charcoal-100 rounded-2xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
                  <Users className="w-16 h-16 text-navy-400" />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
                  <div className="text-sm text-accent-600 font-medium mt-1">{member.role}</div>
                  <p className="text-sm text-charcoal-500 leading-relaxed mt-4">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Let's work together."
        description="We'd love to learn about your business and explore how Toroni & Company can help."
        ctaLabel="Get in Touch"
      />
    </>
  );
}
