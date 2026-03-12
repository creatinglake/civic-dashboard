import React from 'react';

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2);
}

function getAlignmentColor(pct) {
  if (pct >= 75) return { bg: 'bg-green-50', text: 'text-green-700', ring: 'ring-green-200', stroke: '#16a34a' };
  if (pct >= 50) return { bg: 'bg-yellow-50', text: 'text-yellow-700', ring: 'ring-yellow-200', stroke: '#ca8a04' };
  return { bg: 'bg-red-50', text: 'text-red-700', ring: 'ring-red-200', stroke: '#dc2626' };
}

export function RepresentativeProfile({ representative }) {
  const rep = representative;
  const initials = getInitials(rep.name);
  const alignment = rep.constituentAlignment;
  const alignColor = alignment != null ? getAlignmentColor(alignment) : null;

  // SVG circle progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = alignment != null ? circumference * (1 - alignment / 100) : circumference;

  return (
    <div className="flex-1 min-w-0 h-screen overflow-y-auto bg-civic-cream">
      <div className="max-w-4xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="card px-8 py-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-civic-teal/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-heading font-bold text-civic-teal">{initials}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-heading font-bold text-gray-900">{rep.name}</h1>
              <p className="text-lg text-gray-500 mt-1">{rep.title}</p>
              <div className="flex items-center gap-3 mt-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  rep.party === 'Democrat' ? 'bg-blue-50 text-blue-700' :
                  rep.party === 'Republican' ? 'bg-red-50 text-red-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {rep.party}
                </span>
                <span className="text-sm text-gray-400">{rep.district}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Constituent Alignment Card */}
        {alignment != null && (
          <div className={`card px-8 py-6 mb-6 ${alignColor.bg} ring-1 ${alignColor.ring}`}>
            <div className="flex items-center gap-6">
              {/* Circular progress */}
              <div className="flex-shrink-0 relative w-24 h-24">
                <svg width="96" height="96" viewBox="0 0 96 96" className="-rotate-90">
                  <circle cx="48" cy="48" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="6" />
                  <circle
                    cx="48" cy="48" r={radius} fill="none"
                    stroke={alignColor.stroke} strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-heading font-bold ${alignColor.text}`}>{alignment}%</span>
                </div>
              </div>
              {/* Description */}
              <div className="flex-1">
                <h3 className="text-base font-heading font-semibold text-gray-900 mb-1">Constituent Alignment</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  This percentage represents how well {rep.name} is voting in accordance with their constituents' preferences, based on advisory polling and public input data.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Voting Record */}
          <div className="card px-6 py-6">
            <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">Voting Record</h2>
            <div className="space-y-3">
              {rep.votingRecord.map((record, i) => (
                <div key={i} className="flex items-start justify-between gap-3 py-2 border-b border-gray-50 last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 font-medium">{record.bill}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{record.date}</p>
                  </div>
                  <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    record.vote === 'Yea' || record.vote === 'Signed' ? 'bg-green-50 text-green-700' :
                    record.vote === 'Nay' || record.vote === 'Vetoed' ? 'bg-red-50 text-red-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {record.vote}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Finance */}
          <div className="card px-6 py-6">
            <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">Campaign Finance</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400 mb-1">Raised</p>
                  <p className="text-sm font-semibold text-gray-900">{rep.campaignFinance.raised}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400 mb-1">Spent</p>
                  <p className="text-sm font-semibold text-gray-900">{rep.campaignFinance.spent}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400 mb-1">Cash on Hand</p>
                  <p className="text-sm font-semibold text-gray-900">{rep.campaignFinance.cashOnHand}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Top Donor Categories</h3>
                <ul className="space-y-1.5">
                  {rep.campaignFinance.topDonors.map((donor, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-civic-teal" />
                      {donor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Committee Memberships */}
          {rep.committees.length > 0 && (
            <div className="card px-6 py-6">
              <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">Committee Memberships</h2>
              <ul className="space-y-2">
                {rep.committees.map((committee, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-civic-green mt-1.5 flex-shrink-0" />
                    {committee}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Upcoming Election & Contact */}
          <div className="card px-6 py-6">
            <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">Upcoming Election</h2>
            <p className="text-sm text-gray-600 mb-6">{rep.upcomingElection}</p>

            <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">Contact Info</h2>
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p>Phone: {rep.contactInfo.phone}</p>
              <p>Email: {rep.contactInfo.email}</p>
              <p className="leading-relaxed">Office: {rep.contactInfo.office}</p>
            </div>

            <button className="btn-primary w-full text-sm">
              Contact Representative
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
