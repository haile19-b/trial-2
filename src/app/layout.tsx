import "../styles/style.css";
import "../styles/bootstrap.min.css";
import "../styles/fontawesome.min.css";
import "../styles/magnific-popup.min.css";
import "../styles/slick.min.css";
import "../styles/animate.min.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Halıyıkatma Halı Yıkama Fabrikası",
  description: "İstanbul'un tüm illerine hizmet veren Halı Yıkama Fabrikası. Halılarınızı profesyonel ekipmanlarımızla yıkıyoruz. Hızlı, güvenilir ve uygun fiyatlarla hizmet veriyoruz.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
