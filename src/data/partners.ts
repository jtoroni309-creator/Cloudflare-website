export interface Partner {
  name: string;
  category: string;
}

export const partnerCategories = [
  "Cloud",
  "Cybersecurity",
  "Networking",
  "Infrastructure",
  "Collaboration",
  "Backup & Disaster Recovery",
  "Business Applications",
  "Financial / ERP Solutions",
] as const;

export const partners: Partner[] = [
  // Cloud
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "Amazon Web Services", category: "Cloud" },
  { name: "Google Cloud Platform", category: "Cloud" },
  { name: "VMware Cloud", category: "Cloud" },
  // Cybersecurity
  { name: "CrowdStrike", category: "Cybersecurity" },
  { name: "Palo Alto Networks", category: "Cybersecurity" },
  { name: "SentinelOne", category: "Cybersecurity" },
  { name: "Fortinet", category: "Cybersecurity" },
  // Networking
  { name: "Cisco", category: "Networking" },
  { name: "Meraki", category: "Networking" },
  { name: "Aruba Networks", category: "Networking" },
  { name: "Ubiquiti", category: "Networking" },
  // Infrastructure
  { name: "Dell Technologies", category: "Infrastructure" },
  { name: "HPE", category: "Infrastructure" },
  { name: "Lenovo", category: "Infrastructure" },
  { name: "Nutanix", category: "Infrastructure" },
  // Collaboration
  { name: "Microsoft 365", category: "Collaboration" },
  { name: "Zoom", category: "Collaboration" },
  { name: "Slack", category: "Collaboration" },
  { name: "RingCentral", category: "Collaboration" },
  // Backup & Disaster Recovery
  { name: "Veeam", category: "Backup & Disaster Recovery" },
  { name: "Datto", category: "Backup & Disaster Recovery" },
  { name: "Acronis", category: "Backup & Disaster Recovery" },
  { name: "Druva", category: "Backup & Disaster Recovery" },
  // Business Applications
  { name: "Salesforce", category: "Business Applications" },
  { name: "HubSpot", category: "Business Applications" },
  { name: "ServiceNow", category: "Business Applications" },
  { name: "Freshworks", category: "Business Applications" },
  // Financial / ERP Solutions
  { name: "Sage Intacct", category: "Financial / ERP Solutions" },
  { name: "NetSuite", category: "Financial / ERP Solutions" },
  { name: "QuickBooks Enterprise", category: "Financial / ERP Solutions" },
  { name: "Microsoft Dynamics", category: "Financial / ERP Solutions" },
];
