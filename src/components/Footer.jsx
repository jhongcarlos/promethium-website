import { Link } from 'react-router-dom';
import { Flame, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { categories } from '../data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-5">
              <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Promethium</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Promethium Marketing Company — delivering premium fuels, lubricants, and industrial products across the Philippines.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="mailto:info@promethium.com.ph"
                className="w-9 h-9 bg-gray-800 hover:bg-brand-500/20 border border-gray-700 hover:border-brand-500/40 rounded-lg flex items-center justify-center text-gray-400 hover:text-brand-400 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'All Products', to: '/products' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-brand-400 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products/${cat.id}`}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-brand-400 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Philippines</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <a href="mailto:info@promethium.com.ph" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                  info@promethium.com.ph
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">Contact us for inquiries</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Promethium Marketing Company. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">Philippines</p>
        </div>
      </div>
    </footer>
  );
}
