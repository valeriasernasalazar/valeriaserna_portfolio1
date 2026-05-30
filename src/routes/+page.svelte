<script>
  import { onMount } from "svelte";
  import { base } from '$app/paths';
  import Projects from '$lib/Projects.svelte';
  import Books from '$lib/Books.svelte';
  import FunStuff from "$lib/FunStuff.svelte";
  import Contact from "$lib/Contact.svelte";

  let mobileMenuOpen = false;
  let eyesClicked = false;
  let activeTooltip = null;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  function handleNavClick(event, targetId) {
    event.preventDefault();
    closeMobileMenu();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${targetId}`);
    }
  }

  function handleEyeClick() {
    eyesClicked = true;
    setTimeout(() => { eyesClicked = false; }, 900);
  }

  function toggleTooltip(id, e) {
    e.preventDefault();
    e.stopPropagation();
    activeTooltip = activeTooltip === id ? null : id;
  }

  function closeTooltip() {
    activeTooltip = null;
  }

  function handlePaperLeave() {
    activeTooltip = null;
  }

  let scrolling = false;

  onMount(() => {
    function handleScroll() { scrolling = true; }

    function updateNavbar() {
      if (scrolling) {
        const nav = document.querySelector('nav');
        if (nav) {
          if (window.scrollY > 10) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
        }
        scrolling = false;
      }
      requestAnimationFrame(updateNavbar);
    }

    window.addEventListener('scroll', handleScroll);
    requestAnimationFrame(updateNavbar);

    const moveEyes = (e) => {
      const eyes = [
        { eye: document.getElementById("leftEye"), ball: document.getElementById("leftEyeBall") },
        { eye: document.getElementById("rightEye"), ball: document.getElementById("rightEyeBall") }
      ];

      eyes.forEach(({ eye, ball }) => {
        if (!eye || !ball) return;
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
        if (!eyesClicked) {
          ball.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    document.addEventListener("mousemove", moveEyes);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousemove", moveEyes);
    };
  });
</script>

<style>
  /* ── Global ── */
  :global(html) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-size: 85%;
    background: #1b263b;
    color: #EAEAEA;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  /* ── Navbar ── */
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(13, 27, 42, 0.85);
    z-index: 99;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  :global(nav.scrolled) {
    background: rgba(13, 27, 42, 0.98) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
  }

  nav ul {
    list-style: none;
    display: none;
    margin: 0;
    padding: 0;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    nav ul { display: flex; }
  }

  nav > ul li a {
    color: #ADB6C4;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    white-space: nowrap;
    position: relative;
  }

  nav > ul li a:hover { color: #C05746; }

  nav > ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #C05746;
    transition: width 0.3s ease;
  }

  nav > ul li a:hover::after { width: 100%; }

  .mobile-menu-toggle {
    display: block;
    background: none;
    border: none;
    color: #EAEAEA;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 101;
  }

  @media (min-width: 768px) {
    .mobile-menu-toggle { display: none; }
  }

  /* ── Mobile Menu ── */
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(13, 27, 42, 0.98);
    backdrop-filter: blur(20px);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .mobile-menu.open { opacity: 1; visibility: visible; }

  .mobile-menu-close {
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: #EAEAEA;
    font-size: 2rem;
    cursor: pointer;
  }

  .mobile-menu ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0;
    align-items: center;
  }

  .mobile-menu ul li { list-style-type: none; }

  .mobile-menu ul li a {
    color: #EAEAEA;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.8rem;
    transition: color 0.3s ease;
  }

  .mobile-menu ul li a:hover { color: #C05746; }

  /* ── Profile & Eyes ── */
  .profile-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .profile-name {
    font-weight: 700;
    font-size: 0.95rem;
    color: #EAEAEA;
  }

  @media (max-width: 767px) {
    .profile-name { display: none; }
  }

  .profile {
    position: relative;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #C05746;
    cursor: pointer;
    flex-shrink: 0;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  @media (min-width: 768px) {
    .profile { width: 48px; height: 48px; }
  }

  .profile.love-mode {
    border-color: #ff6b8a;
    box-shadow: 0 0 12px rgba(255, 107, 138, 0.4);
    animation: love-shake 0.5s ease;
  }

  @keyframes love-shake {
    0%, 100% { transform: rotate(0deg); }
    15%  { transform: rotate(-8deg); }
    30%  { transform: rotate(6deg); }
    45%  { transform: rotate(-5deg); }
    60%  { transform: rotate(4deg); }
    75%  { transform: rotate(-2deg); }
  }

  .profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .eye {
    position: absolute;
    width: 11px;
    height: 11px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 10;
    box-shadow: inset 0 0 2px rgba(0,0,0,0.2);
    transition: background 0.2s;
  }

  @media (min-width: 768px) {
    .eye { width: 12px; height: 12px; }
  }

  .eye.heart-active {
    background: #ffe0e6;
    overflow: visible;
  }

  .eye-ball {
    width: 60%;
    height: 60%;
    background: #1b263b;
    border-radius: 50%;
    transition: transform 0.1s ease-out, opacity 0.15s;
  }

  .eye.heart-active .eye-ball {
    opacity: 0;
  }

  .eye.heart-active::after {
    content: '♥';
    color: #C05746;
    font-size: 11px;
    line-height: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    animation: heart-pop 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  @media (min-width: 768px) {
    .eye.heart-active::after { font-size: 13px; }
  }

  @keyframes heart-pop {
    0%   { transform: translate(-50%, -50%) scale(0) rotate(-15deg); }
    25%  { transform: translate(-50%, -50%) scale(1.8) rotate(10deg); }
    45%  { transform: translate(-50%, -50%) scale(0.85) rotate(-5deg); }
    65%  { transform: translate(-50%, -50%) scale(1.3) rotate(3deg); }
    80%  { transform: translate(-50%, -50%) scale(0.95) rotate(0deg); }
    100% { transform: translate(-50%, -50%) scale(1.1) rotate(0deg); }
  }

  #leftEye  { top: 38%; left: 36%; transform: translate(-50%, -50%); }
  #rightEye { top: 38%; left: 68%; transform: translate(-50%, -50%); }

  /* ── Main Container ── */
  .container {
    width: 100%;
    overflow-x: hidden;
    padding-top: 64px;
  }

  /* ── Sections ── */
  .container section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    background: #1b263b;
    color: #eaeaea;
    position: relative;
    scroll-margin-top: 68px;
  }

  @media (min-width: 768px) {
    .container section {
      padding: 4rem 2.5rem;
    }
  }

  .container section + section {
    border-top: 1px solid rgba(192, 87, 70, 0.08);
  }

  /* ── Home / Hero ── */
  #home {
    text-align: center;
    justify-content: center;
    min-height: calc(100vh - 64px);
    padding: 2rem 1.5rem;
  }

  @media (min-width: 768px) {
    #home { padding: 2rem 2.5rem; }
  }

  #home h1 {
    font-size: 2.5rem;
    margin-bottom: 0.6rem;
    font-weight: 800;
    background: linear-gradient(135deg, #EAEAEA 0%, #C05746 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.15;
  }

  @media (min-width: 768px) {
    #home h1 { font-size: 3.2rem; }
  }

  #home p {
    font-size: 1.1rem;
    color: #ADB6C4;
    margin-bottom: 2rem;
    line-height: 1.5;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    #home p { font-size: 1.2rem; }
  }

  /* ── CTA Buttons Grid ── */
  .cta-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    width: 100%;
    max-width: 800px;
    justify-items: center;
  }

  @media (min-width: 1024px) {
    .cta-buttons {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
  }

  .cta-buttons a {
    background: #C05746;
    color: white;
    text-decoration: none;
    padding: 0.75rem 0.9rem;
    border-radius: 14px;
    font-weight: bold;
    font-size: 0.88rem;
    transition: all 0.3s ease;
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    box-shadow: 0 4px 15px rgba(192, 87, 70, 0.15);
    box-sizing: border-box;
    min-height: 62px;
  }

  .cta-buttons a:hover {
    background: #AD6A6C;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(192, 87, 70, 0.25);
  }

  .cta-buttons .secondary-btn {
    background: rgba(13, 27, 42, 0.8);
    border: 1px solid rgba(192, 87, 70, 0.4);
  }

  .cta-buttons .secondary-btn:hover {
    background: rgba(192, 87, 70, 0.1);
    border-color: #C05746;
  }

  .doc-icon { font-size: 1.5rem; }

  .btn-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .btn-text strong {
    font-size: 0.78rem;
    line-height: 1.2;
  }

  .btn-text small {
    font-weight: 400;
    color: #ADB6C4;
    font-size: 0.65rem;
    margin-top: 0.15rem;
  }

  /* ── Paper Tooltip System ── */
  .paper-wrapper {
    position: relative;
    width: 100%;
  }

  .paper-tooltip {
    display: none;
    position: absolute;
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    z-index: 50;
    background: #0D1B2A;
    border: 1px solid rgba(192, 87, 70, 0.3);
    border-radius: 12px;
    padding: 0.8rem 1rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
    text-align: left;
    animation: tooltip-in 0.2s ease;
  }

  @keyframes tooltip-in {
    from { opacity: 0; transform: translateX(-50%) translateY(-4px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  @media (hover: hover) {
    .paper-wrapper:hover .paper-tooltip {
      display: block;
    }
    .paper-wrapper:hover > a {
      border-color: #C05746;
      background: rgba(192, 87, 70, 0.08);
    }
  }

  .paper-tooltip.show {
    display: block;
  }

  .paper-tooltip h4 {
    font-size: 0.7rem;
    font-weight: 700;
    color: #EAEAEA;
    margin: 0 0 0.3rem 0;
    line-height: 1.3;
  }

  #home .paper-tooltip p {
    font-size: 0.64rem;
    color: #ADB6C4;
    line-height: 1.45;
    margin: 0 0 0.5rem 0;
  }

  #home .tooltip-link {
    display: inline;
    color: #C05746;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.66rem;
    transition: opacity 0.2s;
    /* Reset — override .cta-buttons a */
    background: none;
    padding: 0;
    border-radius: 0;
    border: none;
    width: auto;
    min-height: auto;
    box-shadow: none;
    gap: 0;
    text-align: left;
  }

  #home .tooltip-link:hover { 
    opacity: 0.7;
    transform: none;
  }


  .tooltip-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 45;
  }
  
  /* ── About ── */
  #about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    #about {
      flex-direction: row;
      max-width: 1100px;
      margin: 0 auto;
      text-align: left;
      gap: 3rem;
    }
  }

  #about .text {
    order: 2;
    flex: 1;
  }

  @media (min-width: 768px) {
    #about .text { order: 1; }
  }

  #about img {
    order: 1;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #C05746;
    box-shadow: 0 0 25px rgba(192, 87, 70, 0.15);
    flex-shrink: 0;
  }

  @media (min-width: 768px) {
    #about img { order: 2; width: 220px; height: 220px; }
  }

  #about h1 {
    font-size: 1.9rem;
    color: #C05746;
    margin: 0 0 1rem 0;
    font-weight: 800;
  }

  @media (min-width: 768px) {
    #about h1 { font-size: 2.2rem; }
  }

  #about p {
    font-size: 0.98rem;
    line-height: 1.65;
    margin: 0 0 0.9rem 0;
    color: #EAEAEA;
  }

  .inline-link {
    color: #C05746;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }

  .inline-link:hover { border-bottom-color: #C05746; }

  #about .cta-inline {
    margin-top: 1.2rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(192, 87, 70, 0.15);
    border: 1px solid rgba(192, 87, 70, 0.3);
    color: #EAEAEA;
    text-decoration: none;
    padding: 0.55rem 1.2rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.88rem;
    transition: all 0.2s ease;
  }

  #about .cta-inline:hover {
    background: #C05746;
    border-color: #C05746;
  }

  /* ── Section Headings ── */
  section h2 {
    font-size: 1.9rem;
    margin-bottom: 0.4rem;
    color: #C05746;
    font-weight: 800;
    text-align: center;
  }

  @media (min-width: 768px) {
    section h2 { font-size: 2.4rem; }
  }

  .section-sub {
    font-size: 0.9rem;
    color: #ADB6C4;
    text-align: center;
    margin-bottom: 1.5rem;
  }
</style>

<nav>
  <div class="profile-container">
    <div
      class="profile {eyesClicked ? 'love-mode' : ''}"
      on:click={handleEyeClick}
      role="button"
      tabindex="0"
      aria-label="Click for a surprise"
    >
      <img src="{base}/profile-valeriamariasernasalazar.png" alt="Valeria María Serna Salazar" />
      <div class="eye {eyesClicked ? 'heart-active' : ''}" id="leftEye">
        <div class="eye-ball" id="leftEyeBall"></div>
      </div>
      <div class="eye {eyesClicked ? 'heart-active' : ''}" id="rightEye">
        <div class="eye-ball" id="rightEyeBall"></div>
      </div>
    </div>
    <span class="profile-name">Valeria Serna</span>
  </div>

  <ul>
    <li><a href="#home" on:click={(e) => handleNavClick(e, 'home')}>Home</a></li>
    <li><a href="#about" on:click={(e) => handleNavClick(e, 'about')}>About</a></li>
    <li><a href="#projects" on:click={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
    <li><a href="#books" on:click={(e) => handleNavClick(e, 'books')}>Books</a></li>
    <li><a href="#fun" on:click={(e) => handleNavClick(e, 'fun')}>Fun Stuff</a></li>
    <li><a href="#contact" on:click={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
  </ul>

  <button class="mobile-menu-toggle" on:click={toggleMobileMenu} aria-label="Toggle navigation menu">
    ☰
  </button>
</nav>

<div class="mobile-menu {mobileMenuOpen ? 'open' : ''}">
  <button class="mobile-menu-close" on:click={closeMobileMenu}>×</button>
  <ul>
    <li><a href="#home" on:click={(e) => handleNavClick(e, 'home')}>Home</a></li>
    <li><a href="#about" on:click={(e) => handleNavClick(e, 'about')}>About</a></li>
    <li><a href="#projects" on:click={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
    <li><a href="#books" on:click={(e) => handleNavClick(e, 'books')}>Books</a></li>
    <li><a href="#fun" on:click={(e) => handleNavClick(e, 'fun')}>Fun Stuff</a></li>
    <li><a href="#contact" on:click={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
  </ul>
</div>

<div class="container">
  <section id="home">
    <h1>Hi, I'm Valeria Serna</h1>
    <p>Data Engineer | Turning coffee ☕ and code 💻 into scalable systems for data-driven impact.</p>

    <div class="cta-buttons">
      <!-- CV — normal button, no tooltip -->
      <a href="{base}/CV_ValeriaMariaSernaSalazar_DATAENGINEER.pdf" target="_blank" rel="noopener noreferrer" class="secondary-btn">
        <span class="doc-icon">📄</span>
        <div class="btn-text">
          <strong>View my CV</strong>
          <small>PDF, English</small>
        </div>
      </a>

      <!-- Paper 1 — hover/tap for abstract -->
      <div class="paper-wrapper" on:mouseleave={handlePaperLeave}>
        <a href="{base}/paper-valeria-serna.pdf" target="_blank" rel="noopener noreferrer" class="secondary-btn" on:click={(e) => activeTooltip === 'paper1' ? toggleTooltip('paper1', e) : null}>
          <span class="doc-icon">📑</span>
          <div class="btn-text">
            <strong>TDA & CNNs for Gravitational Waves</strong>
            <small>Springer, MICAI 2025</small>
          </div>
        </a>
        <div class="paper-tooltip {activeTooltip === 'paper1' ? 'show' : ''}">
          <h4>Topological Data Analysis and CNNs for Gravitational Wave Detection</h4>
          <p>Combines persistent homology with CNNs to improve gravitational wave detection in noisy signals. Achieves higher accuracy with lower computational cost than CNNs alone.</p>
          <a href="{base}/paper-valeria-serna.pdf" target="_blank" rel="noopener noreferrer" class="tooltip-link">View full PDF →</a>
        </div>
      </div>

      <!-- Paper 2 — hover/tap for abstract -->
      <div class="paper-wrapper" on:mouseleave={handlePaperLeave}>
        <a href="{base}/paper-2-valeria-serna.pdf" target="_blank" rel="noopener noreferrer" class="secondary-btn" on:click={(e) => activeTooltip === 'paper2' ? toggleTooltip('paper2', e) : null}>
          <span class="doc-icon">📑</span>
          <div class="btn-text">
            <strong>Knowledge Graphs for Homicide Data</strong>
            <small>VMBO 2025, CEUR-WS</small>
          </div>
        </a>
        <div class="paper-tooltip {activeTooltip === 'paper2' ? 'show' : ''}">
          <h4>Knowledge Graph Representation of Open-Source Homicide Information</h4>
          <p>Two approaches using OWL ontology and NetworkX graphs to represent open-source homicide data with epistemic uncertainty, evaluated on nine Dutch cases.</p>
          <a href="{base}/paper-2-valeria-serna.pdf" target="_blank" rel="noopener noreferrer" class="tooltip-link">View full PDF →</a>
        </div>
      </div>
      <!-- Projects — normal button, no tooltip -->
      <a href="#projects" on:click={(e) => handleNavClick(e, 'projects')} class="secondary-btn">
        <span class="doc-icon">📊</span>
        <div class="btn-text">
          <strong>My Projects</strong>
          <small>Data & Code</small>
        </div>
      </a>
    </div>
  </section>

  <!-- Tooltip overlay for mobile — closes tooltip when tapping outside -->
  {#if activeTooltip}
    <div class="tooltip-overlay" on:click={closeTooltip} on:keydown={closeTooltip}></div>
  {/if}

  <section id="about">
    <div class="text">
      <h1>About Me</h1>
      <p>Hello, I'm Valeria Serna, a data engineer that enjoys finding structure in chaos. I'm particularly passionate about building data pipelines and systems that make data reliable, accesible, and useful for gathering meaningful insights. I currently use Python, SQL, and cloud platforms like AWS to create efficient data workflows.</p>
      <p>My B.S. in Data Science and Applied Mathematics from Tecnológico de Monterrey gave me a strong background in statistics, data analysis, AI, cybersecurity, ML, and mathematical optimization, which allows me to approach everyday tasks and possible challenges that could arise with a unique perspective and skill set.</p>
      <p>Besides the technical side of things, I love collaborating with interdisciplinary teams to solve problems and deliver data-driven solutions that have real impact. My experience at Enviaflores.com has taught me how to build scalable data systems in fast-paced environments while maintaining high standards of data quality and reliability.</p>
      <p>On a more personal note, I really like reading (don't worry, you can find my most recent thoughts and reviews <a href="#books" class="inline-link" on:click={(e) => handleNavClick(e, 'books')}>here</a>!), and drinking a good cup of coffee, a hobby I've recently adopted and have found to be one of the very best parts of my day. Feel free to <a href="#contact" class="inline-link" on:click={(e) => handleNavClick(e, 'contact')}>contact me</a> and ask away — I love to talk about it!</p>
      <a href="#projects" class="cta-inline" on:click={(e) => handleNavClick(e, 'projects')}>Check out my projects →</a>
    </div>
    <img src="{base}/valeriamariasernasalazar.png" alt="Valeria María Serna Salazar" />
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <p class="section-sub">Things I've built, automated, or optimized.</p>
    <Projects />
  </section>

  <section id="books">
    <h2>Books</h2>
    <p class="section-sub">What I've been reading and what I thought.</p>
    <Books />
  </section>

  <section id="fun">
    <h2>Fun Stuff</h2>
    <p class="section-sub">Beyond the code.</p>
    <FunStuff />
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <p class="section-sub">Let's connect.</p>
    <Contact />
  </section>
</div>