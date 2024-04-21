const navMenu = document.querySelector(".nav-menu-ul")
const navMenuItems = document.querySelectorAll("#nav-menu-item")
function navMenuAppear() {
  console.log("working")
  navMenu.classList.toggle('activeNavMenu')
}
window.addEventListener('scroll', () => {
  if (pageYOffset > 1) {
    navMenu.classList.remove('activeNavMenu')
  }
})
navMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    navMenu.classList.remove('activeNavMenu')
  })
})