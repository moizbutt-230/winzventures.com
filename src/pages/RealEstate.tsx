import React, { useState } from 'react';
import { MapPin, Home, Building, DollarSign, Square, Filter, Star, X, Phone, Mail, Calendar, Bed, Bath, Car, Ruler, Eye, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProperties } from '../hooks/useProperties';
import { Property } from '../lib/supabase';

const RealEstate = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { properties, loading, error } = useProperties();

  if (loading) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading properties: {error}</p>
          <p className="text-gray-600">Please make sure Supabase is connected and configured properly.</p>
        </div>
      </div>
    );
  }

  const services = [
    {
      title: 'Property Consultation',
      description: 'Expert advice on property investment and market trends',
      icon: Home
    },
    {
      title: 'Legal Documentation',
      description: 'Complete legal support for property transactions',
      icon: Building
    },
    {
      title: 'Market Analysis',
      description: 'Detailed market research and property valuation',
      icon: DollarSign
    },
    {
      title: 'Investment Planning',
      description: 'Strategic planning for real estate investments',
      icon: Square
    }
  ];

  const testimonials = [
    {
      name: 'Fatima Ahmed',
      role: 'Property Investor',
      content: 'WINZ Ventures helped me find the perfect investment property in DHA. Their market knowledge is exceptional.',
      rating: 5
    },
    {
      name: 'Hassan Ali',
      role: 'Home Buyer',
      content: 'Professional service from start to finish. Made the home buying process smooth and stress-free.',
      rating: 5
    },
    {
      name: 'Ayesha Khan',
      role: 'Commercial Client',
      content: 'Found the ideal office space for our business. Their commercial property expertise is outstanding.',
      rating: 5
    }
  ];

  const filteredProperties = properties.filter(property => {
    const locationMatch = selectedLocation === 'all' || property.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const typeMatch = selectedType === 'all' || property.type.toLowerCase() === selectedType.toLowerCase();
    return locationMatch && typeMatch;
  });

  const openModal = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
    document.body.style.overflow = 'unset';
  };

  const formatPrice = (price) => {
    return `PKR ${price}`;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Estate
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium properties in DHA, Bahria Town, and Gulberg
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#properties" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 luxury-button inline-block text-center"
              >
                View Properties
              </a>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 luxury-button inline-block text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center flex-wrap">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent hover-shadow"
            >
              <option value="all">All Locations</option>
              <option value="dha">DHA</option>
              <option value="bahria">Bahria Town</option>
              <option value="gulberg">Gulberg</option>
              <option value="johar">Johar Town</option>
              <option value="wapda">Wapda Town</option>
              <option value="emaar">Emaar</option>
              <option value="model">Model Town</option>
              <option value="cantt">Cantt</option>
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent hover-shadow"
            >
              <option value="all">All Types</option>
              <option value="house">House</option>
              <option value="plot">Plot</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <section id="properties" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">
              Discover premium properties in Pakistan's most sought-after locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
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
                      <span className="text-2xl font-bold text-green-600">{formatPrice(property.price)}</span>
                      {property.original_price && (
                        <span className="text-sm text-gray-500 line-through ml-2">{formatPrice(property.original_price)}</span>
                      )}
                    </div>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      {property.size}
                    </span>
                  </div>

                  {/* Property Details */}
                  {property.type === 'House' && (
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      {property.bedrooms && (
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                      )}
                      {property.bathrooms && (
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          <span>{property.bathrooms}</span>
                        </div>
                      )}
                      {property.parking && (
                        <div className="flex items-center">
                          <Car className="w-4 h-4 mr-1" />
                          <span>{property.parking}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="space-y-1 mb-4">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => openModal(property)}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 luxury-button inline-flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Detail Modal */}
      {showModal && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProperty.title}</h2>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full hover-shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedProperty.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProperty.title} ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg hover-shadow-xl"
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Property Info */}
                <div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{selectedProperty.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-600 mb-2" />
                      <div className="text-sm text-gray-600">Price</div>
                      <div className="text-xl font-bold text-green-600">{formatPrice(selectedProperty.price)}</div>
                      {selectedProperty.original_price && (
                        <div className="text-sm text-gray-500 line-through">{formatPrice(selectedProperty.original_price)}</div>
                      )}
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Square className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="text-sm text-gray-600">Size</div>
                      <div className="text-xl font-bold text-blue-600">{selectedProperty.size}</div>
                    </div>
                  </div>

                  {selectedProperty.type === 'House' && (
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {selectedProperty.bedrooms && (
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <Bed className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                          <div className="text-lg font-semibold">{selectedProperty.bedrooms}</div>
                          <div className="text-sm text-gray-600">Bedrooms</div>
                        </div>
                      )}
                      {selectedProperty.bathrooms && (
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <Bath className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                          <div className="text-lg font-semibold">{selectedProperty.bathrooms}</div>
                          <div className="text-sm text-gray-600">Bathrooms</div>
                        </div>
                      )}
                      {selectedProperty.parking && (
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <Car className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                          <div className="text-lg font-semibold">{selectedProperty.parking}</div>
                          <div className="text-sm text-gray-600">Parking</div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProperty.description}</p>
                  </div>

                  {selectedProperty.year_built && (
                    <div className="mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>Built in {selectedProperty.year_built}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Features and Contact */}
                <div>
                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProperty.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProperty.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nearby Places */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Nearby Places</h3>
                    <div className="space-y-2">
                      {selectedProperty.nearby_places.map((place, index) => (
                        <div key={index} className="flex items-center text-gray-700">
                          <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm">{place}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Agent Contact */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Agent</h3>
                    <div className="space-y-2">
                      <div className="font-medium text-gray-900">{selectedProperty.agent_name}</div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <a href={`tel:${selectedProperty.agent_phone}`} className="hover:text-green-600">
                          {selectedProperty.agent_phone}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href={`mailto:${selectedProperty.agent_email}`} className="hover:text-green-600">
                          {selectedProperty.agent_email}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <a
                        href={`tel:${selectedProperty.agent_phone}`}
                        className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 luxury-button text-center inline-flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                      <a
                        href={`https://wa.me/${selectedProperty.agent_phone.replace(/[^0-9]/g, '')}?text=I'm interested in ${selectedProperty.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 luxury-button text-center inline-flex items-center justify-center"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Real Estate Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive real estate solutions for all your property needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center card-hover">
                <service.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              What our satisfied clients say about our real estate services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Find Your Dream Property</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our real estate experts help you find the perfect property investment
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 luxury-button inline-block"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;