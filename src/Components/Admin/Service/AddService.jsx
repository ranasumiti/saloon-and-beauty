
import { useState, useRef, useEffect } from "react";
import { AddServices } from "../../../services/AdminService";
import { toast } from "react-toastify";

export default function AddService() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("true");
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  // Preview URL cleanup
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // Image select handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image!");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5 MB!");
      e.target.value = "";
      return;
    }

    const previewURL = URL.createObjectURL(file);

    setImage(file);
    setImagePreview(previewURL);
  };

  // Reset form
  const resetForm = () => {
    setName("");
    setImage(null);
    setImagePreview("");
    setCategory("");
    setPrice("");
    setDuration("");
    setDescription("");
    setStatus("true");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter service name");
      return;
    }

    if (!category) {
      toast.error("Please select service category");
      return;
    }

    if (!description.trim()) {
      toast.error("Please enter service description");
      return;
    }

    if (!price || Number(price) < 0) {
      toast.error("Please enter a valid price");
      return;
    }

    if (!duration.trim()) {
      toast.error("Please enter service duration");
      return;
    }

    if (!image) {
      toast.error("Please select service image");
      return;
    }

    const formData = new FormData();

    formData.append("serviceName", name.trim());
    formData.append("image", image);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("duration", duration.trim());
    formData.append("description", description.trim());
    formData.append("status", status);

    try {
      setLoading(true);

      const res = await AddServices(formData);

      console.log("ADD SERVICE RESPONSE:", res.data);

      if (res.data.success) {
        toast.success("Service added successfully!");
        resetForm();
      } else {
        toast.error(res.data.message || "Service not added");
      }
    } catch (err) {
      console.log("ADD SERVICE ERROR:", err);

      toast.error(
        err.response?.data?.message || "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-service-page">
      <div className="service-heading">
        <div>
          <p className="service-breadcrumb">
            Home / Services / Add Service
          </p>
          <h1>Add New Service</h1>
          <p>Create and manage your salon services.</p>
        </div>

        <button
          className="service-back-btn"
          type="button"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
      </div>

      <form className="service-form" onSubmit={handleSubmit}>
        <div className="service-form-layout">

          {/* Main Form */}
          <div className="service-form-main">

            <section className="service-form-card">
              <h2>Service Information</h2>

              <p className="service-section-subtitle">
                Enter the basic details of your salon service.
              </p>

              <div className="service-fields">

                <div className="service-field">
                  <label>Service Name *</label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Bridal Makeup"
                  />
                </div>

                <div className="service-field">
                  <label>Service Category *</label>

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="" disabled>
                      Select category
                    </option>

                    <option value="Skin Care">Skin Care</option>
                    <option value="Hair Care">Hair Care</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Nail Care">Nail Care</option>
                    <option value="Spa & Massage">Spa & Massage</option>
                  </select>
                </div>

                <div className="service-field full-width">
                  <label>Short Description *</label>

                  <textarea
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the service..."
                  />
                </div>

                <div className="service-field">
                  <label>Price (₹) *</label>

                  <input
                    type="number"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter service price"
                  />
                </div>

                <div className="service-field">
                  <label>Service Duration *</label>

                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g. 45 minutes"
                  />
                </div>

                <div className="service-field">
                  <label>Service Status</label>

                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>

              </div>
            </section>

            {/* Service Image */}
            <section className="service-form-card">
              <h2>Service Image</h2>

              <p className="service-section-subtitle">
                Upload an image to display on your service page.
              </p>

              <label className="service-upload-area">

                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Service Preview"
                    />

                    <strong>{image?.name}</strong>

                    <span className="service-browse-btn">
                      Change Image
                    </span>
                  </>
                ) : (
                  <>
                    <span className="service-upload-icon">
                      ↑
                    </span>

                    <strong>Upload service image</strong>

                    <span className="service-browse-btn">
                      Browse Image
                    </span>

                    <span>PNG, JPG, JPEG (Max 5 MB)</span>
                  </>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />

              </label>
            </section>
          </div>

          {/* Side Preview */}
          <aside className="service-form-side">

            <section className="service-form-card service-preview">
              <h2>Quick Tips</h2>

              <div className="service-tip">
                <span>✦</span>
                <p>Use a clear, descriptive service name.</p>
              </div>

              <div className="service-tip">
                <span>₹</span>
                <p>Set a price that reflects your service.</p>
              </div>

              <div className="service-tip">
                <span>◷</span>
                <p>Choose an accurate appointment duration.</p>
              </div>

              <div className="service-tip">
                <span>▧</span>
                <p>Use a high-quality image for a professional look.</p>
              </div>
            </section>

            <section className="service-form-card service-preview">
              <h2>Before Publishing</h2>

              <p className="service-check">
                <span>✓</span> Service details are correct
              </p>

              <p className="service-check">
                <span>✓</span> Price and duration are set
              </p>

              <p className="service-check">
                <span>✓</span> Image is clear
              </p>
            </section>

          </aside>
        </div>

        {/* Footer Buttons */}
        <div className="service-form-footer">

          <button
            className="service-cancel-btn"
            type="button"
            onClick={resetForm}
            disabled={loading}
          >
            Reset Form
          </button>

          <button
            className="service-save-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Service"}
          </button>

        </div>
      </form>

      <style>{`
        .add-service-page {
          width: 100%;
          min-width: 0;
          padding: 25px;
          box-sizing: border-box;
          background: #fbf5ed;
          color: #382116;
          font-family: Arial, sans-serif;
        }

        .add-service-page * {
          box-sizing: border-box;
        }

        .service-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 25px;
        }

        .service-breadcrumb {
          margin: 0 0 9px;
          color: #8b5738;
          font-size: 13px;
        }

        .service-heading h1 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: clamp(27px, 3vw, 36px);
        }

        .service-heading > div > p:last-child {
          margin: 0;
          color: #78675c;
          font-size: 14px;
        }

        .service-back-btn {
          padding: 11px 16px;
          border: 1px solid #e4d7cb;
          border-radius: 8px;
          background: #fffaf5;
          color: #76533d;
          cursor: pointer;
        }

        .service-form-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 290px;
          align-items: start;
          gap: 20px;
        }

        .service-form-main,
        .service-form-side {
          display: grid;
          min-width: 0;
          gap: 20px;
        }

        .service-form-card {
          min-width: 0;
          padding: 22px;
          border: 1px solid #ecdfd2;
          border-radius: 12px;
          background: #fffaf6;
          box-shadow: 0 4px 12px #50301b08;
        }

        .service-form-card h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: 21px;
        }

        .service-section-subtitle {
          margin: 0 0 22px;
          color: #89786b;
          font-size: 13px;
          line-height: 1.5;
        }

        .service-fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 19px 16px;
        }

        .service-field {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 8px;
        }

        .service-field.full-width {
          grid-column: 1 / -1;
        }

        .service-field label {
          color: #4b3324;
          font-size: 13px;
          font-weight: 600;
        }

        .service-field input,
        .service-field select,
        .service-field textarea {
          width: 100%;
          min-width: 0;
          padding: 12px 13px;
          border: 1px solid #e4d7cb;
          border-radius: 8px;
          outline-color: #8b5738;
          background: #fff;
          color: #382116;
          font: inherit;
          font-size: 13px;
        }

        .service-field textarea {
          resize: vertical;
        }

        .service-field input::placeholder,
        .service-field textarea::placeholder {
          color: #b1a297;
        }

        .service-upload-area {
          display: flex;
          min-height: 210px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px;
          border: 1px dashed #cdb6a2;
          border-radius: 10px;
          background: #fffcf8;
          color: #4c3020;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
        }

        .service-upload-area input {
          display: none;
        }

        .service-upload-area > img {
          width: 100%;
          max-height: 280px;
          object-fit: contain;
          border-radius: 8px;
        }

        .service-upload-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #f3e0d2;
          color: #8b5738;
          font-size: 26px;
        }

        .service-upload-area strong {
          font-size: 14px;
          overflow-wrap: anywhere;
        }

        .service-upload-area > span:not(.service-upload-icon):not(.service-browse-btn) {
          color: #89786b;
          font-size: 12px;
        }

        .service-browse-btn {
          padding: 9px 14px;
          border-radius: 7px;
          background: #8b5738;
          color: white;
          font-size: 12px;
        }

        .service-preview {
          padding: 20px;
        }

        .service-preview h2 {
          margin-bottom: 18px;
        }

        .service-tip {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-bottom: 17px;
        }

        .service-tip:last-child {
          margin-bottom: 0;
        }

        .service-tip > span {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 31px;
          height: 31px;
          border-radius: 8px;
          background: #f3e0d2;
          color: #8b5738;
        }

        .service-tip p {
          margin: 2px 0 0;
          color: #78675c;
          font-size: 12px;
          line-height: 1.6;
        }

        .service-check {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #78675c;
          font-size: 12px;
          line-height: 1.5;
        }

        .service-check span {
          color: #54834b;
          font-weight: bold;
        }

        .service-form-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 22px;
          padding: 18px 0 0;
          border-top: 1px solid #eaded1;
        }

        .service-cancel-btn,
        .service-save-btn {
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 13px;
          cursor: pointer;
        }

        .service-cancel-btn {
          border: 1px solid #e4d7cb;
          background: #fffaf5;
          color: #76533d;
        }

        .service-save-btn {
          border: none;
          background: #8b5738;
          color: white;
        }

        .service-save-btn:disabled,
        .service-cancel-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 1000px) {
          .service-form-layout {
            grid-template-columns: minmax(0, 1fr);
          }

          .service-form-side {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .add-service-page {
            padding: 14px;
          }

          .service-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .service-form-card {
            padding: 16px;
          }

          .service-fields {
            grid-template-columns: 1fr;
          }

          .service-field.full-width {
            grid-column: auto;
          }

          .service-form-side {
            grid-template-columns: 1fr;
          }

          .service-form-footer {
            flex-direction: column-reverse;
          }

          .service-cancel-btn,
          .service-save-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
