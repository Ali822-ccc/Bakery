import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section py-24 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown mb-8">
            About Al Janaat Sweet Branch 1
          </h2>
          <p className="text-lg text-brown mb-6 leading-relaxed">
            Welcome to Al Janaat Sweet Branch 1, your premier destination for exquisite sweets and fresh bakery products in Wan Bhachran. 
            With a passion for perfection, we craft every item with premium ingredients and traditional recipes passed down through generations.
          </p>
          <p className="text-lg text-brown mb-8 leading-relaxed">
            From decadent cakes and traditional desi sweets to buttery pastries and biscuits, our commitment to quality and customer satisfaction has earned us a perfect 5.0 rating. 
            Takeout available for all your sweet cravings!
          </p>
          <div className="stats grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">5.0</div>
              <div>Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">Daily Fresh</div>
              <div>Baked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">Takeout</div>
              <div>Available</div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="about-image rounded-3xl shadow-2xl overflow-hidden"
style={{ backgroundImage: "url('/src/assets/Croissant.jpg')", backgroundSize: 'cover', height: '500px' }}
        />
      </motion.div>
    </section>
  );
};

export default About;
