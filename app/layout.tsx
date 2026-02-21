import type { Metadata } from "next";
import localFont from "next/font/local"
import { Google_Sans } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import FooterSection from "@/components/layout/Footer";
import { ViewTransitions } from 'next-view-transitions'

const googleSans = Google_Sans({
  subsets: ['latin'],
})

const lineSeed = localFont({
  src: [
    {
      path: '../fonts/LINESeedSansTH_W_Th.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_XBd.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_He.woff2',
      weight: '900',
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  title: {
    template: "%s - yooo_",
    default: "yooo_",
  },
  description: "yooo_'s (yohei_yayoi) portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        data-theme="light"
        style={{ colorScheme: "light" }}
      >
        <body className={`${googleSans.className} antialiased`}>
          <ThemeProvider
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div
              className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"
            ></div>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="grow px-4 container mx-auto">
                {children}
              </main>
              <FooterSection />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
