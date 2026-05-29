import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-light-blue">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-14 pb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F25051e3b1b434aed9b472f7f2ac405f0%2F9b536fb582b44cefae0a59f3f49128e4?format=webp&width=800&height=1200"
                alt="SKY Technology"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-brand-peach text-sm leading-6 max-w-[220px]">
              Leading the horizon in enterprise software solutions and cloud-native digital transformation across the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-jakarta font-bold text-base text-brand-light-orange">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/services"
                  className="text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-brand-light-blue text-sm leading-6 underline font-semibold hover:text-brand-light-orange transition-colors duration-200"
                >
                  Solutions
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
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-5">
            <h4 className="font-jakarta font-bold text-base text-brand-light-orange">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@sky-tek.net"
                  className="text-brand-light-blue text-sm leading-6 hover:text-brand-light-orange transition-colors duration-200"
                >
                  info@sky-tek.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-brand-light-blue text-sm">
            © 2026 SKY Technology Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
