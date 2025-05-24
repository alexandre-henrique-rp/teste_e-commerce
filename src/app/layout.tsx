import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ChakraUIProvider from "../provaider/chakra-ui";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "teste e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`suppressHydrationWarning`}>
      <body style={{ fontFamily: raleway.style.fontFamily, color: "#4C4D4C" }}>
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </body>
    </html>
  );
}
