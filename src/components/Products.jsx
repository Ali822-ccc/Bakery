import { motion } from 'framer-motion';
import { menuItems } from '../data/menu.js';

const Products = () => {
  return (
  <section className="products-section py-12 sm:py-20 lg:py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center text-brown mb-16"
      >
        Our Menu
      </motion.h2>
      <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {menuItems.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="product-card bg-cream rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border border-brown/10 transition-all duration-300 group"
          >
            <div className="product-image overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-brown mb-2">{item.name}</h3>
              <p className="text-brown/70 mb-4 leading-relaxed">{item.description}</p>
              <div className="price-tag bg-gold text-brown px-6 py-3 rounded-full font-bold text-xl inline-block shadow-lg">
                {item.price}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
