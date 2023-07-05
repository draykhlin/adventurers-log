export default function toggleMenu() {
   const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
   const navbarLinks = document.getElementsByClassName('navbar-links')[0]

   toggleMenu.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
   })
}