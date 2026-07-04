const themeButtons = document.querySelectorAll("[data-theme-option]");
const storedTheme = localStorage.getItem("portfolio-theme") || "professional";

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeButtons.forEach((button) => {
    const isActive = button.dataset.themeOption === theme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem("portfolio-theme", theme);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.themeOption));
});

applyTheme(storedTheme);

const skills = [
  {
    title: "Backend & API Engineering",
    body: "Production REST APIs, ASP.NET Core MVC services, dependency injection, LINQ-heavy workflows, and secure service boundaries.",
    tags: ["C#", "ASP.NET Core", "REST API", "EF Core", "LINQ"],
    accent: "#42c6ff",
  },
  {
    title: "Data & Query Performance",
    body: "Multi-provider persistence, schema optimization, EF Core no-tracking strategies, indexing, and analysis-driven query refactoring.",
    tags: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "SQLite"],
    accent: "#59e6b5",
  },
  {
    title: "Events & Messaging",
    body: "Event-driven delivery with Kafka, RabbitMQ, Debezium CDC, SignalR notifications, outbox reliability, and queue strategy.",
    tags: ["Kafka", "RabbitMQ", "Debezium CDC", "SignalR", "Outbox Pattern"],
    accent: "#f3b45c",
  },
  {
    title: "Security & Reliability",
    body: "OAuth2/OpenID Connect aligned flows, AES-GCM encryption, opaque token architecture, Redis validation, and production-safe logging.",
    tags: ["OAuth2", "OpenID Connect", "AES-GCM", "Redis", "Serilog"],
    accent: "#ff7d9a",
  },
  {
    title: "Azure & Cloud Workflows",
    body: "Serverless functions, blob and queue storage, app services, API management, monitoring, and cloud-native operational patterns.",
    tags: ["Azure Functions", "Blob Storage", "Azure SQL", "Azure DevOps", "App Insights"],
    accent: "#7ce7d1",
  },
  {
    title: "Delivery & Quality",
    body: "Agile delivery, code reviews, unit and integration testing, load testing, continuous improvement, and collaborative technical decisions.",
    tags: ["Unit Testing", "Integration Testing", "JMeter", "Code Reviews", "Agile"],
    accent: "#8ab8ff",
  },
];

const architecture = [
  {
    title: "Secure API Layer",
    body: "RESTful ASP.NET Core endpoints with Redis-backed session validation, opaque tokens, OAuth2/OpenID Connect alignment, and AES-GCM protection.",
    accent: "#42c6ff",
  },
  {
    title: "Persistence Layer",
    body: "EF Core interceptors, multi-database provider abstraction, no-tracking optimization, schema tuning, and cross-provider maintainability.",
    accent: "#59e6b5",
  },
  {
    title: "Messaging Layer",
    body: "Kafka-backed audit events, RabbitMQ queue workflows, Debezium CDC, SignalR distribution, and decoupled event delivery.",
    accent: "#f3b45c",
  },
  {
    title: "Operations Layer",
    body: "Serilog, ELK Stack, Azure Monitor, Application Insights, CI/CD with Azure DevOps, and incident-friendly production visibility.",
    accent: "#ff7d9a",
  },
];

const timeline = [
  {
    period: "May 2026 - Present",
    title: "Senior Software Engineer | Wissen Technology",
    body: "Working in a fintech product engineering environment on distributed microservices built with .NET 10, leading the migration from .NET 8 to .NET 10 and implementing resilience policies across multiple services to strengthen reliability and fault tolerance.",
  },
  {
    period: "July 2025 - May 2026",
    title: "Senior Software Engineer | Enablistar Pvt Ltd",
    body: "Reduced login REST API latency by 60%, designed secure opaque access-token architecture, built an EF Core audit trail framework with Kafka, and delivered multi-database provider support across Oracle, PostgreSQL, SQL Server, MySQL, and SQLite.",
  },
  {
    period: "June 2022 - July 2025",
    title: "Software Engineer | Zeus Learning",
    body: "Built Debezium CDC and SignalR notification workflows, Azure Functions pipelines, RabbitMQ queue processing, Angular MVC features, and MySQL migration work that improved query execution by 20%.",
  },
  {
    period: "January 2022 - May 2022",
    title: "Software Engineer Intern | Zeus Learning",
    body: "Integrated 10+ RESTful API endpoints using Node.js within Agile sprints while gaining production exposure to CI/CD pipelines, collaborative delivery, and backend release workflows.",
  },
  {
    period: "July 2018 - May 2022",
    title: "Bachelor of Engineering in Computer Science | Maharaj Sayajirao University",
    body: "Completed computer science engineering in Vadodara, India, building the technical foundation behind backend systems, databases, web engineering, and software delivery.",
  },
];

