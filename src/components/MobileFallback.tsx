import React, { useState, useEffect } from 'react';

interface MobileFallbackProps {
  children: React.ReactNode;
  showFallback?: boolean;
}

const MobileFallback: React.FC<MobileFallbackProps> = ({ children, showFallback = false }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Error boundary for rendering issues
  useEffect(() => {
    const handleError = () => {
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (isMobile && (showFallback || hasError)) {
    return (
      <div className="mobile-fallback bg-gray-50">
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-4">💻</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Best Viewed on Desktop
            </h2>
            <p className="text-gray-600 mb-6">
              For the best experience, please view this content on a desktop or tablet device.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Anyway
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default MobileFallback; 