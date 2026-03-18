import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindFlow — Reclaim Your Focus",
  description: "MindFlow is the AI-powered platform that helps you beat digital burnout, silence the noise, and reclaim deep focus.",
  openGraph: {
    title: "MindFlow — Reclaim Your Focus",
    description: "MindFlow is the AI-powered platform that helps you beat digital burnout, silence the noise, and reclaim deep focus.",
    type: "website",
    url: "https://mindflow.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindFlow — Reclaim Your Focus",
    description: "MindFlow is the AI-powered platform that helps you beat digital burnout, silence the noise, and reclaim deep focus.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
