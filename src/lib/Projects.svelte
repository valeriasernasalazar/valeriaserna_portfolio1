<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  // 15 projects. First 6 are featured (shown by default); the rest are
  // revealed when the user clicks "Show all projects".
  // category is one of: "data-ai" | "engineering"
  // resultsPdf: single string path
  // resultsPdfs: array of { label, url } for multiple downloads
  const projects = [
    {
      id: 1,
      title: "Camera Vision Traffic Analysis",
      year: "2025",
      type: "AI",
      category: "data-ai",
      summary:
        "Real-time vehicle detection and counting with YOLOv11 for a research initiative at Tec de Monterrey.",
      tags: ["Computer Vision", "YOLO", "AI"],
      featured: true,
      imageUrl: "/project-icons/traffic-vision.png",
      github: "https://github.com/valeriasernasalazar/ConteoVehiculos",
      resultsPdf: "/results/traffic-vision.pdf",
      description: [
        "Trained a YOLOv11 model to detect and count vehicles in real-time video feeds for a research initiative at Tec de Monterrey's Distrito Tec. The system covers cars, buses, trucks, and motorcycles across 100+ hours of footage.",
        "Hit 89% detection accuracy and built a dashboard to visualize traffic patterns. Cut manual counting time by 95%, which let the research team scale to more intersections without adding headcount.",
        "Now part of a larger project on urban traffic flow optimization in Monterrey."
      ],
      techStack: ["Python", "YOLO", "OpenCV", "TensorFlow"]
    },
    {
      id: 2,
      title: "Personal Data Protection System for Casa Monarca",
      year: "2024",
      type: "Security",
      category: "engineering",
      summary:
        "Data-protection audit and mitigation plan for a Monterrey NGO supporting migrants.",
      tags: ["Security", "Audit", "NGO"],
      featured: true,
      imageUrl: "/project-icons/casamonarca.png",
      resultsPdfs: [
        { label: "Presentation", url: "/results/casa-monarca.pdf" },
        { label: "Report", url: "/results/MA2006B_reporteFinal.pdf" }
      ],
      description: [
        "Ran a data-protection audit for Casa Monarca, a Monterrey-based NGO that supports migrants. They were holding sensitive personal data with no formal protections in place.",
        "Mapped the data flows, identified exposure points, and delivered a mitigation plan covering access controls, encryption, and retention policies. Also trained their staff on the new procedures.",
        "The shelter now has a defensible data-handling baseline that complies with Mexican data-protection law (LFPDPPP) without breaking their operational workflow."
      ],
      techStack: ["AES Encryption", "PostgreSQL", "Risk Assessment"]
    },
    {
      id: 3,
      title: "Vibratory Phenomenon Modeling and Control",
      year: "2024",
      type: "Engineering",
      category: "engineering",
      summary:
        "MATLAB/Simulink model of a vibratory system with an active control scheme to damp oscillations.",
      tags: ["Control Systems", "MATLAB", "Engineering"],
      featured: true,
      imageUrl: "/project-icons/vibration-control.png",
      resultsPdf: "/results/vibratory-modeling.pdf",
      description: [
        "Modeled a vibratory mechanical system in MATLAB/Simulink and designed an active control scheme to damp unwanted oscillations. The work covered system identification, transfer function derivation, and PID tuning.",
        "Validated the controller in simulation against real sensor data. The final design reduced settling time by roughly 40% compared to the open-loop baseline.",
        "Final project for the Vibrations course at Tec de Monterrey."
      ],
      techStack: ["MATLAB/Simulink", "Control Systems", "Mathematical Modeling"]
    },
    {
      id: 4,
      title: "BAM Communication Webscraping",
      year: "2023",
      type: "Automation",
      category: "engineering",
      summary:
        "Selenium bot that automated social media collection for a comms agency, freeing ~6 hours/week.",
      tags: ["Selenium", "Python", "Google Cloud"],
      featured: true,
      imageUrl: "/project-icons/web-scraping.png",
      github: "https://github.com/valeriasernasalazar",
      description: [
        "Built a Python + Selenium bot for BAM Communication that scrapes client posts across Facebook, Instagram, TikTok, and YouTube. Replaced a manual weekly workflow that was eating analyst hours.",
        "Automated report generation through Google Cloud Console, pushing structured data straight into Google Sheets. Cut weekly analysis time by about 40%, freeing roughly 6 hours per week.",
        "The comms team now spends that time on strategy instead of data collection."
      ],
      techStack: ["Python", "Selenium", "Google Cloud"]
    },
    {
      id: 5,
      title: "E-commerce Delivery Route Optimization",
      year: "2023",
      type: "Operations Research",
      category: "engineering",
      summary:
        "VRP solver for last-mile delivery that cut total route distance by ~22%.",
      tags: ["Operations Research", "Optimization", "Routing"],
      featured: true,
      imageUrl: "/project-icons/route-optimization.png",
      resultsPdf: "/results/vrp-resultados.pdf",
      description: [
        "Implemented a vehicle routing problem (VRP) solver for an e-commerce delivery scenario, optimizing last-mile routes across a fleet of vehicles. Used OR-Tools with custom constraints for time windows and vehicle capacity.",
        "Cut total route distance by roughly 22% compared to the baseline heuristic the company was using. Also reduced average delivery time per stop.",
        "Final project for the Operations Research course at Tec de Monterrey."
      ],
      techStack: ["Python", "Operations Research", "Optimization Theory"]
    },
    {
      id: 6,
      title: "Mars Rover Intelligent Exploration System",
      year: "2023",
      type: "Artificial Intelligence",
      category: "data-ai",
      summary:
        "Autonomous exploration system for a simulated Mars rover with path planning and target prioritization.",
      tags: ["AI", "Path Planning", "Search Algorithms"],
      featured: true,
      imageUrl: "/project-icons/mars-rover.png",
      description: [
        "Built an autonomous exploration system for a simulated Mars rover. The rover maps unknown terrain, identifies science targets, and plans efficient paths to sample them.",
        "Combined A* for path planning with a decision layer that prioritizes targets based on scientific value and accessibility. Handled obstacle avoidance and energy budget constraints.",
        "Final project for the Artificial Intelligence course at Tec de Monterrey."
      ],
      techStack: ["Python", "Search Algorithms", "Path Planning"]
    },
    // --- Remaining 9 (revealed on "Show all") ---
    {
      id: 7,
      title: "ProTect Data Analysis Dashboards",
      year: "2023",
      type: "Data Visualization",
      category: "data-ai",
      summary:
        "Interactive Tableau dashboards visualizing compliance metrics across client organizations.",
      tags: ["Data Visualization", "Tableau", "Dashboards"],
      featured: false,
      imageUrl: "/project-icons/dashboard.png",
      description: [
        "Built interactive dashboards for ProTect, a personal data protection startup, to visualize compliance metrics across client organizations. Used Tableau for the front-end and Python for the data prep layer.",
        "The dashboards pulled from a PostgreSQL warehouse and refreshed on a nightly schedule."
      ],
      techStack: ["Tableau", "Python", "PostgreSQL"]
    },
    {
      id: 8,
      title: "Visualization for TecStore",
      year: "2023",
      type: "Analytics",
      category: "data-ai",
      summary:
        "Sales analytics dashboard for the on-campus store at Tec de Monterrey.",
      tags: ["Analytics", "Power BI", "Visualization"],
      featured: false,
      imageUrl: "/project-icons/data-viz.png",
      resultsPdf: "/results/tecstore.pdf",
      description: [
        "Designed a sales analytics dashboard for TecStore, the on-campus store at Tec de Monterrey. Visualized revenue trends, top products, and customer segments to support inventory decisions.",
        "The dashboard surfaced a slow-moving SKU problem that the store acted on the following quarter."
      ],
      techStack: ["PowerBI", "Python", "Sales Analytics"]
    },
    {
      id: 9,
      title: "Social Service Survey Analysis",
      year: "2023",
      type: "Data Science",
      category: "data-ai",
      summary:
        "Statistical analysis of survey data from Tec de Monterrey's social service program.",
      tags: ["Survey Analysis", "Statistics", "R"],
      featured: false,
      imageUrl: "/project-icons/survey-analysis.png",
      resultsPdf: "/results/servicio-social.pdf",
      description: [
        "Analyzed survey data from Tec de Monterrey's social service program. Cleaned and structured the responses, ran statistical tests, and produced a report on student outcomes and program effectiveness.",
        "Findings informed recommendations to the program coordinators on placement and supervision."
      ],
      techStack: ["R Programming", "Statistical Analysis", "Data Cleaning"]
    },
    {
      id: 10,
      title: "Air Quality Analysis & Prediction System",
      year: "2023",
      type: "Data Science",
      category: "data-ai",
      summary:
        "Time-series forecasting model for air quality in Monterrey using Prophet.",
      tags: ["Time Series", "Forecasting", "Prophet"],
      featured: false,
      imageUrl: "/project-icons/air-quality.png",
      resultsPdf: "/results/ReporteFinal-sima.pdf",
      description: [
        "Built a time-series forecasting model for air quality in Monterrey using Prophet. Pulled data from local monitoring stations, engineered features, and produced 7-day forecasts with confidence intervals.",
        "Combined the model with a Streamlit dashboard so users could explore forecasts by pollutant and station."
      ],
      techStack: ["Python", "Prophet", "Streamlit", "Time Series Analysis"]
    },
    {
      id: 11,
      title: "Deep Learning for Fashion Image Classification",
      year: "2023",
      type: "Machine Learning",
      category: "data-ai",
      summary:
        "CNN experiments on Fashion-MNIST comparing architectures from LeNet to ResNet.",
      tags: ["Deep Learning", "CNN", "TensorFlow"],
      featured: false,
      imageUrl: "/project-icons/fashion-classification.png",
      resultsPdf: "/results/redes-resultados.pdf",
      description: [
        "Trained a CNN on the Fashion-MNIST dataset, experimenting with architectures from a simple LeNet to a deeper ResNet-style network. Compared accuracy, training time, and parameter counts across configurations.",
        "The deeper ResNet variant hit 92% test accuracy but took 3x longer to train than the LeNet baseline."
      ],
      techStack: ["Python", "TensorFlow", "Keras", "Scikit-learn"]
    },
    {
      id: 12,
      title: "Tourism Trip Optimization in Mexico City",
      year: "2022",
      type: "Operations Research",
      category: "engineering",
      summary:
        "TSP with time windows for planning tourist day-trips in Mexico City, solved with a genetic algorithm.",
      tags: ["Optimization", "TSP", "Genetic Algorithm"],
      featured: false,
      imageUrl: "/project-icons/mexico-tourism-optimization.png",
      resultsPdf: "/results/reto_optimizacion_final.pdf",
      description: [
        "Modeled a tourist itinerary planning problem in Mexico City as a TSP with time windows. Used a genetic algorithm to find near-optimal day-trip routes covering major attractions.",
        "The solver produced 3-day itineraries that respected opening hours and travel-time budgets."
      ],
      techStack: ["Python", "Operations Research", "Simulated Annealing"]
    },
    {
      id: 13,
      title: "Security Audit and Mitigation Plan",
      year: "2023",
      type: "Cybersecurity",
      category: "engineering",
      summary:
        "Security audit for an educational institution's IT infrastructure.",
      tags: ["Cybersecurity", "Audit", "Risk Assessment"],
      featured: false,
      imageUrl: "/project-icons/security-audit.png",
      resultsPdfs: [
        { label: "Presentation", url: "/results/MA2002B_reporte.pdf" },
        { label: "Report", url: "/results/RETO_MA2002B.pdf" }
      ],
      description: [
        "Conducted a security audit for an educational institution's IT infrastructure. Mapped the attack surface, identified vulnerabilities, and delivered a prioritized mitigation plan covering network, endpoint, and policy controls.",
        "Used Nessus for vulnerability scanning and CVSS to prioritize remediation work."
      ],
      techStack: ["Nessus Vulnerability Scanner", "Network Security", "CVSS Analysis"]
    },
    {
      id: 14,
      title: "Music Recognition System Using FFT",
      year: "2022",
      type: "Signal Processing",
      category: "engineering",
      summary:
        "Shazam-style music recognition using FFT-based spectral fingerprints.",
      tags: ["Signal Processing", "FFT", "Audio"],
      featured: false,
      imageUrl: "/project-icons/sentiment-analysis.png",
      description: [
        "Built a Shazam-style music recognition system. Computed FFT-based spectral fingerprints for a song database and matched short audio snippets against them using a peak-pair hashing scheme.",
        "The system recognized 85% of test clips within 3 seconds, even with background noise."
      ],
      techStack: ["Python", "Fast Fourier Transform", "Signal Processing"]
    },
    {
      id: 15,
      title: "COVID-19 Hospitalization Analysis",
      year: "2020-2022",
      type: "Data Science",
      category: "data-ai",
      summary:
        "Statistical study of COVID-19 hospitalization outcomes across demographic groups in Mexico.",
      tags: ["Statistics", "Public Health", "R"],
      featured: false,
      imageUrl: "/project-icons/air-quality.png",
      description: [
        "Analyzed COVID-19 hospitalization data from Mexico's Ministry of Health, working with a stratified sample of 120,000 observations drawn from a database of 6.98 million records. The research question was whether pregnancy status affected hospitalization outcomes.",
        "Ran Chi-squared independence tests, z-tests for mean comparison, and two-factor ANOVA. Found that pregnant women had significantly shorter hospitalization periods before death (mean 16.6 days) than non-pregnant women (mean 219.7 days). No significant difference was found between men and non-pregnant women.",
        "The findings supported prioritizing pregnant women for preventative measures during the pandemic."
      ],
      techStack: ["R Programming", "Statistical Analysis", "Hypothesis Testing", "ANOVA Modeling"]
    }
  ];

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "data-ai", label: "Data & AI" },
    { value: "engineering", label: "Engineering" }
  ];

  let activeFilter = "all";
  let showAll = false;
  let selectedProject = null;

  $: filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  $: visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  $: hasMore = !showAll && filteredProjects.length > 6;

  function setFilter(value) {
    activeFilter = value;
    showAll = false;
  }

  function toggleShowAll() {
    showAll = !showAll;
  }

  function openProject(project) {
    selectedProject = project;
    document.body.style.overflow = "hidden";
  }

  function closeProject() {
    selectedProject = null;
    document.body.style.overflow = "";
  }

  function techLogoPath(name) {
    return `${base}/tech-logos/${name
      .toLowerCase()
      .replace(/[\s\/]/g, "-")}.png`;
  }

  // Flatten all PDF download links for a project (handles both single and plural)
  function projectPdfs(project) {
    if (project.resultsPdfs && project.resultsPdfs.length) {
      return project.resultsPdfs;
    }
    if (project.resultsPdf) {
      return [{ label: "Results PDF", url: project.resultsPdf }];
    }
    return [];
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closeProject();
  }


  onMount(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && selectedProject) closeProject();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
