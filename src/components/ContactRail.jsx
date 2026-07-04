const ContactRail = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <aside className="contact-rail" aria-label="Quick contact links">
      <a href="mailto:krunalgoswami13579@gmail.com" aria-label="Email Krunal Goswami">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
        <span>Email</span>
      </a>
      <a href="tel:+917575081705" aria-label="Call Krunal Goswami">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
        <span>Call</span>
      </a>
      <a href="https://www.linkedin.com/in/krunal-goswami" target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <path d="M2 9h4v12H2z" />
          <path d="M4 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
        <span>LinkedIn</span>
      </a>
      <a href={`${baseUrl}assets/Krunal_Goswami_Senior_Software.pdf`} target="_blank" rel="noreferrer" aria-label="Open resume PDF">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8" />
          <path d="M8 17h5" />
        </svg>
        <span>Resume</span>
      </a>
      <a href="#contact" aria-label="View location and contact details">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
          <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
        <span>Mumbai</span>
      </a>
    </aside>
  );
};

export default ContactRail;
