const projects = [
  {
    name: "HGC",
    badge: "in progress",
    description:
      "Health Gateway Colombia &mdash; centralized clinical history API. EPSs and independent doctors submit patient data via HL7 FHIR, HGC validates, standardizes, stores, and delivers to the Ministry of Health. Like Factus, but for medical records.",
    pipeline: [
      "EPS / Doctors",
      "FHIR Validation",
      "PostgreSQL",
      "Ministry of Health",
    ],
    endpoints: [
      { method: "GET", path: "/api/v1/health", desc: "liveness probe" },
      { method: "POST", path: "/api/v1/fhir/bundle", desc: "FHIR Bundle intake" },
      { method: "GET", path: "/api/v1/submissions/{id}", desc: "delivery status" },
    ],
    tags: ["Python", "FastAPI", "HL7 FHIR", "PostgreSQL", "Docker", "GCP"],
  },
  {
    name: "Segurito",
    badge: "planned",
    description:
      "One app for all your insurance &mdash; find covered doctors, schedule appointments, authorize medicines and procedures, submit claims, and track everything. No more emails, calls, or outdated Excels.",
    pipeline: [
      "Policyholder",
      "Segurito App",
      "Insurance Providers",
    ],
    tags: ["Vue.js", "Electron", "Capacitor", "FastAPI", "PostgreSQL", "GCP"],
  },
  {
    name: "CH34L",
    badge: "planned",
    description:
      "EV Charging Aggregator &mdash; lightweight mobile app that brings together charging stations from multiple providers with real-time availability and payments.",
    tags: ["Vue.js", "Capacitor", "FastAPI"],
  },
];

function renderProjects() {
  const container = document.getElementById("projects");
  if (!container) return;

  container.innerHTML = projects.map((p) => `
    <div class="card">
      <div class="card-header">
        <span class="card-name">${p.name}</span>
        ${p.badge ? `<span class="badge" data-status="${p.badge}">${p.badge}</span>` : ""}
      </div>
      <p class="card-desc">${p.description}</p>
      ${p.pipeline ? `
        <div class="pipeline">
          ${p.pipeline.map((step, i) =>
            `<span class="pipeline-step">${step}</span>${i < p.pipeline.length - 1 ? '<span class="pipeline-arrow">&rarr;</span>' : ""}`
          ).join("")}
        </div>
      ` : ""}
      ${p.endpoints ? `
        <div class="endpoints">
          ${p.endpoints.map((e) => `
            <div class="endpoint">
              <span class="method method-${e.method.toLowerCase()}">${e.method}</span>
              <span class="endpoint-path">${e.path}</span>
              <span class="endpoint-desc">${e.desc}</span>
            </div>
          `).join("")}
        </div>
      ` : ""}
      <div class="tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
