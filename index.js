// * SERVICES TOGGLE - Updated for Bento Grid
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

// * PROJECTS - Render
const containerEl = document.querySelector('.projects__container');

const renderProjects = () => {
  projects.forEach((project) => {
    const article = document.createElement('article');
    article.className = `glass-card project`;
    article.setAttribute('data-order', project.id);

    article.innerHTML = `
        <div class="project-card-image skeleton">
            <img src="${project.image}" alt="${
              project.title
            }" loading="lazy" width="400" height="200" onload="this.parentElement.classList.remove('skeleton'); this.classList.add('loaded')" />
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3>${project.title}</h3>
            ${project.isCaseStudy ? '<span class="badge case-study-badge">Featured Case Study</span>' : ''}
          </div>
          <p class="project-desc">${project.description}</p>
          
          <div class="project-metrics">
            <strong>Impact:</strong> ${project.impact}
          </div>

          <div class="project-features-list">
            <strong>Key Features:</strong>
            <ul>
              ${project.keyFeatures.map((feature) => `<li><i class="uil uil-check-circle"></i> ${feature}</li>`).join('')}
            </ul>
          </div>

          ${project.isCaseStudy ? `
          <div class="project-case-study">
            <p><strong>Architecture:</strong> ${project.architecture}</p>
            <p><strong>Challenges:</strong> ${project.challenges}</p>
          </div>
          ` : ''}

          <div class="project-tech-stack">
            ${project.techStack.map((tech) => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>

          <div class="project-badges">
            ${
              project.responsive
                ? '<i class="uil uil-desktop" title="Desktop Compatible" aria-hidden="true"></i> <i class="uil uil-mobile-android" title="Mobile Responsive" aria-hidden="true"></i> <span class="sr-only">Desktop and Mobile Responsive</span>'
                : '<i class="uil uil-desktop" title="Desktop Only" aria-hidden="true"></i> <span class="sr-only">Desktop Only</span>'
            }
          </div>
          <div class="project__cta">
              <a href="${
                project.repoLink
              }" class="btn btn-outline sm" target="_blank" rel="noopener noreferrer" title="Source Code" aria-label="View source code for ${project.title}"><i class="uil uil-github" aria-hidden="true"></i> Source</a>
              <a href="${
                project.demoLink
              }" class="btn btn-outline sm" target="_blank" rel="noopener noreferrer" title="Live Demo" aria-label="View live demo of ${project.title}"><i class="uil uil-link-alt" aria-hidden="true"></i> Live Demo</a>
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

// * CONSOLIDATED SCROLL HANDLER (performance: single listener with rAF)
const backToTopBtn = document.querySelector('.back-to-top');
const navLinks = document.querySelectorAll('.nav__menu a');
const scrollProgressCircle = document.querySelector('.progress-ring__circle');

// Pre-calculate the circle circumference once
const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

if (scrollProgressCircle) {
  scrollProgressCircle.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;
}

let scrollTicking = false;

const onScroll = () => {
  if (scrollTicking) return;
  scrollTicking = true;

  requestAnimationFrame(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // 1. Scroll Progress Ring
    if (scrollProgressCircle && scrollHeight > 0) {
      const scrollPercentage = scrollTop / scrollHeight;
      const offset = CIRCUMFERENCE - scrollPercentage * CIRCUMFERENCE;
      scrollProgressCircle.style.strokeDashoffset = offset;
    }

    // 2. Back-to-Top visibility
    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }

    // 3. Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (scrollTop > 0) {
        navbar.classList.add('navbar--scroll');
      } else {
        navbar.classList.remove('navbar--scroll');
      }
    }

    // 4. Scrollspy — active nav link
    let currentSection = '';

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 200) {
          currentSection = sectionId;
        }
      }
    });

    if (scrollTop < 300) {
      currentSection = 'about';
    }

    const scrollTotal =
      document.documentElement.scrollHeight - window.innerHeight;
    if (scrollTop >= scrollTotal - 50) {
      currentSection = 'contact';
    }

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });

    scrollTicking = false;
  });
};

window.addEventListener('scroll', onScroll, { passive: true });

// Back To Top Click
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// * NAV TOGGLE with aria-expanded + Escape key
const btn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav__menu');

const closeNav = () => {
  navMenu.classList.remove('nav-open');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
};

const openNav = () => {
  navMenu.classList.add('nav-open');
  btn.classList.add('open');
  btn.setAttribute('aria-expanded', 'true');
};

if (btn && navMenu) {
  btn.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('nav-open');
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close nav on link click (mobile)
  const navItems = navMenu.querySelectorAll('a');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        closeNav();
      }
    });
  });

  // Close nav with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('nav-open')) {
      closeNav();
      btn.focus(); // Return focus to the toggle button
    }
  });
}

// * DARK & LIGHT THEME TOGGLE FEATURE
const themeBtn = document.querySelector('.nav__theme-btn');

const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');

  if (isDark) {
    themeBtn.innerHTML = '<i class="uil uil-sun" aria-hidden="true"></i>';
    window.localStorage.setItem('theme', 'dark');
  } else {
    themeBtn.innerHTML = '<i class="uil uil-moon" aria-hidden="true"></i>';
    window.localStorage.setItem('theme', 'light');
  }
};

if (themeBtn) {
  themeBtn.addEventListener('click', toggleTheme);
}

// * Load theme on page load initially
window.addEventListener('load', () => {
  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeBtn) themeBtn.innerHTML = '<i class="uil uil-sun" aria-hidden="true"></i>';
  } else {
    document.body.classList.remove('dark-mode');
    if (themeBtn) themeBtn.innerHTML = '<i class="uil uil-moon" aria-hidden="true"></i>';
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

  // Magnetic/Hover Effect for links & buttons
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

// * DYNAMIC PROJECT COUNT
const projectCountEl = document.getElementById('project-count-val');
if (projectCountEl) {
  projectCountEl.innerText = `${projects.length}+`;
}
