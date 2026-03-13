import React, { useEffect, useState } from 'react';
import civicLogoOnly from '../assets/CS Logo ONlY png.png';
import { useIsMobile } from '../hooks/useMediaQuery';

let hasShownMobileRailHint = false;

export function BackSidebar({ onBack }) {
  const isMobile = useIsMobile();
  const [showHint, setShowHint] = useState(false);
  const [hintFading, setHintFading] = useState(false);

  useEffect(() => {
    if (!isMobile || hasShownMobileRailHint) return undefined;

    hasShownMobileRailHint = true;
    setShowHint(true);
    setHintFading(false);
    const fadeTimer = window.setTimeout(() => setHintFading(true), 2600);
    const hideTimer = window.setTimeout(() => setShowHint(false), 3000);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [isMobile]);

  if (isMobile) {
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
        aria-label="Back to Civic Social"
      >
        <div className="mobile-back-hitarea" aria-hidden="true" />
        <div className="mobile-back-silhouette" aria-hidden="true">
          <img
            src={civicLogoOnly}
            alt="Civic.Social"
            className="w-[17px] h-auto mobile-back-bump-logo"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.92 }}
          />
          <svg className="mobile-back-bump-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(247,248,250,0.92)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </div>
        {showHint && (
          <div
            className="mobile-back-hint"
            style={{
              opacity: hintFading ? 0 : 1,
              transform: hintFading ? 'translateX(-4px)' : 'translateX(0)',
            }}
          >
            <div className="mobile-back-hint-arrow" aria-hidden="true" />
            <p>Tap here to get back to dashboard.</p>
          </div>
        )}
      </div>
    );
  }

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
      aria-label="Back to Civic Social"
    >
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

      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <div className="w-10 h-10 rounded-full border-2 border-civic-cream/30 flex items-center justify-center group-hover:border-civic-cream/50 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(247,248,250,0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </div>
        <span className="text-[10px] font-heading font-semibold text-civic-cream/60 uppercase tracking-wider leading-tight text-center">
          Back to<br />Dash-<br />board
        </span>
      </div>

      <div className="h-6" />
    </div>
  );
}
