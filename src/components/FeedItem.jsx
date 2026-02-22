import React, { useState } from 'react';
import { getContentTypeIcon, HubIcon, ChevronDownIcon, ChevronRightIcon } from './Icons';
import { getHubById } from '../data/mockData';

const hubColors = {
  'belmont-na': { bg: '#E8F5E9', text: '#2E7D32' },
  'athens-rcv': { bg: '#FFF3E0', text: '#E65100' },
  'athens-bos': { bg: '#E3F2FD', text: '#1565C0' },
  'athens-town': { bg: '#F3E5F5', text: '#7B1FA2' },
  'athens-schools': { bg: '#FFF8E1', text: '#F57F17' },
  'virginia-state': { bg: '#ECEFF1', text: '#37474F' },
};

export function FeedItem({ item, onViewInHub }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hub = getHubById(item.hubId);
  const colors = hubColors[item.hubId] || { bg: '#F5F5F5', text: '#666' };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewInHub = (e) => {
    e.stopPropagation();
    onViewInHub(item, hub);
  };

  return (
    <article
      className={`card feed-item px-8 py-7 relative ${isExpanded ? 'expanded' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-expanded={isExpanded}
    >
      {/* Unread indicator */}
      {!item.isRead && (
        <div className="absolute top-8 right-8 w-2.5 h-2.5 bg-civic-rust rounded-full" />
      )}

      {/* Header */}
      <div className="flex items-start gap-5">
        {/* Hub Icon */}
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: colors.bg, color: colors.text }}
        >
          <HubIcon icon={hub?.icon} size={20} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Hub name and type */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium" style={{ color: colors.text }}>
              {hub?.shortName}
            </span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <span>{getContentTypeIcon(item.type)}</span>
              <span className="capitalize">{item.type.replace('-', ' ')}</span>
            </span>
            <span className="text-gray-300">&middot;</span>
            <span className="text-xs text-gray-400">{item.timestamp}</span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-semibold text-gray-900 leading-snug mb-2.5">
            {item.title}
          </h3>

          {/* Preview or full content */}
          <p className="text-sm text-gray-500 leading-relaxed">
            {isExpanded ? (
              <span className="whitespace-pre-line">{item.fullContent}</span>
            ) : (
              item.preview
            )}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Expanded actions */}
          {isExpanded && (
            <div className="mt-5 pt-4 border-t border-gray-100 animate-fadeIn flex items-center gap-4">
              <button
                onClick={handleViewInHub}
                className="btn-primary text-sm"
              >
                View in {hub?.shortName}
                <ChevronRightIcon size={16} />
              </button>
              <span className="text-xs text-gray-400">{item.author}</span>
            </div>
          )}
        </div>

        {/* Expand indicator */}
        <div className="flex-shrink-0 text-gray-300 mt-1">
          <ChevronDownIcon
            size={18}
            className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
    </article>
  );
}
