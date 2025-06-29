import type { Metadata } from "next";
import { UserProvider } from "@/components/UserContext";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import ThemeToggle from "@/components/themeToggle";
import Image from "next/image";
import { cookies } from "next/headers";
import { logout } from "../actions/auth";
import LogoutButton from "@/components/LogoutButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigitalScanner",
  description: "Get your scan results",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  const isLoggedIn = !!session;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <div className="sticky top-0 z-20 flex px-auto lg:px-16 py-3 backdrop-blur-xs bg-white/70 dark:bg-black/20 text-black dark:text-white transition-all duration-500 ">
              <div className="flex px-5 lg:px-10 mr-auto gap-8 md:gap-11 items-center text-sm">
                <Link
                  href="./"
                  className="flex text-xl gap-2 font-semibold mr-auto items-center"
                >
                  <Image
                    src="logo1.svg"
                    alt="logo"
                    width={30}
                    height={30}
                    className="scale-200"
                  />
                  <p>Digital Footprint Scanner</p>
                </Link>
                <div className="hidden md:flex gap-6 tracking-wide font-medium">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/scan">Scan</Link>
                </div>
              </div>
              <div className="flex gap-8 justify-center items-center relative mx-2 lg:mx-0">
                <ThemeToggle />
                <LogoutButton isLoggedIn={isLoggedIn} />
              </div>
            </div>
            <div className="bg-[var(--bg-color)] dark:bg-[var(--bg-color)] dark:text-white text-black h-full min-h-screen">
              {children}
            </div>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
