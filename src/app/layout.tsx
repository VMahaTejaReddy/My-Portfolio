import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahi | AI Engineer Portfolio",
  description:
    "Aspiring AI Engineer specializing in Machine Learning, Deep Learning, and NLP. Explore my projects, certifications, and journey in artificial intelligence.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Portfolio",
    "Mahi",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Mahi" }],
  openGraph: {
    title: "Mahi | AI Engineer Portfolio",
    description:
      "Aspiring AI Engineer specializing in Machine Learning, Deep Learning, and NLP.",
    type: "website",
    locale: "en_US",
    url: "https://mahi-ai.vercel.app",
    siteName: "Mahi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahi | AI Engineer Portfolio",
    description:
      "Aspiring AI Engineer specializing in Machine Learning, Deep Learning, and NLP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mahi",
              jobTitle: "AI Engineer",
              description:
                "Aspiring AI Engineer specializing in Machine Learning, Deep Learning, and NLP.",
              url: "https://mahi-ai.vercel.app",
              sameAs: [
                "https://linkedin.com",
                "https://github.com",
                "https://instagram.com",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
