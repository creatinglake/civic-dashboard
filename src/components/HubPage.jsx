import React, { useState } from 'react';
import { HubIcon, getContentTypeIcon, ChevronRightIcon, CalendarIcon, UserIcon, MapPinIcon } from './Icons';
import { getFeedItemsByHub, hubColors, hubPageData } from '../data/mockData';
import { useIsMobile } from '../hooks/useMediaQuery';

// ─── Utilities ───────────────────────────────────────────────

const hubTypeLabels = {
  jurisdiction: 'Government Hub',
  issue: 'Issue Hub',
  organization: 'Community Hub',
};

function isLightColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function darkenColor(hex, amount = 40) {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function getTimeGroup(timestamp) {
  if (timestamp.includes('hour')) return 'Today';
  if (timestamp.includes('Yesterday') || timestamp.includes('day')) return 'This Week';
  return 'Earlier';
}

// ─── SVG Pattern Backgrounds ─────────────────────────────────

function HubPatternSVG({ type }) {
  if (type === 'jurisdiction') {
    return (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="columns" x="0" y="0" width="48" height="56" patternUnits="userSpaceOnUse">
            <rect x="10" y="14" width="3" height="34" fill="white" opacity="0.07" rx="1" />
            <rect x="22" y="14" width="3" height="34" fill="white" opacity="0.07" rx="1" />
            <rect x="34" y="14" width="3" height="34" fill="white" opacity="0.07" rx="1" />
            <rect x="6" y="11" width="36" height="2" fill="white" opacity="0.05" />
            <rect x="6" y="48" width="36" height="2" fill="white" opacity="0.05" />
            <polygon points="24,4 6,11 42,11" fill="white" opacity="0.04" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#columns)" />
      </svg>
    );
  }
  if (type === 'issue') {
    return (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonals" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="2" opacity="0.06" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonals)" />
      </svg>
    );
  }
  // organization - dot grid / network pattern
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="16" cy="16" r="1.5" fill="white" opacity="0.1" />
          <circle cx="0" cy="0" r="1.5" fill="white" opacity="0.1" />
          <circle cx="32" cy="0" r="1.5" fill="white" opacity="0.1" />
          <circle cx="0" cy="32" r="1.5" fill="white" opacity="0.1" />
          <circle cx="32" cy="32" r="1.5" fill="white" opacity="0.1" />
          <line x1="0" y1="0" x2="16" y2="16" stroke="white" strokeWidth="0.5" opacity="0.04" />
          <line x1="32" y1="0" x2="16" y2="16" stroke="white" strokeWidth="0.5" opacity="0.04" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

// ─── Banner ──────────────────────────────────────────────────

function HubBanner({ hub, itemCount, unreadCount, isMobile }) {
  const light = isLightColor(hub.color);
  const textColor = light ? 'text-gray-900' : 'text-white';
  const subtextColor = light ? 'text-gray-700/70' : 'text-white/70';
  const badgeBg = light ? 'bg-gray-900/10' : 'bg-white/15';
  const badgeText = light ? 'text-gray-900' : 'text-white';
  const data = hubPageData[hub.id];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${hub.color} 0%, ${darkenColor(hub.color, 30)} 100%)`,
      }}
    >
      <HubPatternSVG type={hub.type} />

      <div className={`relative max-w-6xl mx-auto ${isMobile ? 'px-3.5 pt-4 pb-4' : 'px-10 pt-10 pb-8'}`}>
        {isMobile ? (
          <div>
            <div className="flex items-start gap-2.5 mb-2">
              <div
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.15)',
                }}
              >
                <HubIcon icon={hub.icon} size={18} color={light ? hub.color : 'white'} />
              </div>
              <div className="min-w-0">
                <h1 className={`text-[1.15rem] leading-tight font-heading font-bold ${textColor}`}>
                  {hub.name}
                </h1>
                <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mt-2 ${badgeBg} ${badgeText}`}>
                  {hubTypeLabels[hub.type]}
                </span>
              </div>
            </div>

            <p className={`text-sm leading-relaxed mb-3 ${subtextColor}`}>
              {data?.description || ''}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-sm ${subtextColor}`}>
                <span className={`font-semibold ${textColor}`}>{itemCount}</span> updates
              </span>
              <span className={subtextColor}>·</span>
              <span className={`text-sm ${subtextColor}`}>
                <span className={`font-semibold ${textColor}`}>{unreadCount}</span> unread
              </span>
              {hub.type === 'organization' && data?.about?.memberCount && (
                <>
                  <span className={subtextColor}>·</span>
                  <span className={`text-sm ${subtextColor}`}>
                    <span className={`font-semibold ${textColor}`}>{data.about.memberCount}</span> members
                  </span>
                </>
              )}
              {hub.type === 'issue' && data?.supporters && (
                <>
                  <span className={subtextColor}>·</span>
                  <span className={`text-sm ${subtextColor}`}>
                    <span className={`font-semibold ${textColor}`}>{data.supporters.volunteers}</span> volunteers
                  </span>
                </>
              )}
            </div>
          </div>
        ) : (
          /* Desktop: side-by-side layout */
          <div className="flex items-start gap-5">
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.15)',
              }}
            >
              <HubIcon icon={hub.icon} size={28} color={light ? hub.color : 'white'} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h1 className={`text-2xl font-heading font-bold ${textColor}`}>
                  {hub.name}
                </h1>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeBg} ${badgeText}`}>
                  {hubTypeLabels[hub.type]}
                </span>
              </div>

              <p className={`text-sm leading-relaxed max-w-2xl mb-4 ${subtextColor}`}>
                {data?.description || ''}
              </p>

              <div className="flex items-center gap-5">
                <span className={`text-sm ${subtextColor}`}>
                  <span className={`font-semibold ${textColor}`}>{itemCount}</span> updates
                </span>
                <span className={subtextColor}>·</span>
                <span className={`text-sm ${subtextColor}`}>
                  <span className={`font-semibold ${textColor}`}>{unreadCount}</span> unread
                </span>
                {hub.type === 'organization' && data?.about?.memberCount && (
                  <>
                    <span className={subtextColor}>·</span>
                    <span className={`text-sm ${subtextColor}`}>
                      <span className={`font-semibold ${textColor}`}>{data.about.memberCount}</span> members
                    </span>
                  </>
                )}
                {hub.type === 'issue' && data?.supporters && (
                  <>
                    <span className={subtextColor}>·</span>
                    <span className={`text-sm ${subtextColor}`}>
                      <span className={`font-semibold ${textColor}`}>{data.supporters.volunteers}</span> volunteers
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Tab Bar ─────────────────────────────────────────────────

const hubTabs = [
  { id: 'activity', label: 'Activity' },
  { id: 'documents', label: 'Documents' },
  { id: 'events', label: 'Events' },
  { id: 'members', label: 'Members' },
];

function HubTabBar({ activeTab, onTabChange, hubColor, isMobile }) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className={`max-w-6xl mx-auto ${isMobile ? 'px-3' : 'px-10'}`}>
        <div className={isMobile ? 'grid grid-cols-4 gap-1' : 'flex gap-8'}>
          {hubTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`${isMobile ? 'py-2.5 text-[13px] leading-tight text-center min-w-0' : 'py-3 text-sm'} font-heading font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
              style={activeTab === tab.id ? { borderColor: hubColor } : { borderColor: 'transparent' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Feed Item ───────────────────────────────────────────────

function HubFeedItem({ item, hubColor, isHighlighted, isMobile }) {
  const [isExpanded, setIsExpanded] = useState(isHighlighted);

  return (
    <article
      className={`bg-white ${isMobile ? 'rounded-xl px-4 py-4' : 'rounded-2xl px-6 py-5'} cursor-pointer transition-all hover:shadow-md relative ${
        isHighlighted ? 'border-l-4' : ''
      }`}
      style={isHighlighted ? { borderLeftColor: hubColor } : undefined}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Unread dot */}
      {!item.isRead && (
        <div
          className={`absolute ${isMobile ? 'top-4 right-4' : 'top-5 right-5'} w-2 h-2 rounded-full`}
          style={{ backgroundColor: hubColor }}
        />
      )}

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
        <span className="text-sm text-gray-400 flex items-center gap-1">
          <span>{getContentTypeIcon(item.type)}</span>
          <span className="capitalize">{item.type.replace('-', ' ')}</span>
        </span>
        <span className="text-gray-300">·</span>
        <span className="text-xs text-gray-400">{item.timestamp}</span>
        {isHighlighted && (
          <>
            <span className="text-gray-300">·</span>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{ color: hubColor, backgroundColor: hubColor + '18' }}
            >
              Viewing
            </span>
          </>
        )}
      </div>

      <h3 className="font-heading font-semibold text-gray-900 leading-snug mb-2 break-words">
        {item.title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed break-words">
        {isExpanded ? (
          <span className="whitespace-pre-line">{item.fullContent}</span>
        ) : (
          item.preview
        )}
      </p>

      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      {isExpanded && (
        <div className="mt-4 pt-3 border-t border-gray-100 animate-fadeIn">
          <span className="text-xs text-gray-400">{item.author}</span>
        </div>
      )}
    </article>
  );
}

// ─── Sidebar Widgets ─────────────────────────────────────────

function MeetingsWidget({ meetings, hubColor }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:rounded-2xl sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon size={16} color={hubColor} />
        <h3 className="text-sm font-heading font-semibold text-gray-900">Upcoming Meetings</h3>
      </div>
      <div className="space-y-3">
        {meetings.map((m, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex-shrink-0 w-10 text-center">
              <div className="text-xs font-bold text-gray-900">{m.date.split(' ')[0]}</div>
              <div className="text-[10px] text-gray-400">{m.date.split(' ')[1]?.replace(',', '')}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-800 leading-tight break-words">{m.title}</div>
              <div className="text-xs text-gray-400 mt-0.5 break-words">{m.time} · {m.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfficialsWidget({ officials, hubColor, label = 'Officials' }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:rounded-2xl sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <UserIcon size={16} color={hubColor} />
        <h3 className="text-sm font-heading font-semibold text-gray-900">{label}</h3>
      </div>
      <div className="space-y-2.5">
        {officials.map((o, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: hubColor + '18', color: hubColor }}
            >
              {o.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-800 break-words">{o.name}</div>
              <div className="text-xs text-gray-400 break-words">
                {o.role}{o.district ? ` · ${o.district}` : ''}
              </div>
            </div>
            <ChevronRightIcon size={14} className="text-gray-300 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DocumentsWidget({ documents, hubColor }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:rounded-2xl sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <span style={{ color: hubColor }}>📄</span>
        <h3 className="text-sm font-heading font-semibold text-gray-900">Key Documents</h3>
      </div>
      <div className="space-y-2">
        {documents.map((d, i) => (
          <div key={i} className="flex items-center gap-3 py-1.5 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
            <div className="text-xs font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 flex-shrink-0">
              {d.type}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-gray-800 truncate">{d.title}</div>
            </div>
            <div className="text-xs text-gray-400 flex-shrink-0">{d.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactWidget({ contactInfo, hubColor }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:rounded-2xl sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <MapPinIcon size={16} color={hubColor} />
        <h3 className="text-sm font-heading font-semibold text-gray-900">Contact & Hours</h3>
      </div>
      <div className="space-y-2.5 text-sm">
        <div className="flex gap-2">
          <span className="text-gray-400 flex-shrink-0">📞</span>
          <span className="text-gray-700 break-words min-w-0">{contactInfo.phone}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400 flex-shrink-0">✉️</span>
          <span className="text-gray-700 break-all min-w-0">{contactInfo.email}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400 flex-shrink-0">📍</span>
          <span className="text-gray-700 break-words min-w-0">{contactInfo.address}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400 flex-shrink-0">🕐</span>
          <span className="text-gray-700 break-words min-w-0">{contactInfo.officeHours}</span>
        </div>
        {contactInfo.website && (
          <div className="flex gap-2">
            <span className="text-gray-400 flex-shrink-0">🌐</span>
            <span className="text-gray-700 break-all min-w-0">{contactInfo.website}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProgressWidget({ campaign, hubColor }) {
  const pct = Math.round((campaign.current / campaign.target) * 100);
  return (
    <div className="bg-white rounded-xl p-4 sm:rounded-2xl sm:p-5">
      <h3 className="text-sm font-heading font-semibold text-gray-900 mb-1">{campaign.goal}</h3>
      <p className="text-xs text-gray-400 mb-4">Deadline: {campaign.deadline}</p>

      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1.5">
          <span className="font-medium text-gray-700">{campaign.metric}</span>
          <span className="font-semibold" style={{ color: hubColor }}>{pct}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${pct}%`, backgroundColor: hubColor }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1.5">
          <span>{campaign.current.toLocaleString()} collected</span>
          <span>{campaign.target.toLocaleString()} goal</span>
        </div>
      </div>
    </div>
  );
}

