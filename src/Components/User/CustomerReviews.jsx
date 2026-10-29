
import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomerReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Replace this URL with your actual public reviews endpoint.
        const response = await axios.get(
          "http://localhost:2000/api/reviews/approved"
        );

        // Supports either an array or { reviews: [...] } response.
        const data = response.data;

        setReviews(
          Array.isArray(data)
            ? data
            : Array.isArray(data.reviews)
              ? data.reviews
              : []
        );
      } catch (error) {
        console.error("Failed to load reviews:", error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <style>{`
        .glow-reviews {
          padding: 90px 7%;
          background: #f5eee3;
          color: #49372e;
          font-family: Arial, sans-serif;
        }

        .glow-reviews-heading {
          max-width: 650px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .glow-reviews-heading .eyebrow {
          color: #b7955b;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 3px;
        }

        .glow-reviews-heading h2 {
          margin: 16px 0;
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 46px);
          font-weight: normal;
        }

        .glow-reviews-heading h2 span {
          color: #b7955b;
          font-style: italic;
        }

        .glow-reviews-heading p {
          color: #756459;
          font-size: 14px;
          line-height: 1.8;
        }

        .glow-reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .glow-review-card {
          padding: 30px;
          background: #fbf8f1;
          border: 1px solid #e7dac6;
        }

        .glow-review-stars {
          margin-bottom: 18px;
          color: #b7955b;
          font-size: 19px;
          letter-spacing: 3px;
        }

        .glow-review-text {
          color: #65554a;
          font-family: Georgia, serif;
          font-size: 17px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .glow-review-divider {
          height: 1px;
          margin: 22px 0;
          background: #e7dac6;
        }

        .glow-review-author {
          color: #49372e;
          font-size: 14px;
          font-weight: bold;
        }

        .glow-review-label {
          margin-top: 6px;
          color: #9b866c;
          font-size: 11px;
        }

        .glow-reviews-message {
          padding: 30px 15px;
          text-align: center;
          color: #756459;
          line-height: 1.8;
        }

        @media (max-width: 900px) {
          .glow-reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .glow-reviews {
            padding: 60px 5%;
          }

          .glow-reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="glow-reviews" id="reviews">
        <div className="glow-reviews-heading">
          <p className="eyebrow">KIND WORDS</p>

          <h2>
            Client <span>Reviews</span>
          </h2>

          <p>
            Discover feedback shared by our customers about
            their Beauty & Glow experience.
          </p>
        </div>

        {loading ? (
          <p className="glow-reviews-message">
            Loading customer reviews...
          </p>
        ) : reviews.length === 0 ? (
          <p className="glow-reviews-message">
            No approved reviews yet. Be the first to share your experience!
          </p>
        ) : (
          <div className="glow-reviews-grid">
            {reviews.map((review) => {
              const rating = Math.max(
                0,
                Math.min(5, Number(review.rating) || 0)
              );

              return (
                <article
                  className="glow-review-card"
                  key={review._id}
                >
                  <div
                    className="glow-review-stars"
                    aria-label={`${rating} out of 5 stars`}
                  >
                    {"★".repeat(rating)}
                    {"☆".repeat(5 - rating)}
                  </div>

                  <p className="glow-review-text">
                    “{review.comment || review.review || ""}”
                  </p>

                  <div className="glow-review-divider" />

                  <div className="glow-review-author">
                    {review.user?.name ||
                      review.userName ||
                      review.name ||
                      "Customer"}
                  </div>

                  <div className="glow-review-label">
                    BEAUTY & GLOW CUSTOMER
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
