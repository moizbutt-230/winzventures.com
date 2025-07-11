import React from 'react';
import { Globe, Package, Truck, Factory, CheckCircle, TrendingUp, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const TradingIndustrial = () => {
  const services = [
    {
      title: 'International Trading',
      description: 'Global import/export services with worldwide reach',
      icon: Globe,
      features: ['Export Facilitation', 'Import Management', 'Customs Clearance', 'Trade Documentation']
    },
    {
      title: 'Industrial Equipment',
      description: 'Heavy machinery and industrial equipment trading',
      icon: Factory,
      features: ['Manufacturing Equipment', 'Construction Machinery', 'Industrial Tools', 'Spare Parts Supply']
    },
    {
      title: 'Logistics Solutions',
      description: 'End-to-end logistics and supply chain management',
      icon: Truck,
      features: ['Freight Forwarding', 'Warehousing', 'Distribution', 'Supply Chain Optimization']
    },
    {
      title: 'Commodity Trading',
      description: 'Raw materials and commodity trading services',
      icon: Package,
      features: ['Agricultural Products', 'Raw Materials', 'Bulk Commodities', 'Quality Assurance']
    }
  ];

  const whyChooseUs = [
    'Extensive global trading network',
    'Expert knowledge of international markets',
    'Reliable supply chain partnerships',
    'Competitive pricing and terms',
    'Quality assurance at every step',
    'Comprehensive logistics support'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Trading & Industrial Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Connecting Pakistan to global markets with comprehensive trading solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Quote
              </Link>
              <Link
                to="/import-export"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trading Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for all your trading and industrial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose WINZ Ventures?</h2>
            <p className="text-xl text-gray-600">
              Your trusted partner in international trading
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
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
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Start Trading Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TradingIndustrial;