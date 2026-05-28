import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, Settings, Users, Key, Rocket } from "lucide-react";

const solutions = [
  {
    title: "Enterprise Digital Excellence",
    desc: "Scale your cloud-native infrastructure with certified support. We deliver robust architecture audits, continuous integration pipelines, and custom API microservices.",
    icon: Rocket,
  },
  {
    title: "Strategic Consulting",
    desc: "Identify bottlenecks and plan your next five years of tech evolution. Our consulting brings in senior enterprise architects to align business goals with technical scalability.",
    icon: Users,
  },
  {
    title: "Private Key & Access Management",
    desc: "Robust IAM policies, hardware security module integrations, and tier-1 security standards tailored for highly regulated business environments.",
    icon: Key,
  },
  {
    title: "System Modernization",
    desc: "Upgrade legacy databases, rewrite outdated services in TypeScript/Express, and transition from monoliths to highly responsive microservices.",
    icon: Settings,
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-white overflow-hidden relative min-h-[220px] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(216,227,250,0.25)_0%,_transparent_70%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-16 w-full text-center">
          <div className="flex items-center gap-2 justify-center text-sm text-brand-brown mb-8">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none">
              <path d="M3.06667 4L0 0.933333L0.933333 0L4.93333 4L0.933333 8L0 7.06667L3.06667 4Z" fill="#574237"/>
            </svg>
            <span className="font-bold text-brand-orange">Solutions</span>
          </div>
          <h1 className="font-jakarta font-extrabold text-5xl lg:text-6xl text-brand-dark tracking-tight leading-tight mb-3">
            Our Solutions
          </h1>
          <div className="w-32 h-1.5 rounded-full bg-brand-orange mx-auto mb-6" />
          <p className="text-brand-brown text-base lg:text-lg max-w-xl mx-auto">
            Bespoke tech roadmaps and security strategies to power your enterprise digital transformation.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol) => (
              <div
                key={sol.title}
                className="bg-white rounded-2xl p-8 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_0_rgba(154,70,0,0.12)] transition-all duration-300 flex flex-col gap-5 border border-transparent hover:border-brand-teal/20"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                  <sol.icon size={22} className="text-brand-teal" />
                </div>
                <h3 className="font-jakarta font-bold text-2xl text-brand-dark">{sol.title}</h3>
                <p className="text-brand-brown text-sm leading-relaxed">{sol.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-brand-teal text-sm font-semibold hover:gap-3 transition-all duration-200 mt-auto"
                >
                  Request Consultation <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(51,168,196,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-jakarta font-extrabold text-4xl text-white tracking-tight mb-4">
            Build with Architectural Precision
          </h2>
          <p className="text-brand-peach text-lg max-w-xl mx-auto mb-8">
            Partner with SKY Technology to scale securely, efficiently, and with full confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-lg bg-brand-orange text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <a
              href="https://scanbiz.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-lg border-2 border-brand-teal-btn text-brand-teal-btn font-semibold text-base transition-all duration-200 hover:bg-brand-teal-btn hover:text-white hover:shadow-lg"
            >
              Visit ScanBiz
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
