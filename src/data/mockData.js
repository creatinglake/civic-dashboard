// Civic Hubs - organized by type
export const civicHubs = [
  // Jurisdiction Hubs
  {
    id: 'floyd-county',
    name: 'Floyd County',
    shortName: 'Floyd County',
    icon: 'building',
    color: '#294B52',
    unreadCount: 4,
    type: 'jurisdiction',
  },
  {
    id: 'floyd-town',
    name: 'Town of Floyd',
    shortName: 'Floyd Town',
    icon: 'landmark',
    color: '#386759',
    unreadCount: 2,
    type: 'jurisdiction',
  },
  {
    id: 'floyd-schools',
    name: 'Floyd County School Board',
    shortName: 'Floyd Schools',
    icon: 'school',
    color: '#EDC572',
    unreadCount: 3,
    type: 'jurisdiction',
  },
  {
    id: 'virginia-state',
    name: 'Virginia State',
    shortName: 'Virginia State',
    icon: 'capitol',
    color: '#294B52',
    unreadCount: 3,
    type: 'jurisdiction',
  },
  // Issue Hubs
  {
    id: 'floyd-rcv',
    name: 'Floyd Ranked Choice Voting Initiative',
    shortName: 'Floyd RCV',
    icon: 'vote',
    color: '#C37B51',
    unreadCount: 2,
    type: 'issue',
  },
  {
    id: 'floyd-environment',
    name: 'Floyd Environment Coalition',
    shortName: 'Floyd Environment',
    icon: 'leaf',
    color: '#2E7D32',
    unreadCount: 1,
    type: 'issue',
  },
  // Organization Hubs
  {
    id: 'belmont-na',
    name: 'Belmont Neighborhood Association',
    shortName: 'Belmont NA',
    icon: 'home',
    color: '#386759',
    unreadCount: 3,
    type: 'organization',
  },
  {
    id: 'floyd-civic-league',
    name: 'Floyd Civic League',
    shortName: 'Floyd Civic League',
    icon: 'users',
    color: '#7B1FA2',
    unreadCount: 1,
    type: 'organization',
  },
];

// Hub color mapping for feed items and sidebar
export const hubColors = {
  'floyd-county': { bg: '#E3F2FD', text: '#1565C0' },
  'floyd-town': { bg: '#F3E5F5', text: '#7B1FA2' },
  'floyd-schools': { bg: '#FFF8E1', text: '#F57F17' },
  'virginia-state': { bg: '#ECEFF1', text: '#37474F' },
  'floyd-rcv': { bg: '#FFF3E0', text: '#E65100' },
  'floyd-environment': { bg: '#E8F5E9', text: '#2E7D32' },
  'belmont-na': { bg: '#E8F5E9', text: '#2E7D32' },
  'floyd-civic-league': { bg: '#F3E5F5', text: '#7B1FA2' },
};

// User's civic jurisdictions
export const myJurisdictions = [
  { id: 'floyd-county', name: 'Floyd County', hubId: 'floyd-county' },
  { id: 'virginia', name: 'Virginia', hubId: 'virginia-state' },
  { id: 'united-states', name: 'United States', hubId: null },
];

