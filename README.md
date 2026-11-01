# OPAL EQUITY LIMITED — Master Corporate Website

Welcome to the official corporate website project for **OPAL EQUITY LIMITED**.

This website has been built from the ground up according to international corporate design standards, featuring a refined color palette of **Deep Navy Blue (`#0B1930`)**, **White (`#FFFFFF`)**, and **Elegant Gold (`#C6A45C`)**.

It is built strictly using **HTML5, CSS3, and Vanilla JavaScript** with **zero complex frameworks or paid libraries**, ensuring it runs lightning fast, is easy to maintain, and can be hosted locally or deployed to **Cloudflare Pages** for free in minutes.

---

## 📁 Project Structure

```text
opalequity/
│
├── index.html                   # 1. Home Page
├── about.html                   # 2. About Us Page
├── services.html                # 3. Our Services Page
├── approach.html                # 4. Our Approach Page
├── team.html                    # 5. Our Team Page
├── news.html                    # 6. News & Updates Page
├── contact.html                 # 7. Contact Us Page
│
├── css/
│   └── style.css                # Master Design System & Responsive Styles
│
├── js/
│   ├── content.js               # Central Content Management File (Easy Editing)
│   └── script.js                # Interactive Logic (Navigation, Modals, Forms)
│
├── images/
│   ├── logo.png                 # Official Opal Equity Logo Emblem
│   ├── hero-image.jpg           # Architectural Skyscraper Hero Image
│   ├── about-image.jpg          # Executive Boardroom Image
│   └── placeholders/
│       ├── executive-placeholder.jpg # Elegant Executive Profile Placeholder
│       ├── news-1.jpg           # Corporate Announcement Image
│       ├── news-2.jpg           # Governance Charter Image
│       └── news-3.jpg           # Strategic Analysis Image
│
└── README.md                    # This Comprehensive Guide
```

---

## 🚀 1. How to Open the Website Locally in Google Chrome

Because this website uses pure HTML, CSS, and Vanilla JavaScript, you don't need to install any server software or run terminal commands:

