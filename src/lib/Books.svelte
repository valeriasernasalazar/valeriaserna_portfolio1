<script>
    import { onMount, onDestroy } from "svelte";
    import { base } from '$app/paths';
    import Chart from 'chart.js/auto';

    // ── Book data ──────────────────────────────────────────────
    const books = [
        {
        id: 30659,
        title: "Meditations",
        author: "Marcus Aurelius",
        rating: 4,
        coverImg: `${base}/book-covers/meditations.jpg`,
        yearPublished: 2006,
        category: "Philosophy",
        thoughts: "Meditations is the first philosophy book I read and it is one that I keep coming back to. The way Marcus Aurelius develops the ideas of staying calm, focused, and true to your values is very impressive. It’s one of those books that sticks to you and that I sometimes think about."
      },
      {
        id: 1087293,
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        rating: 5,
        coverImg: `${base}/book-covers/el-hombre.jpg`,
        yearPublished: 2004,
        category: "Psychology",
        thoughts: "Man’s Search for Meaning is a book that completely changed how i see the struggles I face. Frankl’s take on finding meaning, even in the hardest situations, really resonated with me. We have the power to choose how we respond to whatever may come up, no matter how hard it feels. If you are looking for a book that makes you rethink what truly matters in life, this is the one."
      },
      {
        id: 43317482,
        title: "In the Dream House",
        author: "Carmen Maria Machado",
        rating: 5,
        coverImg: `${base}/book-covers/dream-house.jpg`,
        yearPublished: 2019,
        category: "Memoir",
        thoughts: "In the Dream House is the first piece of literature  I read that explored abuse in a same-sex relationship and the power dynamics that are involved. The storytelling is so unique that I’ve yet to experience something alike since reading it. It feels like art, every chapter is written in a different way, some are fairy tales, horror stories, myths. It’s an adventure to read and there are lesbians involved. Highly recommend."
    },
      {
        id: 19189061,
        title: "When Things Fall Apart",
        author: "Pema Chodron",
        rating: 3,
        coverImg: `${base}/book-covers/cuando-todo.jpg`,
        yearPublished: 2011,
        category: "Philosophy",
        thoughts: "I read this book when it felt like everything was falling apart in my personal life. It really made me reflect on the importance of finding peace amidst chaos. I wish it would have delved a bit deeper on how to start meditating, but I took away one key idea that I still apply on a daily basis: sitting with discomfort rather than avoiding it is the key to living a balanced, very satisfying life."
      },
      {
        id: 41104077,
        title: "Invisible Women",
        author: "Caroline Criado Perez",
        rating: 4,
        coverImg: `${base}/book-covers/invisible-women.jpg`,
        yearPublished: 2019,
        category: "Data Science",
        thoughts: "When you read this book, you start noticing certain gender biases in data collection and analysis that impact women’s lives in ways that I hadn’t fully realized before. I feel very passionate about this topic, but I found this approach to the book somewhat disappointing. I felt that it lacked the technical details I was hoping for as someone who works in tech, while still being fairly technical for a non-tech reader. I had very high hopes for this book, but I still found value in what I read. One example that particularly stood out to me was how cars are designed around the male body. Criado Perez reports that women are 47% more likely to be seriously injured and 17% more likely to die in car crashes than men. That is flabbergasting. Absolutely insane. Crazy stuff."
      },
      {
        id: 60811826,
        title: "I Who Have Never Known Men",
        author: "Jacqueline Harpman",
        rating: 4,
        coverImg: `${base}/book-covers/never-known.jpg`,
        yearPublished: 2022,
        category: "Fiction",
        thoughts: "The dystopian world Harpman creates is unsettling in a way that makes you feel both trapped and detached from the very human experiences we take for granted. In this world, the main character and a group of women are isolated in a kind of prison-like environment with no knowledge of the outside world, and no freedom to live as they choose. The lack of human connection and the strict boundaries placed on their lives felt suffocating, but what really struck me was the way the story explored the concept of being human—of longing for connection, love, and freedom. There's this heartbreaking moment in the book when the main character realizes, 'I was forced to acknowledge too late, much too late, that I too had loved, that I was capable of suffering, and that I was human after all.' That line stayed with me for days. It made me think about how easy it is to forget our humanity when we're constantly surrounded by the comforts and distractions of everyday life, and how devastating it must be to have it stripped away. The book's dystopia isn't just a physical space—it's a profound emotional isolation. It's quiet, it's intense, and it's a reminder of how deeply we need love and connection to truly feel alive."
      },
      {
        id: 49552,
        title: "The Stranger",
        author: "Albert Camus",
        rating: 4,
        coverImg: `${base}/book-covers/stranger.jpg`,
        yearPublished: 1989,
        category: "Philosophy",
        thoughts: "Camus' existential exploration is just as powerful every time I read it. The main character, Meursault, is this strangely detached figure who doesn't conform to society's expectations about how one should grieve, love, or even live life in general. The book is a brilliant dive into the idea of the absurd—how life is inherently meaningless, yet we still search for meaning and structure in it. I remember the first time I read it and felt that piercing realization: the world is indifferent, and yet we go on making choices. It's not the kind of book that's meant to be comforting or give you answers, but it definitely makes you question everything, even your own existence. It's a book that makes you reflect on what really matters—what's real and what's not, and how much control we really have over the choices we make."
      },
      {
        id: 40672036,
        title: "Digital Minimalism",
        author: "Cal Newport",
        rating: 4,
        coverImg: `${base}/book-covers/digital-min.jpg`,
        yearPublished: 2019,
        category: "Self Improvement",
        thoughts: "Digital Minimalism really hit home for me. In a world where we're constantly bombarded by notifications, apps, and social media, it's easy to lose sight of what actually matters. Newport's approach to digital consumption felt like a wake-up call: I've always known that I spent too much time on my phone, but I never fully grasped the effect it was having on my attention and overall well-being. Newport doesn't just tell you to put your phone down and 'detox', but instead, he offers a framework for how to prioritize what's truly important and intentionally cut out the digital noise. His focus on creating more meaningful digital habits instead of simply avoiding technology resonated with me deeply. It made me realize how easy it is to fill your time with mindless scrolling and how much more fulfilling it can be to engage in activities that actually add value to your life. I started applying some of his strategies, like scheduling time for deep work and decluttering my digital spaces, and I already feel more in control of my time. It's definitely been a shift, but a really necessary one."
      },
      {
        id: 53239311,
        title: "The Happiest Man on Earth",
        author: "Eddie Jaku",
        rating: 4,
        coverImg: `${base}/book-covers/happiest-man.jpg`,
        yearPublished: 2020,
        category: "Memoir",
        thoughts: "Eddie Jaku's story is not just about surviving the horrors of the Holocaust; it's about choosing to live with joy despite it all. I was deeply moved by his resilience and his message of choosing happiness, no matter the circumstances. His journey from unimaginable suffering to finding peace and contentment is inspiring. What stood out to me most was his philosophy: happiness isn't something that just happens to you—it's something you choose. That idea really stuck with me. It made me reflect on how much of our mindset we have control over, even when life throws curveballs. Eddie's story is full of pain, yes, but it's also full of hope, gratitude, and the decision to never let the darkness win. It's a reminder that no matter how much we suffer, we can always choose joy and love."
      },
      {
        id: 35133922,
        title: "Educated",
        author: "Tara Westover",
        rating: 4,
        coverImg: `${base}/book-covers/educated.jpg`,
        yearPublished: 2018,
        category: "Memoir",
        thoughts: "Tara Westover's memoir about growing up in a strict and isolated family, without access to formal education, blew my mind. Her journey of self-discovery and her relentless pursuit of knowledge, despite the odds, felt so raw and real. What really resonated with me was her struggle to reconcile her desire for education with her loyalty to her family. There's this tension throughout the book, this idea that education is a path to freedom, but it also means leaving behind parts of yourself and your past. I felt for Tara as she navigated the complexities of family loyalty and personal growth. Her resilience is extraordinary, and her story is a testament to the transformative power of education. I honestly couldn't put it down, even though I was often shocked by the challenges she faced. It made me reflect on how much we take education for granted, and how lucky we are to have access to it in the ways Tara fought for."
      },
      {
        id: 25899336,
        title: "When Breath Becomes Air",
        author: "Paul Kalanithi",
        rating: 4,
        coverImg: `${base}/book-covers/breath-air.jpg`,
        yearPublished: 2016,
        category: "Memoir",
        thoughts: "This book is Paul Kalanithi's reflection on life, mortality, and the search for meaning—written as he faced his own terminal cancer diagnosis. As a neurosurgeon, Paul was deeply involved in helping others face death, but when he himself became the patient, everything changed. The way he reflects on the human experience—on how life's meaning is not something we just find, but something we create through our choices and relationships—struck a chord with me. I remember a particular moment in the book where he writes about his struggle with reconciling his love for medicine and his imminent death. It's raw and it's beautiful. The vulnerability with which he writes about his own fear and acceptance of death made me think a lot about how we approach our own lives and the things we take for granted. The book left me with a deep sense of gratitude for the time we have and a reminder of how important it is to live with purpose."
      },
      {
        id: 51484920,
        title: "Almond",
        author: "Sohn Won-Pyung",
        rating: 4,
        coverImg: `${base}/book-covers/almendra.jpg`,
        yearPublished: 2020,
        category: "Fiction",
        thoughts: "Almond is about a young boy named Yunjae, who is born with alexithymia—a condition that makes it difficult for him to feel or express emotions. I was immediately drawn to Yunjae's journey, as it explores his struggle to understand his own feelings and connect with others. The portrayal of his emotional isolation was so well done, and I found myself reflecting on how we all navigate emotions differently. The book touches on themes of loneliness, empathy, and how we relate to the world around us. What made it stand out even more was how the author blended these heavy topics with moments of warmth and unexpected humor. Yunjae's growth over the course of the book was really moving, and it made me realize how important it is to understand and express our emotions, even if it's hard. It's a thought-provoking and unique read that gives you a lot to think about."
      },
      {
        id: 28257707,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        rating: 4,
        coverImg: `${base}/book-covers/subtle-art.jpg`,
        yearPublished: 2016,
        category: "Self Improvement",
        thoughts: "I'll be honest, I wasn't sure what to expect from this book, but it ended up being a real eye-opener. The Subtle Art of Not Giving a F*ck isn't your typical self-help book. It's brutally honest, a bit sarcastic, and it challenges the idea that we can or should care about everything. Mark Manson flips the script on the idea of positivity and success, arguing that we all have a limited number of f*cks to give, so we need to be careful about where we invest our energy. The part that really stuck with me is when he talks about how we often obsess over things that aren't even important to us, like societal expectations or superficial success. It was a much-needed reminder that it's okay to let go of things that don't truly matter. Instead of pretending that everything will work out if we just think positively, Manson encourages us to embrace the uncomfortable truths of life, face our flaws, and prioritize what really brings value to our lives. It's not just a self-help book; it's more like a wake-up call to stop wasting time on things that drain us."
      },
      {
        id: 37570546,
        title: "Maybe You Should Talk to Someone",
        author: "Lori Gottlieb",
        rating: 4,
        coverImg: `${base}/book-covers/maybe-talk.jpg`,
        yearPublished: 2019,
        category: "Psychology",
        thoughts: "I wasn't sure what to expect from a book about therapy, but it ended up being so much more than that. Lori Gottlieb takes us behind the scenes of her work as a therapist while also sharing her own personal journey of seeking therapy. It's a perfect mix of vulnerability, humor, and deep introspection. I loved how Gottlieb brings humor into what could be a heavy subject, making it more relatable and approachable. The part that hit me hardest was how she describes the therapy process—not just as a way to 'fix' someone, but as a space for self-discovery. It also made me realize how therapy isn't just for people with major life crises—it's for anyone who wants to understand themselves better. It actually impulsed me to go to therapy myself. I found myself laughing and even tearing up at times. It's such an honest look at the human condition, showing how we all carry our own burdens, and how talking about them can bring healing. I've thought about therapy in a completely new way after reading this book."
      },
      {
        id: 32620332,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        rating: 4,
        coverImg: `${base}/book-covers/evelyn-hugo.jpg`,
        yearPublished: 2017,
        category: "Fiction",
        thoughts: "I was honestly surprised by how much I loved The Seven Husbands of Evelyn Hugo, as it is not usually the type of book I gravitate toward, but it completely hooked me. The whole idea of old Hollywood, scandal, and glamorous lives seemed like it would be a bit too far from my usual reads, but I was drawn in by the complexity of the characters and the unexpected depth of the story. Evelyn is such a complicated and layered character, and her journey through love, loss, and the choices she makes along the way really kept me engaged. The twists in her life were jaw-dropping, and I was left thinking about her story for days. The themes of identity, sacrifice, and authenticity really resonated with me, and I felt like I learned a lot about the things we hide in plain sight. This book was way more than I expected—emotional, thought-provoking, and beautiful. It made me reflect on my own choices in life and what it means to live truthfully. Highly recommend, even if it's not your usual genre!"
      },
      {
        id: 54814676,
        title: "Crying in H Mart",
        author: "Michelle Zauner",
        rating: 3,
        coverImg: `${base}/book-covers/h-mart.jpg`,
        yearPublished: 2021,
        category: "Memoir",
        thoughts: "Crying in H Mart was a touching read, though I felt a bit mixed about it overall. The way Michelle Zauner captures grief, identity, and the bond with her mother was beautifully raw and heartfelt. I could relate to the way food becomes such a strong emotional anchor to family and culture. The sections about her mother's illness were deeply emotional, and there were moments when I was completely moved. However, I felt like the pacing slowed down in certain parts, and I struggled to connect fully with some of the more introspective moments. That said, the writing is undeniably powerful, and Zauner's exploration of her Korean-American identity gave me a lot to think about, especially how we carry our heritage with us in both big and small ways. It was definitely an emotional journey, and while it didn't fully hit all the marks for me, I still think it's a significant and reflective read."
      },
      {
        id: 7074248,
        title: "El arte de ser feliz",
        author: "Arthur Schopenhauer",
        rating: 3,
        coverImg: `${base}/book-covers/arte-feliz.jpg`,
        yearPublished: 2000,
        category: "Philosophy",
        thoughts: "Schopenhauer's views on happiness are quite pessimistic, which made it a little tough for me to fully embrace his philosophy. He focuses a lot on the idea that suffering is inevitable and that happiness is fleeting, which felt a bit heavy at times. Despite that, there were some valuable insights, especially when it came to understanding human nature and the importance of perspective in finding contentment. The book made me reflect on the ways we pursue happiness, often chasing external things, while Schopenhauer suggests it's more about adjusting our inner mindset. I didn't fully agree with everything he said, but I still appreciated the intellectual challenge it presented. It wasn't my favorite philosophy book, but it did spark some deep reflection about how we approach life's ups and downs."
      },
      {
        id: 59364173,
        title: "I'm Glad My Mom Died",
        author: "Jennette McCurdy",
        rating: 3,
        coverImg: `${base}/book-covers/mom-died.jpg`,
        yearPublished: 2022,
        category: "Memoir",
        thoughts: "Having grown up watching iCarly, it was pretty heart-breaking to hear what Jennette McCurdy went through behind the scenes. I'm Glad My Mom Died is a raw, honest, and surprisingly funny memoir. The title definitely grabbed my attention, but as I read, I was struck by Jennette's bravery in sharing such a personal and painful story. She dives deep into her complicated relationship with her mother and how it shaped her life, career, and sense of self. The abuse and manipulation she endured were tough to read about, but what stood out was her self-awareness and humor, which made this incredibly relatable. While it was a difficult read, it really made me reflect on how family dynamics can impact mental health and the importance of breaking free from toxic relationships. This isn't the type of book I usually go for, but I found it incredibly powerful and eye-opening."
      },
      {
        id: 28186015,
        title: "Weapons of Math Destruction",
        author: "Cathy O'Neil",
        rating: 2,
        coverImg: `${base}/book-covers/weapons-math.jpg`,
        yearPublished: 2016,
        category: "Data Science",
        thoughts: "Weapons of Math Destruction focuses on how big data, predictive models, and machine learning can perpetuate inequality and bias. I was hoping for more technical detail since it was written by a data scientist, but I found it a bit of a middle ground. It felt too technical for someone who doesn't know how these systems work, yet too simplistic for those of us who do. The message is vital, but I wanted more in-depth examples and solutions on how to mitigate these issues. It's an important read for anyone working in tech, but it left me wanting more substance."
      },
      {
        id: 22738563,
        title: "We Should All Be Feminists",
        author: "Chimamanda Ngozi Adichie",
        rating: 2,
        coverImg: `${base}/book-covers/feminists.jpg`,
        yearPublished: 2014,
        category: "Social Science",
        thoughts: "It's a short and insightful introduction to feminism, which I appreciate, but I couldn't help but wish for more depth. I understand the need for accessibility, but it felt like it only scratched the surface. I was hoping for a richer exploration of the complexities behind contemporary feminist thought. Still, it's a good starting point if you're new to the topic."
      },
      {
        id: 53568397,
        title: "The Midnight Library",
        author: "Matt Haig",
        rating: 2,
        coverImg: `${base}/book-covers/midnight.jpg`,
        yearPublished: 2020,
        category: "Fiction",
        thoughts: "The idea of parallel lives and exploring regret had so much potential, but honestly, I found the execution a bit too simplistic. The premise was intriguing, and I did feel some emotional connection, but the ending really let me down. The author attributes the protagonist's depression to her view on life, which just doesn't sit right with me. Depression is so much more complex than simply how someone sees the world, and I felt like the book oversimplified that. It had a lot of promise, but ultimately it stayed too surface-level for my taste."
      },
      {
        id: 176443093,
        title: "Sociopath: A Memoir",
        author: "Patric Gagne",
        rating: 1,
        coverImg: `${base}/book-covers/sociopath.jpg`,
        yearPublished: 2024,
        category: "Memoir",
        thoughts: "I was really drawn to the subject matter, but unfortunately, this one didn't hit the mark for me. The writing style just didn't resonate with me, and I struggled to connect with the author's perspective. It felt like it lacked depth and emotional nuance, which left me disappointed considering the topic's potential."
      },
        {
    id: 30119,
    title: "Many Lives, Many Masters",
    author: "Brian L. Weiss",
    rating: 1,
    coverImg: `${base}/book-covers/many-lives.jpg`,
    yearPublished: 1988,
    category: "Psychology",
    thoughts: "I had high hopes for this one, but it just didn't do it for me. The concepts seemed too unsubstantiated, and I felt the writing style was a bit dry and disengaging. While some people might appreciate the spiritual exploration, I personally prefer a more grounded, evidence-based approach to psychology. It just didn't connect with me in the way I expected."
    },
    {
        id: 900001,
        title: "El tunel",
        author: "Ernesto Sabato",
        rating: 4,
        coverImg: `${base}/book-covers/placeholder.jpg`,
        yearPublished: 1948,
        category: "Fiction",
        thoughts: ""
      },
      {
        id: 900002,
        title: "Carta de una desconocida",
        author: "Stefan Zweig",
        rating: 4,
        coverImg: `${base}/book-covers/placeholder.jpg`,
        yearPublished: 1922,
        category: "Fiction",
        thoughts: ""
      },
      {
        id: 900003,
        title: "La vegetariana",
        author: "Han Kang",
        rating: 4,
        coverImg: `${base}/book-covers/placeholder.jpg`,
        yearPublished: 2007,
        category: "Fiction",
        thoughts: ""
      },
      {
        id: 900004,
        title: "El verano invencible de Liliana",
        author: "Cristina Rivera Garza",
        rating: 4,
        coverImg: `${base}/book-covers/placeholder.jpg`,
        yearPublished: 2022,
        category: "Memoir",
        thoughts: ""
      },
      {
        id: 900005,
        title: "Fluyan mis lagrimas dijo el policia",
        author: "Philip K. Dick",
        rating: 3,
        coverImg: `${base}/book-covers/placeholder.jpg`,
        yearPublished: 1974,
        category: "Fiction",
        thoughts: ""
      },
      {
        id: 900006,
        title: "La tregua",
        author: "Mario Benedetti",
        rating: 4,
        coverImg: `${base}/book-covers/placeholder.jpg`,
        yearPublished: 1960,
        category: "Fiction",
        thoughts: ""
      },
    ];

    // ── Derived data ───────────────────────────────────────────
    const categories = ["All", "Philosophy", "Fiction", "Memoir", "Psychology", "Data Science", "Self Improvement", "Social Science"];

    const categoryIcons = {
      "Philosophy": "🏺",
      "Fiction": "📖",
      "Memoir": "🪞",
      "Psychology": "🧠",
      "Data Science": "📊",
      "Self Improvement": "🌱",
      "Social Science": "🌍",
    };

    // ── State ──────────────────────────────────────────────────
    let activeCategory = "All";
    let showAnalysis = false;
    let selectedBook = null;
    let showModal = false;
    let searchQuery = "";
    let sortBy = "rating"; // "rating" | "dateRead"
    let showAll = false;
    const INITIAL_SHOW = 12;

    // Chart instances
    let ratingChart = null;
    let categoryChart = null;

    // ── Sorting helpers ─────────────────────────────────────────
    function sortBooks(list) {
      const sorted = [...list];
      if (sortBy === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "dateRead") {
        sorted.sort((a, b) => {
          if (!a.dateRead && !b.dateRead) return 0;
          if (!a.dateRead) return 1;
          if (!b.dateRead) return -1;
          return new Date(b.dateRead) - new Date(a.dateRead);
        });
      }
      return sorted;
    }

    // ── Computed ───────────────────────────────────────────────
    $: filteredBooks = (() => {
      const filtered = books.filter(book => {
        const matchesCategory = activeCategory === "All" || book.category === activeCategory;
        const matchesSearch = searchQuery === "" ||
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      return sortBooks(filtered);
    })();

    $: visibleBooks = showAll ? filteredBooks : filteredBooks.slice(0, INITIAL_SHOW);
    $: hasMore = filteredBooks.length > INITIAL_SHOW && !showAll;

    $: topPicks = books.filter(b => b.rating === 5);

    $: stats = {
      total: books.length,
      fiveStar: books.filter(b => b.rating === 5).length,
      avgRating: (books.reduce((a, b) => a + b.rating, 0) / books.length).toFixed(1),
      categories: new Set(books.map(b => b.category)).size,
    };

    // ── Functions ──────────────────────────────────────────────
    function filterBooks(category) {
      activeCategory = category;
    }

    function openModal(book) {
      selectedBook = book;
      showModal = true;
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      showModal = false;
      document.body.style.overflow = '';
      setTimeout(() => { selectedBook = null; }, 300);
    }

    function renderStars(rating) {
      return Array(5).fill().map((_, i) => i < rating ? '★' : '☆').join('');
    }

    function handleKeydown(e) {
      if (e.key === 'Escape' && showModal) closeModal();
    }

    function getRecommendations(book) {
      return books
        .filter(b => b.id !== book.id && (b.category === book.category || b.rating === book.rating))
        .sort((a, b) => (b.rating === book.rating ? 1 : 0) - (a.rating === book.rating ? 1 : 0))
        .slice(0, 6);
    }

    // ── Chart.js setup ─────────────────────────────────────────
    function initCharts() {
      // Rating distribution
      const ratingCounts = [0, 0, 0, 0, 0];
      books.forEach(b => { ratingCounts[b.rating - 1]++; });

      const ratingCtx = document.getElementById('ratingChart');
      if (ratingCtx) {
        ratingChart = new Chart(ratingCtx, {
          type: 'bar',
          data: {
            labels: ['1 ★', '2 ★', '3 ★', '4 ★', '5 ★'],
            datasets: [{
              data: ratingCounts,
              backgroundColor: [
                'rgba(192, 87, 70, 0.4)',
                'rgba(192, 87, 70, 0.5)',
                'rgba(192, 87, 70, 0.6)',
                'rgba(192, 87, 70, 0.8)',
                'rgba(192, 87, 70, 1)',
              ],
              borderColor: 'rgba(192, 87, 70, 0.9)',
              borderWidth: 1,
              borderRadius: 6,
              barPercentage: 0.6,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#0D1B2A',
                titleColor: '#EAEAEA',
                bodyColor: '#C9D1DC',
                borderColor: 'rgba(192, 87, 70, 0.3)',
                borderWidth: 1,
                cornerRadius: 8,
                padding: 10,
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#6E7891', font: { size: 12 } },
                border: { display: false },
              },
              y: {
                beginAtZero: true,
                grid: { color: 'rgba(255,255,255,0.04)' },
                ticks: {
                  color: '#6E7891',
                  font: { size: 12 },
                  stepSize: 1,
                  precision: 0,
                },
                border: { display: false },
              }
            }
          }
        });
      }

      // Category breakdown
      const catCounts = {};
      books.forEach(b => { catCounts[b.category] = (catCounts[b.category] || 0) + 1; });
      const catLabels = Object.keys(catCounts);
      const catData = Object.values(catCounts);

      const catColors = [
        'rgba(192, 87, 70, 0.85)',
        'rgba(173, 106, 108, 0.85)',
        'rgba(216, 139, 122, 0.85)',
        'rgba(110, 120, 145, 0.7)',
        'rgba(90, 100, 125, 0.7)',
        'rgba(70, 80, 105, 0.7)',
        'rgba(50, 60, 85, 0.7)',
      ];

      const catCtx = document.getElementById('categoryChart');
      if (catCtx) {
        categoryChart = new Chart(catCtx, {
          type: 'doughnut',
          data: {
            labels: catLabels,
            datasets: [{
              data: catData,
              backgroundColor: catColors.slice(0, catLabels.length),
              borderColor: '#1b263b',
              borderWidth: 3,
              hoverOffset: 8,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '62%',
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: '#C9D1DC',
                  font: { size: 12 },
                  padding: 16,
                  usePointStyle: true,
                  pointStyleWidth: 10,
                }
              },
              tooltip: {
                backgroundColor: '#0D1B2A',
                titleColor: '#EAEAEA',
                bodyColor: '#C9D1DC',
                borderColor: 'rgba(192, 87, 70, 0.3)',
                borderWidth: 1,
                cornerRadius: 8,
                padding: 10,
              }
            }
          }
        });
      }
    }

    function getCategoryBreakdown() {
      const counts = {};
      books.forEach(b => { counts[b.category] = (counts[b.category] || 0) + 1; });
      const max = Math.max(...Object.values(counts));
      return Object.entries(counts)
        .map(([name, count]) => ({
          name,
          count,
          pct: Math.round((count / max) * 100),
        }))
        .sort((a, b) => b.count - a.count);
    }

    function destroyCharts() {
      if (ratingChart) { ratingChart.destroy(); ratingChart = null; }
      if (categoryChart) { categoryChart.destroy(); categoryChart = null; }
    }

    onMount(() => {
      window.addEventListener('keydown', handleKeydown);
      return () => {
        window.removeEventListener('keydown', handleKeydown);
        destroyCharts();
      };
    });
</script>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--  BOOKS COMPONENT                                            -->
<!-- ═══════════════════════════════════════════════════════════ -->
<div class="books-root">

  <!-- ── View Toggle ─────────────────────────────────────────── -->
  <div class="view-toggle">
    <button
      class="toggle-btn {!showAnalysis ? 'active' : ''}"
      on:click={() => { showAnalysis = false; destroyCharts(); }}
    >
      <span class="toggle-icon">📚</span> Bookshelf
    </button>
    <button
      class="toggle-btn {showAnalysis ? 'active' : ''}"
      on:click={() => { showAnalysis = true; setTimeout(initCharts, 50); }}
    >
      <span class="toggle-icon">📊</span> Reading Analysis
    </button>
  </div>

  <!-- ═════════════════════════════════════════════════════════ -->
  <!--  BOOKSHELF VIEW                                           -->
  <!-- ═════════════════════════════════════════════════════════ -->
  {#if !showAnalysis}
    <div class="bookshelf">

      <!-- Search -->
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search by title or author..."
          bind:value={searchQuery}
        />
        {#if searchQuery}
          <button class="search-clear" on:click={() => searchQuery = ""}>✕</button>
        {/if}
      </div>

      <!-- Category filters -->
      <div class="filter-chips">
        {#each categories as category}
          <button
            class="chip {activeCategory === category ? 'active' : ''}"
            on:click={() => filterBooks(category)}
          >
            {#if categoryIcons[category]}
              <span class="chip-icon">{categoryIcons[category]}</span>
            {/if}
            {category}
          </button>
        {/each}
      </div>

      <!-- Sort + Grid -->
      <div class="controls-row">
        <div class="sort-buttons">
          <button class="sort-btn {sortBy === 'rating' ? 'active' : ''}" on:click={() => { sortBy = 'rating'; showAll = false; }}>
            <span class="sort-icon">★</span> By Rating
          </button>
          <button class="sort-btn {sortBy === 'dateRead' ? 'active' : ''}" on:click={() => { sortBy = 'dateRead'; showAll = false; }}>
            <span class="sort-icon">📅</span> By Date Read
          </button>
        </div>
        <span class="book-count">{filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}</span>
      </div>

      <div class="books-grid">
        {#each visibleBooks as book, i (book.id)}
          <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
          <div class="book-card" style="--i: {i}" on:click={() => openModal(book)} on:keydown={(e) => e.key === 'Enter' && openModal(book)} role="button" tabindex="0" aria-label="Read review of {book.title}">
            <div class="book-card-cover">
              <img
                src={book.coverImg}
                alt="{book.title} by {book.author}"
                loading="lazy"
                on:error={(e) => e.target.src = `${base}/book-covers/placeholder.jpg`}
              />
              <div class="book-card-overlay">
                <span class="overlay-label">Read review →</span>
              </div>
            </div>
            <div class="book-card-body">
              <h4 class="book-card-title">{book.title}</h4>
              <p class="book-card-author">{book.author}</p>
              <div class="book-card-meta">
                <span class="book-card-rating">{renderStars(book.rating)}</span>
                <span class="book-card-cat">{categoryIcons[book.category] || ''} {book.category}</span>
              </div>
            </div>
          </div>
        {/each}

        {#if visibleBooks.length === 0}
          <div class="empty-state">
            <p>No books match your search. Try a different filter.</p>
          </div>
        {/if}
      </div>

      {#if hasMore}
        <div class="see-more-wrap">
          <button class="see-more-btn" on:click={() => showAll = true}>
            See all {filteredBooks.length} books ↓
          </button>
        </div>
      {/if}
      {#if showAll && filteredBooks.length > INITIAL_SHOW}
        <div class="see-more-wrap">
          <button class="see-more-btn collapsed" on:click={() => showAll = false}>
            Show less ↑
          </button>
        </div>
      {/if}

      <!-- Top Picks -->
      <div class="top-picks">
        <div class="top-picks-header">
          <h3>Top Picks</h3>
          <span class="top-picks-badge">{topPicks.length} books</span>
        </div>
        <div class="top-picks-scroll">
          {#each topPicks as book (book.id)}
            <button class="top-pick-card" on:click={() => openModal(book)}>
              <img
                src={book.coverImg}
                alt={book.title}
                loading="lazy"
                on:error={(e) => e.target.src = `${base}/book-covers/placeholder.jpg`}
              />
              <div class="top-pick-info">
                <span class="top-pick-title">{book.title}</span>
                <span class="top-pick-author">{book.author}</span>
              </div>
              <span class="top-pick-stars">{renderStars(book.rating)}</span>
            </button>
          {/each}
        </div>
      </div>

    </div>

  <!-- ═════════════════════════════════════════════════════════ -->
  <!--  READING ANALYSIS VIEW                                    -->
  <!-- ═════════════════════════════════════════════════════════ -->
  {:else}
    <div class="analysis-view">

      <!-- Stats row -->
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-value">{stats.total}</div>
          <div class="stat-label">Books Read</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{stats.fiveStar}</div>
          <div class="stat-label">5-Star Reads</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{stats.avgRating}</div>
          <div class="stat-label">Avg. Rating</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{stats.categories}</div>
          <div class="stat-label">Categories</div>
        </div>
      </div>

      <!-- Charts grid -->
      <div class="charts-grid">
        <div class="chart-card">
          <h4 class="chart-card-title">Rating Distribution</h4>
          <div class="chart-wrap">
            <canvas id="ratingChart"></canvas>
          </div>
        </div>
        <div class="chart-card">
          <h4 class="chart-card-title">By Category</h4>
          <div class="chart-wrap chart-wrap-doughnut">
            <canvas id="categoryChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Category breakdown list -->
      <div class="category-breakdown">
        <h4 class="chart-card-title">Category Breakdown</h4>
        <div class="cat-bars">
          {#each getCategoryBreakdown() as cat}
            <div class="cat-bar-row">
              <span class="cat-bar-label">{categoryIcons[cat.name] || ''} {cat.name}</span>
              <div class="cat-bar-track">
                <div
                  class="cat-bar-fill"
                  style="width: {cat.pct}%"
                ></div>
              </div>
              <span class="cat-bar-count">{cat.count}</span>
            </div>
          {/each}
        </div>
      </div>

    </div>
  {/if}

</div>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--  BOOK DETAIL MODAL                                         -->
<!-- ═══════════════════════════════════════════════════════════ -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
{#if showModal && selectedBook}
  <div class="modal-backdrop {showModal ? 'visible' : ''}" on:click|self={closeModal} on:keydown={(e) => e.key === 'Escape' && closeModal()} role="dialog" aria-modal="true" aria-label="Book details">
    <div class="modal-panel {showModal ? 'open' : ''}">

      <button class="modal-close" on:click={closeModal} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>

      <div class="modal-inner">
        <!-- Header -->
        <div class="modal-header">
          <div class="modal-cover-wrap">
            <img
              src={selectedBook.coverImg}
              alt="{selectedBook.title} cover"
              on:error={(e) => e.target.src = `${base}/book-covers/placeholder.jpg`}
            />
          </div>
          <div class="modal-info">
            <h3>{selectedBook.title}</h3>
            <p class="modal-author">by {selectedBook.author}</p>
            <div class="modal-meta">
              <span class="meta-badge">{selectedBook.yearPublished}</span>
              <span class="meta-badge accent">{selectedBook.category}</span>
            </div>
            <div class="modal-rating">{renderStars(selectedBook.rating)}</div>
          </div>
        </div>

        <!-- Thoughts -->
        <div class="modal-thoughts">
          <h4>My Thoughts</h4>
          <p>{selectedBook.thoughts}</p>
        </div>

        <!-- Recommendations -->
        {#if getRecommendations(selectedBook).length > 0}
          <div class="modal-recs">
            <h4>You might also like</h4>
            <div class="recs-scroll">
              {#each getRecommendations(selectedBook) as rec (rec.id)}
                <button class="rec-card" on:click={() => { selectedBook = rec; }}>
                  <img
                    src={rec.coverImg}
                    alt={rec.title}
                    on:error={(e) => e.target.src = `${base}/book-covers/placeholder.jpg`}
                  />
                  <div class="rec-card-body">
                    <h5>{rec.title}</h5>
                    <span class="rec-card-author">{rec.author}</span>
                    <span class="rec-card-rating">{renderStars(rec.rating)}</span>
                  </div>
                </button>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}


<style>
  /* ── Root ────────────────────────────────────────────────── */
  .books-root {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* ── View Toggle ─────────────────────────────────────────── */
  .view-toggle {
    display: flex;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 2rem;
  }

  .toggle-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.3rem;
    border-radius: 999px;
    border: 1px solid rgba(192, 87, 70, 0.25);
    background: rgba(13, 27, 42, 0.5);
    color: #C9D1DC;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .toggle-btn:hover {
    background: rgba(192, 87, 70, 0.1);
    border-color: rgba(192, 87, 70, 0.45);
    color: #EAEAEA;
  }

  .toggle-btn.active {
    background: #C05746;
    border-color: #C05746;
    color: white;
    box-shadow: 0 4px 15px rgba(192, 87, 70, 0.2);
  }

  .toggle-icon {
    font-size: 1rem;
  }

  /* ── Search ──────────────────────────────────────────────── */
  .search-bar {
    position: relative;
    max-width: 420px;
    margin: 0 auto 1.5rem;
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.9rem;
    pointer-events: none;
  }

  .search-bar input {
    width: 100%;
    padding: 0.7rem 2.5rem 0.7rem 2.6rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(13, 27, 42, 0.6);
    color: #EAEAEA;
    font-size: 0.88rem;
    outline: none;
    transition: border-color 0.2s ease;
    box-sizing: border-box;
  }

  .search-bar input::placeholder {
    color: #6E7891;
  }

  .search-bar input:focus {
    border-color: rgba(192, 87, 70, 0.5);
  }

  .search-clear {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #6E7891;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.2rem;
    transition: color 0.15s;
  }

  .search-clear:hover { color: #EAEAEA; }

  /* ── Filter Chips ────────────────────────────────────────── */
  .filter-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4rem;
    margin-bottom: 2.5rem;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.32rem 0.75rem;
    font-size: 0.78rem;
    font-weight: 500;
    color: #C9D1DC;
    background: rgba(192, 87, 70, 0.08);
    border: 1px solid rgba(192, 87, 70, 0.2);
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .chip:hover {
    background: rgba(192, 87, 70, 0.18);
    border-color: rgba(192, 87, 70, 0.45);
    color: #EAEAEA;
  }

  .chip.active {
    background: #C05746;
    border-color: #C05746;
    color: white;
  }

  .chip-icon {
    font-size: 0.8rem;
  }

  /* ── Controls Row ──────────────────────────────────────── */
  .controls-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .sort-buttons {
    display: flex;
    gap: 0.4rem;
  }

  .sort-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.7rem;
    font-size: 0.76rem;
    font-weight: 500;
    color: #C9D1DC;
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .sort-btn:hover {
    border-color: rgba(192, 87, 70, 0.35);
    color: #EAEAEA;
  }

  .sort-btn.active {
    background: rgba(192, 87, 70, 0.15);
    border-color: rgba(192, 87, 70, 0.5);
    color: #D88B7A;
    font-weight: 600;
  }

  .sort-icon {
    font-size: 0.8rem;
  }

  .book-count {
    font-size: 0.76rem;
    color: #6E7891;
    font-weight: 500;
  }

  /* ── See More ────────────────────────────────────────────── */
  .see-more-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .see-more-btn {
    background: rgba(192, 87, 70, 0.1);
    border: 1px solid rgba(192, 87, 70, 0.3);
    color: #C05746;
    padding: 0.65rem 2rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .see-more-btn:hover {
    background: rgba(192, 87, 70, 0.2);
    border-color: #C05746;
    transform: translateY(-2px);
  }

  .see-more-btn.collapsed {
    color: #ADB6C4;
    border-color: rgba(255, 255, 255, 0.1);
    background: transparent;
  }

  .see-more-btn.collapsed:hover {
    color: #EAEAEA;
    border-color: rgba(255, 255, 255, 0.2);
  }

  /* ── Books Grid ──────────────────────────────────────────── */
  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 640px) {
    .books-grid {
      grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .books-grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  /* ── Book Card ───────────────────────────────────────────── */
  .book-card {
    cursor: pointer;
    border-radius: 14px;
    overflow: hidden;
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.04);
    transition: all 0.25s ease;
    animation: cardIn 0.4s ease both;
    animation-delay: calc(var(--i, 0) * 40ms);
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .book-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(192, 87, 70, 0.25);
  }

  .book-card-cover {
    position: relative;
    aspect-ratio: 2 / 3;
    overflow: hidden;
  }

  .book-card-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .book-card:hover .book-card-cover img {
    transform: scale(1.06);
  }

  .book-card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(13, 27, 42, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .book-card:hover .book-card-overlay {
    opacity: 1;
  }

  .overlay-label {
    color: #EAEAEA;
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.5rem 1.1rem;
    border-radius: 999px;
    background: rgba(192, 87, 70, 0.85);
    backdrop-filter: blur(4px);
  }

  .book-card-body {
    padding: 0.6rem 0.65rem 0.75rem;
  }

  .book-card-title {
    font-size: 0.78rem;
    font-weight: 600;
    color: #EAEAEA;
    margin: 0 0 0.15rem 0;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .book-card-author {
    font-size: 0.7rem;
    color: #ADB6C4;
    margin: 0 0 0.4rem 0;
    font-style: italic;
  }

  .book-card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.4rem;
  }

  .book-card-rating {
    color: #FFD700;
    font-size: 0.72rem;
    letter-spacing: 0.5px;
  }

  .book-card-cat {
    font-size: 0.62rem;
    color: #6E7891;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .overlay-label {
    font-size: 0.72rem;
    padding: 0.35rem 0.8rem;
  }

  /* ── Empty State ─────────────────────────────────────────── */
  .empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem 1rem;
    color: #6E7891;
    font-size: 0.92rem;
  }

  /* ── Top Picks ───────────────────────────────────────────── */
  .top-picks {
    border-top: 1px solid rgba(192, 87, 70, 0.1);
    padding-top: 2rem;
  }

  .top-picks-header {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    margin-bottom: 1.2rem;
  }

  .top-picks-header h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #C05746;
    margin: 0;
  }

  .top-picks-badge {
    font-size: 0.72rem;
    font-weight: 600;
    color: #6E7891;
    background: rgba(13, 27, 42, 0.5);
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
  }

  .top-picks-scroll {
    display: flex;
    gap: 0.8rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    scrollbar-width: thin;
    scrollbar-color: rgba(192, 87, 70, 0.3) transparent;
  }

  .top-picks-scroll::-webkit-scrollbar {
    height: 4px;
  }

  .top-picks-scroll::-webkit-scrollbar-thumb {
    background: rgba(192, 87, 70, 0.3);
    border-radius: 10px;
  }

  .top-pick-card {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    padding: 0.5rem 0.9rem 0.5rem 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    color: inherit;
    font-family: inherit;
  }

  .top-pick-card:hover {
    background: rgba(192, 87, 70, 0.1);
    border-color: rgba(192, 87, 70, 0.3);
    transform: translateY(-2px);
  }

  .top-pick-card img {
    width: 36px;
    height: 54px;
    border-radius: 4px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .top-pick-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .top-pick-title {
    font-size: 0.8rem;
    font-weight: 600;
    color: #EAEAEA;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .top-pick-author {
    font-size: 0.72rem;
    color: #ADB6C4;
    font-style: italic;
  }

  .top-pick-stars {
    color: #FFD700;
    font-size: 0.72rem;
    flex-shrink: 0;
  }

  /* ═════════════════════════════════════════════════════════════
     ANALYSIS VIEW
     ═════════════════════════════════════════════════════════════ */

  .stats-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 640px) {
    .stats-row {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-card {
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 14px;
    padding: 1.2rem 1rem;
    text-align: center;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 800;
    color: #C05746;
    line-height: 1;
    margin-bottom: 0.4rem;
  }

  .stat-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #6E7891;
  }

  .charts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .charts-grid {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  .chart-card {
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 14px;
    padding: 1.2rem;
  }

  .chart-card-title {
    font-size: 0.82rem;
    font-weight: 700;
    color: #EAEAEA;
    margin: 0 0 1rem 0;
    letter-spacing: 0.02em;
  }

  .chart-wrap {
    position: relative;
    height: 220px;
  }

  .chart-wrap-doughnut {
    height: 260px;
  }

  /* ── Category Breakdown Bars ─────────────────────────────── */
  .category-breakdown {
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 14px;
    padding: 1.2rem;
  }

  .cat-bars {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .cat-bar-row {
    display: grid;
    grid-template-columns: 130px 1fr 24px;
    align-items: center;
    gap: 0.75rem;
  }

  .cat-bar-label {
    font-size: 0.78rem;
    color: #C9D1DC;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cat-bar-track {
    height: 8px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 999px;
    overflow: hidden;
  }

  .cat-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #C05746, #AD6A6C);
    border-radius: 999px;
    transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    min-width: 8px;
  }

  .cat-bar-count {
    font-size: 0.78rem;
    color: #6E7891;
    text-align: right;
    font-weight: 600;
  }

  /* ═════════════════════════════════════════════════════════════
     MODAL
     ═════════════════════════════════════════════════════════════ */

  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(8, 16, 28, 0.88);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .modal-backdrop.visible {
    opacity: 1;
    visibility: visible;
  }

  .modal-panel {
    background: #1b263b;
    border: 1px solid rgba(192, 87, 70, 0.15);
    border-radius: 16px;
    width: 100%;
    max-width: 780px;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    transform: translateY(24px) scale(0.97);
    opacity: 0;
    transition: all 0.3s ease;
    position: relative;
  }

  .modal-panel.open {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  .modal-panel::-webkit-scrollbar {
    width: 6px;
  }

  .modal-panel::-webkit-scrollbar-track {
    background: transparent;
  }

  .modal-panel::-webkit-scrollbar-thumb {
    background: rgba(192, 87, 70, 0.3);
    border-radius: 10px;
  }

  .modal-close {
    position: sticky;
    top: 1rem;
    float: right;
    margin: 1rem 1rem 0 0;
    z-index: 10;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: rgba(13, 27, 42, 0.7);
    color: #ADB6C4;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .modal-close:hover {
    background: rgba(192, 87, 70, 0.3);
    color: #EAEAEA;
  }

  .modal-inner {
    padding: 0.5rem 2rem 2rem;
  }

  .modal-header {
    display: flex;
    gap: 1.8rem;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
  }

  .modal-cover-wrap {
    flex-shrink: 0;
    width: 170px;
    aspect-ratio: 2 / 3;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }

  .modal-cover-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .modal-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }

  .modal-info h3 {
    font-size: 1.6rem;
    font-weight: 800;
    color: #EAEAEA;
    margin: 0 0 0.4rem 0;
    line-height: 1.2;
  }

  .modal-author {
    font-size: 1rem;
    color: #ADB6C4;
    font-style: italic;
    margin: 0 0 1rem 0;
  }

  .modal-meta {
    display: flex;
    gap: 0.6rem;
    margin-bottom: 0.8rem;
    flex-wrap: wrap;
  }

  .meta-badge {
    font-size: 0.74rem;
    font-weight: 600;
    color: #C9D1DC;
    background: rgba(13, 27, 42, 0.6);
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
  }

  .meta-badge.accent {
    background: rgba(192, 87, 70, 0.15);
    color: #D88B7A;
  }

  .modal-rating {
    color: #FFD700;
    font-size: 1.3rem;
    letter-spacing: 2px;
  }

  .modal-thoughts {
    margin-bottom: 2rem;
  }

  .modal-thoughts h4 {
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #6E7891;
    margin: 0 0 0.8rem 0;
  }

  .modal-thoughts p {
    font-size: 0.92rem;
    line-height: 1.7;
    color: #C9D1DC;
    margin: 0;
  }

  /* ── Recommendations ─────────────────────────────────────── */
  .modal-recs {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 1.5rem;
  }

  .modal-recs h4 {
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #6E7891;
    margin: 0 0 1rem 0;
  }

  .recs-scroll {
    display: flex;
    gap: 0.8rem;
    overflow-x: auto;
    padding-bottom: 0.4rem;
    scrollbar-width: thin;
    scrollbar-color: rgba(192, 87, 70, 0.3) transparent;
  }

  .recs-scroll::-webkit-scrollbar {
    height: 3px;
  }

  .recs-scroll::-webkit-scrollbar-thumb {
    background: rgba(192, 87, 70, 0.3);
    border-radius: 10px;
  }

  .rec-card {
    flex-shrink: 0;
    width: 110px;
    background: rgba(13, 27, 42, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    color: inherit;
    font-family: inherit;
    padding: 0;
  }

  .rec-card:hover {
    border-color: rgba(192, 87, 70, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  }

  .rec-card img {
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
  }

  .rec-card-body {
    padding: 0.55rem 0.6rem 0.65rem;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .rec-card-body h5 {
    font-size: 0.72rem;
    font-weight: 600;
    color: #EAEAEA;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
  }

  .rec-card-author {
    font-size: 0.65rem;
    color: #ADB6C4;
    font-style: italic;
  }

  .rec-card-rating {
    color: #FFD700;
    font-size: 0.65rem;
    letter-spacing: 0.3px;
  }

  /* ═════════════════════════════════════════════════════════════
     RESPONSIVE
     ═════════════════════════════════════════════════════════════ */

  @media (max-width: 768px) {
    .modal-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .modal-cover-wrap {
      width: 150px;
    }

    .modal-info {
      align-items: center;
    }

    .modal-meta {
      justify-content: center;
    }

    .recs-scroll {
      gap: 0.6rem;
    }

    .rec-card {
      width: 95px;
    }

    .cat-bar-row {
      grid-template-columns: 100px 1fr 24px;
    }
  }

  @media (max-width: 480px) {
    .modal-inner {
      padding: 0.5rem 1.2rem 1.5rem;
    }

    .modal-cover-wrap {
      width: 130px;
    }

    .modal-info h3 {
      font-size: 1.3rem;
    }

    .top-pick-title {
      max-width: 120px;
    }
  }
</style>