import React from 'react';
import { Globe, TrendingUp, Package, Users, CheckCircle, Cpu, Zap, BarChart3 } from 'lucide-react';

const ImportExport = () => {
  const services = [
    {
      title: 'Local Trading',
      description: 'Comprehensive domestic trade solutions across Pakistan',
      icon: Package,
      features: ['Supply chain management', 'Local distribution networks', 'Quality assurance']
    },
    {
      title: 'International Trading',
      description: 'Global import/export services with worldwide reach',
      icon: Globe,
      features: ['Customs clearance', 'International logistics', 'Trade documentation']
    },
    {
      title: 'Export Facilitation',
      description: 'End-to-end export support for Pakistani businesses',
      icon: TrendingUp,
      features: ['Market research', 'Export licensing', 'Shipping coordination']
    },
    {
      title: 'Product Marketing',
      description: 'Strategic marketing solutions for global markets',
      icon: Users,
      features: ['Brand positioning', 'Market penetration', 'Digital marketing']
    }
  ];

  const categories = [
    {
      title: 'Consumer Goods',
      description: 'Electronics, textiles, home appliances, and lifestyle products',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Commodities',
      description: 'Agricultural products, raw materials, and bulk commodities',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Industrial Trade',
      description: 'Machinery, equipment, and industrial components',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const testimonials = [
    {
      name: 'Ali Raza',
      company: 'Textile Exports Ltd',
      content: 'WINZ Ventures helped us expand to European markets. Their expertise in export facilitation is exceptional.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'Global Imports Inc',
      content: 'Reliable partner for our Pakistani sourcing needs. Always delivers on time with quality products.',
      rating: 5
    },
    {
      name: 'Ahmed Khan',
      company: 'Local Trading Co',
      content: 'Their domestic distribution network has significantly improved our market reach across Pakistan.',
      rating: 5
    }
  ];

  const techFeatures = [
    {
      title: 'AI-Powered Market Analysis',
      description: 'Advanced algorithms analyze global market trends to identify optimal trading opportunities',
      icon: Cpu
    },
    {
      title: 'Automated Documentation',
      description: 'Streamlined digital processes for customs, shipping, and trade documentation',
      icon: Zap
    },
    {
      title: 'Real-time Tracking',
      description: 'Live shipment tracking and inventory management through integrated systems',
      icon: BarChart3
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Import & Export
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Connecting Pakistan to global markets with comprehensive trading solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trading Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your import and export needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600">
              Specialized trading across diverse product categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology & Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technology to revolutionize international trade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">
              Trusted by leading businesses for their trading needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Expand Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you navigate global markets and grow your trading operations
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Trading Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default ImportExport;