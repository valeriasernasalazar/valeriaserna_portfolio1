<script>
  import { onMount } from "svelte";
  import { base } from '$app/paths';
</script>

<form
  action="https://formspree.io/f/xaygwgdg"
  class="contact-form"
  target="_top"
  method="POST"
>
  <div class="form-header">
    <p>Let's connect! I'm always up for a chat about data, projects, or your favorite algorithm.</p>
  </div>
  
  <div class="form-fields">
    <div class="form-field">
      <label for="name">Your Name</label>
      <input type="text" id="name" name="name" required />
    </div>
    
    <div class="form-field">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
      <p class="field-description">This will help me respond to your query via email.</p>
    </div>
    
    <div class="form-field">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <p class="field-description">What would you like to discuss?</p>
    </div>
  </div>
  
  <div class="form-footer">
    <button type="submit" class="submit-btn">
      <span>Submit</span>
    </button>
  </div>
</form>

<style>
  /* Contact Form Styles */
  .contact-form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background: rgba(13, 27, 42, 0.7);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(192, 87, 70, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .contact-form:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  }
  
  .form-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .form-header h2 {
    color: #C05746;
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
  
  .form-header p {
    color: #ADB6C4;
    font-size: 1.1rem;
    line-height: 1.5;
  }
  
  .form-fields {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .form-field {
    display: flex;
    flex-direction: column;
  }
  
  .form-field label {
    color: #EAEAEA;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-family: var(--font-family-display, "Poppins", system-ui, sans-serif);
  }
  
  .form-field input,
  .form-field textarea {
    background: rgba(27, 38, 59, 0.8);
    border: 1px solid rgba(192, 87, 70, 0.3);
    border-radius: 8px;
    padding: 0.8rem 1rem;
    color: #EAEAEA;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .form-field input {
    height: 3rem;
  }
  
  .form-field textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  .form-field input:focus,
  .form-field textarea:focus {
    outline: none;
    border-color: #C05746;
    box-shadow: 0 0 0 2px rgba(192, 87, 70, 0.2);
  }
  
  .field-description {
    color: #ADB6C4;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    font-style: italic;
  }
  
  .form-footer {
    display: flex;
    justify-content: center;
  }
  
  .submit-btn {
    background: #C05746;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 0.9rem 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
  }
  
  .submit-btn:hover {
    background: #AD6A6C;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(192, 87, 70, 0.3);
  }
  
  /* Animation effect for input fields */
  @keyframes focusAnimation {
    0% { border-color: rgba(192, 87, 70, 0.3); }
    50% { border-color: rgba(192, 87, 70, 0.7); }
    100% { border-color: rgba(192, 87, 70, 0.3); }
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .contact-form {
      padding: 1.5rem;
    }
    
    .form-header h2 {
      font-size: 1.8rem;

    }
    
    .form-header p {
      font-size: 1rem;
    }
    
    .submit-btn {
      width: 100%;
    }
  }
</style>