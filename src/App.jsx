import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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
import {
  SiCredly,
  SiDiscord,
  SiGithub,
  SiKaggle,
  SiLinkedin,
} from "react-icons/si";
import { GrAchievement } from "react-icons/gr";

const RESUME_URL = `${import.meta.env.BASE_URL}resume/Kamran_Resume.pdf`;

const projects = [
  {
    slug: "lms-mern",
    title: "Learning Management System (MERN)",
    description:
      "Full-featured LMS with authentication, role-based access, course pages, course search and progress tracking.",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Redux",
      "JWT",
      "Multer",
      "Tailwind",
    ],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/MT",
    details:
      "Developed during internship. Optimized DB queries, implemented REST APIs, and integrated role-based access.",
  },
  {
    slug: "ebook-maven",
    title: "eBook Management App (Maven)",
    description:
      "JSP/Servlet + MySQL app for catalog & user management, role-based access, upload/buy/sell/search books. Deployed on Apache Tomcat.",
    stack: ["JSP", "Servlet", "MySQL", "Maven", "Tomcat"],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/Ebook",
    details:
      "Implemented using Java backend and JSP for views. Managed catalog and authentication with MySQL.",
  },
  {
    slug: "Event-Tracker-MERN",
    title: "Event Tracker (MERN)",
    description:
      "Clean & Responsive event tracker built with MERN Stack. CRUD functionality and search features.",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Axios",
      "Morgan",
      "Tailwind",
    ],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/Mini-Event-Tracker",
    details:
      "Implemented using MERN for functionality and React/Tailwind for layout. Features responsive design and local storage for event persistence.",
  },
  {
    slug: "Ask-Your-PDF",
    title: "Ask Your PDF (React) - Google & Kaggle Capstone Project",
    description:
      "Clean & responsive webpage built with React.js where you can upload any PDF and ask AI to summarize & ask related questions.",
    stack: [
      "React",
      "Node",
      "Express",
      "Tailwind",
      "Multer",
    ],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/AskYourPDF",
    details:
      "Implemented using React for functionality and Tailwind for layout. Features responsive design & uses Fetch API for PDF parsing.",
  },
  {
    slug: "Portfolio-React",
    title: "Portfolio (React)",
    description:
      "Simple & responsive portfolio built with React.js to represent my skills & achievements.",
    stack: [
      "React",
      "Node",
      "Tailwind",
      "Framer Motion",
      "Form Submit"
    ],
    link: "https://mohdkamran-khan.github.io/KAMRAN-portfolio/",
    repo: "https://github.com/mohdkamran-khan/KAMRAN-portfolio",
    details:
      "Implemented using React for functionality and Tailwind for layout. Features responsive design & contact form.",
  },
  {
    slug: "Rock-Paper-Scissors-JS",
    title: "Rock Paper Scissors Game (JS)",
    description:
      "A simple Rock Paper Scissors game implemented in JavaScript with score tracking.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/RockPaperScissorsGame",
    details:
      "Implemented using JavaScript for game logic and HTML/CSS for layout. Features score tracking and responsive design.",
  },
  {
    slug: "airbnb-clone",
    title: "Airbnb Clone (Node.js)",
    description:
      "An Airbnb inspired clone completely rendered via backend with database management, user authentication and media management.",
    stack: ["Node.js", "HTML", "EJS", "Tailwind", "MongoDB"],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/Airbnb-Clone",
    details:
      "Clone of Airbnb rendered completely from backend using Node.js",
  },
  {
    slug: "airbnb-frontend",
    title: "Airbnb Frontend Clone (React.js)",
    description:
      "An Airbnb inspired fully responsive frontend clone built in React.js, Vite & Tailwind .",
    stack: ["React.js", "HTML", "JS", "Vite", "Tailwind"],
    link: "https://mohdkamran-khan.github.io/Airbnb-Frontend/",
    repo: "https://github.com/mohdkamran-khan/Airbnb-Frontend",
    details:
      "Clone of Airbnb frontend built using React.js & Tailwind.",
  },
  {
    slug: "hotstar-clone",
    title: "Disney+ Hotstar Clone (React)",
    description: "Responsive UI with reusable components. Hosted on Netlify.",
    stack: ["React", "Netlify"],
    link: "https://hotstarclonekamran.netlify.app/",
    repo: "https://github.com/mohdkamran-khan/HotStar-Clones",
    details: "Created a streaming app clone with a polished UI/UX.",
  },
  {
    slug: "myntra-clone",
    title: "Myntra Clone (JS)",
    description: "Responsive UI with product details and checkout feature.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/Myntra_Clone",
    details: "Created a shopping app clone with a polished UI/UX.",
  },
  {
    slug: "QR-Code-Generator-JS",
    title: "QR Code Generator (JS)",
    description:
      "A simple and responsive web application that allows you to generate QR codes for any URL or text, and optionally embed a custom logo inside the QR code.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/QR-Code-Generator",
    details:
      "Implemented using JavaScript for functionality and HTML/CSS for layout.",
  },
  {
    slug: "To-Do List-JS",
    title: "To-Do List App (JS)",
    description:
      "A simple To-Do List app implemented in JavaScript with local storage for task persistence.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/Todo-List",
    details:
      "Implemented using JavaScript for functionality and HTML/CSS for layout. Features local storage for task persistence.",
  },
  {
    slug: "Calculator-JS",
    title: "Calculator (JS)",
    description:
      "A simple, elegant Calculator perfect for basic arithmetic with a clean UI.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "#",
    repo: "https://github.com/mohdkamran-khan/Calculator",
    details:
      "Implemented using JavaScript for functionality and HTML/CSS for layout.",
  },
];

