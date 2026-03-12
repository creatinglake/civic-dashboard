import React, { useState, useEffect } from 'react';

// Track dismissal across remounts (e.g. navigating back to dashboard)
let hasBeenDismissed = false;

export function WelcomeOverlay() {
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
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 px-8 py-8 text-center"
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
        <div className="w-12 h-12 rounded-full bg-civic-green/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-civic-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </div>

        <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">
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
