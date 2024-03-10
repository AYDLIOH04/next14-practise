import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Next14 Demo",
  description: "Created by AYDLIOH",
  keywords: ["Next.js", "React", "TypeScript", "TailwindCSS"],
  creator: "Pavel Biryuchev",
  openGraph: {
    type: "website",
    title: "Next14 Demo Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque dicta corporis maxime ducimus eos dolorem delectus fugiat distinctio dolor! Officiis nostrum fuga quaerat minus blanditiis magni perferendis voluptates ducimus?\nLorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perspiciatis!",
    images: [
      "https://chopio.club/uploads/posts/2022-09/thumbs/1664554317_1-beolin-club-p-godzho-satoru-risunok-instagram-1.jpg",
    ],
  },
};

export default function RootLayout({
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sora`}>
        <Header />
        {auth}
        <main className="m-8 min-h-[calc(100vh-70px-240px-64px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
