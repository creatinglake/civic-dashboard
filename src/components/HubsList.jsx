import React from 'react';
import { HubIcon, ChevronRightIcon } from './Icons';
import { civicHubs } from '../data/mockData';

export function HubsList({ onSelectHub }) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 border-b border-civic-green/10 bg-civic-cream/50">
        <h2 className="text-2xl font-heading font-semibold text-civic-green">
          My Civic Hubs
        </h2>
        <p className="text-sm text-civic-green/60 mt-1">
          {civicHubs.length} hubs you follow
        </p>
      </div>

      {/* Hubs List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {civicHubs.map((hub) => (
            <button
              key={hub.id}
              onClick={() => onSelectHub(hub.id)}
              className="w-full card p-4 flex items-center gap-4 text-left hover:bg-civic-teal/5 transition-colors"
            >
              {/* Hub Icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${hub.color}15` }}
              >
                <HubIcon icon={hub.icon} size={24} />
              </div>

              {/* Hub Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-civic-green truncate">
                  {hub.name}
                </h3>
                {hub.unreadCount > 0 && (
                  <p className="text-sm text-civic-rust mt-0.5">
                    {hub.unreadCount} new updates
                  </p>
                )}
              </div>

              {/* Chevron */}
              <ChevronRightIcon size={20} className="text-civic-green/40" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
