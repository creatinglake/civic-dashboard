import React, { useState } from 'react';
import { useIsMobile } from './hooks/useMediaQuery';
import { Sidebar } from './components/Sidebar';
import { Newsfeed } from './components/Newsfeed';
import { WidgetPanel } from './components/WidgetPanel';
import { MobileTabBar } from './components/MobileTabBar';
import { HubsList } from './components/HubsList';
import { ExternalView } from './components/ExternalView';
import { getHubById } from './data/mockData';

function App() {
  const isMobile = useIsMobile();
  const [selectedHub, setSelectedHub] = useState(null);
  const [mobileTab, setMobileTab] = useState('tools');
  const [externalView, setExternalView] = useState(null);

  // Handle hub selection
  const handleSelectHub = (hubId) => {
    setSelectedHub(hubId);
    if (isMobile) {
      setMobileTab('feed');
    }
  };

  const handleSelectAll = () => {
    setSelectedHub(null);
    if (isMobile) {
      setMobileTab('feed');
    }
  };

  // Handle viewing item in hub (deep link)
  const handleViewInHub = (item, hub) => {
    setExternalView({
      isHub: true,
      title: `${hub.name} > ${item.title}`,
      url: null,
    });
  };

  // Handle opening external tool
  const handleOpenTool = (tool) => {
    if (tool.url) {
      setExternalView({
        isHub: false,
        title: tool.name,
        url: tool.url,
      });
    }
  };

  // Handle closing external view
  const handleCloseExternalView = () => {
    setExternalView(null);
  };

  // If showing external view
  if (externalView) {
    return (
      <ExternalView
        url={externalView.url}
        title={externalView.title}
        isHub={externalView.isHub}
        onBack={handleCloseExternalView}
      />
    );
  }

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="min-h-screen bg-civic-cream pb-[72px]">
        {/* Content based on active tab */}
        {mobileTab === 'tools' && (
          <WidgetPanel onOpenTool={handleOpenTool} />
        )}
        {mobileTab === 'feed' && (
          <Newsfeed
            selectedHub={selectedHub}
            onViewInHub={handleViewInHub}
          />
        )}
        {mobileTab === 'hubs' && (
          <HubsList onSelectHub={handleSelectHub} />
        )}

        {/* Bottom Tab Bar */}
        <MobileTabBar
          activeTab={mobileTab}
          onTabChange={setMobileTab}
        />
      </div>
    );
  }

  // Desktop Layout - Three Column
  return (
    <div className="min-h-screen bg-civic-cream flex">
      {/* Left Column - Sidebar Navigation */}
      <div className="w-[300px] flex-shrink-0 border-r border-gray-200 h-screen sticky top-0">
        <Sidebar
          selectedHub={selectedHub}
          onSelectHub={handleSelectHub}
          onSelectAll={handleSelectAll}
        />
      </div>

      {/* Center Column - Newsfeed */}
      <div className="flex-1 min-w-0 h-screen overflow-hidden bg-civic-cream">
        <Newsfeed
          selectedHub={selectedHub}
          onViewInHub={handleViewInHub}
        />
      </div>

      {/* Right Column - Widgets */}
      <div className="w-[380px] flex-shrink-0 h-screen overflow-hidden border-l border-gray-200 bg-white">
        <WidgetPanel onOpenTool={handleOpenTool} />
      </div>
    </div>
  );
}

export default App;
