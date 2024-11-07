import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-10 flex flex-col justify-between bg-background pb-12 pt-16 pl-4 pr-4 transition-opacity duration-500 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        <Link href="/">
          <a className="text-2xl font-bold">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-2xl font-bold">About</a>
        </Link>
      </div>
      <button
        className="fixed top-4 right-4 rounded-full bg-main p-2 text-3xl"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <>&times;</> : <>&#9776;</>}
      </button>
    </div>
  );
};
