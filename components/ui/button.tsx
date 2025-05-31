import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-lg hover:shadow-xl",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 hover:from-amber-600 hover:to-yellow-700 hover:shadow-amber-500/30",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-destructive/25",
        outline:
          "border border-white/20 bg-white/[0.08] backdrop-blur-xl text-white hover:bg-white/[0.15] hover:border-amber-400/30 hover:shadow-amber-500/25",
        secondary:
          "bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-300 hover:from-amber-400/30 hover:to-yellow-500/30 hover:shadow-amber-500/25",
        ghost:
          "text-white hover:bg-white/[0.08] hover:text-amber-300 hover:shadow-amber-500/25",
        link: "text-amber-400 underline-offset-4 hover:underline hover:text-amber-300 hover:shadow-amber-500/25",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-md px-4",
        lg: "h-14 rounded-md px-10",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
