import React from 'react';
import { Award, Globe, Package, Users, Star, Truck } from 'lucide-react';

const Handicrafts = () => {
  const products = [
    {
      id: 1,
      title: 'Handcrafted Wooden Dining Set',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Exquisite dining set crafted from premium Pakistani wood'
    },
    {
      id: 2,
      title: 'Decorative Wall Art',
      category: 'Decor',
      image: 'https://images.pexels.com/photos/1090641/pexels-photo-1090641.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Traditional Pakistani motifs in modern wooden art pieces'
    },
    {
      id: 3,
      title: 'Carved Jewelry Box',
      category: 'Accessories',
      image: 'https://images.pexels.com/photos/1090644/pexels-photo-1090644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intricately carved jewelry boxes with traditional designs'
    },
    {
      id: 4,
      title: 'Wooden Coffee Table',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/1090647/pexels-photo-1090647.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern coffee table with traditional craftsmanship'
    },
    {
      id: 5,
      title: 'Decorative Bowls Set',
      category: 'Kitchenware',
      image: 'https://images.pexels.com/photos/1090650/pexels-photo-1090650.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Handturned wooden bowls perfect for serving'
    },
    {
      id: 6,
      title: 'Carved Mirror Frame',
      category: 'Decor',
      image: 'https://images.pexels.com/photos/1090653/pexels-photo-1090653.jpeg?auto=compress&cs=tinysrgb&w=800',
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

  const testimonials = [
    {
      name: 'James Wilson',
      company: 'European Imports Ltd',
      country: 'UK',
      content: 'Silazaar products are exceptional. The quality and craftsmanship exceed our expectations every time.',
      rating: 5
    },
    {
      name: 'Sophie Martin',
      company: 'Artisan Collective',
      country: 'France',
      content: 'Beautiful handcrafted pieces that our customers love. Reliable supplier with consistent quality.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Asian Handicrafts Co',
      country: 'Singapore',
      content: 'Professional service and stunning products. Perfect for our premium retail chain.',
      rating: 5
    }
  ];

  const qualityStandards = [
    'Premium Pakistani hardwood sourcing',
    'Traditional hand-carving techniques',
    'Eco-friendly finishing materials',
    'Quality control at every stage',
    'International packaging standards',
    'Certified export documentation'
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Silazaar</h1>
              <p className="text-2xl text-amber-200">Premium Wooden Handicrafts</p>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Exquisite handcrafted wooden products meeting international standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Wholesale Inquiry
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-colors">
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Silazaar Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Silazaar represents the finest tradition of Pakistani woodcraft, combining 
                centuries-old techniques with modern design sensibilities. Each piece is 
                meticulously handcrafted by skilled artisans who have inherited their craft 
                through generations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to quality and authenticity has made Silazaar a trusted name 
                in international markets, bringing the beauty of Pakistani craftsmanship to 
                homes and businesses worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">50+</div>
                  <div className="text-gray-600">Master Artisans</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">25+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Silazaar Craftsmanship"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Gallery</h2>
            <p className="text-xl text-gray-600">
              Discover our collection of premium handcrafted wooden products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition-colors">
                    Wholesale Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Silazaar?</h2>
            <p className="text-xl text-gray-600">
              Premium quality and international standards in every product
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-lg text-center">
                <feature.icon className="w-12 h-12 text-amber-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1090641/pexels-photo-1090641.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality Craftsmanship"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Standards</h2>
              <p className="text-lg text-gray-600 mb-8">
                Every Silazaar product undergoes rigorous quality control to ensure 
                it meets our high standards and international requirements.
              </p>
              <div className="space-y-4">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  <p className="text-amber-700 text-sm font-medium">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Information */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wholesale Information</h2>
            <p className="text-xl text-gray-600">
              Partner with us for premium wooden handicrafts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Package className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Minimum Orders</h3>
              <p className="text-gray-600">Starting from 50 pieces per design</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Truck className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Shipping</h3>
              <p className="text-gray-600">Worldwide delivery with secure packaging</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Users className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Designs</h3>
              <p className="text-gray-600">Bespoke products for bulk orders</p>
            </div>
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
          <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Submit Wholesale Inquiry
          </button>
        </div>
      </section>
    </div>
  );
};

export default Handicrafts;