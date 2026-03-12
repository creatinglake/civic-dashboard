import React from 'react';

// Checkbox-style logo for VoterPrime
function VoterPrimeLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="26" height="26" rx="4" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M7 14.5L12 19.5L21 9" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Generic demo/coming soon page for Advisory Voting and Discover Opportunities
export function DemoPage({ title, description, icon, poweredBy }) {
  return (
    <div className="flex-1 min-w-0 h-screen overflow-y-auto bg-civic-cream">
      <div className="max-w-3xl mx-auto px-8 py-8">
        <div className="card px-8 py-16 text-center">
          <div className="w-20 h-20 rounded-2xl bg-civic-teal/10 flex items-center justify-center mx-auto mb-6">
            {icon || (
              <svg className="w-10 h-10 text-civic-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            )}
          </div>

          <h1 className="text-2xl font-heading font-bold text-gray-900 mb-3">
            {title}
          </h1>

          <p className="text-gray-500 max-w-md mx-auto leading-relaxed mb-8">
            {description}
          </p>

          <div className="inline-flex items-center gap-2 bg-civic-yellow/20 text-civic-rust px-5 py-3 rounded-xl">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-sm font-medium">Coming Soon</span>
          </div>

          {/* Powered By attribution */}
          {poweredBy && (
            <div className="mt-10 pt-8 border-t border-gray-100">
              <a
                href={poweredBy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-3 group"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Powered by</span>
                <div className="flex items-center gap-2">
                  {poweredBy.logo}
                  <span className="text-xl font-heading font-bold text-gray-900 group-hover:text-civic-teal transition-colors">
                    {poweredBy.name}
                  </span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-civic-teal transition-colors">
                  {poweredBy.url.replace('https://', '')}
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { VoterPrimeLogo };
