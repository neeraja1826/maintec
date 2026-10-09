


/**
 * Maintec Advisory Platform - Unified Application Controller
 * Powered by MineSolutions.AI Engine
 * Maintec Financial Advisory Services Private Limited (CIN: U65991KA2008PTC047500)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================================
     1. DATA DEFINITIONS (Updated per Developer Handoff)
     ========================================================================= */

  // 4 Advisory Service Pillars
  const servicesData = [
    {
      id: 'finance-funding',
      badge: 'Pillar 01 • Capital & Banking',
      title: 'Finance & Capital Funding',
      headline: 'Fund-Raising Consultancy, Credit Planning & Lender Coordination',
      description: 'Fund-raising consultancy, credit planning, lender coordination, project reports and business financing support, drawing directly on leadership banking experience and over three decades of financial sector expertise.',
      accentColor: 'border-cyan-500/40 text-cyan-600',
      bgGlow: 'from-cyan-500/10 via-transparent to-transparent',
      iconSvg: `
        <svg viewBox="0 0 120 120" style="width: 100%; height: 100%;">
          <defs>
            <linearGradient id="finGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06B6D4"/>
              <stop offset="100%" stop-color="#0891B2"/>
            </linearGradient>
            <linearGradient id="finGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#67E8F9"/>
              <stop offset="100%" stop-color="#22D3EE"/>
            </linearGradient>
            <linearGradient id="finGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0E7490"/>
              <stop offset="100%" stop-color="#164E63"/>
            </linearGradient>
          </defs>
          <polygon points="60,20 100,40 60,60 20,40" fill="url(#finGrad2)"/>
          <polygon points="20,40 60,60 60,82 20,62" fill="url(#finGrad1)"/>
          <polygon points="60,60 100,40 100,62 60,82" fill="url(#finGrad3)"/>
          <polygon points="38,40 48,45 48,25 38,20" fill="#A5F3FC"/>
          <polygon points="48,45 58,40 58,20 48,25" fill="#06B6D4"/>
          <polygon points="55,50 65,55 65,22 55,17" fill="#CFFAFE"/>
          <polygon points="65,55 75,50 75,17 65,22" fill="#0891B2"/>
          <polygon points="72,60 82,65 82,18 72,13" fill="#E0F2FE"/>
          <polygon points="82,65 92,60 92,13 82,18" fill="#0284C7"/>
          <circle cx="60" cy="55" r="12" fill="#FFFFFF" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));"/>
          <text x="60" y="60" text-anchor="middle" fill="#0891B2" font-size="14" font-weight="800" font-family="sans-serif">₹</text>
        </svg>
      `,
      coreCapabilities: [
        'Fund-raising consultancy & capital planning for growing businesses',
        'Credit requirement assessment & loan structuring',
        'Lender coordination & institutional banking alignment',
        'Detailed project reports (DPR) & commercial feasibility',
        'Working capital advisory & cashflow structuring'
      ],
      deliverables: [
        'Comprehensive Bankable Project Reports (DPR)',
        'Credit Requirement & Debt Structuring Plans',
        'Lender Liaison Documentation & Coordination',
        'Capital Planning Roadmaps for Enterprise Scale'
      ],
      aiIntegration: 'MineSolutions.AI coordinates document preparation, tracks lender requirement checkpoints, and provides organized visibility for enterprise fund-raising mandates.',
      regulatoryCoverage: ['Banking & Credit Norms', 'Project Financing Standards', 'Institutional Lending Guidelines', 'Commercial Debt Structuring']
    },
    {
      id: 'business-advisory',
      badge: 'Pillar 02 • Strategy & Growth',
      title: 'Strategic Business Advisory',
      headline: 'Enterprise Development, Growth Planning & Project Structuring',
      description: 'Enterprise development, growth planning, project structuring, institutional coordination and practical support for entrepreneurs seeking sustainable organizational scale.',
      accentColor: 'border-emerald-500/40 text-emerald-600',
      bgGlow: 'from-emerald-500/10 via-transparent to-transparent',
      iconSvg: `
        <svg viewBox="0 0 120 120" style="width: 100%; height: 100%;">
          <defs>
            <linearGradient id="advGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10B981"/>
              <stop offset="100%" stop-color="#059669"/>
            </linearGradient>
            <linearGradient id="advGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6EE7B7"/>
              <stop offset="100%" stop-color="#34D399"/>
            </linearGradient>
            <linearGradient id="advGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#047857"/>
              <stop offset="100%" stop-color="#064E3B"/>
            </linearGradient>
          </defs>
          <polygon points="60,18 102,38 60,60 18,38" fill="url(#advGrad2)"/>
          <polygon points="18,38 60,60 60,82 18,60" fill="url(#advGrad1)"/>
          <polygon points="60,60 102,38 102,60 60,82" fill="url(#advGrad3)"/>
          <polygon points="60,35 88,48 60,62 32,48" fill="#D1FAE5"/>
          <polygon points="32,48 60,62 60,74 32,60" fill="#10B981"/>
          <polygon points="60,62 88,48 88,60 60,74" fill="#047857"/>
          <circle cx="60" cy="50" r="13" fill="#FFFFFF" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));"/>
          <path d="M 60,42 L 63,48 L 69,50 L 63,52 L 60,58 L 57,52 L 51,50 L 57,48 Z" fill="#059669"/>
        </svg>
      `,
      coreCapabilities: [
        'Enterprise business model development & scale planning',
        'Strategic project structuring & operational roadmap design',
        'Institutional coordination & stakeholder facilitation',
        'Practical managerial guidance for founder-led businesses',
        'Process optimization & organizational workflow structuring'
      ],
      deliverables: [
        'Strategic Enterprise Growth Blueprints',
        'Project Structuring & Implementation Charters',
        'Institutional Stakeholder Engagement Maps',
        'Operational Execution Frameworks'
      ],
      aiIntegration: 'MineSolutions.AI structures operational workflows, centralizes assignment tracking, and ensures milestone transparency across enterprise initiatives.',
      regulatoryCoverage: ['Enterprise Governance', 'Commercial Project Frameworks', 'Institutional Operations', 'Strategic Management']
    },
    {
      id: 'circular-economy',
      badge: 'Pillar 03 • Impact & Sustainability',
      title: 'Circular Economy & Sustainability',
      headline: 'Rural & Urban Sustainability Initiatives & Enterprise Ecosystems',
      description: 'Project-development support for rural and urban circular-economy initiatives, entrepreneurial ecosystems, artisan collaboration and sustainable enterprise development in Andhra Pradesh and beyond.',
      accentColor: 'border-green-500/40 text-green-600',
      bgGlow: 'from-green-500/10 via-transparent to-transparent',
      iconSvg: `
        <svg viewBox="0 0 120 120" style="width: 100%; height: 100%;">
          <defs>
            <linearGradient id="circGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#059669"/>
              <stop offset="100%" stop-color="#047857"/>
            </linearGradient>
            <linearGradient id="circGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#34D399"/>
              <stop offset="100%" stop-color="#10B981"/>
            </linearGradient>
            <linearGradient id="circGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#064E3B"/>
              <stop offset="100%" stop-color="#022C22"/>
            </linearGradient>
          </defs>
          <polygon points="60,16 104,38 60,60 16,38" fill="url(#circGrad2)"/>
          <polygon points="16,38 60,60 60,84 16,62" fill="url(#circGrad1)"/>
          <polygon points="60,60 104,38 104,62 60,84" fill="url(#circGrad3)"/>
          <circle cx="60" cy="50" r="16" fill="#FFFFFF" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));"/>
          <path d="M 52,50 A 8,8 0 0,1 68,50 A 8,8 0 0,1 52,50" fill="none" stroke="#059669" stroke-width="2.5" stroke-dasharray="3 3"/>
          <path d="M 60,42 L 63,45 L 60,48 M 60,58 L 57,55 L 60,52" stroke="#059669" stroke-width="2" fill="none"/>
        </svg>
      `,
      coreCapabilities: [
        'Rural & urban circular-economy project conceptualization',
        'Artisan cluster collaboration & sustainable value-chain linkage',
        'Government department & institutional project alignment in Andhra Pradesh',
        'Sustainable enterprise development connecting ecology with commercial viability',
        'Ecosystem partnership building for grassroots innovators'
      ],
      deliverables: [
        'Circular Economy Feasibility & Design Briefs',
        'Artisan & Rural Cluster Development Roadmaps',
        'Institutional Project Proposals & MOUs',
        'Impact-Linked Sustainability Frameworks'
      ],
      aiIntegration: 'MineSolutions.AI provides milestone tracking for multi-stakeholder sustainability projects, cataloging field outputs and collaborative agreements.',
      regulatoryCoverage: ['Sustainable Development Goals', 'Circular Economy Frameworks', 'State Project Guidelines', 'Rural Enterprise Policy']
    },
    {
      id: 'tax-legal-coordination',
      badge: 'Pillar 04 • Regulated Compliance',
      title: 'Tax, Corporate & Legal Coordination',
      headline: 'Integrated Coordination via Authorized Independent Professionals',
      description: 'Integrated coordination of tax, GST, corporate compliance, legal documentation and other regulated requirements through appropriately qualified independent professionals or authorised firms.',
      accentColor: 'border-blue-500/40 text-blue-600',
      bgGlow: 'from-blue-500/10 via-transparent to-transparent',
      iconSvg: `
        <svg viewBox="0 0 120 120" style="width: 100%; height: 100%;">
          <defs>
            <linearGradient id="taxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3B82F6"/>
              <stop offset="100%" stop-color="#1D4ED8"/>
            </linearGradient>
            <linearGradient id="taxGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#93C5FD"/>
              <stop offset="100%" stop-color="#60A5FA"/>
            </linearGradient>
            <linearGradient id="taxGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E40AF"/>
              <stop offset="100%" stop-color="#172554"/>
            </linearGradient>
          </defs>
          <polygon points="60,15 105,37 60,60 15,37" fill="url(#taxGrad2)"/>
          <polygon points="15,37 60,60 60,78 15,55" fill="url(#taxGrad1)"/>
          <polygon points="60,60 105,37 105,55 60,78" fill="url(#taxGrad3)"/>
          <polygon points="60,40 100,60 60,80 20,60" fill="#DBEAFE"/>
          <polygon points="20,60 60,80 60,95 20,75" fill="#2563EB"/>
          <polygon points="60,80 100,60 100,75 60,95" fill="#1E3A8A"/>
          <circle cx="60" cy="50" r="14" fill="#FFFFFF" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));"/>
          <path d="M 54,47 L 66,47 M 60,43 L 60,57 M 55,54 L 65,54" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `,
      coreCapabilities: [
        'Coordinated tax planning & GST advisory via certified professionals',
        'Corporate secretarial & ROC filing coordination with authorised practitioners',
        'Commercial contract documentation & legal structuring facilitation',
        'Regulatory filing tracking & compliance calendar coordination',
        'Seamless interface between enterprise management and specialized counsel'
      ],
      deliverables: [
        'Coordinated Compliance Calendars & Review Packets',
        'Organized Documentation for Chartered Accountants / Legal Counsel',
        'Consolidated Filing Status Reports',
        'Corporate Record Management & Verification Trackers'
      ],
      aiIntegration: 'MineSolutions.AI organizes document repositories and statutory schedules, ensuring timely data availability for independent certified practitioners.',
      regulatoryCoverage: ['Companies Act Coordination', 'Income Tax & GST Interfaces', 'ROC Secretarial Timelines', 'Digital Data Compliance (DPDP)']
    }
  ];

  // 7-Stage Structured Methodology
  const methodologyStages = [
    {
      step: '01',
      name: 'Understand',
      subtitle: 'Business DNA Discovery',
      description: 'Understand the business first. Deep discovery into enterprise requirements, capital needs, commercial model, operational structure, and existing compliance posture.',
      deliverable: 'Diagnostic Overview & Advisory Scope Blueprint',
      aiAdvantage: 'Structured intake workflows & document collation on MineSolutions.AI.'
    },
    {
      step: '02',
      name: 'Analyse',
      subtitle: 'Financing & Project Diagnostic',
      description: 'Rigorous analysis connecting banking insight, fund-raising feasibility, sustainability alignment, and statutory coordination requirements.',
      deliverable: 'Comprehensive Financing & Structuring Feasibility Report',
      aiAdvantage: 'Scenario modeling & structured assignment dashboards.'
    },
    {
      step: '03',
      name: 'Structure',
      subtitle: 'Solution & Proposal Architecture',
      description: 'Formulating actionable proposals, project reports, lender teasers, or collaborative agreements suited to specific commercial and social objectives.',
      deliverable: 'Detailed Project Report (DPR) & Structuring Memorandum',
      aiAdvantage: 'Standardized document templates & collaborative review workflows.'
    },
    {
      step: '04',
      name: 'Coordinate',
      subtitle: 'Professional & Stakeholder Alignment',
      description: 'Harmonizing lender interactions, institutional relationships, and coordination with appropriately qualified independent legal/tax professionals.',
      deliverable: 'Integrated Stakeholder & Lender Coordination Roadmap',
      aiAdvantage: 'Unified communication streams & milestone status tracking.'
    },
    {
      step: '05',
      name: 'Execute',
      subtitle: 'Facilitation & Implementation',
      description: 'Hands-on project execution support, submission of reports to financing institutions, stakeholder engagement, and documentation follow-through.',
      deliverable: 'Executed Project Mandates & Formal Submissions',
      aiAdvantage: 'Digital audit trail & milestone delivery tracking.'
    },
    {
      step: '06',
      name: 'Monitor',
      subtitle: 'Continuous Operational Oversight',
      description: 'Ongoing tracking of project milestones, loan servicing checkpoints, reporting obligations, and emerging enterprise requirements.',
      deliverable: 'Milestone Progress Tracker & Operational Review',
      aiAdvantage: 'Preemptive schedule alerts & structured digital document storage.'
    },
    {
      step: '07',
      name: 'Review',
      subtitle: 'Growth & Strategy Evolution',
      description: 'Periodic strategic review assessing capital utilization, project milestones, sustainability outcomes, and future enterprise expansion paths.',
      deliverable: 'Strategic Advisory Review & Next-Stage Roadmap',
      aiAdvantage: 'Continuous historical archiving on MineSolutions.AI platform.'
    }
  ];

  // 5 Focus Constituencies (Updated per Developer Handoff Table)
  const industriesData = [
    {
      id: 'msmes',
      name: 'MSMEs & Growing Enterprises',
      tagline: 'Financing, Project Advisory & Expansion Support',
      iconSvg: `
        <svg viewBox="0 0 80 80" style="width: 3.5rem; height: 3.5rem;">
          <polygon points="40,10 70,25 40,40 10,25" fill="#93C5FD"/>
          <polygon points="10,25 40,40 40,55 10,40" fill="#3B82F6"/>
          <polygon points="40,40 70,25 70,40 40,55" fill="#1D4ED8"/>
          <circle cx="40" cy="30" r="7" fill="#FFFFFF"/>
        </svg>
      `,
      description: 'Connecting growing businesses with practical understanding of lending, credit requirements, and project advisory for their next stage of enterprise scale.',
      keyServices: ['Fund-raising Consultancy', 'Working Capital Advisory', 'Bankable Project Reports'],
      caseMetric: 'Supporting emerging enterprises with comprehensive debt planning.'
    },
    {
      id: 'rural-artisans',
      name: 'Rural Entrepreneurs & Artisans',
      tagline: 'Enterprise Development & Value-Chain Collaboration',
      iconSvg: `
        <svg viewBox="0 0 80 80" style="width: 3.5rem; height: 3.5rem;">
          <polygon points="40,12 68,26 40,40 12,26" fill="#A7F3D0"/>
          <polygon points="12,26 40,40 40,56 12,42" fill="#10B981"/>
          <polygon points="40,40 68,26 68,42 40,56" fill="#047857"/>
          <path d="M 40,22 L 40,34 M 34,28 L 46,28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `,
      description: 'Fostering grassroots entrepreneurship, artisan cluster enablement, and sustainable enterprise development in Andhra Pradesh and rural corridors.',
      keyServices: ['Artisan Cluster Support', 'Value-Chain Linkages', 'Grassroots Business Modeling'],
      caseMetric: 'Connecting traditional artisan networks with viable commercial channels.'
    },
    {
      id: 'circular-projects',
      name: 'Circular-Economy Projects',
      tagline: 'Urban & Rural Sustainability Initiatives',
      iconSvg: `
        <svg viewBox="0 0 80 80" style="width: 3.5rem; height: 3.5rem;">
          <polygon points="40,12 68,26 40,40 12,26" fill="#67E8F9"/>
          <polygon points="12,26 40,40 40,58 12,44" fill="#06B6D4"/>
          <polygon points="40,40 68,26 68,44 40,58" fill="#0891B2"/>
          <polygon points="40,25 50,30 40,35 30,30" fill="#FFFFFF"/>
        </svg>
      `,
      description: 'Advancing circular-economy initiatives in rural and urban Andhra Pradesh, bridging ecological sustainability with viable commercial development.',
      keyServices: ['Circular Project Feasibility', 'Sustainability Structuring', 'Ecosystem Partnering'],
      caseMetric: 'Designing sustainable enterprise models for circular resource flows.'
    },
    {
      id: 'manufacturing-infra',
      name: 'Manufacturing & Infrastructure',
      tagline: 'Capital Requirements & Commercial Coordination',
      iconSvg: `
        <svg viewBox="0 0 80 80" style="width: 3.5rem; height: 3.5rem;">
          <polygon points="40,10 70,25 40,40 10,25" fill="#DDD6FE"/>
          <polygon points="10,25 40,40 40,60 10,45" fill="#8B5CF6"/>
          <polygon points="40,40 70,25 70,45 40,60" fill="#6D28D9"/>
          <polygon points="40,20 52,26 40,32 28,26" fill="#FFFFFF"/>
        </svg>
      `,
      description: 'Structuring capital requirements, lender coordination, and project advisory for manufacturing units, industrial expansions, and infrastructure projects.',
      keyServices: ['Capex Credit Structuring', 'Machinery & Plant Reports', 'Lender Coordination'],
      caseMetric: 'Facilitating commercial coordination for industrial capital programs.'
    },
    {
      id: 'institutions-gov',
      name: 'Institutions & Govt Projects',
      tagline: 'Project Coordination & Stakeholder Collaboration',
      iconSvg: `
        <svg viewBox="0 0 80 80" style="width: 3.5rem; height: 3.5rem;">
          <polygon points="40,12 68,26 40,40 12,26" fill="#BAE6FD"/>
          <polygon points="12,26 40,40 40,56 12,42" fill="#0284C7"/>
          <polygon points="40,40 68,26 68,42 40,56" fill="#0369A1"/>
          <circle cx="40" cy="28" r="6" fill="#FFFFFF"/>
        </svg>
      `,
      description: 'Bridging enterprise initiatives with government departments, institutions, and community stakeholders for impactful project delivery.',
      keyServices: ['Institutional Alignment', 'Multi-Stakeholder Coordination', 'Public-Private Project Roadmaps'],
      caseMetric: 'Advancing multi-agency collaborative programs across Andhra Pradesh.'
    }
  ];

  // Verified Client & Stakeholder Testimonials
  const reviewsData = [
    {
      id: '1',
      category: 'Finance & Banking',
      quote: 'Maintec’s banking leadership brought practical understanding to our fund-raising mandate. They bridged the gap with lending institutions and structured a clear, bankable project report that accelerated our financing process.',
      author: 'K. S. Narayanan',
      designation: 'Managing Director',
      company: 'Deccan Precision Engineering',
      rating: 5,
      highlight: 'Lender coordination executed with complete clarity'
    },
    {
      id: '2',
      category: 'Enterprise Growth',
      quote: 'The collaborative advisory approach helped our leadership understand our growth requirements before seeking capital. Their transparency, disciplined workflow, and coordinated professional support are commendable.',
      author: 'P. Ravindra Reddy',
      designation: 'Founder & CEO',
      company: 'Vanguard Agritech Solutions',
      rating: 5,
      highlight: 'Enterprise growth roadmap structured smoothly'
    },
    {
      id: '3',
      category: 'Sustainability',
      quote: 'Yasaswini’s deep engagement in Andhra Pradesh’s circular economy initiatives and grassroots artisan networks provided our project with invaluable strategic structuring and institutional alignment.',
      author: 'Dr. M. Sailaja Rao',
      designation: 'Director of Programs',
      company: 'AP Sustainable Livelihoods Initiative',
      rating: 5,
      highlight: 'Pioneering rural circular-economy enterprise models'
    },
    {
      id: '4',
      category: 'Compliance Coordination',
      quote: 'Maintec seamlessly coordinated our statutory filings and corporate documentation through qualified professionals while keeping all records transparently organized on MineSolutions.AI.',
      author: 'S. Chandrasekhar',
      designation: 'Chief Operating Officer',
      company: 'Apex Industrial Logistics Ltd.',
      rating: 5,
      highlight: 'Coordinated compliance executed with zero friction'
    }
  ];

  // Complete Policies Content Dictionary (Sections 10, 11, 12, 13, 14 Verbatim)
  const policiesData = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Section 10 • Website Privacy & Data Handling Policy',
      effectiveDate: 'Effective Date: 3 October 2026',
      html: `
        <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.8125rem; color: #334155; line-height: 1.65;">
          <div style="padding: 0.75rem 1rem; border-radius: 0.75rem; background: #eff6ff; border: 1px solid #bfdbfe; font-size: 0.75rem; color: #1e3a8a;">
            <strong>Publication Header:</strong> Legal entity: Maintec Financial Advisory Services Private Limited | CIN: U65991KA2008PTC047500 | Privacy / Grievance Email: <a href="mailto:Maintecadv@gmail.com" style="color: #2563eb; text-decoration: underline;">Maintecadv@gmail.com</a>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">1. Introduction</h4>
            <p>Maintec Financial Advisory Services Private Limited ("Maintec", "we", "our" or "us") respects the privacy of individuals who visit our website, communicate with us or make enquiries about our business advisory, project coordination and other services. This policy explains how we collect, use, disclose, protect and retain personal information through our public website and related enquiry channels.</p>
            <p style="margin-top: 0.5rem;">This policy covers the public website and website forms. A separate client engagement letter, data processing agreement or platform privacy notice may apply to a signed advisory engagement or to MineSolutions.AI where made available.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">2. Information we may collect</h4>
            <ul style="list-style-type: disc; padding-left: 1.25rem; margin-top: 0.375rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <li><strong>Enquiry details:</strong> name, organisation, job title (if supplied), email address, telephone number, selected service and the contents of your enquiry.</li>
              <li><strong>Information you voluntarily provide:</strong> documents and business information provided during follow-up or under an agreed engagement; please avoid submitting PAN, Aadhaar, bank statements, passwords or other sensitive information through a general website form.</li>
              <li><strong>Recruitment information:</strong> (only if a careers form is enabled): CV, qualifications, work history, contact details and other information provided by the applicant.</li>
              <li><strong>Technical information:</strong> IP address, browser and device details, page visits, error logs and information generated by essential cookies. Optional analytics or marketing information is collected only where the relevant tools are implemented and the applicable choices have been provided.</li>
            </ul>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">3. Why we use information</h4>
            <ul style="list-style-type: disc; padding-left: 1.25rem; margin-top: 0.375rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <li>To receive, assess and respond to enquiries and arrange requested calls or meetings.</li>
              <li>To discuss potential services, prepare proposals and, where a separate engagement is accepted, provide or coordinate the agreed services.</li>
              <li>To process job applications if the careers facility is enabled.</li>
              <li>To administer and protect the website, maintain records, investigate misuse and meet lawful requirements.</li>
              <li>To send newsletters or promotional updates only if you have separately opted in or another lawful basis applies, with a simple way to opt out.</li>
            </ul>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">4. Consent and other lawful uses</h4>
            <p>Where the law requires consent, Maintec will request a clear, purpose-specific choice. Information voluntarily supplied in an enquiry may be used to respond to that enquiry, and information may be processed for other purposes permitted by applicable law. An enquiry does not automatically subscribe you to marketing communications. Where the Digital Personal Data Protection Act and Rules apply following their notified commencement, Maintec will provide the required notice and facilitate applicable consent choices and rights.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">5. Who may receive information</h4>
            <p>Access is limited to personnel and authorised service providers who need information for the relevant purpose. Where required for a requested assignment, information may be shared with professional advisers, banking or finance institutions, project partners or other third parties only under appropriate instructions, confidentiality arrangements and any consent or other authority required by law. Information may also be disclosed where required by lawful order or other legal obligation. Maintec does not sell information submitted through the public website.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">6. Hosting, processors and international transfers</h4>
            <p>Website hosting, email, analytics, document storage and AI-related vendors, if deployed, may process limited information on Maintec's behalf. Their identity, location, onward sharing and protections will be reviewed before activation. If personal data is transferred outside India, it will be handled in accordance with the restrictions and safeguards applicable at the time of transfer.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">7. Security</h4>
            <p>Maintec aims to use reasonable technical and organisational safeguards appropriate to the information being handled, including access controls and secure handling procedures. No internet transmission or storage system can be guaranteed to be completely secure. Please do not submit highly confidential information through an unsecured general enquiry form; request an approved secure transfer method instead.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">8. Retention</h4>
            <p>Personal information will be retained for as long as reasonably needed for the purpose collected and for any applicable contractual, legal, accounting or dispute-related requirement. When it is no longer required, Maintec will delete or de-identify it in accordance with its approved retention process.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">9. Your choices and requests</h4>
            <p>You may ask Maintec to review, correct or update information that you have provided, withdraw a marketing choice or raise a privacy concern using <a href="mailto:Maintecadv@gmail.com" style="color: #2563eb; text-decoration: underline;">Maintecadv@gmail.com</a>. Other rights, including access, erasure, grievance redressal and nomination, will be facilitated to the extent and from the time required by applicable law. Where information must be retained under law, deletion may be restricted.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">10. Children</h4>
            <p>The website is intended for business users and is not designed to collect personal information from children. If Maintec discovers that such information was submitted without any consent required by law, it will take appropriate steps to address the submission.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">11. Third-party sites</h4>
            <p>Links to external websites, portals or service providers are provided for convenience. Their privacy practices are governed by their own policies. Please review those policies before providing information.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">12. Changes to this policy</h4>
            <p>Maintec may update this policy to reflect changes to the website, its information practices or applicable law. The updated version and effective date will be posted on the website. Material changes will be communicated where required by law.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">13. Contact and grievances</h4>
            <p><strong>Maintec Financial Advisory Services Private Limited</strong><br>
            CIN: U65991KA2008PTC047500<br>
            Registered office: #3M-215, Outer Ring Road, East of NGEF, Kasturinagar, Bengaluru, Karnataka 560016, India<br>
            Designated privacy / grievance contact: <a href="mailto:Maintecadv@gmail.com" style="color: #2563eb; text-decoration: underline;">Maintecadv@gmail.com</a></p>
          </div>
        </div>
      `
    },
    terms: {
      title: 'Website Terms of Use',
      subtitle: 'Section 12 • Public Website Legal Terms of Use',
      effectiveDate: 'Effective Date: 3 October 2026',
      html: `
        <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.8125rem; color: #334155; line-height: 1.65;">
          <div style="padding: 0.75rem 1rem; border-radius: 0.75rem; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 0.75rem; color: #475569;">
            Applies to public website content; not a substitute for signed service or platform agreements.
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">1. Website operator</h4>
            <p>This website is operated by Maintec Financial Advisory Services Private Limited, CIN U65991KA2008PTC047500, with its registered office at #3M-215, Outer Ring Road, East of NGEF, Kasturinagar, Bengaluru, Karnataka 560016, India. By using the website, you agree to these Terms to the extent permitted by applicable law. If you do not agree, please discontinue use.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">2. Purpose of the website</h4>
            <p>The website provides general information about Maintec, its leadership, business advisory activities, proposed solutions and methods of contact. Content may change without notice. An enquiry or website interaction does not create a client, lender, professional or fiduciary relationship. Any service engagement is governed by a separately accepted proposal, engagement letter or agreement.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">3. Acceptable use</h4>
            <p>You may use the website for lawful business and informational purposes. Do not attempt unauthorised access, interfere with security, scrape the website in breach of law or applicable permissions, upload malicious content, impersonate others or submit information without permission.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">4. Enquiries and submissions</h4>
            <p>By submitting information, you confirm that you are authorised to share it for the stated purpose. Do not transmit passwords, Aadhaar numbers, complete bank credentials or sensitive client files through the public enquiry form. Unless and until Maintec expressly accepts an engagement, submitting materials does not oblige Maintec to act on them or to meet a deadline.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">5. No guarantee of funding or outcomes</h4>
            <p>Information about financial consultancy, credit or project coordination is general. Any financing facility remains subject to the lender's independent appraisal, documentation, approval and terms. Maintec does not guarantee loan sanction, investment, regulatory approval, tax outcomes or commercial results.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">6. Professional and regulated matters</h4>
            <p>Maintec is an entrepreneur-led private limited company. The website does not represent Maintec as an ICAI-registered Chartered Accountancy firm or its B.Tech-qualified leadership as Chartered Accountants, advocates or Company Secretaries. Where a matter requires reserved professional work, a separately identified, appropriately qualified professional or firm must be engaged or involved as required by applicable law.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">7. Intellectual property</h4>
            <p>Unless otherwise stated, site branding, text, design, graphics and other original content belong to Maintec or are used under permission. You may refer to website content for personal or internal business information with proper attribution. Commercial reproduction, unauthorised modification or misuse of marks requires prior written permission.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">8. Third-party links and tools</h4>
            <p>External resources are provided for convenience and are not controlled by Maintec. Any dealings with third parties, including lenders, professional advisers or software providers, are subject to the relevant third-party terms and independent assessment.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">9. Availability and information accuracy</h4>
            <p>Maintec aims to keep website information useful and current but does not warrant uninterrupted access or that every statement remains complete, accurate or suitable for an individual business decision. Verify important facts directly before relying on them. Nothing in these Terms excludes liability that cannot lawfully be excluded.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">10. Privacy and separate platform terms</h4>
            <p>Website data handling is explained in the Privacy Policy. Use of MineSolutions.AI, where available, may require separate account terms, a subscription or services agreement, and an appropriate data processing agreement; these public website Terms do not replace those documents.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">11. Governing law and contact</h4>
            <p>These Terms are governed by the laws of India. Subject to mandatory applicable law and final legal review, the competent courts at Bengaluru, Karnataka will have jurisdiction over website-related disputes. Questions: <a href="mailto:Maintecadv@gmail.com" style="color: #2563eb; text-decoration: underline;">Maintecadv@gmail.com</a>.</p>
          </div>
        </div>
      `
    },
    cookies: {
      title: 'Cookie Policy',
      subtitle: 'Section 11 • Cookie Categories & Preferences Control',
      effectiveDate: 'Effective Date: 3 October 2026',
      html: `
        <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.8125rem; color: #334155; line-height: 1.65;">
          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">1. What cookies are</h4>
            <p>Cookies and similar technologies are small files or identifiers used by websites to operate essential features, remember settings and, if enabled, understand site traffic or show relevant content. This policy should be read with Maintec's Privacy Policy.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;" class="font-heading">2. Categories and choices</h4>
            
            <div style="overflow-x: auto; border: 1px solid #e2e8f0; border-radius: 0.75rem;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.75rem;">
                <thead>
                  <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <th style="padding: 0.625rem 0.875rem; font-weight: 700; color: #0f172a;">Category</th>
                    <th style="padding: 0.625rem 0.875rem; font-weight: 700; color: #0f172a;">Purpose</th>
                    <th style="padding: 0.625rem 0.875rem; font-weight: 700; color: #0f172a;">Choice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 0.625rem 0.875rem; font-weight: 600; color: #1e3a8a;">Strictly necessary</td>
                    <td style="padding: 0.625rem 0.875rem;">Enable core site features, security, form submission and saved privacy choices.</td>
                    <td style="padding: 0.625rem 0.875rem;"><span style="color: #059669; font-weight: 600;">Always active</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 0.625rem 0.875rem; font-weight: 600; color: #334155;">Functional (if enabled)</td>
                    <td style="padding: 0.625rem 0.875rem;">Remember display or accessibility preferences.</td>
                    <td style="padding: 0.625rem 0.875rem;">Optional unless essential</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 0.625rem 0.875rem; font-weight: 600; color: #334155;">Analytics (if enabled)</td>
                    <td style="padding: 0.625rem 0.875rem;">Understand aggregate website usage and improve content.</td>
                    <td style="padding: 0.625rem 0.875rem;">User choice (Consent required)</td>
                  </tr>
                  <tr>
                    <td style="padding: 0.625rem 0.875rem; font-weight: 600; color: #334155;">Marketing (if enabled)</td>
                    <td style="padding: 0.625rem 0.875rem;">Measure campaigns or personalise third-party advertising.</td>
                    <td style="padding: 0.625rem 0.875rem;">Disabled by default</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">3. Managing cookies</h4>
            <p>Where optional cookies are used, the website provides a preference control to accept, reject or change them. You can also restrict or delete cookies in your browser. Disabling strictly necessary cookies may affect essential site functions.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">4. Third-party tools</h4>
            <p>If the website uses third-party analytics, maps, embedded videos, chat or other tools, the cookie banner and cookie list will identify the tools and link to their relevant information where appropriate.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">5. Updates and contact</h4>
            <p>Maintec may revise this Cookie Policy if its website tools change. For questions or privacy requests, contact <a href="mailto:Maintecadv@gmail.com" style="color: #2563eb; text-decoration: underline;">Maintecadv@gmail.com</a>.</p>
          </div>
        </div>
      `
    },
    disclaimer: {
      title: 'Website & Professional Services Disclaimer',
      subtitle: 'Section 13 • Professional Boundaries & Service Scope Disclaimer',
      effectiveDate: 'Effective Date: 3 October 2026',
      html: `
        <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.8125rem; color: #334155; line-height: 1.65;">
          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">1. General information only</h4>
            <p>Information on this website is provided for general business awareness. It does not constitute advice tailored to your circumstances and should not replace assessment of the relevant facts, applicable regulations, written professional advice or an agreed engagement.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">2. Company and leadership status</h4>
            <p>Maintec Financial Advisory Services Private Limited is a private limited company. The leadership profiles supplied for this website identify T. Naresh Kumar and Yasaswini Peddi as B.Tech-qualified entrepreneurs whose experience relates to banking and fund-raising consultancy, and to strategic project coordination, rural entrepreneurship and circular-economy development, respectively. They are not presented as Chartered Accountants. Formal titles will be shown only after company approval.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">3. Coordination of regulated work</h4>
            <p>Descriptions of tax, audit, corporate secretarial and legal support, where included, refer to advisory coordination or work undertaken by appropriately qualified and authorised professionals under separate arrangements where required. No statement on this website should be interpreted as Maintec itself claiming a statutory practising certificate or registration that has not been verified.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">4. Finance and investment</h4>
            <p>Capital-raising assistance, banking coordination and related information are not offers by Maintec to lend, an assurance of loan sanction or a recommendation to enter any particular investment. Lenders and investors make their own decisions; clients should review terms, eligibility and risks independently.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">5. Circular economy and project information</h4>
            <p>Examples of rural entrepreneurship, sustainability and circular-economy initiatives illustrate the leadership's described areas of work. Project results, government relationships, certifications, subsidies, environmental metrics and case studies should be published only after documentary verification and any necessary third-party permission.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">6. Technology and AI</h4>
            <p>MineSolutions.AI content and demonstrations, if any, must reflect features actually available on the relevant release. AI-generated summaries, classifications and suggestions can be incomplete or incorrect and require human verification before use for legal, financial, tax or other consequential decisions. No security certification, uptime, automation percentage or regulatory-portal integration should be claimed unless demonstrated and approved.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">7. External material and updates</h4>
            <p>Links, articles, regulatory updates and third-party views may become outdated. Publication of an update does not create an ongoing obligation to notify every visitor of changes. Check current official sources and take case-specific advice where appropriate.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">8. Contact</h4>
            <p>For service enquiries or to report an inaccurate website statement, use the public enquiry channel once published. For privacy complaints, use the dedicated contact given in the Privacy Policy (<a href="mailto:Maintecadv@gmail.com" style="color: #2563eb; text-decoration: underline;">Maintecadv@gmail.com</a>).</p>
          </div>
        </div>
      `
    },
    ai: {
      title: 'Responsible AI & MineSolutions.AI Notice',
      subtitle: 'Section 14 • Technology & Artificial Intelligence Governance Notice',
      effectiveDate: 'Effective Date: 3 October 2026',
      html: `
        <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.8125rem; color: #334155; line-height: 1.65;">
          <div style="padding: 0.75rem 1rem; border-radius: 0.75rem; background: #fffbeb; border: 1px solid #fde68a; font-size: 0.75rem; color: #92400e;">
            <strong>Product Status Gate:</strong> Conditional copy for platform transparency. MineSolutions.AI is the intended technology layer supporting structured workflows, document organisation, assignment visibility and management coordination.
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">1. Purpose</h4>
            <p>Where enabled, MineSolutions.AI may help authorised users organise tasks, retrieve information, extract content from documents and generate draft summaries or workflow suggestions. It is designed to assist people and organisational processes, not to replace appropriate professional judgment.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">2. Accuracy and human review</h4>
            <p>AI-generated material may contain errors, omissions or outdated information. Users should independently validate important figures, legal positions, citations, eligibility requirements, contractual clauses and outputs affecting financial, legal, tax, employment or regulatory decisions.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">3. Confidential information</h4>
            <p>Do not enter confidential client records, credentials, PAN/Aadhaar information or sensitive business files into a public demonstration or AI chat unless Maintec has expressly authorised that workflow and identified the applicable security, contractual and privacy arrangements.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">4. Data processing transparency</h4>
            <p>Before enabling an AI assistant, Maintec will identify the information collected, processing purpose, any external AI vendor, retention arrangements and any proposed model-training use. Any such training use must be separately reviewed and disclosed where required. Public policy language must match actual provider contracts and settings.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">5. Access, monitoring and corrections</h4>
            <p>Access to non-public platform data should be limited to authorised users. A process should exist to report inappropriate output, inaccurate information or suspected unauthorised disclosure. Significant decisions should remain subject to documented human review.</p>
          </div>

          <div>
            <h4 style="font-size: 0.9375rem; font-weight: 700; color: #0f172a;" class="font-heading">6. Separate subscription and data terms</h4>
            <p>If MineSolutions.AI is offered to business customers, its subscription terms, service levels, acceptable-use rules, privacy arrangements, data processing agreement, backup policy and support process should be approved separately from the Maintec public website Terms of Use.</p>
          </div>
        </div>
      `
    }
  };


  /* =========================================================================
     2. HEADER SCROLL SPY & STICKY MORPH
     ========================================================================= */
  const siteHeader = document.getElementById('site-header');
  const desktopNavLinks = document.querySelectorAll('.nav-link-btn');

  const handleScroll = () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Scroll spy
    const sections = ['hero', 'services', 'about', 'leadership', 'why', 'technology', 'methodology', 'industries', 'testimonials'];
    const scrollPos = window.scrollY + 140;

    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          desktopNavLinks.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-target') === `#${id}`);
          });
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });


  /* =========================================================================
     3. SMOOTH NAVIGATION SCROLL & MOBILE DRAWER
     ========================================================================= */
  const scrollToTarget = (targetSelector) => {
    const el = document.querySelector(targetSelector);
    if (!el) return;
    const headerHeight = siteHeader ? siteHeader.offsetHeight : 70;
    const top = el.offsetTop - headerHeight + 5;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth'
    });
  };

  document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      scrollToTarget(target);
      // Close mobile drawer if open
      closeMobileDrawer();
    });
  });

  const mobileMenuToggle = document.getElementById('mobile-menu-btn') || document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link, .mobile-nav-link');

  const openMobileDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.add('active');
  };

  const closeMobileDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
  };

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-target');
      if (target) {
        scrollToTarget(target);
        closeMobileDrawer();
      }
    });
  });


  /* =========================================================================
     4. HERO INTERACTIVE 3D PLATFORM & TOOLTIPS (wu)
     ========================================================================= */
  const heroTabs = document.querySelectorAll('.hero-tab-pill-btn');
  const tooltip = document.getElementById('hero-interactive-tooltip');
  const bars = document.querySelectorAll('.hero-3d-bar');

  heroTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      heroTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabType = tab.getAttribute('data-tab');

      if (tooltip) {
        let text = '';
        if (tabType === 'analytics') text = 'Realtime: All 4 Practice Advisory Tracks Active';
        if (tabType === 'compliance') text = 'Governance: Coordinated with Qualified Professionals';
        if (tabType === 'ai') text = 'MineSolutions.AI: Structured Workflow & Management Platform';

        tooltip.textContent = text;
        tooltip.style.display = 'block';
        setTimeout(() => { tooltip.style.display = 'none'; }, 3000);
      }
    });
  });

  bars.forEach(bar => {
    bar.addEventListener('mouseenter', () => {
      const tip = bar.getAttribute('data-tip');
      if (tooltip && tip) {
        tooltip.textContent = tip;
        tooltip.style.display = 'block';
      }
    });
    bar.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.style.display = 'none';
    });
  });


  /* =========================================================================
     5. STATS ANIMATED COUNTERS (INTERSECTION OBSERVER)
     ========================================================================= */
  const statsSection = document.getElementById('stats-section');
  let animated = false;

  const animateCounters = () => {
    const counterElements = document.querySelectorAll('.stat-number');
    const startTime = performance.now();
    const duration = 2000;

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      counterElements.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimal = parseInt(el.getAttribute('data-decimal')) || 0;

        const currentVal = target * ease;
        const formatted = decimal > 0 ? currentVal.toFixed(decimal) : Math.floor(currentVal).toLocaleString();
        el.textContent = `${prefix}${formatted}${suffix}`;
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  }


  /* =========================================================================
     6. RENDER 4 ADVISORY PILLARS (SERVICES GRID)
     ========================================================================= */
  const servicesCardsGrid = document.getElementById('services-cards-grid');

  if (servicesCardsGrid) {
    servicesCardsGrid.innerHTML = servicesData.map(service => `
      <div class="service-card" data-service-id="${service.id}">
        <!-- Top Row -->
        <div>
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="width: 4.5rem; height: 4.5rem; padding: 0.5rem; border-radius: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
              ${service.iconSvg}
            </div>
            <span class="badge" style="background: #f1f5f9; color: #334155; border: 1px solid #e2e8f0;">
              ${service.badge}
            </span>
          </div>

          <div style="margin-bottom: 1rem;">
            <h3 class="service-card-title font-heading">${service.title}</h3>
            <p style="font-size: 0.8125rem; color: #64748b; line-height: 1.6; margin-top: 0.5rem;">
              ${service.description}
            </p>
          </div>

          <!-- Top 3 Capabilities List -->
          <div style="padding-top: 0.75rem; border-top: 1px solid #f1f5f9; display: flex; flex-direction: column; gap: 0.5rem;">
            ${service.coreCapabilities.slice(0, 3).map(cap => `
              <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: #334155; font-weight: 500;">
                <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${cap}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Bottom Action Row -->
        <div style="padding-top: 1.25rem; margin-top: 1.5rem; border-top: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
          <button class="view-pillar-btn" data-id="${service.id}" style="font-size: 0.8125rem; font-weight: 700; color: #2563eb; display: flex; align-items: center; gap: 0.25rem;">
            <span>View Pillar Details</span>
            <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          <button class="btn btn-dark engage-pillar-btn" data-title="${service.title}" style="height: 2.25rem; padding: 0 1rem; font-size: 0.75rem; font-weight: 600;">
            <span>Engage Pillar</span>
            <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </button>
        </div>
      </div>
    `).join('');
  }


  /* =========================================================================
     7. TECHNOLOGY DASHBOARD 5-TABS CONTROLLER (_u)
     ========================================================================= */
  const techTabs = document.querySelectorAll('.tech-tab-btn');
  const techDashboardView = document.getElementById('tech-dashboard-view');
  let currentTechTab = 'assignments';
  let calendarSelectedMonth = 'Oct 2026';

  const renderTechDashboard = () => {
    if (!techDashboardView) return;

    if (currentTechTab === 'assignments') {
      techDashboardView.innerHTML = `
        <div style="padding: 1.5rem; border-radius: 1rem; background: #ffffff; border: 1px solid rgba(226,232,240,0.8); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <h4 style="font-size: 0.875rem; font-weight: 700; color: #0f172a;" class="font-heading">Active Advisory Assignments</h4>
              <p style="font-size: 0.75rem; color: #64748b;">Live structured workflow across Capital Funding, Strategy & Sustainability</p>
            </div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #2563eb; background: #eff6ff; padding: 0.25rem 0.625rem; border-radius: 0.5rem;">4 Active Mandates</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${[
          { title: '₹25 Cr Manufacturing Term Loan & Working Capital Syndication', pillar: 'Finance & Capital Funding', lead: 'Banking Advisory Lead', status: 'Lender CAM Review', progress: 85, color: 'background: #06b6d4;' },
          { title: 'Andhra Pradesh Rural Circular-Economy Artisan Value-Chain', pillar: 'Circular Economy & Sustainability', lead: 'Strategic Projects Lead', status: 'Cluster Deployment', progress: 92, color: 'background: #10b981;' },
          { title: 'Enterprise Development & Institutional Collaboration Roadmap', pillar: 'Strategic Business Advisory', lead: 'Advisory Team', status: 'Proposal Structuring', progress: 70, color: 'background: #059669;' },
          { title: 'Corporate Compliance & Secretarial Packet Coordination', pillar: 'Tax & Legal Coordination', lead: 'Coordinated Professionals', status: 'Documentation Ready', progress: 95, color: 'background: #2563eb;' }
        ].map(item => `
              <div style="padding: 0.875rem; border-radius: 0.75rem; background: #f8fafc; border: 1px solid #e2e8f0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem;">
                <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                  <div style="font-size: 0.75rem; font-weight: 700; color: #0f172a;">${item.title}</div>
                  <div style="font-size: 0.6875rem; color: #64748b; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-weight: 600; color: #334155;">${item.pillar}</span>
                    <span>•</span>
                    <span>Lead: ${item.lead}</span>
                  </div>
                </div>
                <div style="width: 10rem; display: flex; flex-direction: column; gap: 0.375rem;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.6875rem;">
                    <span style="color: #475569; font-weight: 500;">${item.status}</span>
                    <span style="font-weight: 700; color: #0f172a;">${item.progress}%</span>
                  </div>
                  <div style="width: 100%; height: 0.375rem; background: #e2e8f0; border-radius: 9999px; overflow: hidden;">
                    <div style="height: 100%; width: ${item.progress}%; ${item.color} border-radius: 9999px; transition: width 0.7s ease;"></div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (currentTechTab === 'calendar') {
      techDashboardView.innerHTML = `
        <div style="padding: 1.5rem; border-radius: 1rem; background: #ffffff; border: 1px solid rgba(226,232,240,0.8); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <h4 style="font-size: 0.875rem; font-weight: 700; color: #0f172a;" class="font-heading">Assignment & Milestone Tracker</h4>
              <p style="font-size: 0.75rem; color: #64748b;">Structured schedules for project reporting and professional coordination</p>
            </div>
            <div style="display: flex; gap: 0.25rem; background: #f1f5f9; padding: 0.25rem; border-radius: 0.5rem;">
              ${['Oct 2026', 'Nov 2026', 'Dec 2026'].map(month => `
                <button class="cal-month-btn ${calendarSelectedMonth === month ? 'active' : ''}" data-month="${month}" style="padding: 0.25rem 0.5rem; border-radius: 0.375rem; font-size: 0.75rem; font-weight: 600; ${calendarSelectedMonth === month ? 'background: #0f172a; color: #fff;' : 'color: #475569;'}">
                  ${month}
                </button>
              `).join('')}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
            <div style="padding: 0.875rem; border-radius: 0.75rem; background: #eff6ff; border: 1px solid #bfdbfe; display: flex; flex-direction: column; gap: 0.5rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; font-weight: 700; color: #1e3a8a;">
                <span>Oct 15, 2026</span>
                <span style="padding: 0.25rem; border-radius: 9999px; background: #dbeafe; color: #1e40af;">
                  <svg class="lucide-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </span>
              </div>
              <div style="font-size: 0.75rem; font-weight: 700; color: #0f172a;">Lender Credit Review Submission</div>
              <div style="font-size: 0.6875rem; color: #475569; line-height: 1.4;">Project report and capital utilization schedule dispatched to institution.</div>
            </div>

            <div style="padding: 0.875rem; border-radius: 0.75rem; background: #ecfdf5; border: 1px solid #a7f3d0; display: flex; flex-direction: column; gap: 0.5rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; font-weight: 700; color: #064e3b;">
                <span>Oct 24, 2026</span>
                <span style="padding: 0.25rem; border-radius: 9999px; background: #d1fae5; color: #047857;">
                  <svg class="lucide-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
              </div>
              <div style="font-size: 0.75rem; font-weight: 700; color: #0f172a;">Sustainability Stakeholder Review</div>
              <div style="font-size: 0.6875rem; color: #475569; line-height: 1.4;">Artisan cluster workshop and circular-economy milestone alignment in AP.</div>
            </div>

            <div style="padding: 0.875rem; border-radius: 0.75rem; background: #faf5ff; border: 1px solid #e9d5ff; display: flex; flex-direction: column; gap: 0.5rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; font-weight: 700; color: #581c87;">
                <span>Oct 31, 2026</span>
                <span style="padding: 0.25rem; border-radius: 9999px; background: #f3e8ff; color: #7e22ce;">
                  <svg class="lucide-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
                </span>
              </div>
              <div style="font-size: 0.75rem; font-weight: 700; color: #0f172a;">Coordinated Filing Verification</div>
              <div style="font-size: 0.6875rem; color: #475569; line-height: 1.4;">Independent professional coordination pack collated for client review.</div>
            </div>
          </div>
        </div>
      `;

      // Calendar month buttons listener
      document.querySelectorAll('.cal-month-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          calendarSelectedMonth = btn.getAttribute('data-month');
          renderTechDashboard();
        });
      });
    } else if (currentTechTab === 'vault') {
      techDashboardView.innerHTML = `
        <div style="padding: 1.5rem; border-radius: 1rem; background: #ffffff; border: 1px solid rgba(226,232,240,0.8); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <h4 style="font-size: 0.875rem; font-weight: 700; color: #0f172a;" class="font-heading">Structured Document Repository</h4>
              <p style="font-size: 0.75rem; color: #64748b;">Organized document management for client assignments & institutional reviews</p>
            </div>
            <span style="font-size: 0.75rem; font-family: var(--font-mono); color: #047857; background: #d1fae5; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-weight: 600;">Secure Cloud Storage</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
            ${[
          { name: 'Bankable-Project-Report-DPR-Final.pdf', size: '5.4 MB', date: 'Oct 2, 2026', tag: 'Capital Funding' },
          { name: 'AP-Circular-Economy-Cluster-Scope.pdf', size: '3.8 MB', date: 'Sep 28, 2026', tag: 'Sustainability' },
          { name: 'Enterprise-Growth-Framework-2026.pdf', size: '2.1 MB', date: 'Sep 19, 2026', tag: 'Strategy' },
          { name: 'Coordinated-Compliance-Verification-Pack.pdf', size: '4.2 MB', date: 'Sep 12, 2026', tag: 'Coordination' }
        ].map(doc => `
              <div style="padding: 0.75rem; border-radius: 0.75rem; background: #f8fafc; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 0.625rem; min-width: 0;">
                  <svg class="lucide-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" style="flex-shrink: 0;"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m9 15 2 2 4-4"/></svg>
                  <div style="min-width: 0;">
                    <div style="font-size: 0.75rem; font-weight: 700; color: #0f172a; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${doc.name}</div>
                    <div style="font-size: 0.6875rem; color: #64748b;">${doc.size} • ${doc.date}</div>
                  </div>
                </div>
                <span style="font-size: 0.625rem; font-weight: 600; color: #475569; background: #ffffff; padding: 0.125rem 0.5rem; border-radius: 0.25rem; border: 1px solid #cbd5e1; flex-shrink: 0;">${doc.tag}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (currentTechTab === 'insights') {
      techDashboardView.innerHTML = `
        <div style="padding: 1.5rem; border-radius: 1rem; background: #ffffff; border: 1px solid rgba(226,232,240,0.8); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <h4 style="font-size: 0.875rem; font-weight: 700; color: #0f172a;" class="font-heading">Assignment Visibility & Management Coordination</h4>
              <p style="font-size: 0.75rem; color: #64748b;">MineSolutions.AI workflow metrics and operational progress tracking</p>
            </div>
            <span style="font-size: 0.75rem; font-weight: 600; color: #0891b2; background: #cffafe; padding: 0.25rem 0.5rem; border-radius: 0.375rem;">Platform Operations</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.75rem;">
            <div style="padding: 1rem; border-radius: 0.75rem; background: #0f172a; color: #ffffff; display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-size: 0.6875rem; color: #67e8f9; font-family: var(--font-mono);">ACTIVE WORKFLOWS</span>
              <div style="font-size: 1.5rem; font-weight: 800;" class="font-heading">100%</div>
              <div style="font-size: 0.6875rem; color: #94a3b8;">Task milestone visibility</div>
            </div>

            <div style="padding: 1rem; border-radius: 0.75rem; background: #0f172a; color: #ffffff; display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-size: 0.6875rem; color: #6ee7b7; font-family: var(--font-mono);">STAKEHOLDER SYNC</span>
              <div style="font-size: 1.5rem; font-weight: 800;" class="font-heading">Unified</div>
              <div style="font-size: 0.6875rem; color: #94a3b8;">Coordinated advisory support</div>
            </div>

            <div style="padding: 1rem; border-radius: 0.75rem; background: #0f172a; color: #ffffff; display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-size: 0.6875rem; color: #c4b5fd; font-family: var(--font-mono);">GOVERNANCE SAFEGUARD</span>
              <div style="font-size: 1.5rem; font-weight: 800;" class="font-heading">Human-Led</div>
              <div style="font-size: 0.6875rem; color: #94a3b8;">Mandatory expert oversight</div>
            </div>
          </div>
        </div>
      `;
    } else if (currentTechTab === 'alerts') {
      techDashboardView.innerHTML = `
        <div style="padding: 1.5rem; border-radius: 1rem; background: #ffffff; border: 1px solid rgba(226,232,240,0.8); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <h4 style="font-size: 0.875rem; font-weight: 700; color: #0f172a;" class="font-heading">Structured Milestone Notifications</h4>
              <p style="font-size: 0.75rem; color: #64748b;">Coordinated progress updates across assignments and collaborative initiatives</p>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.625rem;">
            <div style="padding: 0.75rem; border-radius: 0.75rem; background: #ecfdf5; border: 1px solid #a7f3d0; display: flex; align-items: flex-start; gap: 0.625rem;">
              <svg class="lucide-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" style="flex-shrink: 0; margin-top: 0.125rem;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <div>
                <div style="font-size: 0.75rem; font-weight: 700; color: #064e3b;">Project DPR Dossier Finalized</div>
                <div style="font-size: 0.6875rem; color: #047857;">Detailed project report documentation collated for institutional banking submission.</div>
              </div>
            </div>

            <div style="padding: 0.75rem; border-radius: 0.75rem; background: #eff6ff; border: 1px solid #bfdbfe; display: flex; align-items: flex-start; gap: 0.625rem;">
              <svg class="lucide-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" style="flex-shrink: 0; margin-top: 0.125rem;"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
              <div>
                <div style="font-size: 0.75rem; font-weight: 700; color: #1e3a8a;">Circular Economy Milestone Recorded</div>
                <div style="font-size: 0.6875rem; color: #1d4ed8;">Rural artisan cluster engagement terms and partnership scope confirmed in AP.</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Append 4 metrics footer
    const metricsFooter = document.createElement('div');
    metricsFooter.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;';
    metricsFooter.innerHTML = [
      { label: 'Technology Layer', value: 'MineSolutions.AI', sub: 'Structured Operations' },
      { label: 'Designation Model', value: 'Entrepreneur-Led', sub: 'Practical Experience' },
      { label: 'Incorporation', value: '20 Aug 2008', sub: 'CIN: U65991KA2008PTC047500' },
      { label: 'Regulated Work', value: 'Coordinated', sub: 'Via Authorized Firms' }
    ].map(m => `
      <div style="padding: 0.75rem; border-radius: 0.75rem; background: #f8fafc; border: 1px solid #e2e8f0; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 500; color: #64748b;">${m.label}</div>
        <div style="font-size: 0.9375rem; font-weight: 800; color: #0f172a;" class="font-heading">${m.value}</div>
        <div style="font-size: 0.625rem; color: #94a3b8;">${m.sub}</div>
      </div>
    `).join('');

    techDashboardView.appendChild(metricsFooter);
  };

  techTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      techTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTechTab = btn.getAttribute('data-tab');
      renderTechDashboard();
    });
  });

  renderTechDashboard();


  /* =========================================================================
     8. 7-STAGE METHODOLOGY CONTROLLER (#methodology)
     ========================================================================= */
  const methodologyStepsNav = document.getElementById('methodology-steps-nav');
  const methodologyActiveCard = document.getElementById('methodology-active-card');
  let currentStageIndex = 0;

  const renderMethodology = () => {
    const stage = methodologyStages[currentStageIndex];
    const progressPercent = Math.round(((currentStageIndex + 1) / methodologyStages.length) * 100);

    // Render 7 buttons
    if (methodologyStepsNav) {
      methodologyStepsNav.innerHTML = methodologyStages.map((s, idx) => {
        const isActive = idx === currentStageIndex;
        const isCompleted = idx < currentStageIndex;
        return `
          <button class="stage-step-btn ${isActive ? 'active' : isCompleted ? 'completed' : ''}" data-step-idx="${idx}">
            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; font-size: 0.625rem; font-family: var(--font-mono); font-weight: 700;">
              <span style="${isActive ? 'color: #22d3ee;' : 'color: #94a3b8;'}">${s.step}</span>
              ${(isActive || isCompleted) ? `
                <svg class="lucide-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${isActive ? '#22d3ee' : '#2563eb'}"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              ` : ''}
            </div>
            <div style="font-size: 0.8125rem; font-weight: 700;" class="font-heading">${s.name}</div>
            <div style="font-size: 0.625rem; color: ${isActive ? '#cbd5e1' : '#64748b'}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 90px;">${s.subtitle}</div>
          </button>
        `;
      }).join('');

      // Add click handlers
      document.querySelectorAll('.stage-step-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentStageIndex = parseInt(btn.getAttribute('data-step-idx'));
          renderMethodology();
        });
      });
    }

    // Render Active Card
    if (methodologyActiveCard) {
      methodologyActiveCard.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; align-items: center;">
          <!-- Left Column -->
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.625rem;">
              <span style="padding: 0.25rem 0.75rem; border-radius: 9999px; background: #dbeafe; color: #1e40af; font-size: 0.75rem; font-weight: 700; font-family: var(--font-mono);">
                STAGE ${stage.step} OF 07
              </span>
              <span style="color: #cbd5e1;">•</span>
              <span style="font-size: 0.75rem; font-weight: 600; color: #475569;">${stage.subtitle}</span>
            </div>

            <h3 style="font-size: 1.75rem; font-weight: 800; color: #0f172a;" class="font-heading">
              ${stage.name}: ${stage.subtitle}
            </h3>

            <p style="font-size: 0.9375rem; color: #475569; line-height: 1.6;">
              ${stage.description}
            </p>

            <div style="display: flex; flex-direction: column; gap: 0.75rem; padding-top: 0.5rem;">
              <div style="padding: 0.875rem; border-radius: 0.75rem; background: #f8fafc; border: 1px solid #e2e8f0; display: flex; align-items: flex-start; gap: 0.75rem;">
                <svg class="lucide-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" style="flex-shrink: 0; margin-top: 0.125rem;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                <div>
                  <div style="font-size: 0.75rem; font-weight: 700; color: #0f172a;">Key Deliverable</div>
                  <div style="font-size: 0.75rem; color: #475569;">${stage.deliverable}</div>
                </div>
              </div>

              <div style="padding: 0.875rem; border-radius: 0.75rem; background: #eff6ff; border: 1px solid #bfdbfe; display: flex; align-items: flex-start; gap: 0.75rem;">
                <svg class="lucide-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" style="flex-shrink: 0; margin-top: 0.125rem;"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
                <div>
                  <div style="font-size: 0.75rem; font-weight: 700; color: #1e3a8a;">MineSolutions.AI Workflow Support</div>
                  <div style="font-size: 0.75rem; color: #1d4ed8;">${stage.aiAdvantage}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column Card -->
          <div style="padding: 1.5rem; border-radius: 1rem; background: #0f172a; color: #ffffff; border: 1px solid #1e293b; display: flex; flex-direction: column; gap: 1.25rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #1e293b;">
              <span style="font-size: 0.75rem; font-weight: 600; color: #94a3b8;">Execution Discipline</span>
              <span style="font-size: 0.75rem; font-weight: 700; color: #34d399; display: flex; align-items: center; gap: 0.25rem;">
                <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                Structured Governance
              </span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="font-size: 0.75rem; font-weight: 600; color: #cbd5e1;">Advisory Cycle Progress</div>
              <div style="width: 100%; height: 0.5rem; background: #1e293b; border-radius: 9999px; overflow: hidden;">
                <div style="height: 100%; width: ${progressPercent}%; background: linear-gradient(90deg, #2563eb, #06b6d4); border-radius: 9999px; transition: width 0.5s ease;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.6875rem; color: #94a3b8;">
                <span>Progress: ${progressPercent}%</span>
                <span>Stages Completed: ${currentStageIndex + 1}/7</span>
              </div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding-top: 0.5rem;">
              <button class="btn btn-ghost" id="prev-stage-btn" ${currentStageIndex === 0 ? 'disabled style="opacity: 0.4;"' : ''} style="height: 2.25rem; padding: 0 1rem; font-size: 0.75rem;">
                Previous Stage
              </button>
              <button class="btn btn-primary" id="next-stage-btn" ${currentStageIndex === methodologyStages.length - 1 ? 'disabled style="opacity: 0.4;"' : ''} style="height: 2.25rem; padding: 0 1rem; font-size: 0.75rem;">
                <span>Next Stage</span>
                <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;

      // Prev & Next handlers
      const prevBtn = document.getElementById('prev-stage-btn');
      const nextBtn = document.getElementById('next-stage-btn');

      if (prevBtn && currentStageIndex > 0) {
        prevBtn.addEventListener('click', () => {
          currentStageIndex--;
          renderMethodology();
        });
      }

      if (nextBtn && currentStageIndex < methodologyStages.length - 1) {
        nextBtn.addEventListener('click', () => {
          currentStageIndex++;
          renderMethodology();
        });
      }
    }
  };

  renderMethodology();


  /* =========================================================================
     9. INDUSTRIES GRID RENDERING (#industries)
     ========================================================================= */
  const industriesGrid = document.getElementById('industries-grid');

  if (industriesGrid) {
    industriesGrid.innerHTML = industriesData.map(ind => `
      <div class="industry-card">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div style="padding: 0.25rem; border-radius: 0.75rem; background: #ffffff; border: 1px solid #e2e8f0; display: inline-flex;">
              ${ind.iconSvg}
            </div>
            <span class="badge" style="background: #ffffff; border: 1px solid #e2e8f0; color: #475569; font-size: 0.6875rem;">
              Focus Constituency
            </span>
          </div>

          <h3 style="font-size: 1.125rem; font-weight: 800; color: #0f172a;" class="font-heading">${ind.name}</h3>
          <div style="font-size: 0.75rem; font-weight: 600; color: #2563eb; margin-top: 0.25rem;">${ind.tagline}</div>
          <p style="font-size: 0.8125rem; color: #64748b; margin-top: 0.5rem; line-height: 1.5;">${ind.description}</p>

          <div style="padding-top: 0.75rem; margin-top: 0.75rem; border-top: 1px solid #f1f5f9; display: flex; flex-direction: column; gap: 0.375rem;">
            ${ind.keyServices.map(ks => `
              <div style="display: flex; align-items: center; gap: 0.375rem; font-size: 0.75rem; color: #334155;">
                <svg class="lucide-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#06b6d4"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                <span>${ks}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="padding: 0.625rem; border-radius: 0.75rem; background: #ecfdf5; border: 1px solid #a7f3d0; margin-top: 1.25rem; font-size: 0.6875rem; font-weight: 600; color: #065f46; display: flex; align-items: center; gap: 0.375rem;">
          <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <span>${ind.caseMetric}</span>
        </div>
      </div>
    `).join('');
  }


  /* =========================================================================
     10. TESTIMONIALS / REVIEWS FILTER CONTROLLER (#testimonials)
     ========================================================================= */
  const reviewFilterButtons = document.querySelectorAll('.filter-pill-btn');
  const reviewsCardsGrid = document.getElementById('reviews-cards-grid');
  let currentReviewCategory = 'all';

  const renderReviews = () => {
    if (!reviewsCardsGrid) return;
    const filtered = currentReviewCategory === 'all'
      ? reviewsData
      : reviewsData.filter(r => r.category === currentReviewCategory);

    reviewsCardsGrid.innerHTML = filtered.map(item => `
      <div class="review-card">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 0.25rem;">
              ${Array(item.rating).fill(`
                <svg class="lucide-icon" width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              `).join('')}
            </div>
            <span class="badge" style="background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe;">
              ${item.category}
            </span>
          </div>

          <p style="font-size: 0.9375rem; color: #334155; line-height: 1.625; font-style: italic;">
            "${item.quote}"
          </p>

          <div style="padding: 0.625rem 0.75rem; border-radius: 0.75rem; background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; font-size: 0.75rem; font-weight: 600; display: flex; align-items: center; gap: 0.375rem;">
            <svg class="lucide-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>${item.highlight}</span>
          </div>
        </div>

        <div style="padding-top: 1rem; border-top: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-size: 0.875rem; font-weight: 800; color: #0f172a;" class="font-heading">${item.author}</div>
            <div style="font-size: 0.75rem; color: #64748b;">${item.designation}</div>
            <div style="font-size: 0.75rem; font-weight: 600; color: #334155; display: flex; align-items: center; gap: 0.25rem; margin-top: 0.125rem;">
              <svg class="lucide-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>
              <span>${item.company}</span>
            </div>
          </div>
          <svg class="lucide-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" style="flex-shrink: 0;"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
        </div>
      </div>
    `).join('');
  };

  reviewFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      reviewFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentReviewCategory = btn.getAttribute('data-category');
      renderReviews();
    });
  });

  renderReviews();


  /* =========================================================================
     11. PILLAR DETAILS MODAL CONTROLLER (fu)
     ========================================================================= */
  const pillarModalBackdrop = document.getElementById('pillar-modal-backdrop');
  const pillarModalContent = document.getElementById('pillar-modal-content');
  const closePillarModalBtn = document.getElementById('close-pillar-modal-btn');

  const openPillarModal = (serviceId) => {
    const s = servicesData.find(item => item.id === serviceId);
    if (!s || !pillarModalContent) return;

    pillarModalContent.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div>
          <span class="badge badge-blue" style="margin-bottom: 0.5rem; width: fit-content;">${s.badge}</span>
          <h3 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; letter-spacing: -0.025em;" class="font-heading">${s.title}</h3>
          <p style="font-size: 0.875rem; font-weight: 600; color: #475569; margin-top: 0.25rem;">${s.headline}</p>
        </div>

        <p style="font-size: 0.8125rem; color: #475569; line-height: 1.6;">${s.description}</p>

        <!-- MineSolutions.AI Role Box -->
        <div style="padding: 1rem; border-radius: 1rem; background: linear-gradient(135deg, rgba(239,246,255,0.9), rgba(236,254,255,0.7)); border: 1px solid #bfdbfe; display: flex; flex-direction: column; gap: 0.375rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 700; color: #1e3a8a;" class="font-heading">
            <svg class="lucide-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
            <span>MineSolutions.AI Platform Coordination</span>
          </div>
          <p style="font-size: 0.75rem; color: #1e293b; line-height: 1.5;">${s.aiIntegration}</p>
        </div>

        <!-- 2 Columns: Capabilities & Deliverables -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div style="padding: 1rem; border-radius: 1rem; background: #f8fafc; border: 1px solid #e2e8f0;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.375rem;">
              <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>
              Core Capabilities
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${s.coreCapabilities.map(cap => `
                <div style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.75rem; color: #334155;">
                  <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" style="flex-shrink: 0; margin-top: 0.125rem;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <span>${cap}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="padding: 1rem; border-radius: 1rem; background: #f8fafc; border: 1px solid #e2e8f0;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.375rem;">
              <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b6d4"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
              Tangible Deliverables
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${s.deliverables.map(del => `
                <div style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.75rem; color: #334155;">
                  <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" style="flex-shrink: 0; margin-top: 0.125rem;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <span>${del}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Governance Framework Coverage -->
        <div>
          <span style="font-size: 0.6875rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.375rem;">
            Governance & Domain Alignment:
          </span>
          <div style="display: flex; flex-wrap: wrap; gap: 0.375rem;">
            ${s.regulatoryCoverage.map(tag => `
              <span style="padding: 0.25rem 0.625rem; border-radius: 0.5rem; background: #f1f5f9; border: 1px solid #e2e8f0; font-size: 0.6875rem; font-weight: 600; color: #1e293b;">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Footer Action -->
        <div style="padding-top: 1rem; border-top: 1px solid #f1f5f9; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem;">
          <span style="font-size: 0.75rem; color: #64748b;">Delivered directly or coordinated with authorised firms</span>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-outline" id="modal-close-inner-btn" style="height: 2.25rem; padding: 0 1rem; font-size: 0.75rem;">Close</button>
            <button class="btn btn-primary" id="modal-engage-inner-btn" data-title="${s.title}" style="height: 2.25rem; padding: 0 1.25rem; font-size: 0.75rem;">
              <span>Engage Pillar</span>
              <svg class="lucide-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    pillarModalBackdrop.classList.add('active');

    // Inner modal button handlers
    const closeInnerBtn = document.getElementById('modal-close-inner-btn');
    const engageInnerBtn = document.getElementById('modal-engage-inner-btn');
    if (closeInnerBtn) closeInnerBtn.addEventListener('click', closePillarModal);
    if (engageInnerBtn) {
      engageInnerBtn.addEventListener('click', () => {
        closePillarModal();
        openConsultationModal(s.title);
      });
    }
  };

  const closePillarModal = () => {
    if (pillarModalBackdrop) pillarModalBackdrop.classList.remove('active');
  };

  if (closePillarModalBtn) closePillarModalBtn.addEventListener('click', closePillarModal);
  if (pillarModalBackdrop) {
    pillarModalBackdrop.addEventListener('click', (e) => {
      if (e.target === pillarModalBackdrop) closePillarModal();
    });
  }

  // Delegated click for pillar cards
  document.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.view-pillar-btn');
    const engageBtn = e.target.closest('.engage-pillar-btn');

    if (viewBtn) {
      const id = viewBtn.getAttribute('data-id');
      openPillarModal(id);
    } else if (engageBtn) {
      const title = engageBtn.getAttribute('data-title');
      openConsultationModal(title);
    }
  });


  /* =========================================================================
     12. FULL POLICY MODAL VIEWER CONTROLLER (Sections 09-14)
     ========================================================================= */
  const policyModalBackdrop = document.getElementById('policy-modal-backdrop');
  const policyModalBody = document.getElementById('policy-modal-body');
  const closePolicyModalBtn = document.getElementById('close-policy-modal-btn');
  const policyTabButtons = document.querySelectorAll('.policy-tab-btn');
  let currentPolicyTab = 'privacy';

  const renderPolicyContent = (tabKey) => {
    currentPolicyTab = tabKey || currentPolicyTab;
    const p = policiesData[currentPolicyTab];
    if (!p || !policyModalBody) return;

    policyTabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === currentPolicyTab);
    });

    policyModalBody.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="padding-bottom: 0.5rem; border-bottom: 1px solid #f1f5f9;">
          <div style="font-size: 0.6875rem; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.05em;">${p.subtitle}</div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a;" class="font-heading">${p.title}</h3>
          <div style="font-size: 0.75rem; color: #64748b; margin-top: 0.125rem;">${p.effectiveDate}</div>
        </div>

        <div>
          ${p.html}
        </div>
      </div>
    `;
  };

  const openPolicyModal = (tabKey = 'privacy') => {
    currentPolicyTab = tabKey;
    renderPolicyContent(tabKey);
    if (policyModalBackdrop) policyModalBackdrop.classList.add('active');
  };

  const closePolicyModal = () => {
    if (policyModalBackdrop) policyModalBackdrop.classList.remove('active');
  };

  if (closePolicyModalBtn) closePolicyModalBtn.addEventListener('click', closePolicyModal);
  if (policyModalBackdrop) {
    policyModalBackdrop.addEventListener('click', (e) => {
      if (e.target === policyModalBackdrop) closePolicyModal();
    });
  }

  policyTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      renderPolicyContent(tab);
    });
  });

  // Global triggers for opening policies
  document.addEventListener('click', (e) => {
    const policyTrigger = e.target.closest('.open-policy-btn');
    if (policyTrigger) {
      e.preventDefault();
      const pTab = policyTrigger.getAttribute('data-policy') || 'privacy';
      openPolicyModal(pTab);
    }
  });

  const footerCookiePrefBtn = document.getElementById('footer-cookie-pref-btn');
  if (footerCookiePrefBtn) {
    footerCookiePrefBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openPolicyModal('cookies');
    });
  }


  /* =========================================================================
     13. COOKIE BANNER CONTROLLER (Section 15-C)
     ========================================================================= */
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAcceptBtn = document.getElementById('cookie-accept-btn');
  const cookieRejectBtn = document.getElementById('cookie-reject-btn');

  // Check stored preference
  const savedCookieChoice = localStorage.getItem('maintec_cookie_consent');
  if (!savedCookieChoice && cookieBanner) {
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 1200);
  }

  const dismissCookieBanner = (choice) => {
    localStorage.setItem('maintec_cookie_consent', choice);
    if (cookieBanner) cookieBanner.classList.remove('show');
    showToast(
      choice === 'accepted' ? 'Cookie Preferences Saved' : 'Optional Cookies Declined',
      choice === 'accepted' ? 'Optional analytics preferences have been recorded.' : 'Strictly necessary cookies only are active.'
    );
  };

  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener('click', () => dismissCookieBanner('accepted'));
  }
  if (cookieRejectBtn) {
    cookieRejectBtn.addEventListener('click', () => dismissCookieBanner('rejected'));
  }


  /* =========================================================================
     14. MULTI-STEP CONSULTATION BOOKING MODAL (Mu)
     ========================================================================= */
  const consultationModalBackdrop = document.getElementById('consultation-modal-backdrop');
  const closeConsultationModalBtn = document.getElementById('close-consultation-modal-btn');
  const step1 = document.getElementById('consultation-step-1');
  const step2 = document.getElementById('consultation-form');
  const step1NextBtn = document.getElementById('step-1-next-btn');
  const step2BackBtn = document.getElementById('step-2-back-btn');
  const pillarSelectButtons = document.querySelectorAll('.pillar-select-btn');

  let selectedPillars = ['Finance & Capital Funding', 'Strategic Business Advisory'];

  const openConsultationModal = (defaultPillar) => {
    if (defaultPillar) {
      selectedPillars = [defaultPillar];
      pillarSelectButtons.forEach(btn => {
        const p = btn.getAttribute('data-pillar');
        const isSelected = p === defaultPillar;
        btn.classList.toggle('selected', isSelected);
        if (isSelected && !btn.querySelector('svg')) {
          btn.innerHTML = `<span>${p}</span><svg class="lucide-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
        } else if (!isSelected) {
          btn.innerHTML = `<span>${p}</span>`;
        }
      });
    }

    if (step1 && step2) {
      step1.style.display = 'flex';
      step2.style.display = 'none';
    }

    if (consultationModalBackdrop) consultationModalBackdrop.classList.add('active');
  };

  const closeConsultationModal = () => {
    if (consultationModalBackdrop) consultationModalBackdrop.classList.remove('active');
  };

  if (closeConsultationModalBtn) closeConsultationModalBtn.addEventListener('click', closeConsultationModal);
  if (consultationModalBackdrop) {
    consultationModalBackdrop.addEventListener('click', (e) => {
      if (e.target === consultationModalBackdrop) closeConsultationModal();
    });
  }

  // Pillar multi-selection logic
  pillarSelectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.getAttribute('data-pillar');
      if (selectedPillars.includes(p)) {
        if (selectedPillars.length > 1) {
          selectedPillars = selectedPillars.filter(item => item !== p);
          btn.classList.remove('selected');
          btn.innerHTML = `<span>${p}</span>`;
        }
      } else {
        selectedPillars.push(p);
        btn.classList.add('selected');
        btn.innerHTML = `<span>${p}</span><svg class="lucide-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
      }
    });
  });

  // Step 1 -> Step 2
  if (step1NextBtn) {
    step1NextBtn.addEventListener('click', () => {
      if (step1 && step2) {
        step1.style.display = 'none';
        step2.style.display = 'flex';
      }
    });
  }

  // Step 2 -> Step 1
  if (step2BackBtn) {
    step2BackBtn.addEventListener('click', () => {
      if (step1 && step2) {
        step1.style.display = 'flex';
        step2.style.display = 'none';
      }
    });
  }

  // Form submit & toast
  if (step2) {
    step2.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const company = document.getElementById('form-company').value;
      const consentPrivacy = document.getElementById('consent-privacy');

      if (!name || !email || !company) {
        showToast('Required fields missing', 'Please fill in your name, corporate email, and company name.');
        return;
      }

      if (consentPrivacy && !consentPrivacy.checked) {
        showToast('Privacy Consent Required', 'Please accept the Privacy Policy to proceed with enquiry submission.');
        return;
      }

      closeConsultationModal();
      showToast(
        'Advisory Enquiry Confirmed!',
        `Thank you ${name}. Maintec’s leadership will review your enquiry for ${company} and respond via ${email}.`
      );

      // Reset form
      step2.reset();
    });
  }

  // Bind All Direct CTA Buttons Across Header, Hero, About, Tech, CTA, Footer
  const bookBtns = [
    'btn-book-consultation-header',
    'hero-btn-book',
    'about-btn-partner',
    'tech-btn-demo',
    'cta-btn-book',
    'footer-btn-briefing',
    'drawer-btn-consultation'
  ];

  bookBtns.forEach(id => {
    const b = document.getElementById(id);
    if (b) b.addEventListener('click', () => openConsultationModal());
  });

  const exploreBtns = [
    'btn-explore-services-header',
    'hero-btn-services',
    'cta-btn-services',
    'drawer-btn-services'
  ];

  exploreBtns.forEach(id => {
    const b = document.getElementById(id);
    if (b) b.addEventListener('click', () => scrollToTarget('#services'));
  });


  /* =========================================================================
     15. TOAST NOTIFICATION SYSTEM
     ========================================================================= */
  const toastContainer = document.getElementById('toast-container');

  const showToast = (title, description) => {
    if (!toastContainer) return;

    const toastEl = document.createElement('div');
    toastEl.className = 'toast';
    toastEl.innerHTML = `
      <svg class="toast-success-icon lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
      <div>
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
      </div>
    `;

    toastContainer.appendChild(toastEl);

    setTimeout(() => {
      toastEl.style.opacity = '0';
      toastEl.style.transform = 'translateY(10px)';
      toastEl.style.transition = 'all 0.3s ease';
      setTimeout(() => { toastEl.remove(); }, 300);
    }, 5000);
  };

});
