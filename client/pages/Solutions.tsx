import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const suites = [
  {
    title: "Enterprise Digital Transformation Package",
    features: [
      "Legacy system modernization API layer",
      "Automated cross-department workflows",
      "Real-time enterprise resource planning",
    ],
    icon: (
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
        <rect x="0" y="4" width="32" height="20" rx="2" stroke="#9A4600" strokeWidth="1.5" fill="none"/>
        <rect x="4" y="8" width="8" height="6" rx="1" fill="#9A4600" fillOpacity="0.3"/>
        <rect x="14" y="8" width="14" height="2" rx="1" fill="#9A4600" fillOpacity="0.5"/>
        <rect x="14" y="12" width="10" height="2" rx="1" fill="#9A4600" fillOpacity="0.3"/>
        <rect x="4" y="18" width="24" height="2" rx="1" fill="#9A4600" fillOpacity="0.2"/>
        <rect x="13" y="24" width="6" height="3" fill="#9A4600" fillOpacity="0.4"/>
        <rect x="10" y="27" width="12" height="1" fill="#9A4600" fillOpacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "Government Census & Examination Solution",
    features: [
      "High-security data encryption standards",
      "Massive-scale concurrent user processing",
      "Offline data capture & sync capabilities",
    ],
    icon: (
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
        <rect x="1" y="10" width="30" height="18" rx="2" stroke="#9A4600" strokeWidth="1.5" fill="none"/>
        <path d="M8 10V6C8 3.8 9.8 2 12 2H20C22.2 2 24 3.8 24 6V10" stroke="#9A4600" strokeWidth="1.5"/>
        <rect x="6" y="14" width="8" height="6" rx="1" fill="#9A4600" fillOpacity="0.2"/>
        <rect x="18" y="14" width="8" height="6" rx="1" fill="#9A4600" fillOpacity="0.2"/>
        <rect x="6" y="22" width="20" height="2" rx="1" fill="#9A4600" fillOpacity="0.15"/>
      </svg>
    ),
  },
  {
    title: "Banking Back-Office Automation Suite",
    features: [
      "AI-driven transaction reconciliation",
      "Fraud detection & KYC automation",
      "ISO 20022 compliance framework",
    ],
    icon: (
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
        <rect x="1" y="6" width="30" height="20" rx="2" stroke="#9A4600" strokeWidth="1.5" fill="none"/>
        <rect x="1" y="6" width="30" height="6" rx="2" fill="#9A4600" fillOpacity="0.15"/>
        <rect x="4" y="16" width="6" height="4" rx="1" fill="#9A4600" fillOpacity="0.3"/>
        <rect x="12" y="16" width="16" height="2" rx="1" fill="#9A4600" fillOpacity="0.2"/>
        <rect x="12" y="20" width="10" height="2" rx="1" fill="#9A4600" fillOpacity="0.15"/>
        <circle cx="28" cy="3" r="3" fill="#9A4600" fillOpacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Healthcare Records Digitization",
    features: [
      "HIPAA-compliant cloud storage",
      "OCR for physical medical records",
      "Patient portal interoperability",
    ],
    icon: (
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
        <rect x="1" y="1" width="26" height="30" rx="2" stroke="#9A4600" strokeWidth="1.5" fill="none"/>
        <rect x="5" y="6" width="18" height="2" rx="1" fill="#9A4600" fillOpacity="0.4"/>
        <rect x="5" y="11" width="18" height="2" rx="1" fill="#9A4600" fillOpacity="0.25"/>
        <path d="M12 18V24M9 21H15" stroke="#9A4600" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Cloud-Based Intelligent Data Capture",
    features: [
      "Multi-channel ingestion (Email, PDF, Web)",
      "Neural network text recognition",
      "Elastic scaling for peak volumes",
    ],
    icon: (
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
        <path d="M24 20H8C5.8 20 4 18.2 4 16C4 14.1 5.3 12.5 7.1 12.1C7 11.7 7 11.4 7 11C7 8.2 9.2 6 12 6C13.3 6 14.5 6.5 15.4 7.3C16.1 5.4 17.9 4 20 4C22.8 4 25 6.2 25 9C25 9.1 25 9.3 25 9.4C27.3 10 29 12.1 29 14.5C29 17.5 26.8 20 24 20Z" stroke="#9A4600" strokeWidth="1.5" fill="none"/>
        <path d="M16 20V28M12 24H20" stroke="#9A4600" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "IT Staff Augmentation & Consulting",
    features: [
      "Direct access to L3 Senior Engineers",
      "Project-based agile development teams",
      "Strategic IT roadmap advisory",
    ],
    icon: (
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
        <circle cx="10" cy="8" r="5" stroke="#9A4600" strokeWidth="1.5" fill="none"/>
        <circle cx="22" cy="8" r="5" stroke="#9A4600" strokeWidth="1.5" fill="none"/>
        <path d="M1 26C1 21.6 5.1 18 10 18C12.1 18 14 18.7 15.5 19.8" stroke="#9A4600" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 26C17 21.6 19.1 18 22 18C26.9 18 31 21.6 31 26" stroke="#9A4600" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <span className="inline-block self-start bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                Enterprise Solutions
              </span>
              <h1 className="font-jakarta font-extrabold text-4xl lg:text-5xl text-brand-dark leading-tight tracking-tight">
                Innovative Solutions for{" "}
                <span className="text-brand-orange">Modern Enterprise</span>
              </h1>
              <p className="text-brand-brown text-base leading-relaxed max-w-md">
                Empowering global organizations with precision-engineered software architecture, automated workflows, and secure data infrastructure for the next generation of business efficiency.
              </p>
            </div>

            {/* Right - Dashboard visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-brand-navy shadow-2xl aspect-[4/3]">
                {/* Mock dashboard */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] to-[#0d1b2a] p-5 flex flex-col gap-3">
                  {/* Top bar */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <div className="flex-1 h-5 rounded bg-white/5 ml-2" />
                  </div>
                  {/* Chart area */}
                  <div className="flex-1 rounded-lg bg-white/5 p-4 flex flex-col gap-3">
                    <div className="flex items-end gap-1 h-20">
                      {[40,65,45,80,55,90,70,85,60,75,95,72].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{
                            height: `${h}%`,
                            background: i === 10
                              ? "#33A8C4"
                              : `rgba(51,168,196,${0.3 + (i % 3) * 0.1})`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["14.2K", "9.8K", "32.1K"].map((val, i) => (
                        <div key={i} className="bg-white/5 rounded p-2">
                          <div className="text-[#33A8C4] font-bold text-sm">{val}</div>
                          <div className="text-white/40 text-xs">metric</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 rounded bg-white/5" />
                    <div className="h-6 rounded bg-brand-orange/20" />
                  </div>
                </div>
              </div>

              {/* Uptime badge */}
              <div className="absolute -bottom-4 left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex flex-col">
                <span className="font-jakarta font-extrabold text-2xl text-brand-dark">99.9%</span>
                <span className="text-[10px] font-semibold tracking-widest text-brand-brown uppercase">Uptime Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Industry Suites */}
      <section className="py-20 bg-[#F9F9FF]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="font-jakarta font-bold text-3xl lg:text-4xl text-brand-dark tracking-tight mb-4">
              Specialized Industry Suites
            </h2>
            <p className="text-brand-brown text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
              Tailored technological frameworks designed to address the specific operational complexities of key sectors including finance, healthcare, and public administration.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suites.map((suite) => (
              <div
                key={suite.title}
                className="bg-white rounded-xl border-t-4 border-brand-orange shadow-[0_2px_12px_0_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_0_rgba(154,70,0,0.12)] transition-all duration-300 p-6 flex flex-col gap-5"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center">
                  {suite.icon}
                </div>

                {/* Title */}
                <h3 className="font-jakarta font-bold text-lg text-brand-dark leading-snug">
                  {suite.title}
                </h3>

                {/* Features */}
                <ul className="flex flex-col gap-2 flex-1">
                  {suite.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-brand-brown text-sm leading-relaxed">
                      <CheckCircle2 size={15} className="text-brand-teal flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-brand-orange text-sm font-semibold hover:gap-3 transition-all duration-200 mt-auto pt-2"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="bg-brand-navy rounded-2xl py-16 px-8 lg:px-16 text-center">
            <h2 className="font-jakarta font-extrabold text-3xl lg:text-4xl text-white tracking-tight mb-4">
              Ready to scale your technical infrastructure?
            </h2>
            <p className="text-brand-peach text-sm lg:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Join over 250 enterprise clients who rely on SKY-TEK for mission-critical architecture and digital innovation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center h-12 px-8 rounded-lg bg-brand-orange text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
            >
              Start a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
