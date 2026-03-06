import {
  Shield,
  Monitor,
  Server,
  Cloud,
  Mail,
  Users,
  HardDrive,
  Lock,
  FileCheck,
  Headphones,
  Network,
  Settings,
  BarChart3,
  ClipboardList,
  Phone,
  UserCheck,
  BookOpen,
  Layers,
  Cpu,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface MspServiceCategory {
  title: string;
  icon: LucideIcon;
  services: string[];
}

export const mspServiceCategories: MspServiceCategory[] = [
  {
    title: "Help Desk & End-User Support",
    icon: Headphones,
    services: [
      "Help desk and end-user support",
      "Remote monitoring and management (RMM)",
      "On-site and remote support",
      "Employee onboarding and offboarding",
    ],
  },
  {
    title: "Infrastructure & Network",
    icon: Server,
    services: [
      "24/7 system monitoring",
      "Network management",
      "Server and infrastructure management",
      "Endpoint and device management",
      "Patch management",
    ],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    services: [
      "Managed cybersecurity services",
      "Antivirus / endpoint protection",
      "Firewall management",
      "Identity and access management",
      "MFA / access controls",
      "Security awareness support",
    ],
  },
  {
    title: "Backup & Business Continuity",
    icon: HardDrive,
    services: [
      "Backup and disaster recovery",
      "Business continuity planning",
    ],
  },
  {
    title: "Cloud & Collaboration",
    icon: Cloud,
    services: [
      "Cloud services management",
      "Microsoft 365 management",
      "Email and collaboration support",
      "VoIP / communications support",
    ],
  },
  {
    title: "IT Operations & Strategy",
    icon: BarChart3,
    services: [
      "IT asset lifecycle management",
      "Vendor management",
      "Procurement and licensing support",
      "Compliance support",
      "Reporting and documentation",
      "Strategic IT planning",
      "vCIO / advisory support",
      "Project-based IT deployments and upgrades",
    ],
  },
];

export const cfoServices = [
  { title: "Financial Planning & Analysis", description: "Comprehensive financial modeling, variance analysis, and data-driven insights to guide strategic decisions." },
  { title: "Budgeting & Forecasting", description: "Rolling forecasts and disciplined budgets that keep your business aligned with growth targets." },
  { title: "Cash Flow Management", description: "Proactive cash flow monitoring, working capital optimization, and liquidity planning." },
  { title: "KPI Dashboards & Reporting", description: "Real-time performance dashboards that give leadership the visibility they need." },
  { title: "Profitability & Margin Analysis", description: "Deep dives into product, service, and customer profitability to maximize margins." },
  { title: "Strategic Planning", description: "Long-range planning that aligns financial strategy with business goals." },
  { title: "Financial Operations Improvement", description: "Streamlining processes, controls, and systems for efficiency and accuracy." },
  { title: "Board & Leadership Reporting", description: "Investor-ready reporting and board presentations that build confidence." },
  { title: "Growth & Scenario Modeling", description: "What-if analysis and growth planning to prepare for every outcome." },
  { title: "Process & Controls Improvement", description: "Strengthening internal controls and financial governance." },
];

export const techServices = [
  { title: "Technology Assessments", description: "Thorough evaluation of your current technology landscape to identify gaps, risks, and opportunities.", icon: ClipboardList },
  { title: "Roadmap Planning", description: "Actionable technology roadmaps aligned with your business goals and budget.", icon: Layers },
  { title: "Digital Transformation", description: "End-to-end guidance through digital transformation initiatives that deliver measurable results.", icon: Cpu },
  { title: "Systems Selection", description: "Vendor-agnostic guidance to select the right ERP, CRM, and business systems for your needs.", icon: Monitor },
  { title: "ERP & Business Systems Implementation", description: "Hands-on implementation of accounting, ERP, and business systems from configuration to go-live.", icon: Settings },
  { title: "Cloud Migration", description: "Strategic cloud migration planning and execution to modernize infrastructure with minimal disruption.", icon: Cloud },
  { title: "Process Improvement", description: "Identifying and eliminating inefficiencies in business and technology workflows.", icon: Wrench },
  { title: "Workflow Optimization", description: "Designing and automating workflows to increase productivity and reduce manual effort.", icon: Network },
  { title: "Vendor Coordination", description: "Managing vendor relationships, timelines, and deliverables on your behalf.", icon: Users },
  { title: "Project Leadership", description: "Experienced project management to keep implementations on track, on scope, and on budget.", icon: FileCheck },
  { title: "Change Management", description: "Helping your team adopt new technology and processes with confidence.", icon: UserCheck },
  { title: "Post-Implementation Optimization", description: "Ongoing tuning and support after go-live to ensure you get full value from your investment.", icon: BarChart3 },
];

export const varBenefits = [
  { title: "Solution Sourcing", description: "We research and identify the best technology solutions for your specific business requirements." },
  { title: "Product Procurement", description: "Streamlined procurement with competitive pricing through our vendor partnerships." },
  { title: "Vendor Selection", description: "Objective, vendor-agnostic guidance to choose the right partners for your stack." },
  { title: "Licensing & Renewals", description: "Proactive license management, optimization, and renewal tracking." },
  { title: "Architecture Guidance", description: "Expert design of technology architectures that scale with your business." },
  { title: "Implementation Support", description: "Hands-on support from procurement through deployment and go-live." },
  { title: "Lifecycle Management", description: "End-to-end management of your technology assets from acquisition to retirement." },
  { title: "Single Point of Accountability", description: "One trusted partner who owns the relationship across your entire technology ecosystem." },
];
