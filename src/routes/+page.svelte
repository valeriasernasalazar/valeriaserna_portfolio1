<script>
  import { onMount } from "svelte";
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import Projects from '$lib/Projects.svelte';
  import Books from '$lib/Books.svelte';
  import FunStuff from "$lib/FunStuff.svelte";
  import Contact from "$lib/Contact.svelte";
  
  const navLinks = [
    { id: "home", label: "Home", href: "/home" },
    { id: "about", label: "About Me", href: "/about" },
    { id: "projects", label: "Projects", href: "/#projects" },  
    { id: "books", label: "Books", href: "/#books"},
    { id: "fun", label: "Fun Stuff" },
    { id: "contact", label: "Contact" },
  ];

  let randomFact = "Data science is 80% cleaning data and 20% complaining about cleaning data.";
  const facts = [
    "The term 'data scientist' was coined in 2008.",
    "90% of the world's data was created in the last two years.",
    "Python is the most used programming language for data science.",
    "Netflix saves $1 billion annually with machine learning.",
    "The first-ever database was created in 1960.",
  ];

  function generateRandomFact() {
    randomFact = facts[Math.floor(Math.random() * facts.length)];
  }
  
  // Mobile menu toggle
  let mobileMenuOpen = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
    document.body.style.overflow = '';
  }
  
  // Handle keyboard events for menu overlay
  function handleOverlayKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      closeMobileMenu();
    }
  }
  
  // Handle smooth scroll to sections
  function handleNavClick(event, href) {
    const url = new URL(href, window.location.origin);
    
    // Check if it's a hash link on the same page
    if (url.hash && (url.pathname === window.location.pathname || href.startsWith('/#'))) {
      event.preventDefault();
      closeMobileMenu();
      
      const targetId = url.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without triggering navigation
        history.pushState(null, '', url.hash);
      }
    } else if (href === '/' || href === '') {
      // Handle home link
      event.preventDefault();
      closeMobileMenu();
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', '/');
      }
    }
  }
  
  /* Desktop menu handling */
  let scrolling = false;
  
  onMount(() => {
    function handleScroll() {
      scrolling = true;
    }
    
    function updateNavbar() {
      if (scrolling) {
        const nav = document.querySelector('nav');
        if (window.scrollY > 10) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        scrolling = false;
      }
      requestAnimationFrame(updateNavbar);
    }
    
    // Handle browser back/forward buttons
    function handlePopState() {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // No hash means we're at the home section
        const homeSection = document.getElementById('home');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    requestAnimationFrame(updateNavbar);
    
    // Handle initial page load with hash
    if (window.location.hash) {
      setTimeout(() => {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    
    // Add event listener for eye movement
    const moveEyes = (e) => {
      const leftEye = document.getElementById("leftEye");
      const rightEye = document.getElementById("rightEye");
      const leftEyeBall = document.getElementById("leftEyeBall");
      const rightEyeBall = document.getElementById("rightEyeBall");
      
      if (leftEye && rightEye && leftEyeBall && rightEyeBall) {
        const eyes = [
          { eye: leftEye, ball: leftEyeBall },
          { eye: rightEye, ball: rightEyeBall }
        ];
        
        eyes.forEach(({ eye, ball }) => {
          const rect = eye.getBoundingClientRect();
          const eyeX = rect.left + rect.width / 2;
          const eyeY = rect.top + rect.height / 2;
          const dx = e.clientX - eyeX;
          const dy = e.clientY - eyeY;
          const angle = Math.atan2(dy, dx);
          const maxDistance = rect.width / 4;
          const distance = Math.min(Math.sqrt(dx * dx + dy * dy), maxDistance);
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          
          ball.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };
    
    // Reset eyes position
    const resetEyes = () => {
      const leftEyeBall = document.getElementById("leftEyeBall");
      const rightEyeBall = document.getElementById("rightEyeBall");
      
      if (leftEyeBall && rightEyeBall) {
        leftEyeBall.style.transform = "translate(0, 0)";
        rightEyeBall.style.transform = "translate(0, 0)";
      }
    };
    
    document.addEventListener("mousemove", moveEyes);
    document.addEventListener("mouseout", resetEyes);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener("mousemove", moveEyes);
      document.removeEventListener("mouseout", resetEyes);
    };
  });
</script>

<style>
/* Global Styles */
:global(html) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-size: 85%;
    background: rgba(27, 38, 59, 0.95);
    color: #EAEAEA;
    scroll-behavior: smooth;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
}

:global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
}

:global(html) {
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.container {
  padding-top: 82.4px; /* 70 / 0.85 */
  width: 117.6vw;  /* 100 / 0.85 */
  height: 117.6vh;
  overflow: auto;
  scroll-snap-type: none;
  scroll-padding-top: 0;
  zoom: 0.85;
}

.container section {
  min-height: 117.6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #1b263b;
  color: #eaeaea;
}
/* Nav Styling */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(13, 27, 42, 0.95);
  z-index: 99;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Enhanced styles when scrolled - applied via :global() to avoid unused selector warning */
:global(nav.scrolled) {
  background: rgba(13, 27, 42, 0.98) !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4) !important;
}

@media (min-width: 768px) {
  nav {
    padding: 1rem 2rem;
  }
}

/* Enhanced styles when scrolled */
nav.scrolled {
  background: rgba(13, 27, 42, 0.98);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

nav ul {
  list-style: none;
  display: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  nav ul {
    display: flex;
    gap: 1.5rem;
  }
}

/* Mobile menu button */
.mobile-menu-toggle {
  display: block;
  background: none;
  border: none;
  color: #ADB6C4;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;
}

@media (min-width: 768px) {
  .mobile-menu-toggle {
    display: none;
  }
}

/* Mobile menu styles */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: #0D1B2A;
  z-index: 100;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  padding: 5rem 2rem 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu ul {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
}

.mobile-menu ul li {
  list-style-type: none;
}

.mobile-menu ul li a {
  color: #ADB6C4;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.mobile-menu ul li a:hover {
  color: #C05746;
}

.mobile-menu-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #EAEAEA;
  font-size: 1.5rem;
  cursor: pointer;
}

nav > ul li a {
  color: #ADB6C4;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

nav > ul li a:hover {
  color: #C05746;
}

/* Profile styling */
.profile-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile {
  position: relative;
  width: 60px;
  height: 60px;
}

@media (min-width: 768px) {
  .profile {
    width: 80px;
    height: 80px;
  }
}

.profile img {
  width: 100%;
  border-radius: 50%;
}

/* Eye styling */
.eye {
  position: absolute;
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  z-index: 10;
}

@media (min-width: 768px) {
  .eye {
    width: 16px;
    height: 16px;
  }
}

.eye-ball {
  position: relative;
  width: 50%;
  height: 50%;
  background: black;
  border-radius: 50%;
  transition: transform 0.1s;
}

#leftEye {
  position: absolute;
  top: 40%;
  left: 30%;
  transform: translate(-50%, -50%);
}

#rightEye {
  position: absolute;
  top: 40%;
  right: 30%;
  transform: translate(50%, -50%);
}

@media (min-width: 768px) {
  #leftEye {
    top: 35%;
    left: 45%;
  }

  #rightEye {
    top: 35%;
    right: 35%;
  }
}

/* Section Styling */
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(27, 38, 59, 0.95);
  position: relative;
}

