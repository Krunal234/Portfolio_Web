const skills = [
  {
    title: ".NET Backend Engineering",
    body: "APIs, services, domain logic, background processing, and clean backend boundaries built with modern .NET.",
    tags: [".NET 8", ".NET 10", "ASP.NET Core", "EF Core", "Dapper"],
    accent: "#42c6ff",
  },
  {
    title: "Database Engineering",
    body: "Comfortable with schema design, query tuning, transactional workflows, stored procedures, LINQ, and reporting-heavy data access.",
    tags: ["MySQL", "PostgreSQL", "MSSQL", "Stored Procedures", "LINQ"],
    accent: "#59e6b5",
  },
  {
    title: "Distributed Systems",
    body: "Event-driven services, caching, message brokers, and containerized runtime patterns for systems that need to keep moving.",
    tags: ["Kafka", "RabbitMQ", "Redis", "Docker", "Kubernetes"],
    accent: "#f3b45c",
  },
  {
    title: "Performance & Reliability",
    body: "Practical focus on latency, database round trips, idempotency, fault handling, diagnostics, and production supportability.",
    tags: ["Caching", "Retries", "Observability", "Profiling", "Resilience"],
    accent: "#ff7d9a",
  },
  {
    title: "API & Integration Work",
    body: "RESTful contracts, secure integrations, service-to-service communication, and backend workflows that stay understandable.",
    tags: ["REST APIs", "Auth", "Integrations", "DTOs", "Versioning"],
    accent: "#7ce7d1",
  },
  {
    title: "Delivery Mindset",
    body: "Senior-level ownership across estimation, refactoring, reviews, debugging, deployment readiness, and mentoring teammates.",
    tags: ["Code Review", "Ownership", "Mentoring", "Debugging", "Agile"],
    accent: "#8ab8ff",
  },
];

const architecture = [
  {
    title: "API Layer",
    body: "Clear contracts, validation, authorization, structured responses, and pragmatic separation between transport and domain logic.",
    accent: "#42c6ff",
  },
  {
    title: "Persistence Layer",
    body: "EF Core where productivity matters, Dapper or stored procedures where control and performance are the better fit.",
    accent: "#59e6b5",
  },
  {
    title: "Messaging Layer",
    body: "Kafka and RabbitMQ workflows for asynchronous processing, service decoupling, retries, and business event propagation.",
    accent: "#f3b45c",
  },
  {
    title: "Runtime Layer",
    body: "Docker and Kubernetes friendly services with caching, configuration, health checks, and environment-aware behavior.",
    accent: "#ff7d9a",
  },
];

const timeline = [
  {
    period: "2024 - Present",
    title: "Senior Software Engineer",
    body: "Owned backend modules, improved service reliability, designed database workflows, and helped teams ship production changes with stronger technical discipline.",
  },
  {
    period: "2022 - 2024",
    title: "Backend Software Engineer",
    body: "Built APIs, optimized SQL-heavy features, integrated message queues, and delivered maintainable .NET services across business-critical product areas.",
  },
  {
    period: "2020 - 2022",
    title: "Software Engineer",
    body: "Developed core application features, learned production debugging, strengthened database fundamentals, and grew into backend ownership.",
  },
];

const projects = [
  {
    title: "High-throughput Order Processing Platform",
    summary: "A showcase case study for event-driven .NET services with queue-based processing, SQL persistence, Redis caching, and operational visibility.",
    detail: "Add your real metrics here: throughput, latency improvement, incident reduction, database optimization wins, or cloud cost savings.",
    tags: [".NET", "Kafka", "Redis", "PostgreSQL", "Docker"],
  },
  {
    title: "Database Modernization & Query Optimization",
    summary: "A recruiter-friendly story around replacing slow data access paths with tuned LINQ, Dapper, stored procedures, and indexing strategy.",
    detail: "This section is designed for before-and-after numbers: query time reduction, reduced locks, improved reporting speed, and safer deployments.",
    tags: ["MSSQL", "Dapper", "EF Core", "Stored Procedures", "Indexing"],
  },
  {
    title: "Kubernetes-ready Service Architecture",
    summary: "A backend architecture case study for containerized APIs, environment configuration, health checks, and reliable service deployment.",
    detail: "Add examples of deployment flows, scaling behavior, monitoring, CI/CD, and how you handled service configuration across environments.",
    tags: ["Kubernetes", "Docker", ".NET APIs", "Health Checks", "CI/CD"],
  },
  {
    title: "Integration Hub for Business Workflows",
    summary: "A modular integration layer connecting third-party systems, internal services, background jobs, and auditable database state.",
    detail: "Use this slot for payment, ERP, CRM, identity, notification, or reporting integrations you have worked on.",
    tags: ["REST", "RabbitMQ", "MySQL", "Background Jobs", "Auth"],
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
