import React, { useState } from 'react';

export function ExternalView({ url, title, isHub }) {
  const [isLoading, setIsLoading] = useState(true);

  // For hub deep links (not real external URLs), show a placeholder
  const isPlaceholder = isHub || !url;

  return (
    <div className="external-view animate-fadeIn">
      {isPlaceholder ? (
        // Placeholder for hub deep links
        <div className="h-full flex flex-col items-center justify-center bg-civic-cream p-8">
          <div className="max-w-md text-center">
            <div className="w-20 h-20 rounded-2xl bg-civic-teal/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-civic-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-heading font-semibold text-civic-green mb-3">
              Deep Link Preview
            </h2>

            <p className="text-civic-green/70 mb-6 leading-relaxed">
              In the full application, this would navigate to:
            </p>

            <div className="bg-white rounded-xl p-4 border border-civic-green/10">
              <p className="font-mono text-sm text-civic-teal break-all">
                {title}
              </p>
            </div>

            <p className="text-sm text-civic-green/50 mt-6">
              Click the sidebar to return to the dashboard.
            </p>
          </div>
        </div>
      ) : (
        // Actual iframe for external tools
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-civic-cream">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-civic-teal/20 border-t-civic-teal rounded-full animate-spin mx-auto mb-4" />
                <p className="text-civic-green/70">Loading {title}...</p>
              </div>
            </div>
          )}
          <iframe
            src={url}
            title={title}
            onLoad={() => setIsLoading(false)}
            className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity'}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </>
      )}
    </div>
  );
}
