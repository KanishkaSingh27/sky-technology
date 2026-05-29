import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ExternalLink } from "lucide-react";

const serviceSections = [
  {
    num: "01",
    tag: "CAPTURE & CONVERT",
    title: "Intelligent Document Capture (OCR/ICR/OMR)",
    desc: [
      "High-speed Optical Character Recognition for printed text conversion.",
      "Intelligent Character Recognition for handwritten data extraction.",
      "OMR technology for rapid survey and form processing.",
    ],
    linkText: "Learn about Capture Workflows",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    reverse: false,
  },
  {
    num: "02",
    tag: "ARCHIVAL SOLUTIONS",
    title: "Document Digitization Services",
    desc: [
      "Utilizing world-class Kodak Alaris high-volume scanning hardware.",
      "Bulk archival of historical and legal records with metadata tagging.",
      "Secure cloud storage integration for anytime access.",
    ],
    linkText: "Explore Digitization Hardware",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    reverse: true,
  },
  {
    num: "03",
    tag: "ED-TECH SERVICES",
    title: "OMR & CBT Examination Processing",
    desc: [
      "Automated grading with 99.9% accuracy rates.",
      "Secure Computer Based Testing (CBT) environment hosting.",
    ],
    linkText: "View Examination Solutions",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    reverse: false,
  },
  {
    num: "04",
    tag: "OPERATIONAL EFFICIENCY",
    title: "Business & Office Automation",
    desc: [
      "Workflow optimization and Robotic Process Automation (RPA).",
      "Smart office integration for energy and resource management.",
      "Enterprise Resource Planning (ERP) consulting and setup.",
    ],
    linkText: "Optimize Your Workflow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    reverse: true,
  },
  {
    num: "05",
    tag: "INTELLIGENT INSIGHTS",
    title: "AI & Data Analytics",
    desc: [
      "Custom AI models for predictive market behavior.",
      "Real-time data visualization and executive reporting.",
    ],
    linkText: "See Data Analytics in Action",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    reverse: false,
  },
  {
    num: "06",
    tag: "GEOSPATIAL DATA",
    title: "GIS & Cartography Services",
    desc: [
      "Advanced digital mapping and topographic data analysis.",
      "Urban planning and infrastructure monitoring via satellite imagery.",
      "Custom geospatial database development for logistics.",
    ],
    linkText: "Explore GIS Capability",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
    reverse: true,
  },
  {
    num: "07",
    tag: "STRATEGIC ADVISORY",
    title: "IT Consulting & Strategy",
    desc: [
      "Digital transformation strategy and execution.",
      "Cybersecurity audits and infrastructure hardening.",
    ],
    linkText: "Request a Consultation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    reverse: false,
  },
  {
    num: "08",
    tag: "INFRASTRUCTURE & GEAR",
    title: "Imaging Hardware Solutions",
    desc: [
      "Official distribution of Kodak scanner fleets.",
      "On-site hardware maintenance and lifecycle management.",
      "High-resolution camera systems for precision cartography.",
    ],
    linkText: "Browse Hardware Catalog",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    reverse: true,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#F9F9FF] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-brand-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(154,70,0,0.15),_transparent_60%)]" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <span className="text-brand-light-orange text-xs font-semibold uppercase tracking-widest block mb-3">
            ENTERPRISE INNOVATION
          </span>
          <h1 className="font-jakarta font-extrabold text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Our Technology Services
          </h1>
          <p className="text-brand-peach text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
            Empowering organizations with high-precision digital transformation, from intelligent document processing to advanced AI-driven analytics.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-16 flex flex-col gap-20 max-w-[1280px] mx-auto px-6 lg:px-16">
        {serviceSections.map((section, index) => {
          const ContentComponent = (
            <div className="flex flex-col gap-4 flex-1">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-wider block">
                {section.num}. {section.tag}
              </span>
              <h2 className="font-jakarta font-extrabold text-2xl lg:text-3xl text-brand-dark leading-tight">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-3 my-2">
                {section.desc.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-brand-brown text-sm leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-brand-orange stroke-[3px]" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-brand-orange text-sm font-semibold hover:underline mt-2 self-start"
              >
                {section.linkText} →
              </Link>
            </div>
          );

          const ImageComponent = (
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] relative group">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          );

          return (
            <div key={section.num} className="flex flex-col gap-10">
              <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16`}>
                {section.reverse ? (
                  <>
                    <div className="block lg:hidden w-full">{ContentComponent}</div>
                    {ImageComponent}
                    <div className="hidden lg:block w-full">{ContentComponent}</div>
                  </>
                ) : (
                  <>
                    {ContentComponent}
                    {ImageComponent}
                  </>
                )}
              </div>

              {/* Special Partner Banner placed right after Section 02 */}
              {index === 1 && (
                <div className="my-6 bg-white rounded-xl border border-blue-100 p-8 shadow-[0_2px_16px_0_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex flex-col gap-3 flex-1">
                    <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 self-start px-2.5 py-1 rounded-sm uppercase tracking-wide">
                      OFFICIAL MARKETPLACE PARTNER
                    </span>
                    <h3 className="font-jakarta font-bold text-xl text-brand-dark">
                      Procure Hardware via ScanBiz.in
                    </h3>
                    <p className="text-brand-brown text-sm leading-relaxed max-w-2xl">
                      We've partnered with ScanBiz.in, India's leading online marketplace for document scanners and imaging solutions. Get competitive pricing, authentic warranties, and expert guidance on your hardware procurement.
                    </p>
                    <a
                      href="https://scanbiz.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-11 px-5 rounded bg-brand-teal text-white text-xs font-bold hover:opacity-95 transition-opacity self-start mt-2"
                    >
                      Visit ScanBiz Marketplace
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <div className="flex-shrink-0 w-44 h-24 bg-[#0d0d0d] rounded-lg p-4 flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F25051e3b1b434aed9b472f7f2ac405f0%2Fdf29810322d34d7ab130bb4ff2afaf75?format=webp&width=400"
                      alt="ScanBiz"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#EBF1FF] text-center relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col items-center gap-5">
          <h2 className="font-jakarta font-extrabold text-3xl lg:text-4xl text-brand-dark tracking-tight">
            Ready to transform your operations?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded bg-brand-orange text-white font-bold text-sm hover:opacity-95 hover:scale-[1.02] transition-all"
          >
            Speak with an Expert
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
