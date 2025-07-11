import React from 'react';
import { Cpu, Brain, BarChart3, Shield, CheckCircle, Zap, Database, Cloud, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnologyFinanceAI = () => {
  const solutions = [
    {
      id: 1,
      title: 'AI-Powered Trading Platform',
      category: 'Artificial Intelligence',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced AI algorithms for market analysis and automated trading decisions',
      features: ['Real-time Market Analysis', 'Predictive Analytics', 'Risk Assessment', 'Automated Trading'],
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'API Integration']
    },
    {
      id: 2,
      title: 'Digital Payment Gateway',
      category: 'Financial Technology',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Secure and scalable payment processing system for international transactions',
      features: ['Multi-currency Support', 'Fraud Detection', 'Real-time Processing', 'Mobile Integration'],
      technologies: ['Blockchain', 'Node.js', 'React', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Management',
      category: 'Cloud Solutions',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive cloud infrastructure with auto-scaling and monitoring',
      features: ['Auto-scaling', 'Load Balancing', 'Monitoring', 'Backup Solutions'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 4,
      title: 'Cybersecurity Suite',
      category: 'Security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete cybersecurity solution with threat detection and prevention',
      features: ['Threat Detection', 'Data Encryption', 'Access Control', 'Compliance Management'],
      technologies: ['AI Security', 'Blockchain', 'Zero Trust', 'SIEM']
    },
    {
      id: 5,
      title: 'Business Intelligence Dashboard',
      category: 'Data Analytics',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Real-time business analytics and reporting dashboard',
      features: ['Real-time Analytics', 'Custom Reports', 'Data Visualization', 'KPI Tracking'],
      technologies: ['Power BI', 'Python', 'SQL', 'React']
    },
    {
      id: 6,
      title: 'IoT Integration Platform',
      category: 'Internet of Things',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Seamless IoT device integration and management platform',
      features: ['Device Management', 'Data Collection', 'Remote Monitoring', 'Automation'],
      technologies: ['MQTT', 'Node.js', 'MongoDB', 'Edge Computing']
    }
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions',
      icon: Brain,
      features: ['Market Analysis AI', 'Predictive Analytics', 'Process Automation', 'Data Intelligence']
    },
    {
      title: 'Financial Technology',
      description: 'Modern fintech solutions for business operations',
      icon: BarChart3,
      features: ['Digital Payments', 'Financial Analytics', 'Risk Management', 'Investment Platforms']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      icon: Cloud,
      features: ['Cloud Migration', 'Data Storage', 'Backup Solutions', 'Scalable Infrastructure']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital assets',
      icon: Shield,
      features: ['Data Protection', 'Network Security', 'Compliance Management', 'Threat Detection']
    }
  ];

  const innovationFeatures = [
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
      title: 'Real-time Data Analytics',
      description: 'Live tracking and analytics for better decision making across all business operations',
      icon: Database
    }
  ];

  const whyChooseUs = [
    'Cutting-edge technology solutions',
    'Expert AI and machine learning team',
    'Proven track record in fintech',
    'Scalable and secure infrastructure',
    'Custom solutions for every business',
    'Continuous innovation and support'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technology, Finance & AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technology and AI-driven solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Services</h2>
            <p className="text-xl text-gray-600">
              Advanced technology solutions for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Technology Solutions</h2>
            <p className="text-xl text-gray-600">
              Discover our comprehensive technology implementations and success stories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      {solution.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-2" />
                    View Solution Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              View More Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Powered by Innovation */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered by Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technology to revolutionize business operations and drive growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovationFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Your trusted partner in technology and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our technology experts help you leverage AI and modern solutions for growth
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Start Your Digital Transformation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TechnologyFinanceAI;