import { motion } from 'framer-motion';

const productImages = [
  '/images/rasgulla.jpg',
  '/images/gulab jamun.jpg',
  '/images/burfi.jpeg',
  '/images/bread.jpg',
];

const ProductsGallery = () => {
  return (
    <section className="products-gallery-section py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center text-brown mb-16"
      >
        Our Products
      </motion.h2>
      <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="product-item overflow-hidden rounded-2xl shadow-xl group cursor-pointer hover:shadow-2xl transition-all duration-500"
          >
            <img 
              src={src} 
              alt="Product image"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsGallery;

