"use client";
import { Search, Settings } from "lucide-react";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="flex bg-[var(--bg-color)] text-[var(--text-color)] dark:bg-[var(--bg-color)] dark:[var(--text-color)] pt-10 gap-4">
      <div className="max-w-40 mx-auto flex flex-col text-sm tracking-wider gap-3">
        <Link
          href="/scan"
          className={`flex items-center px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 gap-2 rounded-sm ${
            pathname == "/scan" ? "bg-neutral-300 dark:bg-neutral-800" : ""
          }`}
        >
          <Search className="w-4 h-4" />
          <h3 className="hidden md:block">Scan</h3>
        </Link>
        <Link
          href="/settings"
          className={`flex items-center px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 gap-2 rounded-sm ${
            pathname == "/settings" ? "bg-neutral-300 dark:bg-neutral-800" : ""
          }`}
        >
          <Settings className="w-4 h-4" />
          <h3 className="hidden md:block">Settings</h3>
        </Link>
        <Link
          href="/report"
          className="flex items-center px-4 py-2 gap-2 rounded-sm"
        >
          <BiLogOut className="w-4 h-4" />{" "}
          <h3 className="hidden md:block">Logout</h3>
        </Link>
      </div>
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
}
