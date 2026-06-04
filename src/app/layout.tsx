import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Natasha Brown | UX Research & Consumer Insights Leader",
  description:
    "Portfolio and consulting site for Natasha Brown, a senior UX research and consumer insights leader with 9+ years across Lowe's Digital and Procter & Gamble. Specializing in mixed-methods research, product strategy, discovery, usability testing, customer journey research, and research strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className="font-sans text-navy-900 bg-white antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.setAttribute('data-reveal-ready','1')",
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
