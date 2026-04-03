import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Tag, Download, ArrowRight } from 'lucide-react';
import { getProductById, getCategoryById, getProductsByCategory } from '../data/products';
import CategoryIcon from '../components/ui/CategoryIcon';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function ProductDetail() {
  const { categoryId, productId } = useParams();
  const product = getProductById(productId);
  const category = getCategoryById(categoryId);

  if (!product || !category) return <Navigate to="/products" replace />;

  const relatedProducts = getProductsByCategory(categoryId)
    .filter((p) => p.id !== productId)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gray-600 transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/products/${categoryId}`} className="hover:text-gray-600 transition-colors">{category.name}</Link>
            <span>/</span>
            <span className="text-gray-600 truncate max-w-xs">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to={`/products/${categoryId}`}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to {category.name}
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs bg-brand-50 border border-brand-100 text-brand-600 rounded-full px-3 py-1 font-medium">
                  <CategoryIcon name={category.icon} className="w-3 h-3" />
                  {category.name}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <p className="text-xl text-brand-500 font-medium">{product.tagline}</p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Product Overview</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </motion.div>

            {/* Applications */}
            {product.applications.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Applications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((app) => (
                    <div key={app} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technical Specs */}
            {product.specs.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                  <h2 className="text-lg font-semibold text-gray-900">Technical Specifications</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {product.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex items-center justify-between px-6 py-3 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <span className="text-sm text-gray-500 font-medium">{spec.label}</span>
                      <span className="text-sm text-gray-900 text-right max-w-xs">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Packaging */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
            >
              <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-brand-500" />
                Available Packaging
              </h3>
              {product.packaging.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {product.packaging.map((pkg) => (
                    <span
                      key={pkg}
                      className="text-sm bg-gray-100 border border-gray-200 text-gray-700 rounded-lg px-3 py-1.5"
                    >
                      {pkg}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">Contact us for packaging options.</p>
              )}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="bg-gradient-to-br from-brand-50 to-orange-50 border border-brand-100 rounded-2xl p-5"
            >
              <h3 className="text-gray-900 font-semibold mb-2">Interested in this product?</h3>
              <p className="text-sm text-gray-500 mb-5">
                Contact our sales team for pricing, availability, and bulk order inquiries.
              </p>
              <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                Request a Quote
              </Link>
              <Link to="/products" className="btn-secondary w-full justify-center text-sm mt-2">
                Browse More Products
              </Link>
            </motion.div>

            {/* Product Data Sheet */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
            >
              <h3 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                <Download className="w-4 h-4 text-brand-500" />
                Product Data Sheet
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Download the technical data sheet for complete specifications and handling instructions.
              </p>
              <button className="btn-secondary w-full justify-center text-sm opacity-50 cursor-not-allowed" disabled>
                <Download className="w-4 h-4" />
                Coming Soon
              </button>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
              <Link
                to={`/products/${categoryId}`}
                className="text-sm text-brand-500 hover:text-brand-600 flex items-center gap-1"
              >
                View all {category.name} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedProducts.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <Link
                    to={`/products/${rp.category}/${rp.id}`}
                    className="group card p-5 flex flex-col gap-3 hover:-translate-y-1 transition-transform"
                  >
                    <div className="w-9 h-9 bg-brand-50 group-hover:bg-brand-100 border border-brand-100 rounded-xl flex items-center justify-center transition-all">
                      <CategoryIcon name={category.icon} className="w-4 h-4 text-brand-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-sm font-semibold group-hover:text-brand-600 transition-colors">
                        {rp.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1 line-clamp-2">{rp.tagline}</p>
                    </div>
                    <div className="flex items-center gap-1 text-brand-500 text-xs font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      View <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
