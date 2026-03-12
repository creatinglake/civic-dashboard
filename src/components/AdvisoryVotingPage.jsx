import React, { useState } from 'react';
import screenshot1 from '../assets/Voatz Screenshot1.png';
import screenshot2 from '../assets/Voatz Screenshot 2.png';

export function AdvisoryVotingPage() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="flex-1 min-w-0 h-screen overflow-y-auto relative">
      {!showDetail ? (
        /* ── Screenshot 1: Polls list ── */
        <div className="relative min-h-screen">
          {/* Full-bleed screenshot background */}
          <img
            src={screenshot1}
            alt="Advisory Voting - Polls Dashboard"
            className="w-full h-auto block"
          />

          {/* Floating opaque card over the dashboard/polls header area */}
          <div
            className="absolute left-0 right-0 top-0 flex items-center justify-center px-6 z-10"
            style={{ height: '25%' }}
          >
            <div className="bg-white rounded-xl shadow-lg px-8 py-5 text-center max-w-lg w-full">
              <h1 className="text-xl font-heading font-bold text-gray-900 mb-2">
                Advisory Voting
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                Tell your representatives how you would like them to vote on upcoming
                legislation. Your advisory votes help elected officials understand
                constituent priorities.
              </p>
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Powered by
                </span>
                <a
                  href="https://digitaldemocracyproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-heading font-bold text-civic-teal hover:text-civic-green transition-colors underline underline-offset-2"
                >
                  The Digital Democracy Project
                </a>
              </div>
            </div>
          </div>

          {/* Clickable overlay on the first poll item ("Local Enforcement...") */}
          <button
            onClick={() => setShowDetail(true)}
            className="absolute cursor-pointer hover:bg-blue-500/10 transition-colors rounded z-20"
            style={{
              top: '28%',
              left: '15%',
              width: '70%',
              height: '10%',
            }}
            aria-label="View poll: Local Enforcement for Tenant Protections"
            title="Click to view this poll"
          />
        </div>
      ) : (
        /* ── Screenshot 2: Detail view ── */
        <div className="relative min-h-screen">
          {/* Back button floating over the screenshot */}
          <div className="absolute top-3 left-3 z-10">
            <button
              onClick={() => setShowDetail(false)}
              className="flex items-center gap-2 text-sm bg-white/90 backdrop-blur-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg shadow-sm transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to all polls
            </button>
          </div>

          {/* Full-bleed screenshot */}
          <img
            src={screenshot2}
            alt="Advisory Vote - Tenant Protections Bill Detail"
            className="w-full h-auto block"
          />
        </div>
      )}
    </div>
  );
}
