# 🌌 Personal Portfolio | Kuldip Boghara

A state-of-the-art, premium portfolio website built to showcase my expertise as a **MERN Stack & AI Developer**. The portfolio is designed with custom glassmorphism interfaces, interactive 3D particle fields, responsive grid timelines, and high-performance scroll-driven animations.

🔗 **Live Portfolio:** [bogharakuldip.com](https://kuldip-boghara-portfolio.vercel.app/)
💼 **LinkedIn:** [Kuldip Boghara](https://www.linkedin.com/in/kuldip-boghara/)
🐙 **GitHub:** [KuldipBoghara](https://github.com/KuldipBoghara)
📧 **Email:** [bogharakuldip@gmail.com](mailto:bogharakuldip@gmail.com)

---

## ✨ Core Features

*   **3D Particle Background:** Fully interactive 3D particle field utilizing Three.js and `@react-three/fiber` that reacts dynamically to mouse movement.
*   **Scroll-Driven Timeline:** Custom Experience & Career path grid with dynamic progress indicators, glowing slider tracking, and fluid spring animations.
*   **Interactive IDE Widget:** A floating terminal interface simulation showcasing responsive typing effects, status bar updates, and sequential task logs.
*   **Custom UI Loader & Custom Cursor:** An elegant custom page entry loader (`BK.` branding) coupled with a smooth-following pointer tracker.
*   **Clean CSS System:** Combines utility classes from Tailwind CSS with modular vanilla CSS tokens for granular control over micro-animations and typography.

---

## 🛠️ Tech Stack

*   **Frontend Library:** React (Vite-powered environment)
*   **3D Render Engine:** Three.js + React Three Fiber (`@react-three/drei`)
*   **Animation Frameworks:** Framer Motion (Transitions / Springs) & GSAP (Performance Tweaks)
*   **Styling & Themes:** Tailwind CSS + Custom CSS Variables (Glassmorphism & Neon Orbs)
*   **Form Management:** React Hook Form + EmailJS (Setup ready)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/KuldipBoghara/Porfolio.git
    cd Porfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the port specified in terminal) in your browser.

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This compiles the app into highly optimized static assets in the `dist/` directory.

---

## 📂 Project Structure

```
Porfolio/
├── public/                 # Static assets (images, favicon, Resume PDF)
├── src/
│   ├── components/
│   │   ├── layout/         # Navigation & Footer components
│   │   ├── sections/       # Main page sections (Hero, About, Experience, etc.)
│   │   ├── three/          # 3D fiber components (ParticleField, etc.)
│   │   └── ui/             # Reusable UI widgets (Loader, Cursor, FloatingTerminal)
│   ├── App.jsx             # Main Application hub
│   ├── index.css           # Styling foundations, animations, and design variables
│   └── main.jsx            # Entry mount point
├── index.html              # HTML shell template
├── vite.config.js          # Vite custom compiler rules
└── package.json            # Scripts & project dependencies
```

---

## 📄 License

Designed and developed by [Kuldip Boghara](https://github.com/KuldipBoghara).
Feel free to fork this project to use as inspiration for your own digital home.
