const about = {
  bio: "Software Engineer from the Caribbean coast of Colombia <img src='https://flagcdn.com/co.svg' alt='Colombia' style='width:22px;height:16px;vertical-align:middle;border-radius:3px;margin:0 4px;box-shadow:rgba(255,255,255,0.1) 0px 0px 0px 1px'> with five years of experience building APIs, full-stack products, and cloud infrastructure. I've worked across startups and enterprise teams, and I'm comfortable at any layer of the stack. These days I also lean on AI tooling to move faster and stay focused on what actually matters.",
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
