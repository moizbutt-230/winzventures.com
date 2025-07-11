import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Real Estate & Infrastructure', href: '/real-estate-infrastructure' },
    { name: 'Trading & Industrial', href: '/trading-industrial' },
    { name: 'Technology & AI', href: '/technology-finance-ai' },
    { name: 'Selazaar Handicrafts', href: '/selazaar-handicrafts' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = () => services.some(service => location.pathname === service.href);

  return (
    <>
      {/* Top Contact Bar - Slides up on scroll */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}>
        <div className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-md text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs gap-2 sm:gap-0">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
                  <Phone className="w-3 h-3" />
                  <span>03474269114</span>
                </div>
                <div className="hidden sm:flex items-center space-x-2 hover:text-blue-300 transition-colors">
                  <Mail className="w-3 h-3" />
                  <span>imtiaz.winzventures@gmail.com</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-2 hover:text-blue-300 transition-colors">
                <MapPin className="w-3 h-3" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Glass Header */}
      <header className={`fixed left-0 right-0 z-40 transition-all duration-700 ease-out ${
        scrollY > 50 ? 'top-0' : 'top-12'
      }`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <nav className={`relative transition-all duration-700 ease-out ${
            scrollY > 50 
              ? 'mx-4 mt-4 rounded-2xl' 
              : 'mx-0 mt-0 rounded-none'
          }`}>
            {/* Liquid Glass Background */}
            <div className={`absolute inset-0 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-700 ${
              scrollY > 50 ? 'rounded-2xl' : 'rounded-none'
            }`}>
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 opacity-60 transition-all duration-700 ${
                scrollY > 50 ? 'rounded-2xl' : 'rounded-none'
              }`}></div>
              
              {/* Liquid effect bubbles */}
              <div className="absolute top-2 left-4 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-3 right-6 w-2 h-2 bg-blue-300/30 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-purple-300/40 rounded-full animate-ping"></div>
            </div>

            {/* Content */}
            <div className="relative px-6 py-4">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-emerald-600/30 group-hover:from-blue-600/50 group-hover:to-emerald-600/50 transition-all duration-300"></div>
                      <span className="text-white font-bold text-xl relative z-10">W</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      WINZ Ventures
                    </h1>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Innovating Business, Empowering Progress
                    </p>
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-1">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasDropdown ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <button
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-1 group ${
                              isServiceActive()
                                ? 'text-blue-600 bg-blue-50/80 backdrop-blur-sm shadow-lg'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-white/50 hover:backdrop-blur-sm hover:shadow-lg'
                            }`}
                          >
                            <span>Services</span>
                            <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                              isServicesOpen ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'
                            }`} />
                          </button>
                          
                          {/* Services Dropdown with Glass Effect */}
                          {isServicesOpen && (
                            <div className="absolute top-full left-0 mt-2 w-72 z-50 animate-fade-in">
                              <div className="bg-white/20 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-2xl py-3 overflow-hidden">
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5"></div>
                                
                                {services.map((service, index) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className={`relative block px-6 py-3 text-sm transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm border-l-4 border-transparent hover:border-blue-400 ${
                                      isActive(service.href) 
                                        ? 'text-blue-600 bg-blue-50/20 border-blue-500' 
                                        : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                    onClick={() => setIsServicesOpen(false)}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                  >
                                    <div className="relative z-10">{service.name}</div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                            isActive(item.href)
                              ? 'text-blue-600 bg-blue-50/80 backdrop-blur-sm shadow-lg'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-white/50 hover:backdrop-blur-sm hover:shadow-lg'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-white/50 hover:backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="lg:hidden mt-4 pt-4 border-t border-white/20 animate-slide-up">
                  <div className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.hasDropdown ? (
                          <div>
                            <button
                              onClick={() => setIsServicesOpen(!isServicesOpen)}
                              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                                isServiceActive()
                                  ? 'text-blue-600 bg-blue-50/80 backdrop-blur-sm'
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-white/50 hover:backdrop-blur-sm'
                              }`}
                            >
                              <span>Services</span>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                isServicesOpen ? 'rotate-180' : ''
                              }`} />
                            </button>
                            
                            {/* Mobile Services Dropdown */}
                            {isServicesOpen && (
                              <div className="ml-4 mt-2 space-y-1 animate-slide-up">
                                {services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsServicesOpen(false);
                                    }}
                                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 ${
                                      isActive(service.href)
                                        ? 'text-blue-600 bg-blue-50/80 border-blue-500'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-white/30'
                                    }`}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                              isActive(item.href)
                                ? 'text-blue-600 bg-blue-50/80 backdrop-blur-sm'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-white/50 hover:backdrop-blur-sm'
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content from going under header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;