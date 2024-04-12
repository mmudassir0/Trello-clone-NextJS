"use client";

import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface FromSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "primary"
    | null
    | undefined;
}

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant,
}: FromSubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={disabled || pending}
      type="submit"
      variant={variant}
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
