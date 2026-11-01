/**
 * ==============================================================================
 * OPAL EQUITY LIMITED — CENTRAL CONTENT MANAGEMENT FILE (content.js)
 * ==============================================================================
 * 
 * WELCOME TO YOUR CONTENT FILE!
 * 
 * This file is specifically designed for you to easily update all the text,
 * services, team members, news articles, and contact information for
 * OPAL EQUITY LIMITED without touching complicated HTML or CSS.
 * 
 * HOW TO EDIT:
 * 1. Simply replace any text inside quotes ("...") with your official information.
 * 2. To add a new team member, service, or news article, copy one of the existing
 *    blocks inside the array [ ... ] and edit its fields.
 * 3. Save this file, and your changes will instantly reflect on the website!
 * 
 * IMPORTANT:
 * - All items marked with [Placeholder] are waiting for your official corporate data.
 * - Do not remove the commas between items or quotes around texts.
 * ==============================================================================
 */

const OPAL_CONTENT = {
  // ----------------------------------------------------------------------------
  // 1. GENERAL COMPANY INFORMATION
  // ----------------------------------------------------------------------------
  company: {
    name: "OPAL EQUITY LIMITED",
    tagline: "Building Value. Creating Opportunities.",
    established: "[Official Registration Year Placeholder]",
    jurisdiction: "[Corporate Jurisdiction Placeholder]",
    heroSubtitle: "Welcome to Opal Equity Limited. Discover our commitment to professionalism, integrity and long-term value creation.",
    introHeading: "About Opal Equity Limited",
    introSummary: "Opal Equity Limited is an independent corporate enterprise founded on the principles of disciplined strategic development, transparency, and sustainable long-term value creation.",
    introFull: "Operating with an institutional mindset, Opal Equity Limited is dedicated to identifying and developing enduring corporate opportunities. Our governance framework prioritizes high fiduciary responsibility, strategic clarity, and stakeholder alignment. As an emerging leader in corporate stewardship, we maintain rigorous standards across all business endeavors.",
    ctaHeading: "Let's Build a Better Future Together",
    ctaSubtitle: "Reach out to discuss strategic opportunities, corporate inquiries, or learn more about our disciplined approach.",
  },

  // ----------------------------------------------------------------------------
  // 2. CONTACT DETAILS (Replace with official corporate contact information)
  // ----------------------------------------------------------------------------
  contact: {
    email: "info@opalequity.com", // [Placeholder Email]
    phone: "+1 (000) 000-0000",   // [Placeholder Phone]
    address: {
      line1: "Lazimpat",
      line2: "[Suite / Level Placeholder]",
      cityStateZip: "Kathmandu",
      country: "Nepal"
    },
    officeHours: "Monday – Friday: 9:00 AM – 6:00 PM (Local Time)",
    socialLinks: {
      linkedin: "#", // Add official LinkedIn URL here
      twitter: "#",  // Add official X/Twitter URL here
      medium: "#"    // Add official corporate blog URL here
    },
    disclaimer: "Opal Equity Limited operates strictly within authorized corporate boundaries. All information provided on this website is for general corporate informational purposes and does not constitute financial, investment, or legal solicitation."
  },

  // ----------------------------------------------------------------------------
  // 3. ABOUT US & FOUNDATIONAL PILLARS
  // ----------------------------------------------------------------------------
  about: {
    whoWeAre: {
      title: "Who We Are",
      text: "Opal Equity Limited is an international corporate entity focused on strategic business development, disciplined governance, and sustainable equity growth. We bring together experienced professionals who share a deep commitment to integrity, thorough market analysis, and responsible stewardship."
    },
    overview: {
      title: "Company Overview",
      text: "Founded with the ambition to build enduring corporate value, Opal Equity Limited operates as a forward-thinking enterprise. We structure our activities around ethical business conduct, prudent risk oversight, and transparent governance systems that ensure long-term stability."
    },
    vision: {
      title: "Our Vision",
      text: "To become a trusted and respected name in Nepal's equity and investment sector by encouraging informed investment decisions, supporting capital market development, and contributing to a transparent, inclusive, and sustainable financial future."
    },
    mission: {
      title: "Our Mission",
      text: "To promote responsible investment, financial awareness, and transparency in the equity market by creating meaningful opportunities for sustainable financial growth. We are committed to building trust, maintaining professional standards, and delivering value to our stakeholders."
    },
    philosophy: {
      title: "Our Philosophy",
      text: "We believe enduring corporate success is built patiently upon sound ethical principles, transparent operations, and rigorous strategic foresight. We reject short-term expediency in favor of sustainable, long-term resilience."
    }
  },

  // ----------------------------------------------------------------------------
  // 4. CORE VALUES (Integrity, Transparency, Professionalism, Responsibility, Excellence)
  // ----------------------------------------------------------------------------
  coreValues: [
    {
      name: "Integrity",
      tagline: "The Cornerstone of Everything We Do",
      description: "Uncompromising honesty and ethical standards govern our decisions, commitments, and relationships with all stakeholders.",
      icon: "integrity"
    },
    {
      name: "Transparency",
      tagline: "Clear & Accountable Governance",
      description: "Open communication, structured reporting, and clear operational practices that build lasting stakeholder confidence.",
      icon: "transparency"
    },
    {
      name: "Professionalism",
      tagline: "Institutional Rigor & Precision",
      description: "Excellence in execution, disciplined analysis, and adherence to the highest standards of international corporate conduct.",
      icon: "professionalism"
    },
    {
      name: "Responsibility",
      tagline: "Sustainable Corporate Stewardship",
      description: "A profound commitment to responsible business practices, long-term sustainability, and conscientious community impact.",
      icon: "responsibility"
    },
    {
      name: "Excellence",
      tagline: "Relentless Pursuit of Quality",
      description: "Striving continuously for the highest benchmarks in strategic foresight, operational performance, and client satisfaction.",
      icon: "excellence"
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. OUR APPROACH (5 Fundamental Pillars)
  // ----------------------------------------------------------------------------
  approach: [
    {
      number: "01",
      title: "Professionalism",
      subtitle: "Disciplined Institutional Execution",
      description: "Every engagement and initiative is executed with the highest level of diligence, technical skill, and ethical compliance. We adhere to structured governance practices that protect company integrity."
    },
    {
      number: "02",
      title: "Strategic Thinking",
      subtitle: "Informed Decision-Making",
      description: "We deploy analytical depth, scenario modeling, and strategic foresight to evaluate opportunities, identify potential risks, and build resilient operational frameworks."
    },
    {
      number: "03",
      title: "Transparency",
      subtitle: "Open Stakeholder Alignment",
      description: "Clear communication and institutional accountability define our corporate culture. We believe enduring trust is earned through proactive transparency at every stage."
    },
    {
      number: "04",
      title: "Long-Term Perspective",
      subtitle: "Sustainable Value Preservation",
      description: "We focus on compounding value over decades rather than quarters. Our strategic initiatives are designed to endure economic cycles and market volatility."
    },
    {
      number: "05",
      title: "Responsible Business Practices",
      subtitle: "Conscientious Stewardship",
      description: "Corporate citizenship, governance integrity, and social responsibility are woven into our foundational architecture, creating positive and sustainable stakeholder outcomes."
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. OUR SERVICES (Official company offerings)
  // ----------------------------------------------------------------------------
  services: [
    {
      id: "investment-advisory",
      title: "Investment Advisory",
      category: "Advisory",
      badge: "Core Service",
      iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
      shortDescription: "We aim to help clients understand investment opportunities and make informed financial decisions through investment-related guidance and market awareness.",
      fullDescription: "We aim to help clients understand investment opportunities and make informed financial decisions through investment-related guidance and market awareness.",
      keyFeatures: [
        "Investment Opportunity Analysis",
        "Informed Financial Decision Support",
        "Market Awareness & Guidance"
      ]
    },
    {
      id: "equity-investment",
      title: "Equity Investment",
      category: "Equity",
      badge: "Market Focus",
      iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
      shortDescription: "Explore equity investment opportunities and understand the fundamentals of participating in the equity market with a focus on informed and responsible investment decisions.",
      fullDescription: "Explore equity investment opportunities and understand the fundamentals of participating in the equity market with a focus on informed and responsible investment decisions.",
      keyFeatures: [
        "Equity Market Fundamentals",
        "Informed Investment Decisions",
        "Responsible Participation Frameworks"
      ]
    },
    {
      id: "capital-market-services",
      title: "Capital Market Services",
      category: "Capital Markets",
      badge: "Institutional",
      iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>`,
      shortDescription: "We aim to support customers in understanding Nepal's capital market, its investment environment, and available market opportunities.",
      fullDescription: "We aim to support customers in understanding Nepal's capital market, its investment environment, and available market opportunities.",
      keyFeatures: [
        "Nepal Capital Market Understanding",
        "Investment Environment Insights",
        "Available Market Opportunities"
      ]
    },
    {
      id: "financial-consultation",
      title: "Financial Consultation",
      category: "Consultation",
      badge: "Advisory",
      iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      shortDescription: "Providing general financial information and consultation to help individuals understand financial concepts, investment options, and market-related matters.",
      fullDescription: "Providing general financial information and consultation to help individuals understand financial concepts, investment options, and market-related matters.",
      keyFeatures: [
        "General Financial Information",
        "Financial Concepts & Education",
        "Investment Options & Market Consultation"
      ]
    },
    {
      id: "investment-education",
      title: "Investment Education",
      category: "Education",
      badge: "Literacy",
      iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      shortDescription: "Promoting financial literacy by helping customers understand shares, equity markets, investment risks, and responsible investment practices.",
      fullDescription: "Promoting financial literacy by helping customers understand shares, equity markets, investment risks, and responsible investment practices.",
      keyFeatures: [
        "Financial Literacy Promotion",
        "Understanding Shares & Equity Markets",
        "Investment Risks & Responsible Practices"
      ]
    },
    {
      id: "corporate-business-solutions",
      title: "Corporate & Business Solutions",
      category: "Corporate",
      badge: "Enterprise",
      iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
      shortDescription: "Supporting businesses with investment-related insights, corporate financial information, and strategic growth opportunities.",
      fullDescription: "Supporting businesses with investment-related insights, corporate financial information, and strategic growth opportunities.",
      keyFeatures: [
        "Investment-Related Insights",
        "Corporate Financial Information",
        "Strategic Growth Opportunities"
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. OUR TEAM (Placeholder leadership profiles ready for official details)
  // ----------------------------------------------------------------------------
  team: [
    {
      id: 1,
      name: "[Executive Name Placeholder]",
      role: "Chief Executive Officer (CEO)",
      image: "images/placeholders/executive-placeholder.jpg"
    },
    {
      id: 2,
      name: "[Executive Name Placeholder]",
      role: "Managing Director",
      image: "images/placeholders/executive-placeholder.jpg"
    },
    {
      id: 3,
      name: "[Executive Name Placeholder]",
      role: "Director",
      image: "images/placeholders/executive-placeholder.jpg"
    },
    {
      id: 4,
      name: "[Executive Name Placeholder]",
      role: "Company Secretary",
      image: "images/placeholders/executive-placeholder.jpg"
    }
  ],

  // ----------------------------------------------------------------------------
  // 8. NEWS & UPDATES (Placeholder corporate announcements)
  // ----------------------------------------------------------------------------
  news: [
    {
      id: 1,
      title: "Opal Equity Limited Announces Official Corporate Web Presence",
      category: "Corporate Announcement",
      date: "November 2026 [Placeholder]",
      image: "images/placeholders/news-1.jpg",
      excerpt: "Opal Equity Limited establishes its official digital corporate portal, reinforcing our foundational commitments to transparency, governance, and stakeholder engagement.",
      fullContent: `[Official Announcement Placeholder]

Opal Equity Limited is pleased to inaugurate its official corporate web presence. 

Designed to reflect our unwavering dedication to institutional excellence, this portal serves as the primary verified hub for corporate disclosures, governance guidelines, and company updates.

"Our digital presence represents the values we stand for: transparency, discipline, and high ethical standards," stated the corporate communications office. "As Opal Equity Limited continues to develop its strategic initiatives, this platform will provide clear, verified insights into our activities and milestones."

We welcome our partners, stakeholders, and community members to explore our newly launched pages.`
    },
    {
      id: 2,
      title: "Our Commitment to Ethical Governance & Institutional Standards",
      category: "Governance & Ethics",
      date: "November 2026 [Placeholder]",
      image: "images/placeholders/news-2.jpg",
      excerpt: "A formal overview of Opal Equity Limited's governance structure, focusing on transparent operations and responsible business practices.",
      fullContent: `[Corporate Policy Placeholder]

At Opal Equity Limited, we firmly believe that ethical governance is the prerequisite for all enduring value creation.

Our leadership committee has formalized a comprehensive governance charter prioritizing:
1. Complete transparency in stakeholder communications.
2. Disciplined fiduciary oversight across all operations.
3. Proactive adherence to corporate compliance best practices.
4. Continuous evaluation of risk factors and long-term sustainability.

By anchoring our activities in these core tenets, Opal Equity Limited builds trust that endures across market cycles.`
    },
    {
      id: 3,
      title: "Strategic Outlook: Navigating Corporate Growth with Long-Term Vision",
      category: "Strategic Insights",
      date: "November 2026 [Placeholder]",
      image: "images/placeholders/news-3.jpg",
      excerpt: "Perspectives on building enduring corporate resilience through disciplined strategic planning and responsible stewardship.",
      fullContent: `[Executive Perspective Placeholder]

Modern corporate leadership requires balancing agility with unwavering long-term discipline. 

In an evolving global marketplace, Opal Equity Limited focuses on enduring fundamentals rather than transient market trends. Our strategy centers on:
- In-depth analytical evaluation before commitment.
- Robust operational risk mitigation.
- Cultivating deep, values-aligned collaborative partnerships.

We look forward to sharing further milestones and updates in the coming quarters.`
    }
  ]
};

// Expose globally so all pages and scripts can access it easily
if (typeof window !== "undefined") {
  window.OPAL_CONTENT = OPAL_CONTENT;
}
