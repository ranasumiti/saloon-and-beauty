
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Register } from "../Services/UserService";



export default function Registers() {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

     if(password!==confirmPassword){
  setMessage("plaese fill valid password")
  return;
 }
try{
const payload={
  email:email,
  phone:phone,
  name:name,
  password:password,
}
 const res=await Register(payload )

 if(res.data.success== true){
  toast.success("Register successful!");

  nav("/login")
 }
 else{
  toast.error("unsucccessfull ")
 }
}
catch(err){
  toast.error("Register email exist!");
  console.log("error a gya",err)
}
  
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
                placeholder="Password (minimum 8 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                autoComplete="new-password"
                required
              />

              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={8}
                autoComplete="new-password"
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
        }
      `}</style>
    </>
  );
}
