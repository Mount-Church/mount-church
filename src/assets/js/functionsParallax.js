import { gsap } from 'gsap';
import ScrollReveal from 'scrollreveal';

export function initializeParallax() {
  /*====== MENU =====*/
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  };
  showMenu('nav-toggle', 'nav-menu');

  /*====== ANIMATE GSAP ======*/
  /*Navbar*/
  gsap.from('.nav__logo', { opacity: 0, duration: 3, delay: .5, y: 30, ease: 'expo.out' });
  gsap.from('.nav__toggle', { opacity: 0, duration: 3, delay: .7, y: 30, ease: 'expo.out' });
  gsap.from('.nav__item', { opacity: 0, duration: 3, delay: .7, y: 35, ease: 'expo.out', stagger: .2 });

  /*Text*/
  gsap.from('.home__title', { opacity: 0, duration: 3, delay: 1.3, y: 35, ease: 'expo.out' });
  gsap.from('.home__subtitle', { opacity: 0, duration: 3, delay: 1.1, y: 35, ease: 'expo.out' });
  gsap.from('.home__subtitleTexAbove', { opacity: 0, duration: 3, delay: 1.1, y: 35, ease: 'expo.out' });

  /*====== SCROLL REVEAL SECTION ======*/
  const sr = ScrollReveal({
    duration: 2500,
    reset: true,
  });

  /*Data*/
  sr.reveal('.section__data', { origin: 'left', distance: '70px' });

  /*Imgs*/
  sr.reveal('.section__img', { origin: 'left', distance: '90px', delay: 200 });
}