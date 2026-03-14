import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import ProductsGallery from './components/ProductsGallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[color:var(--cream)] to-transparent">
        <Nav />
        <main className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Products />} />
            <Route path="/products" element={<ProductsGallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
