
const starcont = document.body;
const starim = "img/star.png";

for (let i = 0; i < 8; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.innerHTML = `<img src="${starim}" alt="">`;

  star.style.left = "-50px";
  star.style.top = (10 + i * 9) + "%";
  star.style.animationDuration = (3 + Math.random() * 2) + "s";
  star.style.animationDelay = (Math.random() * 5) + "s";

  starcont.appendChild(star);
}
