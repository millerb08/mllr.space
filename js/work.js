const work = [
  {
    company: "Sabre Corporation",
    role: "Senior Software Engineer",
    period: "Oct 2025 – Jan 2026",
    badge: "done",
    description: "Took on more ownership as the team migrated infrastructure to GCP. Built WhatsApp messaging and an AI chatbot for customer support, kept the FastAPI layer healthy across internal and third-party integrations, and dug into legacy JS codebases when needed. Promoted to Senior based on impact and ownership.",
  },
  {
    company: "Sabre Corporation",
    role: "Software Engineer",
    period: "May 2022 – Sep 2025",
    badge: "done",
    description: "Spent three and a half years building and maintaining APIs and full-stack features for a large travel technology platform. Worked remotely across infrastructure, integrations, and product-facing development.",
  },
  {
    company: "Nuvola Inc.",
    role: "Web Developer",
    period: "Jan 2021 – Apr 2022",
    badge: "done",
    description: "Joined during the v5 push for a hotel management platform. Built the guest chat messaging module, modernized the UI, and worked across features in PHP, Laravel, and CodeIgniter.",
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
        <span class="work-period">${w.period}</span>
      </div>
      <div class="work-role">${w.role}</div>
      <p class="card-desc">${w.description}</p>
      ${w.tags && w.tags.length ? `
      <div class="tags">
        ${w.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>` : ""}
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderWork);
