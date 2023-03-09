import "./globals.css";

export const metadata = {
  title: "eCV",
  description: "An electronic CV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
