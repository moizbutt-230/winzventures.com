import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">WINZ Ventures</h3>
                <p className="text-gray-400 text-sm">Innovating Business, Empowering Progress</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A leading international company based in Pakistan, specializing in Import/Export, 
              Real Estate, and premium Handicrafts with a commitment to excellence and innovation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/winzventures" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/winzventures" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300">About</Link></li>
              <li><Link to="/trading-industrial" className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300">Trading & Industrial</Link></li>
              <li><Link to="/real-estate" className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300">Real Estate</Link></li>
              <li><Link to="/selazaar-handicrafts" className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300">Selazaar Handicrafts</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">
              href="https://facebook.com/winzventurespk" 
                    DHA Rehbar Roundabout,<br />
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
              href="https://instagram.com/winzventurespk" 
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">imtiaz.winzventures@gmail.com</span>
              </div>
            </div>
            <a 
              href="https://linkedin.com/company/winzventures" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/winzventurespk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover-shadow-xl transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 WINZ Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;