@media (min-width: 768px) {
  section {
    padding: 2rem;
  }
}

/* Home Section */
#home {
    color: #EAEAEA;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 117.6vh;
    padding: 20px;
    background: rgba(27, 38, 59, 0.95);
}

#home h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #C05746;
}

@media (min-width: 768px) {
  #home h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
}

#home p {
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 3rem;
  line-height: 1.4;
  margin-top: -0.5rem;
}

@media (min-width: 768px) {
  #home p {
    font-size: 1.4rem;
    margin-bottom: 5rem;
    line-height: 1.5;
    margin-top: -1.0rem;
  }
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .cta-buttons {
    flex-direction: row;
    gap: 0;
  }
}

.cta-buttons a {
  background: #C05746;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;
  width: 200px;
}

@media (min-width: 768px) {
  .cta-buttons a {
    padding: 1rem 2rem;
    margin: 0.5rem;
    width: auto;
  }
}

.cta-buttons a:hover {
  background: #AD6A6C;
  transform: scale(1.05);
}

/* About Section */
#about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(27, 38, 59, 0.95);
    color: #ffffff;
    padding: 2rem 1rem;
    gap: 2rem;
}

@media (min-width: 768px) {
  #about {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 50px 180px;
  }
}

#about h1 {
    font-size: 1.5rem;
    color: #C05746;
    margin-bottom: 15px;
    font-weight: bold;
    margin-top: 1rem;
    text-align: center;
}

