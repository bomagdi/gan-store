// Next.js
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

// Global CSS styles
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // يمكنك تعديل الأوزان حسب الحاجة
});

// MetaData
export const metadata: Metadata = {
  title: "Gan Store",
  description:
    "Welcome to Gan Store - your one-stop shop for men's fashion. Explore our curated collection of stylish and trendy clothing, shoes, and accessories. Shop now and elevate your wardrobe with the latest trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
