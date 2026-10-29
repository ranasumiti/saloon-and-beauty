
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, setData } from "../../services/AuthService";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpScreen, setOtpScreen] = useState(false);
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await login({ email, password });

      if (res.success) {
        setLoginData(res);
        setOtpScreen(true);
        setOtp("");
        toast.success("Demo OTP: 123456");
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (otp !== "123456") {
      toast.error("Invalid OTP! Try 123456");
      return;
    }

    const res = loginData;
    const user = res.data?.user || res.data;

    const responseData = {
      token: res.token || res.data?.token || user?.token,
      userType: res.data?.userType ?? user?.userType,
      name: res.data?.name || user?.name,
      email: res.data?.email || user?.email || email,
    };

    if (!responseData.token) {
      toast.error("Login token not received");
      return;
    }

    setData(responseData);
    toast.success("OTP verified successfully!");

    if (Number(responseData.userType) === 1) {
      nav("/admin");
    } else {
      nav("/");
    }
  };

  return (
    <>
      <div className="bg-login-page">
        <div className="bg-login-card">
          <div className="bg-login-image">
            <div className="bg-flower">✿</div>
            <h1>Beauty <span>&</span> Glow</h1>
            <p className="bg-tagline">BEAUTY · CARE · CONFIDENCE</p>
            <div className="bg-line"></div>
            <h3>Glow Today<br />For A Brighter<br />You Tomorrow</h3>
            <p className="bg-selfcare">
              Self Care Is A Form Of Self Love ♡
            </p>
          </div>

          <div className="bg-login-content">
            <p className="bg-small-title">
              {otpScreen ? "OTP VERIFICATION" : "WELCOME BACK"}
            </p>

            <h2>{otpScreen ? "Verify OTP" : "Welcome Back"}</h2>

            <p className="bg-description">
              {otpScreen
                ? `Enter demo OTP to continue. Email: ${email}`
                : "Login to book your appointments, explore services and more."}
            </p>

            {!otpScreen ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className="bg-login-options">
                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>

                <button
                  className="bg-submit-btn"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Please wait..." : "Login"}
                  <span> →</span>
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  maxLength={6}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  required
                />

                <button
                  className="bg-submit-btn"
                  type="submit"
                  disabled={otp.length !== 6}
                >
                  Verify OTP <span>→</span>
                </button>

                <button
                  className="bg-back-btn"
                  type="button"
                  onClick={() => {
                    setOtpScreen(false);
                    setOtp("");
                  }}
                >
                  Back to Login
                </button>

                <p className="bg-demo-note">
                  Demo OTP: <strong>123456</strong>
                </p>
              </form>
            )}

            <p className="bg-switch">
              Don't have an account?
              <Link to="/register"> Register here</Link>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .bg-login-page {
          min-height: 100vh;
          padding: 35px 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f3e9df;
          font-family: Arial, sans-serif;
          color: #35281f;
        }

        .bg-login-card {
          width: 100%;
          max-width: 1000px;
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          background: #fffaf4;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 15px 45px #513b281c;
        }

        .bg-login-image {
          min-height: 620px;
          padding: 50px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff8ed;
          background:
            linear-gradient(#29271966, #29271970),
            url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=85")
            center / cover;
        }

        .bg-flower {
          font-size: 38px;
          color: #e5c795;
        }

        .bg-login-image h1 {
          font: 400 38px Georgia, serif;
          margin: 10px 0;
          text-align: center;
        }

        .bg-login-image h1 span { color: #e5c795; }

        .bg-tagline {
          font-size: 10px;
          letter-spacing: 2px;
          text-align: center;
        }

        .bg-line {
          width: 60px;
          height: 1px;
          background: #e5c795;
          margin: 25px 0;
        }

        .bg-login-image h3 {
          align-self: flex-start;
          font: 400 23px/1.5 Georgia, serif;
          margin-left: 5%;
        }

        .bg-selfcare {
          margin-top: auto;
          align-self: flex-start;
          font: italic 21px/1.5 Georgia, serif;
          color: #f1d9b6;
        }

        .bg-login-content {
          padding: 65px 45px;
          align-self: center;
          min-width: 0;
        }

        .bg-small-title {
          color: #7b825f;
          letter-spacing: 2px;
          font-size: 11px;
        }

        .bg-login-content h2 {
          font: 400 38px Georgia, serif;
          margin: 10px 0;
          color: #30231b;
        }

        .bg-description {
          color: #756b62;
          line-height: 1.6;
          margin-bottom: 28px;
          overflow-wrap: anywhere;
        }

        .bg-login-content form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .bg-login-content form > input {
          box-sizing: border-box;
          width: 100%;
          padding: 15px;
          border: 1px solid #e0d2c4;
          border-radius: 9px;
          background: #fffaf5;
          font-size: 14px;
          outline: none;
        }

        .bg-login-content form > input:focus {
          border-color: #6c7854;
        }

        .bg-login-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          margin: 4px 0 12px;
        }

        .bg-login-options label {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .bg-login-options input { accent-color: #6c7854; }

        .bg-login-options a,
        .bg-switch a { color: #596645; }

        .bg-submit-btn {
          padding: 15px;
          border: none;
          border-radius: 30px;
          background: #6c7854;
          color: white;
          font: 18px Georgia, serif;
          cursor: pointer;
        }

        .bg-submit-btn:hover { background: #566442; }

        .bg-submit-btn:disabled {
          opacity: .65;
          cursor: not-allowed;
        }

        .bg-submit-btn span { margin-left: 8px; }

        .bg-back-btn {
          padding: 12px;
          border: 1px solid #e0d2c4;
          border-radius: 30px;
          background: transparent;
          color: #594536;
          cursor: pointer;
        }

        .bg-demo-note {
          text-align: center;
          color: #756b62;
          font-size: 13px;
        }

        .bg-switch {
          margin-top: 35px;
          text-align: center;
          color: #756b62;
          font-size: 13px;
        }

        @media (max-width: 700px) {
          .bg-login-card { grid-template-columns: 1fr; }

          .bg-login-image {
            min-height: 250px;
            padding: 25px;
          }

          .bg-login-image h3,
          .bg-selfcare { display: none; }

          .bg-line { margin: 12px; }

          .bg-login-content { padding: 35px 24px; }

          .bg-login-content h2 { font-size: 32px; }
        }
      `}</style>
    </>
  );
}
