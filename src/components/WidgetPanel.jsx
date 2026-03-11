import React from 'react';
import { CivicInfoSection } from './CivicInfoSection';
import { CivicToolsSection } from './CivicToolsSection';

export function WidgetPanel({ onOpenTool, onOpenPage }) {
  return (
    <div className="h-full flex flex-col">
      {/* Civic Information - top section */}
      <div className="flex-1 overflow-y-auto border-b border-gray-100 min-h-0">
        <CivicInfoSection onOpenPage={onOpenPage} />
      </div>

      {/* Civic Tools - bottom section */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <CivicToolsSection onOpenTool={onOpenTool} onOpenPage={onOpenPage} />
      </div>
    </div>
  );
}
