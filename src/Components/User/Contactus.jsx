export default function ContactUs() {
  return (
    <>
      <section className="bg-contact" id="contact">
        <div className="bg-contact-heading">
          <div className="bg-contact-eyebrow">
            <span></span>
            GET IN TOUCH
            <span></span>
          </div>

          <h1>We'd Love to <span>Hear From You</span></h1>

          <p>
            Have a question about our beauty services or academy courses?
            Get in touch with us. We're always happy to help you.
          </p>
        </div>

        <div className="bg-contact-container">
          <div className="bg-contact-info">
            <div className="bg-contact-info-heading">
              <h2>Let's Talk Beauty</h2>
              <p>
                Whether you want to book an appointment or learn a new
                beauty skill, our team is here for you.
              </p>
            </div>

            <div className="bg-contact-item">
              <div className="bg-contact-icon">⌖</div>
              <div>
                <h3>Visit Our Salon</h3>
                <p>Beauty & Glow Salon & Academy</p>
                <p>Enter your salon address here</p>
              </div>
            </div>

            <div className="bg-contact-item">
              <div className="bg-contact-icon">☎</div>
              <div>
                <h3>Call Us</h3>
                <p>Enter your contact number</p>
              </div>
            </div>

            <div className="bg-contact-item">
              <div className="bg-contact-icon">✉</div>
              <div>
                <h3>Email Us</h3>
                <p>Enter your business email</p>
              </div>
            </div>

            <div className="bg-contact-note">
              <span>✧</span>
              <p>
                Your beauty journey starts with a conversation.
                We look forward to welcoming you!
              </p>
            </div>
          </div>

          <div className="bg-contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <p className="bg-contact-form-subtitle">
              Fill in your details and tell us how we can help.
            </p>

            <form
              className="bg-contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you for contacting Beauty & Glow!");
              }}
            >
              <div className="bg-contact-form-row">
                <div className="bg-contact-field">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="bg-contact-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>

              <div className="bg-contact-field">
                <label htmlFor="contact-subject">I'm Interested In</label>
                <select
                  id="contact-subject"
                  name="subject"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="salon">Salon Services</option>
                  <option value="makeup">Bridal Makeup</option>
                  <option value="skincare">Skin & Facial Care</option>
                  <option value="hair">Hair Styling</option>
                  <option value="nails">Nail Art</option>
                  <option value="courses">Beauty Academy Courses</option>
                  <option value="other">Other Enquiry</option>
                </select>
              </div>

              <div className="bg-contact-field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="bg-contact-button">
                Send Message <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .bg-contact {
          --contact-ivory: #fffaf5;
          --contact-cream: #f7eee7;
          --contact-gold: #b89563;
          --contact-brown: #503b38;
          --contact-muted: #806b66;

          padding: 70px 6% 85px;
          background: linear-gradient(
            135deg,
            var(--contact-ivory),
            var(--contact-cream)
          );
          color: var(--contact-brown);
          font-family: Arial, sans-serif;
        }

        .bg-contact-heading {
          max-width: 760px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .bg-contact-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 16px;
          color: var(--contact-gold);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .bg-contact-eyebrow span {
          width: 38px;
          height: 1px;
          background: var(--contact-gold);
        }

        .bg-contact-heading h1 {
          margin: 0 0 17px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 4vw, 49px);
          font-weight: 400;
          line-height: 1.25;
        }

        .bg-contact-heading h1 span {
          color: var(--contact-gold);
          font-style: italic;
        }

        .bg-contact-heading > p {
          max-width: 650px;
          margin: auto;
          color: var(--contact-muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .bg-contact-container {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          max-width: 1150px;
          margin: auto;
          background: #fffdf9;
          border: 1px solid #eee1d6;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(80, 59, 56, 0.07);
        }

        .bg-contact-info {
          padding: 42px 32px;
          background: #f2e6da;
        }

        .bg-contact-info-heading h2,
        .bg-contact-form-wrapper h2 {
          margin: 0 0 13px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 29px;
          font-weight: 400;
          line-height: 1.3;
          color: var(--contact-brown);
        }

        .bg-contact-info-heading > p,
        .bg-contact-form-subtitle {
          margin: 0;
          color: var(--contact-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .bg-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-top: 30px;
        }

        .bg-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border: 1px solid #dfc8ac;
          border-radius: 50%;
          background: #fffaf5;
          color: var(--contact-gold);
          font-size: 23px;
        }

        .bg-contact-item h3 {
          margin: 1px 0 7px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          font-weight: 400;
        }

        .bg-contact-item p {
          margin: 4px 0;
          color: var(--contact-muted);
          font-size: 13px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .bg-contact-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 35px;
          padding-top: 22px;
          border-top: 1px solid #dfcdb9;
        }

        .bg-contact-note span {
          color: var(--contact-gold);
          font-size: 25px;
        }

        .bg-contact-note p {
          margin: 3px 0 0;
          color: var(--contact-muted);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
          font-style: italic;
          line-height: 1.7;
        }

        .bg-contact-form-wrapper {
          padding: 42px 38px;
        }

        .bg-contact-form-subtitle {
          margin-bottom: 28px;
        }

        .bg-contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bg-contact-form-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 17px;
        }

        .bg-contact-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
          min-width: 0;
        }

        .bg-contact-field label {
          color: var(--contact-brown);
          font-size: 13px;
          font-weight: 600;
        }

        .bg-contact-field input,
        .bg-contact-field select,
        .bg-contact-field textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 13px 14px;
          border: 1px solid #e5d8ce;
          border-radius: 3px;
          outline: none;
          background: #fffdf9;
          color: var(--contact-brown);
          font-family: Arial, sans-serif;
          font-size: 13px;
          transition: border-color 0.25s ease;
        }

        .bg-contact-field input,
        .bg-contact-field select {
          min-height: 46px;
        }

        .bg-contact-field textarea {
          resize: vertical;
          min-height: 125px;
          line-height: 1.7;
        }

        .bg-contact-field input:focus,
        .bg-contact-field select:focus,
        .bg-contact-field textarea:focus {
          border-color: var(--contact-gold);
        }

        .bg-contact-field input::placeholder,
        .bg-contact-field textarea::placeholder {
          color: #a39188;
        }

        .bg-contact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          min-height: 48px;
          padding: 12px 22px;
          border: 1px solid var(--contact-gold);
          border-radius: 4px;
          background: var(--contact-gold);
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .bg-contact-button:hover {
          background: var(--contact-brown);
          border-color: var(--contact-brown);
        }

        .bg-contact-button span {
          font-size: 20px;
          transition: transform 0.2s ease;
        }

        .bg-contact-button:hover span {
          transform: translateX(4px);
        }

        @media (max-width: 850px) {
          .bg-contact-container {
            grid-template-columns: 1fr;
          }

          .bg-contact-info,
          .bg-contact-form-wrapper {
            padding: 32px 28px;
          }
        }

        @media (max-width: 560px) {
          .bg-contact {
            padding: 48px 5% 55px;
          }

          .bg-contact-heading {
            margin-bottom: 30px;
          }

          .bg-contact-heading h1 {
            font-size: 34px;
          }

          .bg-contact-heading > p {
            font-size: 14px;
          }

          .bg-contact-info,
          .bg-contact-form-wrapper {
            padding: 27px 20px;
          }

          .bg-contact-info-heading h2,
          .bg-contact-form-wrapper h2 {
            font-size: 26px;
          }

          .bg-contact-form-row {
            grid-template-columns: 1fr;
          }

          .bg-contact-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}