// User's representatives
export const myRepresentatives = [
  {
    id: 'rep-morgan-griffith',
    title: 'U.S. Representative',
    name: 'Morgan Griffith',
    party: 'Republican',
    district: "Virginia's 9th Congressional District",
    votingRecord: [
      { bill: 'HR 1234 - Infrastructure Investment Act', vote: 'Yea', date: 'Feb 2026' },
      { bill: 'HR 5678 - Rural Broadband Expansion', vote: 'Yea', date: 'Jan 2026' },
      { bill: 'HR 9012 - Education Funding Reform', vote: 'Nay', date: 'Jan 2026' },
      { bill: 'HR 3456 - Clean Energy Tax Credits', vote: 'Nay', date: 'Dec 2025' },
      { bill: 'HR 7890 - Veterans Healthcare Improvement', vote: 'Yea', date: 'Dec 2025' },
    ],
    campaignFinance: {
      raised: '$1,245,000',
      spent: '$987,000',
      cashOnHand: '$258,000',
      topDonors: ['Individual Contributions', 'PACs', 'Small Dollar Donations'],
    },
    committees: [
      'House Energy and Commerce Committee',
      'Subcommittee on Health',
      'Subcommittee on Oversight and Investigations',
    ],
    upcomingElection: 'November 3, 2026',
    contactInfo: {
      phone: '(202) 555-0142',
      email: 'rep.griffith@house.gov',
      office: '2202 Rayburn House Office Building, Washington, DC 20515',
    },
  },
  {
    id: 'sen-mark-warner',
    title: 'U.S. Senator',
    name: 'Mark Warner',
    party: 'Democrat',
    district: 'Virginia',
    votingRecord: [
      { bill: 'S 234 - Cybersecurity Enhancement Act', vote: 'Yea', date: 'Feb 2026' },
      { bill: 'S 567 - Rural Healthcare Access', vote: 'Yea', date: 'Jan 2026' },
      { bill: 'S 891 - Tax Reform Package', vote: 'Nay', date: 'Jan 2026' },
      { bill: 'S 345 - Climate Resilience Act', vote: 'Yea', date: 'Dec 2025' },
      { bill: 'S 678 - Defense Authorization', vote: 'Yea', date: 'Dec 2025' },
    ],
    campaignFinance: {
      raised: '$3,450,000',
      spent: '$2,100,000',
      cashOnHand: '$1,350,000',
      topDonors: ['Technology Sector', 'Finance Sector', 'Individual Contributions'],
    },
    committees: [
      'Senate Intelligence Committee (Chair)',
      'Senate Finance Committee',
      'Senate Banking Committee',
    ],
    upcomingElection: 'November 2026',
    contactInfo: {
      phone: '(202) 555-0198',
      email: 'senator.warner@senate.gov',
      office: '703 Hart Senate Office Building, Washington, DC 20510',
    },
  },
  {
    id: 'sen-tim-kaine',
    title: 'U.S. Senator',
    name: 'Tim Kaine',
    party: 'Democrat',
    district: 'Virginia',
    votingRecord: [
      { bill: 'S 234 - Cybersecurity Enhancement Act', vote: 'Yea', date: 'Feb 2026' },
      { bill: 'S 567 - Rural Healthcare Access', vote: 'Yea', date: 'Jan 2026' },
      { bill: 'S 891 - Tax Reform Package', vote: 'Yea', date: 'Jan 2026' },
      { bill: 'S 123 - Education Opportunity Act', vote: 'Yea', date: 'Dec 2025' },
      { bill: 'S 678 - Defense Authorization', vote: 'Yea', date: 'Dec 2025' },
    ],
    campaignFinance: {
      raised: '$2,890,000',
      spent: '$1,750,000',
      cashOnHand: '$1,140,000',
      topDonors: ['Labor Unions', 'Education Sector', 'Individual Contributions'],
    },
    committees: [
      'Senate Armed Services Committee',
      'Senate Foreign Relations Committee',
      'Senate Health, Education, Labor, and Pensions Committee',
    ],
    upcomingElection: 'November 2030',
    contactInfo: {
      phone: '(202) 555-0176',
      email: 'senator.kaine@senate.gov',
      office: '231 Russell Senate Office Building, Washington, DC 20510',
    },
  },
  {
    id: 'gov-glenn-youngkin',
    title: 'Governor',
    name: 'Glenn Youngkin',
    party: 'Republican',
    district: 'Virginia',
    votingRecord: [
      { bill: 'Executive Order 24 - Education Standards', vote: 'Signed', date: 'Feb 2026' },
      { bill: 'HB 100 - State Budget Amendment', vote: 'Signed', date: 'Jan 2026' },
      { bill: 'SB 45 - Environmental Regulations', vote: 'Vetoed', date: 'Jan 2026' },
      { bill: 'HB 200 - Tax Relief Package', vote: 'Signed', date: 'Dec 2025' },
      { bill: 'SB 89 - Public Safety Enhancement', vote: 'Signed', date: 'Dec 2025' },
    ],
    campaignFinance: {
      raised: '$5,200,000',
      spent: '$4,100,000',
      cashOnHand: '$1,100,000',
      topDonors: ['Business Leaders', 'PACs', 'Individual Contributions'],
    },
    committees: [],
    upcomingElection: 'November 2025 (Term limited)',
    contactInfo: {
      phone: '(804) 555-0100',
      email: 'governor@virginia.gov',
      office: 'Patrick Henry Building, 1111 E Broad St, Richmond, VA 23219',
    },
  },
];

// Sample ballot data
export const sampleBallot = {
  electionDate: 'November 3, 2026',
  electionName: '2026 General Election',
  location: 'Floyd County, Virginia',
  races: [
    {
      office: 'U.S. Senator',
      candidates: [
        { name: 'Mark Warner', party: 'Democrat', incumbent: true },
        { name: 'Jane Smith', party: 'Republican', incumbent: false },
        { name: 'Alex Johnson', party: 'Libertarian', incumbent: false },
      ],
    },
    {
      office: 'U.S. Representative - 9th District',
      candidates: [
        { name: 'Morgan Griffith', party: 'Republican', incumbent: true },
        { name: 'David Chen', party: 'Democrat', incumbent: false },
      ],
    },
    {
      office: 'Floyd County Board of Supervisors - District 3',
      candidates: [
        { name: 'Robert Williams', party: 'Independent', incumbent: true },
        { name: 'Patricia Davis', party: 'Independent', incumbent: false },
      ],
    },
    {
      office: 'Floyd County School Board - At Large',
      candidates: [
        { name: 'Maria Gonzalez', party: 'Nonpartisan', incumbent: false },
        { name: 'James Thompson', party: 'Nonpartisan', incumbent: true },
        { name: 'Linda Park', party: 'Nonpartisan', incumbent: false },
      ],
    },
  ],
  measures: [
    {
      title: 'Ballot Question 1: School Bond Referendum',
      description: 'Shall Floyd County issue $12 million in bonds for school facility improvements?',
    },
    {
      title: 'Ballot Question 2: Parks and Recreation Bond',
      description: 'Shall the Town of Floyd issue $3.5 million in bonds for parks improvements?',
    },
  ],
};

