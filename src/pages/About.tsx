import React from 'react';
import { Award, Users, Globe, TrendingUp, CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialCarousel from '../components/TestimonialCarousel';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years of Experience', icon: Award },
    { number: '500+', label: 'Satisfied Clients', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '1000+', label: 'Projects Completed', icon: TrendingUp }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards.',
      icon: Award
    },
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and innovative solutions for business growth.',
      icon: Target
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparent business practices and ethical conduct.',
      icon: Heart
    },
    {
      title: 'Vision',
      description: 'Creating sustainable value for our clients and contributing to economic development.',
      icon: Eye
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'WINZ Ventures established with a vision to bridge international markets'
    },
    {
      year: '2012',
      title: 'Real Estate Division',
      description: 'Expanded into premium real estate and property development'
    },
    {
      year: '2015',
      title: 'Selazaar Launch',
      description: 'Launched our premium handicrafts brand for international markets'
    },
    {
      year: '2018',
      title: 'Technology Integration',
      description: 'Integrated AI and modern technology solutions across all divisions'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients in over 25 countries'
    },
    {
      year: '2024',
      title: 'Digital Transformation',
      description: 'Leading digital transformation initiatives in Pakistani business sector'
    }
  ];

  const services = [
    {
      title: 'Real Estate & Infrastructure',
      description: 'Premium properties and infrastructure development solutions across Pakistan',
      features: ['Residential Properties', 'Commercial Real Estate', 'Infrastructure Development', 'Investment Consultation']
    },
    {
      title: 'Trading & Industrial Services',
      description: 'Comprehensive trading solutions connecting Pakistan to global markets',
      features: ['International Trading', 'Industrial Equipment', 'Logistics Solutions', 'Commodity Trading']
    },
    {
      title: 'Technology & AI Solutions',
      description: 'Cutting-edge technology solutions for modern business challenges',
      features: ['AI Implementation', 'Financial Technology', 'Cloud Solutions', 'Cybersecurity']
    },
    {
      title: 'Selazaar Handicrafts',
      description: 'Premium wooden handicrafts meeting international quality standards',
      features: ['Handcrafted Furniture', 'Decorative Items', 'Custom Designs', 'Export Services']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About WINZ Ventures
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              A leading international company based in Pakistan, specializing in multiple business sectors 
              with a commitment to excellence, innovation, and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform"
              >
                Get in Touch
              </Link>
              <Link
                to="/real-estate-infrastructure"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                WINZ Ventures was founded in 2009 with a vision to create a dynamic international company 
                that bridges markets and creates opportunities across multiple business sectors. Based in 
                Lahore, Pakistan, we have grown from a small trading company to a comprehensive business 
                solutions provider serving clients worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began with a simple mission: to facilitate international trade and provide 
                quality business solutions. Today, we operate across four major divisions - Real Estate & 
                Infrastructure, Trading & Industrial Services, Technology & AI Solutions, and our premium 
                handicrafts brand, Silazaar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Under the leadership of Mr. Imtiaz Hussain, our Director, WINZ Ventures has established 
                itself as a trusted partner for businesses seeking growth, innovation, and excellence. 
                We combine traditional business values with modern technology to deliver exceptional 
                results for our clients.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="WINZ Ventures Office"
                className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform group">
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">
              Visionary leadership driving innovation and growth
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">Mr. Imtiaz Hussain</h3>
              <p className="text-xl text-gray-700 mb-6">Director & Founder</p>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  With over 15 years of experience in international business, Mr. Imtiaz Hussain 
                  leads WINZ Ventures with a vision of excellence and innovation. His expertise 
                  spans across global trade, real estate development, and artisan craftsmanship, 
                  making him a respected figure in Pakistan's business community.
                </p>
                <p>
                  Under his leadership, WINZ Ventures has established strong partnerships worldwide 
                  and continues to set new standards in quality and service delivery. His commitment 
                  to ethical business practices and sustainable growth has been instrumental in the 
                  company's success.
                </p>
                <p>
                  Mr. Hussain's vision extends beyond business success to contributing to Pakistan's 
                  economic development and promoting Pakistani products and services on the global stage.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/WhatsApp Image 2025-07-04 at 6.17.55 PM.jpeg"
                  alt="Mr. Imtiaz Hussain - Director"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge markets, create opportunities, and deliver value through innovative business 
                solutions that empower progress for our clients and partners worldwide. We are committed 
                to excellence in every project and building lasting relationships based on trust and integrity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <Eye className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a leading international business conglomerate that sets new standards in 
                quality, innovation, and customer satisfaction while contributing to Pakistan's economic 
                development and promoting Pakistani excellence on the global stage.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform group">
                <value.icon className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Business Divisions</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions across multiple industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel theme="purple" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust WINZ Ventures for their business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform"
            >
              Contact Us Today
            </Link>
            <Link
              to="/real-estate-infrastructure"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;