import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Square, DollarSign, ArrowLeft, Phone, Mail } from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock property data - in a real app, this would come from an API
  const properties = {
    '1': {
      id: 1,
      title: 'Luxury Villa in DHA Phase 5',
      location: 'DHA Lahore',
      price: '2.5 Crore',
      size: '1 Kanal',
      type: 'House',
      features: ['5 Bedrooms', '6 Bathrooms', 'Swimming Pool', 'Garden', 'Parking for 3 cars', 'Servant quarters'],
      images: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'This stunning luxury villa in DHA Phase 5 offers the perfect blend of modern amenities and traditional elegance. Located in one of Lahore\'s most prestigious neighborhoods, this property features spacious rooms, high-end finishes, and beautiful landscaping.',
      amenities: ['24/7 Security', 'Power Backup', 'Water Filtration', 'Landscaped Garden', 'Modern Kitchen', 'Master Suite'],
      nearbyPlaces: ['DHA Golf Club - 2km', 'Packages Mall - 3km', 'American School - 1.5km', 'Shaukat Khanum Hospital - 4km']
    },
    '2': {
      id: 2,
      title: 'Commercial Plot in Gulberg',
      location: 'Gulberg Islamabad',
      price: '1.8 Crore',
      size: '10 Marla',
      type: 'Commercial',
      features: ['Main Road', 'Corner Plot', 'High Traffic Area', 'Commercial Zone'],
      images: [
        'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Prime commercial plot located on the main road in Gulberg, Islamabad. Perfect for retail, office, or mixed-use development. High visibility and excellent foot traffic make this an ideal investment opportunity.',
      amenities: ['Main Road Access', 'Corner Location', 'Commercial Zoning', 'High Visibility'],
      nearbyPlaces: ['Centaurus Mall - 1km', 'Blue Area - 2km', 'Islamabad Airport - 15km', 'F-6 Markaz - 500m']
    }
  };

  const property = properties[id as keyof typeof properties];

  if (!property) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
          <Link to="/real-estate" className="text-green-600 hover:text-green-700">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/real-estate"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Properties
        </Link>
      </div>

      {/* Property Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            {property.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {property.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${property.title} ${index + 2}`}
                    className="w-full h-48 object-cover rounded-lg shadow"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Property Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{property.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{property.location}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600 mb-2" />
                <div className="text-sm text-gray-600">Price</div>
                <div className="text-xl font-bold text-green-600">PKR {property.price}</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <Square className="w-6 h-6 text-blue-600 mb-2" />
                <div className="text-sm text-gray-600">Size</div>
                <div className="text-xl font-bold text-blue-600">{property.size}</div>
              </div>
            </div>

            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <Home className="w-4 h-4 inline mr-1" />
                {property.type}
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Agent
              </Link>
              <a
                href="mailto:imtiaz.winzventures@gmail.com"
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Features */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h3>
            <ul className="space-y-2">
              {property.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Nearby Places */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Nearby Places</h3>
            <ul className="space-y-2">
              {property.nearbyPlaces.map((place, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  {place}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in this Property?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our real estate experts for more information and to schedule a viewing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Schedule Viewing
            </Link>
            <a
              href="https://wa.me/923474269114?text=I'm interested in the property: {property.title}"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;