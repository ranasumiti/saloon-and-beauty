
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {  addappointment, AllServices } from "../../services/AdminService";
import { toast } from "react-toastify";

function BookAppointment() {
const nav = useNavigate();
  const location = useLocation();
  const passedService = location.state?.service;

  const [services, setServices] = useState([]);

  const [service, setService] = useState(
    typeof passedService === "string"
      ? passedService
      : passedService?.serviceName || passedService?.name || ""
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);

  // Fetch all services
  useEffect(() => {

    const fetchServices = async () => {
      try {
        const res = await AllServices ({});

        if (res.data.success) {
          setServices(res.data.data || []);

          if (passedService) {
            const passedName =
              typeof passedService === "string"
                ? passedService
                : passedService?.serviceName || passedService?.name;

            const matched = res.data.data.find(
              (item) => item.serviceName === passedName
            );

            if (matched) {
              setService(matched.serviceName);
            }
          }
        }

      } catch (error) {
        console.log(error);
        toast.error("Unable to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();

  }, []);

  // Add appointment


  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!service) {
      toast.error("Please select a service");
      return;
    }

    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      toast.error("Enter valid 10 digit phone number");
      return;
    }

    const selectedService = services.find(
      (item) => item.serviceName === service
    );

    if (!selectedService) {
      toast.error("Invalid service selected");
      return;
    }

    try {

      setBooking(true);

      const data = {
        name,
        phone,
        serviceId: selectedService._id,
        serviceName: selectedService.serviceName,
        date,
        time
      };

      const res = await addappointment(data);

      if (res.data.success) {

        toast.success("Appointment booked successfully!");
       

        setName("");
        setPhone("");
        setService("");
        setDate("");
        setTime("");

         nav("/")

      } else {
        toast.error(res.data.message || "Appointment not added");
      }

    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Something went wrong!"
      );

    } finally {
      setBooking(false);
    }
  };

  return (
    <>
      <style>{`
        .booking-page {
          background: #faf5ed;
          min-height: 100vh;
          padding: 35px 6%;
          color: #382b20;
          font-family: Arial, sans-serif;
        }

        .booking-title {
          text-align: center;
          margin-bottom: 35px;
        }

        .booking-title span {
          color: #a77943;
          font-size: 12px;
          letter-spacing: 3px;
        }

        .booking-title h1 {
          font-family: Georgia, serif;
          font-size: 38px;
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
          padding: 20px 15px;
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
          display: block;
          font-size: 24px;
          margin-bottom: 12px;
          color: #87531f;
        }

        .service-card h3 {
          font-size: 15px;
          margin: 0 0 10px;
        }

        .service-price {
          color: #87531f;
          font-size: 17px;
          font-weight: 600;
        }

        .service-duration {
          display: block;
          color: #81766c;
          font-size: 12px;
          margin-top: 5px;
        }

        .selected-label {
          display: block;
          color: #87531f;
          font-size: 11px;
          margin-top: 9px;
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
          font-size: 13px;
        }

        .booking-field input:focus,
        .booking-field select:focus {
          border-color: #b78143;
        }

        .booking-summary {
          background: #f8eddd;
          border-radius: 9px;
          padding: 15px;
          display: flex;
          justify-content: space-between;
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
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .booking-button:hover {
          background: #87531f;
        }

        .booking-button:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        .booking-empty {
          padding: 20px;
          text-align: center;
          background: #f8eddd;
          color: #81766c;
          border-radius: 8px;
          grid-column: 1 / -1;
        }

        @media (max-width: 800px) {
          .booking-layout {
            grid-template-columns: 1fr;
          }

          .booking-page {
            padding: 25px 15px;
          }

          .booking-title h1 {
            font-size: 32px;
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

          {/* Services */}
          <section className="booking-section">

            <h2>Choose Your Service</h2>

            <p className="booking-subtitle">
              Select a service card to continue.
            </p>

            <div className="service-cards">

              {loading ? (
                <div className="booking-empty">
                  Loading services...
                </div>
              ) : services.length === 0 ? (
                <div className="booking-empty">
                  No services available.
                </div>
              ) : (
                services.map((item) => (

                  <button
                    type="button"
                    key={item._id}
                    className={
                      service === item.serviceName
                        ? "service-card selected"
                        : "service-card"
                    }
                    onClick={() => setService(item.serviceName)}
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

            <form onSubmit={handleSubmit}>

              <div className="booking-field">
                <label>Appointment Date *</label>

                <input
                  type="date"
                  value={date}
                  min={new Date().toLocaleDateString("en-CA")}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="booking-field">
                <label>Appointment Time *</label>

                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
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
                    "05:00 PM"
                  ].map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-field">
                <label>Full Name *</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="booking-field">
                <label>Phone Number *</label>

                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={phone}
                  maxLength={10}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="[6-9][0-9]{9}"
                  required
                />
              </div>

              <div className="booking-summary">
                <span>{service || "No service selected"}</span>

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
                disabled={booking || loading || services.length === 0}
              >
                {booking ? "Booking..." : "Book Appointment"}
              </button>

            </form>

          </section>

        </div>
      </main>
    </>
  );
}

export default BookAppointment;
