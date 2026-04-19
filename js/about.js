const about = {
  bio: "Software Engineer with five years of experience designing and building RESTful APIs, architecting full-stack solutions, and migrating infrastructure to GCP. Comfortable across the entire stack — from database schema to UI — with a track record of delivering in both fast-moving startup environments and large enterprise teams. Currently leveraging AI-assisted development workflows to ship faster without cutting corners.",
};

function renderAbout() {
  const container = document.getElementById("about");
  if (!container) return;

  container.innerHTML = `
    <div class="card">
      <p class="card-desc">${about.bio}</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderAbout);
