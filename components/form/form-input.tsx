"use client";

import { forwardRef } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import FormError from "./form-error";

interface inputFormProps {
  id: string;
  label?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}
export const FormInput = forwardRef<HTMLInputElement, inputFormProps>(
  (
    {
      id,
      label,
      placeholder,
      required,
      type,
      disabled,
      errors,
      className,
      defaultValue = "",
      onBlur,
    },
    ref
  ) => {
    const { pending } = useFormStatus();
    return (
      <div className="space-y-2">
        <div className="sapce-y-1">
          {label ? (
            <Label
              htmlFor={id}
              className="text-xs font-semibold text-neutral-700"
            >
              {label}
            </Label>
          ) : null}
          <Input
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            required={required}
            disabled={disabled}
            id={id}
            name={id}
            ref={ref}
            defaultValue={defaultValue}
            className={(cn("text-sm ps-2 py-1 h-7"), className)}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormError id={id} errors={errors} />
      </div>
    );
  }
);
FormInput.displayName = "FormInput";

// 4-28-39
