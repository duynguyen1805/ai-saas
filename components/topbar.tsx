"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo.tsx";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useSidebarStore } from "@/stores/sidebar-store";

const Topbar = () => {
  const { isOpen, handleOpenOrClose, handleClose } = useSidebarStore();

  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 sticky top-0 z-30",
        "lg:hidden",
        "md:border border-red-500"
      )}
    >
      <Logo />
      <Button variant="default" size="icon" onClick={handleOpenOrClose}>
        <Menu />
      </Button>
    </div>
  );
};

export default Topbar;
