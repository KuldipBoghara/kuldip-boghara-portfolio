const shot = (file, caption, fit) => ({ src: `/images/work/${file}.webp`, caption, fit });

// type: 'site' = public business website, 'app' = admin panel / platform behind a login
export const projects = [
  {
    title: 'Branding Portal',
    type: 'app',
    kind: 'Platform · admin panel + API',
    meta: 'European cloud-storage vendor · 2026',
    summary:
      "Customers of a file-sync product configure white-label versions of its iOS, Android and desktop apps here, then build, sign and download them without anyone at the vendor touching a build machine.",
    points: [
      'Signing keys and certificates go into OpenBao. The portal can write them but never read them back.',
      'Build dispatches a GitHub Actions workflow per brand. Runners prove who they are with GitHub OIDC before any secret is released.',
      'Owner and Member roles, email invitations, an append-only audit log, English and German UI.',
      'A watchdog job closes stalled builds and emails whoever started them.',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind', 'Node / Express', 'MongoDB', 'OpenBao', 'GitHub Actions', 'Docker'],
    shots: [
      shot('branding-portal-1', 'Brands overview'),
      shot('branding-portal-2', 'Branding setup, colours step with a live app preview'),
      shot('branding-portal-3', 'Signing material is write-only. Only checksum and expiry are shown'),
      shot('branding-portal-4', 'Build history across iOS, Android and desktop'),
    ],
  },
  {
    title: 'Adroit Connect Hospitality',
    type: 'site',
    kind: 'Business website · headless CMS',
    meta: 'Hotel consultancy, India · live',
    summary:
      'Company website for a hotel development and brand consultancy. I built the Next.js front end and the Strapi CMS the client uses to run the site themselves.',
    points: [
      'About 20 Strapi content types: services, projects, hotels, blog, gallery, team, FAQ, legal pages.',
      'Brochure download, WhatsApp chat and enquiry forms on every page.',
      'Built mobile-first and checked from small phones up to wide desktops.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Strapi'],
    live: 'https://adroitconnecthospitality.com/',
    shots: [
      shot('adroit-1', 'Home page'),
      shot('adroit-3', 'Services'),
      shot('adroit-mobile', 'The same pages on a phone', 'contain'),
    ],
  },
  {
    title: 'Omega — production planning',
    type: 'app',
    kind: 'Operations platform · admin panel + API',
    meta: 'Elevator manufacturer, India · 2026',
    summary:
      'Shop-floor planner for an elevator factory. Every lift order becomes a planning sheet of tasks per department, assigned to workers, with delays flagged automatically.',
    points: [
      'Planning spreadsheet per order: tasks by department, drag to reorder, PPC Excel import.',
      'An hourly cron sweep marks overdue work and sends push notifications through a Bull queue.',
      'Attendance and shifts, with face enrolment through AWS Rekognition.',
      'Department and worker productivity reports, exported to Excel and PDF.',
    ],
    stack: ['React 19', 'Tailwind', 'RTK Query', 'Node / Express', 'MongoDB', 'Bull', 'Firebase', 'AWS'],
    shots: [
      shot('omega-1', 'Production dashboard'),
      shot('omega-2', 'Lift code orders'),
      shot('omega-3', 'Planning spreadsheet for one order'),
    ],
  },
  {
    title: 'Aaradhya Building Solutions',
    type: 'site',
    kind: 'Business website · headless CMS',
    meta: 'HVAC & MEP contractor, India · live',
    summary:
      'Website for an authorised Blue Star HVAC dealer. Products, services, clients and a quote request, with the content managed in Strapi.',
    points: [
      'Quote and call buttons kept in reach on every page.',
      'Product, service and client sections driven by the CMS.',
      'Responsive layout tuned for people finding them on their phones.',
    ],
    stack: ['React', 'Tailwind', 'Strapi'],
    live: 'https://absmep.com/',
    shots: [
      shot('abs-1', 'Home page'),
      shot('abs-2', 'Services'),
      shot('abs-mobile', 'On a phone', 'contain'),
    ],
  },
  {
    title: 'Green Monkey',
    type: 'app',
    kind: 'Operations platform · admin + property-manager portal',
    meta: 'Apartment services company, USA',
    summary:
      'Back office for a company running doorstep trash and junk-removal services across apartment communities. Porters log violations in the field; property managers review them in their own portal.',
    points: [
      'Violations with photos, a tracking timeline, PDF export and configurable escalation steps.',
      'Complaints and junk-removal quotes, each with its own status flow.',
      'Employee schedules and timesheets, with clock-ins checked against a property radius.',
      'Notification service on RabbitMQ for push, web push and email.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind', 'Node microservices', 'MongoDB', 'RabbitMQ', 'AWS'],
    shots: [
      shot('green-monkey-1', 'Admin dashboard'),
      shot('green-monkey-2', 'Violations list with filters'),
      shot('green-monkey-3', 'Violation detail and tracking'),
    ],
  },
  {
    title: 'Yellow Sapphire Real Estate',
    type: 'site',
    kind: 'Business website + admin CMS + API',
    meta: 'Property leasing company, Dubai · 2026',
    summary:
      "Public website, admin panel and API for a Dubai leasing company. Listings, search and enquiry forms on the front; leads and every page's content managed from the back.",
    points: [
      'Property search by category, type, location, bedrooms and budget.',
      'Enquiries with status, notes, CSV export and email alerts.',
      'Per-page SEO tags, JSON-LD and a generated sitemap. Analytics loads only after cookie consent.',
      'JWT with an httpOnly refresh cookie, rate limits, validation and HTML sanitising.',
    ],
    stack: ['React 19', 'Tailwind', 'RTK Query', 'TipTap', 'Node / Express', 'MongoDB'],
    shots: [
      shot('yellow-sapphire-1', 'Public home page'),
      shot('yellow-sapphire-2', 'Admin dashboard'),
      shot('yellow-sapphire-3', 'Enquiries from every website form'),
    ],
  },
  {
    title: 'MedEquip360',
    type: 'app',
    kind: 'SaaS platform · multi-tenant',
    meta: 'Hospital equipment management · 2026',
    summary:
      'Tracks every medical device across hospitals: QR tags, breakdown tickets, preventive maintenance, spares and downtime KPIs. Each hospital is its own isolated tenant.',
    points: [
      'Service-request workflow with about 20 states, vendor outsourcing and approvals.',
      'QR tag batches of up to 1,000 that open the asset page when scanned.',
      'Preventive maintenance schedules, low-stock alerts, MTTR and uptime reports.',
      'Seven roles with a permission matrix, TOTP two-factor login and an audit trail.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'RTK Query', 'Express 5', 'PostgreSQL', 'Prisma', 'S3'],
    shots: [
      shot('medequip-1', 'Biomedical dashboard'),
      shot('medequip-2', 'Service requests'),
      shot('medequip-3', 'Asset profile with QR tag and service history'),
    ],
  },
  {
    title: 'PISTIS',
    type: 'app',
    kind: 'B2B marketplace · four portals',
    meta: 'Vendor trust network · pilot',
    summary:
      'Companies find verified technology vendors, compare proposals side by side, sign a contract and run the project to the last milestone, all in one place.',
    points: [
      'Provider verification queue with approve, reject and request-info decisions.',
      'Proposal comparison that highlights where offers differ.',
      'Typed-signature contracts and milestone tracking.',
      'Live notifications over Server-Sent Events. Filterable audit log with CSV export.',
    ],
    stack: ['React 19', 'Tailwind', 'RTK Query', 'TipTap', 'Node / Express', 'MongoDB', 'Swagger'],
    shots: [
      shot('pistis-1', 'Admin dashboard'),
      shot('pistis-2', 'Comparing three proposals'),
      shot('pistis-3', 'Provider verification'),
    ],
  },
];

export const alsoBuilt =
  'Drug-screening and background-check portal for employers (Stripe billing, lab appointments, six roles) · recruitment platform with candidate, employer and admin portals · news CMS with scheduled publishing · 3D-print quoting app that prices uploaded models.';

export const jobs = [
  {
    role: 'MERN Stack Developer',
    company: 'Latitude Technolabs',
    place: 'Ahmedabad, India',
    period: 'Sep 2025 — now',
    points: [
      'Lead a backend team of two and work across admin panels and customer-facing front ends.',
      'Build React + Node.js + MongoDB apps end to end: schemas, REST APIs, RTK Query front ends.',
      'JWT auth and role-based access on every project; APIs documented in Swagger.',
      'Most of the projects above were built here.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Digital Attractions (CN Tower)',
    place: 'Toronto, Canada',
    period: 'Aug 2023 — Apr 2025',
    points: [
      'Owned customer-facing web apps through the whole cycle, from requirements to release.',
      'Built UI in React and Redux and moved the front-end build over to TypeScript.',
      'Responsive single-page apps with Material UI; prepared MySQL data for regression and end-to-end testing.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Harsh Infotech',
    place: 'Scarborough, Canada',
    period: 'Jan 2022 — Jul 2023',
    points: [
      'Responsive React and Redux interfaces with Bootstrap and Material UI.',
      'Worked with the backend team on API design and wrote MongoDB service layers.',
    ],
  },
];

export const education = [
  ['Advanced Diploma, Computer Systems Technology', 'Centennial College, Toronto', '2020 — 2021'],
  ['B.Tech, Computer Engineering', 'CHARUSAT University, Gujarat', '2015 — 2019'],
];

export const skills = [
  ['Front end', 'React, Next.js, TypeScript, Redux Toolkit / RTK Query, Tailwind CSS, Material UI, Bootstrap'],
  ['Back end', 'Node.js, Express, NestJS, REST APIs, Swagger, Socket.io, Server-Sent Events'],
  ['Data', 'MongoDB & Mongoose (aggregation), PostgreSQL & Prisma, MySQL, Redis'],
  ['Auth & security', 'JWT with refresh cookies, RBAC, OAuth, TOTP 2FA, OpenBao, rate limiting, input validation'],
  ['CMS', 'Strapi, custom admin CMS builds, TipTap rich-text editing'],
  ['Shipping', 'Docker, GitHub Actions, Jenkins, AWS (EC2, S3, Lambda), Vercel, Netlify'],
];
