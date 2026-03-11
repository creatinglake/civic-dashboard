import React from 'react';
import { FeedItem } from './FeedItem';
import { feedItems, getFeedItemsByHub, getHubById } from '../data/mockData';

export function Newsfeed({ selectedHub, onViewInHub }) {
  const items = selectedHub ? getFeedItemsByHub(selectedHub) : feedItems;
  const unreadCount = items.filter(item => !item.isRead).length;
  const totalCount = items.length;

  // Count civic opportunities (actions, votes, meetings, events happening soon)
  const opportunities = items.filter(item =>
    ['action', 'vote', 'meeting', 'event', 'poll', 'hearing'].includes(item.type) && !item.isRead
  ).length;

  return (
    <div className="h-full flex flex-col">
      {/* Feed Header */}
      <div className="px-10 py-8 border-b border-gray-100 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-heading font-semibold text-gray-900">
              {selectedHub ? getHubById(selectedHub)?.name : 'All Updates'}
            </h2>
            <p className="text-sm text-gray-400 mt-1.5">
              {unreadCount} new &middot; {totalCount} total
            </p>
          </div>
        </div>
      </div>

      {/* Civic Opportunities Banner */}
      {!selectedHub && opportunities > 0 && (
        <div className="mx-8 mt-6 px-5 py-4 bg-civic-green/5 border border-civic-green/15 rounded-xl">
          <p className="text-sm font-medium text-civic-green">
            You have {opportunities} civic {opportunities === 1 ? 'opportunity' : 'opportunities'} this week.
          </p>
        </div>
      )}

      {/* Feed Content */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="space-y-5">
          {items.length > 0 ? (
            items.map((item) => (
              <FeedItem
                key={item.id}
                item={item}
                onViewInHub={onViewInHub}
              />
            ))
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No updates from this hub yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
