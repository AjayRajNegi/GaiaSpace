import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaia Space",
  description:
    "We're pioneering a new frontier in satellite technology, flying lower and smarter to deliver ultra-high-definition imagery, seamless global communications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

// import "./globals.css";
// import type { Metadata } from "next";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["100", "300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
// });

// export const metadata: Metadata = {
//   title: "Gaia Space",
//   description:
//     "We're pioneering a new frontier in satellite technology, flying lower and smarter to deliver ultra-high-definition imagery, seamless global communications.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={roboto.variable}>
//       <body>
//         {children}

//         <SpeedInsights />
//         <Analytics />
//       </body>
//     </html>
//   );
// }
