import { motion } from 'framer-motion';
import { Phone, MapPin, Facebook, Mail } from 'lucide-react';

const Contact = () => {
  return (
  <section className="contact-section py-12 sm:py-20 lg:py-24 px-4 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center text-brown mb-16"
      >
        Contact Us
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="contact-info space-y-8"
        >
          <div className="info-item flex items-start gap-4 p-6 bg-cream rounded-2xl shadow-xl">
            <Phone className="w-12 h-12 text-gold mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-brown mb-2">Phone</h3>
              <a href="tel:+923074826125" className="text-2xl font-bold text-brown hover:text-gold transition-colors">+92 307 4826125</a>
            </div>
          </div>
          
          <div className="info-item flex items-start gap-4 p-6 bg-cream rounded-2xl shadow-xl">
            <MapPin className="w-12 h-12 text-gold mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-brown mb-2">Location</h3>
              <p className="text-lg text-brown">CMCW+MQ2, Wan Bhachran, Pakistan</p>
            </div>
          </div>

          <div className="info-item flex items-center gap-4 p-6 bg-cream rounded-2xl shadow-xl">
            <Facebook className="w-12 h-12 text-gold" />
            <div>
              <h3 className="text-xl font-bold text-brown mb-2">Facebook</h3>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-700 text-lg">
                facebook.com/aljanaatsweets
              </a>
            </div>
          </div>

          <div className="col-span-full md:col-span-1 pt-8">
            <p className="text-center text-brown text-lg mb-4">Visit us for takeout!</p>
            <div className="status-badge bg-gold text-brown px-8 py-4 rounded-full font-bold text-xl mx-auto w-fit shadow-lg">
              Open Daily
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="map-container rounded-3xl shadow-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.0!2d71.5!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiA3McKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Janaat Location"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
