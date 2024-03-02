"use client";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";
import React from "react";
import Logo from "../logo";
import SidebarToggle from "./sidebar-toggle";
import { UserButton, useUser } from "@clerk/nextjs";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "../ui/progress";
import ThemeToggle from "./theme-toggle";
import SubcriptionButton from "../subcription-button";
import Navbar from "./navbar";

interface SidebarProps {
  className?: string;
  isProPlan?: boolean;
  userLimitCount?: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  className,
  isProPlan,
  userLimitCount,
}) => {
  const { isMinimal, handleChangeSidebar } = useSidebarStore();
  const { user } = useUser();

  return (
    <div className={cn("text-white", className)}>
      <div className="h-20 pl-7 pr-6">
        <div className="w-full flex items-center justify-between">
          {!isMinimal && <Logo />}
          <SidebarToggle />
        </div>
      </div>
      <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
        <Navbar />
      </div>
      <div
        className={cn(
          "fixed bottom-8 left-4 right-4",
          "lg:left-5 lg:right-auto",
          isMinimal && "sm:left-1"
        )}
      >
        <div className="mb-4 p-4 rounded-lg bg-gray-900">
          <div className="mb-4 flex items-center ">
            <UserButton afterSignOutUrl="/" />
            {!isMinimal && (
              <span className="text-sm ml-4 ">
                {user?.emailAddresses?.[0].emailAddress}
              </span>
            )}
          </div>
          {!isMinimal && (
            <div className="border-t border-t-gray-950 pt-2">
              {!isProPlan && (
                <div className="mb-4 ">
                  <div className="text-center mb-2 text-muted-foreground font-semibold">
                    {userLimitCount} / {MAX_FREE_COUNTS} free generations
                  </div>
                  <Progress
                    value={
                      (userLimitCount ? userLimitCount : 0 / MAX_FREE_COUNTS) *
                      100
                    }
                    className="bg-gray-950 h-3"
                    indicatorClassname="gradient-btn"
                  />
                </div>
              )}
              <SubcriptionButton isPro={isProPlan} />
            </div>
          )}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
