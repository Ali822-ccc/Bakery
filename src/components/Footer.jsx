import { motion } from 'framer-motion';
import { Facebook, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="relative bg-[#3d2314] text-[#fdf6e9] py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d6b35e] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-serif font-black text-[#d6b35e] tracking-tight">
              Al Janaat Sweets
            </h2>
            <p className="text-sm leading-relaxed text-[#fdf6e9]/70 max-w-xs mx-auto md:mx-0">
              Wan Bhachran's finest bakery and sweets. Crafting traditional taste with modern hygiene since years.
            </p>
          </motion.div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#d6b35e] uppercase tracking-widest">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+923074826125" className="flex items-center justify-center md:justify-start gap-4 group transition-colors hover:text-[#d6b35e]">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#d6b35e]/50">
                  <Phone className="w-5 h-5 text-[#d6b35e]" />
                </div>
                <span className="text-sm font-medium">+92 307 4826125</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#d6b35e]" />
                </div>
                <span className="text-sm font-medium leading-snug text-left">
                  CMCW+MQ2, Main Bazar,<br /> Wan Bhachran
                </span>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#d6b35e] uppercase tracking-widest">Follow Our Taste</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {/* WhatsApp */}
              <a href="https://wa.me/923074826125" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-transparent hover:scale-110 transition-all duration-300 group">
                <MessageCircle className="w-6 h-6 text-[#d6b35e] group-hover:text-white" />
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-transparent hover:scale-110 transition-all duration-300 group">
                <Facebook className="w-6 h-6 text-[#d6b35e] group-hover:text-white" />
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:border-transparent hover:scale-110 transition-all duration-300 group">
                <Instagram className="w-6 h-6 text-[#d6b35e] group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium uppercase tracking-widest text-[#fdf6e9]/40">
          <p>© {currentYear} Al Janaat Sweet Branch 1. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-[#d6b35e]/60">Fresh Daily</span>
            <span className="text-[#d6b35e]/60">Takeout Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;