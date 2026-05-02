import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Eye,
  Database,
  Server,
  Lock,
  Mail,
  Code2,
  GitFork,
  Globe,
} from "lucide-react";
import "./LandingPage.css";
import logo from "./assets/logo_light.png";

const EFFECTIVE_DATE = "1 May 2026";

const SECTIONS = [
  {
    icon: Eye,
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "1.1 Student Information (provided by Institution)",
        items: [
          "Full name and student roll number",
          "Branch, year, and section of study",
          "College-issued email address",
        ],
      },
      {
        subtitle: "1.2 Platform Usernames (provided by Student)",
        items: [
          "GitHub username — connected via GitHub OAuth 2.0",
          "LeetCode, HackerRank, GeeksforGeeks, and CodeChef usernames — provided manually by the student",
        ],
      },
      {
        subtitle: "1.3 Automatically Collected Data",
        items: [
          "Public coding activity, problem-solving statistics, and repository data fetched from platforms using the usernames provided",
          "GitHub profile data fetched through GitHub's official OAuth API after student authorization",
          "All other platform data is fetched exclusively from publicly available information on those platforms",
        ],
      },
    ],
  },
  {
    icon: Database,
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: null,
        items: [
          "To compute and display unified performance scores and rankings within your institution's CodeTracker dashboard",
          "To enable your institution's placement team to identify and recommend students for placement opportunities",
          "To generate reports and analytics for authorized institution administrators",
          "To maintain and improve the CodeTracker platform",
          "To respond to support queries sent to support@ofzen.in",
        ],
      },
    ],
  },
  {
    icon: Shield,
    title: "3. Data Sharing & Access",
    content: [
      {
        subtitle: null,
        items: [
          "Student data is accessible to authorized administrators of the institution that purchased the CodeTracker license",
          "The CodeTracker team at Ofzen Technologies may access data strictly for support, maintenance, and debugging purposes — only with explicit written permission from the institution",
          "We do not sell, rent, or share student data with any third-party advertisers or external organizations",
          "Recruiters or companies are not granted direct access to student data unless the institution explicitly enables and authorizes such access through platform settings",
        ],
      },
    ],
  },
  {
    icon: Server,
    title: "4. Data Storage & Security",
    content: [
      {
        subtitle: null,
        items: [
          "All data is stored on servers located within India, hosted on industry-standard cloud infrastructure (such as AWS or equivalent)",
          "We implement appropriate technical and organizational measures to protect your data against unauthorized access, disclosure, alteration, or destruction",
          "GitHub OAuth tokens are stored securely and are never exposed to third parties",
          "Public platform data is fetched over encrypted HTTPS connections",
        ],
      },
    ],
  },
  {
    icon: Lock,
    title: "5. Data Retention",
    content: [
      {
        subtitle: null,
        items: [
          "Student data is retained for the duration of the institution's active subscription with CodeTracker",
          "The retention period for individual student records is determined by the institution in accordance with its own data retention policies",
          "Upon termination of an institution's subscription, data may be exported by the institution and will be deleted from our servers within 30 days of written request",
        ],
      },
    ],
  },
  {
    icon: Eye,
    title: "6. Student Rights",
    content: [
      {
        subtitle: null,
        items: [
          "Students may request to view the data held about them by contacting their institution's designated administrator",
          "Requests for data correction or deletion must be routed through the institution, which holds administrative authority over the account",
          "Students may revoke GitHub OAuth access at any time through their GitHub account settings",
        ],
      },
    ],
  },
  {
    icon: Mail,
    title: "7. Contact Us",
    content: [
      {
        subtitle: null,
        items: [
          "For any privacy-related queries, concerns, or requests, please write to us at: support@ofzen.in",
          "Ofzen Technologies, Bengaluru, Karnataka, India",
          "We aim to respond to all privacy inquiries within 7 business days",
        ],
      },
    ],
  },
];

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Nav Bar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            <img src={logo} className="logo-icon" alt="Logo" />
            <p className="nav-logo-text">
              Code<span className="nav-logo-black">Tracker</span>
            </p>
          </Link>

          <div className="navbar-links">
            <Link
              to="/"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
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
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">
            This Privacy Policy describes how{" "}
            <strong>Ofzen Technologies</strong> ("we", "us", "our") collects,
            uses, stores, and protects information in connection with the{" "}
            <strong>CodeTracker</strong> platform.
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

        {/* Scope Notice */}
        <div className="legal-notice">
          <p className="legal-notice-title">Scope</p>
          <p className="legal-notice-text">
            This policy applies to students and institutions using CodeTracker
            within India. CodeTracker is a B2B SaaS product — institutions
            purchase licenses, and students access the platform through their
            institution's subscription. This policy governs the data of all
            parties involved.
          </p>
        </div>

        {/* Sections */}
        <div className="legal-sections">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="legal-section-card">
                <div className="legal-section-header">
                  <Icon size={24} className="legal-section-icon" />
                  <h2 className="legal-section-title">{section.title}</h2>
                </div>
                <div className="legal-section-content">
                  {section.content.map((block, i) => (
                    <div key={i}>
                      {block.subtitle && (
                        <p className="legal-block-subtitle">{block.subtitle}</p>
                      )}
                      <ul className="legal-list">
                        {block.items.map((item, j) => (
                          <li key={j} className="legal-list-item">
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
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3 className="footer-brand">
                <span className="footer-brand-icon">
                  <Code2 size={18} />
                </span>
                CodeTracker
              </h3>
              <p>
                A Unified Coding Performance Intelligence Platform for
                educational institutions. Aggregate, analyze, and act on coding
                data from every major platform — automatically.
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
            <p>
              &copy; {new Date().getFullYear()} CodeTracker. All rights
              reserved.
            </p>
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
