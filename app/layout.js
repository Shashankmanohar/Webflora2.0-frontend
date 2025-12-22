import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import MouseFollower from "@/Components/Mousefollower";
import SmoothScrolling from "../Components/SmoothScrolling";
import SplashScreen from "@/Components/SplashScreen";
import GetinTouch from "@/Components/GetinTouch";


const boldonse = localFont({
  src: [
    {
      path: "../public/fonts/Boldonse-Regular.ttf", // ✅ correct path from app/layout.js
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://webfloratechnologies.com"),
  title: "Webflora Technologies | Best Business Solution Agency",
  description:
    "We build modern web and app experiences powered by Next.js, Tailwind, and Framer Motion to help brands grow digitally.",
  keywords: [
    "Web development",
    "Digital solutions",
    "Next.js agency",
    "React web apps",
    "Tailwind CSS",
    "Framer Motion",
    "UI UX design",
    "Patna web development",
    "India digital services",
    "Webflora Technologies"
  ],
  icons: {
    icon: "/fevicon.svg",
    shortcut: "/fevicon.svg",
  },
  openGraph: {
    title: "Webflora Technologies",
    description:
      "Empowering businesses with modern digital experiences — from websites to full-scale applications.",
    url: "https://webfloratechnologies.com",
    siteName: "Webflora Technologies",
    images: [
      {
        url: "/webflora-og.png",
        width: 1200,
        height: 630,
        alt: "Webflora Technologies Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webflora Technologies",
    description:
      "Your digital partner for innovative websites, apps, and branding solutions.",
    images: ["/webflora-og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${boldonse.className} leading-10 overflow-x-hidden `}>
        <MouseFollower suppressHydrationWarning />
        <Navbar />
        <SmoothScrolling>
          <SplashScreen>
            <GetinTouch/>
            {children}
          </SplashScreen>
        </SmoothScrolling>
        
      </body>
    </html>
  );
}
