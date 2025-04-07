import ThemeToggle from "@/components/themeToggle";

export default function Home() {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-blue-400 transition-all duration-300 ">
      <div className="max-w-3xl text-center space-y-10">
        <h3 className="text-6xl font-semibold">Next.js Dark Mode Tutorial</h3>
        <ThemeToggle />
      </div>
    </div>
  );
}
