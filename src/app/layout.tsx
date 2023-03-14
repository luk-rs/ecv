import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({
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
        <Navbar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
