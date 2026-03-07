import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { lazyComponent } from "@/lib/lazy";

const AuroraBackground = lazyComponent(
  () =>
    import("@/components/shared/AuroraBackground").then((m) => ({
      default: m.AuroraBackground,
    })),
  { ssr: false, noFallback: true },
);

export const metadata: Metadata = {
  // REPLACE_ME: Update the default SEO title for the site.
  title: "Su Pham — Portfolio",
  // REPLACE_ME: Update the default SEO description for the site.
  description:
    "Personal portfolio for Su Pham — designer & developer focused on clean, memorable web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=nunito@400&f[]=bebas-neue@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <AuroraBackground />
        <div className="flex min-h-screen flex-col pt-0">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
