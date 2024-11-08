import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-1/3 w-2/3 rounded-base border-2 text-text dark:text-darkText font-base selection:bg-main selection:text-black border-border dark:border-darkBorder bg-yellow-50 dark:bg-secondaryBlack px-3 py-2 text-xl placeholder:text-black/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          "shadow-[4px_4px_0px_rgba(0,0,0,1)]", // Additional custom shadow
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
