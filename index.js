// * SERVICES TOGGLE - Updated for Bento Grid
// In the new layout, we might not need the dynamic toggle, but let's keep it safe or remove it.
// Since the new layout uses static bento cards for services, I'll comment this out or update it.
const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');

if (serviceDetails && servicesButtons.length > 0) {
  const getService = (category) => {
    const details = servicesData.find((item) => item.category === category);
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
}

// * MIXITUP - Projects Section
// * MIXITUP - Projects Section
const containerEl = document.querySelector('.projects__container');

// * SCROLL PROGRESS & BACK TO TOP
const scrollProgress = document.getElementById('scroll-progress');
// * SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll(
  'section[id], header[id], article[id]',
);
const backToTopBtn = document.querySelector('.back-to-top');
const navLinks = document.querySelectorAll('.nav__menu a');

window.addEventListener('scroll', () => {
  // Scroll Progress
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;

  if (scrollProgress) {
    scrollProgress.style.width = `${scrolled}%`;
  }

  // Back To Top Visibility
  if (backToTopBtn) {
    if (scrollTop > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  // Scrollspy logic
  let currentSection = '';

  navLinks.forEach((link) => {
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      // If the section is in the middle-top area of the viewport
      if (rect.top <= 250 && rect.bottom >= 200) {
        currentSection = sectionId;
      }
    }
  });

  // Default to About at the top
  if (window.scrollY < 300) {
    currentSection = 'about';
  }

  // Ensure Contact at the bottom
  const scrollTotal =
    document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY >= scrollTotal - 50) {
    currentSection = 'contact';
  }

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// Back To Top Click
// Back To Top Click
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

const renderProjects = () => {
  projects.forEach((project) => {
    const article = document.createElement('article');
    article.className = `glass-card project`; // Removed 'mix' and category classes
    article.setAttribute('data-order', project.id);

    // Initial HTML with Skeleton classes where appropriate or handling the load
    article.innerHTML = `
        <div class="project-card-image skeleton">
            <img src="${project.image}" alt="${
              project.title
            }" loading="lazy" width="100%" height="auto" onload="this.parentElement.classList.remove('skeleton'); this.classList.add('loaded')" />
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-badges">
            ${
              project.responsive
                ? '<i class="uil uil-desktop" title="Desktop Compatible"></i> <i class="uil uil-mobile-android" title="Mobile Responsive"></i>'
                : '<i class="uil uil-desktop" title="Desktop Only"></i>'
            }
          </div>
          <div class="project__cta">
              <a href="${
                project.repoLink
              }" class="btn btn-outline sm" target="_blank"><i class="uil uil-github"></i></a>
              <a href="${
                project.demoLink
              }" class="btn btn-outline sm" target="_blank"><i class="uil uil-link-alt"></i></a>
          </div>
        </div>
    `;

    containerEl.appendChild(article);

    // Initialize Tilt for this card
    if (typeof VanillaTilt !== 'undefined') {
      VanillaTilt.init(article, {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    }
  });
};

// Initial Render
if (containerEl) {
  renderProjects();
}

// * NAVBAR BACKGROUND CHANGE ON-SCROLL
// Navigation background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});

// * NAV TOGGLE
const btn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav__menu');

if (btn && navMenu) {
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    navMenu.classList.toggle('nav-open');

    // Toggle Icon
    const icon = btn.querySelector('i');
    if (navMenu.classList.contains('nav-open')) {
      icon.classList.replace('uil-bars', 'uil-multiply');
    } else {
      icon.classList.replace('uil-multiply', 'uil-bars');
    }
  });

  // * Close Nav Menu on click of nav link on small screens i.e, < 780px
  const navItems = navMenu.querySelectorAll('a');

  if (window.innerWidth < 768) {
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('nav-open');
        btn.classList.remove('open');
        const icon = btn.querySelector('i');
        icon.classList.replace('uil-multiply', 'uil-bars');
      });
    });
  }
}

// * DARK & LIGHT THEME TOGGLE FEATURE
const themeBtn = document.querySelector('.nav__theme-btn');

const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');

  if (isDark) {
    themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
    window.localStorage.setItem('theme', 'dark');
  } else {
    themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
    window.localStorage.setItem('theme', 'light');
  }
};

if (themeBtn) {
  themeBtn.addEventListener('click', toggleTheme);
}

// * load theme on page load initially
window.addEventListener('load', () => {
  const savedTheme = window.localStorage.getItem('theme');
  // Default is light. If saved is 'dark', add class.
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeBtn) themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
  } else {
    document.body.classList.remove('dark-mode');
    if (themeBtn) themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
  }
});

// * Custom Mouse Cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

if (cursorDot && cursorOutline) {
  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 250, fill: 'forwards' },
    );
  });

  // * Magnetic/Hover Effect for links & buttons
  const interactiveElements = document.querySelectorAll(
    'a, button, .btn, .nav__theme-btn',
  );

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.classList.add('cursor-hover');
      cursorDot.classList.add('cursor-dot-hide');
    });

    el.addEventListener('mouseleave', () => {
      cursorOutline.classList.remove('cursor-hover');
      cursorDot.classList.remove('cursor-dot-hide');
    });
  });
}
// * CONTACT FORM AJAX SUBMISSION
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    try {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending...';

      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        formStatus.innerHTML = 'Thanks! Your message has been sent. ✨';
        formStatus.className = 'success';
        formStatus.style.display = 'block';
        contactForm.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.errors?.[0]?.message || 'Submission failed');
      }
    } catch (error) {
      formStatus.innerHTML = `Oops! ${error.message}`;
      formStatus.className = 'error';
      formStatus.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = 'Send Message';

      // Auto-hide message after 5 seconds
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 5000);
    }
  });
}

// * DYNAMIC COPYRIGHT YEAR
const copyrightYear = document.getElementById('copyright-year');
if (copyrightYear) {
  copyrightYear.innerText = new Date().getFullYear();
}