// Feed Items
export const feedItems = [
  {
    id: 1,
    hubId: 'belmont-na',
    type: 'proposal',
    title: 'New proposal: Speed bump installation on Oak Street',
    preview: 'The traffic committee has submitted a proposal to install three speed bumps on Oak Street between Main and Elm to improve pedestrian safety near the elementary school.',
    fullContent: 'The traffic committee has submitted a proposal to install three speed bumps on Oak Street between Main and Elm to improve pedestrian safety near the elementary school. The proposal includes:\n\n• Three speed tables (raised crosswalks) at key pedestrian crossing points\n• Updated signage and road markings\n• Solar-powered flashing beacons at the school crossing\n\nEstimated cost: $45,000 from the neighborhood safety fund. Public comment period is open until February 15th.',
    author: 'Traffic Committee Chair Sarah Mitchell',
    timestamp: '1 hour ago',
    tags: ['proposal', 'traffic', 'safety'],
    isRead: false,
  },
  {
    id: 2,
    hubId: 'floyd-rcv',
    type: 'action',
    title: 'Action needed: Sign petition to get RCV on 2027 ballot',
    preview: 'We need 2,500 more signatures by March 1st to qualify ranked choice voting for the 2027 municipal ballot. Sign and share today!',
    fullContent: 'We need 2,500 more signatures by March 1st to qualify ranked choice voting for the 2027 municipal ballot.\n\nCurrent signature count: 4,732 of 7,500 required\n\nYou can help by:\n1. Signing the petition online or at local collection points\n2. Sharing with friends and neighbors\n3. Volunteering to collect signatures at community events\n\nRanked choice voting gives voters more voice and reduces negative campaigning. Join the movement for better elections!',
    author: 'Campaign Director Tom Nguyen',
    timestamp: '2 hours ago',
    tags: ['action', 'petition', 'RCV'],
    isRead: false,
  },
  {
    id: 3,
    hubId: 'floyd-county',
    type: 'document',
    title: 'New document published: 2026 Groundwater Study results',
    preview: 'The county has released the comprehensive groundwater quality assessment. Key findings include improved nitrate levels in the eastern aquifer.',
    fullContent: 'The Floyd County Environmental Services Department has released the 2026 Groundwater Quality Assessment.\n\nKey Findings:\n• Eastern aquifer nitrate levels decreased 15% from 2024 baseline\n• Western wells show stable mineral content within safe limits\n• Two monitoring stations flagged for additional testing (routine follow-up)\n• Recommendations for continued agricultural runoff mitigation\n\nThe full 87-page report is available for download. A public presentation will be held February 8th at the County Administration Building.',
    author: 'Environmental Services Director Dr. Patricia Wells',
    timestamp: '3 hours ago',
    tags: ['document', 'environment', 'water'],
    isRead: false,
  },
  {
    id: 4,
    hubId: 'belmont-na',
    type: 'meeting',
    title: 'Community meeting scheduled: Park renovation plans - Thursday 7pm',
    preview: 'Join us Thursday at 7pm at the community center to review and provide input on the proposed Belmont Park renovation designs.',
    fullContent: 'Community Meeting: Belmont Park Renovation\n\nDate: Thursday, January 30th\nTime: 7:00 PM - 8:30 PM\nLocation: Belmont Community Center, Room A\n\nAgenda:\n• Presentation of three design concepts from landscape architect\n• Community Q&A and feedback session\n• Voting on preferred design elements\n• Timeline and budget discussion\n\nLight refreshments will be served. Childcare available upon request (RSVP by Tuesday).',
    author: 'Parks Committee Lead Jennifer Park',
    timestamp: '4 hours ago',
    tags: ['meeting', 'parks', 'community'],
    isRead: false,
  },
  {
    id: 5,
    hubId: 'floyd-schools',
    type: 'meeting',
    title: 'Meeting tonight: School calendar discussion 7pm',
    preview: 'The school board will discuss proposed changes to the 2026-2027 academic calendar, including potential start date adjustments.',
    fullContent: 'School Board Meeting Tonight\n\nDate: January 29th, 2026\nTime: 7:00 PM\nLocation: Floyd High School Auditorium (also live-streamed)\n\nMain Agenda Item: 2026-2027 Academic Calendar\n\nProposed changes under consideration:\n• Moving start date from August 20 to August 27\n• Adding two additional professional development days\n• Aligning spring break with state university schedule\n• Extended Thanksgiving break option\n\nPublic comment period available. Sign up at the door or online before 6pm.',
    author: 'School Board Chair Maria Rodriguez',
    timestamp: '5 hours ago',
    tags: ['meeting', 'calendar', 'education'],
    isRead: true,
  },
  {
    id: 6,
    hubId: 'floyd-county',
    type: 'vote',
    title: 'Upcoming vote: Rural water infrastructure funding',
    preview: 'The Board of Supervisors will vote Tuesday on a $3.2M bond for rural water infrastructure improvements serving 1,200 households.',
    fullContent: 'Board of Supervisors Vote\n\nDate: Tuesday, February 4th\nItem: Rural Water Infrastructure Bond Measure\n\nProposal Details:\n• $3.2 million bond issuance\n• Upgrades to 15 miles of aging water mains\n• New water treatment capacity for eastern rural areas\n• Serves approximately 1,200 households currently on wells or cisterns\n• Projected property tax impact: $23/year per $100,000 assessed value\n\nPublic hearing completed January 21st. Written comments accepted until 5pm Monday.',
    author: 'County Administrator James Park',
    timestamp: '6 hours ago',
    tags: ['vote', 'infrastructure', 'water'],
    isRead: false,
  },
  {
    id: 7,
    hubId: 'virginia-state',
    type: 'legislation',
    title: 'Bill introduced: HB 234 - Education funding increase',
    preview: 'Delegate Morrison introduced House Bill 234, proposing a 4% increase in state education funding with emphasis on rural school districts.',
    fullContent: 'Virginia House Bill 234: Education Equity Funding Act\n\nSponsored by: Delegate Amy Morrison (District 42)\nCo-sponsors: 12 delegates\n\nSummary:\n• 4% increase in state education funding ($340M total)\n• New formula weighting for rural and high-poverty districts\n• Technology infrastructure grants for broadband-challenged schools\n• Teacher retention bonuses for shortage areas\n\nStatus: Referred to House Education Committee\nNext action: Committee hearing February 12th\n\nBased on your location, this bill would increase Floyd County school funding by approximately $1.8M annually.',
    author: 'Virginia Legislative Tracking',
    timestamp: 'Yesterday',
    tags: ['legislation', 'education', 'funding'],
    isRead: true,
  },
  {
    id: 8,
    hubId: 'floyd-town',
    type: 'vote',
    title: 'Vote scheduled: Downtown parking ordinance revision',
    preview: 'Town Council will vote on updated downtown parking regulations including new 2-hour zones and resident permit options.',
    fullContent: 'Town Council Vote: Downtown Parking Ordinance\n\nMeeting: February 6th, 6:30 PM\nLocation: Town Hall Council Chambers\n\nProposed Changes:\n• Convert 4 blocks of unlimited parking to 2-hour limit (8am-6pm weekdays)\n• Create new resident parking permit zone ($50/year)\n• Add 30 new spaces in municipal lot expansion\n• Install smart meters with mobile payment option\n• Free parking Sundays and holidays\n\nPublic comment: 3 minutes per speaker, sign up begins 6pm.',
    author: 'Town Manager Linda Chen',
    timestamp: 'Yesterday',
    tags: ['vote', 'parking', 'downtown'],
    isRead: false,
  },
  {
    id: 9,
    hubId: 'belmont-na',
    type: 'poll',
    title: 'Poll closing soon: Preferred playground equipment',
    preview: 'Cast your vote by Friday on the new playground equipment options. Current leader: nature-themed climbing structure.',
    fullContent: 'Belmont Park Playground Equipment Poll\n\nDeadline: Friday, January 31st at 5pm\n\nCurrent Results (847 votes):\n\nNature-themed climbing structure: 42%\nTraditional playground set: 31%\nAdventure/obstacle course: 27%\n\nThis non-binding poll will inform the Parks Committee recommendation. Final decision will be made at the February community meeting.\n\nAll Belmont neighborhood residents eligible to vote (one vote per household).',
    author: 'Parks Committee',
    timestamp: 'Yesterday',
    tags: ['poll', 'parks', 'playground'],
    isRead: true,
  },
  {
    id: 10,
    hubId: 'floyd-rcv',
    type: 'event',
    title: 'Town hall scheduled: Learn about ranked choice voting - Jan 30',
    preview: 'Join us for an informational town hall on how ranked choice voting works and what it could mean for Floyd elections.',
    fullContent: 'Community Town Hall: Understanding Ranked Choice Voting\n\nDate: Thursday, January 30th\nTime: 6:30 PM - 8:00 PM\nLocation: Floyd Public Library, Meeting Room B\n\nAgenda:\n• How RCV works (with interactive demonstration)\n• Benefits and considerations\n• Q&A with election experts\n• How to get involved in the campaign\n\nFree and open to all. Light refreshments provided.',
    author: 'Floyd RCV Initiative',
    timestamp: '2 days ago',
    tags: ['event', 'education', 'RCV'],
    isRead: true,
  },
  {
    id: 11,
    hubId: 'floyd-county',
    type: 'comment',
    title: 'Comment period open: Proposed land use ordinance changes',
    preview: 'The county is accepting public comments on proposed updates to the land use ordinance affecting rural residential zoning.',
    fullContent: 'Public Comment Period: Land Use Ordinance Update\n\nDeadline: February 28th, 2026\n\nProposed Changes:\n• Update minimum lot sizes for rural residential (R-2) zones\n• New provisions for accessory dwelling units (ADUs)\n• Streamlined permitting for agricultural structures\n• Updated setback requirements for solar installations\n• New agritourism use category',
    author: 'Planning Department',
    timestamp: '2 days ago',
    tags: ['comment', 'zoning', 'land use'],
    isRead: false,
  },
  {
    id: 12,
    hubId: 'virginia-state',
    type: 'vote-result',
    title: 'Your senator voted: SB 156 passed committee',
    preview: 'Senator Warner voted YES on SB 156 (Transportation Infrastructure Bond) which passed the Senate Transportation Committee 8-5.',
    fullContent: 'Legislative Vote Alert\n\nBill: SB 156 - Transportation Infrastructure Bond\nCommittee: Senate Transportation\nResult: PASSED 8-5\n\nYour Senator\'s Vote: Senator Mark Warner - YES\n\nBill Summary: Authorizes $500M in bonds for state transportation infrastructure including:\n• Bridge repairs and replacements\n• Rural road improvements\n• Public transit expansion in underserved areas\n\nNext Step: Full Senate floor vote expected February 10th',
    author: 'Virginia Legislative Tracking',
    timestamp: '2 days ago',
    tags: ['vote', 'transportation', 'legislature'],
    isRead: true,
  },
  {
    id: 13,
    hubId: 'floyd-schools',
    type: 'poll',
    title: 'Poll open: Preferred start time for high school',
    preview: 'The school board is gathering input on potential changes to Floyd High School start time. Current options: 7:30am, 8:00am, or 8:30am.',
    fullContent: 'Floyd County Schools Parent/Student Survey\n\nTopic: High School Start Time\n\nCurrent start time: 7:25 AM\nProposed options:\n• 7:30 AM (minimal change)\n• 8:00 AM (30 minute delay)\n• 8:30 AM (1 hour delay, requires bus schedule changes)',
    author: 'Superintendent Office',
    timestamp: '3 days ago',
    tags: ['poll', 'education', 'scheduling'],
    isRead: false,
  },
  {
    id: 14,
    hubId: 'floyd-town',
    type: 'hearing',
    title: 'Public hearing: Zoning variance request - February 1',
    preview: 'The Planning Commission will hold a public hearing on a zoning variance request for mixed-use development at 450 Commerce Street.',
    fullContent: 'Public Hearing Notice\n\nDate: Saturday, February 1st\nTime: 10:00 AM\nLocation: Town Hall, Council Chambers\n\nCase #2026-ZV-003: Zoning Variance Request\n\nApplicant: Commerce Street Development LLC\nLocation: 450 Commerce Street',
    author: 'Planning Commission',
    timestamp: '3 days ago',
    tags: ['hearing', 'zoning', 'development'],
    isRead: true,
  },
  {
    id: 15,
    hubId: 'floyd-county',
    type: 'minutes',
    title: 'Meeting minutes posted: January 15th Board meeting',
    preview: 'Minutes from the January 15th Board of Supervisors meeting are now available, including votes on the emergency services budget amendment.',
    fullContent: 'Board of Supervisors Meeting Minutes\nJanuary 15, 2026\n\nKey Actions Taken:\n\n1. Emergency Services Budget Amendment - APPROVED (5-0)\n2. Road Maintenance Contract Extension - APPROVED (4-1)\n3. Tourism Board Appointments - APPROVED (5-0)\n4. Broadband Expansion Grant Application - APPROVED (5-0)\n\nNext Meeting: February 5th, 2026 at 7:00 PM',
    author: 'Clerk of the Board',
    timestamp: '4 days ago',
    tags: ['minutes', 'official', 'record'],
    isRead: true,
  },
  {
    id: 16,
    hubId: 'floyd-schools',
    type: 'proposal',
    title: 'New policy proposed: Cell phone use guidelines',
    preview: 'The school board has released draft guidelines for student cell phone use during school hours. Public comment period now open.',
    fullContent: 'Draft Policy: Student Cell Phone Use Guidelines\n\nProposed by: Student Affairs Committee\nPublic Comment Period: Through February 10th\n\nKey Provisions:\n• Phones must be silenced and stored during instructional time\n• Allowed use during passing periods and before/after school\n• Teachers may permit educational use at their discretion',
    author: 'Student Affairs Committee Chair Dr. Michael Torres',
    timestamp: '4 days ago',
    tags: ['policy', 'education', 'technology'],
    isRead: false,
  },
  {
    id: 17,
    hubId: 'virginia-state',
    type: 'update',
    title: 'Session update: 15 bills related to your interests',
    preview: 'Based on your followed topics, 15 new bills have been introduced in the current legislative session that may interest you.',
    fullContent: 'Virginia 2026 Legislative Session Update\n\nBased on your interests, we\'re tracking new bills in Education, Environment, and Local Government categories.',
    author: 'Virginia Legislative Tracking',
    timestamp: '5 days ago',
    tags: ['legislation', 'session', 'tracking'],
    isRead: true,
  },
  {
    id: 18,
    hubId: 'floyd-rcv',
    type: 'update',
    title: 'Update: 15 Virginia legislators now endorse RCV',
    preview: 'Our coalition-building efforts continue to gain momentum with three new legislative endorsements this week.',
    fullContent: 'Ranked Choice Voting Legislative Support Growing\n\nNew Endorsements This Week:\n• Delegate Patricia Morrison (D-42)\n• Delegate James Chen (R-67)\n• Senator Barbara Williams (D-23)\n\nTotal Legislative Supporters: 15 (Bipartisan)',
    author: 'Floyd RCV Initiative',
    timestamp: '5 days ago',
    tags: ['update', 'endorsement', 'RCV'],
    isRead: true,
  },
  {
    id: 19,
    hubId: 'floyd-town',
    type: 'document',
    title: 'Budget released: FY2027 town budget proposal',
    preview: 'The Town Manager has released the proposed FY2027 budget totaling $12.4M. Public hearings scheduled for February.',
    fullContent: 'Town of Floyd FY2027 Proposed Budget\n\nTotal Budget: $12.4 million (+3.2% from FY2026)\n\nNo property tax increase proposed.\nBudget hearings: Feb 13 and Feb 20 at 6:30 PM',
    author: 'Town Manager Linda Chen',
    timestamp: '1 week ago',
    tags: ['budget', 'finance', 'official'],
    isRead: true,
  },
  {
    id: 20,
    hubId: 'floyd-environment',
    type: 'action',
    title: 'Volunteer signup: Spring creek cleanup - March 15',
    preview: 'Help restore Little River with our annual spring cleanup event. All ages welcome, supplies provided.',
    fullContent: 'Annual Spring Creek Cleanup\n\nDate: Saturday, March 15th\nTime: 9:00 AM - 1:00 PM\nMeeting Point: Little River Park Pavilion\n\nSign up at floydenv.org/cleanup. Last year 87 volunteers removed over 2 tons of debris!',
    author: 'Floyd Environment Coalition',
    timestamp: '1 day ago',
    tags: ['action', 'environment', 'volunteer'],
    isRead: false,
  },
  {
    id: 21,
    hubId: 'floyd-civic-league',
    type: 'event',
    title: 'Civic League monthly meeting - February 5',
    preview: 'Guest speaker: County Administrator on the 2026 broadband expansion plan. All residents welcome.',
    fullContent: 'Floyd Civic League Monthly Meeting\n\nDate: Wednesday, February 5th\nTime: 7:00 PM\nLocation: Floyd Community Center\n\nFeatured Speaker: County Administrator James Park\nTopic: 2026 Broadband Expansion Plan\n\nAll Floyd County residents welcome.',
    author: 'Floyd Civic League President',
    timestamp: '2 days ago',
    tags: ['event', 'community', 'broadband'],
    isRead: false,
  },
];

