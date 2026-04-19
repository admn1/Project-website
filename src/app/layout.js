import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CARtel | Premium Auto Parts",
  description: "CARtel — Your ultimate destination for premium car parts and accessories. Upgrade your ride today.",
  icons: {
    icon: "/CARtel Supply logo 2 nobg.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
