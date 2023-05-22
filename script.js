const menuIcon = document.getElementById("menu-icon")
const navMobile = document.getElementById("navMobile")
let clicked = true;


function menu() {
  if (!clicked) {
    navMobile.style.display = "none"
  } else {
    navMobile.style.display = "block"
  }
  // Toggle the clicked state
  clicked = !clicked;
}
