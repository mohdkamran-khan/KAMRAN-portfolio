import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  Moon,
  Sun,
  Send,
  FolderKanban,
  Wrench,
  ArrowUp,
} from "lucide-react";

const RESUME_URL = `${import.meta.env.BASE_URL}resume/KAMRAN_Resume.pdf`;

const projects = [
  {
    slug: "lms-mern",
    title: "Learning Management System (MERN)",
    description:
      "Full-featured LMS with authentication, role-based access, course pages, course search and progress tracking.",
    stack: ["MongoDB", "Express", "React", "Node", "Redux", "Tailwind"],
    link: "#",
    repo: "#",
    details:
      "Developed during internship. Optimized DB queries, implemented REST APIs, and integrated role-based access.",
  },
  {
    slug: "ebook-maven",
    title: "eBook Management Maven App",
    description:
      "JSP/Servlet + MySQL app for catalog & user management, role-based access, upload/buy/sell/search books. Deployed on Apache Tomcat.",
    stack: ["Java", "JSP", "Servlet", "MySQL", "Maven", "Tomcat"],
    link: "#",
    repo: "#",
    details:
      "Implemented using Java backend and JSP for views. Managed catalog and authentication with MySQL.",
  },
  {
    slug: "hotstar-clone",
    title: "Disney+ Hotstar Clone (React)",
    description: "Responsive UI with reusable components. Hosted on Netlify.",
    stack: ["React", "Netlify"],
    link: "https://hotstarclonekamran.netlify.app/",
    repo: "https://github.com/mohdkamran-khan",
    details: "Created a streaming app clone with a polished UI/UX.",
  },
  {
    slug: "Rock-Paper-Scissors-JS",
    title: "Rock Paper Scissors Game (JS)",
    description:
      "A simple Rock Paper Scissors game implemented in JavaScript with score tracking.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "#",
    repo: "#",
    details:
      "Implemented using JavaScript for game logic and HTML/CSS for layout. Features score tracking and responsive design.",
  },
  {
    slug: "myntra-clone",
    title: "Myntra Clone (JS)",
    description: "Responsive UI with product details and checkout feature.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "#",
    repo: "#",
    details: "Created a shopping app clone with a polished UI/UX.",
  },
  {
    slug: "To-Do List-JS",
    title: "To-Do List App (JS)",
    description:
      "A simple To-Do List app implemented in JavaScript with local storage.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "#",
    repo: "#",
    details:
      "Implemented using JavaScript for functionality and HTML/CSS for layout. Features local storage for task persistence.",
  },
];

