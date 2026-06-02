import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Cloud, Database, Shield, Cpu, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "Seamless transition to cloud infrastructure with zero downtime and full architectural oversight.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Transform raw data into strategic insights with enterprise-grade analytics platforms.",
  },
  {
    icon: Cpu,
    title: "AI/ML Integration",
    desc: "Embed intelligent automation and machine learning into your core business workflows.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Tier-1 security protocols protecting your enterprise with proactive threat intelligence.",
  },
];

const stats = [
  { value: "500+", label: "Global Experts" },
  { value: "20+", label: "Years of Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

const partners = [
  {
    name: "Tungsten Automation (formerly Kofax)",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F25051e3b1b434aed9b472f7f2ac405f0%2Feac2e3aa41e944e1982495d44ff0c28d?format=webp&width=400",
  },
  {
    name: "Kodak Alaris",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F25051e3b1b434aed9b472f7f2ac405f0%2F40314afb6ac04015bdda5042c67a41e0?format=webp&width=400",
  },
  {
    name: "AWS",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F25051e3b1b434aed9b472f7f2ac405f0%2Ff2688ee4fca5448582bb5291861a83d0?format=webp&width=400",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 min-h-[85vh] flex items-center overflow-hidden bg-[#F9F9FF]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(154,70,0,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_rgba(0,104,122,0.07)_0%,_transparent_50%)]" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              Pioneering Digital Excellence Since 2005
            </div>

            <h1 className="font-jakarta font-extrabold text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-brand-dark mb-6">
              Engineering the{" "}
              <span className="text-brand-orange">Future</span> of{" "}
              <span className="text-brand-teal">Enterprise Cloud</span>
            </h1>

            <p className="text-brand-brown text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              SKY Technology delivers precision-engineered cloud infrastructure, AI integration, and cybersecurity solutions to enterprises across the globe.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-lg bg-brand-orange text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-lg border-2 border-brand-teal text-brand-teal font-semibold text-base transition-all duration-200 hover:bg-brand-teal hover:text-white hover:shadow-lg"
              >
                Learn More
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-navy py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-jakarta font-extrabold text-4xl text-brand-light-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-brand-peach text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium uppercase tracking-widest mb-4">
              What We Do
            </div>
            <h2 className="font-jakarta font-bold text-4xl text-brand-dark tracking-tight mb-4">
              Enterprise-Grade Technology Solutions
            </h2>
            <p className="text-brand-brown text-lg max-w-2xl mx-auto">
              From cloud migration to AI integration, we deliver end-to-end technology solutions that power mission-critical operations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-2xl p-8 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_0_rgba(154,70,0,0.12)] transition-all duration-300 group border border-transparent hover:border-brand-orange/20 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                  <svc.icon
                    size={22}
                    className="text-brand-orange group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-jakarta font-bold text-xl text-brand-dark">{svc.title}</h3>
                <p className="text-brand-brown text-sm leading-relaxed">{svc.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-brand-orange text-sm font-semibold mt-auto hover:gap-2 transition-all duration-200"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SKY-TEK */}
      <section className="py-24 bg-brand-bg-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-6">
                The SKY-TEK Advantage
              </div>
              <h2 className="font-jakarta font-bold text-4xl text-brand-dark tracking-tight mb-6 leading-snug">
                Why Global Enterprises Trust SKY Technology
              </h2>
              <p className="text-brand-brown text-lg leading-relaxed mb-10">
                With over two decades of innovation, a 500+ strong global team, and deep partnerships with industry leaders, we architect transformations that last.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-brand-teal text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-md"
              >
                Our Story <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Cost-Effective", desc: "Premium enterprise quality without prohibitive overhead." },
                { label: "Experienced Team", desc: "Senior architects and certified engineers with deep expertise." },
                { label: "B2B Reliability", desc: "Tier-1 security and robust uptime for mission-critical operations." },
                { label: "Agile Innovation", desc: "Rapid deployment cycles keeping your business ahead of the curve." },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-6 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)]">
                  <h4 className="font-jakarta font-bold text-base text-brand-dark mb-2">{item.label}</h4>
                  <p className="text-brand-brown text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium uppercase tracking-widest mb-4">
              Our Partners
            </div>
            <h2 className="font-jakarta font-bold text-3xl text-brand-dark tracking-tight">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center min-h-[680px]">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center p-6 rounded-xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-md transition-all duration-200 grayscale hover:grayscale-0"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-10 w-auto object-contain max-w-[600px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-navy overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(51,168,196,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-brand-peach text-lg max-w-2xl mx-auto mb-10">
            Partner with SKY Technology for cloud-native transformation that delivers measurable results from day one.
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
