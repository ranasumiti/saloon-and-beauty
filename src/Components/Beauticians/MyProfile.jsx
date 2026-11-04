
import { useState } from "react";
import { toast } from "react-toastify";

export default function MyProfile() {
  const [name, setName] = useState(
    localStorage.getItem("name") || ""
  );

  const [email, setEmail] = useState(
    localStorage.getItem("email") || ""
  );

  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Profile update API will be connected next.");
  };

  return (
    <>
      <h2 className="beautician-title">My Profile</h2>
      <p className="beautician-subtitle">
        View and manage your personal information.
      </p>

      <div className="beautician-card">
        <form className="beautician-profile-form" onSubmit={handleSubmit}>
          <div className="profile-avatar">
            {name.charAt(0).toUpperCase() || "B"}
          </div>

          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button className="beautician-btn" type="submit">
            Update Profile
          </button>
        </form>
      </div>

      <style>{`
        .beautician-profile-form {
          max-width: 550px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .beautician-profile-form label {
          color: #76543e;
          font-size: 13px;
          font-weight: 600;
        }

        .beautician-profile-form input {
          width: 100%;
          padding: 13px;
          border: 1px solid #e0d2c4;
          border-radius: 7px;
          outline: none;
        }

        .beautician-profile-form input:focus {
          border-color: #76543e;
        }

        .profile-avatar {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          background: #e8d8bc;
          color: #654735;
          display: grid;
          place-items: center;
          font-size: 28px;
          margin-bottom: 15px;
        }

        .beautician-profile-form button {
          margin-top: 12px;
          align-self: flex-start;
        }
      `}</style>
    </>
  );
}
