import React from "react";
import { Github, Linkedin, Mail, FileText, ExternalLink, Download } from "lucide-react";

function LeetCodeIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

const T = {
  bg: "#1A1218",
  card: "#241A22",
  line: "rgba(255,255,255,0.08)",
  text: "#F5EEE8",
  dim: "#B3A29E",
  pillBg: "rgba(255,255,255,0.04)",
  navBg: "rgba(26,18,24,0.85)",
  shadow: "0 4px 20px rgba(0,0,0,0.35)",
};

const GRAD1 = "#B76E9B";
const GRAD2 = "#E8C15A";

const NAV = ["Home", "About", "Projects", "Contact"];

const SKILLS = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "REST APIs",
  "SQL",
  "C++",
  "Git & GitHub",
];

const PROJECTS = [
  {
    name: "ChatVerse",
    desc: "AI-powered conversational web app inspired by ChatGPT, integrated with Google Gemini API. Supports multiple chat threads, markdown rendering with syntax-highlighted code, and JWT auth.",
    tags: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Gemini API", "JWT"],
    github: "https://github.com/vaishnaviimahajann/ChatVerse", // TODO: replace with exact repo URL
    live: "https://chatverse-1-58ew.onrender.com",
  },
  {
    name: "VolunteerBridge",
    desc: "Full-stack NGO volunteer management platform replacing WhatsApp-based updates. Role-based dashboards for Coordinators, Managers & Volunteers with invite-only onboarding and attendance tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Docker", "CI/CD"],
    github: "https://github.com/vaishnaviimahajann/VolunteerBridge", // TODO: replace with exact repo URL
    live: "#",
  },
  {
    name: "SkillSync",
    desc: "A platform for college students to find skill-based teammates. Includes discovery/search by skill, connection requests, profile management, and real-time chat via Socket.io.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/vaishnaviimahajann/WEBX_project", // TODO: replace with exact repo URL
    live: "#",
  },
];

const LINKS = {
  email: "vaishnaviimahajan@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaishnavi-mahajan-819911390",
  github: "https://github.com/vaishnaviimahajann",
  leetcode: "https://leetcode.com/u/vaishnavi_mahajan_/",
  resume: "/resume.pdf", // put your resume file in the public/ folder as resume.pdf
};

