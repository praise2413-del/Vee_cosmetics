import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Plus, Edit2, Trash2, ArrowLeft, Check, Upload, Sparkles } from 'lucide-react';

export default function Admin({ productsList, saveProducts, setActivePage }) {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Form states
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Skincare',
    price: '',
    image: '/product1.jpeg',
    description: '',
    featuresText: ''
  });

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Default correct PIN
  const CORRECT_PIN = '!@#$';

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPin('');
      setTimeout(() => setPinError(false), 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Parse features text by comma or newline
    const features = formData.featuresText
      ? formData.featuresText.split(/,|\n/).map(f => f.trim()).filter(f => f.length > 0)
      : [];

    const productData = {
      name: formData.name,
      category: formData.category,
      price: formData.price,
      image: formData.image || '/product1.jpeg',
      description: formData.description,
      features: features
    };

    if (isEditing) {
      // Update existing product
      const updatedList = productsList.map(p =>
        p.id === editId ? { ...p, ...productData } : p
      );
      saveProducts(updatedList);
      setToastMessage('Bidhaa imesasishwa kikamilifu!');
    } else {
      // Add new product
      const newId = productsList.length > 0 ? Math.max(...productsList.map(p => p.id)) + 1 : 1;
      const newProduct = {
        id: newId,
        ...productData
      };
      saveProducts([...productsList, newProduct]);
      setToastMessage('Bidhaa mpya imeongezwa kikamilifu!');
    }

    // Reset Form
    resetForm();
    triggerToast();
  };

  const handleEditClick = (product) => {
    setIsEditing(true);
    setEditId(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      description: product.description,
      featuresText: product.features ? product.features.join(', ') : ''
    });
    // Scroll form into view on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Je, una uhakika unataka kufuta bidhaa hii kutoka kwenye catalog?')) {
      const updatedList = productsList.filter(p => p.id !== id);
      saveProducts(updatedList);
      setToastMessage('Bidhaa imefutwa kikamilifu!');
      triggerToast();
      if (isEditing && editId === id) {
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditId(null);
    setFormData({
      name: '',
      category: 'Skincare',
      price: '',
      image: '/product1.webp',
      description: '',
      featuresText: ''
    });
  };

  const triggerToast = () => {
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  // 1. PIN Authorization Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-bg-base transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-card-bg border border-border-base p-8 rounded-3xl shadow-xl text-center space-y-6"
        >
          <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold">
            <ShieldAlert className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-bold text-text-base">Admin Security Gate</h2>
            <p className="text-sm text-text-muted">
              Tafadhali weka PIN ya usimamizi ili kuongeza au kusasisha bidhaa za duka.
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <input
              type="password"
              maxLength="6"
              //placeholder="Weka PIN yako (e.g. 1234)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className={`w-full text-center px-4 py-3 rounded-xl border focus:outline-none focus-visible:ring-2 bg-bg-base/50 text-text-base font-bold tracking-widest text-lg transition-all ${pinError
                ? 'border-red-500 focus:border-red-500 focus-visible:ring-red-500 animate-shake'
                : 'border-border-base focus:border-gold focus-visible:ring-gold'
                }`}
              autoComplete="current-password"
              autoFocus
            />

            {pinError && (
              <p className="text-xs text-red-500 font-semibold">PIN siyo sahihi. Jaribu tena!</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gold hover:bg-gold-hover text-white font-semibold uppercase tracking-wider text-xs shadow-md transition-colors cursor-pointer"
            >
              Verify PIN
            </button>
          </form>

          <button
            onClick={() => setActivePage('home')}
            className="inline-flex items-center text-xs font-semibold text-text-muted hover:text-gold transition-colors gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Rudi Nyumbani</span>
          </button>
        </motion.div>
      </div>
    );
  }

  // 2. Admin Dashboard View
  return (
    <div className="min-h-screen bg-bg-base transition-colors duration-300 py-12 px-4 md:px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Success Toast */}
        {showSuccessToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg flex items-center space-x-2 animate-slide-in">
            <Check className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm font-semibold">{toastMessage}</span>
          </div>
        )}

        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-border-base/50 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">Store Management Panel</span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-base">
              Vee Cosmetics <span className="gold-gradient">Admin Dashboard</span>
            </h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setActivePage('collections')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-gold/40 hover:border-gold text-gold font-medium hover:bg-rose-light/20 transition-all duration-300 text-xs uppercase tracking-wider cursor-pointer gap-1.5"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Store</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Panel: Form Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card-bg border border-border-base p-6 rounded-3xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-border-base/40 pb-3">
                <h2 className="font-serif text-xl font-bold text-text-base flex items-center gap-1.5">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span>{isEditing ? 'Hariri Bidhaa (Edit Product)' : 'Ongeza Bidhaa Mpya'}</span>
                </h2>
                {isEditing && (
                  <button
                    onClick={resetForm}
                    className="text-xs text-rose-primary hover:text-rose-hover font-semibold transition-colors"
                  >
                    Ghairi (Cancel)
                  </button>
                )}
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">

                {/* Product Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-base">Jina la Bidhaa *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Luxury Shea Cream"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/40 text-text-base text-sm transition-all"
                  />
                </div>

                {/* Grid Row: Category and Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Category Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-base">Kundi (Category) *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/40 text-text-base text-sm transition-all cursor-pointer"
                    >
                      <option value="Skincare">Skincare</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Body Care">Body Care</option>
                      <option value="Hair & Beauty">Hair & Beauty</option>
                    </select>
                  </div>

                  {/* Price */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-base">Bei ya TSh *</label>
                    <input
                      type="text"
                      name="price"
                      required
                      placeholder="e.g. 35,000"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/40 text-text-base text-sm transition-all"
                    />
                  </div>

                </div>

                {/* Local Image Path */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-base">Jina la Picha (Public Image File) *</label>
                    <span className="text-[10px] text-text-muted font-mono bg-bg-base px-2 py-0.5 rounded">e.g. /product17.webp</span>
                  </div>
                  <input
                    type="text"
                    name="image"
                    required
                    placeholder="e.g. /product17.webp"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/40 text-text-base text-sm transition-all font-mono"
                  />
                  <p className="text-[10px] text-text-muted leading-relaxed">
                    Weka picha yako kwenye folda ya <strong>public/</strong> na uandike jina lake hapa (k.m. <code>/product17.webp</code> au <code>/perfume1.webp</code>).
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-base">Maelezo ya Bidhaa (Description) *</label>
                  <textarea
                    name="description"
                    rows="3"
                    required
                    placeholder="Andika maelezo ya kina ya bidhaa hii..."
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/40 text-text-base text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Highlights / Features */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-base">Sifa za Bidhaa (comma-separated highlights)</label>
                  <textarea
                    name="featuresText"
                    rows="2"
                    placeholder="e.g. Deep hydration, 100% Organic, Hypoallergenic"
                    value={formData.featuresText}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/40 text-text-base text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-grow inline-flex items-center justify-center px-6 py-3 rounded-full bg-gold hover:bg-gold-hover text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer gap-1.5"
                  >
                    <Plus className="h-4.5 w-4.5" />
                    <span>{isEditing ? 'Update Bidhaa' : 'Ongeza Kwenye Duka'}</span>
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-3 rounded-full border border-border-base text-text-base hover:bg-rose-light/10 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

              </form>
            </div>
          </div>

          {/* Right Panel: Product Grid List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-card-bg border border-border-base p-6 rounded-3xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-border-base/40 pb-3">
                <h2 className="font-serif text-xl font-bold text-text-base">
                  Daftari la Bidhaa ({productsList.length})
                </h2>
                <span className="text-xs text-text-muted">Jumla ya bidhaa zinazoonyeshwa</span>
              </div>

              {/* Product list */}
              <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2">
                {productsList.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 bg-bg-base/40 hover:bg-rose-light/10 border border-border-base rounded-2xl transition-all group"
                  >
                    {/* Left: Thumbnail & basic info */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image || '/product1.webp'}
                        alt={product.name}
                        className="w-16 h-16 rounded-xl object-cover border border-border-base flex-shrink-0"
                        onError={(e) => {
                          e.target.src = '/product1.webp'; // fallback if path doesn't load
                        }}
                      />
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-gold/15 dark:bg-gold/10 px-2 py-0.5 rounded">
                          {product.category}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-text-base line-clamp-1">{product.name}</h4>
                        <p className="text-xs font-semibold text-gold">{product.price} TSh</p>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditClick(product)}
                        className="p-2.5 rounded-full bg-card-bg border border-border-base hover:border-gold hover:text-gold text-text-muted transition-all cursor-pointer"
                        title="Hariri Bidhaa"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(product.id)}
                        className="p-2.5 rounded-full bg-card-bg border border-border-base hover:border-red-500 hover:text-red-500 text-text-muted transition-all cursor-pointer"
                        title="Futa Bidhaa"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {productsList.length === 0 && (
                  <div className="text-center py-10 text-text-muted text-sm font-medium">
                    Hakuna bidhaa kwenye catalog kwa sasa. Tumia fomu ya kushoto kuongeza!
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
