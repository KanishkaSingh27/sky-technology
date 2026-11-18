import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
   <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm">
           <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
             <div className="flex items-center gap-3">
               
               <Link to="/" className="flex-shrink-0">
                         <img
                           src="https://cdn.builder.io/api/v1/image/assets%2F25051e3b1b434aed9b472f7f2ac405f0%2F9b536fb582b44cefae0a59f3f49128e4?format=webp&width=800&height=1200"
                           alt="SKY Technology"
                           className="h-9 w-auto object-contain"
                         />
                       </Link>
             </div>
   
             <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
               <a href="/About" className="hover:text-[#9A4600] transition-colors">
                 About Us
               </a>
               <a href="/Services" className="hover:text-[#9A4600] transition-colors">
                 Services
               </a>
               <a href="/Solutions" className="hover:text-[#9A4600] transition-colors">
                 Solutions
               </a>
               <a href="/Contact" className="hover:text-[#9A4600] transition-colors">
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
               <a href="/About" onClick={() => setMobileMenuOpen(false)}>
                 About Us
               </a>
               <a href="/Services" onClick={() => setMobileMenuOpen(false)}>
                 Services
               </a>
               <a href="/Solutions" onClick={() => setMobileMenuOpen(false)}>
                 Solutions
               </a>
               <a href="/Contact" onClick={() => setMobileMenuOpen(false)}>
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
  )
}
