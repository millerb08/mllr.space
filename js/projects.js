const projects = [
  {
    name: "HGC",
    badge: "in progress",
    description:
      "Health Gateway Colombia &mdash; a clinical data gateway that validates, transforms, and routes healthcare submissions to the Ministry of Health.",
    pipeline: [
      "Medical Systems",
      "Validation",
      "Canonical Model",
      "Ministry",
    ],
    endpoints: [
      { method: "GET", path: "/api/v1/health", desc: "liveness probe" },
      { method: "POST", path: "/api/v1/submit", desc: "clinical data intake" },
    ],
    tags: ["Python", "FastAPI", "Pydantic", "Docker", "Ansible"],
  },
];

function renderProjects() {
  const container = document.getElementById("projects");
  if (!container) return;

  container.innerHTML = projects.map((p) => `
    <div class="card">
      <div class="card-header">
        <span class="card-name">${p.name}</span>
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
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