export default function App() {
  return (
    <div style={{ background: T.bg, color: T.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif" }}>
      <style>{`
        .navlink { transition: color 0.2s ease; }
        .navlink:hover { color: ${T.text} !important; }
        .cta-primary { transition: transform 0.15s ease, box-shadow 0.15s ease; }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(183,110,155,0.3); }
        .cta-ghost { transition: border-color 0.15s ease, background 0.15s ease; }
        .cta-ghost:hover { border-color: ${GRAD1}; background: rgba(183,110,155,0.08); }
        .skill-pill { transition: transform 0.15s ease, border-color 0.15s ease; }
        .skill-pill:hover { transform: translateY(-2px); border-color: ${GRAD1}; }
        .proj-card { transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .proj-card:hover { transform: translateY(-4px); border-color: ${GRAD1}; }
        .icon-btn { transition: transform 0.15s ease, border-color 0.15s ease; }
        .icon-btn:hover { transform: translateY(-3px); border-color: ${GRAD2}; }
        .section { scroll-margin-top: 90px; }
      `}</style>

      {/* Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          background: T.navBg,
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${T.line}`,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "18px", letterSpacing: "-0.01em" }}>Vaishnavi Mahajan</span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="navlink" style={{ color: T.dim, textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
              {n}
            </a>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
            className="cta-primary"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "7px",
              background: `linear-gradient(135deg, ${GRAD1}, ${GRAD2})`,
              color: "#211217",
              fontWeight: 600,
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            <Download size={13} /> Resume
          </a>
        </div>
      </nav>

      {/* Hero / Home */}
      <section id="home" className="section" style={{ maxWidth: "720px", margin: "0 auto", padding: "90px 24px 60px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "132px", height: "132px", borderRadius: "50%", padding: "3px", background: `linear-gradient(135deg, ${GRAD1}, ${GRAD2})`, marginBottom: "24px" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: T.card, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", boxShadow: T.shadow }}>
            <img src="/photo.jpg" alt="Vaishnavi Mahajan" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        <h1 style={{ fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
          Hi, I'm Vaishnavi —{" "}
          <span style={{ background: `linear-gradient(135deg, ${GRAD1}, ${GRAD2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Full Stack Developer
          </span>
        </h1>
        <p style={{ color: T.dim, fontSize: "16px", lineHeight: 1.6, maxWidth: "460px", margin: "0 0 28px" }}>
          Third-year CS student building with the MERN stack, with a strong interest in AI, ML and Data Science.
        </p>
        <div style={{ display: "flex", gap: "14px" }}>
          <a href="#projects" className="cta-primary" style={{ padding: "11px 24px", borderRadius: "8px", background: `linear-gradient(135deg, ${GRAD1}, ${GRAD2})`, color: "#211217", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
            View Projects
          </a>
          <a href="#contact" className="cta-ghost" style={{ padding: "11px 24px", borderRadius: "8px", border: `1px solid ${T.line}`, color: T.text, fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
            Contact Me
          </a>
        </div>

        <div style={{ display: "flex", gap: "16px", marginTop: "28px" }}>
          <a href={`mailto:${LINKS.email}`} className="icon-btn" style={{ border: `1px solid ${T.line}`, background: T.card, borderRadius: "50%", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Mail size={16} color={T.dim} />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="icon-btn" style={{ border: `1px solid ${T.line}`, background: T.card, borderRadius: "50%", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Linkedin size={16} color={T.dim} />
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="icon-btn" style={{ border: `1px solid ${T.line}`, background: T.card, borderRadius: "50%", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Github size={16} color={T.dim} />
          </a>
          <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="icon-btn" style={{ border: `1px solid ${T.line}`, background: T.card, borderRadius: "50%", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LeetCodeIcon size={16} color={T.dim} />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section" style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px" }}>
        <h2 style={{ fontSize: "13px", letterSpacing: "0.1em", color: GRAD1, fontWeight: 700, marginBottom: "16px" }}>ABOUT ME</h2>
        <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: "12px", padding: "28px", boxShadow: T.shadow }}>
          <p style={{ color: T.dim, lineHeight: 1.75, fontSize: "15px", margin: 0 }}>
            I'm a Full Stack Developer with a passion for AI and Data Science.
            I work primarily with the MERN stack — building clean UIs on the
            frontend and solid APIs on the backend. I'm deeply interested in
            how AI can be integrated into real-world applications, and I enjoy
            building projects that combine web development with intelligent
            systems. I'm a Technical Team member at Kryptonex Tech &
            Innovation Club and a member of the Lumi Vision Club. Currently
            looking for opportunities where I can build, learn, and grow.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
            {SKILLS.map((s) => (
              <span key={s} className="skill-pill" style={{ border: `1px solid ${T.line}`, borderRadius: "6px", padding: "6px 12px", fontSize: "13px", color: T.text, background: T.pillBg }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section" style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px" }}>
        <h2 style={{ fontSize: "13px", letterSpacing: "0.1em", color: GRAD1, fontWeight: 700, marginBottom: "16px" }}>PROJECTS</h2>
        <div style={{ display: "grid", gap: "16px" }}>
          {PROJECTS.map((p) => (
            <div key={p.name} className="proj-card" style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: "12px", padding: "24px", boxShadow: T.shadow }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 700 }}>{p.name}</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a href={p.github} target="_blank" rel="noreferrer" style={{ color: T.dim }}><Github size={16} /></a>
                  <a href={p.live} target="_blank" rel="noreferrer" style={{ color: T.dim }}><ExternalLink size={16} /></a>
                </div>
              </div>
              <p style={{ color: T.dim, fontSize: "14px", lineHeight: 1.6, margin: "0 0 14px" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ fontSize: "11px", color: GRAD1, border: `1px solid ${T.line}`, borderRadius: "4px", padding: "2px 8px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" style={{ maxWidth: "720px", margin: "0 auto", padding: "50px 24px 90px", textAlign: "center" }}>
        <h2 style={{ fontSize: "13px", letterSpacing: "0.1em", color: GRAD1, fontWeight: 700, marginBottom: "10px" }}>CONTACT</h2>
        <h3 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 10px" }}>Let's connect</h3>
        <p style={{ color: T.dim, fontSize: "15px", margin: "0 0 28px" }}>Open to full-time roles and interesting projects.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <a href={`mailto:${LINKS.email}`} className="icon-btn" style={{ border: `1px solid ${T.line}`, background: T.card, borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Mail size={18} color={T.text} />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="icon-btn" style={{ border: `1px solid ${T.line}`, background: T.card, borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Linkedin size={18} color={T.text} />
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="icon-btn" style={{ border: `1px solid ${T.line}`, background: T.card, borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Github size={18} color={T.text} />
          </a>
          <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="icon-btn" style={{ border: `1px solid ${T.line}`, background: T.card, borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LeetCodeIcon size={18} color={T.text} />
          </a>
          <a href={LINKS.resume} target="_blank" rel="noreferrer" className="icon-btn" style={{ border: `1px solid ${T.line}`, background: T.card, borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FileText size={18} color={T.text} />
          </a>
        </div>
      </section>
    </div>
  );
}
