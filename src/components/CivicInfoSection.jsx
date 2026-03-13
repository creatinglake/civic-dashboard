import React from 'react';
import { MapPinIcon, ChevronRightIcon, UserIcon, CalendarIcon, BallotIcon } from './Icons';
import { myJurisdictions, myRepresentatives } from '../data/mockData';

function StaticMapWidget() {
  return (
    <div className="relative w-full h-40 bg-gray-100 rounded-xl overflow-hidden">
      {/* Simple SVG map placeholder for Floyd County, VA area */}
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {/* Background */}
        <rect width="400" height="200" fill="#E8F0E8" />
        {/* Roads */}
        <path d="M0 80 Q100 90 200 70 Q300 50 400 80" stroke="#D4C9A8" strokeWidth="3" fill="none" />
        <path d="M180 0 Q190 60 200 100 Q210 140 200 200" stroke="#D4C9A8" strokeWidth="3" fill="none" />
        <path d="M0 140 Q100 130 200 150 Q300 170 400 140" stroke="#D4C9A8" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M100 0 Q110 80 130 120 Q150 160 140 200" stroke="#D4C9A8" strokeWidth="2" fill="none" opacity="0.6" />
        {/* Water features */}
        <path d="M50 30 Q80 50 120 45 Q160 40 180 60" stroke="#A8C8D8" strokeWidth="2" fill="none" />
        <path d="M250 100 Q280 120 320 115 Q360 110 400 130" stroke="#A8C8D8" strokeWidth="2" fill="none" />
        {/* Green areas */}
        <ellipse cx="300" cy="60" rx="40" ry="25" fill="#C8DCC8" opacity="0.5" />
        <ellipse cx="80" cy="150" rx="35" ry="20" fill="#C8DCC8" opacity="0.5" />
        {/* Town label area */}
        <rect x="170" y="85" width="60" height="20" rx="4" fill="white" opacity="0.7" />
        <text x="200" y="99" textAnchor="middle" fontSize="10" fill="#555" fontFamily="sans-serif">Floyd</text>
        {/* Location pin */}
        <circle cx="200" cy="75" r="8" fill="#C37B51" opacity="0.2" />
        <circle cx="200" cy="75" r="4" fill="#C37B51" />
        <circle cx="200" cy="75" r="1.5" fill="white" />
      </svg>
      {/* Map label */}
      <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1">
        <span className="text-[10px] text-gray-500">Floyd County, VA</span>
      </div>
    </div>
  );
}

export function CivicInfoSection({ onOpenPage, hideTopTitle = false }) {
  return (
    <div className="px-8 py-6">
      {!hideTopTitle && (
        <h2 className="text-lg font-heading font-semibold text-gray-900 mb-5">
          Civic Information
        </h2>
      )}

      {/* My Civic Map */}
      <div className={hideTopTitle ? '' : 'mb-6'}>
        <div className="flex items-center gap-2 mb-3">
          <MapPinIcon size={16} className="text-civic-rust" />
          <h3 className="text-sm font-semibold text-gray-700">My Civic Map</h3>
        </div>
        <StaticMapWidget />

        {/* Jurisdictions */}
        <div className="mt-4">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Your Civic Jurisdictions
          </h4>
          <div className="space-y-1">
            {myJurisdictions.map((j) => (
              <button
                key={j.id}
                onClick={() => j.hubId && onOpenPage?.('hub', { hubId: j.hubId })}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                  j.hubId ? 'text-civic-teal hover:bg-gray-50 cursor-pointer' : 'text-gray-500 cursor-default'
                }`}
              >
                <span className="font-medium">{j.name}</span>
                {j.hubId && <ChevronRightIcon size={14} className="text-gray-300" />}
              </button>
            ))}
          </div>
        </div>

        {/* Representatives */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Your Representatives
          </h4>
          <div className="space-y-1">
            {myRepresentatives.map((rep) => (
              <button
                key={rep.id}
                onClick={() => onOpenPage?.('representative', { representative: rep })}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-civic-teal hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-civic-teal/8 flex items-center justify-center">
                    <UserIcon size={14} className="text-civic-teal" />
                  </div>
                  <div>
                    <span className="font-medium block leading-tight">{rep.name}</span>
                    <span className="text-xs text-gray-400">{rep.title}</span>
                  </div>
                </div>
                <ChevronRightIcon size={14} className="text-gray-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Ballot */}
      <div className="card px-5 py-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-civic-rust/8 flex items-center justify-center">
            <BallotIcon size={18} className="text-civic-rust" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Sample Ballot</h3>
            <p className="text-xs text-gray-400">Preview your upcoming ballot</p>
          </div>
        </div>
        <button
          onClick={() => onOpenPage?.('sample-ballot')}
          className="btn-primary w-full text-sm"
        >
          View Sample Ballot
        </button>
      </div>

      {/* Upcoming Elections */}
      <div className="card px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-civic-yellow/20 flex items-center justify-center">
            <CalendarIcon size={18} className="text-civic-rust" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Upcoming Elections</h3>
            <p className="text-xs text-gray-400">Next Election &ndash; November 3, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
