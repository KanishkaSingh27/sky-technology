import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timelineItems = [
  {
    year: "2005",
    title: "Foundation",
    desc: "Established in New Jersey, USA, focusing on enterprise IT consulting and local networking solutions.",
    color: "brand-orange",
    hex: "#9A4600",
  },
  {
    year: "2012",
    title: "Cloud Pivot",
    desc: "Transitioned to full-scale cloud migration services, partnering with global infrastructure leaders.",
    color: "brand-teal",
    hex: "#00687A",
    offset: true,
  },
  {
    year: "2018",
    title: "Global Expansion",
    desc: "Opened research and development wings in strategic tech hubs to support 24/7 global operations.",
    color: "brand-orange",
    hex: "#9A4600",
  },
  {
    year: "Today",
    title: "India Operations",
    desc: "Headquartered in India with a global workforce of 500+ experts driving AI and Cloud innovation.",
    color: "brand-teal",
    hex: "#00687A",
    offset: true,
  },
];

const advantages = [
  {
    title: "Cost-Effective",
    desc: "Optimized operational models that deliver premium enterprise quality without the prohibitive overhead.",
    icon: (
      <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
        <path d="M26 18C24.3333 18 22.9167 17.4167 21.75 16.25C20.5833 15.0833 20 13.6667 20 12C20 10.3333 20.5833 8.91667 21.75 7.75C22.9167 6.58333 24.3333 6 26 6C27.6667 6 29.0833 6.58333 30.25 7.75C31.4167 8.91667 32 10.3333 32 12C32 13.6667 31.4167 15.0833 30.25 16.25C29.0833 17.4167 27.6667 18 26 18ZM12 24C10.9 24 9.95833 23.6083 9.175 22.825C8.39167 22.0417 8 21.1 8 20V4C8 2.9 8.39167 1.95833 9.175 1.175C9.95833 0.391667 10.9 0 12 0H40C41.1 0 42.0417 0.391667 42.825 1.175C43.6083 1.95833 44 2.9 44 4V20C44 21.1 43.6083 22.0417 42.825 22.825C42.0417 23.6083 41.1 24 40 24H12ZM16 20H36C36 18.9 36.3917 17.9583 37.175 17.175C37.9583 16.3917 38.9 16 40 16V8C38.9 8 37.9583 7.60833 37.175 6.825C36.3917 6.04167 36 5.1 36 4H16C16 5.1 15.6083 6.04167 14.825 6.825C14.0417 7.60833 13.1 8 12 8V16C13.1 16 14.0417 16.3917 14.825 17.175C15.6083 17.9583 16 18.9 16 20ZM38 32H4C2.9 32 1.95833 31.6083 1.175 30.825C0.391667 30.0417 0 29.1 0 28V6H4V28H38V32ZM12 20V4V20Z" fill="#9A4600"/>
      </svg>
    ),
  },
  {
    title: "Experienced Team",
    desc: "A curated collective of senior architects and certified engineers with deep industry expertise.",
    icon: (
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
        <path d="M0 24V20.85C0 19.4167 0.733333 18.25 2.2 17.35C3.66667 16.45 5.6 16 8 16C8.43333 16 8.85 16.0083 9.25 16.025C9.65 16.0417 10.0333 16.0833 10.4 16.15C9.93333 16.85 9.58333 17.5833 9.35 18.35C9.11667 19.1167 9 19.9167 9 20.75V24H0ZM12 24V20.75C12 19.6833 12.2917 18.7083 12.875 17.825C13.4583 16.9417 14.2833 16.1667 15.35 15.5C16.4167 14.8333 17.6917 14.3333 19.175 14C20.6583 13.6667 22.2667 13.5 24 13.5C25.7667 13.5 27.3917 13.6667 28.875 14C30.3583 14.3333 31.6333 14.8333 32.7 15.5C33.7667 16.1667 34.5833 16.9417 35.15 17.825C35.7167 18.7083 36 19.6833 36 20.75V24H12ZM39 24V20.75C39 19.8833 38.8917 19.0667 38.675 18.3C38.4583 17.5333 38.1333 16.8167 37.7 16.15C38.0667 16.0833 38.4417 16.0417 38.825 16.025C39.2083 16.0083 39.6 16 40 16C42.4 16 44.3333 16.4417 45.8 17.325C47.2667 18.2083 48 19.3833 48 20.85V24H39ZM16.25 20H31.8C31.4667 19.3333 30.5417 18.75 29.025 18.25C27.5083 17.75 25.8333 17.5 24 17.5C22.1667 17.5 20.4917 17.75 18.975 18.25C17.4583 18.75 16.55 19.3333 16.25 20ZM8 14C6.9 14 5.95833 13.6083 5.175 12.825C4.39167 12.0417 4 11.1 4 10C4 8.86667 4.39167 7.91667 5.175 7.15C5.95833 6.38333 6.9 6 8 6C9.13333 6 10.0833 6.38333 10.85 7.15C11.6167 7.91667 12 8.86667 12 10C12 11.1 11.6167 12.0417 10.85 12.825C10.0833 13.6083 9.13333 14 8 14ZM40 14C38.9 14 37.9583 13.6083 37.175 12.825C36.3917 12.0417 36 11.1 36 10C36 8.86667 36.3917 7.91667 37.175 7.15C37.9583 6.38333 38.9 6 40 6C41.1333 6 42.0833 6.38333 42.85 7.15C43.6167 7.91667 44 8.86667 44 10C44 11.1 43.6167 12.0417 42.85 12.825C42.0833 13.6083 41.1333 14 40 14ZM24 12C22.3333 12 20.9167 11.4167 19.75 10.25C18.5833 9.08333 18 7.66667 18 6C18 4.3 18.5833 2.875 19.75 1.725C20.9167 0.575 22.3333 0 24 0C25.7 0 27.125 0.575 28.275 1.725C29.425 2.875 30 4.3 30 6C30 7.66667 29.425 9.08333 28.275 10.25C27.125 11.4167 25.7 12 24 12ZM24 8C24.5667 8 25.0417 7.80833 25.425 7.425C25.8083 7.04167 26 6.56667 26 6C26 5.43333 25.8083 4.95833 25.425 4.575C25.0417 4.19167 24.5667 4 24 4C23.4333 4 22.9583 4.19167 22.575 4.575C22.1917 4.95833 22 5.43333 22 6C22 6.56667 22.1917 7.04167 22.575 7.425C22.9583 7.80833 23.4333 8 24 8Z" fill="#9A4600"/>
      </svg>
    ),
  },
  {
    title: "B2B Reliability",
    desc: "Tier-1 security protocols and robust uptime guarantees designed for mission-critical operations.",
    icon: (
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
        <path d="M16 40C11.3667 38.8333 7.54167 36.175 4.525 32.025C1.50833 27.875 0 23.2667 0 18.2V6L16 0L32 6V18.2C32 23.2667 30.4917 27.875 27.475 32.025C24.4583 36.175 20.6333 38.8333 16 40ZM16 35.8C19.4667 34.7 22.3333 32.5 24.6 29.2C26.8667 25.9 28 22.2333 28 18.2V8.75L16 4.25L4 8.75V18.2C4 22.2333 5.13333 25.9 7.4 29.2C9.66667 32.5 12.5333 34.7 16 35.8Z" fill="#9A4600"/>
      </svg>
    ),
  },
  {
    title: "Agile Innovation",
    desc: "Rapid prototyping and deployment cycles that keep your business ahead of the technical curve.",
    icon: (
      <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
        <path d="M7.2 15.9911L11.1 17.6411C11.5667 16.7078 12.05 15.8078 12.55 14.9411C13.05 14.0745 13.6 13.2078 14.2 12.3411L11.4 11.7911L7.2 15.9911ZM14.3 20.1411L20 25.7911C21.4 25.2578 22.9 24.4411 24.5 23.3411C26.1 22.2411 27.6 20.9911 29 19.5911C31.3333 17.2578 33.1583 14.6661 34.475 11.8161C35.7917 8.96613 36.3667 6.34113 36.2 3.94113C33.8 3.77446 31.1667 4.34946 28.3 5.66613C25.4333 6.9828 22.8333 8.8078 20.5 11.1411C19.1 12.5411 17.85 14.0411 16.75 15.6411C15.65 17.2411 14.8333 18.7411 14.3 20.1411ZM23.2 16.8911C22.4333 16.1245 22.05 15.1828 22.05 14.0661C22.05 12.9495 22.4333 12.0078 23.2 11.2411C23.9667 10.4745 24.9167 10.0911 26.05 10.0911C27.1833 10.0911 28.1333 10.4745 28.9 11.2411C29.6667 12.0078 30.05 12.9495 30.05 14.0661C30.05 15.1828 29.6667 16.1245 28.9 16.8911C28.1333 17.6578 27.1833 18.0411 26.05 18.0411C24.9167 18.0411 23.9667 17.6578 23.2 16.8911ZM24.15 32.9411L28.35 28.7411L27.8 25.9411C26.9333 26.5411 26.0667 27.0828 25.2 27.5661C24.3333 28.0495 23.4333 28.5245 22.5 28.9911L24.15 32.9411ZM39.8 0.291129C40.4333 4.32446 40.0417 8.24946 38.625 12.0661C37.2083 15.8828 34.7667 19.5245 31.3 22.9911L32.3 27.9411C32.4333 28.6078 32.4 29.2578 32.2 29.8911C32 30.5245 31.6667 31.0745 31.2 31.5411L22.8 39.9411L18.6 30.0911L10.05 21.5411L0.2 17.3411L8.55 8.94113C9.01667 8.47446 9.575 8.14113 10.225 7.94113C10.875 7.74113 11.5333 7.7078 12.2 7.84113L17.15 8.84113C20.6167 5.37446 24.25 2.92446 28.05 1.49113C31.85 0.0577958 35.7667 -0.342204 39.8 0.291129ZM3.75 27.8911C4.91667 26.7245 6.34167 26.1328 8.025 26.1161C9.70833 26.0995 11.1333 26.6745 12.3 27.8411C13.4667 29.0078 14.0417 30.4328 14.025 32.1161C14.0083 33.7995 13.4167 35.2245 12.25 36.3911C11.4167 37.2245 10.025 37.9411 8.075 38.5411C6.125 39.1411 3.43333 39.6745 0 40.1411C0.466667 36.7078 1 34.0161 1.6 32.0661C2.2 30.1161 2.91667 28.7245 3.75 27.8911ZM6.6 30.6911C6.26667 31.0245 5.93333 31.6328 5.6 32.5161C5.26667 33.3995 5.03333 34.2911 4.9 35.1911C5.8 35.0578 6.69167 34.8328 7.575 34.5161C8.45833 34.1995 9.06667 33.8745 9.4 33.5411C9.8 33.1411 10.0167 32.6578 10.05 32.0911C10.0833 31.5245 9.9 31.0411 9.5 30.6411C9.1 30.2411 8.61667 30.0495 8.05 30.0661C7.48333 30.0828 7 30.2911 6.6 30.6911Z" fill="#9A4600"/>
      </svg>
    ),
  },
];

