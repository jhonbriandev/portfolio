import "./Contact.css";

function Contact() {
  return (
    <section id="contacto" className="contact">
      <h2 className="section-title">Hablemos</h2>

      <p className="contact-text">
        Estoy buscando mi primera oportunidad como desarrollador Junior. Si mi
        perfil encaja con lo que buscas, escríbeme por cualquiera de estos
        medios:
      </p>

      <div className="contact-links">
        <a href="mailto:jhonbriandev1@gmail.com" className="btn btn-primary">
          jhonbriandev1@gmail.com
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/jhonbriandev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/jhon-brian-ac"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
