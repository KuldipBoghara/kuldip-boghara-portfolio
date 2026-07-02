import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    icon: '🌐',
    title: 'Global Recruitment Platform',
    desc: 'A comprehensive full-stack recruitment platform connecting job seekers, employers, and administrators. Candidates can search and apply for jobs, employers can post job openings and request verification, and administrators manage the moderation pipeline through a secure role-based admin panel.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'RBAC'],
    github: '',
    live: 'https://globalhrllc.com/',
    featured: true,
    highlights: ['Candidate & Employer Portals', 'Admin Moderation Workflow', 'Role-Based Access Control', 'Full-Stack Development'],
    color: '#00F5FF',
    gradient: 'from-cyan-500/10 to-violet-600/10',
  },
  {
    icon: '📰',
    title: 'ANRA News Platform',
    desc: 'A content-rich news technology platform with an administrative dashboard for publishing and scheduling news articles. Built with a custom rich text editor for editorial management and a robust dynamic CMS for full website content control.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Custom Editor', 'CMS'],
    github: '',
    live: 'https://stage.qadam.com/',
    featured: true,
    highlights: ['Custom Editor Integration', 'CMS Page & Banner Management', 'Dynamic Publishing Controls', 'Role-Based Dashboard'],
    color: '#7C3AED',
    gradient: 'from-violet-600/10 to-pink-600/10',
  },
  {
    icon: '🖨️',
    title: '3D Print Quotation App',
    desc: 'A custom e-commerce and estimation application built single-handedly from scratch. It features an automated quotation engine where customers upload design files to receive real-time estimates, coupled with an admin dashboard for material pricing and inventory control.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Three.js', 'Automated Quoter'],
    github: '',
    live: '',
    featured: true,
    highlights: ['Built Single-Handedly From Scratch', 'Automated Pricing Engine', 'Design File Upload Estimator', 'Admin Material Management'],
    color: '#4ade80',
    gradient: 'from-green-500/10 to-teal-600/10',
  },
  {
    icon: '🧪',
    title: 'Compliance & Drug Screening Platform',
    desc: 'A secure, multi-tenant compliance platform allowing employers to perform background checks, drug screenings, and history verification. Enables employers to register, invite recruiters, schedule laboratory test appointments, and safely handle candidate screening data.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC', 'Appointment Booking'],
    github: '',
    live: '',
    featured: false,
    highlights: ['Multi-Tenant Roles', 'Lab Booking & Appointments', 'Background Check Pipeline', 'Secure & Confidential'],
    color: '#74AA9C',
    gradient: 'from-emerald-500/10 to-cyan-600/10',
  },
  {
    icon: '🏨',
    title: 'Adroit Hospitality',
    desc: 'A premium hospitality showcase website with dynamic service listings and modern user interface designs. Developed the frontend user interface and integrated a Strapi headless CMS backend for simple client content updates.',
    tags: ['React.js', 'Strapi CMS', 'Tailwind CSS', 'REST API', 'UI/UX Design'],
    github: '',
    live: 'https://adroitconnecthospitality.com/',
    featured: false,
    highlights: ['Strapi Headless CMS', 'Dynamic Content API', 'Modern Responsive Layout', 'Optimized Asset Loading'],
    color: '#FF6B2B',
    gradient: 'from-orange-500/10 to-red-600/10',
  },
  {
    icon: '🏗️',
    title: 'Aaradhya Building Solutions',
    desc: 'An engineering and MEP consultancy portfolio website designed for high responsiveness. Powered by a custom Strapi headless CMS to manage dynamic service categories, portfolios, and contact details.',
    tags: ['React.js', 'Strapi CMS', 'Tailwind CSS', 'MEP Portfolio', 'Headless Architecture'],
    github: '',
    live: 'https://absmep.com/',
    featured: false,
    highlights: ['Strapi Headless CMS', 'Consultancy Portfolio Design', 'Clean Component Architecture', 'API Data Integration'],
    color: '#FF6B2B',
    gradient: 'from-red-500/10 to-orange-600/10',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{
        background: `radial-gradient(circle at top left, rgba(15,23,42,0.9), rgba(15,23,42,0.95))`,
      }}
    >
      {project.featured && (
        <div className="project-featured-badge">✦ Featured</div>
      )}

      <div className="project-card-header">
        <div className="project-icon" style={{ borderColor: project.color + '30', background: project.color + '10' }}>
          {project.icon}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Demo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.highlights.map(h => (
            <span key={h}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono"
              style={{ color: project.color, background: project.color + '12', border: `1px solid ${project.color}25` }}
            >
              ✓ {h}
            </span>
          ))}
        </div>

        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section" ref={sectionRef}
      style={{ background: 'rgba(15,23,42,0.2)' }}>

      <div className="glow-orb glow-violet absolute w-96 h-96 top-1/2 right-0 pointer-events-none"
        style={{ filter: 'blur(120px)', opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center mb-2">featured work</p>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            From recruitment platforms to AI-powered apps — each project solves a real problem.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/KuldipBoghara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            See all repositories on GitHub
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