const projects = [
  {
    title: "Secure Login API Acceleration",
    summary: "Reduced login REST API latency by 60% using Redis-backed session validation and a secure opaque access-token system.",
    detail: "Designed around AES-GCM encryption and OAuth2/OpenID Connect standards, this work shows performance improvement and security architecture judgment in the same story.",
    tags: ["ASP.NET Core", "Redis", "OAuth2", "OpenID Connect", "AES-GCM"],
  },
  {
    title: "Audit Trail Framework",
    summary: "Architected a reusable audit trail framework with EF Core interceptors, Outbox Pattern, Kafka, and analysis-ready audit logs.",
    detail: "The framework decouples event delivery from transactional work and improves observability across distributed services while keeping audit behavior reusable.",
    tags: ["EF Core", "Interceptors", "Kafka", "Outbox Pattern", "Observability"],
  },
  {
    title: "Multi-Database Provider Abstraction",
    summary: "Engineered an EF Core abstraction supporting Oracle, PostgreSQL, SQL Server, MySQL, and SQLite from a maintainable provider model.",
    detail: "This project highlights backend platform thinking: portability, long-term maintainability, and clean persistence boundaries across database engines.",
    tags: ["EF Core", "Oracle", "PostgreSQL", "SQL Server", "MySQL"],
  },
  {
    title: "Real-time Notification & Queue Pipelines",
    summary: "Built Debezium CDC and SignalR notification workflows while scaling RabbitMQ-backed course-processing pipelines by 40%.",
    detail: "Combined event delivery, Azure Blob Storage distribution, serverless workflows, queue tuning, and collaborative architecture decisions for resilient processing.",
    tags: ["Debezium CDC", "SignalR", "RabbitMQ", "Azure Functions", "Blob Storage"],
  },
  {
    title: "High-traffic CAPTCHA Modernization",
    summary: "Modernized an audio CAPTCHA service with FastAPI and in-memory processing, achieving a 98% response-time improvement.",
    detail: "The work focused on stabilizing behavior under peak concurrent load while translating user requirements into a practical performance redesign.",
    tags: ["FastAPI", "Python", "Performance", "Concurrency", "Load"],
  },
  {
    title: "MySQL Migration & Query Refactoring",
    summary: "Executed a migration to MySQL and improved query execution times by 20% through schema optimization and index restructuring.",
    detail: "A data-driven refactoring story showing practical database performance work, analysis, and production-minded migration execution.",
    tags: ["MySQL", "Indexes", "Schema Design", "Query Tuning", "Data Analysis"],
  },
];

const skillBoard = document.querySelector("#skillBoard");
const architectureGrid = document.querySelector("#architectureGrid");
const timelineEl = document.querySelector("#timeline");
const projectGrid = document.querySelector("#projectGrid");

function renderList(items, renderer, target) {
  target.innerHTML = items.map(renderer).join("");
}

renderList(
  skills,
  (item) => `
    <article class="skill-card" style="--accent: ${item.accent}">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <ul>${item.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
    </article>
  `,
  skillBoard
);

renderList(
  architecture,
  (item) => `
    <article class="architecture-card" style="--accent: ${item.accent}">
      <h3><strong>//</strong> ${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `,
  architectureGrid
);

renderList(
  timeline,
  (item) => `
    <article class="timeline-item">
      <time>${item.period}</time>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `,
  timelineEl
);

renderList(
  projects,
  (item, index) => `
    <article class="project-card" tabindex="0">
      <div>
        <div class="project-top">
          <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
          <button type="button" aria-label="Expand ${item.title}">+</button>
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="project-details">
          <div><p>${item.detail}</p></div>
        </div>
      </div>
      <ul>${item.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
    </article>
  `,
  projectGrid
);

document.querySelectorAll(".project-card").forEach((card) => {
  const button = card.querySelector("button");
  const title = card.querySelector("h3").textContent;
  const toggle = () => {
    const isOpen = card.classList.toggle("is-open");
    button.textContent = isOpen ? "-" : "+";
    button.setAttribute("aria-label", `${isOpen ? "Collapse" : "Expand"} ${title}`);
  };
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggle();
  });
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", (event) => {
    if (event.target !== card) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });
});

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

const progress = document.querySelector(".progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
});

const canvas = document.querySelector(".system-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(90, Math.floor(window.innerWidth / 15)) }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: Math.random() * 1.8 + 0.7,
  }));
}

function animateNetwork() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((point, index) => {
    point.x += point.vx;
    point.y += point.vy;

    if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1;
    if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1;

    ctx.beginPath();
    ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(89, 230, 181, 0.72)";
    ctx.fill();

    for (let next = index + 1; next < particles.length; next += 1) {
      const other = particles[next];
      const distance = Math.hypot(point.x - other.x, point.y - other.y);
      if (distance < 128) {
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = `rgba(66, 198, 255, ${0.18 - distance / 900})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animateNetwork);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  resizeCanvas();
  animateNetwork();
  window.addEventListener("resize", resizeCanvas);
}
