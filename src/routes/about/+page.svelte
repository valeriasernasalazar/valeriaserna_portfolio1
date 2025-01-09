<script>
    const navLinks = [
      { id: "home", label: "Home", href: "/" },
      { id: "about", label: "About Me", href: "/about" },
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
  
    // Mock data for graphs
    const data = {
      timeSpent: {
        cleaningData: 40,
        programming: 30,
        debugging: 20,
        celebrating: 10,
      },
      languages: {
        Python: 90,
        R: 60,
        JavaScript: 70,
        SQL: 80,
      },
    };
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
  
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
    }
  
    nav ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
    }
  
    nav ul li a {
      color: #ADB6C4;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: color 0.3s ease;
    }
  
    nav ul li a:hover {
      color: #C05746;
    }
  
    /* About Me Section */
    section {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
      background: rgba(27, 38, 59, 0.95);
    }
  
    section h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: #C05746;
    }
  
    section p {
      font-size: 1.5rem;
      line-height: 1.8;
      color: #ffffff;
    }
  
    .graph-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .graph {
      width: 300px;
      height: 20px;
      margin: 5px 0;
      background-color: #ddd;
      border-radius: 8px;
    }
  
    .graph-bar {
      height: 100%;
      border-radius: 8px;
    }
  
    .cta-buttons a {
      background: #C05746;
      color: white;
      text-decoration: none;
      padding: 1rem 2rem;
      border-radius: 30px;
      margin: 1rem;
      font-size: 1rem;
      font-weight: bold;
      transition: all 0.3s ease;
    }
  
    .cta-buttons a:hover {
      background: #AD6A6C;
      transform: scale(1.1);
    }
  </style>
  
  <main>
    <nav>
      <ul>
        {#each navLinks as { id, label, href }}
          <li><a href={href}>{label}</a></li>
        {/each}
      </ul>
    </nav>
  
    <section id="about">
      <h2>About Me</h2>
      <p>Hi! I'm Valeria Serna, a passionate data scientist who loves solving problems and turning data into insights. I enjoy learning new techniques, reading, and of course, coffee!</p>
  
      <div class="graph-container">
        <h3>How I Spend My Time:</h3>
        {#each Object.entries(data.timeSpent) as [key, value]}
          <div class="graph">
            <div class="graph-bar" style="width: {value}%"></div>
          </div>
        {/each}
      </div>
  
      <div class="graph-container">
        <h3>My Programming Skills:</h3>
        {#each Object.entries(data.languages) as [language, proficiency]}
          <div class="graph">
            <div class="graph-bar" style="width: {proficiency}%"></div>
          </div>
        {/each}
      </div>
  
      <div class="fact-box">
        <h3>Fun Fact</h3>
        <p>{randomFact}</p>
        <button on:click={generateRandomFact}>Generate New Fun Fact</button>
      </div>
  
      <div class="cta-buttons">
        <a href="/">Back to Home</a>
      </div>
    </section>
  </main>
  