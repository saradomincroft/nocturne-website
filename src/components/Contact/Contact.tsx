
import './Contact.css';

export default function Contact() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <section className="nocturne-contact-screen">
      <p className="nocturne-kicker">
        BOOKINGS · COLLABS · ENQUIRIES
      </p>

      <h1>
        GET IN<br />
        TOUCH<span>.</span>
      </h1>

      <div className="nocturne-contact-links">
        {contactEmail && (
          <a href={`mailto:${contactEmail}`}>
            EMAIL <span>{contactEmail}</span> ↗
          </a>
        )}

        <a
          href="https://www.instagram.com/nocturneravers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM <span>@nocturneravers</span> ↗
        </a>
      </div>
    </section>
  );
}
