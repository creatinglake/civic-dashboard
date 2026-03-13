import React from 'react';
import { ToolIcon } from './Icons';
import { civicTools } from '../data/mockData';

export function CivicToolsSection({ onOpenPage, hideTopTitle = false }) {
  return (
    <div className="px-8 py-6">
      {!hideTopTitle && (
        <>
          <h2 className="text-lg font-heading font-semibold text-gray-900 mb-1">
            Civic Tools
          </h2>
          <p className="text-xs text-gray-400 mb-5">{civicTools.length} tools available</p>
        </>
      )}

      <div className="space-y-4">
        {civicTools.map((tool) => (
          <div key={tool.id} className="card px-5 py-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-civic-green/8 flex items-center justify-center text-civic-green flex-shrink-0">
                <ToolIcon icon={tool.icon} size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-sm text-gray-900 mb-1">
                  {tool.headline}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenPage?.(tool.page)}
              className="btn-primary w-full mt-4 text-sm"
            >
              {tool.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
