import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Target, TrendingUp, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every product meets or exceeds international standards. We never compromise on quality — our formulations are rigorously tested against API, ISO, JASO, and DOT specifications.',
  },
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'We understand that different industries have different needs. Our wide product portfolio ensures we have the right product for every application.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'We continuously improve our formulations to keep pace with evolving engine technologies and environmental regulations.',
  },
  {
    icon: Users,
    title: 'Industry Expertise',
    description: 'Our team brings deep technical knowledge across automotive, marine, industrial, and specialty chemical applications.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-100 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
              Powering the Philippines
              <br />
              <span className="text-brand-500">Since Day One</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              Promethium Marketing Company is a leading supplier of premium fuels, lubricants, and industrial products
              in the Philippines. We serve a wide range of industries — from automotive and marine to mining,
              agriculture, and power generation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Who We Are</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Promethium Marketing Company has built a reputation for reliability and quality in the Philippine
                  fuels and lubricants market. Our comprehensive product range spans over 98 SKUs across 7 major
                  categories — designed to meet the precise demands of the industries we serve.
                </p>
                <p>
                  From premium diesel fuels and specialized greases to heavy-duty marine lubricants and specialty
                  chemicals, every Promethium product is formulated using high-quality base stocks and proven
                  additive packages.
                </p>
                <p>
                  Our house brands — including <strong className="text-gray-700">Petrogrease</strong>,{' '}
                  <strong className="text-gray-700">Petromar</strong>,{' '}
                  <strong className="text-gray-700">Petromate</strong>, and{' '}
                  <strong className="text-gray-700">REV-X</strong> — have earned the trust of workshops, factories,
                  shipping companies, and fleet operators across the country.
                </p>
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
                { value: '98+', label: 'Product SKUs', sub: 'Across 7 categories' },
                { value: '7', label: 'Categories', sub: 'Fuels to specialty chemicals' },
                { value: 'PH', label: 'Philippines', sub: 'Nationwide reach' },
                { value: '100%', label: 'Commitment', sub: 'To quality & service' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-center"
                >
                  <div className="text-3xl font-black text-brand-500 mb-1">{stat.value}</div>
                  <div className="text-gray-900 font-semibold text-sm">{stat.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle mx-auto text-center">The principles that guide everything we do.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.1}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                  <val.icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Product Brands</h2>
            <p className="section-subtitle mx-auto text-center">Trusted brand names across the Philippine market.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { brand: 'Petrogrease', desc: 'Greases & lubricating compounds' },
              { brand: 'Petromar', desc: 'Marine engine lubricants' },
              { brand: 'Petromate', desc: 'Aftermarket automotive products' },
              { brand: 'REV-X', desc: 'Heavy-duty engine oils' },
              { brand: 'Sprint 4T', desc: 'Motorcycle engine oils' },
              { brand: 'Hydrotur', desc: 'Hydraulic & turbine oils' },
              { brand: "Bull's Eye", desc: 'Specialty weapons lubricant' },
              { brand: 'Voltran', desc: 'Transformer insulating oil' },
            ].map((item, i) => (
              <motion.div
                key={item.brand}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.05}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center hover:border-brand-300 hover:bg-brand-50/30 transition-all"
              >
                <div className="text-lg font-bold text-brand-500 mb-1">{item.brand}</div>
                <div className="text-xs text-gray-400">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-500 to-brand-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Partner with Promethium</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Explore our full product range or reach out to our team for custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors active:scale-95">
                View Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors active:scale-95">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
