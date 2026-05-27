import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cloud, Database, Cpu, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "End-to-end cloud migration services with zero downtime. We assess, plan, migrate, and optimize your entire infrastructure for the cloud era.",
    features: ["Infrastructure assessment", "Zero-downtime migration", "Post-migration optimization", "Multi-cloud strategy"],
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Transform raw enterprise data into strategic intelligence with real-time dashboards, predictive analytics, and AI-driven insights.",
    features: ["Real-time dashboards", "Predictive analytics", "Data warehousing", "BI integration"],
  },
  {
    icon: Cpu,
    title: "AI/ML Integration",
    desc: "Embed artificial intelligence and machine learning into your core business workflows to automate processes and drive innovation.",
    features: ["Custom ML models", "Process automation", "NLP solutions", "Computer vision"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protect your enterprise with Tier-1 security frameworks, proactive threat intelligence, and 24/7 monitoring for mission-critical systems.",
    features: ["Threat intelligence", "24/7 SOC monitoring", "Compliance frameworks", "Incident response"],
  },
];

export default function Services() {
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
            <span className="font-bold text-brand-orange">Services</span>
          </div>
          <h1 className="font-jakarta font-extrabold text-5xl lg:text-6xl text-brand-dark tracking-tight leading-tight mb-3">
            Our Services
          </h1>
          <div className="w-32 h-1.5 rounded-full bg-brand-orange mx-auto mb-6" />
          <p className="text-brand-brown text-base lg:text-lg max-w-xl mx-auto">
            Enterprise-grade technology solutions engineered for performance, security, and scale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-2xl p-8 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_0_rgba(154,70,0,0.12)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                    <svc.icon size={24} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-2xl text-brand-dark mb-2">{svc.title}</h3>
                    <p className="text-brand-brown text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2 mb-6">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-brand-brown text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-brand-orange text-sm font-semibold hover:gap-3 transition-all duration-200"
                >
                  Get Started <ArrowRight size={14} />
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
            Ready to Get Started?
          </h2>
          <p className="text-brand-peach text-lg max-w-xl mx-auto mb-8">
            Let's architect the right solution for your enterprise needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-lg bg-brand-orange text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
