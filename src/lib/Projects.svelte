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
title: "Personal Data Protection System for Casa Monarca",
date: "2024",
description: "Developed a comprehensive data security system to protect sensitive information of migrants at Casa Monarca shelter in Monterrey, implementing AES encryption standards and cloud database solutions.",
tags: ["Data Security", "Encryption", "Cloud Database", "Python"],
type: "Security",
imageUrl: "/project-icons/data-security.png",
isNew: true,
detailedDescription: `
  <h4>Project Overview</h4>
  <p>This project involved creating a robust data protection system for "Casa Monarca - Ayuda humanitaria al migrante A.B.P.", a migrant shelter in Monterrey. The system safeguards sensitive personal information of vulnerable migrants through modern encryption methods and secure cloud storage.</p>
  
  <h4>Key Achievements</h4>
  <ul>
    <li>Implemented AES-GCM encryption standard to ensure data confidentiality and authenticity</li>
    <li>Developed a relational database system in PostgreSQL with cloud migration to Google Cloud SQL</li>
    <li>Created a user-friendly interface with HTML, CSS, and JavaScript with Python backend</li>
    <li>Built a hierarchical user permission system with three security levels</li>
    <li>Integrated Levenshtein distance algorithm for fuzzy name matching to improve data retrieval</li>
  </ul>
  
  <h4>Technical Details</h4>
  <p>The system uses AES encryption to protect all sensitive data, with a key derivation process based on PBKDF2. The interface features secure user authentication, migrant registration, service tracking, and administrative controls. A predictive model using Facebook's Prophet was implemented to forecast migrant arrivals, and a PowerBI dashboard provides data visualization for administrators.</p>
  
  <h4>Impact</h4>
  <p>This project significantly improved data security for a humanitarian organization working with vulnerable populations, ensuring compliance with data protection standards while maintaining operational efficiency. The system is now being used to safeguard personal information of migrants seeking humanitarian assistance.</p>
`,
techStack: [
  { name: "Python", level: 90 },
  { name: "AES Encryption", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "Google Cloud", level: 75 },
  { name: "HTML/CSS/JavaScript", level: 70 },
  { name: "PowerBI", level: 65 }
]
    },
      {
      id: 5,
      title: "Vibratory Phenomenon Modeling and Control",
      date: "2024",
      description: "Developed mathematical models to analyze, simulate, and control the vibratory effects of earthquakes on a 68-story building. Achieved a maximum displacement of only 0.00045 meters through implementation of optimal PID control systems.",
      tags: ["Mathematical Modeling", "Vibration Analysis", "PID Control", "Structural Engineering"],
      type: "Engineering",
      imageUrl: "/project-icons/vibration-control.png",
      isNew: true,
      detailedDescription: `
        <h4>Project Overview</h4>
        <p>This project involved the modeling, analysis, simulation, and control of vibratory phenomena, specifically those caused by earthquakes. Using advanced mathematical models, I analyzed natural frequencies and vibration modes of a 68-story building (Torre Mitikah in Mexico City) and simulated its response to seismic events.</p>
        
        <h4>Key Achievements</h4>
        <ul>
          <li>Developed comprehensive mathematical models to simulate building response to seismic activity</li>
          <li>Analyzed natural frequencies and vibration modes for a 68-story structure using eigenvalue calculations</li>
          <li>Implemented and optimized various control systems (P, PD, PI, PID) to minimize structural displacement</li>
          <li>Achieved a maximum displacement of only 0.00045 meters with a PID controller - well below safety thresholds</li>
          <li>Reduced oscillation stabilization time to 38 seconds, ensuring rapid recovery after seismic events</li>
        </ul>
        
        <h4>Technical Details</h4>
        <p>The project utilized differential equations to model each floor's response to seismic forces. I implemented state-space representation with matrices to analyze system stability and dynamic behavior. The optimal PID controller (Kp: 5, Ki: 3, Kd: 2.6) maintained building oscillations within safe parameters, keeping the inclination angle below 0.11 degrees - the critical threshold for structural integrity.</p>
        
        <h4>Impact</h4>
        <p>This research contributes significantly to seismic engineering knowledge by providing effective solutions for building safer, more resilient infrastructure in earthquake-prone regions. The modeling techniques and control systems developed can be applied to improve structural designs and reduce potential damage and loss of life during seismic events.</p>
      `,
      techStack: [
        { name: "Mathematical Modeling", level: 95 },
        { name: "Control Systems", level: 90 },
        { name: "Differential Equations", level: 85 },
        { name: "Python", level: 80 },
        { name: "MATLAB/Simulink", level: 85 },
        { name: "Structural Analysis", level: 75 }
      ]
    },
    {
id: 6,
title: "Air Quality Analysis & Prediction System",
date: "2023",
description: "Developed predictive models to analyze and forecast ozone (O3) levels in Monterrey, Mexico. Achieved 84% accuracy with a logistic regression model and created an interactive dashboard for real-time monitoring.",
tags: ["Data Science", "Statistical Modeling", "Time Series", "Environmental Analysis"],
type: "Data Science",
imageUrl: "/project-icons/air-quality.png",
isNew: true,
detailedDescription: `
  <h4>Project Overview</h4>
  <p>This project focused on analyzing and predicting ozone (O3) levels in Monterrey, Mexico, a city ranked among the top 10 globally for traffic congestion. Using data from the San Nicolás UANL monitoring station, I developed predictive models to forecast air quality conditions by hour, providing essential information for public health decisions and environmental management.</p>
  
  <h4>Key Achievements</h4>
  <ul>
    <li>Developed a time series model with 80% accuracy for hourly ozone prediction</li>
    <li>Created a logistic regression model with 84% accuracy to classify high/low ozone levels</li>
    <li>Identified key predictors including CO, NOx, solar radiation, time of day, and relative humidity</li>
    <li>Quantified the dominant impact of solar radiation (9x higher coefficient than other factors)</li>
    <li>Built an interactive web interface for custom date range and station-specific predictions</li>
  </ul>
  
  <h4>Technical Details</h4>
  <p>The analysis began with comprehensive data cleaning, removing outliers (>3σ from mean) and handling missing values. Two complementary models were developed: a time series analysis using sinusoidal functions to predict hourly patterns, and a logistic regression model to classify ozone levels based on multiple variables. The Prophet library from Meta was implemented for advanced machine learning predictions that account for seasonality and holidays.</p>
  
  <h4>Impact</h4>
  <p>This project provides local authorities with a valuable tool for implementing targeted pollution control measures during critical periods. The interactive dashboard allows officials to visualize and predict air quality conditions, supporting data-driven decisions for public health warnings and traffic management. The findings highlight the significant impact of solar radiation on ozone formation, contributing to better understanding of air quality dynamics in urban environments.</p>
`,
techStack: [
  { name: "R Programming", level: 90 },
  { name: "Statistical Modeling", level: 85 },
  { name: "Time Series Analysis", level: 85 },
  { name: "Python", level: 80 },
  { name: "Prophet ML Library", level: 75 },
  { name: "Web Dashboard Development", level: 70 }
]
},
{
id: 7,
title: "E-commerce Delivery Route Optimization System",
date: "2023",
description: "Developed a stochastic optimization algorithm that determines the most efficient delivery routes for e-commerce shipments. Reduced delivery times to a single day while optimizing vehicle and loading dock resources.",
tags: ["Optimization", "Route Planning", "Simulation", "Vehicle Routing Problem", "Monte Carlo"],
type: "Operations Research",
imageUrl: "/project-icons/route-optimization.png",
isNew: true,
detailedDescription: `
  <h4>Project Overview</h4>
  <p>This project addressed the challenge of optimizing e-commerce delivery operations in response to the projected 12% growth in online sales by 2024. Using stochastic optimization techniques, I created a system that determines the most efficient vehicle routes and resource allocation for product deliveries across 344 locations in Monterrey, Mexico.</p>
  
  <h4>Key Achievements</h4>
  <ul>
    <li>Implemented the Vehicle Routing Problem (VRP) with capacity and time constraints to minimize delivery distance and time</li>
    <li>Developed a Monte Carlo simulation system that processed over 31,000 purchases and 53,000 products</li>
    <li>Tested multiple resource configurations through 100 simulation iterations of 100 clients each</li>
    <li>Determined the optimal configuration (3 vehicles + 1 loading dock) that reduced deliveries to a single day</li>
    <li>Created a greedy search algorithm using the simpleai library to find efficient delivery routes</li>
  </ul>
  
  <h4>Technical Details</h4>
  <p>The project used frequency analysis of historical order data to simulate realistic purchasing patterns. I developed a mathematical model that incorporated distance matrices, time constraints, vehicle capacities, and loading dock efficiency. The system generated precise delivery schedules and routes while respecting operational constraints, including vehicle capacity limits and driver work hours.</p>
  
  <h4>Impact</h4>
  <p>This optimization system enables e-commerce businesses to plan deliveries more efficiently, reducing operations costs while improving customer satisfaction through faster deliveries. The research determined that the optimal resource configuration (3 vehicles and 1 loading dock) could complete all deliveries in a single day with minimal idle time and unused capacity, providing actionable insights for logistics planning.</p>
`,
techStack: [
  { name: "Python", level: 90 },
  { name: "Monte Carlo Simulation", level: 85 },
  { name: "Operations Research", level: 85 },
  { name: "Geospatial Analysis", level: 80 },
  { name: "SimpleAI Library", level: 75 },
  { name: "Data Visualization", level: 70 }
]
},
{
id: 8,
title: "Deep Learning for Fashion Image Classification",
date: "2023",
description: "Implemented and compared two neural network architectures (LeNet-5 and Siamese Neural Network) for classifying clothing items from the Fashion MNIST dataset, achieving up to 92% accuracy with optimized model parameters.",
tags: ["Deep Learning", "Neural Networks", "Computer Vision", "Image Classification", "Siamese Network"],
type: "Machine Learning",
imageUrl: "/project-icons/fashion-classification.png",
isNew: true,
detailedDescription: `
  <h4>Project Overview</h4>
  <p>This project explored the application of deep learning techniques for classifying fashion items from the Fashion MNIST dataset, which contains 70,000 grayscale images across 10 clothing categories. I implemented two distinct neural network architectures—LeNet-5 (a convolutional neural network) and a Siamese Neural Network—to compare their performance and characteristics on this task.</p>
  
  <h4>Key Achievements</h4>
  <ul>
    <li>Implemented a modified LeNet-5 convolutional neural network, achieving 91% classification accuracy</li>
    <li>Developed a Siamese Neural Network for similarity-based image comparison with 92% accuracy</li>
    <li>Conducted extensive hyperparameter tuning with over 75 experimental configurations to optimize performance</li>
    <li>Identified and addressed classification challenges between visually similar clothing categories</li>
    <li>Created visualization tools to interpret network predictions and similarity measurements</li>
  </ul>
  
  <h4>Technical Details</h4>
  <p>The LeNet-5 implementation featured two convolutional layers followed by max-pooling, dropout for regularization, and fully connected layers. For the Siamese Network, I developed a shared-weight architecture that learned to measure similarity between image pairs, enabling the model to find the closest matches for any given clothing item. Both models were trained using the Adam optimizer with carefully tuned learning rates and batch sizes to achieve optimal performance.</p>
  
  <h4>Impact</h4>
  <p>This project demonstrated how different neural network architectures can be applied to the same problem with different strengths. While LeNet-5 excelled at direct classification, the Siamese Network proved more powerful for similarity matching and was more computationally efficient, completing training in just one minute compared to LeNet-5's six minutes. The comparison provided valuable insights into model selection based on specific application requirements in image classification tasks.</p>
`,
techStack: [
  { name: "Python", level: 95 },
  { name: "TensorFlow/Keras", level: 90 },
  { name: "Convolutional Neural Networks", level: 85 },
  { name: "Siamese Networks", level: 85 },
  { name: "Data Visualization", level: 80 },
  { name: "Hyperparameter Tuning", level: 75 }
]
},
{
id: 9,
title: "Tourism Trip Optimization in Mexico City",
date: "2022",
description: "Developed an optimization algorithm using the Capacitated Vehicle Routing Problem (CVRP) methodology to create ideal 5-day tourist itineraries for Mexico City, maximizing attraction visits while minimizing travel time between landmark locations.",
tags: ["Operations Research", "Optimization", "CVRP", "Route Planning", "Tourism", "Mathematical Modeling"],
type: "Operations Research",
imageUrl: "/project-icons/mexico-tourism-optimization.png",
isNew: false,
detailedDescription: `
  <h4>Project Overview</h4>
  <p>This project addressed the challenge of creating optimized tourist itineraries for Mexico City, one of the world's most visited destinations. Using mathematical optimization techniques, specifically the Capacitated Vehicle Routing Problem (CVRP) methodology, I developed a system to plan the "perfect trip" that would allow tourists to visit key attractions while minimizing travel time during a 5-day visit.</p>
  
  <h4>Key Achievements</h4>
  <ul>
    <li>Modeled the tourist trip planning problem as a mathematical optimization challenge with time constraints</li>
    <li>Implemented binary and integer variables to track location visits and eliminate subtours</li>
    <li>Accounted for varying visit durations at 12 major attractions including historical sites, museums, and cultural landmarks</li>
    <li>Created a comprehensive travel time matrix between all attractions based on real transportation data</li>
    <li>Generated optimized daily routes that respect the 12-hour daily time constraint while maximizing attraction experiences</li>
    <li>Visualized the solution using directed graph representation showing the optimized path for each day</li>
  </ul>
  
  <h4>Technical Details</h4>
  <p>The mathematical model incorporated binary decision variables to track movements between locations, visit scheduling, and route planning. I formulated constraints to ensure all attractions were visited exactly once, with appropriate time allocations for each site. The optimization objective minimized total travel time while respecting the daily time budget of 720 minutes (12 hours). The solution was implemented using deterministic optimization techniques from the MA2001B course methodology.</p>
  
  <h4>Impact</h4>
  <p>The resulting 5-day itinerary successfully included all 12 major Mexico City attractions with an efficient routing plan. Each day's schedule was balanced to include complementary attractions while minimizing travel time, allowing tourists to make the most of their visit. The project demonstrated how operations research techniques can be applied to real-world tourism planning problems, providing valuable tools for travelers and potentially for tourism agencies to offer optimized experiences.</p>
`,
techStack: [
  { name: "Mathematical Modeling", level: 90 },
  { name: "Operations Research", level: 85 },
  { name: "CVRP Algorithm", level: 80 },
  { name: "Optimization Theory", level: 85 },
  { name: "Graph Theory", level: 75 },
  { name: "Data Visualization", level: 70 }
]
},
{
id: 10,
title: "Security Audit and Mitigation Plan for Educational Institution",
date: "2023",
description: "Conducted a comprehensive cybersecurity audit for Instituto Bilingüe la Silla, identifying critical vulnerabilities through Nessus scanning and developing a cost-effective mitigation plan that addressed SSL/TLS vulnerabilities, outdated software systems, and authentication weaknesses.",
tags: ["Cybersecurity", "Network Security", "Vulnerability Assessment", "Risk Management", "CVSS Analysis", "SSL/TLS"],
type: "Cybersecurity",
imageUrl: "/project-icons/security-audit.png",
isNew: false,
detailedDescription: `
  <h4>Project Overview</h4>
  <p>This cybersecurity project involved performing a detailed security audit for Instituto Bilingüe la Silla, an educational institution with approximately 1,200 students across two campuses. Working with a team of six cybersecurity analysts, we conducted a thorough vulnerability assessment and created a comprehensive mitigation plan tailored to the organization's limited budget while ensuring the protection of sensitive student and financial data.</p>
  
  <h4>Key Achievements</h4>
  <ul>
    <li>Identified 77 vulnerabilities using Nessus scanning, with 13% classified as critical level threats to the network infrastructure</li>
    <li>Analyzed vulnerabilities using the Common Vulnerability Scoring System (CVSS) to prioritize remediation efforts</li>
    <li>Discovered critical SSL/TLS protocol weaknesses that put sensitive information at risk of man-in-the-middle attacks</li>
    <li>Detected outdated software systems, weak hashing algorithms, and authentication vulnerabilities across the institution's network</li>
    <li>Developed a comprehensive mitigation plan that fit within the institution's $15,000 budget constraint, utilizing only 76% of available funds</li>
    <li>Created detailed technical documentation explaining each vulnerability and its potential impact if left unaddressed</li>
  </ul>
  
  <h4>Technical Details</h4>
  <p>The security audit revealed multiple critical vulnerabilities including outdated SSL v2/v3 protocols, weak certificate hashing algorithms, SMB NULL session authentication issues, and IP forwarding weaknesses. For each vulnerability, we provided detailed CVSS breakdowns to demonstrate impact on confidentiality, integrity, and availability of data. Our mitigation strategy combined technical solutions with employee training to create a holistic security approach. The final plan included upgrading to TLS 1.2+, implementing a password management system, disabling unnecessary IP forwarding, deploying antivirus solutions, and securing data transfers with encrypted USB drives.</p>
  
  <h4>Impact</h4>
  <p>By implementing our recommendations, Instituto Bilingüe la Silla significantly enhanced its cybersecurity posture while staying within budget constraints. The project helped protect sensitive student data including personal information, financial records, and academic history. Our work also raised security awareness among staff members through educational sessions. The comprehensive documentation provided a roadmap for ongoing security maintenance, helping the institution avoid potential financial losses of over $100,000, prevent reputational damage, and comply with data protection regulations in Mexico.</p>
`,
techStack: [
  { name: "Nessus Vulnerability Scanner", level: 90 },
  { name: "CVSS Analysis", level: 85 },
  { name: "Network Security", level: 85 },
  { name: "SSL/TLS Security", level: 80 },
  { name: "Risk Assessment", level: 85 },
  { name: "Security Auditing", level: 80 }
]
},
{
id: 11,
title: "Mars Rover Intelligent Exploration System",
date: "2023",
description: "Designed and implemented intelligent navigation algorithms for Martian terrain exploration, comparing search methods including A*, Greedy, BFS, and simulated annealing to optimize path planning and crater descent for robotic explorers like the Perseverance Rover.",
tags: ["Artificial Intelligence", "Path Planning", "Computer Vision", "Robotics", "Simulated Annealing", "A* Algorithm", "Mars Exploration"],
type: "Artificial Intelligence",
imageUrl: "/project-icons/mars-rover-exploration.png",
isNew: false,
detailedDescription: `
  <h4>Project Overview</h4>
  <p>This project focused on developing intelligent navigation systems for robotic exploration on Mars, with particular emphasis on optimizing routes through challenging terrain and enabling efficient crater descent. We implemented and compared various search algorithms to identify optimal approaches for autonomous exploration in environments where human intervention is severely limited by communication delays.</p>
  
  <h4>Key Achievements</h4>
  <ul>
    <li>Characterized the complex operating environment of Mars exploration rovers, including analysis of the 19 specialized sensors and instruments used by NASA's Perseverance Rover</li>
    <li>Implemented and compared four search algorithms (A*, Greedy Best-First Search, Breadth-First Search, and Iterative Deepening) for route planning across Martian terrain</li>
    <li>Developed simulated annealing and greedy search algorithms for crater descent, achieving depths of 78-90 meters versus baseline performance of 100 meters</li>
    <li>Created 3D visualizations of exploration routes to evaluate algorithm performance across different terrains and starting positions</li>
    <li>Quantitatively analyzed performance metrics including path length, execution time, and final depth achieved for each algorithm</li>
    <li>Identified simulated annealing as the superior approach for crater exploration due to its ability to escape local minima</li>
  </ul>
  
  <h4>Technical Details</h4>
  <p>We modeled the Mars environment as a discretized grid representing topographical data, with a 1:10 scale of the actual terrain. For route planning, A* search with Manhattan distance heuristic proved most efficient, completing paths in 0.1 seconds while maintaining optimal route selection. For crater descent, we implemented a simulated annealing algorithm with initial temperature of 100 and cooling factor of 0.999, which required approximately 16,000 iterations but achieved significantly better results than greedy approaches that became trapped in local minima. Performance was heavily dependent on initial rover positioning, confirming the importance of careful mission planning.</p>
  
  <h4>Impact</h4>
  <p>This project demonstrates how intelligent search algorithms can dramatically improve exploration capabilities on Mars, allowing rovers to navigate efficiently and reach previously inaccessible areas. The findings support mission planning for future Mars explorations by identifying optimal algorithms for different terrains and objectives. The comparison between greedy search and simulated annealing showed that incorporating randomness in decision-making processes can help overcome the limitations of purely deterministic approaches when exploring complex, unknown environments.</p>
`,
techStack: [
  { name: "Python", level: 90 },
  { name: "Search Algorithms", level: 95 },
  { name: "NumPy", level: 85 },
  { name: "Matplotlib", level: 80 },
  { name: "3D Visualization", level: 75 },
  { name: "Simulated Annealing", level: 85 },
  { name: "Path Planning", level: 90 }
]
},
{
id: 12,
title: "Music Recognition System Using Fast Fourier Transform",
date: "2022",
description: "Implemented a Shazam-like music recognition application in MATLAB that identifies songs by genre through Fast Fourier Transform analysis, achieving accurate classification across different music genres including jazz, classical, regional, and power pop.",
tags: ["Signal Processing", "Fast Fourier Transform", "MATLAB", "Audio Analysis", "Pattern Matching", "Music Recognition"],
type: "Signal Processing",
imageUrl: "/project-icons/music-recognition.png",
isNew: false,
detailedDescription: `
  <h4>Project Overview</h4>
  <p>This project created a music recognition system similar to Shazam by implementing Fast Fourier Transform (FFT) algorithms to analyze and match audio fingerprints. The system captures short audio samples and compares their frequency characteristics with a database of known songs to identify the most likely match, particularly focusing on genre classification. The implementation demonstrates practical applications of mathematical concepts in signal processing and digital audio analysis.</p>
  
  <h4>Key Achievements</h4>
  <ul>
    <li>Developed a complete audio processing pipeline in MATLAB that records, normalizes, and extracts frequency features from music samples</li>
    <li>Implemented the Fast Fourier Transform algorithm to convert time-domain audio signals into frequency-domain representations</li>
    <li>Created a matching algorithm that calculates error coefficients between the recorded sample and database entries to identify the closest match</li>
    <li>Built a database of reference tracks spanning multiple genres (Jazz, Regional, Classical, Opera, Heavy Metal, and Power Pop)</li>
    <li>Successfully tested the system across different music genres with high accuracy, correctly identifying songs from 15-second clips</li>
    <li>Visualized audio fingerprints through spectral plots to demonstrate the distinctive patterns of different music genres</li>
  </ul>
  
  <h4>Technical Details</h4>
  <p>The system operates by recording 15-second audio clips at 44.1kHz in mono format. The audio is processed through FFT, and the resulting frequency data is normalized to create consistent fingerprints regardless of volume or recording conditions. For each sample, we calculate the absolute value of the FFT, multiply by its conjugate, and normalize the first 100 values. The system then computes error coefficients between the sample and each reference track, with the minimum coefficient indicating the most likely match. The implementation includes specialized filtering to enhance recognition accuracy and visualization tools to display spectral comparisons between samples and database entries.</p>
  
  <h4>Impact</h4>
  <p>This project demonstrates the power of mathematical concepts like Fourier transforms in solving real-world problems. The approach we implemented mirrors the core technology behind popular applications like Shazam that have transformed how people interact with music. Through this work, we gained practical experience in signal processing, audio analysis, and pattern matching algorithms while creating a functional system that successfully identifies music across different genres. The project highlights how complex mathematical tools can be applied to create intuitive and user-friendly technologies.</p>
`,
techStack: [
  { name: "MATLAB", level: 90 },
  { name: "Signal Processing", level: 85 },
  { name: "Fast Fourier Transform", level: 90 },
  { name: "Audio Analysis", level: 80 },
  { name: "Mathematical Modeling", level: 85 },
  { name: "Data Visualization", level: 75 }
]
},
{
id: 13,
title: "Analysis of the COVID-19 Pandemic through Data Analysis",
date: "2020-2022",
description: "Statistical analysis of COVID-19 data focusing on hospitalization duration differences between pregnant women and other demographic groups, leveraging a stratified sample of 120,000 observations from Mexico's national COVID-19 database.",
tags: ["Statistical Analysis", "COVID-19", "Data Modeling", "Hypothesis Testing", "Healthcare Analytics", "R Programming"],
type: "Data Science",
imageUrl: "/project-icons/covid-analysis.png",
isNew: false,
detailedDescription: `
 <h4>Project Overview</h4>
 <p>This research project analyzed COVID-19 data to identify differences in hospitalization duration before death between pregnant women, non-pregnant women, and men. Using a stratified sample of 120,000 observations from Mexico's Ministry of Health database, we applied statistical methods to test whether pregnancy status affected hospitalization outcomes. The research addressed specific concerns about COVID-19's impact on pregnant women who were considered a vulnerable population during the pandemic.</p>
 
 <h4>Key Achievements</h4>
 <ul>
   <li>Analyzed a stratified sample from a database of 6.98 million COVID-19 observations in Mexico</li>
   <li>Performed independence testing between pneumonia and pregnancy using Chi-squared analysis</li>
   <li>Conducted multiple hypothesis tests comparing hospitalization duration across different demographic groups</li>
   <li>Applied z-tests for comparing means between large sample groups with 95% confidence level</li>
   <li>Implemented ANOVA testing to evaluate significant differences between means across multiple factors</li>
   <li>Visualized data distributions through histograms, bar charts, and pie charts to identify demographic patterns</li>
 </ul>
 
 <h4>Technical Details</h4>
 <p>The analysis followed a systematic approach by first cleaning and filtering the data, then extracting relevant variables including gender, age, hospitalization time, pregnancy status, and pneumonia cases. Statistical tests included Chi-squared independence tests, z-tests for mean comparison, and two-factor ANOVA modeling. The data processing calculated hospitalization duration by finding the difference between admission and death dates. Key findings revealed that pregnant women had significantly shorter hospitalization periods before death (mean: 16.6 days) compared to non-pregnant women (mean: 219.7 days), while no significant difference was found between men and non-pregnant women.</p>
 
 <h4>Impact</h4>
 <p>This research provided critical insights into how COVID-19 affected different demographic groups, particularly highlighting the vulnerability of pregnant women. The findings suggested that pregnancy status was a significant factor in COVID-19 mortality timelines, supporting the prioritization of pregnant women for preventative measures and specialized treatment protocols. By applying robust statistical methodologies to a large dataset, this project demonstrated the value of data-driven approaches in understanding public health emergencies and informing healthcare resource allocation during pandemic situations.</p>
`,
techStack: [
 { name: "R Programming", level: 85 },
 { name: "Statistical Analysis", level: 90 },
 { name: "Data Visualization", level: 80 },
 { name: "Hypothesis Testing", level: 85 },
 { name: "ANOVA Modeling", level: 80 },
 { name: "Data Cleaning", level: 75 }
]
}
  ];

  const filterOptions = [
      { value: "all", label: "All Projects" },
      { value: "AI-ML", label: "AI & Data Science" },
      { value: "Engineering", label: "Engineering & Optimization" },
      { value: "Security", label: "Security & Protection" },
      { value: "Creative", label: "Creative & Analysis" }
    ];

    let activeFilter = "all";
    let filteredProjects = [...projects];
    let selectedProject = null;
    
    // Pagination variables
    const projectsPerPage = 3;
    let currentPage = 1;
    let displayedProjects = [];
    let totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
    // Updated filter function to handle the new consolidated categories
    function filterProjects(filter) {
      activeFilter = filter;
      if (filter === "all") {
        filteredProjects = [...projects];
      } else if (filter === "AI-ML") {
        // Show AI, Machine Learning, and Data Science projects
        filteredProjects = projects.filter(project => 
          project.type === "AI" || 
          project.type === "Machine Learning" || 
          project.type === "Data Science" ||
          project.type === "Data Visualization" ||
          project.type === "Artificial Intelligence"
        );
      } else if (filter === "Engineering") {
        // Show Engineering and Operations Research projects
        filteredProjects = projects.filter(project => 
          project.type === "Engineering" || 
          project.type === "Operations Research" ||
          project.type === "Automation"
        );
      } else if (filter === "Security") {
        // Show Cybersecurity and related protection systems
        filteredProjects = projects.filter(project => 
          project.type === "Cybersecurity" || 
          project.type === "Security"
        );
      } else if (filter === "Creative") {
        // Show Signal Processing and other creative/analytical projects
        filteredProjects = projects.filter(project => 
          project.type === "Signal Processing" ||
          project.tags.some(tag => tag.includes("Analysis")) ||
          project.tags.some(tag => tag.includes("Visualization"))
        );
      } else {
        filteredProjects = projects.filter(project => project.type === filter);
      }
      
      // Reset to first page when filter changes
      currentPage = 1;
      updateDisplayedProjects();
    }
    
    // Function to update the displayed projects based on pagination
    function updateDisplayedProjects() {
      totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
      const startIndex = (currentPage - 1) * projectsPerPage;
      const endIndex = startIndex + projectsPerPage;
      displayedProjects = filteredProjects.slice(startIndex, endIndex);
    }
    
    // Functions for pagination navigation
    function nextPage() {
      if (currentPage < totalPages) {
        currentPage++;
        updateDisplayedProjects();
      }
    }
    
    function prevPage() {
      if (currentPage > 1) {
        currentPage--;
        updateDisplayedProjects();
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
  
    // Initialize pagination on mount and when filtered projects change
    $: {
      filteredProjects;
      updateDisplayedProjects();
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
  
      // Initialize pagination
      updateDisplayedProjects();
  
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
  
    <!-- Projects grid with only 6 projects visible -->
    <div class="projects-grid">
      {#each displayedProjects as project}
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
    
    <!-- Pagination controls -->
    <div class="pagination-controls">
      <button class="pagination-arrow" on:click={prevPage} disabled={currentPage === 1}>
        <span class="arrow">←</span>
      </button>
      <span class="pagination-info">{currentPage} of {totalPages}</span>
      <button class="pagination-arrow" on:click={nextPage} disabled={currentPage === totalPages}>
        <span class="arrow">→</span>
      </button>
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
  
  /* Pagination controls styles */
  .pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
  }
  
  .pagination-arrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #0D1B2A;
    border: 2px solid #C05746;
    color: #C05746;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .pagination-arrow:hover:not(:disabled) {
    background: #C05746;
    color: white;
  }
  
  .pagination-arrow:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .pagination-info {
    font-size: 1rem;
    color: #EAEAEA;
  }
  
  .arrow {
    font-size: 1.2rem;
    font-weight: bold;
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