const skills = [
  {
    group: "Languages",
    items: ["Java", "JavaScript", "SQL", "HTML", "CSS", "JSON"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React.js", "Redux", "Node.js", "Express.js", "JSP/Servlet", "JSTL", "Tailwind", "Bootstrap", "JWT"],
  },
  { group: "Databases", items: ["MongoDB", "MySQL", "RDBMS"] },
  {
    group: "Tools & Utilities",
    items: [
      "Git",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Postman",
      "Apache Tomcat",
      "Maven",
      "Multer",
      "Stripe",
      "Cloudinary",
    ],
  },
];

const experiences = [
  {
    role: "Full-Stack Web Developer (MERN) — Intern",
    company: "MindShift Technologies",
    period: "Jun 2025 – Sep 2025",
    points: [
      "Built & deployed a Learning Management System (LMS) using MERN stack.",
      "Optimized REST APIs and DB queries using Query Optimization for faster response times.",
      "Worked in Agile sprints, using Git for tracking & collaboration.",
    ],
  },
];

const education = [
  {
    title: "Diploma In Fullstack Java Programming",
    org: "Jain University, Bengaluru",
    year: "Sept 2025",
  },
  {
    title: "MERN Stack Certification Course",
    org: "Knowledge Gate",
    year: "Dec 2025",
  },
  {
    title: "AI/ML Certification Course",
    org: "Knowledge Gate",
    year: "Dec 2025",
  },
  {
    title: "JavaScript Certification Course",
    org: "Knowledge Gate",
    year: "June 2025",
  },
  {
    title: "Master's in Biotechnology (Hons., 8.8 CGPI)",
    org: "Integral University, Lucknow",
    year: "Jul 2022",
  },
  {
    title: "Bachelor's in Biotechnology (Hons., 8.44 CGPI)",
    org: "Integral University, Lucknow",
    year: "Sep 2020",
  },
];

export default function PortfolioSite() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 dark:from-slate-900 dark:to-slate-950 dark:text-slate-100 font-inter"
    >
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
        <nav className="max-w-7xl mx-auto px-3 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="font-semibold tracking-tight text-lg">
              Kamran.dev
            </span>
          </div>
          <div className="flex items-center gap-5 text-base">
            <a
              href="#projects"
              className="hover:underline hidden sm:flex items-center gap-1"
            >
              <FolderKanban className="h-4 w-4" /> Projects
            </a>
            <a
              href="#skills"
              className="hover:underline hidden sm:flex items-center gap-1"
            >
              <Wrench className="h-4 w-4" /> Skills
            </a>
            <a
              href="#experience"
              className="hover:underline hidden sm:flex items-center gap-1"
            >
              <Briefcase className="h-4 w-4" /> Experience
            </a>
            <a
              href="#education"
              className="hover:underline hidden sm:flex items-center gap-1"
            >
              <GraduationCap className="h-4 w-4" /> Education
            </a>
            <a
              href="#contact"
              className="hover:underline hidden sm:flex items-center gap-1"
            >
              <Send className="h-4 w-4" /> Contact
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <a
              href={RESUME_URL}
              download="KAMRAN_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
            >
              <Download className="h-5 w-5" /> Resume
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-7">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mohd Kamran Khan
          </h1>
          <p className="mt-3 text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Full-Stack Developer • MERN & Java • Building clean, scalable web
            apps
          </p>
          <div className="flex flex-wrap items-center gap-3 text-base text-slate-600 dark:text-slate-300 mt-4">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-5 w-5" /> Lucknow, UP &nbsp;|
            </span>
            <span className="inline-flex items-center gap-1">
              <Mail className="h-5 w-5" /> khanmohdkamran@yahoo.com &nbsp;|
            </span>
            <span className="inline-flex items-center gap-1">
              <Phone className="h-5 w-5" /> +91 94151 95895
            </span>
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-4 md:gap-3 pt-5 justify-start items-center">
            <a
              href="https://github.com/mohdkamran-khan"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2 border rounded-xl flex items-center gap-1 hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kamran-khan-316a5937b"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2 border rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="px-2 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
            >
              <Briefcase className="h-5 w-5" /> Hire Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-300 dark:border-slate-700 max-w-7xl mx-auto px-6 mt-12"></div>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2 underline">
            <FolderKanban className="h-6 w-6" /> Projects
          </h2>
          <a
            href="https://github.com/mohdkamran-khan"
            target="_blank"
            rel="noreferrer"
            className="text-base hover:underline flex items-center gap-1"
          >
            View all <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <div className="rounded-2xl border p-6 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-3">{p.title}</h3>
                <p className="text-base text-slate-600 dark:text-slate-300 mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  {p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 border rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                  )}
                  {/* {p.repo !== "#" && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 border rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                  )} */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 underline">
          <Wrench className="h-6 w-6" /> Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl border p-6 bg-white dark:bg-slate-800 shadow-sm"
            >
              <h3 className="font-medium text-lg mb-3">{group.group}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 md:px-12 py-12"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 underline">
          <Briefcase className="h-6 w-6" /> Experience
        </h2>
        <div className="grid gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="rounded-2xl border p-6 bg-white dark:bg-slate-800 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-lg">{exp.role}</h3>
                <span className="text-sm text-slate-500">{exp.period}</span>
              </div>
              <p className="text-base text-slate-600 dark:text-slate-300 mb-3">
                {exp.company}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base">
                {exp.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 underline">
          <GraduationCap className="h-6 w-6" /> Education
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, idx) => (
            <div
              key={idx}
              className="rounded-2xl border p-6 bg-white dark:bg-slate-800 shadow-sm"
            >
              <h3 className="font-medium text-lg">{ed.title}</h3>
              <p className="text-base text-slate-600 dark:text-slate-300">
                {ed.org}
              </p>
              <p className="text-sm text-slate-500">{ed.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="rounded-2xl border p-8 md:p-10 bg-white dark:bg-slate-800 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
            <Send className="h-6 w-6" /> Let’s connect to build something great!
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Open to full-time roles in Full-Stack / Frontend Development. Let's
            discuss how I can contribute to your team!
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border rounded-md px-4 py-3 text-base bg-slate-50 dark:bg-slate-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border rounded-md px-4 py-3 text-base bg-slate-50 dark:bg-slate-700"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full border rounded-md px-4 py-3 text-base bg-slate-50 dark:bg-slate-700"
              required
            ></textarea>
            <div className="flex flex-wrap gap-4 justify-start items-center">
              <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 text-base"
              >
                <Mail className="h-5 w-5" /> Send Message
              </button>
              <a
                href={RESUME_URL}
                download="KAMRAN_Resume.pdf"
                className="px-3 py-2 border rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                <Download className="h-5 w-5" /> Download Resume
              </a>
            </div>
          </form>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Separator */}
        <div className="border-t border-slate-300 dark:border-slate-700"></div>
      </div>
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} | Mohd Kamran Khan.
      </footer>

      <AnimatePresence>
        {showTopBtn && (
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
