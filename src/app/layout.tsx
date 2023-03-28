import "./globals.css";
import { Khand } from "next/font/google";

const inter = Khand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
