import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Shield, Zap, Globe, Award, ChevronRight,
  Fuel, Droplets, Car, Factory, Wrench, Anchor, Star
} from 'lucide-react';
import { categories } from '../data/products';
import CategoryIcon from '../components/ui/CategoryIcon';

const stats = [
  { value: '98+', label: 'Product SKUs' },
  { value: '7', label: 'Product Categories' },
  { value: '30+', label: 'Years Experience' },
  { value: 'PH', label: 'Nationwide Coverage' },
];

const features = [
  {
    icon: Shield,
    title: 'Certified Quality',
    description: 'Our products meet international standards including API, JASO, ISO, and DOT certifications.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Advanced formulations using premium base stocks and additive packages for optimal performance.',
  },
  {
    icon: Globe,
    title: 'Wide Coverage',
    description: 'Serving industrial, automotive, marine, and agricultural sectors across the Philippines.',
  },
  {
    icon: Award,
    title: 'Trusted Brand',
    description: 'Decades of experience supplying fuels and lubricants to leading Philippine industries.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-50" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-600 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
              Premium Fuels & Lubricants — Philippines
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight mb-6"
          >
            Power Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
              Industrial World
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Promethium Marketing Company delivers premium fuels, greases, automotive & industrial lubricants,
            and specialty products engineered for the Philippines' most demanding applications.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products" className="btn-primary text-base px-8 py-4">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-8 py-4">
              Request a Quote
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-brand-500 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle">
              From fuels to specialty chemicals — comprehensive solutions for every industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.05}
              >
                <Link
                  to={`/products/${cat.id}`}
                  className="group card p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-brand-50 group-hover:bg-brand-100 border border-brand-100 group-hover:border-brand-200 rounded-xl flex items-center justify-center transition-all">
                    <CategoryIcon name={cat.icon} className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1 group-hover:text-brand-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-brand-500 text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                    View products <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-8 text-center"
          >
            <Link to="/products" className="btn-secondary">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose Promethium</h2>
            <p className="section-subtitle mx-auto text-center">
              Built on decades of expertise in the Philippine fuels and lubricants industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.1}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:bg-brand-50/30 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">Industries Served</span>
              <h2 className="section-title mt-3 mb-5">Engineered for Every Sector</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                From sugar mills to shipping fleets, from automotive workshops to transformer substations —
                Promethium's product range is engineered to meet the specific demands of Philippine industry.
              </p>
              <div className="space-y-3">
                {[
                  'Automotive & Transportation',
                  'Marine & Shipping',
                  'Industrial Manufacturing',
                  'Agriculture & Sugar Mills',
                  'Mining & Construction',
                  'Power Generation',
                  'Food Processing',
                  'Armed Forces & Law Enforcement',
                ].map((industry) => (
                  <div key={industry} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Car, label: 'Automotive', count: '25 products' },
                { icon: Factory, label: 'Industrial', count: '27 products' },
                { icon: Anchor, label: 'Marine', count: '13 products' },
                { icon: Star, label: 'Special', count: '23 products' },
                { icon: Fuel, label: 'Fuels', count: '4 products' },
                { icon: Droplets, label: 'Greases', count: '9 products' },
                { icon: Wrench, label: 'Aftermarket', count: '10 products' },
                { icon: Globe, label: 'Total Range', count: '98+ SKUs' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-300 hover:shadow-sm transition-all"
                >
                  <item.icon className="w-5 h-5 text-brand-500 mb-3" />
                  <div className="text-gray-900 font-medium text-sm">{item.label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{item.count}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-500 to-brand-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Ready to Partner with Us?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Contact our team for product inquiries, technical specifications, or bulk pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors active:scale-95 text-base">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors active:scale-95 text-base">
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
