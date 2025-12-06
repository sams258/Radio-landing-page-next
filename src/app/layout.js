import "./globals.css"; // Ensure this matches your filename (global.css vs globals.css)
import { Berkshire_Swash, Changa, Roboto_Flex } from "next/font/google";

// 1. Configure Berkshire Swash (for Headers)
const berkshire = Berkshire_Swash({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-berkshire", // This variable is the bridge to your CSS
  display: "swap",
});

// 2. Configure Changa (for Arabic/English text)
const changa = Changa({
  subsets: ["arabic", "latin"],
  variable: "--font-changa",
  display: "swap",
});

// 3. Configure Roboto Flex (Optional base font)
const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Al Lubnaniya Radio - Lebanon",
  description: "The official page for Al Lubnaniya Radio.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 4. Inject the font variables into the body className */}
      <body
        className={`${berkshire.variable} ${changa.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