const skills = [
  {
    group: "Languages",
    items: ["Java", "JavaScript", "SQL", "HTML", "CSS", "JSON", "EJS"],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "JSP/Servlet",
      "JSTL",
      "JWT",
      "WordPress",
      "Tailwind",
      "Bootstrap",
      "ShadCN",
      "Machine Learning",
      "LLM",
    ],
  },
  {
    group: "Databases",
    items: ["MongoDB", "AWS", "Azure", "MySQL", "PHP", "GraphQL", "Oracle", "RDBMS"],
  },
  {
    group: "Tools & Utilities",
    items: [
      "Git",
      "Cursor",
      "Amazon Q Developer",
      "Blockchain Development",
      "Prompt Engineering",
      "Cybersecurity",
      "Stripe",
      "Cloudinary",
      "Framer Motion",
      "Form Submit",
      "SendGrid",
      "Low-Level Design",
    ],
  },
];

const experiences = [
  {
    role: "Frontend Developer (React) — Intern",
    company: "Skillfied Mentor",
    period: "Dec 2025 – Mar 2026",
    points: [
      "Strengthening my React skill.",
      "Gaining hands-on experience and contributing to real world projects.",
      "Learning to work in agile sprints & collaborating with colleagues.",
    ],
  },
  {
    role: "Full Stack Web Developer (MERN) — Intern",
    company: "MindShift Technologies",
    period: "Jun 2025 – Sep 2025",
    points: [
      "Built LMS with JWT authentication, role-based access, and REST APIs.",
      "Designed optimized MongoDB schemas, reducing API response by 30%.",
      "Integrated Cloudinary uploads and Stripe payments for 100+ users.",
    ],
  },
];

