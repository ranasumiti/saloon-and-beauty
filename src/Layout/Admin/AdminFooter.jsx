export default function AdminFooter() {
  return (
    <>
      <footer className="admin-footer">
        <p>© 2026 Beauty & Glow. All Rights Reserved.</p>
      </footer>

      <style>{`
        .admin-footer {
          padding: 15px;
          text-align: center;
          background: #FFFCF8;
          border-top: 1px solid #E9DED1;
          color: #6B4F3A;
          font-size: 13px;
        }

        .admin-footer p {
          margin: 0;
        }
      `}</style>
    </>
  );
}