"use client";

import { CompactState } from "@/types/compactState";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
  toolset: CompactState<string>;
}

const toolCollections = [
  {
    name: "Converters",
    value: "converters",
  },
  {
    name: "Sorters",
    value: "sorters",
  },
  {
    name: "Generators",
    value: "generators",
  },
  {
    name: "Extractors",
    value: "extractors",
  },
];

export const Sidebar = ({ className, toolset }: SidebarProps) => {
  return (
    <div className={`border-e-4 border-border bg-white ${className}`}>
      <ul>
        <span className="block text-text text-center text-2xl font-bold border-b-2 border-border p-3">
          Tools
        </span>
        {toolCollections.map((toolCollection) => (
          <li key={toolCollection.name}>
            <div
              className={`block text-text border-b-2 border-border p-3 hover:bg-yellow-100 text-center cursor-pointer ${
                toolCollection.value === toolset.value
                  ? "bg-main hover:bg-main"
                  : ""
              }`}
              onClick={() => toolset.set(toolCollection.value)}
            >
              {toolCollection.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
