import React, { useLayoutEffect, useRef } from 'react';
import { CivicInfoSection } from './CivicInfoSection';
import { CivicToolsSection } from './CivicToolsSection';
import { useIsMobile } from '../hooks/useMediaQuery';
import { MobileBrandHeader } from './MobileBrandHeader';

export function WidgetPanel({ onOpenTool, onOpenPage, scrollState, onScrollChange }) {
  const isMobile = useIsMobile();
  const infoRef = useRef(null);
  const toolsRef = useRef(null);

  useLayoutEffect(() => {
    if (infoRef.current) {
      infoRef.current.scrollTop = scrollState?.info ?? 0;
    }
    if (toolsRef.current) {
      toolsRef.current.scrollTop = scrollState?.tools ?? 0;
    }
  }, [scrollState]);

  return (
    <div className="h-full flex flex-col">
      {isMobile && (
        <MobileBrandHeader title="Info & Tools" subtitle="Civic information and actions in one place" />
      )}

      {/* Civic Information - top section */}
      <div
        ref={infoRef}
        className={`flex-1 overflow-y-auto border-b border-gray-100 min-h-0 ${isMobile ? 'bg-white' : ''}`}
        onScroll={(e) => onScrollChange?.('info', e.currentTarget.scrollTop)}
      >
        <CivicInfoSection onOpenPage={onOpenPage} hideTopTitle={isMobile} />
      </div>

      {/* Civic Tools - bottom section */}
      <div
        ref={toolsRef}
        className={`flex-1 overflow-y-auto min-h-0 ${isMobile ? 'bg-white' : ''}`}
        onScroll={(e) => onScrollChange?.('tools', e.currentTarget.scrollTop)}
      >
        <CivicToolsSection onOpenTool={onOpenTool} onOpenPage={onOpenPage} hideTopTitle={isMobile} />
      </div>
    </div>
  );
}
