let navBarList = document.querySelectorAll(".navbar-nav a");
for (let i = 1; i < navBarList.length;i++) {
  navBarList[i].addEventListener("click", function (event) {
    event.preventDefault();
    let targetId = this.textContent.trim().toLowerCase();
    let target = document.getElementById(targetId);
    let targetCoordinateTop = target.getBoundingClientRect().top;
    let interval = setInterval(function () {
      if (targetCoordinateTop <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
      targetCoordinateTop -= 50;
    },10);
  });
}
let btm = window.innerHeight;
let skills = document.querySelectorAll(".skill-progress>div");
let skillId = document.getElementById("skill-items");
var animationDone = 0;
window.addEventListener("scroll", checkScroll,animationDone);
function checkScroll() {
  if (!animationDone && skillId.getBoundingClientRect().top <= btm) {
    for (let i = 0; i < skills.length; i++){
      let skillWidth = skills[i].clientWidth;
      let iniWidth = 0;
      skills[i].style.width = "0px";
      let widthIncre = setInterval(function () {
        if (iniWidth >= skillWidth) {
          clearInterval(widthIncre);
          return;
        }
        skills[i].style.width = iniWidth + "px";
        iniWidth += 1;
      }, 10);

    }
    animationDone = 1;
  }
  return;
}
