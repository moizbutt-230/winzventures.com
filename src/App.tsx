import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import WhatsAppFloat from './components/Layout/WhatsAppFloat';
import LoadingScreen from './components/Layout/LoadingScreen';
import Home from './pages/Home';
import RealEstateInfrastructure from './pages/RealEstateInfrastructure';
import TradingIndustrial from './pages/TradingIndustrial';
import TechnologyFinanceAI from './pages/TechnologyFinanceAI';
import SelazaarHandicrafts from './pages/SelazaarHandicrafts';
import WholesaleInquiry from './pages/WholesaleInquiry';
import PropertyDetail from './pages/PropertyDetail';
import RealEstate from './pages/RealEstate';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import About from './pages/About';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/real-estate-infrastructure" element={<RealEstateInfrastructure />} />
            <Route path="/trading-industrial" element={<TradingIndustrial />} />
            <Route path="/technology-finance-ai" element={<TechnologyFinanceAI />} />
            <Route path="/selazaar-handicrafts" element={<SelazaarHandicrafts />} />
            <Route path="/wholesale-inquiry" element={<WholesaleInquiry />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;