</script>

<div class="projects-section">
  <div class="filter-row" role="tablist" aria-label="Project filters">
    {#each filterOptions as option}
      <button
        type="button"
        class="filter-chip {activeFilter === option.value ? "active" : ""}"
        on:click={() => setFilter(option.value)}
        role="tab"
        aria-selected={activeFilter === option.value}
      >
        {option.label}
      </button>
    {/each}
  </div>

  <div class="projects-grid">
    {#each visibleProjects as project (project.id)}
      <article
        class="project-card"
        on:click={() => openProject(project)}
        on:keydown={(e) => e.key === "Enter" && openProject(project)}
        role="button"
        tabindex="0"
        aria-label={`Open details for ${project.title}`}
      >
        <div class="card-image-wrap">
          <img
            src="{base}{project.imageUrl}"
            alt={project.title}
            class="card-image"
            loading="lazy"
            on:error={(e) => (e.target.style.opacity = "0")}
          />
        </div>
        <div class="card-body">
          <div class="card-top">
            <h3 class="card-title">{project.title}</h3>
            <span class="card-year">{project.year}</span>
          </div>
          <p class="card-summary">{project.summary}</p>
          <div class="card-bottom">
            <div class="card-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            <div class="card-icons" aria-hidden="true">
              {#if project.github}
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              {/if}
              {#if projectPdfs(project).length > 0}
                <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                  <path d="M13 10V3H7v7H4l6 7 6-7h-3zm-9 7v2h14v-2H4z" />
                </svg>
              {/if}
            </div>
          </div>
        </div>
      </article>
    {/each}
  </div>

  {#if hasMore}
    <div class="show-more-row">
      <button type="button" class="show-more-btn" on:click={toggleShowAll}>
        Show all {filteredProjects.length} projects
        <span class="arrow">↓</span>
      </button>
    </div>
  {:else if showAll}
    <div class="show-more-row">
      <button type="button" class="show-more-btn" on:click={toggleShowAll}>
        Show less
        <span class="arrow">↑</span>
      </button>
    </div>
  {/if}


  </div>

  {#if selectedProject}
  <div
    class="modal-overlay"
    on:click={handleOverlayClick}
    on:keydown={(e) => e.key === "Escape" && closeProject()}
    role="dialog"
    aria-modal="true"
    aria-label={selectedProject.title}
    tabindex="-1"
  >
    <div class="modal-card">
      <button type="button" class="modal-close" on:click={closeProject} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>

      <div class="modal-layout">
        <aside class="modal-sidebar">
          <div class="sidebar-image">
            <img
              src="{base}{selectedProject.imageUrl}"
              alt={selectedProject.title}
              on:error={(e) => (e.target.style.opacity = "0")}
            />
          </div>

          <div class="sidebar-meta">
            <div class="meta-item">
              <span class="meta-label">Year</span>
              <span class="meta-value">{selectedProject.year}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Category</span>
              <span class="meta-value">{selectedProject.type}</span>
            </div>
          </div>

          <div class="sidebar-actions">
            {#if selectedProject.github}
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                class="sidebar-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>GitHub</span>
              </a>
            {/if}
            {#each projectPdfs(selectedProject) as pdf}
              <a
                href="{base}{pdf.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="sidebar-link"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M13 10V3H7v7H4l6 7 6-7h-3zm-9 7v2h14v-2H4z" />
                </svg>
                <span>{pdf.label}</span>
              </a>
            {/each}
          </div>

          {#if selectedProject.techStack && selectedProject.techStack.length}
            <div class="sidebar-tech">
              <span class="sidebar-label">Tech stack</span>
              <div class="tech-chips">
                {#each selectedProject.techStack as tech}
                  <span class="tech-chip">
                    <img
                      src={techLogoPath(tech)}
                      alt=""
                      class="tech-logo"
                      on:error={(e) => (e.target.style.display = "none")}
                    />
                    <span>{tech}</span>
                  </span>
                {/each}
              </div>
            </div>
          {/if}
        </aside>

        <div class="modal-main">
          <div class="modal-main-inner">
            <span class="modal-eyebrow">{selectedProject.year} · {selectedProject.type}</span>
            <h2 class="modal-title">{selectedProject.title}</h2>
            <div class="modal-divider" aria-hidden="true"></div>
            <div class="modal-tags">
              {#each selectedProject.tags as tag}
                <span class="modal-tag">{tag}</span>
              {/each}
            </div>
            <div class="modal-prose">
              {#each selectedProject.description as para}
                <p>{para}</p>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* ── Section wrapper ── */
  .projects-section {
    width: 100%;
  }

  /* ── Filter row ── */
  .filter-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
  }

  .filter-chip {
    padding: 0.45rem 1.1rem;
    font-size: 0.82rem;
    font-weight: 500;
    color: #C9D1DC;
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s ease;
    font-family: inherit;
  }

  .filter-chip:hover {
    color: #EAEAEA;
    border-color: rgba(192, 87, 70, 0.3);
  }

  .filter-chip.active {
    background: rgba(192, 87, 70, 0.15);
    border-color: rgba(192, 87, 70, 0.5);
    color: #EAEAEA;
  }

  /* ── Projects grid ── */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }

  @media (min-width: 640px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
    }
  }

  @media (min-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* ── Project card ── */
  .project-card {
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .project-card:hover {
    background: rgba(192, 87, 70, 0.06);
    border-color: rgba(192, 87, 70, 0.3);
    transform: translateY(-2px);
  }

  .project-card:focus-visible {
    outline: 2px solid #C05746;
    outline-offset: 2px;
  }

  .card-image-wrap {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: rgba(13, 27, 42, 0.6);
    overflow: hidden;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease, opacity 0.2s ease;
  }

  .project-card:hover .card-image {
    transform: scale(1.04);
  }

  .card-body {
    padding: 1.2rem 1.4rem 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 1;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.8rem;
  }

  .card-title {
    font-size: 1rem;
    font-weight: 700;
    color: #EAEAEA;
    margin: 0;
    line-height: 1.3;
  }

  .card-year {
    font-size: 0.72rem;
    color: #6E7891;
    font-weight: 500;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  .card-summary {
    font-size: 0.83rem;
    line-height: 1.55;
    color: #ADB6C4;
    margin: 0;
    flex: 1;
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.8rem;
    margin-top: auto;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .tag {
    font-size: 0.66rem;
    font-weight: 500;
    color: #D88B7A;
    background: rgba(216, 139, 122, 0.08);
    border: 1px solid rgba(216, 139, 122, 0.2);
    padding: 0.18rem 0.55rem;
    border-radius: 999px;
  }

  .card-icons {
    display: flex;
    gap: 0.5rem;
    color: #6E7891;
    flex-shrink: 0;
  }

  /* ── Show more button ── */
  .show-more-row {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
  }

  .show-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.65rem 1.4rem;
    font-size: 0.88rem;
    font-weight: 600;
    color: #EAEAEA;
    background: rgba(13, 27, 42, 0.6);
    border: 1px solid rgba(192, 87, 70, 0.35);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
  }

  .show-more-btn:hover {
    background: rgba(192, 87, 70, 0.1);
    border-color: #C05746;
  }

  .show-more-btn .arrow {
    transition: transform 0.2s ease;
  }

  .show-more-btn:hover .arrow {
    transform: translateY(2px);
  }


  /* ── Modal ── */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.75rem;
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    .modal-overlay {
      padding: 1.5rem 1rem;
    }
  }

  .modal-card {
    background: #1b263b;
    border: 1px solid rgba(192, 87, 70, 0.2);
    border-radius: 14px;
    max-width: 900px;
    width: 100%;
    max-height: 92vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    .modal-card {
      border-radius: 16px;
      max-height: 90vh;
    }
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: #ADB6C4;
    cursor: pointer;
    transition: all 0.15s ease;
    z-index: 10;
  }

  .modal-close:hover {
    background: rgba(192, 87, 70, 0.15);
    color: #EAEAEA;
    border-color: rgba(192, 87, 70, 0.3);
  }

  .modal-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (min-width: 768px) {
    .modal-layout {
      grid-template-columns: 260px 1fr;
      gap: 0;
    }
  }

  .modal-sidebar {
    padding: 1.3rem 1.2rem 1.2rem;
    background: rgba(13, 27, 42, 0.4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media (min-width: 768px) {
    .modal-sidebar {
      padding: 1.6rem 1.4rem 1.4rem;
      border-bottom: none;
      border-right: 1px solid rgba(255, 255, 255, 0.05);
    }
  }

  .sidebar-image {
    width: 100%;
    max-width: 240px;
    aspect-ratio: 16 / 9;
    background: rgba(13, 27, 42, 0.6);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1.3rem;
  }

  @media (min-width: 768px) {
    .sidebar-image {
      max-width: 100%;
    }
  }

  .sidebar-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .sidebar-meta {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-bottom: 1.2rem;
  }

  @media (min-width: 768px) {
    .sidebar-meta {
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.4rem;
    }
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 80px;
  }

  .meta-label {
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #6E7891;
  }

  @media (min-width: 768px) {
    .meta-label { font-size: 0.68rem; }
  }

  .meta-value {
    font-size: 0.82rem;
    color: #EAEAEA;
  }

  @media (min-width: 768px) {
    .meta-value { font-size: 0.86rem; }
  }

  .sidebar-actions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.2rem;
  }

  @media (min-width: 768px) {
    .sidebar-actions {
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 1.4rem;
    }
  }

  .sidebar-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.9rem;
    font-size: 0.78rem;
    font-weight: 500;
    color: #EAEAEA;
    background: rgba(192, 87, 70, 0.1);
    border: 1px solid rgba(192, 87, 70, 0.25);
    border-radius: 10px;
    text-decoration: none;
    transition: all 0.15s ease;
  }

  @media (min-width: 768px) {
    .sidebar-link {
      font-size: 0.8rem;
    }
  }

  .sidebar-link:hover {
    background: rgba(192, 87, 70, 0.2);
    border-color: rgba(192, 87, 70, 0.5);
  }

  .sidebar-label {
    display: block;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #6E7891;
    margin-bottom: 0.6rem;
  }

  .tech-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tech-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.3rem 0.65rem;
    font-size: 0.72rem;
    font-weight: 500;
    color: #C9D1DC;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
  }

  .tech-logo {
    width: 14px;
    height: 14px;
    object-fit: contain;
  }

  .modal-main {
    padding: 1.5rem 1.4rem 1.8rem;
  }

  @media (min-width: 768px) {
    .modal-main {
      padding: 2.5rem 2.5rem 3rem;
    }
  }

  .modal-main-inner {
    max-width: 580px;
    margin: 0 auto;
    text-align: left;
  }

  .modal-eyebrow {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #D88B7A;
    margin-bottom: 0.5rem;
  }

  .modal-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: #EAEAEA;
    margin: 0 0 0.8rem 0;
    line-height: 1.25;
    padding-right: 2rem;
  }

  @media (min-width: 768px) {
    .modal-eyebrow { font-size: 0.7rem; }
    .modal-title {
      font-size: 1.7rem;
      margin-bottom: 1rem;
    }
  }

  .modal-divider {
    width: 40px;
    height: 2px;
    background: #C05746;
    border-radius: 1px;
    margin: 0 0 1.3rem;
  }

  .modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 1.4rem;
  }

  @media (min-width: 768px) {
    .modal-tags {
      gap: 0.4rem;
      margin-bottom: 1.8rem;
    }
  }

  .modal-tag {
    font-size: 0.66rem;
    font-weight: 500;
    color: #D88B7A;
    background: rgba(216, 139, 122, 0.08);
    border: 1px solid rgba(216, 139, 122, 0.25);
    padding: 0.22rem 0.6rem;
    border-radius: 999px;
  }

  @media (min-width: 768px) {
    .modal-tag {
      font-size: 0.7rem;
      padding: 0.25rem 0.7rem;
    }
  }

  .modal-prose p {
    font-size: 0.86rem;
    line-height: 1.65;
    color: #C9D1DC;
    margin: 0 0 0.9rem 0;
  }

  @media (min-width: 768px) {
    .modal-prose p {
      font-size: 0.92rem;
      line-height: 1.75;
      margin-bottom: 1.1rem;
    }
  }

  .modal-prose p:last-child {
    margin-bottom: 0;
  }
</style>
