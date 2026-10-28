import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Connect your backend registration API here
    setMessage("Registration form submitted. Connect your register API.");
  };

  return (
    <>
      <div className="bg-register-page">
        <div className="bg-register-card">
          <div className="bg-register-image">
            <div className="bg-reg-flower">✿</div>
            <h1>Beauty <span>&</span> Glow</h1>
            <p className="bg-reg-tagline">
              BEAUTY · CARE · CONFIDENCE
            </p>
            <div className="bg-reg-line"></div>
            <h3>Join Our Community<br />And Start Your<br />Beauty Journey</h3>
            <p className="bg-reg-note">
              Look Good.<br />Feel Good.<br />Be Your Best ♡
            </p>
          </div>

          <div className="bg-register-content">
            <p className="bg-reg-small">YOUR BEAUTY JOURNEY STARTS HERE</p>
            <h2>Create Account</h2>
            <p className="bg-reg-description">
              Join us to book appointments, explore services and get beauty tips.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password (minimum 8 characters)"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={8}
                required
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={8}
                required
              />

              <label className="bg-reg-terms">
                <input type="checkbox" required />
                <span>
                  I agree to the <Link to="/terms">Terms & Conditions</Link>
                  {" "}and <Link to="/privacy">Privacy Policy</Link>.
                </span>
              </label>

              <button className="bg-reg-submit" type="submit">
                Register <span>→</span>
              </button>

              {message && <p className="bg-reg-message">{message}</p>}
            </form>


            <p className="bg-reg-switch">
              Already have an account?
              <Link to="/login"> Login here</Link>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .bg-register-page {
          min-height: 100vh;
          padding: 30px 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f3e9df;
          font-family: Arial, sans-serif;
          color: #35281f;
        }

        .bg-register-card {
          width: 100%;
          max-width: 1050px;
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          background: #fffaf4;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 15px 45px #513b281c;
        }

        .bg-register-image {
          min-height: 690px;
          padding: 45px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff8ed;
          background:
            linear-gradient(#29271966, #29271970),
            url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=85")
            center / cover;
        }

        .bg-reg-flower {
          font-size: 38px;
          color: #e5c795;
        }

        .bg-register-image h1 {
          font: 400 38px Georgia, serif;
          margin: 10px 0;
          text-align: center;
        }

        .bg-register-image h1 span {
          color: #e5c795;
        }

        .bg-reg-tagline {
          font-size: 10px;
          letter-spacing: 2px;
          text-align: center;
        }

        .bg-reg-line {
          width: 60px;
          height: 1px;
          background: #e5c795;
          margin: 25px 0;
        }

        .bg-register-image h3 {
          align-self: flex-start;
          font: 400 22px/1.5 Georgia, serif;
          margin-left: 5%;
        }

        .bg-reg-note {
          margin-top: auto;
          align-self: flex-start;
          font: italic 21px/1.5 Georgia, serif;
          color: #f1d9b6;
        }

        .bg-register-content {
          padding: 40px 45px;
          align-self: center;
        }

        .bg-reg-small {
          color: #7b825f;
          letter-spacing: 1.5px;
          font-size: 10px;
        }

        .bg-register-content h2 {
          font: 400 36px Georgia, serif;
          margin: 10px 0;
          color: #30231b;
        }

        .bg-reg-description {
          color: #756b62;
          line-height: 1.5;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .bg-register-content form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bg-register-content form > input {
          padding: 12px 14px;
          border: 1px solid #e0d2c4;
          border-radius: 9px;
          background: #fffaf5;
          font-size: 13px;
          outline: none;
        }

        .bg-register-content form > input:focus {
          border-color: #6c7854;
        }

        .bg-reg-terms {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          line-height: 1.6;
          color: #6a625a;
          margin: 5px 0;
        }

        .bg-reg-terms input {
          margin-top: 4px;
          accent-color: #6c7854;
          flex-shrink: 0;
        }

        .bg-reg-terms a,
        .bg-reg-switch a {
          color: #596645;
        }

        .bg-reg-submit {
          padding: 13px;
          border: none;
          border-radius: 30px;
          background: #6c7854;
          color: white;
          font: 17px Georgia, serif;
          cursor: pointer;
        }

        .bg-reg-submit:hover {
          background: #566442;
        }

        .bg-reg-submit span {
          margin-left: 8px;
        }

        .bg-reg-message {
          color: #596645;
          font-size: 12px;
          margin: 3px 0;
        }

        .bg-reg-or {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #8a8076;
          margin: 17px 0 12px;
          font-size: 12px;
        }

        .bg-reg-or::before,
        .bg-reg-or::after {
          content: "";
          height: 1px;
          background: #e3d7ca;
          flex: 1;
        }

        .bg-reg-google {
          width: 100%;
          padding: 11px;
          border: 1px solid #e1d4c7;
          border-radius: 9px;
          background: transparent;
          cursor: pointer;
          font-size: 13px;
          color: #51483f;
        }

        .bg-reg-google b {
          color: #4285f4;
          margin-right: 10px;
          font-size: 18px;
        }

        .bg-reg-switch {
          margin-top: 22px;
          text-align: center;
          color: #756b62;
          font-size: 12px;
        }

        @media (max-width: 700px) {
          .bg-register-card {
            grid-template-columns: 1fr;
          }

          .bg-register-image {
            min-height: 220px;
            padding: 25px;
          }

          .bg-register-image h3,
          .bg-reg-note {
            display: none;
          }

          .bg-reg-line {
            margin: 12px;
          }

          .bg-register-content {
            padding: 32px 24px;
          }
        }
      `}</style>
    </>
  );
}