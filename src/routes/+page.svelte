<script>
  import { onMount } from "svelte";
  import { base } from '$app/paths'; // Import the base path

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "books", label: "Books" },
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

  onMount(() => {
  document.addEventListener("mousemove", (event) => {
    const leftEye = document.getElementById("leftEye");
    const rightEye = document.getElementById("rightEye");
    const leftEyeBall = document.getElementById("leftEyeBall");
    const rightEyeBall = document.getElementById("rightEyeBall");

    const eyes = [
      { eye: leftEye, ball: leftEyeBall },
      { eye: rightEye, ball: rightEyeBall },
    ];

    eyes.forEach(({ eye, ball }) => {
      if (eye && ball) {
        const eyeRect = eye.getBoundingClientRect();
        const centerX = eyeRect.left + eyeRect.width / 2;
        const centerY = eyeRect.top + eyeRect.height / 2;

        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;

        const angle = Math.atan2(dy, dx);
        const distance = Math.min(Math.sqrt(dx * dx + dy * dy), eyeRect.width / 4); // Restrict movement to half the eye radius

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        ball.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
  });

  document.addEventListener("mouseout", () => {
    const leftEyeBall = document.getElementById("leftEyeBall");
    const rightEyeBall = document.getElementById("rightEyeBall");

    [leftEyeBall, rightEyeBall].forEach((eyeBall) => {
      if (eyeBall) {
        eyeBall.style.transform = "translate(0, 0)";
      }
    });
  });
});

onMount(() => {
  // Explicitly cast to HTMLCanvasElement
  const canvas = /** @type {HTMLCanvasElement | null} */ (document.getElementById("backgroundCanvas"));

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Set canvas size to match the window
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let lines = [];
  const lineCount = 5;
  const lineSpacing = 150; // Spacing between lines
  const speed = 0.5;

  // Initialize lines
  for (let i = 0; i < lineCount; i++) {
    const offsetY = i * lineSpacing;
    const points = Array(30)
      .fill(0)
      .map((_, i) => ({
        x: (i / 30) * canvas.width,
        y: Math.random() * 50 + offsetY,
      }));
    lines.push({ points, offsetY });
  }

  function animate() {
    if (!ctx) return; // Ensure ctx is defined

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw each line
    lines.forEach((line) => {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"; // Faint white lines

      line.points.forEach((point, i) => {
        const waveOffset = Math.sin((point.x + performance.now() * speed) * 0.005) * 20;
        const y = point.y + waveOffset;

        if (i === 0) {
          ctx.moveTo(point.x, y);
        } else {
          ctx.lineTo(point.x, y);
        }
      });

      ctx.stroke();
    });

    requestAnimationFrame(animate);
  }

  animate();
});

</script>
<style>
/* Global Styles */

@media (max-width: 768px) {
  nav ul li a {
    font-size: 1rem; /* Reduce font size for smaller screens */
  }
}

:global(html){
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

:global(html) {
  scroll-behavior: smooth;
}

.container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  scroll-padding-top: 100px;
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


.profile img {
  width: 100%;
  border-radius: 50%;
}

.container section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.container section p {
  font-size: 1.2rem;
  line-height: 1.5;
}


/* Nav Styling */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}

nav h1 {
  font-size: 1.5rem;
  color: #C05746; /* Color for the name */
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden; /* Hide overflow content */
  text-overflow: ellipsis; /* Add ellipsis if text overflows */
}

nav ul li a {
  color: #ADB6C4;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  white-space: nowrap; /* Ensure no wrapping for individual links */
}

nav ul {
  justify-content: space-between; /* Distribute links evenly while maintaining spacing */
}

nav ul li a:hover {
  color: #C05746; /* Hover color */
}

/* Section Styling */
section {
  min-height: 100vh; /* Make sure each section takes full height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  scroll-snap-align: start; /* Ensure snap on section start */
  background: rgba(27, 38, 59, 0.95); /* Gradient background */
}

/* Home Section */
#home {
  color: #EAEAEA;
}

#home h1 {
  margin-top: -15.5rem;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #C05746;
}

#home p {
  font-size: 1.6rem;
  color: #ffffff;
  margin-bottom: 5rem;
  line-height: 1.5;
  margin-top: -1rem;
}

.cta-buttons a {
  background: #C05746;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  margin: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.cta-buttons a:hover {
  background: #AD6A6C;
  transform: scale(1.1);
}

/* Section Styling */
section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #C05746;
  margin-top: -10.5rem;
}

section p {
  font-size: 1.5rem;
  line-height: 1.8;
  color: #ffffff;
}

.fact-box {
  padding: 1.5rem;
  background: #0D1B2A;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
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
  transform: scale(1.1);
}

.profile-container {
  display: flex;
  align-items: center; /* Vertically aligns items */
  gap: 1rem; /* Space between image and text */
}

.profile {
  position: relative;
  width: 80px; /* Adjust size of the profile picture */
  height: 80px; /* Adjust height of the profile picture */
}

.profile img {
  width: 100%; /* Ensure the image scales properly */
  border-radius: 50%;
}

.eye {
  position: relative;
  width: 16px; /* Relative to the eye container */
  height: 16px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
}

.eye-ball {
  position: relative;
  width: 50%; /* Relative to the white part */
  height: 50%;
  background: black;
  border-radius: 50%;
  transition: 0.1s;
}

#leftEye {
  top: -6.3vh; /* Adjust based on your image */
  left: 3vh;
}

#rightEye {
  top: -7.9vh; /* Adjust based on your image */
  right: -4.5vh;
}

.profile-name {
  font-size: 1.5rem; /* Adjust font size */
  color: #C05746; /* Match your theme */
  font-weight: bold;
}

#backgroundCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place it behind all other elements */
}


</style>

<nav>
  <div class="profile-container">
    <div class="profile">
      <!-- Use {base} to add the correct base path to the image -->
      <img src="{base}/profilepic2.png" alt="" />
      <div class="eye" id="leftEye">
        <div class="eye-ball" id="leftEyeBall"></div>
      </div>
      <div class="eye" id="rightEye">
        <div class="eye-ball" id="rightEyeBall"></div>
      </div>
    </div>
    <h1 class="profile-name">Valeria Serna</h1>
  </div>
  <ul>
    {#each navLinks as { id, label }}
      <li><a href={`#${id}`}>{label}</a></li>
    {/each}
  </ul>
</nav>
<canvas id="backgroundCanvas"></canvas>

<div id="particles-js"></div>

<div class="container">
  <section id="home">
    <h1>Hello, I'm Valeria Serna</h1>
    <p>Expert at turning coffee ☕ and code 💻 into insights that matter.</p>
    <div class="cta-buttons">
      <a href="#projects">View My Projects</a>
      <a href="#contact">Contact Me</a>
    </div>
  </section>


  <section id="about">
    <h2>About Me</h2>
    <div class="profile-container">
      <p>Hi, I'm Valeria, a data scientist with a curious mind and a love for coffee and books!</p>
    </div>
  </section>
  
  
  <section id="projects">
    <h2>Projects</h2>
    <p>Here are some of the projects I’ve worked on. Click to learn more!</p>
  </section>

  <section id="books">
    <h2>Books</h2>
    <p>A collection of books I’ve read and recommend—data science must-reads and quirky favorites!</p>
  </section>

  <section id="fun">
    <h2>Fun Stuff</h2>
    <div class="fact-box">
      <p>{randomFact}</p>
    </div>
    <button on:click={generateRandomFact}>Generate Fun Fact</button>
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <p>Let’s connect! I’m always up for a chat about data, projects, or your favorite algorithm.</p>
  </section>
</div>
