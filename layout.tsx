import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Steady Start | Practical fitness for beginners",
    template: "%s | Steady Start",
  },
  description:
    "Beginner-friendly workouts, nutrition basics, habits, recovery, and clear fitness education for building a steady routine.",
  openGraph: {
    type: "website",
    siteName: "Steady Start",
    title: "Steady Start | Practical fitness for beginners",
    description:
      "Practical fitness guidance for beginners, built around steady progress rather than extremes.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
