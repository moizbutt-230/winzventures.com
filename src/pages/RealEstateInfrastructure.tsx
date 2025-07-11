import React from 'react';
import { Building2, MapPin, TrendingUp, Users, CheckCircle, Home, Wrench, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProperties } from '../hooks/useProperties';

const RealEstateInfrastructure = () => {
  const { properties, loading } = useProperties();

  // Get first 3 properties for featured section
  const featuredProperties = properties.slice(0, 3);

  const services = [
    {
      title: 'Residential Properties',
      description: 'Premium homes and apartments in prime locations',
      icon: Home,
      features: ['DHA Properties', 'Bahria Town Homes', 'Gulberg Residences', 'Investment Properties']
    },
    {
      title: 'Commercial Real Estate',
      description: 'Office spaces and commercial properties for businesses',
      icon: Building2,
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Industrial Plots']
    },
    {
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure and development projects',
      icon: Wrench,
      features: ['Road Construction', 'Utilities Installation', 'Urban Planning', 'Project Management']
    },
    {
      title: 'Property Investment',
      description: 'Strategic investment opportunities and consultation',
      icon: TrendingUp,
      features: ['Market Analysis', 'ROI Calculation', 'Portfolio Management', 'Risk Assessment']
    }
  ];

  const whyChooseUs = [
    'Over 15 years of real estate expertise',
    'Prime locations in DHA, Bahria Town, and Gulberg',
    'End-to-end property solutions',
    'Legal documentation support',
    'Market-leading investment advice',
    'Transparent pricing and processes'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Estate & Infrastructure
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium properties and infrastructure solutions across Pakistan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Consultation
              </Link>
              <Link
                to="/real-estate"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive real estate and infrastructure solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <service.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">
              Discover our premium property listings in prime locations
            </p>
          </div>
          
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading properties...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredProperties.map((property) => (
                  <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="relative">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          property.type === 'House' ? 'bg-blue-100 text-blue-800' :
                          property.type === 'Plot' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {property.type}
                        </span>
                      </div>
                      {property.original_price && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Price Reduced
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="text-2xl font-bold text-green-600">PKR {property.price}</span>
                          {property.original_price && (
                            <span className="text-sm text-gray-500 line-through ml-2">PKR {property.original_price}</span>
                          )}
                        </div>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {property.size}
                        </span>
                      </div>

                      <div className="space-y-1 mb-4">
                        {property.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to="/real-estate"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link
                  to="/real-estate"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 inline-flex items-center"
                >
                  View More Properties
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose WINZ Ventures?</h2>
            <p className="text-xl text-gray-600">
              Your trusted partner in real estate and infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Invest in Real Estate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts help you find the perfect property investment opportunity
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RealEstateInfrastructure;