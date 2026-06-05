import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "bogharakuldip@gmail.com",
    href: "mailto:bogharakuldip@gmail.com",
    color: "#00F5FF",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/kuldip-boghara",
    href: "https://www.linkedin.com/in/kuldip-boghara/",
    color: "#0A66C2",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/KuldipBoghara",
    href: "https://github.com/KuldipBoghara",
    color: "#7C3AED",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Ahmedabad, India",
    href: null,
    color: "#FF6B2B",
  },
];

const socials = [
  { icon: "⌂", label: "GitHub", href: "https://github.com/KuldipBoghara" },
  {
    icon: "💼",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kuldip-boghara/",
  },
  { icon: "📧", label: "Email", href: "mailto:bogharakuldip@gmail.com" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send (replace with EmailJS in production)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="section" ref={sectionRef}>
      {/* Glow orbs */}
      <div
        className="glow-orb glow-cyan absolute w-96 h-96 bottom-0 left-1/4 pointer-events-none"
        style={{ filter: "blur(100px)", opacity: 0.07 }}
      />
      <div
        className="glow-orb glow-violet absolute w-72 h-72 top-20 right-10 pointer-events-none"
        style={{ filter: "blur(100px)", opacity: 0.07 }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center mb-2">get in touch</p>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            My inbox is always open. 🚀
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-head text-xl font-semibold mb-2">Talk to me</h3>
            <p className="text-muted text-sm mb-8 leading-relaxed">
              I'm currently open to{" "}
              <span className="text-cyan-400">full-time roles</span>,
              <span className="text-violet-400"> freelance projects</span>, and
              <span className="text-orange-400"> collaborations</span>. Response
              time: usually within 24 hours.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-3 mb-8">
              {contactInfo.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-info-item"
                  >
                    <div
                      className="contact-icon-wrap rounded-xl"
                      style={{
                        background: item.color + "12",
                        border: `1px solid ${item.color}20`,
                      }}
                    >
                      <span>{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted">
                        {item.label}
                      </p>
                      <p className="text-sm text-white">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} className="contact-info-item">
                    <div
                      className="contact-icon-wrap rounded-xl"
                      style={{
                        background: item.color + "12",
                        border: `1px solid ${item.color}20`,
                      }}
                    >
                      <span>{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted">
                        {item.label}
                      </p>
                      <p className="text-sm text-white">{item.value}</p>
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Availability badge */}
            <div className="ai-highlight mb-6">
              <div className="flex items-center gap-3 relative z-10">
                <div className="open-to-work-dot w-3 h-3" />
                <div>
                  <p className="font-head font-semibold text-sm text-white mb-0.5">
                    Available for Work
                  </p>
                  <p className="text-xs text-muted">
                    Full-time · Freelance · Remote
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="social-links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input"
                  rows={6}
                  placeholder="Hi Kuldip, I'd love to chat about..."
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-primary w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
                {status === "sending" && (
                  <>
                    <svg
                      className="animate-spin"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray="31.416"
                        strokeDashoffset="10"
                      />
                    </svg>
                    Sending...
                  </>
                )}
                {status === "sent" && <>✓ Message Sent!</>}
                {status === "error" && "Try Again ↺"}
              </motion.button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-mono text-xs text-green-400 mt-3"
                >
                  🎉 Thanks! I'll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