const approachSteps = [
  {
    num: "1",
    label: "Understand",
    desc: "Deep discovery sessions to map your business objectives, technical constraints, and long-term scaling needs.",
  },
  {
    num: "2",
    label: "Design",
    desc: "Architecting a bespoke technological roadmap focused on security, efficiency, and seamless user experience.",
  },
  {
    num: "3",
    label: "Deliver",
    desc: "Flawless execution with rigorous testing and continuous integration to ensure high-stability deployments.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-20 bg-white overflow-hidden relative min-h-[280px] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(216,227,250,0.25)_0%,_transparent_70%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-16 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 justify-center text-sm text-brand-brown mb-8">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none">
              <path d="M3.06667 4L0 0.933333L0.933333 0L4.93333 4L0.933333 8L0 7.06667L3.06667 4Z" fill="#574237"/>
            </svg>
            <span className="font-bold text-brand-orange">About</span>
          </div>

          <div className="text-center">
            <h1 className="font-jakarta font-extrabold text-5xl lg:text-6xl text-brand-dark tracking-tight leading-tight mb-3">
              About SKY Technology
            </h1>
            <div className="w-44 h-1.5 rounded-full bg-brand-orange mx-auto mb-6" />
            <p className="text-brand-brown text-base lg:text-lg max-w-xl mx-auto">
              Pioneering digital excellence and cloud infrastructure solutions across global borders since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-4 mb-14">
            <div className="inline-flex self-start px-4 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm">
              Our Journey
            </div>
            <h2 className="font-jakarta font-bold text-3xl lg:text-4xl text-brand-dark tracking-tight">
              Nearly Two Decades of Innovation
            </h2>
          </div>

          {/* Desktop timeline line + cards */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelineItems.map((item, i) => (
                <div
                  key={item.year}
                  className={`${item.offset ? "lg:mt-12" : ""}`}
                >
                  <div
                    className="bg-white rounded-xl p-6 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 h-full"
                    style={{ borderTop: `4px solid ${item.hex}` }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: `${item.hex}1A`, color: item.hex }}
                    >
                      {item.year}
                    </div>
                    <h3 className="font-jakarta font-bold text-xl text-brand-dark mt-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-brown text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-bg-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-white rounded-xl border-l-8 border-brand-orange p-10 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] flex flex-col gap-4">
              <svg width="25" height="29" viewBox="0 0 25 29" fill="none">
                <path d="M0 28.3333V0H15L15.6667 3.33333H25V20H13.3333L12.6667 16.6667H3.33333V28.3333H0ZM16.0833 16.6667H21.6667V6.66667H12.9167L12.25 3.33333H3.33333V13.3333H15.4167L16.0833 16.6667Z" fill="#9A4600"/>
              </svg>
              <h2 className="font-jakarta font-bold text-3xl text-brand-dark tracking-tight">
                Our Mission
              </h2>
              <p className="text-brand-brown text-lg leading-relaxed">
                To empower global enterprises through precision-engineered technology solutions that drive efficiency, scalability, and sustainable growth in the digital era.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl border-l-8 border-brand-teal p-10 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] flex flex-col gap-4">
              <svg width="37" height="25" viewBox="0 0 37 25" fill="none">
                <path d="M18.3333 20C20.4167 20 22.1875 19.2708 23.6458 17.8125C25.1042 16.3542 25.8333 14.5833 25.8333 12.5C25.8333 10.4167 25.1042 8.64583 23.6458 7.1875C22.1875 5.72917 20.4167 5 18.3333 5C16.25 5 14.4792 5.72917 13.0208 7.1875C11.5625 8.64583 10.8333 10.4167 10.8333 12.5C10.8333 14.5833 11.5625 16.3542 13.0208 17.8125C14.4792 19.2708 16.25 20 18.3333 20ZM18.3333 17C17.0833 17 16.0208 16.5625 15.1458 15.6875C14.2708 14.8125 13.8333 13.75 13.8333 12.5C13.8333 11.25 14.2708 10.1875 15.1458 9.3125C16.0208 8.4375 17.0833 8 18.3333 8C19.5833 8 20.6458 8.4375 21.5208 9.3125C22.3958 10.1875 22.8333 11.25 22.8333 12.5C22.8333 13.75 22.3958 14.8125 21.5208 15.6875C20.6458 16.5625 19.5833 17 18.3333 17ZM18.3333 25C14.2778 25 10.5833 23.8681 7.25 21.6042C3.91667 19.3403 1.5 16.3056 0 12.5C1.5 8.69444 3.91667 5.65972 7.25 3.39583C10.5833 1.13194 14.2778 0 18.3333 0C22.3889 0 26.0833 1.13194 29.4167 3.39583C32.75 5.65972 35.1667 8.69444 36.6667 12.5C35.1667 16.3056 32.75 19.3403 29.4167 21.6042C26.0833 23.8681 22.3889 25 18.3333 25ZM18.3333 21.6667C21.4722 21.6667 24.3542 20.8403 26.9792 19.1875C29.6042 17.5347 31.6111 15.3056 33 12.5C31.6111 9.69444 29.6042 7.46528 26.9792 5.8125C24.3542 4.15972 21.4722 3.33333 18.3333 3.33333C15.1944 3.33333 12.3125 4.15972 9.6875 5.8125C7.0625 7.46528 5.05556 9.69444 3.66667 12.5C5.05556 15.3056 7.0625 17.5347 9.6875 19.1875C12.3125 20.8403 15.1944 21.6667 18.3333 21.6667Z" fill="#00687A"/>
              </svg>
              <h2 className="font-jakarta font-bold text-3xl text-brand-dark tracking-tight">
                Our Vision
              </h2>
              <p className="text-brand-brown text-lg leading-relaxed">
                To be the most trusted architectural partner for cloud-native transformation, setting the benchmark for technical integrity and corporate reliability worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col items-center gap-4 mb-16">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium uppercase tracking-widest">
              The SKY-TEK Advantage
            </div>
            <h2 className="font-jakarta font-bold text-3xl lg:text-4xl text-brand-dark tracking-tight text-center">
              Engineering Success for Every Client
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-white rounded-xl p-8 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] flex flex-col items-center gap-4 text-center hover:shadow-[0_8px_32px_0_rgba(154,70,0,0.12)] transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12">{adv.icon}</div>
                <h3 className="font-jakarta font-bold text-xl text-brand-dark mt-2">
                  {adv.title}
                </h3>
                <p className="text-brand-brown text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Precise Approach */}
      <section className="py-24 bg-brand-navy overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(216,227,250,0.05)_0%,_transparent_70%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-4 mb-16">
            <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Our Precise Approach
            </h2>
            <p className="text-brand-peach text-base max-w-xl leading-relaxed">
              We follow a structured methodology to ensure every project is delivered with architectural precision and high-performance outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {approachSteps.map((step) => (
              <div key={step.num} className="flex flex-col gap-5 relative">
                <span className="absolute -top-6 -left-3 font-jakarta font-extrabold text-8xl text-white/5 leading-none select-none">
                  0{step.num}
                </span>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-[#FFB68D] flex items-center justify-center flex-shrink-0">
                    <span className="font-jakarta font-bold text-xl text-[#FFB68D]">{step.num}</span>
                  </div>
                  <h3 className="font-jakarta font-bold text-2xl text-white">{step.label}</h3>
                </div>
                <p className="text-brand-peach text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
