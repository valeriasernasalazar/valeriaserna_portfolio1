<script>
    import { onMount } from "svelte";
    import { base } from '$app/paths';
  
    // Project data
    const projects = [
      {
        id: 1,
        title: "Camera Vision Traffic Analysis",
        date: "2025",
        description: "Built an AI capable of analyzing and counting traffic using YOLO at Tec de Monterrey in Distrito Tec. Analyzed 20+ hours of footage for a major research project.",
        tags: ["Computer Vision", "YOLO", "AI"],
        type: "AI",
        imageUrl: "/project-icons/traffic-vision.png",
        isNew: true,
        detailedDescription: `
          <h4>Project Overview</h4>
          <p>This project involved developing an AI system capable of analyzing and counting traffic in real-time using the YOLO (You Only Look Once) object detection algorithm. The system was implemented at Tec de Monterrey in Distrito Tec.</p>
          
          <h4>Key Achievements</h4>
          <ul>
            <li>Analyzed over 20 hours of footage with 89% accuracy in vehicle detection</li>
            <li>Implemented YOLO v5 for real-time object detection</li>
            <li>Created a dashboard for visualization of traffic patterns</li>
            <li>Reduced manual counting time by 95%</li>
          </ul>
          
          <h4>Technical Details</h4>
          <p>The system uses a deep learning model trained on thousands of images to identify and classify vehicles. It processes video feeds in real-time, with the ability to distinguish between different vehicle types (cars, buses, trucks, motorcycles).</p>
          
          <h4>Impact</h4>
          <p>This project is now being used as part of a larger research initiative to optimize traffic flow and reduce congestion in urban areas.</p>
        `,
        techStack: [
          { name: "Python", level: 90 },
          { name: "YOLO", level: 85 },
          { name: "OpenCV", level: 80 },
          { name: "TensorFlow", level: 75 }
        ]
      },
      {
        id: 2,
        title: "BAM Communication Webscraping",
        date: "Oct - Nov 2023",
        description: "Implemented a Python bot using Selenium to collect client posts on social platforms, reducing weekly analysis time by 40%. Automated Google Sheets reports using Google Cloud Console.",
        tags: ["Selenium", "Python", "Google Cloud"],
        type: "Automation",
        imageUrl: "/project-icons/web-scraping.png", // Placeholder - replace with actual image path
        isNew: true,
        detailedDescription: `
          <h4>Project Overview</h4>
          <p>As a freelancer for BAM Communication, I developed an automated webscraping solution to collect and analyze client posts across multiple social media platforms.</p>
          
          <h4>Key Achievements</h4>
          <ul>
            <li>Reduced weekly analysis time by 40% (approximately 6 hours saved per week)</li>
            <li>Built a robust Python bot using Selenium for data collection</li>
            <li>Automated reporting to Google Sheets using Google Cloud Console</li>
            <li>Monitored Facebook, Instagram, TikTok, YouTube, and other platforms</li>
          </ul>
          
          <h4>Technical Details</h4>
          <p>The solution uses Selenium to navigate through different social platforms, collecting data such as post content, engagement metrics, and audience demographics. The data is then processed and automatically uploaded to Google Sheets for client reporting.</p>
          
          <h4>Impact</h4>
          <p>This automation allowed the communication team to focus more on strategy and less on data collection, significantly improving their workflow efficiency.</p>
        `,
        techStack: [
          { name: "Python", level: 95 },
          { name: "Selenium", level: 90 },
          { name: "Google Cloud", level: 75 },
          { name: "Web Scraping", level: 85 }
        ]
      },
      {
        id: 3,
        title: "ProTect Data Analysis Dashboards",
        date: "Aug - Dec 2023",
        description: "Developed Tableau dashboards in collaboration with security and operations teams, improving efficiency for over 100 employees and facilitating real-time decision-making.",
        tags: ["Tableau", "Dashboard Design", "UX"],
        type: "Data Visualization",
        imageUrl: "/project-icons/dashboard.png", // Placeholder - replace with actual image path
        isNew: false,
        detailedDescription: `
          <h4>Project Overview</h4>
          <p>During my internship at ProTect, I led the development of comprehensive Tableau dashboards for security and operations teams, creating visual data solutions that improved workplace efficiency.</p>
          
          <h4>Key Achievements</h4>
          <ul>
            <li>Developed 12 interconnected dashboards for a unified operational view</li>
            <li>Improved efficiency for over 100 employees across departments</li>
            <li>Facilitated real-time decision-making through interactive visualizations</li>
            <li>Optimized user experience through multiple feedback sessions</li>
          </ul>
          
          <h4>Technical Details</h4>
          <p>The dashboards integrated data from multiple sources and were designed with a focus on user experience. Key features included real-time KPI tracking, trend analysis, and customizable views for different user roles.</p>
          
          <h4>Impact</h4>
          <p>The implementation of these dashboards streamlined communication between teams and allowed for faster, data-driven decision making throughout the organization.</p>
        `,
        techStack: [
          { name: "Tableau", level: 90 },
          { name: "SQL", level: 85 },
          { name: "Data Analysis", level: 80 },
          { name: "UX Design", level: 75 }
        ]
      },
      {
        id: 4,
        title: "Viva Aerobus Sentiment Analysis",
        date: "June 2022",
        description: "Improved customer experience by analyzing passenger feedback through sentiment analysis, identifying key issues with payment methods, prices, and seating.",
        tags: ["NLP", "Logistic Regression", "Word Clouds"],
        type: "Machine Learning",
        imageUrl: "/project-icons/sentiment-analysis.png", // Placeholder - replace with actual image path
        isNew: false,
        detailedDescription: `
          <h4>Project Overview</h4>
          <p>For Viva Aerobus, a leading low-cost airline, I developed a sentiment analysis solution to process and analyze passenger feedback to improve customer experience.</p>
          
          <h4>Key Achievements</h4>
          <ul>
            <li>Cleaned and processed unstructured text data from customer surveys</li>
            <li>Generated word clouds to visualize positive and negative themes</li>
            <li>Applied Logistic Regression to predict sentiment with high accuracy</li>
            <li>Identified key customer pain points: payment methods, prices, and seating</li>
          </ul>
          
          <h4>Technical Details</h4>
          <p>The solution involved text preprocessing (removing noise like punctuation, emojis, and symbols), feature extraction using TF-IDF, and building a Logistic Regression model to classify feedback as positive or negative.</p>
          
          <h4>Impact</h4>
          <p>The analysis led to targeted improvements in Viva Aerobus' service, and the model was implemented for real-time monitoring of customer feedback across multiple channels.</p>
        `,
        techStack: [
          { name: "Python", level: 90 },
          { name: "NLP", level: 85 },
          { name: "Logistic Regression", level: 80 },
          { name: "Data Cleaning", level: 90 }
        ]
      },
      {
        id: 5,
        title: "Mars Robotic Explorer",
        date: "April 2021",
        description: "Developed search algorithms to help a robotic explorer navigate Mars terrain, testing A*, Greedy Search, Iterative Deepening, and Breadth-First approaches.",
        tags: ["Search Algorithms", "AI", "Path Finding"],
        type: "AI",
        imageUrl: "/project-icons/mars-rover.png", // Placeholder - replace with actual image path
        isNew: false,
        detailedDescription: `
          <h4>Project Overview</h4>
          <p>This project focused on developing efficient search algorithms to help autonomous robots navigate the complex terrain of Mars without human intervention.</p>
          
          <h4>Key Achievements</h4>
          <ul>
            <li>Developed and tested multiple search algorithms for path finding</li>
            <li>Implemented A* Search, Greedy Search, Iterative Deepening DFS, and Breadth-First Search</li>
            <li>Found A* with Manhattan Distance Heuristic to be most efficient (96 movements in 0.1s)</li>
            <li>Created a model capable of solving cases with distances up to 10,000 meters</li>
          </ul>
          
          <h4>Technical Details</h4>
          <p>The implementation used the simpleai.search library to define the problem class. Each algorithm was extensively tested and benchmarked based on the number of movements required and processing time.</p>
          
          <h4>Challenges & Solutions</h4>
          <p>Difficult terrains and unpredictable weather conditions caused longer processing times. The solution included adaptive route selection to address these environmental challenges.</p>
        `,
        techStack: [
          { name: "Python", level: 90 },
          { name: "Search Algorithms", level: 95 },
          { name: "Heuristic Design", level: 85 },
          { name: "Problem Modeling", level: 80 }
        ]
      },
      {
        id: 6,
        title: "TecStore Visualization",
        date: "March 2021",
        description: "Developed interactive visualizations for an internal campus buying and selling platform, increasing sales by 18% after adjusting product display and promotions.",
        tags: ["Tableau", "Python", "Data Viz"],
        type: "Data Visualization",
        imageUrl: "/project-icons/data-viz.png", // Placeholder - replace with actual image path
        isNew: false,
        detailedDescription: `
          <h4>Project Overview</h4>
          <p>This project involved creating comprehensive data visualizations for TecStore, an internal campus platform for buying and selling, to provide insights into user behavior and sales performance.</p>
          
          <h4>Key Achievements</h4>
          <ul>
            <li>Developed interactive dashboards displaying sales by product category</li>
            <li>Created visualizations of user engagement and sales trends over time</li>
            <li>Designed geographic heatmaps of user activity</li>
            <li>Contributed to an 18% sales increase after implementing recommendations</li>
          </ul>
          
          <h4>Technical Details</h4>
          <p>The visualizations were created using a combination of Tableau for interactive dashboards and Python (Matplotlib, Seaborn) for specific analytical charts. Data was collected and processed from the TecStore database using SQL queries.</p>
          
          <h4>Impact</h4>
          <p>The insights gained from these visualizations allowed management to make data-driven decisions for inventory management and pricing strategies, significantly improving the platform's performance.</p>
        `,
        techStack: [
          { name: "Tableau", level: 85 },
          { name: "Python", level: 90 },
          { name: "SQL", level: 80 },
          { name: "Data Visualization", level: 90 }
        ]
      }
    ];
  
    // Filter options
    const filterOptions = [
      { value: "all", label: "All Projects" },
      { value: "AI", label: "AI & Machine Learning" },
      { value: "Data Visualization", label: "Data Visualization" },
      { value: "Automation", label: "Automation" },
      { value: "Machine Learning", label: "Machine Learning" }
    ];
  
    let activeFilter = "all";
    let filteredProjects = [...projects];
    let selectedProject = null;
  
    // Filter projects by type
    function filterProjects(filter) {
      activeFilter = filter;
      if (filter === "all") {
        filteredProjects = [...projects];
      } else {
        filteredProjects = projects.filter(project => project.type === filter);
      }
    }
  
    // Show project details
    function showProjectDetails(project) {
      selectedProject = project;
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }
  
    // Close project details modal
    function closeProjectModal() {
      selectedProject = null;
      document.body.style.overflow = ""; // Restore scrolling
    }
  
    // Animations and interactive elements
    onMount(() => {
      // Handle escape key for modal
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && selectedProject) {
          closeProjectModal();
        }
      });
  
      // Initialize skill bars animation
      const skillBars = document.querySelectorAll('.skill-progress-bar');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.level + '%';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
  
      skillBars.forEach(bar => {
        observer.observe(bar);
      });
  
      // Clean up on component destroy
      return () => {
        window.removeEventListener('keydown', null);
      };
    });
  </script>
  
  <section id="projects">
    <p class="p1">A collection of my data science adventures and problem-solving journeys</p>
    
    <!-- Filter controls -->
    <div class="filter-controls">
      {#each filterOptions as option}
        <button 
          class="filter-btn {activeFilter === option.value ? 'active' : ''}" 
          on:click={() => filterProjects(option.value)}
        >
          {option.label}
        </button>
      {/each}
    </div>
  
    <div class="projects-grid">
      {#each filteredProjects as project}
        <div class="project-card {project.isNew ? 'new' : ''}" data-id={project.id}>
          <div class="project-header">
            <div class="project-title">{project.title}</div>
            <div class="project-date">{project.date}</div>
          </div>
          <div class="project-content">
            <!-- Project icon image -->
            <div class="project-visualization">
              <div class="project-image-container">
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} icon`} 
                  class="project-image"
                  on:error={(e) => e.target.src = '/project-icons/place-holder.jpg'}
                />
              </div>
            </div>
            <p>{project.description}</p>
            <div class="tags">
              {#each project.tags as tag}
                <span>{tag}</span>
              {/each}
            </div>
          </div>
          <div class="project-footer">
            <button class="project-btn" on:click={() => showProjectDetails(project)}>View Details</button>
          </div>
        </div>
      {/each}
    </div>
  
    <!-- Skills summary section -->
    <div class="skills-section">
      <h3 class="skills-title">Skills Demonstrated</h3>
      <div class="skills-grid">
        <div class="skill-category">
          <h4>Machine Learning</h4>
          <ul class="skill-list">
            <li>
              <span>Logistic Regression</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="90"></div>
              </div>
            </li>
            <li>
              <span>NLP</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="85"></div>
              </div>
            </li>
            <li>
              <span>Data Cleaning</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="95"></div>
              </div>
            </li>
            <li>
              <span>Random Forest</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="80"></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="skill-category">
          <h4>Data Visualization</h4>
          <ul class="skill-list">
            <li>
              <span>Tableau</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="90"></div>
              </div>
            </li>
            <li>
              <span>Python (Matplotlib)</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="85"></div>
              </div>
            </li>
            <li>
              <span>Dashboard Design</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="80"></div>
              </div>
            </li>
            <li>
              <span>Interactive Viz</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="75"></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="skill-category">
          <h4>AI & Algorithms</h4>
          <ul class="skill-list">
            <li>
              <span>Search Algorithms</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="95"></div>
              </div>
            </li>
            <li>
              <span>YOLO</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="85"></div>
              </div>
            </li>
            <li>
              <span>Computer Vision</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="80"></div>
              </div>
            </li>
            <li>
              <span>Path Finding</span>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%" data-level="90"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
        
    <!-- Project details modal -->
    {#if selectedProject}
      <div class="project-modal active" on:click={(e) => {
        if (e.target.classList.contains('project-modal')) closeProjectModal();
      }}>
        <div class="modal-content">
          <button class="modal-close" on:click={closeProjectModal}>×</button>
          <div class="modal-header">
            <h3>{selectedProject.title}</h3>
            <div class="project-date">{selectedProject.date}</div>
            <div class="tags">
              {#each selectedProject.tags as tag}
                <span>{tag}</span>
              {/each}
            </div>
          </div>
          <div class="modal-body">
            <div class="modal-image-container">
              <img 
                src={selectedProject.imageUrl} 
                alt={`${selectedProject.title} illustration`} 
                class="modal-image"
                on:error={(e) => e.target.src = '/project-icons/placeholder.png'}
              />
            </div>
            <div class="project-details">
              {@html selectedProject.detailedDescription}
              
              <div class="tech-stack">
                <div class="tech-stack-title">Technologies Used</div>
                {#if selectedProject.techStack}
                  {#each selectedProject.techStack as tech}
                    <div class="tech-item">
                      <div class="tech-name">{tech.name}</div>
                      <div class="skill-bar">
                        <div class="skill-level" style="width: {tech.level}%"></div>
                      </div>
                    </div>
                  {/each}
                {/if}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
    
    <!-- Scroll indicator -->
  </section>
  
  <style>
  /* Projects Styles */
  #projects {
    background: rgba(27, 38, 59, 0.95);
    padding: 4rem 2rem;
    min-height: 100vh;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .project-card {
    background: #0D1B2A;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    position: relative;
  }
  
  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
  
  .project-header {
    padding: 1.5rem;
    border-bottom: 1px solid rgba(173, 106, 108, 0.2);
    display: flex;
    flex-direction: column;
  }
  
  @media (min-width: 768px) {
    .project-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  
  .project-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #C05746;
    margin-bottom: 0.5rem;
  }
  
  @media (min-width: 768px) {
    .project-title {
      margin-bottom: 0;
    }
  }
  
  .project-date {
    font-size: 0.9rem;
    color: #ADB6C4;
  }
  
  .project-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-visualization {
    height: 180px;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  /* New image styles */
  .project-image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(13, 27, 42, 0.7);
    border-radius: 8px;
    padding: 1rem;
  }
  
  .project-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  
  .project-image:hover {
    transform: scale(1.05);
  }
  
  /* Modal image styling */
  .modal-image-container {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    background: rgba(13, 27, 42, 0.7);
    border-radius: 8px;
    padding: 1rem;
    max-height: 200px;
  }
  
  .modal-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .project-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: #EAEAEA;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    text-align: left;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tags span {
    background: rgba(192, 87, 70, 0.2);
    color: #EAEAEA;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    transition: all 0.3s ease;
  }
  
  .tags span:hover {
    background: rgba(192, 87, 70, 0.4);
    transform: scale(1.05);
  }
  
  .project-footer {
    padding: 1.5rem;
    border-top: 1px solid rgba(173, 106, 108, 0.2);
    display: flex;
    justify-content: center;
  }
  
  .project-btn {
    padding: 0.75rem 1.5rem;
    background: #C05746;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  
  .project-btn:hover {
    background: #AD6A6C;
    transform: scale(1.1);
  }
  
  /* Project details modal */
  .project-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(13, 27, 42, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    padding: 1rem;
  }
  
  .project-modal.active {
    opacity: 1;
    visibility: visible;
  }
  
  .modal-content {
    background: #1b263b;
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    overflow-y: auto;
    border-radius: 12px;
    padding: 1.5rem;
    position: relative;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-30px);
    transition: all 0.3s ease;
  }
  
  @media (min-width: 768px) {
    .project-modal {
      padding: 0;
    }
    
    .modal-content {
      width: 80%;
      padding: 2rem;
    }
  }
  
  .project-modal.active .modal-content {
    transform: translateY(0);
  }
  
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #EAEAEA;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s ease;
    z-index: 2;
  }
  
  .modal-close:hover {
    color: #C05746;
  }
  
  .modal-header {
    margin-bottom: 1.5rem;
  }
  
  .modal-header h3 {
    font-size: 1.6rem;
    color: #C05746;
    margin-bottom: 0.5rem;
  }
  
  @media (min-width: 768px) {
    .modal-header h3 {
      font-size: 2rem;
    }
  }
  
  .modal-body {
    margin-bottom: 1.5rem;
  }
  
  .modal-body h4 {
    font-size: 1.3rem;
    color: #EAEAEA;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
  
  .modal-body p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .modal-body ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .modal-body ul li {
    margin-bottom: 0.5rem;
  }
  
  .tech-stack {
    margin-top: 2rem;
    border-top: 1px solid rgba(173, 106, 108, 0.2);
    padding-top: 1.5rem;
  }
  
  .tech-stack-title {
    font-size: 1.2rem;
    color: #C05746;
    margin-bottom: 1rem;
  }
  
  .tech-item {
    margin-bottom: 1rem;
  }
  
  .tech-name {
    margin-bottom: 0.3rem;
    display: flex;
    justify-content: space-between;
  }
  
  .tech-name::after {
    content: attr(data-level) '%';
    color: #ADB6C4;
  }
  
  .skill-bar {
    height: 10px;
    background: rgba(192, 87, 70, 0.2);
    border-radius: 5px;
    margin-bottom: 1rem;
    overflow: hidden;
  }
  
  .skill-level {
    height: 100%;
    background: #C05746;
    border-radius: 5px;
    transition: width 1s ease;
  }
  
  /* Animation for project cards */
  .project-card {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s forwards;
  }
  
  /* Stagger the animations */
  .project-card:nth-child(1) { animation-delay: 0.1s; }
  .project-card:nth-child(2) { animation-delay: 0.2s; }
  .project-card:nth-child(3) { animation-delay: 0.3s; }
  .project-card:nth-child(4) { animation-delay: 0.4s; }
  .project-card:nth-child(5) { animation-delay: 0.5s; }
  .project-card:nth-child(6) { animation-delay: 0.6s; }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Highlight animation for newly added projects */
  .project-card.new::after {
    content: 'New';
    position: absolute;
    top: 10px;
    right: 10px;
    background: #C05746;
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  /* Filter controls */
  .filter-controls {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid #C05746;
    color: #EAEAEA;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  @media (min-width: 768px) {
    .filter-btn {
      font-size: 1rem;
      padding: 0.5rem 1.2rem;
    }
    
    .filter-controls {
      gap: 1rem;
    }
  }
  
  .filter-btn:hover,
  .filter-btn.active {
    background: #C05746;
    color: white;
  }
  
  /* Skills section at the bottom */
  .skills-section {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(173, 106, 108, 0.2);
  }
  
  .skills-title {
    font-size: 1.8rem;
    color: #C05746;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 480px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .skill-category {
    background: #0D1B2A;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .skill-category h4 {
    color: #C05746;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .skill-list {
    list-style: none;
  }
  
  .skill-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
    flex-direction: column;
    text-align: left;
    width: 100%;
  }
  
  .skill-list li span {
    margin-bottom: 0.3rem;
    align-self: flex-start;
  }
  
  .skill-progress {
    width: 100%;
    height: 8px;
    background: rgba(192, 87, 70, 0.2);
    border-radius: 4px;
    overflow: hidden;
  }
  
  .skill-progress-bar {
    height: 100%;
    background: #C05746;
    border-radius: 4px;
    width: 0%;
    transition: width 1s ease;
  }
  
  /* Projects CTA */
  .projects-cta {
    margin-top: 4rem;
    text-align: center;
  }
  
  .projects-cta p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .coffee-chat-btn {
    padding: 1rem 2rem;
    background: #C05746;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .coffee-chat-btn:hover {
    background: #AD6A6C;
    transform: scale(1.05);
  }
  
  .coffee-icon {
    font-size: 1.2rem;
  }
  
  /* Scroll indicator */
  .scroll-indicator {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    background: #C05746;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    z-index: 999;
  }
  
  @media (min-width: 768px) {
    .scroll-indicator {
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }
  }
  
  .scroll-indicator:hover {
    transform: scale(1.1);
    background: #AD6A6C;
  }
  
  /* Additional Media Queries for better responsive design */
  @media (max-width: 480px) {
    #projects {
      padding: 3rem 1rem;
    }
    
    h2 {
      font-size: 1.8rem;
    }
    
    .project-title {
      font-size: 1.1rem;
    }
    
    .project-card p {
      font-size: 0.9rem;
    }
    
    .project-btn {
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
    }
    
    .modal-header h3 {
      font-size: 1.4rem;
    }
    
    .modal-body h4 {
      font-size: 1.1rem;
    }
  }
  
  /* Touch device optimizations */
  @media (hover: none) {
    .project-card:hover {
      transform: none;
    }
    
    .project-btn:hover {
      transform: none;
    }
    
    .project-image:hover {
      transform: none;
    }
    
    .tags span:hover {
      transform: none;
    }
  }

  .p1{
    margin-top:-6vh;
  }
  </style>