const extracurricular = [
  {
    points: [
      "Participated in 5 day AI Agents Intensive Course by Google & Kaggle & built a Capstone Project 'Ask Your PDF' that uses AI to summarize PDF's & answer related questions.",
      "Participated in Google DevFest, Lucknow 2025.",
      "Participated in Google Cloud Skills Boost and achieved Level3: Gen AI Badge.",
      "Achieved Diamond League Badge on Google Cloud Skills.",
      "Participated in Ethical Hacking Workshop by Skill Lab & AITD.",
      "Participated in Low-level Design Masterclass by Scaler Academy.",
      "Participated in Web Development Bootcamp with HTML CSS PHP MySQL Wordpress by Udemy",
      "Student Council & Alumni Association — Managed projects, student relations, convocations and fests.",
      "NSS — Volunteered in community health and education programs.",
      "Participated in Inter Departmental University Sports Meet - Cricket & Volley Ball.",
      "5+ ★ & 2 achievement badges on GitHub.",
    ],
  },
];

const education = [
  {
    title: "Post Graduate Certification In Fullstack Java Programming",
    org: "Jain University, Bengaluru",
    year: "Sept 2025",
  },
  {
    title: "MERN Stack Certification Course",
    org: "Knowledge Gate",
    year: "Dec 2025",
  },
  {
    title: "Fundamentals of AI/ML",
    org: "AWS Training & Certification",
    year: "Nov 2025",
  },
  {
    title: "AI/ML Certification Course",
    org: "Knowledge Gate",
    year: "Dec 2025",
  },
  {
    title: "Introduction to Prompt Engineering with GitHub Copilot",
    org: "Microsoft & SkillUP",
    year: "Nov 2025",
  },
  {
    title: "Fundamentals of LLM",
    org: "Hugging Face Instructors",
    year: "Nov 2025",
  },
  {
    title: "Amazon Q Developer",
    org: "AWS Training & Certification",
    year: "Nov 2025",
  },
  {
    title: "Blockchain Developer Training",
    org: "Simplilearn & SkillUP",
    year: "Nov 2025",
  },
  {
    title: "Cybersecurity Fundamentals ",
    org: "IBM",
    year: "Nov 2025",
  },
  {
    title: "Introduction to Machine Learning",
    org: "Kaggle",
    year: "Nov 2025",
  },
  {
    title: "JavaScript Certification Course",
    org: "Knowledge Gate",
    year: "June 2025",
  },
  {
    title: "React Hooks Crash Course",
    org: "Great Stack",
    year: "Oct 2025",
  },
  {
    title: "Professional Diploma: Customer Centricity & Design Thinking",
    org: "Udemy",
    year: "Dec 2025",
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
  const [isOpen, setIsOpen] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Step 1: Trigger download
      const link = document.createElement("a");
      link.href = RESUME_URL;
      link.download = "Kamran_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Step 2: Show prompt to view the PDF
      if (!document.getElementById("view-pdf-link")) {
        const viewLink = document.createElement("a");
        viewLink.id = "view-pdf-link";
        viewLink.href = RESUME_URL;
        viewLink.target = "_blank";
        viewLink.textContent = "View resume";
        viewLink.style.position = "fixed";
        viewLink.style.bottom = "30px";
        viewLink.style.left = "50%";
        viewLink.style.transform = "translateX(-50%)";
        viewLink.style.padding = "12px 24px";
        viewLink.style.backgroundColor = "#2563EB";
        viewLink.style.color = "#fff";
        viewLink.style.borderRadius = "8px";
        viewLink.style.fontSize = "16px";
        viewLink.style.textAlign = "center";
        viewLink.style.zIndex = "9999";
        viewLink.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        viewLink.style.textDecoration = "none";

        document.body.appendChild(viewLink);

        // Remove the prompt after 10 seconds
        setTimeout(() => {
          if (viewLink.parentNode) viewLink.parentNode.removeChild(viewLink);
        }, 10000);
      }
    } else {
      // Desktop: open in new tab and download automatically
      window.open(RESUME_URL, "_blank", "noopener,noreferrer");

      const link = document.createElement("a");
      link.href = RESUME_URL;
      link.download = "Kamran_Resume.pdf";
      link.click();
    }
  };

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    // Default to light if nothing is stored
    return storedTheme ? storedTheme === "dark" : false;
  });

  // Update localStorage + <html> class whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
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

  const [formSuccess, setFormSuccess] = useState(false);

  // Check query params for success
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setFormSuccess(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Auto-hide after 5s
  useEffect(() => {
    if (formSuccess) {
      const timer = setTimeout(() => setFormSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [formSuccess]);

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-900 dark:from-slate-900 dark:to-slate-950 dark:text-slate-50 font-inter"
    >
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
        <nav className="max-w-7xl mx-auto px-3 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Code2 className="h-6 w-6" />
            <a
              className="font-semibold tracking-tight text-lg hover:scale-105"
              href="#top"
            >
              Kamran.dev
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 text-base">
            <a
              href="#about"
              className="hover:underline flex items-center gap-1"
            >
              <Code2 className="h-4 w-4" /> About Me
            </a>
            <a
              href="#projects"
              className="hover:underline flex items-center gap-1"
            >
              <FolderKanban className="h-4 w-4" /> Projects
            </a>
            <a
              href="#skills"
              className="hover:underline flex items-center gap-1"
            >
              <Wrench className="h-4 w-4" /> Skills
            </a>
            <a
              href="#experience"
              className="hover:underline flex items-center gap-1"
            >
              <Briefcase className="h-4 w-4" /> Experience
            </a>
            <a
              href="#education"
              className="hover:underline flex items-center gap-1"
            >
              <GraduationCap className="h-4 w-4" /> Education
            </a>
            <a
              href="#contact"
              className="hover:underline flex items-center gap-1"
            >
              <Send className="h-4 w-4" /> Contact
            </a>

            {/* Always visible */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border hover:scale-105 hover:shadow-2xl border-slate-300 dark:border-slate-700"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <a
              href={RESUME_URL}
              onClick={handleResumeClick}
              download="Kamran_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:scale-105 drop-shadow-lg shadow-lg shadow-blue-500/50 hover:bg-blue-700 flex items-center gap-2 cursor-pointer"
            >
              <Download className="h-5 w-5" /> Resume
            </a>
          </div>

          {/* Mobile Actions (always visible) */}
          <div className="flex items-center gap-3 lg:hidden">
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
              onClick={handleResumeClick}
              download="Kamran_Resume.pdf"
              className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1 cursor-pointer text-sm"
            >
              <Download className="h-4 w-4" /> Resume
            </a>

            {/* Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md relative w-6 h-6"
              >
                <motion.span
                  className="absolute top-0 left-0 w-6 h-0.5 bg-slate-900 dark:bg-slate-50 rounded"
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-2.5 left-0 w-6 h-0.5 bg-slate-900 dark:bg-slate-50 rounded"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-5 left-0 w-6 h-0.5 bg-slate-900 dark:bg-slate-50 rounded"
                  animate={
                    isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu Dropdown with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden px-4 pb-4 flex flex-col gap-4 
                 bg-white/50 dark:bg-slate-900/50 
                 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 rounded-b-xl items-center"
            >
              <a
                href="#about"
                className="hover:underline flex items-center gap-1 mt-4"
              >
                <Code2 className="h-4 w-4" /> About Me
              </a>
              <a
                href="#projects"
                className="hover:underline flex items-center gap-1"
              >
                <FolderKanban className="h-4 w-4" /> Projects
              </a>
              <a
                href="#skills"
                className="hover:underline flex items-center gap-1"
              >
                <Wrench className="h-4 w-4" /> Skills
              </a>
              <a
                href="#experience"
                className="hover:underline flex items-center gap-1"
              >
                <Briefcase className="h-4 w-4" /> Experience
              </a>
              <a
                href="#education"
                className="hover:underline flex items-center gap-1"
              >
                <GraduationCap className="h-4 w-4" /> Education
              </a>
              <a
                href="#contact"
                className="hover:underline flex items-center gap-1"
              >
                <Send className="h-4 w-4" /> Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
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
          <p className="mt-3 text-lg md:text-xl text-slate-600 dark:text-slate-300 cursor-context-menu">
            Full-Stack Developer • MERN & Java • Building clean, scalable web
            apps
          </p>
          <div className="flex flex-wrap items-center gap-3 text-base text-slate-600 dark:text-slate-300 mt-4">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-5 w-5 cursor-context-menu" /> Lucknow, UP &nbsp;|
            </span>
            <a
              className="inline-flex items-center gap-1 cursor-pointer hover:scale-105"
              href="mailto:mohdkamrankhan.dev@gmail.com"
            >
              <Mail className="h-5 w-5" /> mohdkamrankhan.dev@gmail.com &nbsp;|
            </a>
            <a
              className="inline-flex items-center gap-1 cursor-pointer hover:scale-105"
              href="tel:+919415195895"
            >
              <Phone className="h-5 w-5" /> +91 94151 95895
            </a>
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-4 md:gap-3 pt-5 justify-start items-center">
            <a
              href="https://github.com/mohdkamran-khan"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2 border border-gray-600 rounded-xl flex items-center gap-1 hover:scale-105 hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <SiGithub className="h-5 w-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohdkamran-khan"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2 border border-gray-600 rounded-xl flex items-center gap-2 hover:scale-105 hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <SiLinkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="px-2 py-2 rounded-xl bg-blue-600 text-white hover:scale-105 hover:shadow-2xl hover:bg-blue-700 flex items-center gap-2"
            >
              <Briefcase className="h-5 w-5" /> Hire Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-300 dark:border-slate-700 max-w-7xl mx-auto px-6 mt-12"></div>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto -mb-10 px-6 md:px-12 py-10"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 cursor-context-menu underline">
          <Code2 className="h-6 w-6" /> About Me
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          I specialize in end-to-end <b>Web Development</b> using <b>MERN</b>{" "}
          stack, with a strong focus on building scalable, responsive and secure
          solutions. I design and implement <b>REST APIs</b> with <b>JWT</b>{" "}
          authentication to ensure robust access control, and have hands-on
          experience in integrating <b>Stripe</b>, <b>Razorpay</b>, and{" "}
          <b>Cloudinary</b> for real-world features of payments and media
          management. <br /> <br />I am skilled in deploying applications using{" "}
          <b>AWS</b>, <b>Docker</b>, and modern <b>CI/CD</b> pipelines, ensuring
          reliability and efficiency. Alongside web development, I bring a
          strong foundation in <b>Java</b>, <b>SQL</b>, and <b>Maven</b>
          , enabling me to confidently deliver enterprise-level projects. <br />{" "}
          <br />I also work with <b>Blockchain</b> and <b>Web3</b> integrations,
          and leverage <b>AI/ML, LLMs, Cybersecurity</b> and{" "}
          <b>Prompt Engineering</b> to build smarter and more adaptive
          application features.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center cursor-context-menu gap-2 underline">
            <FolderKanban className="h-6 w-6" /> Projects
          </h2>
          <a
            href="https://github.com/mohdkamran-khan"
            target="_blank"
            rel="noreferrer"
            className="text-base hover:underline hover:scale-105 hover:shadow-2xl flex items-center gap-1"
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
              <div className="rounded-2xl border p-6 bg-white hover:shadow-2xl dark:bg-slate-800 shadow-sm transition hover:">
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
                <div className="flex gap-3 mt-5 text-sm items-center justify-center">
                  {p.repo !== "#" && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 border border-gray-600 rounded-xl flex items-center gap-2 hover:scale-110 hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      <SiGithub className="h-4 w-4" /> Code
                    </a>
                  )}
                  {p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 border border-gray-600 rounded-xl flex items-center gap-2 hover:scale-110 hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 cursor-context-menu underline">
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
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 cursor-context-menu underline">
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
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 cursor-context-menu underline">
          <GraduationCap className="h-6 w-6" /> Education
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, idx) => (
            <div
              key={idx}
              className="rounded-2xl border p-6 bg-white dark:bg-slate-800 shadow-sm flex flex-col items-center text-center"
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

      {/* Extracurricular */}
      <section
        id="extracurricular"
        className="max-w-7xl mx-auto px-6 md:px-12 mt-12"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 cursor-context-menu underline">
          <GrAchievement className="h-6 w-6" /> Extracurricular & Achievements
        </h2>
        <div className="grid gap-6">
          {extracurricular.map((ext, i) => (
            <div
              key={i}
              className="rounded-2xl border p-6 bg-white dark:bg-slate-800 shadow-sm"
            >
              <ul className="list-disc pl-5 space-y-2 text-base">
                {ext.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="rounded-2xl border p-8 bg-white dark:bg-slate-800 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 cursor-context-menu">
            <Send className="h-6 w-6" /> Let’s connect to build something great!
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Open to full-time roles in Full-Stack / Frontend Development. Let's
            discuss how I can contribute to your team!
          </p>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/mohdkamrankhan.dev@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://mohdkamran-khan.github.io/KAMRAN-portfolio/?success=true"
            />

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

            <div className="flex gap-4 items-center">
              <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-blue-600 text-white hover:scale-105 hover:shadow-2xl hover:bg-blue-700 flex items-center gap-2"
              >
                <Mail className="h-5 w-5" /> Send Message
              </button>
              <a
                href={RESUME_URL}
                onClick={handleResumeClick}
                download="Kamran_Resume.pdf"
                className="px-4 py-3 border border-gray-600 rounded-xl flex items-center gap-2 hover:scale-105 hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
              >
                <Download className="h-5 w-5" /> Download Resume
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Toast Notification Container */}
      <AnimatePresence>
        {formSuccess && (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed top-6 right-6 z-50"
          >
            <div className="p-4 rounded-xl bg-blue-100 text-blue-900 border border-blue-300 shadow-lg flex items-center justify-between gap-4 min-w-[280px] overflow-auto">
              <span className="text-sm font-medium">
                Thanks for reaching out! I’ll get back to you soon.
              </span>
              <button
                onClick={() => setFormSuccess(false)}
                className="text-blue-700 font-bold hover:text-red-600"
              >
                ✖
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        {/* Separator */}
        <div className="border-t border-slate-300 dark:border-slate-700"></div>
      </div>
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-slate-500 cursor-context-menu">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
          <a
            href="https://github.com/mohdkamran-khan"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg hover:scale-105 hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <SiGithub className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohdkamran-khan"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg hover:scale-105 hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <SiLinkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://discordapp.com/users/1438054169339760721"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg hover:scale-105 hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <SiDiscord className="h-4 w-4" /> Discord
          </a>
          <a
            href="https://www.kaggle.com/mohdkhankamran"
            target="_blank"
            rel="noreferrer"
            aria-label="Kaggle"
            className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg hover:scale-105 hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <SiKaggle className="h-4 w-4" /> Kaggle
          </a>
          <a
            href="https://www.credly.com/users/mohdkamrankhan"
            target="_blank"
            rel="noreferrer"
            aria-label="Credly"
            className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg hover:scale-105 hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <SiCredly className="h-4 w-4" /> Credly
          </a>
          <a
            href="https://www.commudle.com/users/mohdkamrankhan"
            target="_blank"
            rel="noreferrer"
            aria-label="Commudle"
            className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg hover:scale-105 hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <img
              src="commudle-logo.png"
              alt="Commudle"
              className="h-4 w-4 object-contain"
            />
            Commudle
          </a>
        </div>
        <br />© {new Date().getFullYear()} | Mohd Kamran Khan
      </footer>

      <AnimatePresence>
        {showTopBtn && (
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition m-1"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
