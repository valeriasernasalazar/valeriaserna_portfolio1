<script>
    import { onMount } from "svelte";
    import { base } from '$app/paths';
  
    // Book data - based on your Goodreads export
    const books = [
        {
        id: 30659,
        title: "Meditations",
        author: "Marcus Aurelius",
        rating: 5,
        coverImg: `${base}/book-covers/meditations.jpg`,
        yearPublished: 2006,
        category: "Philosophy",
        thoughts: "Meditations is one of those books I keep coming back to. Marcus Aurelius’ stoic wisdom really helps me put things into perspective, especially when I’m dealing with challenges in my personal or professional life. His reflections on staying calm, focused, and true to your values resonate deeply with me. It’s not just philosophy – it’s a practical guide to life. Every time I read it, I feel like I’ve learned something new that helps me stay grounded. It’s one of those books that stays with you long after you finish it."
      },
      {
        id: 1087293,
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        rating: 5,
        coverImg: `${base}/book-covers/el-hombre.jpg`,
        yearPublished: 2004,
        category: "Psychology",
        thoughts: "Man’s Search for Meaning is a book that completely shifted how I view life’s struggles. Frankl’s exploration of finding meaning even in the most painful of circumstances really hit home for me. It’s not just a book about surviving hardship; it’s about understanding that we have the power to choose how we respond to it. His reflections on suffering and purpose are profound, and they’ve stuck with me long after reading it. If you're looking for a book that makes you rethink what’s important in life, this is it."
      },
      {
        id: 43317482,
        title: "In the Dream House",
        author: "Carmen Maria Machado",
        rating: 5,
        coverImg: `${base}/book-covers/dream-house.jpg`,
        yearPublished: 2019,
        category: "Memoir",
        thoughts: "In the Dream House is a hauntingly beautiful memoir that left me thinking about it for weeks after finishing it. Machado’s storytelling is so unique – she explores a same-sex abusive relationship in a way that’s not often seen in literature. The way she blends memoir with this deeply personal, yet universal, experience is incredibly moving. It’s raw, emotional, and written in a style that feels like a work of art. I especially appreciated how she brought to light an aspect of abuse that isn’t often discussed – the complexities of same-sex relationships and the dynamics of power and control within them. It’s a must-read for anyone interested in the complexities of love, abuse, and identity."
      },
      {
        id: 19189061,
        title: "When Things Fall Apart",
        author: "Pema Chödrön",
        rating: 5,
        coverImg: `${base}/book-covers/cuando-todo.jpg`,
        yearPublished: 2011,
        category: "Philosophy",
        thoughts: "When Things Fall Apart has been my go-to book during tough times, and it’s actually how I started meditating. Pema Chödrön’s teachings on embracing uncertainty and finding peace amidst chaos really resonated with me. Her approach to Buddhist principles – especially the idea of sitting with discomfort rather than avoiding it – gave me a whole new perspective on life’s struggles. This book didn’t just change how I think about hardship; it also motivated me to start meditating as a way to find more balance and peace in my daily life. It’s been a source of inner peace for me whenever things feel overwhelming."
      },
      {
        id: 41104077,
        title: "Invisible Women",
        author: "Caroline Criado Pérez",
        rating: 4,
        coverImg: `${base}/book-covers/invisible-women.jpg`,
        yearPublished: 2019,
        category: "Data Science",
        thoughts: "Invisible Women was eye-opening, especially as a data scientist. The book highlights the subtle biases in data collection and analysis that impact women’s lives in ways I hadn’t fully realized before. As someone in tech, it really made me aware of how often women’s experiences are overlooked in research and design. Perez does an excellent job of explaining these biases and their consequences, making it an essential read for anyone working in data, tech, or even social sciences. While I found the subject matter compelling, I wish it had gone even deeper into the technical aspects of the data, but it’s still an incredibly important book that everyone should read."
      },
      {
        id: 60811826,
        title: "I Who Have Never Known Men",
        author: "Jacqueline Harpman",
        rating: 4,
        coverImg: `${base}/book-covers/never-known.jpg`,
        yearPublished: 2022,
        category: "Fiction",
        thoughts: "The dystopian world Harpman creates is unsettling in a way that makes you feel both trapped and detached from the very human experiences we take for granted. In this world, the main character and a group of women are isolated in a kind of prison-like environment with no knowledge of the outside world, and no freedom to live as they choose. The lack of human connection and the strict boundaries placed on their lives felt suffocating, but what really struck me was the way the story explored the concept of being human—of longing for connection, love, and freedom. There’s this heartbreaking moment in the book when the main character realizes, 'I was forced to acknowledge too late, much too late, that I too had loved, that I was capable of suffering, and that I was human after all.' That line stayed with me for days. It made me think about how easy it is to forget our humanity when we’re constantly surrounded by the comforts and distractions of everyday life, and how devastating it must be to have it stripped away. The book’s dystopia isn’t just a physical space—it’s a profound emotional isolation. It’s quiet, it’s intense, and it’s a reminder of how deeply we need love and connection to truly feel alive."
      },
      {
        id: 49552,
        title: "The Stranger",
        author: "Albert Camus",
        rating: 4,
        coverImg: `${base}/book-covers/stranger.jpg`,
        yearPublished: 1989,
        category: "Philosophy",
        thoughts: "Camus’ existential exploration is just as powerful every time I read it. The main character, Meursault, is this strangely detached figure who doesn't conform to society’s expectations about how one should grieve, love, or even live life in general. The book is a brilliant dive into the idea of the absurd—how life is inherently meaningless, yet we still search for meaning and structure in it. I remember the first time I read it and felt that piercing realization: the world is indifferent, and yet we go on making choices. Meursault's famous indifference toward his mother’s death and his eventual crime—it’s jarring, but it’s also a raw depiction of how people live without a prescribed purpose. It’s not the kind of book that’s meant to be comforting or give you answers, but it definitely makes you question everything, even your own existence. The way Camus presents this stark, detached view of life still resonates with me. It’s a book that makes you reflect on what really matters—what’s real and what’s not, and how much control we really have over the choices we make."
      },
      {
        id: 40672036,
        title: "Digital Minimalism",
        author: "Cal Newport",
        rating: 4,
        coverImg: `${base}/book-covers/digital-min.jpg`,
        yearPublished: 2019,
        category: "Self Improvement",
        thoughts: "Digital Minimalism really hit home for me. In a world where we’re constantly bombarded by notifications, apps, and social media, it’s easy to lose sight of what actually matters. Newport’s approach to digital consumption felt like a wake-up call. I’ve always known that I spent too much time on my phone, but I never fully grasped the effect it was having on my attention and overall well-being. Newport doesn’t just tell you to put your phone down and ‘detox.’ Instead, he offers a framework for how to prioritize what’s truly important and intentionally cut out the digital noise. His focus on creating more meaningful digital habits instead of simply avoiding technology resonated with me deeply. It made me realize how easy it is to fill your time with mindless scrolling and how much more fulfilling it can be to engage in activities that actually add value to your life. I started applying some of his strategies, like scheduling time for deep work and decluttering my digital spaces, and I already feel more in control of my time. It's definitely been a shift, but a really necessary one."
      },
      {
        id: 53239311,
        title: "The Happiest Man on Earth",
        author: "Eddie Jaku",
        rating: 4,
        coverImg: `${base}/book-covers/happiest-man.jpg`,
        yearPublished: 2020,
        category: "Memoir",
        thoughts: "Eddie Jaku’s story is not just about surviving the horrors of the Holocaust; it’s about choosing to live with joy despite it all. I was deeply moved by his resilience and his message of choosing happiness, no matter the circumstances. His journey from unimaginable suffering to finding peace and contentment is inspiring. What stood out to me most was his philosophy: happiness isn’t something that just happens to you—it’s something you choose. That idea really stuck with me. It made me reflect on how much of our mindset we have control over, even when life throws curveballs. Eddie’s story is full of pain, yes, but it’s also full of hope, gratitude, and the decision to never let the darkness win. It’s a reminder that no matter how much we suffer, we can always choose joy and love."
      },
      {
        id: 35133922,
        title: "Educated",
        author: "Tara Westover",
        rating: 4,
        coverImg: `${base}/book-covers/educated.jpg`,
        yearPublished: 2018,
        category: "Memoir",
        thoughts: "Tara Westover’s memoir about growing up in a strict and isolated family, without access to formal education, blew my mind. Her journey of self-discovery and her relentless pursuit of knowledge, despite the odds, felt so raw and real. What really resonated with me was her struggle to reconcile her desire for education with her loyalty to her family. There’s this tension throughout the book, this idea that education is a path to freedom, but it also means leaving behind parts of yourself and your past. I felt for Tara as she navigated the complexities of family loyalty and personal growth. Her resilience is extraordinary, and her story is a testament to the transformative power of education. I honestly couldn’t put it down, even though I was often shocked by the challenges she faced. It made me reflect on how much we take education for granted, and how lucky we are to have access to it in the ways Tara fought for."
      },
      {
        id: 25899336,
        title: "When Breath Becomes Air",
        author: "Paul Kalanithi",
        rating: 4,
        coverImg: `${base}/book-covers/breath-air.jpg`,
        yearPublished: 2016,
        category: "Memoir",
        thoughts: "This book is Paul Kalanithi’s reflection on life, mortality, and the search for meaning—written as he faced his own terminal cancer diagnosis. As a neurosurgeon, Paul was deeply involved in helping others face death, but when he himself became the patient, everything changed. The way he reflects on the human experience—on how life’s meaning is not something we just find, but something we create through our choices and relationships—struck a chord with me. I remember a particular moment in the book where he writes about his struggle with reconciling his love for medicine and his imminent death. It’s raw and it’s beautiful. The vulnerability with which he writes about his own fear and acceptance of death made me think a lot about how we approach our own lives and the things we take for granted. The book left me with a deep sense of gratitude for the time we have and a reminder of how important it is to live with purpose."

      },

      {
        id: 51484920,
        title: "Almond",
        author: "Sohn Won-Pyung",
        rating: 4,
        coverImg: `${base}/book-covers/almendra.jpg`,
        yearPublished: 2020,
        category: "Fiction",
        thoughts: "Almond is about a young boy named Yunjae, who is born with alexithymia—a condition that makes it difficult for him to feel or express emotions. I was immediately drawn to Yunjae’s journey, as it explores his struggle to understand his own feelings and connect with others. The portrayal of his emotional isolation was so well done, and I found myself reflecting on how we all navigate emotions differently. The book touches on themes of loneliness, empathy, and how we relate to the world around us. What made it stand out even more was how the author blended these heavy topics with moments of warmth and unexpected humor. Yunjae’s growth over the course of the book was really moving, and it made me realize how important it is to understand and express our emotions, even if it’s hard. It’s a thought-provoking and unique read that gives you a lot to think about."
      },

      {
        id: 28257707,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        rating: 4,
        coverImg: `${base}/book-covers/subtle-art.jpg`,
        yearPublished: 2016,
        category: "Self Improvement",
        thoughts: "I’ll be honest, I wasn’t sure what to expect from this book, but it ended up being a real eye-opener. The Subtle Art of Not Giving a F*ck isn’t your typical self-help book. It’s brutally honest, a bit sarcastic, and it challenges the idea that we can or should care about everything. Mark Manson flips the script on the idea of positivity and success, arguing that we all have a limited number of f*cks to give, so we need to be careful about where we invest our energy. The part that really stuck with me is when he talks about how we often obsess over things that aren’t even important to us, like societal expectations or superficial success. It was a much-needed reminder that it’s okay to let go of things that don’t truly matter. Instead of pretending that everything will work out if we just think positively, Manson encourages us to embrace the uncomfortable truths of life, face our flaws, and prioritize what really brings value to our lives. It’s not just a self-help book; it’s more like a wake-up call to stop wasting time on things that drain us."
      },
      {
        id: 37570546,
        title: "Maybe You Should Talk to Someone",
        author: "Lori Gottlieb",
        rating: 4,
        coverImg: `${base}/book-covers/maybe-talk.jpg`,
        yearPublished: 2019,
        category: "Psychology",
        thoughts: "I wasn’t sure what to expect from a book about therapy, but it ended up being so much more than that. Lori Gottlieb takes us behind the scenes of her work as a therapist while also sharing her own personal journey of seeking therapy. It’s a perfect mix of vulnerability, humor, and deep introspection. I loved how Gottlieb brings humor into what could be a heavy subject, making it more relatable and approachable. The part that hit me hardest was how she describes the therapy process—not just as a way to ‘fix’ someone, but as a space for self-discovery. It also made me realize how therapy isn't just for people with major life crises—it’s for anyone who wants to understand themselves better. It actually impulsed me to go to therapy myself. I found myself laughing and even tearing up at times. It’s such an honest look at the human condition, showing how we all carry our own burdens, and how talking about them can bring healing. I’ve thought about therapy in a completely new way after reading this book."
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
        thoughts: "Crying in H Mart was a touching read, though I felt a bit mixed about it overall. The way Michelle Zauner captures grief, identity, and the bond with her mother was beautifully raw and heartfelt. I could relate to the way food becomes such a strong emotional anchor to family and culture. The sections about her mother's illness were deeply emotional, and there were moments when I was completely moved. However, I felt like the pacing slowed down in certain parts, and I struggled to connect fully with some of the more introspective moments. That said, the writing is undeniably powerful, and Zauner's exploration of her Korean-American identity gave me a lot to think about, especially how we carry our heritage with us in both big and small ways. It was definitely an emotional journey, and while it didn’t fully hit all the marks for me, I still think it’s a significant and reflective read."
      },
      {
        id: 7074248,
        title: "El arte de ser feliz",
        author: "Arthur Schopenhauer",
        rating: 3,
        coverImg: `${base}/book-covers/arte-feliz.jpg`,
        yearPublished: 2000,
        category: "Philosophy",
        thoughts: "Schopenhauer’s views on happiness are quite pessimistic, which made it a little tough for me to fully embrace his philosophy. He focuses a lot on the idea that suffering is inevitable and that happiness is fleeting, which felt a bit heavy at times. Despite that, there were some valuable insights, especially when it came to understanding human nature and the importance of perspective in finding contentment. The book made me reflect on the ways we pursue happiness, often chasing external things, while Schopenhauer suggests it’s more about adjusting our inner mindset. I didn’t fully agree with everything he said, but I still appreciated the intellectual challenge it presented. It wasn’t my favorite philosophy book, but it did spark some deep reflection about how we approach life’s ups and downs."
      },
      {
        id: 59364173,
        title: "I'm Glad My Mom Died",
        author: "Jennette McCurdy",
        rating: 3,
        coverImg: `${base}/book-covers/mom-died.jpg`,
        yearPublished: 2022,
        category: "Memoir",
        thoughts: "Having grown up watching iCarly, it was pretty heart-breaking to hear what Jennette McCurdy went through behind the scenes. I’m Glad My Mom Died is a raw, honest, and surprisingly funny memoir. The title definitely grabbed my attention, but as I read, I was struck by Jennette's bravery in sharing such a personal and painful story. She dives deep into her complicated relationship with her mother and how it shaped her life, career, and sense of self. The abuse and manipulation she endured were tough to read about, but what stood out was her self-awareness and humor, which made this incredibly relatable. While it was a difficult read, it really made me reflect on how family dynamics can impact mental health and the importance of breaking free from toxic relationships. This isn’t the type of book I usually go for, but I found it incredibly powerful and eye-opening."
      },
      {
        id: 28186015,
        title: "Weapons of Math Destruction",
        author: "Cathy O'Neil",
        rating: 2,
        coverImg: `${base}/book-covers/weapons-math.jpg`,
        yearPublished: 2016,
        category: "Data Science",
        thoughts: "Weapons of Math Destruction focuses on how big data, predictive models, and machine learning can perpetuate inequality and bias. I was hoping for more technical detail since it was written by a data scientist, but I found it a bit of a middle ground. It felt too technical for someone who doesn’t know how these systems work, yet too simplistic for those of us who do. The message is vital, but I wanted more in-depth examples and solutions on how to mitigate these issues. It’s an important read for anyone working in tech, but it left me wanting more substance."
      },
      {
        id: 22738563,
        title: "We Should All Be Feminists",
        author: "Chimamanda Ngozi Adichie",
        rating: 2,
        coverImg: `${base}/book-covers/feminists.jpg`,
        yearPublished: 2014,
        category: "Social Science",
        thoughts: "It’s a short and insightful introduction to feminism, which I appreciate, but I couldn’t help but wish for more depth. I understand the need for accessibility, but it felt like it only scratched the surface. I was hoping for a richer exploration of the complexities behind contemporary feminist thought. Still, it’s a good starting point if you’re new to the topic."
      },
      {
        id: 53568397,
        title: "The Midnight Library",
        author: "Matt Haig",
        rating: 2,
        coverImg: `${base}/book-covers/midnight.jpg`,
        yearPublished: 2020,
        category: "Fiction",
        thoughts: "The idea of parallel lives and exploring regret had so much potential, but honestly, I found the execution a bit too simplistic. The premise was intriguing, and I did feel some emotional connection, but the ending really let me down. The author attributes the protagonist’s depression to her view on life, which just doesn’t sit right with me. Depression is so much more complex than simply how someone sees the world, and I felt like the book oversimplified that. It had a lot of promise, but ultimately it stayed too surface-level for my taste."
      },
      {
        id: 176443093,
        title: "Sociopath: A Memoir",
        author: "Patric Gagne",
        rating: 1,
        coverImg: `${base}/book-covers/sociopath.jpg`,
        yearPublished: 2024,
        category: "Memoir",
        thoughts: "I was really drawn to the subject matter, but unfortunately, this one didn’t hit the mark for me. The writing style just didn’t resonate with me, and I struggled to connect with the author’s perspective. It felt like it lacked depth and emotional nuance, which left me disappointed considering the topic’s potential."
      },
        {
    id: 30119,
    title: "Many Lives, Many Masters",
    author: "Brian L. Weiss",
    rating: 1,
    coverImg: `${base}/book-covers/many-lives.jpg`,
    yearPublished: 1988,
    category: "Psychology",
    thoughts: "I had high hopes for this one, but it just didn’t do it for me. The concepts seemed too unsubstantiated, and I felt the writing style was a bit dry and disengaging. While some people might appreciate the spiritual exploration, I personally prefer a more grounded, evidence-based approach to psychology. It just didn’t connect with me in the way I expected."
    },
    ];
  
    // Categories for filtering
    const categories = ["All", "Philosophy", "Fiction", "Memoir", "Psychology", "Data Science", "Self Improvement", "Social Science"];
    
    let activeCategory = "All";
    let filteredBooks = [...books];
    let showAnalysis = false;
    let selectedBook = null;
    let showBookDetails = false;
    
    // For carousel functionality
    let currentIndex = 0;
    let booksPerPage = 3; // Default, will be updated based on screen size
    
    // Filter books by category
    function filterBooks(category) {
      activeCategory = category;
      if (category === "All") {
        filteredBooks = [...books];
      } else {
        filteredBooks = books.filter(book => book.category === category);
      }
      currentIndex = 0; // Reset to first page when filtering
    }
    
    // Show book details
    function showDetails(book) {
      selectedBook = book;
      showBookDetails = true;
    }
    
    // Close book details modal
    function closeBookModal() {
      showBookDetails = false;
      setTimeout(() => {
        selectedBook = null;
      }, 300); // Wait for transition
    }
    
    // Carousel navigation
    function nextPage() {
      if (currentIndex + booksPerPage < filteredBooks.length) {
        currentIndex += booksPerPage;
      }
    }
    
    function prevPage() {
      if (currentIndex - booksPerPage >= 0) {
        currentIndex -= booksPerPage;
      }
    }
    
    // Toggle analysis view
    function toggleAnalysis() {
      showAnalysis = !showAnalysis;
    }
    
    // Helper to render star rating
    function renderStars(rating) {
      return Array(5).fill().map((_, i) => i < rating ? '★' : '☆').join('');
    }
    
    // Update books per page based on screen size
    function updateBooksPerPage() {
      if (window.innerWidth < 768) {
        booksPerPage = 1;
      } else if (window.innerWidth < 1024) {
        booksPerPage = 2;
      } else {
        booksPerPage = 3;
      }
    }
    
    // Set up responsive behavior
    onMount(() => {
      updateBooksPerPage();
      window.addEventListener('resize', updateBooksPerPage);
      
      // Handle escape key for modal
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && showBookDetails) {
          closeBookModal();
        }
      });
      
      // Clean up
      return () => {
        window.removeEventListener('resize', updateBooksPerPage);
        window.removeEventListener('keydown', null);
      };
    });
  </script>
  
  <section id="books">
    <p class="p1">Books that have influenced my thinking and expanded my horizons</p>
    
    <!-- View toggle -->
    <div class="view-toggle">
      <button class={!showAnalysis ? 'active' : ''} on:click={() => showAnalysis = false}>
        <span class="icon">📚</span> Bookshelf
      </button>
      <button class={showAnalysis ? 'active' : ''} on:click={() => showAnalysis = true}>
        <span class="icon">📊</span> Reading Analysis
      </button>
    </div>
    
    {#if !showAnalysis}
      <!-- Bookshelf view -->
      <div class="bookshelf">
        <!-- Filter controls -->
        <div class="filter-controls">
          {#each categories as category}
            <button 
              class="filter-btn {activeCategory === category ? 'active' : ''}" 
              on:click={() => filterBooks(category)}
            >
              {category}
            </button>
          {/each}
        </div>
        
        <!-- Books carousel -->
        <div class="carousel-container">
          <button class="carousel-btn prev" on:click={prevPage} disabled={currentIndex === 0}>
            &#10094;
          </button>
          
          <div class="books-carousel">
            {#each filteredBooks.slice(currentIndex, currentIndex + booksPerPage) as book, i}
              <div class="book-card" style="--delay: {i * 0.1}s">
                <div class="book-cover" on:click={() => showDetails(book)}>
                  <div class="book-cover-inner">
                    <img 
                      src={book.coverImg} 
                      alt={`${book.title} by ${book.author}`} 
                      on:error={(e) => e.target.src = `${base}/book-covers/placeholder.jpg`}
                    />
                    <div class="book-hover-info">
                      <div class="book-rating">{renderStars(book.rating)}</div>
                      <p class="book-thoughts">{book.thoughts.length > 100 ? book.thoughts.slice(0, 100) + '...' : book.thoughts}</p>
                      <button class="read-more-btn">Read More</button>
                    </div>
                  </div>
                </div>
                <div class="book-info">
                  <h4 class="book-title">{book.title}</h4>
                  <p class="book-author">by {book.author}</p>
                  <div class="book-rating-small">{renderStars(book.rating)}</div>
                </div>
              </div>
            {/each}
            
            <!-- Empty placeholders if needed -->
            {#if filteredBooks.slice(currentIndex, currentIndex + booksPerPage).length < booksPerPage}
              {#each Array(booksPerPage - filteredBooks.slice(currentIndex, currentIndex + booksPerPage).length) as _, i}
                <div class="book-card empty"></div>
              {/each}
            {/if}
          </div>
          
          <button 
            class="carousel-btn next" 
            on:click={nextPage} 
            disabled={currentIndex + booksPerPage >= filteredBooks.length}
          >
            &#10095;
          </button>
        </div>
        
        <!-- Pagination indicators -->
        <div class="carousel-indicators">
          {#each Array(Math.ceil(filteredBooks.length / booksPerPage)) as _, i}
            <button 
              class="indicator {i === Math.floor(currentIndex / booksPerPage) ? 'active' : ''}"
              on:click={() => currentIndex = i * booksPerPage}
            ></button>
          {/each}
        </div>
        
        <!-- Favorites section -->
        <div class="favorites-section">
          <h3>My Top Picks</h3>
          <div class="favorites-grid">
            {#each books.filter(book => book.rating === 5) as favorite}
              <div class="favorite-pill" on:click={() => showDetails(favorite)}>
                <img 
                  src={favorite.coverImg} 
                  alt={favorite.title}
                  on:error={(e) => e.target.src = `${base}/book-covers/placeholder.jpg`}
                />
                <span>{favorite.title}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {:else}
      <!-- Reading Analysis view -->
      <div class="reading-analysis">
        <div class="analysis-placeholder">
          <h3>Reading Patterns Analysis</h3>
          <p>Since June 2023 I've read:</p>
          
          <div class="analysis-teaser">
            <div class="teaser-stat">
              <div class="stat-number">{books.filter(book => book.rating === 5).length}</div>
              <div class="stat-label">5-Star Books</div>
            </div>
            
            <div class="teaser-stat">
              <div class="stat-number">{books.length}</div>
              <div class="stat-label">Books Read</div>
            </div>
            
            <div class="teaser-stat">
              <div class="stat-number">{Math.round(books.reduce((acc, book) => acc + book.rating, 0) / books.length * 10) / 10}</div>
              <div class="stat-label">Avg. Rating</div>
            </div>
            
            <div class="teaser-stat">
              <div class="stat-number">{new Set(books.map(book => book.category)).size}</div>
              <div class="stat-label">Categories</div>
            </div>
          </div>
          
          <div class="data-viz-placeholder">
            <div class="chart-placeholder">
              <div class="chart-bar" style="height: 30%"></div>
              <div class="chart-bar" style="height: 80%"></div>
              <div class="chart-bar" style="height: 45%"></div>
              <div class="chart-bar" style="height: 60%"></div>
              <div class="chart-bar" style="height: 90%"></div>
              <div class="chart-bar" style="height: 40%"></div>
              <div class="chart-bar" style="height: 75%"></div>
            </div>
          </div>
        </div>
      </div>
    {/if}
    
    <!-- Book details modal -->
    {#if showBookDetails && selectedBook}
      <div class="book-modal {showBookDetails ? 'active' : ''}" on:click={(e) => {
        if (e.target.classList.contains('book-modal')) closeBookModal();
      }}>
        <div class="modal-content">
          <button class="modal-close" on:click={closeBookModal}>×</button>
          
          <div class="modal-body">
            <div class="modal-book-header">
              <div class="modal-book-cover">
                <img 
                  src={selectedBook.coverImg} 
                  alt={`${selectedBook.title} cover`}
                  on:error={(e) => e.target.src = `${base}/book-covers/placeholder.jpg`}
                />
              </div>
              
              <div class="modal-book-info">
                <h3>{selectedBook.title}</h3>
                <p class="modal-book-author">{selectedBook.author}</p>
                <div class="modal-book-meta">
                  <span class="year">{selectedBook.yearPublished}</span>
                  <span class="category">{selectedBook.category}</span>
                </div>
                <div class="modal-book-rating">{renderStars(selectedBook.rating)}</div>
              </div>
            </div>
            
            <div class="modal-book-thoughts">
              <h4>My Thoughts</h4>
              <p>{selectedBook.thoughts}</p>
            </div>
            
            <!-- Book recommendations -->
            <div class="book-recommendations">
              <h4>You might also like</h4>
              <div class="recommendations-grid">
                {#each books.filter(book => 
                  book.id !== selectedBook.id && 
                  (book.category === selectedBook.category || book.rating === selectedBook.rating)
                ).slice(0, 3) as recommendation}
                  <div class="recommendation-card" on:click={() => {
                    selectedBook = recommendation;
                  }}>
                    <img 
                      src={recommendation.coverImg} 
                      alt={recommendation.title}
                      on:error={(e) => e.target.src = `${base}/book-covers/placeholder.jpg`}
                    />
                    <div class="recommendation-info">
                      <h5>{recommendation.title}</h5>
                      <div class="rec-rating">{renderStars(recommendation.rating)}</div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </section>
  
  <style>
    /* Books Section Styles */
    #books {
      background: rgba(27, 38, 59, 0.95);
      padding: 4rem 2rem;
      min-height: 100vh;
      margin-top: 100px;
    }
    
    /* View Toggle */
    .view-toggle {
      display: flex;
      justify-content: center;
      margin: 2rem 0;
      gap: 1rem;
    }
    
    .view-toggle button {
      background: rgba(192, 87, 70, 0.2);
      border: none;
      color: #EAEAEA;
      padding: 0.75rem 1.5rem;
      border-radius: 30px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .view-toggle button.active {
      background: #C05746;
      transform: scale(1.05);
    }
    
    .view-toggle .icon {
      font-size: 1.2rem;
    }
    
    /* Filter Controls */
    .filter-controls {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 0.5rem;
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
    }
    
    .filter-btn:hover,
    .filter-btn.active {
      background: #C05746;
      color: white;
    }
    
    /* Books Carousel */
    .carousel-container {
      position: relative;
      display: flex;
      align-items: center;
      margin: 3rem 0;
    }
    
    .books-carousel {
      display: flex;
      gap: 2rem;
      width: 100%;
      justify-content: center;
    }
    
    .carousel-btn {
      background: rgba(13, 27, 42, 0.8);
      border: none;
      color: #EAEAEA;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.5rem;
      transition: all 0.3s ease;
      z-index: 10;
    }
    
    .carousel-btn:hover:not(:disabled) {
      background: #C05746;
      transform: scale(1.1);
    }
    
    .carousel-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    
    /* Book Cards */
    .book-card {
      width: 220px;
      transition: transform 0.5s ease;
      animation: fadeIn 0.5s forwards;
      animation-delay: var(--delay);
      opacity: 0;
    }

    .p1{
        margin-top:-20vh;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .book-card.empty {
      background: transparent;
      box-shadow: none;
    }
    
    .book-cover {
    position: relative;
    height: 330px; /* Increased from 300px */
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    }

    .book-cover:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    }
    
    .book-cover-inner {
      position: relative;
      height: 100%;
      width: 100%;
    }
    
    .book-cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .book-hover-info {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(13, 27, 42, 0.9);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      overflow: hidden;
    }
    
    .book-cover:hover .book-hover-info {
      opacity: 1;
    }
    
    .book-rating {
      color: #FFD700;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .book-thoughts {
      color: #EAEAEA;
      font-size: 0.9rem;
      line-height: 1.5;
      text-align: center;
      overflow: hidden;
      margin-bottom: 1rem;
    }
    
    .read-more-btn {
      background: #C05746;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
      font-size: 0.8rem;
    }
    
    .read-more-btn:hover {
      background: #AD6A6C;
      transform: scale(1.1);
    }
    
    .book-info {
      padding: 1rem 0;
      text-align: center;
    }
    
    .book-title {
      font-size: 1.1rem;
      color: #EAEAEA;
      margin-bottom: 0.3rem;
      font-weight: 600;
    }
    
    .book-author {
      font-size: 0.9rem;
      color: #ADB6C4;
      margin-bottom: 0.5rem;
      font-style: italic;
    }
    
    .book-rating-small {
      color: #FFD700;
      font-size: 0.9rem;
    }
    
    /* Carousel Indicators */
    .carousel-indicators {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(192, 87, 70, 0.3);
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;
    }
    
    .indicator.active {
      background: #C05746;
      transform: scale(1.2);
    }
    
    /* Favorites Section */
    .favorites-section {
      margin-top: 4rem;
      border-top: 1px solid rgba(173, 106, 108, 0.2);
      padding-top: 2rem;
    }
    
    .favorites-section h3 {
      font-size: 1.8rem;
      color: #C05746;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .favorites-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
    
    .favorite-pill {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(13, 27, 42, 0.7);
      padding: 0.5rem 1rem;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .favorite-pill:hover {
      background: rgba(192, 87, 70, 0.3);
      transform: translateY(-3px);
    }
    
    .favorite-pill img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .favorite-pill span {
      font-size: 0.9rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 150px;
    }
    
    /* Book Modal */
    .book-modal {
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
    }
    
    .book-modal.active {
      opacity: 1;
      visibility: visible;
    }
    
    .modal-content {
      background: #1b263b;
      width: 90%;
      max-width: 800px;
      max-height: 80vh;
      overflow-y: auto;
      border-radius: 12px;
      padding: 2rem;
      position: relative;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
      transform: translateY(-30px);
      transition: all 0.3s ease;
    }
    
    .book-modal.active .modal-content {
      transform: translateY(0);
    }
    
    .modal-content::-webkit-scrollbar {
      width: 8px;
    }
    
    .modal-content::-webkit-scrollbar-track {
      background: rgba(13, 27, 42, 0.5);
      border-radius: 10px;
    }
    
    .modal-content::-webkit-scrollbar-thumb {
      background: rgba(192, 87, 70, 0.5);
      border-radius: 10px;
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
      z-index: 10;
    }
    
    .modal-close:hover {
      color: #C05746;
    }
    
    .modal-book-header {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .modal-book-cover {
    flex-shrink: 0;
    width: 200px;
    height: 330px; /* Increased from 300px */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    overflow: hidden;
    }
    
    .modal-book-cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .modal-book-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .modal-book-info h3 {
      font-size: 2rem;
      color: #C05746;
      margin-bottom: 0.5rem;
    }
    
    .modal-book-author {
      font-size: 1.2rem;
      color: #ADB6C4;
      margin-bottom: 1rem;
      font-style: italic;
    }
    
    .modal-book-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    .modal-book-meta span {
      background: rgba(192, 87, 70, 0.2);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
    
    .modal-book-rating {
      color: #FFD700;
      font-size: 1.5rem;
    }
    
    .modal-book-thoughts {
      margin-bottom: 2rem;
    }
    
    .modal-book-thoughts h4 {
      font-size: 1.3rem;
      color: #EAEAEA;
      margin-bottom: 1rem;
    }
    
    .modal-book-thoughts p {
      line-height: 1.6;
      color: #EAEAEA;
    }
    
    /* Book Recommendations */
    .book-recommendations {
      border-top: 1px solid rgba(173, 106, 108, 0.2);
      padding-top: 1.5rem;
    }
    
    .book-recommendations h4 {
      font-size: 1.3rem;
      color: #EAEAEA;
      margin-bottom: 1rem;
    }
    
    .recommendations-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    
    .recommendation-card {
      background: rgba(13, 27, 42, 0.7);
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .recommendation-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    
    .recommendation-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    
    .recommendation-info {
      padding: 1rem;
    }
    
    .recommendation-info h5 {
      font-size: 0.9rem;
      color: #EAEAEA;
      margin-bottom: 0.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .rec-rating {
      color: #FFD700;
      font-size: 0.8rem;
    }
    
    /* Reading Analysis Styles */
    .reading-analysis {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
    }
    
    .analysis-placeholder {
      background: rgba(13, 27, 42, 0.7);
      border-radius: 12px;
      padding: 2rem;
      width: 100%;
      max-width: 800px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
    
    .analysis-placeholder h3 {
      font-size: 1.8rem;
      color: #C05746;
      margin-bottom: 1rem;
    }
    
    .analysis-placeholder p {
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    
    .analysis-teaser {
      display: flex;
      justify-content: space-around;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .teaser-stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .stat-number {
      font-size: 2.5rem;
      font-weight: bold;
      color: #C05746;
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      font-size: 0.9rem;
      color: #ADB6C4;
    }
    
    .data-viz-placeholder {
      margin-top: 2rem;
    }
    
    .chart-placeholder {
      height: 200px;
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }
    
    .chart-bar {
      width: 10%;
      background: linear-gradient(to top, #C05746, #AD6A6C);
      border-radius: 5px 5px 0 0;
      transition: height 0.8s ease;
    }
    
    .viz-caption {
      font-size: 0.9rem;
      color: #ADB6C4;
      font-style: italic;
    }
    
    /* Media Queries */
    @media (max-width: 768px) {
      .modal-book-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      .recommendations-grid {
        grid-template-columns: 1fr;
      }
      
      .books-carousel {
        gap: 1rem;
      }
      
      .book-card {
        width: 180px;
      }
      
      .book-cover {
        height: 280px;
      }
      
      .carousel-btn {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
      }
    }
    
    @media (max-width: 480px) {
      .book-card {
        width: 160px;
      }
      
      .book-cover {
        height: 250px;
      }
      
      .favorite-pill span {
        max-width: 100px;
      }
      
      .analysis-teaser {
        flex-direction: column;
        gap: 2rem;
      }
    }

    </style>