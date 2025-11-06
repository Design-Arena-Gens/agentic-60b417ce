import "./globals.css";

export const metadata = {
  title: "Agentic Playground",
  description: "A playful micro-site generated autonomously."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
