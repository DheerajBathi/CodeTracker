import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  Users,
  AlertTriangle,
  Gavel,
  CreditCard,
  RefreshCw,
  XCircle,
  ShieldOff,
  Code2,
  GitFork,
  Mail,
  Globe
} from "lucide-react";

const EFFECTIVE_DATE = "1 May 2026";

const SECTIONS = [
  {
    icon: Users,
    title: "1. Parties & Definitions",
    content: [
      {
        subtitle: null,
        items: [
          '"Provider" means Ofzen Technologies, a company registered in Bengaluru, Karnataka, India, and the developer of the CodeTracker platform.',
          '"Institution" or "Client" means the engineering college or university that has purchased a subscription to CodeTracker.',
          '"Student" or "End User" means a student enrolled at the Institution who creates a CodeTracker account under the Institution\'s subscription.',
          '"Platform" means the CodeTracker software-as-a-service product, including all web interfaces, APIs, and associated services.',
          '"Platform Data" means coding statistics, problem-solving records, and repository data fetched from third-party platforms using usernames provided by Students.',
        ],
      },
    ],
  },
  {
    icon: FileText,
    title: "2. License & Access",
    content: [
      {
        subtitle: "2.1 Institutional License",
        items: [
          "The Provider grants the Institution a non-exclusive, non-transferable, limited license to access and use CodeTracker for the duration of the active subscription.",
          "The Institution may authorize its enrolled students to create accounts and use the Platform within the scope of the institutional license.",
          "The license is valid only for use within India.",
        ],
      },
      {
        subtitle: "2.2 Student Accounts",
        items: [
          "Students may register on the Platform only through an invitation or enrollment process managed by the Institution.",
          "By creating an account, Students agree to be bound by these Terms of Service in addition to any policies set by their Institution.",
          "Students authorize the Platform to fetch publicly available data from third-party coding platforms using the usernames they provide.",
          "Students authorize the Platform to access their GitHub profile data through GitHub OAuth upon their explicit consent.",
        ],
      },
    ],
  },
  {
    icon: CreditCard,
    title: "3. Subscription & Billing",
    content: [
      {
        subtitle: null,
        items: [
          "Subscriptions are sold exclusively to institutions. Individual students do not purchase or pay for the Platform.",
          "Pricing, billing cycles, and payment terms are defined in the separate commercial agreement executed between the Institution and Ofzen Technologies.",
          "The Institution is solely responsible for timely payment of subscription fees.",
          "Access to the Platform may be suspended if subscription fees are not paid within the agreed grace period.",
        ],
      },
    ],
  },
  {
    icon: AlertTriangle,
    title: "4. Acceptable Use",
    content: [
      {
        subtitle: "4.1 Institutions must not:",
        items: [
          "Resell, sublicense, or transfer access to the Platform to any third party outside the Institution's enrolled student body",
          "Use student data obtained through CodeTracker for purposes not disclosed in this policy or the Privacy Policy",
          "Provide Platform access to students of other institutions not covered under the subscription",
          "Attempt to reverse-engineer, decompile, or extract source code from the Platform",
        ],
      },
      {
        subtitle: "4.2 Students must not:",
        items: [
          "Submit false or misleading platform usernames with intent to manipulate rankings",
          "Attempt to access another student's account or data without authorization",
          "Use automated tools, bots, or scripts to interact with the CodeTracker Platform",
          "Share login credentials with other individuals",
          "Engage in any activity that violates the terms of use of third-party platforms (GitHub, LeetCode, HackerRank, GeeksforGeeks, CodeChef)",
        ],
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "5. Third-Party Platforms & Data",
    content: [
      {
        subtitle: null,
        items: [
          "CodeTracker fetches publicly available coding activity data from third-party platforms (LeetCode, HackerRank, GeeksforGeeks, CodeChef) using usernames voluntarily provided by Students.",
          "GitHub data is fetched via GitHub's official OAuth 2.0 API after explicit student authorization.",
          "The Provider is not responsible for inaccuracies, unavailability, or changes in data provided by third-party platforms.",
          "The Provider does not guarantee the continuous availability of data from any third-party platform, as such availability is subject to each platform's own terms and API policies.",
          "Students are responsible for ensuring the accuracy of the usernames they provide.",
        ],
      },
    ],
  },
  {
    icon: XCircle,
    title: "6. Termination",
    content: [
      {
        subtitle: null,
        items: [
          "The Provider may suspend or terminate an Institution's or Student's access to the Platform for violation of these Terms with 7 days' written notice, except in cases of severe violations where immediate termination may apply.",
          "The Institution may terminate its subscription by providing 30 days' written notice to support@ofzen.in before the next billing cycle.",
          "Upon termination, the Institution may request an export of its data within 30 days. After this period, data will be permanently deleted from Provider servers.",
          "Students whose Institution's subscription ends will lose access to the Platform immediately upon subscription expiry.",
        ],
      },
    ],
  },
  {
    icon: ShieldOff,
    title: "7. Limitation of Liability",
    content: [
      {
        subtitle: null,
        items: [
          "The Platform is provided on an \"as is\" basis. The Provider does not warrant that the Platform will be error-free, uninterrupted, or free from inaccuracies.",
          "The Provider shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of or inability to use the Platform.",
          "The Provider's total liability to any Institution shall not exceed the total subscription fees paid by that Institution in the three months preceding the claim.",
          "The Provider is not liable for actions taken by Institutions based on data presented in the Platform, including placement-related decisions.",
        ],
      },
    ],
  },
  {
    icon: Gavel,
    title: "8. Governing Law & Dispute Resolution",
    content: [
      {
        subtitle: null,
        items: [
          "These Terms of Service are governed by and construed in accordance with the laws of Andhra Pradesh, India.",
          "Any disputes arising from or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation between the parties.",
          "If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the competent courts located in Andhra Pradesh, India.",
          "These Terms constitute the entire agreement between the Provider and the Institution/Student and supersede all prior agreements or understandings.",
        ],
      },
    ],
  },
];

export default function TermsOfService() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Top Nav Bar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon"><Code2 size={20} /></span>
            CodeTracker
          </Link>

          <div className="navbar-links">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="legal-main">
        {/* Header */}
        <div className="legal-header">
          <div className="legal-document-badge">
            <span className="legal-document-badge-dot" />
            Legal Document
          </div>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">
            These Terms of Service govern the access and use of the{" "}
            <strong>CodeTracker</strong> platform provided by{" "}
            <strong>Ofzen Technologies</strong>. By using the Platform, Institutions and
            Students agree to be bound by these terms.
          </p>
          <div className="legal-meta-cards">
            <div className="legal-meta-card">
              <p className="legal-meta-label">Effective Date</p>
              <p className="legal-meta-value">{EFFECTIVE_DATE}</p>
            </div>
            <div className="legal-meta-card">
              <p className="legal-meta-label">Jurisdiction</p>
              <p className="legal-meta-value">Andhra Pradesh, India</p>
            </div>
            <div className="legal-meta-card">
              <p className="legal-meta-label">Contact</p>
              <p className="legal-meta-value">support@ofzen.in</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="legal-notice dark">
          <p className="legal-notice-title">
            Important Notice
          </p>
          <p className="legal-notice-text">
            Please read these Terms carefully before using CodeTracker. If the Institution or
            Student does not agree to these Terms, they must not access or use the Platform.
            Continued use of the Platform constitutes acceptance of these Terms.
          </p>
        </div>

        {/* Sections */}
        <div className="legal-sections">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="legal-section-card"
              >
                <div className="legal-section-header">
                  <Icon size={24} className="legal-section-icon" />
                  <h2 className="legal-section-title">{section.title}</h2>
                </div>
                <div className="legal-section-content">
                  {section.content.map((block, i) => (
                    <div key={i}>
                      {block.subtitle && (
                        <p className="legal-block-subtitle">
                          {block.subtitle}
                        </p>
                      )}
                      <ul className="legal-list">
                        {block.items.map((item, j) => (
                          <li
                            key={j}
                            className="legal-list-item"
                          >
                            <span className="legal-list-bullet" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Amendments Notice */}
        <div className="legal-notice">
          <p className="legal-notice-title">Amendments</p>
          <p className="legal-notice-text">
            The Provider reserves the right to modify these Terms at any time. Institutions will
            be notified of material changes via email to the registered contact address at least
            14 days before changes take effect. Continued use of the Platform after that date
            constitutes acceptance of the revised Terms.
          </p>
        </div>

        </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3 className="footer-brand">
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
              <Link to="/#features">Features</Link>
              <Link to="/#how-it-works">How It Works</Link>
              <Link to="/#roles">User Roles</Link>
              <Link to="/#use-cases">Use Cases</Link>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <Link to="/#contact">Contact</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
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
    </div>
  );
}
