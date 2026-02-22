import React from 'react';
import { FeedItem } from './FeedItem';
import { feedItems, getFeedItemsByHub, getTotalUnreadCount, getHubById } from '../data/mockData';

export function Newsfeed({ selectedHub, onViewInHub }) {
  const items = selectedHub ? getFeedItemsByHub(selectedHub) : feedItems;
  const unreadCount = items.filter(item => !item.isRead).length;
  const totalCount = items.length;

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

      {/* Feed Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="space-y-6">
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
