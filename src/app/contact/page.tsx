import {
  MessageSquare,
  Phone,
  ShieldCheck,
  ArrowRight,
  Send,
} from "lucide-react";

import "./page.css";

export default function Contact() {
  return (
    <main className="contact-page">

      <div className="contact-container">

        <div className="contact-grid">

          {/* LEFT SIDE - CONTACT FORM */}
          <section className="contact-form-card">

            <div className="contact-form-header">
              <h1>Message Our Experts</h1>

              <p>
                Expect a response within 2 hours for premium inquiries.
              </p>
            </div>

            <form className="contact-form">

              {/* Full Name + Mobile Number */}
              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="fullName">
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="mobileNumber">
                    Mobile Number
                  </label>

                  <input
                    id="mobileNumber"
                    type="tel"
                    placeholder="Mobile Number"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="contact-field contact-message-field">

                <label htmlFor="message">
                  How can we help?
                </label>

                <textarea
                  id="message"
                  placeholder="Please describe your request in detail..."
                />

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="contact-submit-button"
              >
                <span>Send Message</span>

                <Send
                  size={20}
                  strokeWidth={2}
                />
              </button>

            </form>

          </section>


          {/* RIGHT SIDE */}
          <section className="contact-options">

            <div className="contact-options-header">

              <h2>
                Other Ways to Connect
              </h2>

              <p>
                Prefer a more direct conversation? Our team is available 24/7.
              </p>

            </div>


            {/* WHATSAPP */}
            <div className="contact-option-card">

              <div className="contact-option-icon whatsapp-icon">

                <MessageSquare
                  size={25}
                  strokeWidth={2}
                />

              </div>

              <div className="contact-option-content">

                <h3>
                  WhatsApp Support
                </h3>

                <p>
                  For quick updates and photo sharing.
                </p>

              </div>

              <ArrowRight
                className="contact-option-arrow"
                size={22}
              />

            </div>


            {/* PHONE */}
            <div className="contact-option-card">

              <div className="contact-option-icon phone-icon">

                <Phone
                  size={23}
                  strokeWidth={2}
                />

              </div>

              <div className="contact-option-content">

                <h3>
                  Priority Phone Line
                </h3>

                <p>
                  +91 9848032519
                </p>

              </div>

              <ArrowRight
                className="contact-option-arrow"
                size={22}
              />

            </div>


            {/* SECURITY */}
            <div className="contact-security-card">

              <div className="contact-security-icon">

                <ShieldCheck
                  size={25}
                  strokeWidth={2}
                />

              </div>

              <div>

                <h3>
                  ELITE SECURITY PROTOCOL
                </h3>

                <p>
                  All communications are encrypted using enterprise-grade
                  256-bit SSL protocols for your safety.
                </p>

              </div>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}