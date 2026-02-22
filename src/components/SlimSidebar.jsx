import React from 'react';
import { CapitolIcon, ArrowLeftIcon } from './Icons';

export function SlimSidebar({ onBack, destination }) {
  return (
    <div className="slim-sidebar group">
      <button
        onClick={onBack}
        className="flex flex-col items-center gap-4 text-civic-cream w-full px-2 py-4 hover:bg-civic-teal/20 rounded-lg transition-colors"
        aria-label="Back to Dashboard"
      >
        <CapitolIcon size={28} color="#F0EBE1" />

        <div className="flex items-center gap-2 back-text">
          <ArrowLeftIcon size={18} />
          <span className="text-sm font-medium">Back</span>
        </div>
      </button>

      {destination && (
        <div className="absolute bottom-6 left-0 right-0 px-3 back-text">
          <div className="text-xs text-civic-cream/60 text-center">
            Viewing:
          </div>
          <div className="text-xs text-civic-cream font-medium text-center mt-1 truncate">
            {destination}
          </div>
        </div>
      )}
    </div>
  );
}
