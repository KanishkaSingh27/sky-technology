import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Cloud, Database, Shield, Cpu, ChevronRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Sparkles,
  ExternalLink,
} from "lucide-react";

// Services Data matching original index.tsx
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

// Stats Data matching original index.tsx
const stats = [
  { value: "500+", label: "Global Experts" },
  { value: "20+", label: "Years of Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

// Partners Data matching original 3 partners
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

export default function App() {
  const fullText =
    "SKY Technology delivers precision-engineered cloud infrastructure, AI integration, and cybersecurity solutions to enterprises across the globe.";
  const [displayText, setDisplayText] = useState("");
  const canvasRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Typewriter Effect logic
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // Interactive Hero Canvas Mesh
  useEffect(() => {
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, radius: 160 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      size: Math.random() * 2.5 + 1.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(154, 69, 0, 0.91)";
      ctx.strokeStyle = "rgba(0, 104, 122, 0.42)";

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.lineWidth = 1 - dist / 120;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        const mouseDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mouseDist < mouse.radius) {
          ctx.strokeStyle = `rgba(154, 70, 0, ${0.9 * (1 - mouseDist / mouse.radius)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-[#9A4600] selection:text-white">
      {/* Custom Keyframe animations for button shimmer */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      {/* Header / Navbar Component */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9A4600] to-[#00687A] flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-[#9A4600]/20">
              S
            </div>
            <span className="font-extrabold text-xl tracking-tight text-[#1E293B]">
              SKY <span className="text-[#9A4600] font-normal">Technology</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="About.tsx" className="hover:text-[#9A4600] transition-colors">
              About Us
            </a>
            <a href="Services.tsx" className="hover:text-[#9A4600] transition-colors">
              Services
            </a>
            <a href="Solutions.tsx" className="hover:text-[#9A4600] transition-colors">
              Solutions
            </a>
            <a href="Contact.tsx" className="hover:text-[#9A4600] transition-colors">
              Contact Us
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://scanbiz.in/"
              className="group relative inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-[#9A4600] text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] shadow-md shadow-[#9A4600]/25 hover:shadow-lg hover:shadow-[#9A4600]/40 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                ScanBiz
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-700">
            <a href="About.tsx" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </a>
            <a href="Services.tsx" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="Solutions.tsx" onClick={() => setMobileMenuOpen(false)}>
              Solutions
            </a>
            <a href="Contact.tsx" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </a>
            <a
              href="https://scanbiz.in/"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#9A4600] text-center py-2.5 rounded-lg text-white font-semibold"
            >
              ScanBiz
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 min-h-[85vh] flex items-center overflow-hidden bg-[#F9F9FF]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-0 opacity-80"
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(154,70,0,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_rgba(0,104,122,0.07)_0%,_transparent_50%)] pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#9A4600]/20 text-[#9A4600] text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm hover:scale-105 transition-transform cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-[#9A4600] animate-pulse" />
              Pioneering Digital Excellence Since 2005
            </div>

            {/* Main Headline */}
            <h1 className="font-extrabold text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-[#1E293B] mb-6">
              Engineering the{" "}
              <span className="text-[#9A4600]">Future</span> of{" "}
              <span className="text-[#00687A]">Enterprise Cloud</span>
            </h1>

            {/* Typewriter Subtitle */}
            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl min-h-[5.5rem]">
              {displayText}
              <span className="inline-block w-1.5 h-5 bg-[#9A4600] ml-1 animate-pulse align-middle" />
            </p>

            {/* Graphic CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-[#9A4600] text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-[#9A4600]/25 hover:shadow-xl hover:shadow-[#9A4600]/40 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
              <a
                href="#about"
                className="group relative inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-white/80 backdrop-blur-md border-2 border-[#00687A] text-[#00687A] font-semibold text-base transition-all duration-300 hover:bg-[#00687A] hover:text-white hover:scale-[1.03] shadow-sm hover:shadow-lg hover:shadow-[#00687A]/20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
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
      {/* Services Grid Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-[#9A4600]/10 text-[#9A4600] text-sm font-semibold uppercase tracking-widest mb-4">
              What We Do
            </div>
            <h2 className="font-bold text-4xl text-[#1E293B] tracking-tight mb-4">
              Enterprise-Grade Technology Solutions
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From cloud migration to AI integration, we deliver end-to-end technology solutions that power mission-critical operations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_0_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_0_rgba(154,70,0,0.14)] transition-all duration-300 group border border-gray-100 hover:border-[#9A4600]/30 flex flex-col gap-4 hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#9A4600]/10 flex items-center justify-center group-hover:bg-[#9A4600] transition-colors duration-300">
                  <svc.icon
                    size={22}
                    className="text-[#9A4600] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-bold text-xl text-[#1E293B]">{svc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[#9A4600] text-sm font-semibold mt-auto group-hover:gap-2 transition-all duration-200"
                >
                  Learn More <ArrowRight size={14} />
                </a>
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
              <a
                href="#about"
                className="group relative inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-[#00687A] text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] shadow-md shadow-[#00687A]/20 hover:shadow-lg hover:shadow-[#00687A]/35 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Our Story{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
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
          <div className="text-center mb-0">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium uppercase tracking-widest mb-4">
              Our Partners
            </div>
            <h2 className="font-jakarta font-bold text-3xl text-brand-dark tracking-tight">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center min-h-[200px]">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center p-6 rounded-xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-md transition-all duration-200 grayscale hover:grayscale-0"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-12 w-auto object-contain max-w-[900px]"
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
