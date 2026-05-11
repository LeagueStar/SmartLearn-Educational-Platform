<div align="center">

  <img src="assets/Logo.png" alt="SmartLearn Logo" width="220" />

  <h1>🎓 SmartLearn – AI Educational Platform</h1>
  <p><em>A modern, responsive frontend bridging traditional learning with next-gen AI.</em></p>

  <img src="https://img.shields.io/badge/HTML5-1a253a?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
  <img src="https://img.shields.io/badge/CSS3-1a253a?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
  <img src="https://img.shields.io/badge/JavaScript-1a253a?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JS" />

</div>

<br>

## 📸 Interface Sneak Peek

<div align="center">
  <video src="

https://github.com/user-attachments/assets/d1bcd25e-f099-4d46-8bf4-b48ae84c85f6

" width="800" autoplay loop muted controls style="border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.15);"></video>
</div>

<br>

## 🎯 Purpose of Website
The primary purpose of **SmartLearn** is to demonstrate advanced frontend development proficiency using pure HTML, CSS, and Vanilla JavaScript—without relying on heavy external frameworks. It serves as a practical, production-ready implementation of DOM manipulation, event handling, modular CSS layout systems, and clean code architecture to simulate a next-generation AI tutoring platform.

---

## 💻 Technologies Used
* **HTML5:** Semantic markup, structured document flow, and accessibility (ARIA) attributes.
* **CSS3:** Custom Variables (Design Tokens), Flexbox, Grid Layouts, and Keyframe Animations.
* **JavaScript (Vanilla/ES6+):** Object-Oriented Programming (Classes), DOM Manipulation, Event Listeners, Template Literals, and Regular Expressions (Regex).

---

## 🚀 Main Features of Website

This project was built with strict adherence to modern design principles, ensuring a premium user experience:

| 🧩 Dynamic Rendering | 🛡️ Secure Auth Validation | ⚡ Interactive UI |
| :--- | :--- | :--- |
| **Course Catalogs:** Generated via JS ES6 Classes and injected directly into the DOM, keeping HTML pristine. | **Real-Time Regex:** Custom form validation processes emails and calculates multi-factor password strength. | **Dynamic State:** Slide-up detail panels, animated toast notifications, and automated modal popups. |

| 📱 Responsive Design | 🎯 Scroll Animations | 🤖 Pure CSS Art |
| :--- | :--- | :--- |
| **Fluid Layouts:** Engineered with CSS Grid and Flexbox for all device breakpoints (Desktop to Mobile). | **Intersection Observer:** Components fade and slide sequentially without causing layout thrashing. | **Hero Section:** Features a custom, pure-CSS animated robot scene to establish the AI theme. |

---

## 🔄 Website Flow / Working
1. **Landing (Hero Section):** Users are greeted by a dynamic hero section featuring the platform's core value proposition and a pure-CSS robot animation. A welcome modal initializes after a 900ms delay.
2. **Exploration:** Users scroll down to view interactive feature cards. Clicking a card slides up a detailed information panel driven by cached DOM queries.
3. **Course Browsing:** The "Popular Courses" section dynamically loads data from a JavaScript array of objects, rendering structured HTML templates injected seamlessly into the grid.
4. **Authentication:** The Login/Signup section features a seamless DOM-based tab switcher. Inputting data triggers real-time password strength updates and regex-based validation upon submission.
5. **Feedback/Contact:** A validated feedback form allows users to submit queries, triggering animated toast notifications upon successful validation.

---

## 📁 Folder Structure

```text
📦 SmartLearn
 ┣ 📂 .github            # Automated issue templates & config
 ┣ 📂 assets             # Image assets and branding
 ┃ ┣ 🖼️ Logo.png         
 ┃ ┣ 🖼️ logomini.png     
 ┃ ┗ 🎥 LiveDemo_SmartLearn.mp4  # UI Preview Video
 ┣ 📜 index.html         # Semantic HTML structure
 ┣ 📜 Style.css          # Variables, animations, media queries
 ┣ 📜 Script.js          # OOP rendering, IntersectionObserver, Regex
 ┣ 📜 README.md          # Project documentation
 ┣ 📜 SECURITY.md        # Security policy and reporting
 ┗ 📜 LICENSE            # MIT License
