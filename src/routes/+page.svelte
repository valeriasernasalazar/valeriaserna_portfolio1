<script>
  import { onMount } from "svelte";
  import { base } from '$app/paths'; // Import the base path
  import { goto } from '$app/navigation';
  import Projects from '$lib/Projects.svelte';
  import Books from '$lib/Books.svelte';
  import FunStuff from "$lib/FunStuff.svelte";
  

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
    // Prevent scrolling when menu is open
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
    
    window.addEventListener('scroll', handleScroll);
    requestAnimationFrame(updateNavbar);
    
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
}

:global(html) {
  scroll-behavior: smooth;
}

.container {
  padding-top: 70px;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  scroll-padding-top: 100px; /* Account for the navbar height */
}

.container section {
  scroll-snap-align: start;
  min-height: 100vh;
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
}

@media (min-width: 768px) {
  nav {
    padding: 1rem 2rem;
  }
}

/* Nav transitions and animations */
nav {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

nav.scrolled {
  background: rgba(13, 27, 42, 0.98);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

nav ul {
  list-style: none;
  display: none; /* Hidden by default on mobile */
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
  white-space: nowrap; /* Ensure no wrapping for individual links */
}

nav > ul li a:hover {
  color: #C05746; /* Hover color */
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

/* Eye styling - FIXED POSITIONING */
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

/* Fixed positioning for eyes */
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
  scroll-snap-align: start;
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
    height: 100vh;
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
    color: #EAEAEA;
    padding: 2rem 1rem;
    gap: 2rem;
}

@media (min-width: 768px) {
  #about {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 50px 100px;
  }
}

#about h1 {
    font-size: 2rem;
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
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #EAEAEA;
    text-align: left;
}

@media (min-width: 768px) {
  #about p {
    font-size: 1.1rem;
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

/* Fun facts section */
.fact-box {
  padding: 1.2rem;
  background: #0D1B2A;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 1.5rem 0;
  width: 90%;
}

@media (min-width: 768px) {
  .fact-box {
    padding: 1.5rem;
    margin: 2rem 0;
    width: auto;
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
.projectsf, .booksf, .funstufff{
  margin-top: 10vh;
}

</style>

<nav>
  <div class="profile-container">
    <div class="profile">
      <img src="{base}/profilepic2.png" alt="Profile" />
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
    <li><a href="/">Home</a></li>
    <li><a href="#about">About Me</a></li>
    <li><a href="/#projects">Projects</a></li>
    <li><a href="/#books">Books</a></li>
    <li><a href="/#fun">Fun Stuff</a></li>
    <li><a href="#contact">Contact</a></li>
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
    <li><a href="/" on:click={closeMobileMenu}>Home</a></li>
    <li><a href="#about" on:click={closeMobileMenu}>About Me</a></li>
    <li><a href="/#projects" on:click={closeMobileMenu}>Projects</a></li>
    <li><a href="/#books" on:click={closeMobileMenu}>Books</a></li>
    <li><a href="/#fun" on:click={closeMobileMenu}>Fun Stuff</a></li>
    <li><a href="#contact" on:click={closeMobileMenu}>Contact</a></li>
  </ul>
</div>

<!-- Overlay for mobile menu -->
<div class="menu-overlay {mobileMenuOpen ? 'visible' : ''}" on:click={closeMobileMenu}></div>

<div class="container">
  <section id="home">
    <h1>Hello, I'm Valeria Serna</h1>
    <p>Expert at turning coffee ☕ and code 💻 into insights that matter.</p>
    <div class="cta-buttons">
      <a href="/#projects">View My Projects</a>
      <a href="/#contact">Contact Me</a>
    </div>
  </section>

  <section id="about">
    <!-- Text on the Left -->
    <div class="text">
      <h1>About Me</h1>
      <p class="p11">
        Hi, I'm Valeria Serna. I'm a data scientist with a deep curiosity for solving problems and uncovering patterns in data. My fascination with how things work naturally led me to explore statistics, programming, and machine learning, where I’ve spent the past few years working on predictive models, data visualization, and AI. What excites me the most is the moment when raw data starts to make sense, revealing insights that can drive meaningful decisions and create real impact.
     </p>
      <p class="p11">
        I really enjoy the challenge of working with complex, messy datasets and figuring out how to transform them into clear, actionable answers. For me, data science isn’t just about technical expertise—it’s about knowing how to ask the right questions and using data to uncover solutions that matter. Even when the process gets frustrating, the satisfaction of seeing the pieces come together makes it all worthwhile.
      </p>
      <p class="p11">
        When I’m not working with data, I’m usually lost in a book. I love reading philosophical works like Meditations by Marcus Aurelius or anything that challenges me to see the world differently and think more deeply. If you're curious, I’ve put together a section where I share my thoughts on some of my favorite books—you can check it out if you’re interested. And, of course, coffee is always nearby—it’s an essential part of my creative process and those moments of deep thinking.
      </p>
      <div class="cta-buttons">
        <a href="/#projects">Get a look at my projects!</a>
      </div>
    </div>
    
    <!-- Profile Image on the Right -->
    <img src="{base}/foto2.png" alt="Valeria Serna" />
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
    <h2>Contact Me</h2>
    <p>Let's connect! I'm always up for a chat about data, projects, or your favorite algorithm.</p>
  </section>
</div>