@media (min-width: 768px) {
  #about h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    margin-top: 0;
    text-align: left;
  }
}

#about p {
    font-size: 1.6rem;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #EAEAEA;
    text-align: left;
}

@media (min-width: 768px) {
  #about p {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: justify;
    margin-right: 60px;
  }
}

#about .text {
  order: 2;
}

#about img {
  width: 60%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;
  order: 1;
}

@media (min-width: 768px) {
  #about .text {
    order: 1;
  }
  
  #about img {
    width: 20%;
    height: 20%;
    margin-bottom: 0;
    order: 2;
  }
}

#about .cta-buttons {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

@media (min-width: 768px) {
  #about .cta-buttons {
    justify-content: flex-start;
  }
}

#about .cta-buttons a {
    width: 100%;
    max-width: 300px;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
}

@media (min-width: 768px) {
  #about .cta-buttons a {
    padding: 1rem 2rem;
    max-width: none;
  }
}

/* Other sections */
section h2 {
  font-size: 2rem;
  margin-bottom: 1.2rem;
  color: #C05746;
}

@media (min-width: 768px) {
  section h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
}

section p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ffffff;
}

@media (min-width: 768px) {
  section p {
    font-size: 1.5rem;
    line-height: 1.8;
  }
}

button {
  padding: 0.75rem 1.5rem;
  background: #C05746;
  border: none;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;
}

button:hover {
  background: #AD6A6C;
  transform: scale(1.05);
}

/* Prevent hover effects on touch devices */
@media (hover: none) {
  .cta-buttons a:hover,
  button:hover,
  nav ul li a:hover {
    transform: none;
  }
}

/* Overlay for mobile menu */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.menu-overlay.visible {
  opacity: 1;
  visibility: visible;
}

.projectsf, .booksf, .funstufff, .contactmef {
  margin-top: 10vh;
}
.inline-link {
  color: #C05746;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
  cursor: pointer;
}
.inline-link:hover {
  color: #AD6A6C;
  text-decoration: underline;
}
</style>

<nav>
  <div class="profile-container">
    <div class="profile">
      <img src="{base}/profile-valeriamariasernasalazar.png" alt="Valeria María Serna Salazar" />
      <div class="eye" id="leftEye">
        <div class="eye-ball" id="leftEyeBall"></div>
      </div>
      <div class="eye" id="rightEye">
        <div class="eye-ball" id="rightEyeBall"></div>
      </div>
    </div>
  </div>
  
  <!-- Desktop menu -->
  <ul>
    <li><a href="/" on:click={(e) => handleNavClick(e, '/')}>Home</a></li>
    <li><a href="#about" on:click={(e) => handleNavClick(e, '#about')}>About Me</a></li>
    <li><a href="/#projects" on:click={(e) => handleNavClick(e, '/#projects')}>Projects</a></li>
    <li><a href="/#books" on:click={(e) => handleNavClick(e, '/#books')}>Books</a></li>
    <li><a href="/#fun" on:click={(e) => handleNavClick(e, '/#fun')}>Fun Stuff</a></li>
    <li><a href="/#contact" on:click={(e) => handleNavClick(e, '/#contact')}>Contact</a></li>
  </ul>
  
  <!-- Mobile menu button -->
  <button class="mobile-menu-toggle" on:click={toggleMobileMenu} aria-label="Toggle navigation menu">
    ☰
  </button>
