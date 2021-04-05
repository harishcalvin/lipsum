const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlink');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

            //close burger
            burger.classList.toggle('toggle');

    }); 
for (const navLink of navLinks) {
  navLink.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}
}

navSlide();
