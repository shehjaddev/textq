import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[150px] w-full rounded-base border-2 text-text dark:text-darkText font-base selection:bg-main selection:text-black border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack px-3 py-2 text-sm placeholder:text-black/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
