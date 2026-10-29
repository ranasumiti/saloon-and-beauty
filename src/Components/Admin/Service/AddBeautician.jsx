
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddBeautician() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  const handleImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    setError("");
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !specialization ||
      !experience.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    const savedBeauticians = JSON.parse(
      localStorage.getItem("beautyBeauticians") || "[]"
    );

    const newBeautician = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      specialization,
      experience: experience.trim(),
      status,
      image: preview,
    };

    const updatedBeauticians = [
      ...savedBeauticians,
      newBeautician,
    ];

    localStorage.setItem(
      "beautyBeauticians",
      JSON.stringify(updatedBeauticians)
    );

    alert("Beautician added successfully!");
    navigate("/admin/beauticians");
  };

  return (
    <>
      <style>{`
        .add-beautician-page {
          min-height: 100vh;
          padding: 25px;
          box-sizing: border-box;
          background: #faf7f2;
          color: #49372e;
          font-family: Arial, sans-serif;
        }

        .add-beautician-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .add-beautician-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .add-beautician-header h2 {
          margin: 0 0 8px;
          font-size: 27px;
        }

        .add-beautician-header p {
          margin: 0;
          color: #88766a;
          font-size: 14px;
        }

        .add-beautician-back {
          padding: 11px 17px;
          background: #eee3d5;
          color: #654c36;
          border-radius: 7px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .add-beautician-card {
          padding: 28px;
          background: white;
          border: 1px solid #eee3d5;
          border-radius: 13px;
          box-shadow: 0 4px 15px rgba(73, 55, 46, 0.06);
        }

        .add-beautician-card h3 {
          margin: 0 0 25px;
          font-size: 20px;
          color: #79552f;
        }

        .add-beautician-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .add-beautician-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .add-beautician-field label {
          color: #5a4232;
          font-size: 13px;
          font-weight: 600;
        }

        .add-beautician-field input,
        .add-beautician-field select {
          width: 100%;
          height: 45px;
          padding: 0 12px;
          box-sizing: border-box;
          border: 1px solid #e4d8ca;
          border-radius: 7px;
          outline: none;
          background: #fffdf9;
          color: #49372e;
          font-size: 14px;
        }

        .add-beautician-field input:focus,
        .add-beautician-field select:focus {
          border-color: #a77b45;
          box-shadow: 0 0 0 3px rgba(167, 123, 69, 0.12);
        }

        .add-beautician-upload {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 20px;
          border: 1px dashed #c7a77e;
          border-radius: 10px;
          background: #fffdf9;
        }

        .add-beautician-upload label {
          font-size: 13px;
          font-weight: 600;
          color: #5a4232;
        }

        .add-beautician-upload input {
          max-width: 100%;
          font-size: 13px;
        }

        .add-beautician-preview {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 10px;
          border: 1px solid #eee3d5;
        }

        .add-beautician-error {
          margin-bottom: 18px;
          padding: 12px;
          background: #f8e5e2;
          color: #a33d32;
          border-radius: 7px;
          font-size: 14px;
        }

        .add-beautician-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 25px;
        }

        .add-beautician-cancel,
        .add-beautician-save {
          padding: 12px 20px;
          border: none;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }

        .add-beautician-cancel {
          background: #eee3d5;
          color: #654c36;
        }

        .add-beautician-save {
          background: #a77b45;
          color: white;
        }

        .add-beautician-save:hover {
          background: #79552f;
        }

        @media (max-width: 600px) {
          .add-beautician-page {
            padding: 15px;
          }

          .add-beautician-header h2 {
            font-size: 23px;
          }

          .add-beautician-card {
            padding: 18px;
          }

          .add-beautician-form {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .add-beautician-upload {
            grid-column: auto;
          }

          .add-beautician-buttons {
            flex-direction: column-reverse;
          }

          .add-beautician-cancel,
          .add-beautician-save {
            text-align: center;
          }
        }
      `}</style>

      <div className="add-beautician-page">
        <div className="add-beautician-container">
          <div className="add-beautician-header">
            <div>
              <h2>Add Beautician</h2>
              <p>Add a new professional to your salon team.</p>
            </div>

            <Link
              to="/admin/beauticians"
              className="add-beautician-back"
            >
              Back to Beauticians
            </Link>
          </div>

          <div className="add-beautician-card">
            <h3>Beautician Information</h3>

            {error && (
              <div className="add-beautician-error">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="add-beautician-form">
                <div className="add-beautician-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div className="add-beautician-field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div className="add-beautician-field">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div className="add-beautician-field">
                  <label>Specialization *</label>
                  <select
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    required
                  >
                    <option value="">Select Specialization</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Skin Care">Skin Care</option>
                    <option value="Nail Art">Nail Art</option>
                    <option value="Mehndi">Mehndi</option>
                  </select>
                </div>

                <div className="add-beautician-field">
                  <label>Experience *</label>
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="Example: 3 Years"
                    required
                  />
                </div>

                <div className="add-beautician-field">
                  <label>Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div className="add-beautician-upload">
                  <label>Beautician Photo (Optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                  />

                  {preview && (
                    <img
                      src={preview}
                      alt="Beautician preview"
                      className="add-beautician-preview"
                    />
                  )}
                </div>
              </div>

              <div className="add-beautician-buttons">
                <Link
                  to="/admin/beauticians"
                  className="add-beautician-cancel"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="add-beautician-save"
                >
                  Save Beautician
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
