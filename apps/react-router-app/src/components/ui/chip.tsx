import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva("inline-block text-sm font-semibold shadow-xs", {
  variants: {
    variant: {
      filled: "bg-background text-foreground",
      outlined: "border border-solid border-2",
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
      error: "",
      info: "",
      warning: "",
    },
    shape: {
      rounded: "rounded-full",
      squared: "rounded-sm",
    },
    size: {
      large: "px-4 py-2 has-[>svg]:px-3",
      small: "gap-1.5 px-2 has-[>svg]:px-2.5",
      icon: "size-9",
    },
  },
  compoundVariants: [
    // Primary
    {
      variant: "filled",
      color: "primary",
      className: "bg-primary text-white",
    },
    {
      variant: "outlined",
      color: "primary",
      className: "text-primary border-primary",
    },
    // Secondary
    {
      variant: "filled",
      color: "secondary",
      className: "bg-secondary text-white",
    },
    {
      variant: "outlined",
      color: "secondary",
      className: "text-secondary border-secondary",
    },
    // Success
    {
      variant: "filled",
      color: "success",
      className: "bg-success text-white",
    },
    {
      variant: "outlined",
      color: "success",
      className: "text-success-foreground border-success",
    },
    // Error
    {
      variant: "filled",
      color: "error",
      className: "bg-error text-white",
    },
    {
      variant: "outlined",
      color: "error",
      className: "text-error-foreground border-error-foreground",
    },
    // Info
    {
      variant: "filled",
      color: "info",
      className: "bg-info text-white",
    },
    {
      variant: "outlined",
      color: "info",
      className: "text-info-foreground border-info-foreground",
    },
    // Warning
    {
      variant: "filled",
      color: "warning",
      className: "bg-warning text-white",
    },
    {
      variant: "outlined",
      color: "warning",
      className: "text-warning-foreground border-warning-foreground",
    },
  ],
  defaultVariants: {
    size: "large",
    shape: "rounded",
    color: "primary",
    variant: "filled",
  },
});

function Chip({
  className,
  variant,
  size,
  color,
  shape,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof chipVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return <Comp data-slot="span" className={cn(chipVariants({ variant, size, className, color, shape }))} {...props} />;
}

export { Chip, chipVariants };
