const work = [
  {
    company: "Sabre Corporation",
    role: "Senior Software Engineer",
    period: "Oct 2025 – Jan 2026",
    badge: "done",
    description: "Collaborated on infrastructure and environment migration to GCP. Implemented WhatsApp-based messaging and an AI-powered chatbot for customer support. Designed and maintained RESTful API endpoints in FastAPI serving internal tools, customer-facing features, and third-party integrations. Worked with legacy JavaScript and jQuery codebases. Promoted to Senior Software Engineer based on technical impact and ownership.",
  },
  {
    company: "Sabre Corporation",
    role: "Software Engineer",
    period: "May 2022 – Sep 2025",
    badge: "done",
    description: "Designed and maintained RESTful API endpoints and full-stack features across a large-scale travel technology platform. Contributed to infrastructure work and third-party integrations over nearly three and a half years in a fully remote environment.",
  },
  {
    company: "Nuvola Inc.",
    role: "Web Developer",
    period: "Jan 2021 – Apr 2022",
    badge: "done",
    description: "Built the guest chat messaging module for the v5 release of a hotel management platform. Restructured and modernized the application UI, improving visual design and user experience. Developed and maintained features using PHP, Laravel, and CodeIgniter.",
  },
];

function renderWork() {
  const container = document.getElementById("work");
  if (!container) return;

  if (work.length === 0) {
    container.innerHTML = `<p class="card-desc" style="color:var(--fg-subtle)">// TODO: add work experience</p>`;
    return;
  }

  container.innerHTML = work.map((w) => `
    <div class="card">
      <div class="card-header">
        <span class="card-name">${w.company}</span>
        ${w.badge ? `<span class="badge" data-status="${w.badge}">${w.badge}</span>` : ""}
        <span class="mono" style="margin-left:auto;color:var(--fg-muted)">${w.period}</span>
      </div>
      <div style="font-size:13px;font-weight:500;color:var(--fg-muted);margin-bottom:8px">${w.role}</div>
      <p class="card-desc">${w.description}</p>
      <div class="tags">
        ${w.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderWork);
