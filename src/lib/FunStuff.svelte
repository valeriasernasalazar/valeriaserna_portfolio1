<script>
    import { onMount } from "svelte";
    import { base } from '$app/paths';
    
    // Random data science facts with emoji pairs
    const facts = [
      { 
        text: "The term 'data scientist' was coined in 2008.", 
        emoji: "🔍",
        isTrue: true
      },
      { 
        text: "90% of the world's data was created in the last two years.", 
        emoji: "📊",
        isTrue: true
      },
      { 
        text: "Python is the most used programming language for data science.", 
        emoji: "🐍",
        isTrue: true
      },
      { 
        text: "Netflix saves $1 billion annually with machine learning.", 
        emoji: "🎬",
        isTrue: true
      },
      { 
        text: "The first-ever database was created in 1960.", 
        emoji: "💾",
        isTrue: true
      },
      { 
        text: "Data science is 80% cleaning data and 20% complaining about cleaning data.", 
        emoji: "🧹",
        isTrue: true
      },
      { 
        text: "There are over 2.5 quintillion bytes of data created each day.", 
        emoji: "🌐",
        isTrue: true
      },
      { 
        text: "The term 'Big Data' was first used in 1997.", 
        emoji: "📈",
        isTrue: true
      },
      { 
        text: "Neural networks were invented in the 2010s.", 
        emoji: "🧠",
        isTrue: false
      },
      { 
        text: "Machine learning requires at least 1 million data points to be effective.", 
        emoji: "🔢",
        isTrue: false
      },
      { 
        text: "The R programming language was developed by Microsoft.", 
        emoji: "📉",
        isTrue: false
      },
      { 
        text: "The average data scientist spends 45% of their time on data preparation.", 
        emoji: "⏱️",
        isTrue: true
      },
      { 
        text: "The most powerful supercomputers can perform calculations that would take humans over 6 billion years.", 
        emoji: "⚡",
        isTrue: true
      },
      { 
        text: "Machine learning algorithms can now write convincing poetry better than most humans.", 
        emoji: "📝",
        isTrue: false
      }
    ];
    
    // Data Science Memes
    const memes = [
      {
        imageUrl: `${base}/memes/1.png`,
        alt: "Excited data scientist when model runs",
      },
      {
        imageUrl: `${base}/memes/2.png`,
        alt: "Reality of data cleaning process",
      },
      {
        imageUrl: `${base}/memes/3.png`,
        alt: "Correlation vs causation meme",
      },
      {
        imageUrl: `${base}/memes/4.png`,
        alt: "Overfitting model meme",
      },
      {
        imageUrl: `${base}/memes/5.png`,
        alt: "SQL WHERE clause meme",
      },
      {
        imageUrl: `${base}/memes/6.png`,
        alt: "Importance of Statistics",
      },
      {
        imageUrl: `${base}/memes/7.png`,
        alt: "Normal vs Paranormal Distribution",
      }
    ];
    
    // About Me Quiz Questions
    const aboutMeQuestions = [
      {
        question: "What's my favorite programming language?",
        options: ["Python", "R", "JavaScript", "SQL"],
        correctAnswer: "Python",
        explanation: "I love Python's versatility and readability, plus all those amazing data science libraries!"
      },
      {
        question: "Which visualization tool do I prefer?",
        options: ["Tableau", "Power BI", "D3.js", "Matplotlib"],
        correctAnswer: "Tableau",
        explanation: "Tableau's intuitive interface and powerful features make it my go-to for creating impactful visualizations."
      },
      {
        question: "Where did I learn data science?",
        options: ["Self-taught", "University", "Bootcamp", "On the job"],
        correctAnswer: "University",
        explanation: "I studied at Tec de Monterrey where I developed my core data science skills."
      },
      {
        question: "What do I enjoy most about data science?",
        options: ["Building models", "Data visualization", "Feature engineering", "Uncovering insights"],
        correctAnswer: "Uncovering insights",
        explanation: "Nothing beats that 'aha!' moment when you discover a hidden pattern or insight in the data."
      }
    ];
    
    // Initialize with a random fact
    let currentFact = facts[Math.floor(Math.random() * facts.length)];
    let userGuess = null;
    let answered = false;
    
    function generateRandomFact() {
      // Ensure we don't get the same fact twice in a row
      let newFact;
      do {
        newFact = facts[Math.floor(Math.random() * facts.length)];
      } while (newFact.text === currentFact.text);
      
      currentFact = newFact;
      userGuess = null;
      answered = false;
    }
    
    function makeGuess(guess) {
      userGuess = guess;
      answered = true;
    }
    
    // Meme display state
    const memesPerPage = 4;
    let displayedMemes = [];
    let currentPage = 0;
    let totalPages = Math.ceil(memes.length / memesPerPage);
    
    // About Me Quiz State
    let aboutMeStarted = false;
    let aboutMeCompleted = false;
    let currentAboutMeIndex = 0;
    let aboutMeAnswers = [];
    let aboutMeScore = 0;
    
    function startAboutMeQuiz() {
      aboutMeStarted = true;
      aboutMeCompleted = false;
      currentAboutMeIndex = 0;
      aboutMeAnswers = [];
      aboutMeScore = 0;
      
      // Shuffle the questions
      shuffleArray(aboutMeQuestions);
    }
    
    function answerAboutMeQuestion(selectedOption) {
      const currentQ = aboutMeQuestions[currentAboutMeIndex];
      const isCorrect = selectedOption === currentQ.correctAnswer;
      
      aboutMeAnswers.push({
        question: currentQ.question,
        selectedOption: selectedOption,
        correctOption: currentQ.correctAnswer,
        isCorrect: isCorrect,
        explanation: currentQ.explanation
      });
      
      if (isCorrect) {
        aboutMeScore++;
      }
      
      if (currentAboutMeIndex < aboutMeQuestions.length - 1) {
        currentAboutMeIndex++;
      } else {
        aboutMeCompleted = true;
      }
    }
    
    function resetAboutMeQuiz() {
      startAboutMeQuiz();
    }
    
    // Meme navigation functions
    function updateDisplayedMemes() {
      const startIndex = currentPage * memesPerPage;
      displayedMemes = memes.slice(startIndex, startIndex + memesPerPage);
    }
    
    function nextPage() {
      currentPage = (currentPage + 1) % totalPages;
      updateDisplayedMemes();
    }
    
    function prevPage() {
      currentPage = (currentPage - 1 + totalPages) % totalPages;
      updateDisplayedMemes();
    }
    
    // Helper function to shuffle array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    
    // Handle image errors
    function handleImageError(event) {
      event.target.src = `${base}/memes/placeholder.jpg`;
    }
    
    // Initialize on component mount
    onMount(() => {
      updateDisplayedMemes();
    });
  </script>
  
  <div class="fun-section-container">
    <div class="fun-intro">
      <p class="p1">Welcome to the fun corner — data cleaning not included!</p>
    </div>
    
    <!-- Interactive sections - side by side -->
    <div class="interactive-sections">
      <div class="interactive-column">
        <!-- About Me Quiz -->
        <h3 class="fun-title">How Well Do You Know Me?</h3>
        
        <div class="about-me-quiz">
          {#if !aboutMeStarted}
            <div class="about-me-intro">
              <p>Test your knowledge about me and my data science journey! Can you get a perfect score?</p>
              <button class="game-btn start-btn" on:click={startAboutMeQuiz}>Start Quiz</button>
            </div>
          {:else if !aboutMeCompleted}
            <div class="about-me-question">
              <h3>Question {currentAboutMeIndex + 1}/{aboutMeQuestions.length}</h3>
              <p>{aboutMeQuestions[currentAboutMeIndex].question}</p>
              
              <div class="about-me-options">
                {#each aboutMeQuestions[currentAboutMeIndex].options as option}
                  <button class="about-me-option" on:click={() => answerAboutMeQuestion(option)}>
                    {option}
                  </button>
                {/each}
              </div>
            </div>
          {:else}
            <div class="about-me-result">
              <h3>Your Score</h3>
              <div class="about-me-score">
                {aboutMeScore}/{aboutMeQuestions.length}
              </div>
              
              <div class="about-me-message">
                {#if aboutMeScore === aboutMeQuestions.length}
                  <p>Perfect score! You know me so well!</p>
                {:else if aboutMeScore >= aboutMeQuestions.length * 0.7}
                  <p>Great job! You know quite a bit about me!</p>
                {:else if aboutMeScore >= aboutMeQuestions.length * 0.4}
                  <p>Not bad! We should chat more so you can learn more about me.</p>
                {:else}
                  <p>We definitely need to connect more. Let's grab a coffee!</p>
                {/if}
              </div>
              
              <h3>The Details</h3>
              <div class="about-me-answers">
                {#each aboutMeAnswers as answer}
                  <div class="answer-item">
                    <div class="answer-question">{answer.question}</div>
                    <div class="answer-result">
                      <div class="answer-selected">Your answer: {answer.selectedOption}</div>
                      {#if !answer.isCorrect}
                        <div class="answer-correct">Correct: {answer.correctOption}</div>
                      {/if}
                    </div>
                    <div class="answer-explanation">{answer.explanation}</div>
                  </div>
                {/each}
              </div>
              
              <div class="button-container">
                <button class="game-btn reset-btn" on:click={resetAboutMeQuiz}>
                  Take Again
                </button>
              </div>
            </div>
          {/if}
        </div>
      </div>
      
      <div class="interactive-column">
        <!-- True/False Data Facts Quiz -->
        <h3 class="fun-title">Data Science True or False?</h3>
        
        <div class="fact-quiz">
          <span class="fact-emoji">{currentFact.emoji}</span>
          <p class="fact-question">{currentFact.text}</p>
          
          {#if !answered}
            <div class="guess-buttons">
              <button class="true-btn" on:click={() => makeGuess(true)}>True</button>
              <button class="false-btn" on:click={() => makeGuess(false)}>False</button>
            </div>
          {:else}
            <div class="result-message {userGuess === currentFact.isTrue ? 'correct' : 'incorrect'}">
              {userGuess === currentFact.isTrue ? 'Correct! ✓' : 'Not quite! ✗'}
              <p>{currentFact.isTrue ? 'This statement is true.' : 'This statement is false.'}</p>
            </div>
            
            <div class="button-container">
              <button class="fun-btn" on:click={generateRandomFact}>Next Fact</button>
            </div>
          {/if}
        </div>
      </div>
    </div>
    
    <div class="section-divider"></div>
    
    <!-- Data Science Memes -->
    <h3 class="fun-title">Data Science Meme Corner</h3>
    <p style="text-align: center; margin-bottom: 2rem;">Because sometimes you just need to laugh at the data science struggle.</p>
    
    <div class="meme-section">
      <div class="meme-grid">
        {#each displayedMemes as meme, index}
          <div class="meme-card">
            <img 
              class="meme-image" 
              src={meme.imageUrl} 
              alt={meme.alt} 
              on:error={handleImageError}
            />
          </div>
        {/each}
      </div>
      
      <div class="pagination-controls">
        <button class="nav-btn prev-btn" on:click={prevPage}>
          <span>←</span> Previous
        </button>
        <span class="page-indicator">Page {currentPage + 1} of {totalPages}</span>
        <button class="nav-btn next-btn" on:click={nextPage}>
          Next <span>→</span>
        </button>
      </div>
    </div>
  </div>
  
  <style>
    /* Fun section container */
    .fun-section-container {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 1rem;
    }
    
    .fun-intro {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .fun-intro p {
      font-style: italic;
      color: #ADB6C4;
      font-size: 1.1rem;
    }
    
    /* Interactive sections side by side */
    .interactive-sections {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .interactive-column {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    /* Responsive layout for smaller screens */
    @media (max-width: 768px) {
      .interactive-sections {
        flex-direction: column;
      }
    }
    
    .fun-title {
      color: #EAEAEA;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      text-align: center;
      position: relative;
    }

    .p1{
        margin-top:-3vh;
    }
    
    .fun-title::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background: #C05746;
      border-radius: 3px;
    }
    
    /* About Me Quiz */
    .about-me-quiz {
      background: rgba(13, 27, 42, 0.7);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    
    .about-me-intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
    
    .about-me-intro p {
      margin-bottom: 2rem;
    }
    
    .about-me-question {
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .about-me-question h3 {
      color: #C05746;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
    
    .about-me-options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 2rem 0;
    }
    
    @media (max-width: 540px) {
      .about-me-options {
        grid-template-columns: 1fr;
      }
    }
    
    .about-me-option {
      padding: 1rem;
      background: rgba(13, 27, 42, 0.5);
      border: 1px solid rgba(192, 87, 70, 0.3);
      border-radius: 8px;
      color: #EAEAEA;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .about-me-option:hover {
      background: rgba(192, 87, 70, 0.2);
      transform: translateY(-3px);
    }
    
    .about-me-result {
      margin-top: 2rem;
      overflow-y: auto;
      max-height: 600px;
    }
    
    .about-me-score {
      font-size: 2rem;
      font-weight: bold;
      color: #C05746;
      margin-bottom: 1rem;
    }
    
    .about-me-message {
      margin-bottom: 2rem;
    }
    
    .about-me-answers {
      text-align: left;
      margin-top: 2rem;
    }
    
    .answer-item {
      background: rgba(13, 27, 42, 0.5);
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    
    .answer-question {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    
    .answer-result {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .answer-selected {
      color: #F44336;
    }
    
    .answer-correct {
      color: #4CAF50;
    }
    
    .answer-explanation {
      font-style: italic;
      color: #ADB6C4;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
    
    /* True/False Quiz */
    .fact-quiz {
      background: rgba(13, 27, 42, 0.7);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      height: 100%;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .fact-quiz:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }
    
    .fact-quiz::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background: #C05746;
    }
    
    .fact-question {
      font-size: 1.2rem;
      line-height: 1.6;
      margin: 0;
      position: relative;
      z-index: 1;
    }
    
    .fact-emoji {
      font-size: 3rem;
      margin-bottom: 1rem;
      display: block;
      animation: pulse 2s infinite;
    }
    
    .guess-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
    }
    
    .true-btn, .false-btn {
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      min-width: 120px;
    }
    
    .true-btn {
      background: rgba(76, 175, 80, 0.2);
      color: #4CAF50;
      border: 1px solid #4CAF50;
    }
    
    .false-btn {
      background: rgba(244, 67, 54, 0.2);
      color: #F44336;
      border: 1px solid #F44336;
    }
    
    .true-btn:hover, .false-btn:hover {
      transform: translateY(-3px);
    }
    
    .true-btn:hover {
      background: rgba(76, 175, 80, 0.4);
    }
    
    .false-btn:hover {
      background: rgba(244, 67, 54, 0.4);
    }
    
    .result-message {
      margin-top: 2rem;
      padding: 1rem;
      border-radius: 8px;
      font-weight: bold;
      animation: fadeIn 0.5s ease;
    }
    
    .result-message.correct {
      background: rgba(76, 175, 80, 0.1);
      color: #4CAF50;
      border: 1px solid rgba(76, 175, 80, 0.3);
    }
    
    .result-message.incorrect {
      background: rgba(244, 67, 54, 0.1);
      color: #F44336;
      border: 1px solid rgba(244, 67, 54, 0.3);
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    /* Meme section styling */
    .meme-section {
      width: 100%;
      margin: 2rem auto;
    }
    
    /* Meme grid layout */
    .meme-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    /* For larger screens, show 4 in a row */
    @media (min-width: 992px) {
      .meme-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    /* For medium screens, show 3 in a row */
    @media (min-width: 768px) and (max-width: 991px) {
      .meme-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    /* For small screens, show 2 in a row */
    @media (min-width: 576px) and (max-width: 767px) {
      .meme-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    /* For very small screens, show 1 in a row */
    @media (max-width: 575px) {
      .meme-grid {
        grid-template-columns: 1fr;
      }
    }
    
    /* Meme card styling */
    .meme-card {
      background: #0D1B2A;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      padding: 1rem;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      text-align: center;
      display: flex;
      flex-direction: column;
      aspect-ratio: 1 / 1;
    }
    
    .meme-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }
    
    .meme-card::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 5px;
      height: 100%;
      background: #C05746;
    }
    
    .meme-image {
      max-width: 100%;
      max-height: 100%;
      border-radius: 8px;
      object-fit: contain;
      flex: 1;
    }
    
    /* Pagination controls */
    .pagination-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      padding: 0.5rem;
    }
    
    .nav-btn {
      padding: 0.6rem 1.2rem;
      background: rgba(192, 87, 70, 0.1);
      color: #C05746;
      border: 1px solid #C05746;
      border-radius: 25px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    
    .nav-btn:hover {
      background: rgba(192, 87, 70, 0.2);
      transform: translateY(-2px);
    }
    
    .page-indicator {
      color: #ADB6C4;
      font-size: 0.9rem;
    }
    
    /* Buttons */
    .button-container {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 1.5rem 0;
      flex-wrap: wrap;
    }
    
    .game-btn {
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
    }
    
    .start-btn {
      background: #C05746;
      color: white;
    }
    
    .reset-btn {
      background: #0D1B2A;
      color: #EAEAEA;
      border: 1px solid rgba(192, 87, 70, 0.5);
    }
    
    .game-btn:hover {
      transform: translateY(-3px);
    }
    
    .start-btn:hover {
      background: #AD6A6C;
    }
    
    .reset-btn:hover {
      background: rgba(13, 27, 42, 0.8);
    }
    
    /* Fun button */
    .fun-btn {
      padding: 0.75rem 1.5rem;
      background: #C05746;
      color: white;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      margin: 1rem;
    }
    
    .fun-btn::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: all 0.6s ease;
    }
    
    .fun-btn:hover::before {
      left: 100%;
    }
    
    .fun-btn:hover {
      transform: scale(1.05);
      background: #AD6A6C;
    }
    
    /* Section divider */
    .section-divider {
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(192, 87, 70, 0.3), transparent);
      margin: 3rem auto;
      width: 80%;
    }
    
    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    /* Media queries for responsiveness */
    @media (max-width: 768px) {
      .fact-quiz,
      .about-me-quiz {
        padding: 1.5rem;
      }
      
      .button-container,
      .guess-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .game-btn,
      .true-btn,
      .false-btn {
        width: 100%;
        max-width: 250px;
        margin-bottom: 0.5rem;
      }
    }
  </style>