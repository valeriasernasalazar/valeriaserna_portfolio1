<script>
    import { base } from '$app/paths';

    // ── Data Science Facts (True or False) ────────────────────
    const facts = [
      { text: "The term 'data scientist' was coined in 2008.", isTrue: true },
      { text: "90% of the world's data was created in the last two years.", isTrue: true },
      { text: "Python is the most used programming language for data science.", isTrue: true },
      { text: "Netflix saves $1 billion annually with machine learning.", isTrue: true },
      { text: "The first-ever database was created in 1960.", isTrue: true },
      { text: "Data science is 80% cleaning data and 20% complaining about cleaning data.", isTrue: true },
      { text: "There are over 2.5 quintillion bytes of data created each day.", isTrue: true },
      { text: "The term 'Big Data' was first used in 1997.", isTrue: true },
      { text: "Neural networks were invented in the 2010s.", isTrue: false },
      { text: "Machine learning requires at least 1 million data points to be effective.", isTrue: false },
      { text: "The R programming language was developed by Microsoft.", isTrue: false },
      { text: "The average data scientist spends 45% of their time on data preparation.", isTrue: true },
      { text: "The most powerful supercomputers can perform calculations that would take humans over 6 billion years.", isTrue: true },
      { text: "Machine learning algorithms can now write convincing poetry better than most humans.", isTrue: false }
    ];

    // ── Data Science Memes ────────────────────────────────────
    const memes = [
      { imageUrl: `${base}/memes/1.png`, alt: "Excited data scientist when model runs" },
      { imageUrl: `${base}/memes/2.png`, alt: "Reality of data cleaning process" },
      { imageUrl: `${base}/memes/3.png`, alt: "Correlation vs causation meme" },
      { imageUrl: `${base}/memes/4.png`, alt: "Overfitting model meme" },
      { imageUrl: `${base}/memes/5.png`, alt: "SQL WHERE clause meme" },
      { imageUrl: `${base}/memes/6.png`, alt: "Importance of Statistics" },
      { imageUrl: `${base}/memes/7.png`, alt: "Normal vs Paranormal Distribution" }
    ];

    // ── About Me Quiz Questions ───────────────────────────────
    const aboutMeQuestions = [
      {
        question: "What's my favorite programming language?",
        options: ["Python", "R", "JavaScript", "SQL"],
        correctAnswer: "Python",
        explanation: "Python's versatility, readability, and those amazing data science libraries make it my go-to."
      },
      {
        question: "Which visualization tool do I prefer?",
        options: ["Tableau", "Power BI", "D3.js", "Matplotlib"],
        correctAnswer: "Tableau",
        explanation: "Tableau's intuitive interface and powerful features make it my top choice for impactful visualizations."
      },
      {
        question: "Where did I learn data science?",
        options: ["Self-taught", "University", "Bootcamp", "On the job"],
        correctAnswer: "University",
        explanation: "I studied at Tec de Monterrey, where I built my core data science foundation."
      },
      {
        question: "What do I enjoy most about data science?",
        options: ["Building models", "Data visualization", "Feature engineering", "Uncovering insights"],
        correctAnswer: "Uncovering insights",
        explanation: "Nothing beats that 'aha!' moment when a hidden pattern emerges from the data."
      },
      {
        question: "What are the main tools I use for my day-to-day job?",
        options: ["Airflow/AWS/Python/SQL", "Python/R/Tableau", "SQL/Power BI/Minitab", "Excel/R/Quicksight"],
        correctAnswer: "Airflow/AWS/Python/SQL",
        explanation: "I build ETL pipelines at Enviaflores.com where I mainly use Airflow/AWS/Python/SQL."
      }
    ];

    // ── True / False State ────────────────────────────────────
    let currentFact = facts[Math.floor(Math.random() * facts.length)];
    let answered = false;
    let userGuess = null;
    let tfScore = 0;
    let tfStreak = 0;
    let tfBestStreak = 0;
    let tfTotal = 0;

    function makeGuess(guess) {
      if (answered) return;
      userGuess = guess;
      answered = true;
      tfTotal++;
      if (guess === currentFact.isTrue) {
        tfScore++;
        tfStreak++;
        if (tfStreak > tfBestStreak) tfBestStreak = tfStreak;
      } else {
        tfStreak = 0;
      }
    }

    function nextFact() {
      let next;
      do {
        next = facts[Math.floor(Math.random() * facts.length)];
      } while (next.text === currentFact.text && facts.length > 1);
      currentFact = next;
      userGuess = null;
      answered = false;
    }

    // ── About Me Quiz State ───────────────────────────────────
    let quizStarted = false;
    let quizDone = false;
    let qIndex = 0;
    let qSelected = null;
    let qRevealed = false;
    let quizAnswers = [];
    let quizScore = 0;

    function startQuiz() {
      quizStarted = true;
      quizDone = false;
      qIndex = 0;
      qSelected = null;
      qRevealed = false;
      quizAnswers = [];
      quizScore = 0;
      shuffleArray(aboutMeQuestions);
    }

    function pickOption(opt) {
      if (qRevealed) return;
      qSelected = opt;
      qRevealed = true;

      const q = aboutMeQuestions[qIndex];
      const correct = opt === q.correctAnswer;
      if (correct) quizScore++;
      quizAnswers.push({
        question: q.question,
        selected: opt,
        correct: q.correctAnswer,
        isCorrect: correct,
        explanation: q.explanation
      });
    }

    function nextQuestion() {
      if (qIndex < aboutMeQuestions.length - 1) {
        qIndex++;
        qSelected = null;
        qRevealed = false;
      } else {
        quizDone = true;
      }
    }

    function restartQuiz() {
      startQuiz();
    }

    // ── Helpers ───────────────────────────────────────────────
    function shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    function handleImageError(e) {
      e.target.src = `${base}/memes/placeholder.jpg`;
    }
