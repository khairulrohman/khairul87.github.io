import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Marketing Campaign Performance Analysis Using SQL',
        description: 'Analyzed marketing campaign performance using SQL to identify the most profitable channels and campaigns. Delivered data-driven recommendations to optimize budget allocation based on key metrics such as ROAS, CTR, and conversion rate.',
        tags: ['SQL', 'SQL Server'],
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        accent: '#3b82f6',
        iconBg: 'linear-gradient(135deg, #1e40af, #3b82f6)',
        iconShadow: '#3b82f6',
        iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'Automated ETL Pipeline',
        description: 'Built a data integration and cleansing pipeline to consolidate customer data from multiple systems into a reliable single source of truth.',
        tags: ['SQL', 'SQL Server'],
        gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #4c1d95 100%)',
        accent: '#8b5cf6',
        iconBg: 'linear-gradient(135deg, #4c1d95, #8b5cf6)',
        iconShadow: '#8b5cf6',
        iconEmoji: '📅',
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'Credit Risk Analysis',
        description: 'Developed a credit risk profiling model to estimate the probability of default and support more informed lending decisions.',
        tags: ['Python', 'Tableau'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconEmoji: '💊',
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Customer Retention & Churn Insight',
        description: 'Analyzed customer churn drivers and developed data-driven retention strategies to reduce customer attrition.',
        tags: ['Tableau'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconEmoji: '🏆',
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Automated Data Pipeline',
        description: 'Automated data consolidation and cleansing solution that integrates 10+ data sources into a centralized real-time dashboard, reducing processing time by 95% and improving data accuracy to 99.2%.',
        tags: ['Apps Script', 'Google Sheet'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconEmoji: '🏆',
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Automated Collection System',
        description: 'Payment reminder automation system that automatically detects due dates and sends personalized email notifications, reducing manual effort by 95%.',
        tags: ['Apps Script', 'Google Sheet'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconEmoji: '🏆',
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Auto Certificate Express',
        description: 'Automated certificate generation and mass email distribution platform that reduced processing time by over 95%, eliminated manual errors, and improved participant experience.',
        tags: ['Apps Script', 'Google Sheet', 'Google Slide'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconEmoji: '🏆',
        link: '#',
        github: '#'
    }
];

function Projects() {
    return (
        <section className="projects-section container" id="projects">
            <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Technical Projects
</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">

                        <div className="project-banner" style={{ background: project.gradient }}>
                            <div
                                className="project-icon-wrapper"
                                style={{
                                    background: project.iconBg,
                                    boxShadow: `0 8px 32px ${project.iconShadow}80, 0 0 0 1px ${project.iconShadow}30`,
                                }}
                            >
                                <div
    className="project-icon-wrapper"
    style={{
        background: project.iconBg,
        boxShadow: `0 8px 32px ${project.iconShadow}80, 0 0 0 1px ${project.iconShadow}30`,
    }}
>
    {project.iconImage ? (
        <img
            src={project.iconImage}
            alt={project.title}
            className="project-icon-image"
        />
    ) : (
        <span className="project-icon">
            {project.iconEmoji}
        </span>
    )}
</div>
                            </div>
                            <div className="banner-glow" style={{ background: project.accent }}></div>
                        </div>

                        <div className="project-body">
                            <h3 className="project-title" style={{ '--accent': project.accent }}>
                                {project.title}
                            </h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag" style={{ '--accent': project.accent }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links" style={{ '--accent': project.accent }}>
                            <a
                                href={project.link}
                                className="proj-btn proj-btn-primary"
                                style={{ background: project.accent, boxShadow: `0 4px 14px ${project.accent}40` }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExternalLink size={16} />
                                View Project
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;