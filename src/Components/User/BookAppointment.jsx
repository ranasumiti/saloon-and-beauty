import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function BookAppointment() {
  const location = useLocation();

  const passedService = location.state?.service;

  const [service, setService] = useState(
    typeof passedService === "string"
      ? passedService
      : passedService?.serviceName || passedService?.name || ""
  );

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  // Fetch Services From Backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError("");

        // Get login token from localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Please login first to load services.");
          setServices([]);
          return;
        }

        const response = await axios.post(
          "http://localhost:2000/api/service/all",
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        );

        console.log("All Services:", response.data);

        const serviceData = Array.isArray(response.data?.data)
          ? response.data.data
          : Array.isArray(response.data?.data?.services)
          ? response.data.data.services
          : Array.isArray(response.data?.services)
          ? response.data.services
          : [];

        console.log("Services List:", serviceData);

        // Display all services without status filter
        setServices(serviceData);

        // Automatically select passed service
        if (passedService) {
          const passedName =
            typeof passedService === "string"
              ? passedService
              : passedService?.serviceName ||
                passedService?.name ||
                "";

          const matchedService = serviceData.find(
            (item) => item.serviceName === passedName
          );

          if (matchedService) {
            setService(matchedService.serviceName);
          }
        }
      } catch (err) {
        console.error("Service fetch error:", err);

        setError(
          err.response?.data?.message ||
            "Unable to load services. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

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

        .booking-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
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

        .booking-loading,
        .booking-error,
        .booking-empty {
          padding: 18px;
          text-align: center;
          border-radius: 9px;
          font-size: 13px;
          grid-column: 1 / -1;
        }

        .booking-loading,
        .booking-empty {
          background: #f8eddd;
          color: #81766c;
        }

        .booking-error {
          background: #fff0ed;
          color: #a33b2b;
        }

        .service-duration {
          display: block;
          color: #81766c;
          font-size: 12px;
          margin-top: 5px;
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
          <p>
            Choose your treatment and enjoy a little time for yourself.
          </p>
        </div>

        <div className="booking-layout">
          {/* Service Section */}
          <section className="booking-section">
            <h2>Choose Your Service</h2>

            <p className="booking-subtitle">
              Select a service card to continue.
            </p>

            <div className="service-cards">
              {loading ? (
                <div className="booking-loading">
                  Loading services...
                </div>
              ) : error ? (
                <div className="booking-error">
                  {error}
                </div>
              ) : services.length === 0 ? (
                <div className="booking-empty">
                  No services are available right now.
                </div>
              ) : (
                services.map((item) => (
                  <button
                    type="button"
                    key={item._id || item.autoId || item.serviceName}
                    className={
                      service === item.serviceName
                        ? "service-card selected"
                        : "service-card"
                    }
                    onClick={() => {
                      setService(item.serviceName);
                      setSuccess(false);
                    }}
                  >
                    <span className="service-icon">✦</span>

                    <h3>{item.serviceName}</h3>

                    <span className="service-price">
                      ₹{Number(item.price || 0).toLocaleString("en-IN")}
                    </span>

                    <span className="service-duration">
                      {item.duration
                        ? `${item.duration} minutes`
                        : ""}
                    </span>

                    <span className="selected-label">
                      {service === item.serviceName
                        ? "✓ Selected"
                        : "Select service"}
                    </span>
                  </button>
                ))
              )}
            </div>
          </section>

          {/* Booking Form */}
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
                <label htmlFor="booking-date">
                  Appointment Date *
                </label>

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
                <label htmlFor="booking-time">
                  Appointment Time *
                </label>

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
                <label htmlFor="booking-phone">
                  Phone Number *
                </label>

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

              {/* Booking Summary */}
              <div className="booking-summary">
                <span>
                  {service || "No service selected"}
                </span>

                <strong>
                  ₹
                  {Number(
                    services.find(
                      (item) => item.serviceName === service
                    )?.price || 0
                  ).toLocaleString("en-IN")}
                </strong>
              </div>

              <button
                className="booking-button"
                type="submit"
                disabled={loading || services.length === 0}
              >
                Book Appointment
              </button>

              <p className="booking-note">
                Service details are loaded from your backend.
                Appointment submission is not connected yet.
              </p>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}