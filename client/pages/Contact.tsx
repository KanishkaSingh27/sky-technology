import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const inquiryTypes = [
  "Select an inquiry type",
  "Cloud Migration",
  "Data Analytics",
  "AI/ML Integration",
  "Cybersecurity",
  "General Inquiry",
  "Partnership",
  "Support",
];

const offices = [
  {
    region: "India HQ",
    address: "Tech Hub, Bengaluru, Karnataka, India",
    phone: "+91 80 0000 0000",
    email: "india@sky-tek.net",
  },
  {
    region: "USA Office",
    address: "New Jersey, USA",
    phone: "+1 800 000 0000",
    email: "usa@sky-tek.net",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "Select an inquiry type",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (form.inquiryType === "Select an inquiry type") e.inquiryType = "Please select an inquiry type";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

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
            <span className="font-bold text-brand-orange">Contact</span>
          </div>
          <h1 className="font-jakarta font-extrabold text-5xl lg:text-6xl text-brand-dark tracking-tight leading-tight mb-3">
            Get In Touch
          </h1>
          <div className="w-32 h-1.5 rounded-full bg-brand-orange mx-auto mb-6" />
          <p className="text-brand-brown text-base lg:text-lg max-w-xl mx-auto">
            Reach out to our global team. We're here to help architect your next digital transformation.
          </p>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {offices.map((office) => (
              <div
                key={office.region}
                className="bg-white rounded-xl p-8 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <MapPin size={18} className="text-brand-orange" />
                </div>
                <h3 className="font-jakarta font-bold text-lg text-brand-dark">{office.region}</h3>
                <p className="text-brand-brown text-sm leading-relaxed">{office.address}</p>
                <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-brand-brown text-sm hover:text-brand-orange transition-colors">
                  <Phone size={14} /> {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-brand-brown text-sm hover:text-brand-orange transition-colors">
                  <Mail size={14} /> {office.email}
                </a>
              </div>
            ))}

            <div className="bg-brand-navy rounded-xl p-8 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-light-orange/20 flex items-center justify-center">
                <Mail size={18} className="text-brand-light-orange" />
              </div>
              <h3 className="font-jakarta font-bold text-lg text-white">Global Support</h3>
              <p className="text-brand-peach text-sm leading-relaxed">24/7 enterprise support for all clients.</p>
              <a
                href="mailto:info@sky-tek.net"
                className="text-brand-light-orange font-bold text-sm hover:underline transition-colors"
              >
                info@sky-tek.net
              </a>
              <a
                href="https://scanbiz.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-light-blue text-sm hover:text-brand-light-orange transition-colors"
              >
                Visit ScanBiz →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] text-center flex flex-col items-center gap-4">
                <CheckCircle size={56} className="text-brand-teal" />
                <h2 className="font-jakarta font-bold text-2xl text-brand-dark">Message Sent!</h2>
                <p className="text-brand-brown">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", inquiryType: "Select an inquiry type", message: "" }); }}
                  className="mt-4 h-12 px-8 rounded-lg bg-brand-orange text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_2px_16px_0_rgba(0,0,0,0.08)]">
                <h2 className="font-jakarta font-bold text-2xl text-brand-dark mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-brand-dark">
                        Full Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`h-12 rounded-lg border px-4 text-sm text-brand-dark placeholder:text-gray-400 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all ${errors.name ? "border-red-400" : "border-gray-200"}`}
                      />
                      {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-brand-dark">
                        Work Email <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`h-12 rounded-lg border px-4 text-sm text-brand-dark placeholder:text-gray-400 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all ${errors.email ? "border-red-400" : "border-gray-200"}`}
                      />
                      {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-brand-dark">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12 rounded-lg border border-gray-200 px-4 text-sm text-brand-dark placeholder:text-gray-400 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-brand-dark">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 000 000 0000"
                        className="h-12 rounded-lg border border-gray-200 px-4 text-sm text-brand-dark placeholder:text-gray-400 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-brand-dark">
                      Inquiry Type <span className="text-brand-orange">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                      className={`h-12 rounded-lg border px-4 text-sm text-brand-dark outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all bg-white appearance-none cursor-pointer ${errors.inquiryType ? "border-red-400" : "border-gray-200"} ${form.inquiryType === "Select an inquiry type" ? "text-gray-400" : "text-brand-dark"}`}
                    >
                      {inquiryTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          disabled={type === "Select an inquiry type"}
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryType && <span className="text-red-500 text-xs">{errors.inquiryType}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-brand-dark">
                      Message <span className="text-brand-orange">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      className={`rounded-lg border px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="self-start h-12 px-10 rounded-lg bg-brand-orange text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
