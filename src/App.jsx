import React, { useState } from 'react';
import { useIsMobile } from './hooks/useMediaQuery';
import { Sidebar } from './components/Sidebar';
import { Newsfeed } from './components/Newsfeed';
import { WidgetPanel } from './components/WidgetPanel';
import { MobileTabBar } from './components/MobileTabBar';
import { HubsList } from './components/HubsList';
import { BackSidebar } from './components/BackSidebar';
import { ExternalView } from './components/ExternalView';
import { RepresentativeProfile } from './components/RepresentativeProfile';
import { SampleBallotPage } from './components/SampleBallotPage';
import { ContactRepsPage } from './components/ContactRepsPage';
import { DemoPage } from './components/DemoPage';
import { HubPage } from './components/HubPage';

function App() {
  const isMobile = useIsMobile();
  const [selectedHub, setSelectedHub] = useState(null);
  const [mobileTab, setMobileTab] = useState('feed');
  const [externalView, setExternalView] = useState(null);
  const [activePage, setActivePage] = useState(null);

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

  // Handle viewing item in hub - navigate to hub page with item highlighted
  const handleViewInHub = (item, hub) => {
    setActivePage({ type: 'hub-page', data: { hub, highlightedItem: item } });
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

  // Handle opening internal pages
  const handleOpenPage = (pageType, data) => {
    if (pageType === 'hub' && data?.hubId) {
      setSelectedHub(data.hubId);
      if (isMobile) setMobileTab('feed');
      return;
    }
    setActivePage({ type: pageType, data });
  };

  // Handle closing pages / returning to dashboard
  const handleBackToDashboard = () => {
    setActivePage(null);
    setExternalView(null);
  };

  // Determine if we're in an out-of-dashboard view
  const isOutOfDashboard = activePage || externalView;

  // Render out-of-dashboard views with unified left sidebar
  if (isOutOfDashboard) {
    let pageContent = null;

    if (activePage) {
      switch (activePage.type) {
        case 'representative':
          pageContent = (
            <RepresentativeProfile representative={activePage.data.representative} />
          );
          break;
        case 'sample-ballot':
          pageContent = <SampleBallotPage />;
          break;
        case 'contact-reps':
          pageContent = <ContactRepsPage />;
          break;
        case 'advisory-voting':
          pageContent = (
            <DemoPage
              title="Advisory Voting"
              description="Tell your representatives how you would like them to vote on upcoming legislation. Your advisory votes help elected officials understand constituent priorities."
            />
          );
          break;
        case 'discover':
          pageContent = (
            <DemoPage
              title="Discover Civic Opportunities"
              description="Find civic actions and participation opportunities that match your interests. From volunteering to advocacy, discover ways to make a difference in your community."
            />
          );
          break;
        case 'hub-page':
          pageContent = (
            <HubPage
              hub={activePage.data.hub}
              highlightedItem={activePage.data.highlightedItem}
            />
          );
          break;
        default:
          break;
      }
    } else if (externalView) {
      pageContent = (
        <ExternalView
          url={externalView.url}
          title={externalView.title}
          isHub={externalView.isHub}
        />
      );
    }

    return (
      <div className="flex min-h-screen">
        <BackSidebar onBack={handleBackToDashboard} />
        {pageContent}
      </div>
    );
  }

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="min-h-screen bg-civic-cream pb-[72px]">
        {mobileTab === 'info' && (
          <WidgetPanel onOpenTool={handleOpenTool} onOpenPage={handleOpenPage} />
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

      {/* Right Column - Civic Info + Tools */}
      <div className="w-[380px] flex-shrink-0 h-screen overflow-hidden border-l border-gray-200 bg-white">
        <WidgetPanel onOpenTool={handleOpenTool} onOpenPage={handleOpenPage} />
      </div>
    </div>
  );
}

export default App;
