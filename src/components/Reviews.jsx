import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews } from '../data/reviews.js';

const Reviews = () => {
  return (
    <section className="reviews-section py-24 px-4 max-w-4xl mx-auto bg-cream/50">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center text-brown mb-4"
      >
        Customer Reviews
      </motion.h2>
      <div className="rating-display flex items-center justify-center gap-2 mb-20">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-gold text-gold" />
          ))}
        </div>
        <span className="text-4xl font-bold text-gold">5.0</span>
      </div>
      <div className="reviews-grid grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="review-card p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-brown/5"
          >
            <div className="stars mb-4 flex">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-brown italic mb-6 leading-relaxed text-lg">"{review.text}"</p>
            <div className="author font-semibold text-brown">{review.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
