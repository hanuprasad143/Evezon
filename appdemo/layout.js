import "./globals.scss";      // ✅ correct (inside app/)
import "./styles/style.css"; // ✅ correct (inside app/styles/)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}