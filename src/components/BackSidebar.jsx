import React from 'react';

// Simplified white version of the Civic.Social building + people logo
function CivicLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Building / Capitol */}
      <polygon points="24,4 10,16 38,16" fill="rgba(255,255,255,0.9)" />
      <rect x="12" y="16" width="24" height="16" fill="rgba(255,255,255,0.9)" rx="1" />
      {/* Columns */}
      <rect x="15" y="17" width="2.5" height="14" fill="rgba(56,103,89,0.6)" rx="0.5" />
      <rect x="20.5" y="17" width="2.5" height="14" fill="rgba(56,103,89,0.6)" rx="0.5" />
      <rect x="25" y="17" width="2.5" height="14" fill="rgba(56,103,89,0.6)" rx="0.5" />
      <rect x="30.5" y="17" width="2.5" height="14" fill="rgba(56,103,89,0.6)" rx="0.5" />
      {/* Dome */}
      <ellipse cx="24" cy="6" rx="4" ry="2.5" fill="rgba(255,255,255,0.9)" />
      <rect x="23" y="2" width="2" height="3" fill="rgba(255,255,255,0.9)" rx="0.5" />
      {/* Steps */}
      <rect x="8" y="32" width="32" height="2" fill="rgba(255,255,255,0.7)" rx="0.5" />
      {/* People silhouettes */}
      <circle cx="14" cy="38" r="2" fill="rgba(255,255,255,0.8)" />
      <ellipse cx="14" cy="43" rx="2.5" ry="3" fill="rgba(255,255,255,0.8)" />
      <circle cx="24" cy="37.5" r="2.2" fill="rgba(255,255,255,0.85)" />
      <ellipse cx="24" cy="43" rx="2.8" ry="3.2" fill="rgba(255,255,255,0.85)" />
      <circle cx="34" cy="38" r="2" fill="rgba(255,255,255,0.8)" />
      <ellipse cx="34" cy="43" rx="2.5" ry="3" fill="rgba(255,255,255,0.8)" />
    </svg>
  );
}

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
      {/* Logo */}
      <div className="mt-5 mb-3">
        <CivicLogo size={38} />
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