// Civic Tools for the tools section
export const civicTools = [
  {
    id: 'contact-reps',
    name: 'Contact Representatives',
    headline: 'Send Message to Representatives',
    description: 'Send a message to your elected representatives about issues that matter to you.',
    buttonText: 'Contact Representatives',
    icon: 'message',
    page: 'contact-reps',
  },
  {
    id: 'advisory-voting',
    name: 'Advisory Voting',
    headline: 'Advisory Voting',
    description: "Tell your representatives how you would like them to vote on upcoming legislation.",
    buttonText: 'Open Advisory Voting',
    icon: 'vote',
    page: 'advisory-voting',
  },
  {
    id: 'discover',
    name: 'Discover Opportunities',
    headline: 'Discover Civic Opportunities',
    description: 'Discover civic actions and participation opportunities in your community.',
    buttonText: 'Explore Opportunities',
    icon: 'compass',
    page: 'discover',
  },
];

// Helper to get hub by ID
export const getHubById = (hubId) => civicHubs.find(hub => hub.id === hubId);

// Helper to get feed items by hub
export const getFeedItemsByHub = (hubId) => feedItems.filter(item => item.hubId === hubId);

// Helper to get unread count
export const getTotalUnreadCount = () => feedItems.filter(item => !item.isRead).length;