</nav>

<!-- Mobile menu sidebar -->
<div class="mobile-menu {mobileMenuOpen ? 'open' : ''}">
  <button class="mobile-menu-close" on:click={closeMobileMenu}>×</button>
  <ul>
    <li><a href="/" on:click={(e) => handleNavClick(e, '/')}>Home</a></li>
    <li><a href="#about" on:click={(e) => handleNavClick(e, '#about')}>About Me</a></li>
    <li><a href="/#projects" on:click={(e) => handleNavClick(e, '/#projects')}>Projects</a></li>
    <li><a href="/#books" on:click={(e) => handleNavClick(e, '/#books')}>Books</a></li>
    <li><a href="/#fun" on:click={(e) => handleNavClick(e, '/#fun')}>Fun Stuff</a></li>
    <li><a href="/#contact" on:click={(e) => handleNavClick(e, '/#contact')}>Contact</a></li>
  </ul>
</div>

<!-- Overlay for mobile menu with proper accessibility -->
<div 
  class="menu-overlay {mobileMenuOpen ? 'visible' : ''}" 
  on:click={closeMobileMenu}
  on:keydown={handleOverlayKeydown}
  role="button"
  tabindex="0"
  aria-label="Close menu overlay"
></div>

<div class="container">
  <section id="home">
    <h1>Hi, I'm Valeria Serna</h1>
    <p>Data Engineer | Expert at turning coffee ☕ and code 💻 into scalable systems for data-driven impact.</p>
    <div class="cta-buttons">
      <a href="/#projects" on:click={(e) => handleNavClick(e, '/#projects')}>View My Projects</a>
      <a href="/#contact" on:click={(e) => handleNavClick(e, '/#contact')}>Contact Me</a>
    </div>
  </section>

  <section id="about">
    <div class="text">
      <h1>Valeria María Serna Salazar</h1>
      <p class="p11">

        Hello, I'm Valeria Serna, a data engineer that enjoys finding structure in chaos. I'm particularly passionate about building data pipelines and systems that make data reliable, accesible, and useful for gathering meaningful insights. I currently use Python, SQL, and cloud platforms like AWS to create efficient data workflows.

      </p>
      <p class="p11">
        My B.S. in Data Science and Applied Mathematics from Tecnológico de Monterrey gave me a strong background in statistics, data analysis, AI, cybersecurity, ML, and mathematical optimization, which allows me to approach everyday tasks and possible challenges that could arise with a unique perspective and skill set.
      </p>
      <p class="p11">
        Besides the technical side of things, I love collaborating with interdisciplinary teams to solve problems and deliver data-driven solutions that have real impact. My experience at Enviaflores.com has taught me how to build scalable data systems in fast-paced environments while maintaining high standards of data quality and reliability.
      </p>
      <p class="p11">
        In a more personal note, I really like reading (don't worry, you can find my most recent thoughts and reviews <a href="#contact" class="inline-link" on:click={(e) => handleNavClick(e, '#books')}>here</a>!), and drinking a good cup of coffee, hobby that I have recently adopted and have found to be one of the very best parts of my day. I have not given it, yet, a dedicated part of my page so, for now, feel free to <a href="#contact" class="inline-link" on:click={(e) => handleNavClick(e, '#contact')}>contact me</a> and ask away because I love to talk about it!
      </p>
      <div class="cta-buttons">
        <a href="/#projects" on:click={(e) => handleNavClick(e, '/#projects')}>Get a look at my projects!</a>
      </div>
    </div>

    <img src="{base}/valeriamariasernasalazar.png" alt="Picture of Valeria María Serna Salazar" />
  </section>
    
  <section id="projects">
    <h2 class="projectsf">Projects</h2>
    <Projects />
  </section>

  <section id="books">
    <h2 class="booksf">Books</h2>
    <Books />
  </section>

  <section id="fun">
    <h2 class="funstufff">Fun Stuff</h2>
    <FunStuff />
  </section>

  <section id="contact">
    <h2 class="contactmef">Contact Me</h2>
    <Contact />
  </section>
</div>