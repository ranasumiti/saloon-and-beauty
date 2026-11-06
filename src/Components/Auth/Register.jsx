
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Register } from "../../services/AuthService";

export default function Registers() {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("3");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 10) {
      setMessage("Password must contain at least 10 characters");
      toast.error("Password must contain at least 10 characters");
      return;
    }

    try {
      const payload = {
        email,
        phone,
        name,
        password,
        userType: Number(userType),
      };

      const res = await Register(payload);
      console.log("REGISTER RESPONSE:", res);

      const responseData = res.data ?? res;

      if (
        responseData.success === true ||
        responseData.status === true
      ) {
        toast.success("Registration successful!");
        setTimeout(() => nav("/login"), 1000);
      } else {
        toast.error(responseData.message || "Registration unsuccessful");
      }
    } catch (err) {
      console.log("ERROR:", err);
      console.log("BACKEND ERROR:", err.response?.data);
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <div className="bg-register-page">
        <div className="bg-register-card">

          {/* Left Image Section */}
          <div className="bg-register-image">
            <div className="bg-reg-flower">✿</div>

            <h1>
              Beauty <span>&</span> Glow
            </h1>

            <p className="bg-reg-tagline">
              BEAUTY · CARE · CONFIDENCE
            </p>

            <div className="bg-reg-line"></div>

            <h3>
              Join Our Community<br />
              And Start Your<br />
              Beauty Journey
            </h3>

            <p className="bg-reg-note">
              Look Good.<br />
              Feel Good.<br />
              Be Your Best ♡
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-register-content">
            <p className="bg-reg-small">
              YOUR BEAUTY JOURNEY STARTS HERE
            </p>

            <h2>Create Account</h2>

            <p className="bg-reg-description">
              Join us to book appointments, explore services and get beauty tips.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />

              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                required
              />

              <input
                type="password"
                placeholder="Password (minimum 10 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={10}
                autoComplete="new-password"
                required
              />

              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={10}
                autoComplete="new-password"
                required
              />

              {/* Register As - directly below Confirm Password */}
              <div className="bg-role-section">
                <h3 className="bg-role-heading">Register As</h3>

                <p className="bg-role-subtitle">
                  Choose your account type
                </p>

                <div className="bg-role-grid">

                  <button
                    type="button"
                    className={`bg-role-card ${
                      userType === "3" ? "selected" : ""
                    }`}
                    onClick={() => setUserType("3")}
                  >
                    <span className="bg-role-icon">♕</span>
                    <strong>Student</strong>
                    <small>Learn beauty skills</small>
                    {userType === "3" && (
                      <span className="bg-role-check">✓</span>
                    )}
                  </button>

                  <button
                    type="button"
                    className={`bg-role-card ${
                      userType === "4" ? "selected" : ""
                    }`}
                    onClick={() => setUserType("4")}
                  >
                    <span className="bg-role-icon">✦</span>
                    <strong>Beautician</strong>
                    <small>Teach and create</small>
                    {userType === "4" && (
                      <span className="bg-role-check">✓</span>
                    )}
                  </button>

                  <button
                    type="button"
                    className={`bg-role-card ${
                      userType === "2" ? "selected" : ""
                    }`}
                    onClick={() => setUserType("2")}
                  >
                    <span className="bg-role-icon">♡</span>
                    <strong>User</strong>
                    <small>Book beauty services</small>
                    {userType === "2" && (
                      <span className="bg-role-check">✓</span>
                    )}
                  </button>

                </div>
              </div>

              {/* Terms & Conditions */}
              <label className="bg-reg-terms">
                <input type="checkbox" required />

                <span>
                  I agree to the{" "}
                  <Link to="/terms">Terms & Conditions</Link>
                  {" "}and{" "}
                  <Link to="/privacy">Privacy Policy</Link>.
                </span>
              </label>

              <button className="bg-reg-submit" type="submit">
                Register <span>→</span>
              </button>

              {message && (
                <p className="bg-reg-message">{message}</p>
              )}
            </form>

            <div className="bg-reg-or">
              <span>OR</span>
            </div>

            <button
              className="bg-reg-google"
              type="button"
              onClick={() =>
                setMessage("Google registration is not connected yet.")
              }
            >
              <b>G</b> Continue with Google
            </button>

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
          background: #F8F1E8;
          font-family: Arial, sans-serif;
          color: #4A342A;
        }

        .bg-register-card {
          width: 100%;
          max-width: 1050px;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          background: #FFFDF9;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 15px 45px #4A342A1A;
        }

        .bg-register-image {
          min-height: 690px;
          padding: 45px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #FFFDF9;
          background:
            linear-gradient(#3B281E80, #3B281E80),
            url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=85")
            center / cover;
        }

        .bg-reg-flower {
          font-size: 38px;
          color: #C6A66B;
        }

        .bg-register-image h1 {
          font: 400 38px Georgia, serif;
          margin: 10px 0;
          text-align: center;
          color: #FFFDF9;
        }

        .bg-register-image h1 span {
          color: #D4B477;
        }

        .bg-reg-tagline {
          font-size: 10px;
          letter-spacing: 2px;
          text-align: center;
          color: #F5E8D3;
        }

        .bg-reg-line {
          width: 60px;
          height: 1px;
          background: #D4B477;
          margin: 25px 0;
        }

        .bg-register-image h3 {
          align-self: flex-start;
          font: 400 22px/1.5 Georgia, serif;
          margin-left: 5%;
          color: #FFFDF9;
        }

        .bg-reg-note {
          margin-top: auto;
          align-self: flex-start;
          font: italic 21px/1.5 Georgia, serif;
          color: #E8D1A5;
        }

        .bg-register-content {
          padding: 40px 45px;
          align-self: center;
          background: #FFFDF9;
        }

        .bg-reg-small {
          color: #96764D;
          letter-spacing: 1.5px;
          font-size: 10px;
          font-weight: 600;
        }

        .bg-register-content h2 {
          font: 400 36px Georgia, serif;
          margin: 10px 0;
          color: #4A342A;
        }

        .bg-reg-description {
          color: #78675B;
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
          width: 100%;
          box-sizing: border-box;
          padding: 12px 14px;
          border: 1px solid #E5D6C5;
          border-radius: 9px;
          background: #FFFCF7;
          color: #4A342A;
          font-size: 13px;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
        }

        .bg-register-content form > input::placeholder {
          color: #A09284;
        }

        .bg-register-content form > input:focus {
          border-color: #C6A66B;
          box-shadow: 0 0 0 3px #C6A66B20;
        }

        /* Elegant Role Selection Cards */
        .bg-role-section {
          margin: 12px 0 8px;
        }

        .bg-role-heading {
          font: 400 20px Georgia, serif;
          color: #4A342A;
          margin: 0 0 5px;
        }

        .bg-role-subtitle {
          font-size: 12px;
          color: #958477;
          margin: 0 0 12px;
        }

        .bg-role-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 9px;
        }

        .bg-role-card {
          position: relative;
          min-width: 0;
          min-height: 112px;
          padding: 13px 5px;
          border: 1px solid #E5D6C5;
          border-radius: 12px;
          background: #FFFCF7;
          color: #4A342A;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .bg-role-card:hover {
          border-color: #C6A66B;
          transform: translateY(-3px);
          box-shadow: 0 5px 14px #4A342A12;
        }

        .bg-role-card.selected {
          border: 1.5px solid #B08B50;
          background: #F7EFE3;
          box-shadow: 0 4px 13px #B08B5020;
        }

        .bg-role-icon {
          font-size: 25px;
          line-height: 1;
          color: #A47B48;
        }

        .bg-role-card strong {
          font-size: 12px;
          font-weight: 600;
          text-align: center;
        }

        .bg-role-card small {
          font-size: 10px;
          line-height: 1.3;
          color: #8B796C;
          text-align: center;
        }

        .bg-role-check {
          position: absolute;
          top: 6px;
          right: 7px;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #795548;
          color: #FFFDF9;
          font-size: 11px;
        }

        .bg-reg-terms {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          line-height: 1.6;
          color: #78675B;
          margin: 5px 0;
        }

        .bg-reg-terms input {
          margin-top: 4px;
          accent-color: #795548;
          flex-shrink: 0;
        }

        .bg-reg-terms a,
        .bg-reg-switch a {
          color: #795548;
          text-decoration: none;
          font-weight: 600;
        }

        .bg-reg-terms a:hover,
        .bg-reg-switch a:hover {
          color: #B08B50;
          text-decoration: underline;
        }

        .bg-reg-submit {
          padding: 13px;
          border: 1px solid #795548;
          border-radius: 30px;
          background: #795548;
          color: #FFFDF9;
          font: 17px Georgia, serif;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s;
        }

        .bg-reg-submit:hover {
          background: #4A342A;
          border-color: #4A342A;
        }

        .bg-reg-submit span {
          margin-left: 8px;
          color: #E8D1A5;
        }

        .bg-reg-message {
          color: #795548;
          font-size: 12px;
          margin: 3px 0;
        }

        .bg-reg-or {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #958477;
          margin: 17px 0 12px;
          font-size: 12px;
        }

        .bg-reg-or::before,
        .bg-reg-or::after {
          content: "";
          height: 1px;
          background: #E5D6C5;
          flex: 1;
        }

        .bg-reg-google {
          width: 100%;
          padding: 11px;
          border: 1px solid #E0D1C0;
          border-radius: 9px;
          background: #FFFDF9;
          cursor: pointer;
          font-size: 13px;
          color: #4A342A;
          transition: background 0.25s, border-color 0.25s;
        }

        .bg-reg-google:hover {
          background: #F8F1E8;
          border-color: #C6A66B;
        }

        .bg-reg-google b {
          color: #4285F4;
          margin-right: 10px;
          font-size: 18px;
        }

        .bg-reg-switch {
          margin-top: 22px;
          text-align: center;
          color: #78675B;
          font-size: 12px;
        }

        @media (max-width: 700px) {
          .bg-register-page {
            padding: 18px 12px;
          }

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

          .bg-register-content h2 {
            font-size: 32px;
          }
        }

        @media (max-width: 380px) {
          .bg-register-content {
            padding: 28px 18px;
          }

          .bg-register-image h1 {
            font-size: 32px;
          }

          .bg-reg-tagline {
            font-size: 9px;
            letter-spacing: 1.5px;
          }

          .bg-role-grid {
            gap: 5px;
          }

          .bg-role-card {
            padding: 11px 3px;
          }

          .bg-role-card strong {
            font-size: 11px;
          }

          .bg-role-card small {
            font-size: 9px;
          }
        }
      `}</style>
    </>
  );
}
