import React from 'react';
import { Award, Globe, Package, Users, Star, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SelazaarHandicrafts = () => {
  const products = [
    {
      id: 1,
      title: 'Handcrafted Wooden Dining Set',
      category: 'Furniture',
      description: 'Exquisite dining set crafted from premium Pakistani wood'
    },
    {
      id: 2,
      title: 'Decorative Wall Art',
      category: 'Decor',
      description: 'Traditional Pakistani motifs in modern wooden art pieces'
    },
    {
      id: 3,
      title: 'Carved Jewelry Box',
      category: 'Accessories',
      description: 'Intricately carved jewelry boxes with traditional designs'
    },
    {
      id: 4,
      title: 'Wooden Coffee Table',
      category: 'Furniture',
      description: 'Modern coffee table with traditional craftsmanship'
    },
    {
      id: 5,
      title: 'Decorative Bowls Set',
      category: 'Kitchenware',
      description: 'Handturned wooden bowls perfect for serving'
    },
    {
      id: 6,
      title: 'Carved Mirror Frame',
      category: 'Decor',
      description: 'Ornate mirror frames with traditional Pakistani carvings'
    }
  ];

  const features = [
    {
      title: 'International Standards',
      description: 'All products meet international quality and safety standards',
      icon: Award
    },
    {
      title: 'Export Ready',
      description: 'Products packaged and certified for international shipping',
      icon: Globe
    },
    {
      title: 'Wholesale Only',
      description: 'Minimum order quantities for wholesale buyers',
      icon: Package
    },
    {
      title: 'Custom Orders',
      description: 'Bespoke designs available for bulk orders',
      icon: Users
    }
  ];

  const whyChooseUs = [
    'Premium Pakistani hardwood sourcing',
    'Traditional hand-carving techniques',
    'Eco-friendly finishing materials',
    'Quality control at every stage',
    'International packaging standards',
    'Certified export documentation'
  ];

  const testimonials = [
    {
      name: 'Emily Rodriguez',
      company: 'European Imports Ltd',
      country: 'UK',
      content: 'Silazaar products are exceptional. The quality and craftsmanship exceed our expectations every time.',
      rating: 5
    },
    {
      name: 'Isabella Chen',
      company: 'Artisan Collective',
      country: 'France',
      content: 'Beautiful handcrafted pieces that our customers love. Reliable supplier with consistent quality.',
      rating: 5
    },
    {
      name: 'Sarah Thompson',
      company: 'Asian Handicrafts Co',
      country: 'Singapore',
      content: 'Professional service and stunning products. Perfect for our premium retail chain.',
      rating: 5
    },
    {
      name: 'Maria Gonzalez',
      company: 'Home Decor International',
      country: 'Spain',
      content: 'Outstanding quality and attention to detail. Our customers are always impressed with Silazaar products.',
      rating: 5
    },
    {
      name: 'Anna Kowalski',
      company: 'Nordic Crafts',
      country: 'Sweden',
      content: 'Exceptional craftsmanship that perfectly matches our Scandinavian aesthetic. Highly recommended.',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      company: 'Premium Home Goods',
      country: 'Australia',
      content: 'The best wooden handicrafts we have sourced. Quality is consistently excellent across all orders.',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Selazaar</h1>
              <p className="text-2xl text-amber-200">Premium Wooden Handicrafts</p>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Exquisite handcrafted wooden products meeting international standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/wholesale-inquiry"
                className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Wholesale Inquiry
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-all duration-300">
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Gallery</h2>
            <p className="text-xl text-gray-600">
              Discover our collection of premium handcrafted wooden products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-64 bg-amber-50 flex items-center justify-center">
                  <Package className="w-16 h-16 text-amber-700" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>MOQ: 50+ pieces</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Export Ready</span>
                    </div>
                  </div>
                  <Link
                    to="/wholesale-inquiry"
                    className="w-full bg-amber-700 text-white py-2 px-4 rounded-lg hover:bg-amber-800 transition-all duration-300 hover:scale-105 inline-block text-center"
                  >
                    Wholesale Inquiry
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Silazaar?</h2>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Selazaar?</h2>
            <p className="text-xl text-gray-600">
              Premium quality and international standards in every product
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <feature.icon className="w-12 h-12 text-amber-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Standards</h2>
            <p className="text-xl text-gray-600">
              Every Silazaar product undergoes rigorous quality control
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-amber-700 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">International Partners</h2>
            <p className="text-xl text-gray-600">
              Trusted by wholesale buyers and retailers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    <p className="text-amber-700 text-sm font-medium">{testimonial.country}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Wholesale Partnership</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our network of international partners and bring authentic Pakistani craftsmanship to your market
          </p>
          <Link
            to="/wholesale-inquiry"
            className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Submit Wholesale Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
};


export default SelazaarHandicrafts