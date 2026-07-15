import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "권순엽 | QA Engineer Portfolio",
  description: "원인과 위험을 추적하는 QA 엔지니어 권순엽의 포트폴리오",
  icons: {
    icon: "/portfolio/favicon.svg",
    shortcut: "/portfolio/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
