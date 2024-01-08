const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

// const handleOnMouseMove = e => {
// const {currentTarget: target} = e;

// const rect = target.getBoundingClientReact(),
// x = e.clientX - rect.left,
// y = e.clientY - rect.top;
// target.style.setProperty("--mouse-x", '${x}px');
// target.style.setProperty("--mouse-y", '${y}px');
// }

// for(const glass of document.querySelectorAll(".glass")) {
//     glass.onmousemove = e => handleOnMouseMove(e);
// }
