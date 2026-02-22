import React from 'react';
import { Widget } from './Widget';
import { civicTools } from '../data/mockData';

export function WidgetPanel({ onOpenTool }) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-10 py-8 border-b border-gray-100">
        <h2 className="text-lg font-heading font-semibold text-gray-900">
          Civic Tools
        </h2>
        <p className="text-xs text-gray-400 mt-1.5">{civicTools.length} tools available</p>
      </div>

      {/* Widgets */}
      <div className="flex-1 overflow-y-auto px-10 py-8">
        <div className="space-y-7">
          {civicTools.map((tool) => (
            <Widget
              key={tool.id}
              tool={tool}
              onOpenTool={onOpenTool}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
