import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Harshini S — Personal Portfolio",
  description: "Computer Science Undergraduate | Cybersecurity Enthusiast | Full-Stack Developer",
  keywords: [
    "Harshini S",
    "Harshini Portfolio",
    "Cybersecurity Student",
    "Machine Learning Developer",
    "Full-Stack Developer",
    "PES College of Engineering Mandya",
    "Computer Science Portfolio"
  ],
  authors: [{ name: "Harshini S" }],
  creator: "Harshini S",
  metadataBase: new URL("https://harshini-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshini-portfolio.vercel.app",
    title: "Harshini S — Personal Portfolio",
    description: "Computer Science Undergraduate | Cybersecurity Enthusiast | Full-Stack Developer",
    siteName: "Harshini S Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Harshini S Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshini S — Personal Portfolio",
    description: "Computer Science Undergraduate | Cybersecurity Enthusiast | Full-Stack Developer",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FAF9F6" />
      </head>
      <body
        className={`${jakarta.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

