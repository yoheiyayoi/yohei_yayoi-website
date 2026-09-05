import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import FooterSection from "@/components/layout/Footer";
import { ViewTransitions } from 'next-view-transitions'

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
  ],
  variable: '--font-line-seed',
  display: 'swap',
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
        <body className={`${lineSeed.className} ${lineSeed.variable} antialiased`}>
          <ThemeProvider
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <a href="#main-content" className="skip-link">Skip to content</a>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main id="main-content" className="grow">
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
