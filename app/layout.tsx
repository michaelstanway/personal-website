// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Stanway — personal site",
  description: "Founder • builder • media • neurotech. Projects, work, and contact.",
  metadataBase: new URL("https://personal-website-gilt-sigma-68.vercel.app"),
  openGraph: {
    title: "Michael Stanway",
    description: "Founder • builder • media • neurotech",
    type: "website",
    url: "https://personal-website-gilt-sigma-68.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Stanway",
    description: "Founder • builder • media • neurotech",
  },
  themeColor: "#0c0f16",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Top nav */}
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/70 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight text-ink-100">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-indigo-500 shadow-glow" />
              michael stanway
            </a>
            <div className="hidden gap-6 text-sm md:flex">
              <a href="#projects" className="text-ink-300 hover:text-white">Projects</a>
              <a href="#about" className="text-ink-300 hover:text-white">About</a>
              <a href="#contact" className="text-ink-300 hover:text-white">Contact</a>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-ink-400">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p>© {new Date().getFullYear()} Michael Stanway</p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/michael-stanway/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:hello@example.com">Email</a>
                <a href="https://github.com/michaelstanway" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
