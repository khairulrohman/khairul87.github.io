import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Professional Experience
</h2>
      <div className="timeline">
        <div className="timeline-item">

          {/* Top Accent Bar */}
          <div className="card-accent-bar"></div>

          <div className="card-body">

            {/* Header Row */}
            <div className="job-header">
              <h3 className="job-title">Credit Analyst - Data & Reporting Support</h3>
              <div className="live-badge">
                <span className="live-dot"></span>
                <span>Live</span>
              </div>
            </div>

            <p className="company">
              PT Moladin Finance — Jakarta
            </p>

            <div className="card-divider"></div>

            {/* Date Row */}
            <div className="date-row">
              <span className="duration">Mar 2023 – Jul 2024</span>
              <span className="date-right">Mar 2023 – Jul 2024</span>
            </div>

            {/* Tech Tags */}
            <div className="tech-row">
              <span className="tech-tag tag-react">SQL</span>
              <span className="tech-tag tag-node">Power BI</span>
              <span className="tech-tag tag-mongo">Excel</span>
              <span className="tech-tag tag-express">Apps Script</span>
            </div>

            {/* Two-Column Description */}
            <ul className="job-description">
              <li>Extracted, validated, and analyzed prospective customer data using SQL to support creditworthiness assessments and large-scale credit bureau checking processes.</li>
              <li>Developed automated workflows using Google Apps Script to collect, validate, and distribute credit bureau data for prospective customers, improving operational efficiency and reducing manual effort.</li>
              <li>Reduced data verification time from 1 hour to 20 minutes by automating data cleansing and batch processing activities, increasing operational efficiency by 40%.</li>
              <li>Developed Power BI dashboards to monitor credit quality, approval rates, and portfolio performance, supporting risk monitoring and management decision-making.</li>
              <li>Identified operational bottlenecks and translated analytical findings into actionable recommendations to improve process efficiency and risk monitoring.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">

          {/* Top Accent Bar */}
          <div className="card-accent-bar"></div>

          <div className="card-body">

            {/* Header Row */}
            <div className="job-header">
              <h3 className="job-title">MIS Staff - IT & Reporting Support</h3>
              <div className="live-badge">
                <span className="live-dot"></span>
                <span>Live</span>
              </div>
            </div>

            <p className="company">
              PT Procar International Finance — Jakarta
            </p>

            <div className="card-divider"></div>

            {/* Date Row */}
            <div className="date-row">
              <span className="duration">Feb 2015 – Feb 2024</span>
              <span className="date-right">Feb 2015 – Feb 2024</span>
            </div>

            {/* Tech Tags */}
            <div className="tech-row">
              <span className="tech-tag tag-react">SQL</span>
              <span className="tech-tag tag-node">Power BI</span>
              <span className="tech-tag tag-mongo">Excel</span>
              <span className="tech-tag tag-express">Apps Script</span>
            </div>

            {/* Two-Column Description */}
            <ul className="job-description">
              <li>Extracted, validated, and processed operational, payment, and portfolio data using SQL Server to support business reporting and analytics requirements.</li>
              <li>Prepared and analyzed monthly performance reports covering sales, portfolio distribution, and payment delinquency trends, providing management visibility across 30 branches.</li>
              <li>Developed KPI dashboards using Microsoft Excel and Power BI to monitor branch performance and operational metrics, supporting performance evaluation and decision-making.</li>
              <li>Analyzed payment and collection trends to generate insights for Collection, Marketing, and Operations teams.</li>
              <li>Ensured data accuracy and report availability by auditing more than 9,000 transactions daily.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">

          {/* Top Accent Bar */}
          <div className="card-accent-bar"></div>

          <div className="card-body">

            {/* Header Row */}
            <div className="job-header">
              <h3 className="job-title">Broadcast Development Staff</h3>
              <div className="live-badge">
                <span className="live-dot"></span>
                <span>Live</span>
              </div>
            </div>

            <p className="company">
              PT MNC Sky Vision INDOVISION — Jakarta
            </p>

            <div className="card-divider"></div>

            {/* Date Row */}
            <div className="date-row">
              <span className="duration">Mar 2011 – Mar 2014</span>
              <span className="date-right">Mar 2011 – Mar 2014</span>
            </div>

            {/* Tech Tags */}
            <div className="tech-row">
              <span className="tech-tag tag-react">SQL</span>
              <span className="tech-tag tag-mongo">Excel</span>
            </div>

            {/* Two-Column Description */}
            <ul className="job-description">
              <li>Managed data upload, validation, and monitoring processes to ensure consistency and accuracy of operational information within internal systems.</li>
              <li>Participated in User Acceptance Testing (UAT) and documented business requirements to support system development initiatives.</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;