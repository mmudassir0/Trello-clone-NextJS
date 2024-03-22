"use client";
import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";
import { cn } from "@/lib/utils";
export type Organization = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
};
interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}
const Navitem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => {
          onExpand(organization.id);
        }}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      ></AccordionTrigger>
    </AccordionItem>
  );
};

export default Navitem;
