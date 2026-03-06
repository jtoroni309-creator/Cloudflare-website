"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-navy-900" : "text-white"
              )}>
                Toroni & Company
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-medium transition-colors",
                isScrolled ? "text-navy-500" : "text-white/70"
              )}>
                Consulting & Technology
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      isScrolled
                        ? "text-charcoal-700 hover:text-navy-900 hover:bg-navy-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-charcoal-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block px-4 py-3 rounded-lg transition-colors",
                                pathname === child.href
                                  ? "bg-navy-50 text-navy-900"
                                  : "hover:bg-charcoal-50 text-charcoal-700"
                              )}
                            >
                              <div className="text-sm font-medium">{child.label}</div>
                              <div className="text-xs text-charcoal-400 mt-0.5">{child.description}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? isScrolled ? "text-navy-900 bg-navy-50" : "text-white bg-white/15"
                      : isScrolled
                        ? "text-charcoal-700 hover:text-navy-900 hover:bg-navy-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className={cn(
                "ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all",
                isScrolled
                  ? "bg-navy-900 text-white hover:bg-navy-800"
                  : "bg-white text-navy-900 hover:bg-white/90"
              )}
            >
              Schedule a Consultation
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-navy-900" : "text-white"
            )}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-charcoal-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm rounded-lg",
                          pathname === child.href
                            ? "bg-navy-50 text-navy-900 font-medium"
                            : "text-charcoal-600 hover:bg-charcoal-50"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-2.5 text-sm rounded-lg",
                      pathname === item.href
                        ? "bg-navy-50 text-navy-900 font-medium"
                        : "text-charcoal-600 hover:bg-charcoal-50"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="block mt-4 px-4 py-3 bg-navy-900 text-white text-sm font-semibold text-center rounded-lg"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