function MilestonesWidget({ milestones, hubColor }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:rounded-2xl sm:p-5">
      <h3 className="text-sm font-heading font-semibold text-gray-900 mb-4">Milestones</h3>
      <div className="relative pl-6">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-1 bottom-1 w-0.5"
          style={{ backgroundColor: hubColor + '30' }}
        />

        <div className="space-y-4">
          {milestones.map((m, i) => (
            <div key={i} className="relative flex items-start gap-3">
              {/* Dot */}
              <div
                className="absolute -left-6 top-0.5 w-3.5 h-3.5 rounded-full border-2 flex-shrink-0"
                style={{
                  borderColor: hubColor,
                  backgroundColor: m.completed ? hubColor : 'white',
                }}
              />
              <div>
                <div className={`text-sm ${m.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                  {m.label}
                </div>
                <div className="text-xs text-gray-400">{m.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActionsWidget({ actions, hubColor }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:rounded-2xl sm:p-5">
      <h3 className="text-sm font-heading font-semibold text-gray-900 mb-4">Get Involved</h3>
      <div className="space-y-2.5">
        {actions.map((a, i) => (
          <button
            key={i}
            className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
              a.primary
                ? 'text-white font-medium'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
            }`}
            style={a.primary ? { backgroundColor: hubColor } : undefined}
          >
            <div className="text-sm font-medium">{a.label}</div>
            <div className={`text-xs mt-0.5 ${a.primary ? 'text-white/70' : 'text-gray-400'}`}>
              {a.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function AboutWidget({ about }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:rounded-2xl sm:p-5">
      <h3 className="text-sm font-heading font-semibold text-gray-900 mb-3">About</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{about.mission}</p>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-gray-900">{about.memberCount}</div>
          <div className="text-xs text-gray-400">Members</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-gray-900">{about.founded}</div>
          <div className="text-xs text-gray-400">Founded</div>
        </div>
      </div>

      {about.meetingSchedule && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <CalendarIcon size={12} color="#9CA3AF" />
            {about.meetingSchedule}
          </div>
        </div>
      )}
    </div>
  );
}

function JoinWidget({ joinCTA, hubColor }) {
  return (
    <div className="rounded-xl p-4 sm:rounded-2xl sm:p-5" style={{ backgroundColor: hubColor + '10' }}>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">{joinCTA.text}</p>
      <button
        className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: hubColor }}
      >
        {joinCTA.buttonText}
      </button>
    </div>
  );
}

function EventsWidget({ events, hubColor }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:rounded-2xl sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon size={16} color={hubColor} />
        <h3 className="text-sm font-heading font-semibold text-gray-900">Upcoming Events</h3>
      </div>
      <div className="space-y-3">
        {events.map((e, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex-shrink-0 w-10 text-center">
              <div className="text-xs font-bold text-gray-900">{e.date.split(' ')[0]}</div>
              <div className="text-[10px] text-gray-400">{e.date.split(' ')[1]?.replace(',', '')}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-800 leading-tight break-words">{e.title}</div>
              <div className="text-xs text-gray-400 mt-0.5 break-words">{e.time} · {e.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Sidebar Composer ────────────────────────────────────────

function HubSidebar({ hub, hubColor }) {
  const data = hubPageData[hub.id];
  if (!data) return null;

  if (hub.type === 'jurisdiction') {
    return (
      <div className="space-y-4">
        {data.upcomingMeetings && <MeetingsWidget meetings={data.upcomingMeetings} hubColor={hubColor} />}
        {data.officials && <OfficialsWidget officials={data.officials} hubColor={hubColor} />}
        {data.keyDocuments && <DocumentsWidget documents={data.keyDocuments} hubColor={hubColor} />}
        {data.contactInfo && <ContactWidget contactInfo={data.contactInfo} hubColor={hubColor} />}
      </div>
    );
  }

  if (hub.type === 'issue') {
    return (
      <div className="space-y-4">
        {data.campaign && <ProgressWidget campaign={data.campaign} hubColor={hubColor} />}
        {data.milestones && <MilestonesWidget milestones={data.milestones} hubColor={hubColor} />}
        {data.actions && <ActionsWidget actions={data.actions} hubColor={hubColor} />}
        {data.upcomingEvents && <EventsWidget events={data.upcomingEvents} hubColor={hubColor} />}
      </div>
    );
  }

  // organization
  return (
    <div className="space-y-4">
      {data.about && <AboutWidget about={data.about} />}
      {data.leadership && <OfficialsWidget officials={data.leadership} hubColor={hubColor} label="Leadership" />}
      {data.upcomingEvents && <EventsWidget events={data.upcomingEvents} hubColor={hubColor} />}
      {data.joinCTA && <JoinWidget joinCTA={data.joinCTA} hubColor={hubColor} />}
    </div>
  );
}

// ─── Tab Content Placeholder ─────────────────────────────────

function ComingSoonTab({ tabName }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4 text-2xl">
        {tabName === 'Documents' ? '📄' : tabName === 'Events' ? '📅' : '👥'}
      </div>
      <h3 className="font-heading font-semibold text-gray-900 mb-2">{tabName}</h3>
      <p className="text-sm text-gray-400 max-w-xs">
        The {tabName.toLowerCase()} section for this hub is coming soon.
      </p>
      <span className="mt-3 text-xs font-medium text-civic-rust/70 border border-civic-rust/20 rounded-full px-3 py-1">
        Coming Soon
      </span>
    </div>
  );
}

// ─── Main Hub Page ───────────────────────────────────────────

export function HubPage({ hub, highlightedItem }) {
  const [activeTab, setActiveTab] = useState('activity');
  const isMobile = useIsMobile();
  const colors = hubColors[hub.id] || { bg: '#F5F5F5', text: '#666' };
  const hubColor = colors.text;
  const allItems = getFeedItemsByHub(hub.id);
  const otherItems = allItems.filter(item => item.id !== highlightedItem?.id);
  const unreadCount = allItems.filter(i => !i.isRead).length;

  // Group other items by recency
  const groups = {};
  otherItems.forEach(item => {
    const group = getTimeGroup(item.timestamp);
    if (!groups[group]) groups[group] = [];
    groups[group].push(item);
  });
  const groupOrder = ['Today', 'This Week', 'Earlier'];

  return (
    <div className="flex-1 min-w-0 h-screen overflow-y-auto overflow-x-hidden bg-civic-cream">
      {/* Banner */}
      <HubBanner hub={hub} itemCount={allItems.length} unreadCount={unreadCount} isMobile={isMobile} />

      {/* Tabs */}
      <HubTabBar activeTab={activeTab} onTabChange={setActiveTab} hubColor={hubColor} isMobile={isMobile} />

      {/* Content */}
      {activeTab === 'activity' ? (
        <div className={`max-w-6xl mx-auto ${isMobile ? 'px-3.5 py-4' : 'px-10 py-8'}`}>
          <div className={isMobile ? '' : 'flex gap-8 overflow-hidden'}>
            {/* Main — Activity Feed */}
            <div className="flex-1 min-w-0 overflow-hidden">
              {/* Highlighted Item */}
              {highlightedItem && (
                <div className="mb-6">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    Viewing Item
                  </h2>
                  <HubFeedItem
                    item={highlightedItem}
                    hubColor={hubColor}
                    isHighlighted={true}
                    isMobile={isMobile}
                  />
                </div>
              )}

              {/* Grouped other items */}
              {groupOrder.map(groupName => {
                const items = groups[groupName];
                if (!items || items.length === 0) return null;
                return (
                  <div key={groupName} className="mb-6">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                      {groupName}
                    </h2>
                    <div className="space-y-3">
                      {items.map(item => (
                        <HubFeedItem
                          key={item.id}
                          item={item}
                          hubColor={hubColor}
                          isHighlighted={false}
                          isMobile={isMobile}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}

              {allItems.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  No activity in this hub yet.
                </div>
              )}
            </div>

            {/* Sidebar — hidden on mobile */}
            {!isMobile && (
              <div className="w-[340px] flex-shrink-0">
                <HubSidebar hub={hub} hubColor={hubColor} />
              </div>
            )}
          </div>

          {/* Sidebar below feed on mobile */}
          {isMobile && (
            <div className="mt-5">
              <HubSidebar hub={hub} hubColor={hubColor} />
            </div>
          )}
        </div>
      ) : (
        <div className={`max-w-6xl mx-auto ${isMobile ? 'px-3.5 py-4' : 'px-10 py-8'}`}>
          <ComingSoonTab tabName={hubTabs.find(t => t.id === activeTab)?.label || activeTab} />
        </div>
      )}
    </div>
  );
}
