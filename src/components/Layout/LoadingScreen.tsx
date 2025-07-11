import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-emerald-600/30"></div>
            <span className="text-white font-bold text-4xl">W</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">WINZ Ventures</h1>
          <p className="text-lg text-gray-600 animate-fade-in">
            Innovating Business, Empowering Progress
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;