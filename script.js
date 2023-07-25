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
