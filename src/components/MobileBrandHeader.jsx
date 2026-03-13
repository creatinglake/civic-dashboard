import React from 'react';
import civicLogo from '../assets/CivicSocial Logo SVG.svg';

export function MobileBrandHeader({ title, subtitle, children }) {
  return (
    <div className="px-4 py-4 border-b border-gray-100 bg-white">
      <div className="mb-3">
        <img
          src={civicLogo}
          alt="Civic Social"
          className="h-7 w-auto"
        />
      </div>

      <div className="min-w-0">
        <h2 className="text-lg font-heading font-semibold text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-gray-400 mt-1.5">
            {subtitle}
          </p>
        )}
      </div>

      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}
