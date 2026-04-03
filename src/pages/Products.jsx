import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Package, ArrowRight, Filter, X } from 'lucide-react';
import { categories, products, getCategoryById } from '../data/products';
import CategoryIcon from '../components/ui/CategoryIcon';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: 'easeOut' },
  }),
};

export default function Products() {
  const { categoryId } = useParams();
  const [search, setSearch] = useState('');

  const activeCategory = categoryId ? getCategoryById(categoryId) : null;

  const filtered = useMemo(() => {
    let list = categoryId ? products.filter((p) => p.category === categoryId) : products;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q)
      );
    }
    return list;
  }, [categoryId, search]);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gray-600 transition-colors">Products</Link>
            {activeCategory && (
              <>
                <span>/</span>
                <span className="text-gray-600">{activeCategory.name}</span>
              </>
            )}
          </div>

          {activeCategory ? (
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-50 border border-brand-100 rounded-2xl flex items-center justify-center">
                <CategoryIcon name={activeCategory.icon} className="w-6 h-6 text-brand-500" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{activeCategory.name}</h1>
                <p className="text-gray-500 mt-1">{activeCategory.description}</p>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">All Products</h1>
              <p className="text-gray-500">Browse our complete range of fuels, lubricants, and specialty products.</p>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="px-4 py-3 border-b border-gray-100">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <Filter className="w-3 h-3" /> Categories
                  </span>
                </div>
                <div className="p-2">
                  <Link
                    to="/products"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      !categoryId ? 'bg-brand-50 text-brand-600 font-medium' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Package className="w-4 h-4" />
                    All Products
                    <span className="ml-auto text-xs text-gray-400">{products.length}</span>
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products/${cat.id}`}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        categoryId === cat.id ? 'bg-brand-50 text-brand-600 font-medium' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <CategoryIcon name={cat.icon} className="w-4 h-4" />
                      {cat.name}
                      <span className="ml-auto text-xs text-gray-400">
                        {products.filter((p) => p.category === cat.id).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
                {search && ` for "${search}"`}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400">No products found{search ? ` for "${search}"` : ''}.</p>
                <button onClick={() => setSearch('')} className="mt-4 text-brand-500 text-sm hover:underline">
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={i}
                  >
                    <Link
                      to={`/products/${product.category}/${product.id}`}
                      className="group card flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
                    >
                      {/* Card Top */}
                      <div className="bg-gradient-to-br from-gray-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-start justify-between gap-3">
                          <div className="w-10 h-10 bg-brand-50 group-hover:bg-brand-100 border border-brand-100 rounded-xl flex items-center justify-center transition-all flex-shrink-0">
                            <CategoryIcon
                              name={categories.find((c) => c.id === product.category)?.icon || 'Package'}
                              className="w-4 h-4 text-brand-500"
                            />
                          </div>
                          <span className="text-xs bg-gray-100 border border-gray-200 text-gray-500 rounded-full px-2 py-0.5 capitalize">
                            {categories.find((c) => c.id === product.category)?.name}
                          </span>
                        </div>
                        <h3 className="text-gray-900 font-semibold mt-4 text-base group-hover:text-brand-600 transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1 line-clamp-1">{product.tagline}</p>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                          {product.description}
                        </p>

                        {product.packaging.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {product.packaging.slice(0, 2).map((pkg) => (
                              <span
                                key={pkg}
                                className="text-xs bg-gray-100 border border-gray-200 text-gray-500 rounded-md px-2 py-0.5"
                              >
                                {pkg}
                              </span>
                            ))}
                            {product.packaging.length > 2 && (
                              <span className="text-xs text-gray-400">+{product.packaging.length - 2} more</span>
                            )}
                          </div>
                        )}

                        <div className="mt-4 flex items-center gap-1 text-brand-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          View details <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
