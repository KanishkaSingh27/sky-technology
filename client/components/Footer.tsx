import { Link } from "react-router-dom";
import { Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-light-blue">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 pb-6">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F25051e3b1b434aed9b472f7f2ac405f0%2F9b536fb582b44cefae0a59f3f49128e4?format=webp&width=800&height=1200"
                alt="SKY Technology"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-brand-peach text-sm leading-6">
              Architecting the future of enterprise cloud and digital infrastructure.
            </p>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-6">
            <h4 className="font-jakarta font-bold text-xl text-brand-light-orange">Solutions</h4>
            <ul className="flex flex-col gap-4">
              {["Cloud Migration", "Data Analytics", "AI/ML Integration", "Cybersecurity"].map((item) => (
                <li key={item}>
                  <Link
                    to="/solutions"
                    className="text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6">
            <h4 className="font-jakarta font-bold text-xl text-brand-light-orange">Company</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/about"
                  className="text-brand-peach font-bold text-sm leading-6 underline hover:text-brand-light-orange transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                >
                  Global Offices
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-6">
            <h4 className="font-jakarta font-bold text-xl text-brand-light-orange">Connect</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                >
                  <Globe size={15} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://scanbiz.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                >
                  <Mail size={15} />
                  ScanBiz
                </a>
              </li>
            </ul>

            {/* Support box */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex flex-col gap-1">
              <span className="text-brand-peach text-xs font-medium">Global Support</span>
              <a
                href="mailto:info@sky-tek.net"
                className="text-brand-light-orange font-bold text-sm leading-6 hover:underline transition-colors duration-200"
              >
                info@sky-tek.net
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8">
          <p className="text-brand-light-blue text-sm">
            © 2026 SKY Technology Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
