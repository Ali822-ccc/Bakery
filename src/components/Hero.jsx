import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    '/images/rasgulla.jpg',
    '/images/gulab jamun.jpg',
    '/images/burfi.jpeg',
    '/images/Croissant.jpg',
    '/images/bread 1.jpg',
    '/images/biscuts1.jpg'
  ];

  const heroNames = [
    'Traditional Rasgulla',
    'Hot Gulab Jamun',
    'Special Milk Burfi',
    'Butter Croissant',
    'Artisan Fresh Bread',
    'Crunchy Biscuits'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#fdf6e9]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#d6b35e]/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-[#3d2314]/5 blur-[100px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        {/* Slider Section - Adjusted for perfect visibility */}
        <div className="w-full max-w-6xl mx-auto px-4 mt-6 md:mt-8 relative z-10">
          <div className="relative group shadow-2xl rounded-[2.5rem] overflow-hidden border-[6px] border-white bg-white">

            {/* Animated Label Overlay - Position adjusted */}
            <div className="absolute top-4 left-4 z-20">
              <span className="bg-white/95 backdrop-blur-md text-[#3d2314] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md border border-[#d6b35e]/20">
                Freshly Baked Today
              </span>
            </div>

            {/* Image height slightly adjusted for better aspect ratio */}
            <div className="relative h-[50vh] md:h-[60vh] lg:h-[65vh] w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={heroImages[currentIndex]}

                  alt={heroNames[currentIndex]}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-[#d6b35e] font-serif text-3xl md:text-5xl font-black mb-2 drop-shadow-lg">
                    {heroNames[currentIndex]}
                  </h3>
                  <p className="text-white/90 text-sm md:text-lg font-medium flex items-center gap-2">
                    Premium Quality Ingredients <ArrowRight className="w-4 h-4 text-[#d6b35e]" />
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Subtle Slider Dots Overlay */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 bg-[#d6b35e]' : 'w-2 bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Section below slider */}
        <div className="text-center mt-10 px-4 pb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-black text-[#3d2314] mb-3 tracking-tight">
              Al Janaat Sweets
            </h1>
            <p className="text-[#3d2314]/60 text-base md:text-xl max-w-lg mx-auto mb-6 leading-relaxed">
              Bringing the authentic taste of Wan Bhachran to your doorstep with love and hygiene.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d6b35e] text-[#d6b35e]" />
                ))}
              </div>
              <div className="h-4 w-px bg-[#3d2314]/20" />
              <span className="text-[#3d2314] font-bold text-sm tracking-widest">5.0 RATED BAKEHOUSE</span>
            </div>

            <Link
              to="/menu"
              className="group relative inline-flex items-center gap-3 bg-[#3d2314] text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl hover:bg-[#d6b35e] hover:text-[#3d2314] transition-all duration-500"
            >
              Explore Our Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;