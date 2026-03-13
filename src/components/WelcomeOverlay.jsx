import React, { useState, useEffect } from 'react';
import civicLogoOnly from '../assets/CS Logo ONlY png.png';
import { useIsMobile } from '../hooks/useMediaQuery';

// Track dismissal across remounts (e.g. navigating back to dashboard)
let hasBeenDismissed = false;

export function WelcomeOverlay() {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(!hasBeenDismissed);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (fading) {
      const fadeTimer = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(fadeTimer);
    }
  }, [fading]);

  const handleDismiss = () => {
    hasBeenDismissed = true;
    setFading(true);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 400ms ease-out',
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20" onClick={handleDismiss} />

      {/* Card */}
      <div
        className={`relative bg-white shadow-2xl w-full text-center ${
          isMobile ? 'rounded-[24px] max-w-sm mx-3 px-5 py-6' : 'rounded-2xl max-w-md mx-4 px-8 py-8'
        }`}
        style={{
          transform: fading ? 'translateY(10px)' : 'translateY(0)',
          transition: 'transform 400ms ease-out',
        }}
      >
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 transition-colors"
          aria-label="Dismiss"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Content */}
        <div className={`${isMobile ? 'w-14 h-14 mb-4' : 'w-12 h-12 mb-4'} rounded-2xl bg-civic-green/8 ring-1 ring-civic-green/10 flex items-center justify-center mx-auto`}>
          <img
            src={civicLogoOnly}
            alt="Civic.Social"
            className={isMobile ? 'w-8 h-auto' : 'w-7 h-auto'}
          />
        </div>

        <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-heading font-bold text-gray-900 mb-3`}>
          Welcome to Civic.Social
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed">
          This demo explores how a citizen dashboard could make civic participation
          easier by bringing the information, opportunities, and actions that shape
          civic life into one simple interface.
        </p>
      </div>
    </div>
  );
}
