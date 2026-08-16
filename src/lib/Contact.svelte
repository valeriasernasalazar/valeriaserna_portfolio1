<script>
</script>

<form
  action="https://formspree.io/f/xaygwgdg"
  class="contact-card"
  method="POST"
>
  <p class="cc-intro">Let's connect. I'm always up for a chat about data, projects, or your favorite algorithm.</p>

  <div class="cc-fields">
    <div class="cc-field">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" required />
    </div>

    <div class="cc-field">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required />
      <span class="cc-hint">So I can get back to you.</span>
    </div>

    <div class="cc-field">
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="What's on your mind?" rows="5" required></textarea>
    </div>
  </div>

  <button type="submit" class="cc-submit">Send message</button>
</form>

<style>
  /* ═══════════════════════════════════════════════════════════
     CONTACT CARD
     ═══════════════════════════════════════════════════════════ */
  .contact-card {
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    background: rgba(13, 27, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-top: 2px solid rgba(192, 87, 70, 0.5);
    border-radius: 14px;
    padding: 2.2rem 2rem 2rem;
  }

  .cc-intro {
    text-align: center;
    color: #ADB6C4;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0 0 2rem;
  }

  /* ═══════════════════════════════════════════════════════════
     FIELDS
     ═══════════════════════════════════════════════════════════ */
  .cc-fields {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin-bottom: 2rem;
  }

  .cc-field {
    display: flex;
    flex-direction: column;
  }

  .cc-field label {
    color: #EAEAEA;
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 0.45rem;
    letter-spacing: 0.01em;
  }

  .cc-field input,
  .cc-field textarea {
    background: rgba(27, 38, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 9px;
    padding: 0.75rem 1rem;
    color: #EAEAEA;
    font-size: 0.92rem;
    font-family: inherit;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .cc-field input::placeholder,
  .cc-field textarea::placeholder {
    color: #6E7891;
  }

  .cc-field textarea {
    resize: vertical;
    min-height: 110px;
    line-height: 1.55;
  }

  .cc-field input:focus,
  .cc-field textarea:focus {
    outline: none;
    border-color: rgba(192, 87, 70, 0.5);
    box-shadow: 0 0 0 3px rgba(192, 87, 70, 0.1);
  }

  .cc-hint {
    font-size: 0.76rem;
    color: #6E7891;
    font-style: italic;
    margin-top: 0.35rem;
  }

  /* ═══════════════════════════════════════════════════════════
     SUBMIT
     ═══════════════════════════════════════════════════════════ */
  .cc-submit {
    display: block;
    width: 100%;
    max-width: 220px;
    margin: 0 auto;
    padding: 0.7rem 2rem;
    border: none;
    border-radius: 999px;
    background: #C05746;
    color: #fff;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  }

  .cc-submit:hover {
    background: #AD6A6C;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(192, 87, 70, 0.25);
  }

  /* ═══════════════════════════════════════════════════════════
     RESPONSIVE
     ═══════════════════════════════════════════════════════════ */
  @media (max-width: 640px) {
    .contact-card {
      padding: 1.6rem 1.2rem 1.5rem;
    }

    .cc-submit {
      max-width: none;
    }
  }
</style>