</script>

<div class="fun-wrap">
  <!-- Intro -->
  <p class="fun-intro">data cleaning not included.</p>

  <!-- Two-column games -->
  <div class="games-row">
    <!-- Data or Fiction? -->
    <div class="game-card">
      <div class="gc-head">
        <h3>Data or Fiction?</h3>
        <div class="gc-stats">
          <span class="gc-score">{tfScore}/{tfTotal}</span>
          {#if tfStreak >= 2}
            <span class="gc-streak">{tfStreak} streak</span>
          {/if}
        </div>
      </div>

      <div class="gc-body">
        <p class="tf-statement">{currentFact.text}</p>
      </div>

      {#if !answered}
        <div class="tf-btns">
          <button class="tf-btn" on:click={() => makeGuess(true)}>Fact</button>
          <button class="tf-btn tf-btn-alt" on:click={() => makeGuess(false)}>Fiction</button>
        </div>
      {:else}
        <div class="tf-feedback" class:tf-correct={userGuess === currentFact.isTrue} class:tf-wrong={userGuess !== currentFact.isTrue}>
          <span class="tf-verdict">{userGuess === currentFact.isTrue ? 'Correct.' : 'Wrong.'}</span>
          <span class="tf-explain">{currentFact.isTrue ? 'This one is actually true.' : 'This one is false.'}</span>
        </div>
        <button class="gc-next" on:click={nextFact}>Next statement</button>
      {/if}
    </div>

    <!-- Think You Know Me? -->
    <div class="game-card">
      <div class="gc-head">
        <h3>Think You Know Me?</h3>
      </div>

      {#if !quizStarted}
        <div class="quiz-intro">
          <p>5 questions about me and my data science journey. Get a little challenge in and see how well you really know me!</p>
          <button class="gc-start" on:click={startQuiz}>Start</button>
        </div>
      {:else if !quizDone}
        <div class="quiz-active">
          <div class="quiz-progress-track">
            <div class="quiz-progress-fill" style="width: {(qIndex + 1) / aboutMeQuestions.length * 100}%"></div>
          </div>
          <span class="quiz-step">{qIndex + 1} / {aboutMeQuestions.length}</span>

          <p class="quiz-question">{aboutMeQuestions[qIndex].question}</p>

          <div class="quiz-opts">
            {#each aboutMeQuestions[qIndex].options as opt}
              <button
                class="quiz-opt"
                class:opt-selected={qSelected === opt && !qRevealed}
                class:opt-correct={qRevealed && opt === aboutMeQuestions[qIndex].correctAnswer}
                class:opt-wrong={qRevealed && qSelected === opt && opt !== aboutMeQuestions[qIndex].correctAnswer}
                class:opt-dim={qRevealed && opt !== qSelected && opt !== aboutMeQuestions[qIndex].correctAnswer}
                on:click={() => pickOption(opt)}
              >
                {opt}
              </button>
            {/each}
          </div>

          {#if qRevealed}
            <p class="quiz-explain">{aboutMeQuestions[qIndex].explanation}</p>
            <button class="gc-next" on:click={nextQuestion}>
              {qIndex < aboutMeQuestions.length - 1 ? 'Next' : 'See results'}
            </button>
          {/if}
        </div>
      {:else}
        <div class="quiz-results">
          <div class="qr-score-wrap">
            <span class="qr-num">{quizScore}</span>
            <span class="qr-den">/ {aboutMeQuestions.length}</span>
          </div>
          <p class="qr-msg">
            {#if quizScore === aboutMeQuestions.length}
              You know me better than I know myself.
            {:else if quizScore >= 3}
              Impressive. You've clearly been paying attention.
            {:else if quizScore >= 2}
              Not bad. We should grab coffee sometime.
            {:else}
              We have some catching up to do.
            {/if}
          </p>

          <div class="qr-breakdown">
            {#each quizAnswers as a}
              <div class="qr-item" class:qr-right={a.isCorrect} class:qr-miss={!a.isCorrect}>
                <div class="qr-q">{a.question}</div>
                <div class="qr-detail">
                  {#if a.isCorrect}
                    <span class="qr-tag-correct">{a.selected}</span>
                  {:else}
                    <span class="qr-tag-wrong">{a.selected}</span>
                    <span class="qr-tag-answer">{a.correct}</span>
                  {/if}
                </div>
                <p class="qr-exp">{a.explanation}</p>
              </div>
            {/each}
          </div>

          <button class="gc-start" on:click={restartQuiz}>Try again</button>
        </div>
      {/if}
    </div>
  </div>

  <!-- Divider -->
  <div class="fun-divider"></div>

  <!-- Meme Archive -->
  <section class="meme-section">
    <h3 class="meme-heading">The Meme Archive</h3>
    <p class="meme-sub">A curated collection of data science pain.</p>

    <div class="meme-grid">
      {#each memes as meme}
        <div class="meme-card">
          <img src={meme.imageUrl} alt={meme.alt} on:error={handleImageError} />
          <span class="meme-caption">{meme.alt}</span>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  /* ═══════════════════════════════════════════════════════════
     CONTAINER
     ═══════════════════════════════════════════════════════════ */
  .fun-wrap {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0.5rem 1rem 2rem;
  }

  .fun-intro {
    text-align: center;
    color: #6E7891;
    font-size: 0.95rem;
    font-style: italic;
    margin: 0 0 2.5rem;
    letter-spacing: 0.02em;
  }

  /* ═══════════════════════════════════════════════════════════
     GAMES ROW
     ═══════════════════════════════════════════════════════════ */
  .games-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 740px) {
    .games-row {
      grid-template-columns: 1fr;
    }
  }

  /* ═══════════════════════════════════════════════════════════
     GAME CARD (shared shell)
     ═══════════════════════════════════════════════════════════ */
  .game-card {
    background: rgba(13, 27, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    padding: 1.8rem 1.6rem;
    display: flex;
    flex-direction: column;
    min-height: 380px;
  }

  .gc-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  .gc-head h3 {
    color: #EAEAEA;
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.01em;
  }

  .gc-stats {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.35rem;
  }

  .gc-score {
    font-size: 0.78rem;
    font-weight: 600;
    color: #6E7891;
    font-variant-numeric: tabular-nums;
  }

  .gc-streak {
    font-size: 0.68rem;
    font-weight: 600;
    color: #D88B7A;
    background: rgba(192, 87, 70, 0.12);
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .gc-body {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ═══════════════════════════════════════════════════════════
     TRUE / FALSE GAME
     ═══════════════════════════════════════════════════════════ */
  .tf-statement {
    font-size: 1.05rem;
    line-height: 1.65;
    color: #C9D1DC;
    text-align: center;
    margin: 0;
    padding: 0 0.5rem;
  }

  .tf-btns {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.8rem;
  }

  .tf-btn {
    flex: 1;
    padding: 0.7rem 1rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.88rem;
    cursor: pointer;
    transition: all 0.25s ease;
    border: 1px solid rgba(192, 87, 70, 0.35);
    background: rgba(192, 87, 70, 0.08);
    color: #C05746;
  }

  .tf-btn:hover {
    background: rgba(192, 87, 70, 0.18);
    transform: translateY(-2px);
  }

  .tf-btn-alt {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
    color: #ADB6C4;
  }

  .tf-btn-alt:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.18);
  }

  .tf-feedback {
    margin-top: 1.5rem;
    padding: 0.9rem 1.2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    animation: fadeSlide 0.35s ease;
  }

  .tf-correct {
    background: rgba(192, 87, 70, 0.1);
    border: 1px solid rgba(192, 87, 70, 0.25);
  }

  .tf-correct .tf-verdict {
    color: #D88B7A;
    font-weight: 700;
  }

  .tf-wrong {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .tf-wrong .tf-verdict {
    color: #6E7891;
    font-weight: 700;
  }

  .tf-explain {
    font-size: 0.82rem;
    color: #ADB6C4;
    line-height: 1.45;
  }

  .gc-next {
    margin-top: 1.2rem;
    align-self: center;
    padding: 0.55rem 1.4rem;
    border-radius: 999px;
    border: 1px solid rgba(192, 87, 70, 0.3);
    background: transparent;
    color: #C05746;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .gc-next:hover {
    background: rgba(192, 87, 70, 0.1);
    border-color: rgba(192, 87, 70, 0.5);
  }

  /* ═══════════════════════════════════════════════════════════
     QUIZ — INTRO
     ═══════════════════════════════════════════════════════════ */
  .quiz-intro {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }

  .quiz-intro p {
    color: #ADB6C4;
    font-size: 0.92rem;
    line-height: 1.6;
    max-width: 280px;
    margin: 0;
  }

  .gc-start {
    padding: 0.65rem 1.8rem;
    border-radius: 999px;
    border: none;
    background: #C05746;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .gc-start:hover {
    background: #AD6A6C;
    transform: translateY(-2px);
  }

  /* ═══════════════════════════════════════════════════════════
     QUIZ — ACTIVE
     ═══════════════════════════════════════════════════════════ */
  .quiz-active {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .quiz-progress-track {
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }

  .quiz-progress-fill {
    height: 100%;
    background: #C05746;
    border-radius: 999px;
    transition: width 0.4s ease;
  }

  .quiz-step {
    font-size: 0.72rem;
    font-weight: 600;
    color: #6E7891;
    margin-bottom: 1.2rem;
    letter-spacing: 0.04em;
  }

  .quiz-question {
    font-size: 1rem;
    color: #EAEAEA;
    line-height: 1.5;
    margin: 0 0 1.4rem;
    font-weight: 600;
  }

  .quiz-opts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.65rem;
  }

  @media (max-width: 500px) {
    .quiz-opts {
      grid-template-columns: 1fr;
    }
  }

  .quiz-opt {
    padding: 0.7rem 0.85rem;
    border-radius: 9px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(13, 27, 42, 0.5);
    color: #C9D1DC;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }

  .quiz-opt:hover:not(.opt-correct):not(.opt-wrong):not(.opt-dim) {
    border-color: rgba(192, 87, 70, 0.3);
    background: rgba(192, 87, 70, 0.06);
  }

  .opt-selected {
    border-color: rgba(192, 87, 70, 0.5);
    background: rgba(192, 87, 70, 0.1);
    color: #EAEAEA;
  }

  .opt-correct {
    border-color: rgba(192, 87, 70, 0.5);
    background: rgba(192, 87, 70, 0.12);
    color: #EAEAEA;
    font-weight: 600;
  }

  .opt-wrong {
    border-color: rgba(255, 255, 255, 0.1);
    color: #6E7891;
    text-decoration: line-through;
  }

  .opt-dim {
    opacity: 0.45;
  }

  .quiz-explain {
    margin: 1rem 0 0;
    font-size: 0.82rem;
    color: #ADB6C4;
    font-style: italic;
    line-height: 1.55;
    animation: fadeSlide 0.3s ease;
  }

  /* ═══════════════════════════════════════════════════════════
     QUIZ — RESULTS
     ═══════════════════════════════════════════════════════════ */
  .quiz-results {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    max-height: 500px;
  }

  .qr-score-wrap {
    display: flex;
    align-items: baseline;
    gap: 0.15rem;
    margin: 0.5rem 0 0.3rem;
  }

  .qr-num {
    font-size: 2.4rem;
    font-weight: 800;
    color: #C05746;
    line-height: 1;
  }

  .qr-den {
    font-size: 1rem;
    color: #6E7891;
    font-weight: 600;
  }

  .qr-msg {
    color: #C9D1DC;
    font-size: 0.88rem;
    margin: 0 0 1.5rem;
    text-align: center;
  }

  .qr-breakdown {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin-bottom: 1.5rem;
  }

  .qr-item {
    background: rgba(13, 27, 42, 0.5);
    border-radius: 9px;
    padding: 0.85rem 1rem;
    border-left: 3px solid transparent;
  }

  .qr-right {
    border-left-color: rgba(192, 87, 70, 0.5);
  }

  .qr-miss {
    border-left-color: rgba(255, 255, 255, 0.1);
  }

  .qr-q {
    font-size: 0.82rem;
    font-weight: 600;
    color: #EAEAEA;
    margin-bottom: 0.35rem;
  }

  .qr-detail {
    display: flex;
    gap: 0.8rem;
    font-size: 0.78rem;
    margin-bottom: 0.3rem;
    flex-wrap: wrap;
  }

  .qr-tag-wrong {
    color: #6E7891;
    text-decoration: line-through;
  }

  .qr-tag-answer {
    color: #D88B7A;
  }

  .qr-tag-correct {
    color: #D88B7A;
  }

  .qr-exp {
    font-size: 0.76rem;
    color: #ADB6C4;
    font-style: italic;
    margin: 0;
    line-height: 1.5;
  }

  /* ═══════════════════════════════════════════════════════════
     DIVIDER
     ═══════════════════════════════════════════════════════════ */
  .fun-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(192, 87, 70, 0.2), transparent);
    margin: 2.5rem 0;
  }

  /* ═══════════════════════════════════════════════════════════
     MEME ARCHIVE
     ═══════════════════════════════════════════════════════════ */
  .meme-section {
    margin-bottom: 1rem;
  }

  .meme-heading {
    color: #EAEAEA;
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0 0 0.3rem;
    text-align: center;
  }

  .meme-sub {
    color: #6E7891;
    font-size: 0.85rem;
    text-align: center;
    margin: 0 0 1.8rem;
    font-style: italic;
  }

  .meme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 1rem;
  }

  .meme-card {
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 11px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .meme-card:hover {
    transform: translateY(-3px);
    border-color: rgba(192, 87, 70, 0.2);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  .meme-card img {
    width: 100%;
    display: block;
  }

  .meme-caption {
    display: block;
    padding: 0.5rem 0.7rem 0.6rem;
    font-size: 0.7rem;
    color: #ADB6C4;
    line-height: 1.4;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .meme-card:hover .meme-caption {
    max-height: 60px;
    opacity: 1;
  }

  /* ═══════════════════════════════════════════════════════════
     ANIMATIONS
     ═══════════════════════════════════════════════════════════ */
  @keyframes fadeSlide {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
