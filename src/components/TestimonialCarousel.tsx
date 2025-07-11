import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTestimonials } from '../hooks/useTestimonials';

interface TestimonialCarouselProps {
  theme?: 'blue' | 'green' | 'amber' | 'purple';
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  theme = 'blue' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { testimonials, loading, error } = useTestimonials();

  const themeColors = {
    blue: {
      text: 'text-blue-600',
      bg: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
      border: 'border-blue-600'
    },
    green: {
      text: 'text-green-600',
      bg: 'bg-green-600',
      hover: 'hover:bg-green-700',
      border: 'border-green-600'
    },
    amber: {
      text: 'text-amber-600',
      bg: 'bg-amber-600',
      hover: 'hover:bg-amber-700',
      border: 'border-amber-600'
    },
    purple: {
      text: 'text-purple-600',
      bg: 'bg-purple-600',
      hover: 'hover:bg-purple-700',
      border: 'border-purple-600'
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Move useEffect to always be called, regardless of loading/error states
  useEffect(() => {
    if (!isAutoPlaying || !testimonials || testimonials.length === 0) return;
    
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials]);

  // Handle loading state
  if (loading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  // Handle error or empty state
  if (error || !testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by businesses and individuals worldwide
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonials Container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-2xl hover-shadow-xl">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-gray-600 italic mb-6 leading-relaxed text-center">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-lg mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">
                      {testimonial.role}
                      {testimonial.company && (
                        <span className="block text-sm">{testimonial.company}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg ${themeColors[theme].text} hover-shadow z-10`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg ${themeColors[theme].text} hover-shadow z-10`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 hover-shadow ${
                index === currentIndex 
                  ? themeColors[theme].bg
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="bg-gray-200 rounded-full h-1">
            <div 
              className={`h-1 rounded-full transition-all duration-300 ${themeColors[theme].bg}`}
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2 text-sm text-gray-500">
            {currentIndex + 1} of {testimonials.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;