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
      const leftEyeBall = document.getElementById("leftEyeBall");
      const rightEyeBall = document.getElementById("rightEyeBall");

      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;
      const eyeRadius = 10;

      [leftEyeBall, rightEyeBall].forEach((eyeBall) => {
        if (eyeBall) {
          const angle = Math.atan2(event.clientY - viewportCenterY, event.clientX - viewportCenterX);
          let x = Math.cos(angle) * eyeRadius;
          let y = Math.sin(angle) * eyeRadius;

          const distance = Math.sqrt(x ** 2 + y ** 2);
          if (distance > eyeRadius) {
            x = (x / distance) * eyeRadius;
            y = (y / distance) * eyeRadius;
          }

          eyeBall.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    });

    document.addEventListener("mouseout", () => {
      const leftEyeBall = document.getElementById("leftEyeBall");
      const rightEyeBall = document.getElementById("rightEyeBall");

      [leftEyeBall, rightEyeBall].forEach((eyeBall) => {
        if (eyeBall) {
          eyeBall.style.transform = "translate(-50%, -50%)";
        }
      });
    });
  });
</script>

<style>
/* Global Styles */
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
}

nav ul li a {
  color: #ADB6C4; /* Default link color */
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: color 0.3s ease;
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
  position: absolute;
  width: 16px; /* Adjust size for the eyes */
  height: 16px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.eye-ball {
  position: absolute;
  width: 8px; /* Adjust size for the pupil */
  height: 8px;
  background: black;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.1s; /* Smooth movement */
}

#leftEye {
  top: 22px; /* Adjust based on your image */
  left: 28px;
}

#rightEye {
  top: 22px; /* Adjust based on your image */
  right: 20px;
}

.profile-name {
  font-size: 1.5rem; /* Adjust font size */
  color: #C05746; /* Match your theme */
  font-weight: bold;
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
