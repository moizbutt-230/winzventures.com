import React from 'react';
import { ArrowRight, CheckCircle, Award, Users, Globe, TrendingUp, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const services = [
    {
      title: 'Real Estate & Infrastructure',
      description: 'Premium properties and infrastructure development solutions',
      color: 'green',
      link: '/real-estate-infrastructure',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Trading & Industrial Services',
      description: 'Global trading solutions and industrial equipment',
      color: 'blue',
      link: '/trading-industrial',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Technology & AI Solutions',
      description: 'Cutting-edge technology and AI-driven business solutions',
      color: 'purple',
      link: '/technology-finance-ai',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Silazaar Handicrafts',
      description: 'Premium wooden handicrafts for international markets',
      color: 'amber',
      link: '/selazaar-handicrafts',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const certifications = [
    { name: 'Business Registration', number: 'BR-2024-001', icon: Award },
    { name: 'Export License', number: 'EL-2024-002', icon: Globe },
    { name: 'Trade Certification', number: 'TC-2024-003', icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Import Partner',
      content: 'WINZ Ventures has been instrumental in expanding our business internationally. Their expertise and reliability are unmatched.',
      rating: 5
    },
    {
      name: 'Sarah Khan',
      role: 'Real Estate Client',
      content: 'Found my dream home through WINZ Ventures. Their property consultation service is exceptional and professional.',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      role: 'International Buyer',
      content: 'The quality of Selazaar handicrafts is outstanding. Perfect for our retail chain in Europe.',
      rating: 5
    }
  ];

  const whyChooseUs = [
    'Over 10 years of industry experience',
    'International quality standards',
    'Comprehensive business solutions',
    'Dedicated customer support',
    'Proven track record of success',
    'Innovation-driven approach'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovating Business,<br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Empowering Progress</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for Import/Export, Real Estate, and Premium Handicrafts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover-shadow-xl inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 hover-shadow-xl"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About WINZ Ventures</h2>
              <p className="text-lg text-gray-600 mb-6">
                WINZ Ventures is a dynamic international company based in Pakistan, committed to 
                excellence across multiple business sectors. We specialize in facilitating global 
                trade, providing premium real estate solutions, and crafting exquisite handicrafts 
                that meet international standards.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to bridge markets, create opportunities, and deliver value through 
                innovative business solutions that empower progress for our clients and partners worldwide.
              </p>
              <Link
                to="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover-shadow-xl inline-flex items-center"
              >
                Read More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About WINZ Ventures"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business solutions across three key sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover-shadow-xl group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <Link
                    to={service.link}
                    className={`inline-flex items-center font-semibold transition-all duration-300 hover:scale-105 hover-shadow-xl ${
                      service.color === 'green' ? 'text-green-600 hover:text-green-700' :
                      service.color === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                      service.color === 'purple' ? 'text-purple-600 hover:text-purple-700' :
                      'text-amber-600 hover:text-amber-700'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership</h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mr. Imtiaz Hussain</h3>
              <p className="text-lg text-gray-700 mb-2">Director</p>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in international business, Mr. Imtiaz Hussain 
                leads WINZ Ventures with a vision of excellence and innovation. His expertise 
                spans across global trade, real estate development, and artisan craftsmanship, 
                making him a respected figure in Pakistan's business community.
              </p>
              <p className="text-gray-600">
                Under his leadership, WINZ Ventures has established strong partnerships 
                worldwide and continues to set new standards in quality and service delivery.
              </p>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <img
                src="/images/WhatsApp Image 2025-07-04 at 6.17.55 PM.jpeg"
                alt="Mr. Imtiaz Hussain - Director"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto hover-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Why Choose WINZ Ventures?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow hover-shadow group animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Certifications & Registrations</h2>
            <p className="text-xl text-gray-600">
              Officially registered and certified for all our business operations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover-shadow-xl group animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <cert.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-4">Registration: {cert.number}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 button-hover inline-flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            ))}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover-shadow-xl group animate-slide-up" style={{animationDelay: '0.8s'}}>
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO Certification</h3>
              <p className="text-gray-600 mb-4">Registration: ISO-9001-2024</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 button-hover inline-flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel theme="blue" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how WINZ Ventures can help grow your business
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover-shadow-xl inline-flex items-center"
          >
            Contact Us Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;