1. Open your File Explorer and navigate to your project folder:
   `C:\Users\kusha\OneDrive\Desktop\opalequity\`
2. Double-click on **`index.html`**.
3. It will immediately open and run smoothly in **Google Chrome**!
4. You can click on all navigation links in the header and footer to navigate between all 7 pages.

---

## ✏️ 2. How to Change Text (The Easy Way: `js/content.js`)

To make editing easy for beginners, we created a single central file: **`js/content.js`**.

Instead of editing 7 different HTML files, you can update almost everything in this one file:

1. Open `js/content.js` in VS Code or any text editor (like Notepad).
2. You will find clearly marked sections:
   - **Company Information**: Name, taglines, intro paragraphs.
   - **Contact Details**: Email, phone, headquarters address, office hours.
   - **About Us**: Vision, mission, philosophy.
   - **Services**: Service titles, descriptions, and feature lists.
   - **Team**: Team member names, titles, bios, and pictures.
   - **News**: Article headlines, categories, dates, and full text.
3. Simply replace any text inside the quotes (`"..."`) with your official information.
4. Save the file (`Ctrl + S`), and refresh Google Chrome!

> **Direct HTML Editing:** If you prefer editing HTML directly, each HTML page is also cleanly organized with clear HTML comments (`<!-- SECTION: ... -->`) so you can update text directly in the HTML tags if desired.

---

## 🖼️ 3. How to Replace Images

All images are stored in the `images/` directory:

| Image Purpose | Current File Location | How to Replace |
|---|---|---|
| **Company Logo** | `images/logo.png` | Save your new logo PNG file with the name `logo.png` into `images/` (overwriting the old one). |
| **Hero Skyscraper** | `images/hero-image.jpg` | Replace `images/hero-image.jpg` with your corporate photograph. |
| **Boardroom / About** | `images/about-image.jpg` | Replace `images/about-image.jpg` with your company photo. |
| **Team Headshots** | `images/placeholders/` | Place your new portrait (e.g. `images/director-john.jpg`) and update the `image` field in `js/content.js`. |
| **News Photos** | `images/placeholders/` | Place your article image into `images/` and update the article's `image` property in `js/content.js`. |

---

## 👥 4. How to Add or Edit Team Members

Open `js/content.js` and locate the `team:` section:

```javascript
team: [
  {
    id: 1,
    name: "Johnathan Sterling",                      // Replace with Director's name
    role: "Managing Director & Board Chair",         // Replace with Official Title
    department: "Executive Leadership",              // Department
    image: "images/director-john.jpg",               // Path to headshot photo
    bio: "Over 20 years of leadership in corporate governance...", // Biography
    credentials: "Board of Directors"
  },
  // To add another team member, simply duplicate this block!
]
```

To remove a team member, delete their `{ ... }` block.
To add a new team member, copy one `{ ... }` block, paste it with a comma, and update the details.

---

## 📰 5. How to Add News & Announcements

Open `js/content.js` and locate the `news:` section:

```javascript
news: [
  {
    id: 4,                                           // Give it a unique number
    title: "Opal Equity Expands Corporate Advisory",  // Headline
    category: "Corporate Announcement",              // Category
    date: "December 2026",                           // Date
    image: "images/placeholders/news-1.jpg",         // Article banner image
    excerpt: "Short 1-2 sentence preview...",        // Summary shown on the card
    fullContent: `Full article text goes here...`    // Full text shown in popup modal
  },
  // Existing articles below...
]
```

Save the file and refresh your browser. The new article will appear automatically, complete with a category badge, date, and a **Read Article** popup modal!

---

## 💼 6. How to Add or Remove Services

Open `js/content.js` and find the `services:` section.
Each service has a title, short summary, key features list, and full scope description:

```javascript
{
  id: "corporate-governance",
  title: "Corporate Governance & Oversight",
  category: "Governance",
  badge: "Institutional",
  iconSvg: `<svg ...>...</svg>`,
  shortDescription: "High-level summary...",
  fullDescription: "Detailed scope...",
  keyFeatures: [
    "Board Governance Structuring",
    "Compliance & Ethical Standards"
  ]
}
```

Add or remove services whenever your company's official service offerings are finalized!

---

## ✉️ 7. How to Connect the Contact Form to Receive Real Emails

The contact form on `contact.html` is 100% styled, responsive, and includes client-side validation. In compliance with your prompt's instructions:
> *"Do not pretend that a form sends messages unless a working backend or form service has been connected."*

The website will currently display a clear, friendly demo notice when submitted.

### To make it send real emails to your inbox (Takes 2 minutes, Free):

#### Option A: Using Formspree (Recommended, Free, Zero Coding)
1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Click **"+ New Form"** and enter your company email (e.g. `info@opalequity.com`).
3. Formspree will give you an endpoint URL like `https://formspree.io/f/mqkvywzy`.
4. Open `contact.html` and change:
   ```html
   <form id="opal-contact-form" action="https://formspree.io/f/your-form-id" method="POST">
   ```
5. Remove `e.preventDefault()` in `js/script.js` or let Formspree handle submission via AJAX.
6. Now every time a client submits the form, you'll receive an email directly in your inbox!

---

## ☁️ 8. How to Deploy on Cloudflare Pages (Free, Fast, Secure)

Cloudflare Pages provides global CDN hosting, free SSL certificates (`https://`), and DDOS protection with zero server maintenance.

### Method 1: Direct Upload (No Git needed, 60 seconds)
1. Create a free account at [https://pages.cloudflare.com](https://pages.cloudflare.com).
2. Go to **Workers & Pages** > **Create application** > **Pages** > **Upload assets**.
3. Name your project (e.g. `opal-equity`).
4. Drag and drop the `opalequity` folder containing `index.html`, `css/`, `js/`, `images/`.
5. Click **Deploy Site**.
6. Your website is instantly live worldwide on an `*.pages.dev` domain with free SSL!
7. You can connect your custom domain (e.g. `opalequity.com`) in the Cloudflare dashboard under **Custom domains**.

### Method 2: Git Integration (Automatic updates on push)
1. Push your folder to a private or public GitHub / GitLab repository.
2. In Cloudflare Pages, select **Connect to Git**.
3. Select your repository.
4. Set **Build command**: *(leave blank)*
5. Set **Build output directory**: `/` (root)
6. Click **Save and Deploy**. Any future changes you push will automatically update the live site!

---

## 🛡️ 9. Compliance & Brand Guidelines

- **No Unverified Claims**: In adherence to your strict instructions, no fake licenses, registration numbers, financial yields, or artificial testimonials are included.
- **Editable Disclaimers**: Institutional notices are included on the footer and contact pages to ensure legal and corporate transparency.
- **Color Palette Standards**:
  - Primary Navy: `#0B1930`
  - Accent Gold: `#C6A45C`
  - Background Grey: `#F5F6F8`
  - Charcoal Text: `#252B35`

---

© 2026 OPAL EQUITY LIMITED. All Rights Reserved.
