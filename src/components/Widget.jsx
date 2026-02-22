import React from 'react';
import { ToolIcon, ExternalLinkIcon } from './Icons';

export function Widget({ tool, onOpenTool }) {
  const handleClick = () => {
    onOpenTool(tool);
  };

  return (
    <div className="card px-7 py-7">
      <div className="flex items-start gap-5">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-civic-green/8 flex items-center justify-center text-civic-green flex-shrink-0">
          <ToolIcon icon={tool.icon} size={24} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-sm text-gray-900 mb-1">
            {tool.headline}
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            {tool.description}
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className={`btn-primary w-full mt-5 text-sm ${!tool.url ? 'opacity-50' : ''}`}
        disabled={!tool.url}
      >
        {tool.url ? tool.buttonText : 'Coming Soon'}
        {tool.url && <ExternalLinkIcon size={14} />}
      </button>
    </div>
  );
}
