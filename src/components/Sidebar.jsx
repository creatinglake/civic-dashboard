import React from 'react';
import { HubIcon } from './Icons';
import { civicHubs, getTotalUnreadCount } from '../data/mockData';
import civicLogo from '../assets/CivicSocial Logo SVG.svg';

const hubColors = {
  'belmont-na': { bg: '#E8F5E9', text: '#2E7D32' },
  'athens-rcv': { bg: '#FFF3E0', text: '#E65100' },
  'athens-bos': { bg: '#E3F2FD', text: '#1565C0' },
  'athens-town': { bg: '#F3E5F5', text: '#7B1FA2' },
  'athens-schools': { bg: '#FFF8E1', text: '#F57F17' },
  'virginia-state': { bg: '#ECEFF1', text: '#37474F' },
};

export function Sidebar({ selectedHub, onSelectHub, onSelectAll }) {
  const totalUnread = getTotalUnreadCount();

  return (
    <aside className="w-full h-full bg-white flex flex-col">
      {/* Header with Logo */}
      <div className="px-8 pt-10 pb-8 border-b border-gray-100">
        <img src={civicLogo} alt="Civic.Social" className="h-12 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-7 pt-8 pb-6 overflow-y-auto">
        {/* All Updates */}
        <button
          onClick={onSelectAll}
          className={`w-full text-left px-5 py-4 rounded-xl mb-4 transition-all flex items-center justify-between ${
            selectedHub === null
              ? 'bg-civic-green text-white shadow-sm'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span className="font-semibold text-sm">All Updates</span>
          {totalUnread > 0 && (
            <span className={`text-sm font-semibold ${
              selectedHub === null
                ? 'text-white/80'
                : 'text-gray-400'
            }`}>
              {totalUnread}
            </span>
          )}
        </button>

        {/* My Civic Hubs Section */}
        <div className="mt-8">
          <h2 className="px-5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">
            My Civic Hubs
          </h2>

          <div className="space-y-2">
            {civicHubs.map((hub) => {
              const colors = hubColors[hub.id] || { bg: '#F5F5F5', text: '#666' };
              return (
                <button
                  key={hub.id}
                  onClick={() => onSelectHub(hub.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all flex items-center gap-4 group ${
                    selectedHub === hub.id
                      ? 'bg-gray-50 shadow-sm'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: colors.bg, color: colors.text }}
                  >
                    <HubIcon icon={hub.icon} size={20} />
                  </span>
                  <span className={`flex-1 text-sm font-medium truncate ${
                    selectedHub === hub.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {hub.shortName}
                  </span>
                  {hub.unreadCount > 0 && (
                    <span className="flex-shrink-0 text-sm font-semibold text-gray-400 pr-2">
                      {hub.unreadCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="px-8 py-7 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">
          Civic Social Dashboard
        </p>
      </div>
    </aside>
  );
}
