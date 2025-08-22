import type { Metadata } from "next";
import "./globals.css";
import CartContext from "./context/CartContext";
import ProductContext from "./context/ProductContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Nubra Souvenir",
  description: "Nubra Souvenir is an online store offering authentic Ladakh souvenirs, gifts, home decor, jewelry, and more for travelers and tourists.",
  icons: {
    icon: [
      { url: '/favicon-min.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-min.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon-min.png',
    apple: '/favicon-min.png',
  },
  openGraph: {
    title: "Nubra Souvenir – Authentic Souvenirs from Ladakh",
    description:
      "Shop Ladakh souvenirs, gifts, home decor, and jewelry online. Nubra Souvenir brings authentic crafts and keepsakes to our customers.",
    url: "https://nubra-souvenir.vercel.app", 
    siteName: "Nubra Souvenir",
    images: [
      {
        url: "/og-imageF.png", 
        width: 1200,
        height: 630,
        alt: "Nubra Souvenir - Authentic Souvenirs from Ladakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`antialiased ${lora.variable}`}>
          <Toaster position="top-center" reverseOrder={false} />
          <ProductContext>
            <CartContext>{children}</CartContext>
          </ProductContext>
        </body>
      </html>
    </ClerkProvider>
  );
}
