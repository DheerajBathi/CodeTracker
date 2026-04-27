import { useState, useEffect } from 'react';
import {
  Activity, BarChart3, ShieldCheck, Users, FileText, ArrowRight,
  CheckCircle2, Globe, RefreshCw, Trophy, Eye, Lock, Download,
  Database, TrendingUp, Layers, Zap, BookOpen, GraduationCap,
  Building2, Settings, GitFork, Mail, ExternalLink, Code2, Menu, X,
  ChevronRight, Monitor, Server, CircuitBoard
} from 'lucide-react';
import './LandingPage.css';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo">
            <span className="logo-icon"><Code2 size={20} /></span>
            CodeTracker
          </a>

          <div className="navbar-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#roles">Roles</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#contact" className="navbar-cta">Get Started</a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero" id="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Unified Coding Performance Intelligence
            </div>

            <h1>
              Track, Analyze &amp; Rank <span>Coding Performance</span> Across Every Platform
            </h1>

            <p className="hero-subtitle">
              CodeTracker aggregates coding activity from different platforms and converts raw data into
              structured analytics, rankings, and actionable insights for your institution.
            </p>

            <p className="hero-value">
              One platform to replace spreadsheets, manual tracking, and fragmented reports.
              Built for students, faculty, HODs, and administrators.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Request a Demo <ArrowRight size={18} />
              </a>
              <a href="#features" className="btn-secondary">
                Explore Features <ChevronRight size={18} />
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">5+</span>
                <span className="hero-stat-label">Platforms Integrated</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">4</span>
                <span className="hero-stat-label">User Roles</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">Real-Time</span>
                <span className="hero-stat-label">Data Syncing</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-dashboard-preview">
              <div className="preview-topbar">
                <span className="preview-dot red"></span>
                <span className="preview-dot yellow"></span>
                <span className="preview-dot green"></span>
              </div>
              <div className="preview-content">
                <div className="preview-header-row">
                  <span className="preview-title">Student Performance Dashboard</span>
                  <span className="preview-live-badge">
                    <span className="preview-live-dot"></span>
                    LIVE
                  </span>
                </div>

                <div className="preview-stats-row">
                  <div className="preview-stat-card">
                    <div className="label">Problems Solved</div>
                    <div className="value">847</div>
                    <div className="change">↑ 12% this month</div>
                  </div>
                  <div className="preview-stat-card">
                    <div className="label">Ranking</div>
                    <div className="value">#3</div>
                    <div className="change">↑ 2 positions</div>
                  </div>
                  <div className="preview-stat-card">
                    <div className="label">Active Streak</div>
                    <div className="value">28d</div>
                    <div className="change">Personal best</div>
                  </div>
                </div>

                <div className="preview-chart">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <div key={i} className="chart-bar" style={{ height: `${h}%` }} />
                  ))}
                </div>

                <div className="preview-ranking-rows">
                  <div className="ranking-row">
                    <span className="ranking-rank">#1</span>
                    <span className="ranking-name">Priya Sharma</span>
                    <span className="ranking-score">1,245</span>
                  </div>
                  <div className="ranking-row">
                    <span className="ranking-rank">#2</span>
                    <span className="ranking-name">Rahul Verma</span>
                    <span className="ranking-score">1,198</span>
                  </div>
                  <div className="ranking-row">
                    <span className="ranking-rank">#3</span>
                    <span className="ranking-name">Ananya Gupta</span>
                    <span className="ranking-score">1,102</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-floating-card card-1">
              <div className="floating-card-label">Synced Platforms</div>
              <div className="floating-card-value">5 Active</div>
            </div>

            <div className="hero-floating-card card-2">
              <div className="floating-card-label">Verified Profiles</div>
              <div className="floating-card-value">100%</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROBLEM ═══════════ */}
      <section className="section section-alt" id="problem">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Problem</span>
            <h2 className="section-title">Why Tracking Coding Performance Is Broken</h2>
            <p className="section-subtitle">
              Educational institutions struggle with fragmented data, manual processes,
              and zero visibility into actual student coding activity.
            </p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon"><Layers size={24} /></div>
              <h3>Fragmented Coding Data</h3>
              <p>
                Students practice on LeetCode, CodeChef, GFG, HackerRank, and GitHub.
                Each platform stores data in isolation with no way to get a unified view
                of a student&apos;s actual coding effort.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon"><Eye size={24} /></div>
              <h3>No Institutional Visibility</h3>
              <p>
                Faculty and HODs have no reliable mechanism to monitor student coding
                activity. There&apos;s no single dashboard that shows who is practicing,
                how much, and on which platform.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon"><FileText size={24} /></div>
              <h3>Manual Tracking Is Unsustainable</h3>
              <p>
                Collecting screenshots, spreadsheets, and self-reported data wastes
                faculty time, introduces errors, and doesn&apos;t scale beyond a handful
                of students.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon"><BarChart3 size={24} /></div>
              <h3>No Standard Evaluation</h3>
              <p>
                Without normalized metrics, institutions can&apos;t fairly compare
                student performance across platforms. A student solving 100 problems
                on LeetCode isn&apos;t directly comparable to 100 on CodeChef.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SOLUTION ═══════════ */}
      <section className="section" id="solution">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Solution</span>
            <h2 className="section-title">One Platform. Complete Clarity.</h2>
            <p className="section-subtitle">
              CodeTracker replaces disconnected tools with a centralized, automated,
              and intelligent performance tracking system.
            </p>
          </div>

          <div className="solution-content">
            <div className="solution-text">
              <h3>Automated Intelligence, Not Manual Effort</h3>
              <p>
                CodeTracker connects directly to coding platforms, automatically
                collects activity data, normalizes it for fair comparison, and
                generates real-time analytics that faculty and administrators
                can act on.
              </p>

              <div className="solution-points">
                <div className="solution-point">
                  <div className="solution-point-icon"><Globe size={18} /></div>
                  <div className="solution-point-content">
                    <h4>Centralized Aggregation</h4>
                    <p>All platform data flows into a single source of truth, eliminating silos and manual collection.</p>
                  </div>
                </div>
                <div className="solution-point">
                  <div className="solution-point-icon"><RefreshCw size={18} /></div>
                  <div className="solution-point-content">
                    <h4>Automated Syncing</h4>
                    <p>Scheduled and on-demand data collection ensures dashboards always reflect current student activity.</p>
                  </div>
                </div>
                <div className="solution-point">
                  <div className="solution-point-icon"><TrendingUp size={18} /></div>
                  <div className="solution-point-content">
                    <h4>Normalized Analytics</h4>
                    <p>Performance scores are standardized across platforms so comparisons are fair and meaningful.</p>
                  </div>
                </div>
                <div className="solution-point">
                  <div className="solution-point-icon"><ShieldCheck size={18} /></div>
                  <div className="solution-point-content">
                    <h4>Role-Based Governance</h4>
                    <p>Students, faculty, HODs, and admins each see exactly what they need — nothing more, nothing less.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="solution-visual">
              <div className="solution-diagram">
                <div className="diagram-center">
                  <div className="diagram-spokes">
                    <span className="diagram-spoke">LeetCode</span>
                    <span className="diagram-spoke">CodeChef</span>
                    <span className="diagram-spoke">GFG</span>
                    <span className="diagram-spoke">HackerRank</span>
                    <span className="diagram-spoke">GitHub</span>
                  </div>
                  <div className="diagram-arrow" />
                  <div className="diagram-hub">
                    Code<br />Tracker
                  </div>
                  <div className="diagram-arrow" />
                  <div className="diagram-output">
                    <span className="diagram-output-item">Analytics</span>
                    <span className="diagram-output-item">Rankings</span>
                    <span className="diagram-output-item">Reports</span>
                    <span className="diagram-output-item">Insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className="section section-alt" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Features</span>
            <h2 className="section-title">Everything You Need to Track Coding Performance</h2>
            <p className="section-subtitle">
              A complete toolkit for collecting, analyzing, and acting on student
              coding data — without manual work.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Database size={24} /></div>
              <h3>Automated Data Aggregation</h3>
              <p>
                Connects to LeetCode, CodeChef, GeeksforGeeks, HackerRank, and GitHub.
                Automatically scrapes and syncs coding activity — problems solved,
                contests, contributions, and streaks.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Activity size={24} /></div>
              <h3>Real-Time Analytics</h3>
              <p>
                Live dashboards display individual and aggregate performance metrics.
                Track progress over time, identify trends, and spot students who
                need attention.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Trophy size={24} /></div>
              <h3>Ranking System</h3>
              <p>
                Normalized scoring engine ranks students fairly across platforms.
                Department-level and institution-level leaderboards encourage healthy
                competition and highlight top performers.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Lock size={24} /></div>
              <h3>Role-Based Access Control</h3>
              <p>
                Four distinct roles — Student, Faculty, HOD, and Admin — each with
                purpose-built dashboards and permissions. Every user sees exactly
                what they need.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><ShieldCheck size={24} /></div>
              <h3>Profile Verification</h3>
              <p>
                Built-in verification workflows ensure that platform usernames
                submitted by students are authentic. Faculty can approve, reject,
                or flag profiles for review.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Download size={24} /></div>
              <h3>Reports &amp; Exports</h3>
              <p>
                Generate downloadable reports for placement cells, department reviews,
                and institutional reporting. Export data in structured formats for
                further analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">From Raw Data to Actionable Insights</h2>
            <p className="section-subtitle">
              Five straightforward steps to transform fragmented coding activity into
              structured, institution-ready intelligence.
            </p>
          </div>

          <div className="steps-container">
            <div className="step-item">
              <div className="step-number-col">
                <div className="step-number">1</div>
                <div className="step-line" />
              </div>
              <div className="step-content">
                <h3>Connect Profiles</h3>
                <p>
                  Students link their coding platform usernames — LeetCode, CodeChef,
                  GeeksforGeeks, HackerRank, and GitHub. The system validates each link
                  and stores it securely.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number-col">
                <div className="step-number">2</div>
                <div className="step-line" />
              </div>
              <div className="step-content">
                <h3>Collect Data Automatically</h3>
                <p>
                  CodeTracker&apos;s automated scrapers run on a schedule, pulling
                  the latest stats from each platform — problems solved, ratings,
                  contest history, GitHub contributions, and more.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number-col">
                <div className="step-number">3</div>
                <div className="step-line" />
              </div>
              <div className="step-content">
                <h3>Normalize &amp; Standardize</h3>
                <p>
                  Raw data is normalized across platforms using a weighted scoring
                  algorithm. This ensures fair, apples-to-apples comparison regardless
                  of which platform a student uses most.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number-col">
                <div className="step-number">4</div>
                <div className="step-line" />
              </div>
              <div className="step-content">
                <h3>Generate Rankings</h3>
                <p>
                  The ranking engine computes individual scores, produces leaderboards
                  at the section, department, and institution level, and updates them
                  in real time as new data arrives.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number-col">
                <div className="step-number">5</div>
              </div>
              <div className="step-content">
                <h3>View Insights &amp; Take Action</h3>
                <p>
                  Stakeholders access role-specific dashboards to monitor performance,
                  identify trends, generate reports, and make data-driven decisions
                  about curriculum, placement prep, and student support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ USER ROLES ═══════════ */}
      <section className="section section-alt" id="roles">
        <div className="container">
          <div className="section-header">
            <span className="section-label">User Roles</span>
            <h2 className="section-title">Purpose-Built for Every Stakeholder</h2>
            <p className="section-subtitle">
              CodeTracker serves four distinct user roles, each with tailored
              dashboards, permissions, and workflows.
            </p>
          </div>

          <div className="roles-grid">
            <div className="role-card">
              <div className="role-icon"><GraduationCap size={28} /></div>
              <h3>Students</h3>
              <p>
                Track your coding progress across all platforms in one place. See
                your ranking, identify weak areas, and stay motivated.
              </p>
              <div className="role-benefits">
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Unified activity dashboard
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Personal ranking and score
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Platform-wise breakdown
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Progress tracking over time
                </div>
              </div>
            </div>

            <div className="role-card">
              <div className="role-icon"><BookOpen size={28} /></div>
              <h3>Faculty</h3>
              <p>
                Monitor student coding activity, verify platform profiles, and
                identify students who need guidance or recognition.
              </p>
              <div className="role-benefits">
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Section-wise performance view
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Profile verification tools
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Student activity monitoring
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Report generation
                </div>
              </div>
            </div>

            <div className="role-card">
              <div className="role-icon"><Building2 size={28} /></div>
              <h3>HOD</h3>
              <p>
                Get department-level analytics, compare section performance, and
                access aggregated reports for leadership reviews.
              </p>
              <div className="role-benefits">
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Department-wide analytics
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Section comparison views
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Top performer identification
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Exportable department reports
                </div>
              </div>
            </div>

            <div className="role-card">
              <div className="role-icon"><Settings size={28} /></div>
              <h3>Admin</h3>
              <p>
                Manage all users, configure system settings, oversee analytics,
                and ensure platform governance across the institution.
              </p>
              <div className="role-benefits">
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  User &amp; role management
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  System-wide analytics
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Configuration &amp; settings
                </div>
                <div className="role-benefit">
                  <CheckCircle2 size={16} className="role-benefit-icon" />
                  Audit logs &amp; governance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BENEFITS ═══════════ */}
      <section className="section" id="benefits">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Benefits</span>
            <h2 className="section-title">Why Institutions Choose CodeTracker</h2>
            <p className="section-subtitle">
              Measurable improvements in visibility, efficiency, and decision-making.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><Eye size={22} /></div>
              <h4>Centralized Visibility</h4>
              <p>All coding data in one place — across students, sections, and departments.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><BarChart3 size={22} /></div>
              <h4>Data-Driven Decisions</h4>
              <p>Move beyond guesswork. Use real performance data to guide curriculum and placement prep.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><ShieldCheck size={22} /></div>
              <h4>Transparency</h4>
              <p>Verified profiles and normalized scoring eliminate self-reported bias and data manipulation.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Zap size={22} /></div>
              <h4>Efficiency</h4>
              <p>Automated collection and reporting save hours of manual work for faculty every week.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Users size={22} /></div>
              <h4>Scalability</h4>
              <p>Works for 50 students or 5,000. Role-based access scales with your institution&apos;s size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ USE CASES ═══════════ */}
      <section className="section section-alt" id="use-cases">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Use Cases</span>
            <h2 className="section-title">Real-World Applications</h2>
            <p className="section-subtitle">
              CodeTracker serves practical needs that institutions deal with every semester.
            </p>
          </div>

          <div className="usecases-grid">
            <div className="usecase-card">
              <div className="usecase-number">01</div>
              <div>
                <h3>Student Evaluation</h3>
                <p>
                  Use normalized coding scores as a supplementary evaluation metric
                  alongside academic grades. Identify students who are strong coders
                  but may not reflect it in traditional assessments.
                </p>
              </div>
            </div>

            <div className="usecase-card">
              <div className="usecase-number">02</div>
              <div>
                <h3>Placement Preparation</h3>
                <p>
                  Placement cells can identify coding-ready students, generate
                  preparation reports, and track improvement trends in the months
                  leading up to placement season.
                </p>
              </div>
            </div>

            <div className="usecase-card">
              <div className="usecase-number">03</div>
              <div>
                <h3>Department Analytics</h3>
                <p>
                  HODs can compare coding activity across sections, identify patterns,
                  and use insights to justify curriculum changes, lab hour allocations,
                  or coding club initiatives.
                </p>
              </div>
            </div>

            <div className="usecase-card">
              <div className="usecase-number">04</div>
              <div>
                <h3>Institutional Reporting</h3>
                <p>
                  Generate institution-wide reports for accreditation bodies, governing
                  boards, or internal reviews that demonstrate measurable student
                  coding skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ═══════════ CONTACT ═══════════ */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Ready to Get Started?</h2>
              <p>
                Request a demo today and see how CodeTracker can transform
                coding performance tracking at your institution.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-icon-wrapper"><Mail size={20} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <span>codetracker.ofzen@gmail.com</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon-wrapper"><Building2 size={20} /></div>
                  <div>
                    <h4>Office</h4>
                    <span>Innovation Park, Tech City</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <form className="contact-form" onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const email = e.target.email.value;
                const institution = e.target.institution.value;
                const message = e.target.message.value;

                const subject = encodeURIComponent(`CodeTracker Demo Request from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInstitution: ${institution}\n\nMessage:\n${message}`);

                window.location.href = `mailto:codetracker.ofzen@gmail.com?subject=${subject}&body=${body}`;
              }}>
                <h3>Request a Demo</h3>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" name="email" placeholder="email@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="institution">Institution Name</label>
                  <input type="text" id="institution" name="institution" placeholder="Enter your institution name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">How can we help?</label>
                  <textarea id="message" name="message" rows="4" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Send Request <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>
                <span className="footer-brand-icon"><Code2 size={18} /></span>
                CodeTracker
              </h3>
              <p>
                A Unified Coding Performance Intelligence Platform for educational
                institutions. Aggregate, analyze, and act on coding data from every
                major platform — automatically.
              </p>
            </div>

            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#roles">User Roles</a>
              <a href="#use-cases">Use Cases</a>
              <a href="#technology">Technology</a>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Changelog</a>
              <a href="#">Support</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} CodeTracker. All rights reserved.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <GitFork size={16} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Website">
                <Globe size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
