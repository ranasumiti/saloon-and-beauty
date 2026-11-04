
export default function BeauticianFooter() {
  return (
    <>
      <footer className="beautician-footer">
        <p>
          © {new Date().getFullYear()} Beauty & Glow. All Rights Reserved.
        </p>
      </footer>

      <style>{`
        .beautician-footer {
          background: #fffaf4;
          border-top: 1px solid #eee3d7;
          padding: 17px;
          text-align: center;
          color: #76543e;
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
