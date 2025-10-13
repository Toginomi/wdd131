const mentors = [
  { name: "Andrew Mendoza", role: "Founder, CEO", img: "images/mentor-drew.jpg" },
  { name: "Zoe Pasiliao", role: "Co-founder", img: "images/mentor-zoe.jpg" },
  { name: "Rudy Pilande II", role: "Co-founder", img: "images/mentor-rudy.jpg" },
  { name: "Lawrence Petilos", role: "Science Tutor", img: "images/mentor-pets.jpg" },
  { name: "Jann Uy", role: "Science Tutor", img: "images/mentor-jann.jpg" },
  { name: "Hadj Sumagang", role: "English Tutor", img: "images/mentor-hadj.jpg" },
  { name: "Jericho Lapinid", role: "Math Tutor", img: "images/mentor-jericho.jpg" },
  { name: "Jefferson Amores", role: "Abstract Tutor", img: "images/mentor-jeff.jpg" },
  { name: "Diane Serra", role: "Science Tutor", img: "images/mentor-diane.jpg" },
  { name: "Shantle Catignas", role: "English Tutor", img: "images/mentor-shan.jpg" },
];

function createMentorCard(mentor) {
  return `
    <div class="mentor-card">
      <img src="${mentor.img}" alt="${mentor.name}">
      <p class="mentor-name">${mentor.name}</p>
      <p class="mentor-role">${mentor.role}</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const mentorGrid = document.querySelector(".mentor-grid");
  if (!mentorGrid) return;

  let mentorsToDisplay = [];
  const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname === "/tys/";

  if (isIndexPage) {
    mentorsToDisplay = mentors.filter(m => m.role.toLowerCase().includes("founder"));
  } else {
    mentorsToDisplay = mentors;
  }

  mentorGrid.innerHTML = mentorsToDisplay.map(createMentorCard).join("");
});
