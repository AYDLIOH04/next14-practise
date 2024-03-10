import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { IntlProvider } from "@/components/intl-provider";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LuckiFy",
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

type RootLayout = {
  auth: React.ReactNode;
  children: React.ReactNode;
  params: { locale: string };
};

// Can be imported from a shared config
const locales = ["en", "de"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const RootLayout = ({ auth, children, params: { locale } }: RootLayout) => {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={`${sora.variable} font-sora`}>
        <IntlProvider locale={locale}>
          <Header />
          {auth}
          <main className="m-8 min-h-[calc(100vh-70px-240px-64px)]">
            {children}
          </main>
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
};

export default RootLayout;
