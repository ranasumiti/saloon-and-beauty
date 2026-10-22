
import { useState } from "react";

export default function BookAppointment() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const services = [
    { name: "Facial Treatment", price: 799, icon: "✧" },
    { name: "Makeup", price: 1499, icon: "♡" },
    { name: "Hair Styling", price: 999, icon: "❋" },
    { name: "Nail Care", price: 499, icon: "✿" },
    { name: "Bridal Makeup", price: 4999, icon: "♕" },
    { name: "Hair Spa", price: 1299, icon: "❀" },
  ];

  return (
    <>
      <style>{`
        .booking-page {
          background: #faf5ed;
          min-height: 100vh;
          padding: 35px 6%;
          color: #382b20;
          font-family: inherit;
        }

        .booking-title {
          text-align: center;
          margin-bottom: 35px;
        }

        .booking-title span {
          color: #a77943;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 600;
        }

        .booking-title h1 {
          font-family: Georgia, serif;
          font-size: 42px;
          font-weight: 500;
          margin: 12px 0;
        }

        .booking-title p {
          color: #81766c;
          font-size: 14px;
        }

        .booking-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 25px;
          max-width: 1150px;
          margin: auto;
          align-items: start;
        }

        .booking-section,
        .booking-form {
          background: #fffdf9;
          border: 1px solid #eadbc9;
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 8px 25px #5d422010;
        }

        .booking-section h2,
        .booking-form h2 {
          font-family: Georgia, serif;
          font-weight: 500;
          font-size: 25px;
          margin: 0 0 8px;
        }

        .booking-subtitle {
          color: #81766c;
          font-size: 13px;
          margin-bottom: 22px;
        }

        .service-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .service-card {
          padding: 22px 15px;
          border: 1px solid #eadbc9;
          border-radius: 13px;
          background: #fffaf3;
          cursor: pointer;
          text-align: left;
          color: #382b20;
          transition: .2s;
        }

        .service-card:hover {
          border-color: #b78143;
          transform: translateY(-3px);
        }

        .service-card.selected {
          border: 2px solid #b78143;
          background: #f6ead9;
        }

        .service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          border-radius: 50%;
          background: #efe0ca;
          color: #87531f;
          font-size: 23px;
          margin-bottom: 15px;
        }

        .service-card h3 {
          font-size: 15px;
          margin: 0 0 10px;
          font-weight: 600;
        }

        .service-price {
          color: #87531f;
          font-size: 17px;
          font-weight: 600;
        }

        .selected-label {
          display: block;
          color: #87531f;
          font-size: 11px;
          margin-top: 9px;
          min-height: 14px;
        }

        .booking-field {
          margin-bottom: 17px;
        }

        .booking-field label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .booking-field input,
        .booking-field select {
          width: 100%;
          box-sizing: border-box;
          padding: 12px;
          border: 1px solid #eadbc9;
          border-radius: 8px;
          outline: none;
          background: #fffefa;
          color: #382b20;
          font-family: inherit;
          font-size: 13px;
        }

        .booking-field input:focus,
        .booking-field select:focus {
          border-color: #b78143;
          box-shadow: 0 0 0 3px #b781431a;
        }

        .booking-summary {
          background: #f8eddd;
          border-radius: 9px;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin: 20px 0;
          font-size: 13px;
        }

        .booking-summary strong {
          color: #87531f;
          font-size: 17px;
        }

        .booking-button {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 8px;
          background: #b78143;
          color: white;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: .2s;
        }

        .booking-button:hover {
          background: #87531f;
        }

        .booking-success {
          background: #eff7eb;
          border: 1px solid #c8dfc2;
          border-radius: 9px;
          color: #315c2b;
          padding: 14px;
          margin-bottom: 20px;
          font-size: 13px;
          line-height: 1.6;
        }

        .booking-note {
          color: #81766c;
          font-size: 11px;
          text-align: center;
          line-height: 1.6;
          margin-top: 13px;
        }

        @media (max-width: 800px) {
          .booking-layout {
            grid-template-columns: 1fr;
          }

          .booking-page {
            padding: 25px 15px;
          }

          .booking-title h1 {
            font-size: 34px;
          }
        }

        @media (max-width: 420px) {
          .service-cards {
            grid-template-columns: 1fr;
          }

          .booking-section,
          .booking-form {
            padding: 18px;
          }
        }
      `}</style>

      <main className="booking-page">
        <div className="booking-title">
          <span>BEAUTY & GLOW SALON</span>
          <h1>Book Your Appointment</h1>
          <p>Choose your treatment and enjoy a little time for yourself.</p>
        </div>

        <div className="booking-layout">
          <section className="booking-section">
            <h2>Choose Your Service</h2>
            <p className="booking-subtitle">
              Select a service card to continue.
            </p>

            <div className="service-cards">
              {services.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  className={
                    service === item.name
                      ? "service-card selected"
                      : "service-card"
                  }
                  onClick={() => {
                    setService(item.name);
                    setSuccess(false);
                  }}
                >
                  <span className="service-icon">{item.icon}</span>
                  <h3>{item.name}</h3>
                  <span className="service-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                  <span className="selected-label">
                    {service === item.name ? "✓ Selected" : "Select service"}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="booking-form">
            <h2>Your Details</h2>
            <p className="booking-subtitle">
              Complete the form to continue.
            </p>

            {success && (
              <div className="booking-success" role="status">
                <strong>✓ Form submitted successfully!</strong>
                <br />
                This is a demo. Your appointment has not been saved or
                sent to the salon.
              </div>
            )}

            <form
              onSubmit={(event) => {
                event.preventDefault();

                if (!service) {
                  alert("Please select a service card first.");
                  return;
                }

                if (!/^[6-9][0-9]{9}$/.test(phone)) {
                  alert("Enter a valid 10-digit Indian mobile number.");
                  return;
                }

                setSuccess(true);
              }}
            >
              <div className="booking-field">
                <label htmlFor="booking-date">Appointment Date *</label>
                <input
                  id="booking-date"
                  type="date"
                  value={date}
                  min={new Date().toLocaleDateString("en-CA")}
                  onChange={(event) => {
                    setDate(event.target.value);
                    setSuccess(false);
                  }}
                  required
                />
              </div>

              <div className="booking-field">
                <label htmlFor="booking-time">Appointment Time *</label>
                <select
                  id="booking-time"
                  value={time}
                  onChange={(event) => {
                    setTime(event.target.value);
                    setSuccess(false);
                  }}
                  required
                >
                  <option value="">Choose time</option>
                  {[
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "01:00 PM",
                    "02:00 PM",
                    "03:00 PM",
                    "04:00 PM",
                    "05:00 PM",
                  ].map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-field">
                <label htmlFor="booking-name">Full Name *</label>
                <input
                  id="booking-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setSuccess(false);
                  }}
                  required
                />
              </div>

              <div className="booking-field">
                <label htmlFor="booking-phone">Phone Number *</label>
                <input
                  id="booking-phone"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={phone}
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  onChange={(event) => {
                    setPhone(event.target.value);
                    setSuccess(false);
                  }}
                  required
                />
              </div>

              <div className="booking-summary">
                <span>
                  {service || "No service selected"}
                </span>
                <strong>
                  ₹
                  {services.find((item) => item.name === service)?.price || 0}
                </strong>
              </div>

              <button className="booking-button" type="submit">
                Book Appointment
              </button>

              <p className="booking-note">
                Frontend only. No backend or database is connected.
                Submitting this form does not create a real booking.
              </p>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
