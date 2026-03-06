import Link from "next/link";
import { siteConfig } from "@/data/metadata";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Partnerships & VAR", href: "/partnerships" },
    { label: "Managed IT Services", href: "/managed-it-services" },
    { label: "Fractional CFO", href: "/fractional-cfo" },
    { label: "Technology Consulting", href: "/technology-consulting" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Ready to bridge the gap between strategy and execution?</h3>
              <p className="text-navy-300 mt-2">Let&apos;s discuss how Toroni &amp; Company can help your business grow.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-100 transition-colors shrink-0"
            >
              Talk to an Advisor
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold">Toroni & Company</div>
            <p className="mt-4 text-sm text-navy-300 leading-relaxed">
              Technology solutions, managed services, and strategic business guidance — delivered by a partner who helps you plan and implement, not just advise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-400 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-navy-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-400 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-navy-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-400 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-navy-200">
                <Mail className="w-4 h-4 mt-0.5 text-navy-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-200">
                <Phone className="w-4 h-4 mt-0.5 text-navy-400 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-200">
                <MapPin className="w-4 h-4 mt-0.5 text-navy-400 shrink-0" />
                <span>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-400">
            &copy; {new Date().getFullYear()} Toroni &amp; Company. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-navy-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs text-navy-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
