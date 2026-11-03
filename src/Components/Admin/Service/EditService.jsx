
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SingleService, UpdateService } from "../../../services/AdminService";
import { toast } from "react-toastify";

export default function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState("true");
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch service details
  useEffect(() => {
    const getService = async () => {
      try {
        setLoading(true);

        const res = await SingleService({ _id: id });

        if (res.data.success) {
          const data = res.data.data;

          setServiceName(data.serviceName || "");
          setDescription(data.description || "");
          setCategory(data.category || "");
          setPrice(data.price ?? "");
          setDuration(data.duration || "");
          setStatus(String(data.status));
          setOldImage(data.image || "");
        } else {
          toast.error(res.data.message || "Service not found");
        }
      } catch (error) {
        console.log(error);
        toast.error("Unable to load service");
      } finally {
        setLoading(false);
      }
    };

    getService();
  }, [id]);

  // Update service
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("_id", id);
      formData.append("serviceName", serviceName);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("duration", duration);
      formData.append("status", status);

      if (image) {
        formData.append("image", image);
      }

      const res = await UpdateService(formData);

      if (res.data.success) {
        toast.success("Service updated successfully!");

       setTimeout(()=>{
        navigate(-1);
       },1000);
      } else {
        toast.error(res.data.message || "Update failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-service-page">

      <div className="edit-header">
        <div>
          <span className="edit-breadcrumb">BEAUTY & GLOW / SERVICES</span>
          <h2>Edit Service</h2>
          <p>Update your salon service details and information.</p>
        </div>

        <button
          type="button"
          className="edit-back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      {loading ? (
        <div className="edit-loading">
          <div className="edit-spinner"></div>
          <p>Loading service details...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>

          <div className="edit-card">

            <div className="edit-card-heading">
              <div>
                <span className="gold-line"></span>
                <h3>Service Information</h3>
                <p>Enter the details of your salon service.</p>
              </div>
              <span className="edit-star">✦</span>
            </div>

            <div className="edit-grid">

              <div className="edit-field">
                <label>Service Name <span>*</span></label>
                <input
                  type="text"
                  placeholder="Enter service name"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  required
                />
              </div>

              <div className="edit-field">
                <label>Category <span>*</span></label>
                <input
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>

              <div className="edit-field">
                <label>Price (₹) <span>*</span></label>
                <input
                  type="number"
                  min="0"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="edit-field">
                <label>Duration <span>*</span></label>
                <input
                  type="text"
                  placeholder="Example: 45 minutes"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>

              <div className="edit-field edit-full">
                <label>Description <span>*</span></label>
                <textarea
                  placeholder="Write service description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="5"
                />
              </div>

            </div>
          </div>

          <div className="edit-bottom-grid">

            <div className="edit-card">
              <div className="edit-card-heading">
                <div>
                  <span className="gold-line"></span>
                  <h3>Service Image</h3>
                  <p>Upload a new image for your service.</p>
                </div>
              </div>

              <label className="edit-upload">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0] || null)}
                />

                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="New preview"
                    className="edit-preview"
                  />
                ) : oldImage ? (
                  <img
                    src={oldImage}
                    alt="Current service"
                    className="edit-preview"
                  />
                ) : (
                  <div className="upload-placeholder">
                    <span>↑</span>
                    <strong>Upload Image</strong>
                    <small>Click here to browse</small>
                  </div>
                )}
              </label>

              {image && <p className="edit-file-name">{image.name}</p>}
            </div>

            <div className="edit-card">
              <div className="edit-card-heading">
                <div>
                  <span className="gold-line"></span>
                  <h3>Service Status</h3>
                  <p>Manage service availability.</p>
                </div>
              </div>

              <div className="edit-status-options">

                <label className={status === "true" ? "selected" : ""}>
                  <input
                    type="radio"
                    name="status"
                    value="true"
                    checked={status === "true"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <span className="status-dot active-dot"></span>
                  <div>
                    <strong>Active</strong>
                    <small>Available for customers</small>
                  </div>
                </label>

                <label className={status === "false" ? "selected" : ""}>
                  <input
                    type="radio"
                    name="status"
                    value="false"
                    checked={status === "false"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <span className="status-dot inactive-dot"></span>
                  <div>
                    <strong>Inactive</strong>
                    <small>Not available for customers</small>
                  </div>
                </label>

              </div>
            </div>

          </div>

          <div className="edit-footer">
            <button
              type="button"
              className="edit-cancel"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="edit-submit"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes  →"}
            </button>
          </div>

        </form>
      )}

      <style>{`
        .edit-service-page {
          background: #FAF7F2;
          min-height: 100vh;
          padding: 30px;
          color: #49372E;
          box-sizing: border-box;
        }

        .edit-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          gap: 15px;
        }

        .edit-breadcrumb {
          color: #B18B59;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .edit-header h2 {
          font-family: Georgia, serif;
          font-size: 30px;
          color: #654735;
          margin: 10px 0;
        }

        .edit-header p {
          color: #88796E;
          font-size: 14px;
          margin: 0;
        }

        .edit-back-btn {
          background: #fff;
          color: #76543E;
          border: 1px solid #E8D8BC;
          padding: 11px 19px;
          border-radius: 7px;
          cursor: pointer;
          font-weight: 600;
        }

        .edit-back-btn:hover,
        .edit-cancel:hover {
          background: #F3EADF;
        }

        .edit-card {
          background: #fff;
          border: 1px solid #EDE3D7;
          border-radius: 13px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 5px 18px rgba(93,64,48,.04);
          min-width: 0;
        }

        .edit-card-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .gold-line {
          display: block;
          width: 35px;
          height: 3px;
          background: #C6A36A;
          border-radius: 5px;
          margin-bottom: 10px;
        }

        .edit-card-heading h3 {
          color: #654735;
          font-family: Georgia, serif;
          font-size: 19px;
          margin: 0 0 7px;
        }

        .edit-card-heading p {
          font-size: 13px;
          color: #9A8B7D;
          margin: 0;
        }

        .edit-star {
          color: #C6A36A;
          font-size: 27px;
        }

        .edit-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .edit-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
          min-width: 0;
        }

        .edit-field label {
          color: #654735;
          font-size: 13px;
          font-weight: 600;
        }

        .edit-field label span {
          color: #B18B59;
        }

        .edit-field input,
        .edit-field textarea {
          width: 100%;
          box-sizing: border-box;
          background: #FFFDFA;
          border: 1px solid #E8D8BC;
          border-radius: 7px;
          padding: 13px 14px;
          font-size: 14px;
          outline: none;
          color: #49372E;
          font-family: inherit;
          transition: .2s;
        }

        .edit-field input:focus,
        .edit-field textarea:focus {
          border-color: #B18B59;
          box-shadow: 0 0 0 3px rgba(198,163,106,.12);
        }

        .edit-field textarea {
          resize: vertical;
          min-height: 120px;
        }

        .edit-full {
          grid-column: 1 / -1;
        }

        .edit-bottom-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 20px;
        }

        .edit-upload {
          min-height: 190px;
          border: 1px dashed #C6A36A;
          background: #FFFDFA;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          padding: 12px;
          overflow: hidden;
        }

        .edit-upload input {
          display: none;
        }

        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: #76543E;
        }

        .upload-placeholder span {
          display: grid;
          place-items: center;
          width: 45px;
          height: 45px;
          background: #F3EADF;
          border-radius: 50%;
          font-size: 25px;
          color: #A98251;
        }

        .upload-placeholder small {
          color: #A09286;
        }

        .edit-preview {
          max-width: 100%;
          max-height: 200px;
          object-fit: contain;
          border-radius: 8px;
        }

        .edit-file-name {
          font-size: 12px;
          color: #76543E;
          margin-bottom: 0;
        }

        .edit-status-options {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .edit-status-options label {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border: 1px solid #EDE3D7;
          border-radius: 9px;
          cursor: pointer;
          transition: .2s;
        }

        .edit-status-options label.selected {
          border-color: #C6A36A;
          background: #FBF7F0;
        }

        .edit-status-options input {
          accent-color: #76543E;
        }

        .edit-status-options label div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .edit-status-options strong {
          color: #654735;
          font-size: 13px;
        }

        .edit-status-options small {
          color: #A09286;
          font-size: 12px;
        }

        .status-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .active-dot {
          background: #63966C;
        }

        .inactive-dot {
          background: #C56B62;
        }

        .edit-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding-bottom: 25px;
        }

        .edit-cancel,
        .edit-submit {
          padding: 13px 24px;
          border-radius: 7px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: .2s;
        }

        .edit-cancel {
          background: #fff;
          color: #76543E;
          border: 1px solid #E8D8BC;
        }

        .edit-submit {
          background: #76543E;
          color: #fff;
          border: 1px solid #76543E;
        }

        .edit-submit:hover {
          background: #5D4030;
        }

        .edit-submit:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        .edit-loading {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #76543E;
        }

        .edit-spinner {
          width: 38px;
          height: 38px;
          border: 4px solid #E8D8BC;
          border-top-color: #76543E;
          border-radius: 50%;
          animation: editSpin .8s linear infinite;
        }

        @keyframes editSpin {
          to { transform: rotate(360deg); }
        }

        @media(max-width: 800px) {
          .edit-service-page {
            padding: 20px;
          }

          .edit-bottom-grid {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width: 550px) {
          .edit-service-page {
            padding: 13px;
          }

          .edit-header {
            align-items: flex-start;
          }

          .edit-header h2 {
            font-size: 24px;
          }

          .edit-header p {
            font-size: 12px;
          }

          .edit-back-btn {
            padding: 9px 12px;
          }

          .edit-card {
            padding: 17px;
          }

          .edit-grid {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .edit-full {
            grid-column: auto;
          }

          .edit-footer {
            flex-direction: column-reverse;
          }

          .edit-cancel,
          .edit-submit {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
