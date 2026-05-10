<div align="center">

  <img src="assets/Logo.png" alt="SmartLearn Logo" width="220" />

  <h1>🎓 SmartLearn</h1>
  <p><em>An AI-Powered Educational Platform Frontend</em></p>

  <a href="https://leaguestar.github.io/SmartLearn-Educational-Platform/">
    <img src="https://img.shields.io/badge/Live_Demo-View_Website-e67e22?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo" />
  </a>

  <br><br>

  <img src="https://img.shields.io/badge/HTML5-1a253a?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
  <img src="https://img.shields.io/badge/CSS3-1a253a?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
  <img src="https://img.shields.io/badge/JavaScript-1a253a?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JS" />

</div>

<br>

> **SmartLearn** is a modern, highly interactive frontend web application designed to simulate a next-generation AI tutoring platform. It completely bypasses heavy frameworks, utilizing pure HTML, CSS, and Vanilla JavaScript (OOP) to deliver a lightning-fast, visually stunning user experience.

<br>
<br>

## ✨ The Aesthetic & UI/UX

This project was built with a strict adherence to modern design principles, ensuring it doesn't just work—it feels premium.

* **🎨 Brand-Driven Palette:** The UI is driven entirely by CSS Variables extracted from the logo. **Deep Trust Navy (`#1a253a`)** provides structure, while **Energy Orange (`#e67e22`)** highlights critical call-to-actions.
* **✨ Fluid Animations:** Elements don't just appear; they glide in. Utilizing the `IntersectionObserver` API, components fade and slide sequentially without causing layout thrashing.
* **🤖 Pure CSS Art:** The hero section features a custom, pure-CSS animated robot scene, establishing the AI theme without relying on heavy external video or image assets.
* **📱 Pixel-Perfect Responsiveness:** Engineered with CSS Grid and Flexbox, the layout adapts flawlessly from ultrawide desktop monitors down to mobile viewports.

---

## 🚀 Core Capabilities

| 🧩 Architecture | 🛡️ Validation & Auth | ⚡ Interactivity |
| :--- | :--- | :--- |
| **Object-Oriented Rendering:** Course catalogs are generated via JS ES6 Classes and injected directly into the DOM, keeping the HTML pristine. | **Real-Time Regex:** Custom form validation processes emails and calculates a multi-factor password strength score on every keystroke. | **Dynamic State:** Slide-up detail panels, automated modal popups, and animated toast notifications driven by cached DOM queries. |

<br>

## 📁 Clean Project Architecture

```text
📦 SmartLearn
 ┣ 📂 .github            # Automated issue templates & config
 ┣ 📂 assets             # Image assets and branding
 ┃ ┣ 🖼️ Logo.png         
 ┃ ┗ 🖼️ logomini.png     
 ┣ 📜 index.html         # Semantic HTML structure
 ┣ 📜 Style.css          # Variables, animations, media queries
 ┣ 📜 Script.js          # OOP rendering, IntersectionObserver, Regex
 ┣ 📜 README.md          # Project documentation
 ┣ 📜 SECURITY.md        # Security policy and reporting
 ┗ 📜 LICENSE            # MIT License
