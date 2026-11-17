import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SITE_URL, branches } from "@/lib/site";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz", "SOFT"], variable: "--font-serif", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const title = "Clonepictures Photo Studio | Professional Photography in Surulere & Yaba, Lagos";
const description =
  "Professional studio and outdoor photography across 3 branches in Lagos: Yaba (Ozone Cinema Mall) and Surulere. Weddings, birthdays, family, maternity, graduation and personal branding. Clear packages, prices and policies. Book on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: ["photo studio Lagos", "photography studio Yaba", "photo studio Surulere", "birthday shoot Lagos", "pre-wedding shoot Lagos", "Clonepictures"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Clonepictures Photo Studio",
    title: "Clonepictures Photo Studio",
    description: "Every moment, beautifully captured. Professional studio and outdoor photography across 3 branches in Lagos.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Clonepictures Photo Studio" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#0E0E10", width: "device-width", initialScale: 1 };

const dayMap: Record<string, string[]> = {
  Monday: ["Monday"], "Tue, Wed, Fri": ["Tuesday", "Wednesday", "Friday"], Thursday: ["Thursday"],
  Saturday: ["Saturday"], Sunday: ["Sunday"], "Mon – Sat": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
};
const to24 = (t: string) => {
  const m = t.trim().match(/(\d+):(\d+)(am|pm)/)!;
  let h = +m[1] % 12;
  if (m[3] === "pm") h += 12;
  return `${String(h).padStart(2, "0")}:${m[2]}`;
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": branches.map((b) => ({
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#${b.id}`,
    name: `Clonepictures Photo Studio, ${b.name} (${b.label})`,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: b.phones.map((p) => p.e164),
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address.slice(0, -1).join(", "),
      addressLocality: b.name,
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    openingHoursSpecification: b.hours.map(([d, h]) => {
      const [o, c] = h.split("–");
      return { "@type": "OpeningHoursSpecification", dayOfWeek: dayMap[d], opens: to24(o), closes: to24(c) };
    }),
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
