// * SERVICES TOGGLE
const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');

const getService = (category) => {
  const details = servicesData.find((item) => item.category === category);
  console.log(details);
  serviceDetails.innerHTML = `
      <h3>${details.title}</h3>
      ${details.description
        .map((paragraph) => '<p>' + paragraph + '</p>')
        .join('')}
  `;
};

const removeActiveClass = () => {
  servicesButtons.forEach((button) => {
    button.classList.remove('active');
  });
};

servicesButtons.forEach((item) => {
  item.addEventListener('click', () => {
    removeActiveClass();
    const serviceClass = item.classList[1];
    getService(serviceClass);
    item.classList.add('active');
  });
});

getService('frontend');

// * MIXITUP - Projects Section
const containerEl = document.querySelector('.projects__container');
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

mixer.filter('*');

// * SWIPER JS - Testimonials Section
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// * NAV TOGGLE
const btn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav__menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  navMenu.classList.toggle('nav-open');
});

// * Close Nav Menu on click of nav link on small screens i.e, < 780px
const navItems = navMenu.querySelectorAll('a');

if (window.innerWidth < 768) {
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navMenu.classList.toggle('nav-open');
      btn.classList.toggle('open');
    });
  });
}

// * DARK & LIGHT THEME TOGGLE FEATURE
const themeBtn = document.querySelector('.nav__theme-btn');

themeBtn.addEventListener('click', () => {
  let bodyClass = document.body.className;
  if (!bodyClass) {
    bodyClass = 'dark';
    document.body.className = bodyClass;
    // * change toggle icon
    themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
    // * save theme to local storage
    // window.localStorage.setItem('theme', bodyClass);
  } else {
    bodyClass = '';
    document.body.className = bodyClass;
    // * change toggle icon
    themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
    // * save theme to local storage
    // window.localStorage.setItem('theme', bodyClass);
  }
});

// * load theme on page load initially
window.addEventListener('load', () => {
  document.body.className = window.localStorage.getItem('theme');
});

// * Custom Mouse Cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 200, fill: 'forwards' }
  );
});
