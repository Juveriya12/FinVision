import "./globals.css";

export const metadata = {
  title: "FinVision",
  description: "Financial Planning Tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}