// Helper to get all unread items
export const getUnreadItems = () => feedItems.filter(item => !item.isRead);

// Helper to get hubs by type
export const getHubsByType = (type) => civicHubs.filter(hub => hub.type === type);

// Helper to get representative by ID
export const getRepresentativeById = (id) => myRepresentatives.find(rep => rep.id === id);

// Hub page data — static content for rich hub pages
export const hubPageData = {
  // JURISDICTION HUBS
  'floyd-county': {
    description: 'Official civic hub for Floyd County government. Follow proposals, votes, documents, and public meetings from the Board of Supervisors and county departments.',
    upcomingMeetings: [
      { title: 'Board of Supervisors Meeting', date: 'Feb 5, 2026', time: '7:00 PM', location: 'County Admin Building' },
      { title: 'Planning Commission', date: 'Feb 12, 2026', time: '6:30 PM', location: 'County Admin Building' },
      { title: 'Budget Work Session', date: 'Feb 19, 2026', time: '5:00 PM', location: 'County Admin Building' },
    ],
    officials: [
      { name: 'Linda Mitchell', role: 'Board Chair', district: 'District 1' },
      { name: 'Robert Williams', role: 'Vice Chair', district: 'District 3' },
      { name: 'David Thompson', role: 'Supervisor', district: 'District 2' },
      { name: 'Patricia Nguyen', role: 'Supervisor', district: 'District 4' },
      { name: 'James Park', role: 'County Administrator', district: '' },
    ],
    keyDocuments: [
      { title: 'FY2026 Adopted Budget', type: 'PDF', date: 'Jul 2025' },
      { title: 'Comprehensive Plan 2040', type: 'PDF', date: '2024' },
      { title: '2026 Groundwater Study', type: 'PDF', date: 'Jan 2026' },
      { title: 'Land Use Ordinance (Draft)', type: 'PDF', date: 'Jan 2026' },
    ],
    contactInfo: {
      phone: '(540) 745-9300',
      email: 'info@floydcountyva.gov',
      address: '100 E Main St, Floyd, VA 24091',
      officeHours: 'Mon–Fri 8:30 AM – 5:00 PM',
      website: 'floydcountyva.gov',
    },
  },
  'floyd-town': {
    description: 'Official civic hub for the Town of Floyd. Stay informed about town council actions, zoning decisions, budgets, and community development.',
    upcomingMeetings: [
      { title: 'Town Council Meeting', date: 'Feb 6, 2026', time: '6:30 PM', location: 'Town Hall Council Chambers' },
      { title: 'Planning Commission Hearing', date: 'Feb 1, 2026', time: '10:00 AM', location: 'Town Hall' },
      { title: 'Budget Public Hearing', date: 'Feb 13, 2026', time: '6:30 PM', location: 'Town Hall' },
    ],
    officials: [
      { name: 'Mike Johnson', role: 'Mayor', district: '' },
      { name: 'Karen West', role: 'Vice Mayor', district: '' },
      { name: 'Tom Bradley', role: 'Council Member', district: 'Ward 1' },
      { name: 'Susan Chen', role: 'Council Member', district: 'Ward 2' },
      { name: 'Linda Chen', role: 'Town Manager', district: '' },
    ],
    keyDocuments: [
      { title: 'FY2027 Proposed Budget', type: 'PDF', date: 'Jan 2026' },
      { title: 'Downtown Master Plan', type: 'PDF', date: '2024' },
      { title: 'Parking Ordinance (Draft)', type: 'PDF', date: 'Jan 2026' },
    ],
    contactInfo: {
      phone: '(540) 745-2200',
      email: 'clerk@townoffloyd.org',
      address: '238 Locust St, Floyd, VA 24091',
      officeHours: 'Mon–Fri 9:00 AM – 5:00 PM',
      website: 'townoffloyd.org',
    },
  },
  'floyd-schools': {
    description: 'Official civic hub for the Floyd County School Board. Track school policies, budget decisions, calendar changes, and educational initiatives.',
    upcomingMeetings: [
      { title: 'School Board Meeting', date: 'Feb 10, 2026', time: '7:00 PM', location: 'Floyd High School Auditorium' },
      { title: 'Curriculum Committee', date: 'Feb 18, 2026', time: '4:00 PM', location: 'School Admin Office' },
    ],
    officials: [
      { name: 'Maria Rodriguez', role: 'Board Chair', district: '' },
      { name: 'James Thompson', role: 'Vice Chair', district: '' },
      { name: 'Dr. Michael Torres', role: 'Superintendent', district: '' },
      { name: 'Linda Park', role: 'Board Member', district: '' },
      { name: 'Maria Gonzalez', role: 'Board Member', district: '' },
    ],
    keyDocuments: [
      { title: '2026-27 Academic Calendar (Draft)', type: 'PDF', date: 'Jan 2026' },
      { title: 'Cell Phone Policy (Draft)', type: 'PDF', date: 'Jan 2026' },
      { title: 'FY2026 School Budget', type: 'PDF', date: 'Jul 2025' },
      { title: 'Strategic Plan 2025-2030', type: 'PDF', date: '2025' },
    ],
    contactInfo: {
      phone: '(540) 745-9400',
      email: 'schoolboard@floyd.k12.va.us',
      address: '140 Harris Hart Rd, Floyd, VA 24091',
      officeHours: 'Mon–Fri 8:00 AM – 4:30 PM',
      website: 'floyd.k12.va.us',
    },
  },
  'virginia-state': {
    description: 'Track Virginia state legislation, committee votes, and executive actions relevant to Floyd County residents. Personalized alerts for bills matching your interests.',
    upcomingMeetings: [
      { title: 'House Education Committee', date: 'Feb 12, 2026', time: '10:00 AM', location: 'State Capitol, Richmond' },
      { title: 'Senate Floor Session', date: 'Feb 10, 2026', time: '12:00 PM', location: 'State Capitol, Richmond' },
    ],
    officials: [
      { name: 'Morgan Griffith', role: 'U.S. Representative', district: '9th District' },
      { name: 'Mark Warner', role: 'U.S. Senator', district: 'Virginia' },
      { name: 'Tim Kaine', role: 'U.S. Senator', district: 'Virginia' },
      { name: 'Glenn Youngkin', role: 'Governor', district: 'Virginia' },
    ],
    keyDocuments: [
      { title: 'HB 234 – Education Funding', type: 'Bill', date: 'Jan 2026' },
      { title: 'SB 156 – Transportation Bond', type: 'Bill', date: 'Jan 2026' },
      { title: '2026 Session Calendar', type: 'PDF', date: '2026' },
    ],
    contactInfo: {
      phone: '(804) 698-1500',
      email: 'info@virginia.gov',
      address: '1000 Bank St, Richmond, VA 23219',
      officeHours: 'Session: Jan–Mar 2026',
      website: 'virginiageneralassembly.gov',
    },
  },

  // ISSUE HUBS
  'floyd-rcv': {
    description: 'Community-driven initiative to bring ranked choice voting to Floyd County elections. Join the campaign, sign petitions, and attend events.',
    campaign: {
      goal: 'Get RCV on 2027 municipal ballot',
      metric: 'Signatures collected',
      current: 4732,
      target: 7500,
      deadline: 'March 1, 2026',
    },
    milestones: [
      { label: 'Initiative filed with county', date: 'Sep 2025', completed: true },
      { label: '1,000 signatures collected', date: 'Oct 2025', completed: true },
      { label: '2,500 signatures collected', date: 'Nov 2025', completed: true },
      { label: '5,000 signatures collected', date: 'Feb 2026', completed: false },
      { label: '7,500 signatures — ballot qualified', date: 'Mar 2026', completed: false },
    ],
    actions: [
      { label: 'Sign the Petition', description: 'Add your name to qualify RCV for the ballot', primary: true },
      { label: 'Volunteer to Collect', description: 'Help gather signatures at community events' },
      { label: 'Spread the Word', description: 'Share information with friends and neighbors' },
    ],
    upcomingEvents: [
      { title: 'RCV Town Hall', date: 'Jan 30, 2026', time: '6:30 PM', location: 'Floyd Public Library' },
      { title: 'Signature Drive — Farmers Market', date: 'Feb 8, 2026', time: '9:00 AM', location: 'Floyd Farmers Market' },
      { title: 'RCV Info Session', date: 'Feb 15, 2026', time: '2:00 PM', location: 'Floyd Community Center' },
    ],
    supporters: { legislators: 15, organizations: 8, volunteers: 124 },
  },
  'floyd-environment': {
    description: 'Coalition of local organizations working on environmental conservation, water quality, and sustainable development in Floyd County.',
    campaign: {
      goal: '2026 Creek Cleanup Campaign',
      metric: 'Volunteers signed up',
      current: 52,
      target: 100,
      deadline: 'March 15, 2026',
    },
    milestones: [
      { label: 'Coalition founded', date: 'Mar 2023', completed: true },
      { label: 'First annual creek cleanup (87 volunteers)', date: 'Mar 2024', completed: true },
      { label: '2025 cleanup — 2.1 tons removed', date: 'Mar 2025', completed: true },
      { label: '2026 cleanup — 100 volunteer goal', date: 'Mar 2026', completed: false },
    ],
    actions: [
      { label: 'Sign Up for Creek Cleanup', description: 'March 15 at Little River Park', primary: true },
      { label: 'Report Water Quality Issue', description: 'Submit observations to our monitoring team' },
      { label: 'Join the Coalition', description: 'Become a member and stay informed' },
    ],
    upcomingEvents: [
      { title: 'Spring Creek Cleanup', date: 'Mar 15, 2026', time: '9:00 AM', location: 'Little River Park Pavilion' },
      { title: 'Water Quality Workshop', date: 'Feb 22, 2026', time: '10:00 AM', location: 'Floyd Library' },
    ],
    supporters: { organizations: 12, volunteers: 52, yearsActive: 3 },
  },

  // ORGANIZATION HUBS
  'belmont-na': {
    description: 'Your neighborhood hub for the Belmont community. Proposals, meetings, polls, and events for Belmont residents.',
    about: {
      mission: 'Building a stronger Belmont community through civic engagement, neighborhood improvement, and neighborly connections.',
      founded: '1987',
      memberCount: 342,
      households: 580,
      meetingSchedule: 'First Thursday of each month, 7:00 PM at Belmont Community Center',
    },
    leadership: [
      { name: 'Sarah Mitchell', role: 'President' },
      { name: 'James Chen', role: 'Vice President' },
      { name: 'Maria Rodriguez', role: 'Secretary' },
      { name: 'Jennifer Park', role: 'Parks Committee Chair' },
      { name: 'Tom Bradley', role: 'Traffic Committee Chair' },
    ],
    upcomingEvents: [
      { title: 'Park Renovation Community Meeting', date: 'Jan 30, 2026', time: '7:00 PM', location: 'Belmont Community Center' },
      { title: 'Monthly NA Meeting', date: 'Feb 6, 2026', time: '7:00 PM', location: 'Belmont Community Center' },
      { title: 'Neighborhood Spring Cleanup', date: 'Mar 22, 2026', time: '9:00 AM', location: 'Belmont Park' },
    ],
    joinCTA: {
      text: 'Join 342 neighbors building a stronger Belmont community. Members vote on proposals, attend meetings, and shape our neighborhood.',
      buttonText: 'Become a Member',
    },
  },
  'floyd-civic-league': {
    description: 'Floyd Civic League brings together residents to discuss community issues, hear from local leaders, and organize civic engagement activities.',
    about: {
      mission: 'Promoting informed civic participation and community dialogue across Floyd County through education, engagement, and collaboration.',
      founded: '1952',
      memberCount: 189,
      households: null,
      meetingSchedule: 'First Wednesday of each month, 7:00 PM at Floyd Community Center',
    },
    leadership: [
      { name: 'Robert Anderson', role: 'President' },
      { name: 'Dorothy Williams', role: 'Vice President' },
      { name: 'Frank Morrison', role: 'Treasurer' },
      { name: 'Helen Patel', role: 'Program Chair' },
    ],
    upcomingEvents: [
      { title: 'Monthly Meeting — Broadband Expansion', date: 'Feb 5, 2026', time: '7:00 PM', location: 'Floyd Community Center' },
      { title: 'Candidate Forum Planning', date: 'Feb 19, 2026', time: '6:00 PM', location: 'Floyd Library' },
      { title: 'Annual Civic Awards Dinner', date: 'Apr 12, 2026', time: '6:30 PM', location: 'Floyd Country Store' },
    ],
    joinCTA: {
      text: 'Join Floyd Civic League and help foster informed civic participation across our county. Open to all Floyd County residents.',
      buttonText: 'Join the League',
    },
  },
};
