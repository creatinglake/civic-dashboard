import React from 'react';
import civicLogoOnly from '../assets/CS Logo ONlY png.png';

export function BackSidebar({ onBack }) {
  return (
    <div
      className="back-sidebar"
      onClick={onBack}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onBack();
        }
      }}
      aria-label="Back to Dashboard"
    >
      {/* Logo — actual CS logo, inverted to white via CSS filter */}
      <div className="mt-5 mb-3">
        <img
          src={civicLogoOnly}
          alt="Civic.Social"
          className="w-[38px] h-auto"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
        />
      </div>
      <span className="text-[10px] font-heading font-semibold tracking-wide text-civic-cream/70 uppercase leading-tight text-center">
        Civic
      </span>
      <span className="text-[10px] font-heading font-semibold tracking-wide text-civic-cream/70 uppercase leading-tight text-center">
        Social
      </span>

      {/* Back to Dashboard - centered in remaining space */}
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        {/* Circle with arrow */}
        <div className="w-10 h-10 rounded-full border-2 border-civic-cream/30 flex items-center justify-center group-hover:border-civic-cream/50 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(247,248,250,0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </div>
        <span className="text-[10px] font-heading font-semibold text-civic-cream/60 uppercase tracking-wider leading-tight text-center">
          Back to<br />Dashboard
        </span>
      </div>

      {/* Bottom spacer */}
      <div className="h-6" />
    </div>
  );
}
