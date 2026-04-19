const skills = [
  {
    group: "Languages",
    items: ["Python", "PHP", "JavaScript"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Laravel", "CodeIgniter", "REST APIs"],
  },
  {
    group: "Frontend",
    items: ["Vue.js", "jQuery"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Google Cloud Platform", "Google Pub/Sub", "Docker", "Terraform", "Jenkins", "GitHub Actions"],
  },
  {
    group: "Data",
    items: ["MySQL", "Couchbase"],
  },
  {
    group: "Monitoring",
    items: ["Splunk"],
  },
  {
    group: "Tooling",
    items: ["Git", "AI-assisted development"],
  },
];

function renderSkills() {
  const container = document.getElementById("skills");
  if (!container) return;

  if (skills.length === 0) {
    container.innerHTML = `<p class="card-desc" style="color:var(--fg-subtle)">// TODO: add skills</p>`;
    return;
  }

  container.innerHTML = `
    <div class="card">
      ${skills.map((g) => `
        <div class="skills-group">
          <div class="skills-group-label">${g.group}</div>
          <div class="tags">
            ${g.items.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderSkills);
