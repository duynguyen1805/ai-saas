import React from "react";
import Topbar from "@/components/topbar.tsx";
import Sidebar from "@/components/sidebar/sidebar.tsx";
import { cn } from "@/lib/utils";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";
import UpgradeProModal from "@/components/dashboard/upgrade-promodal";

const DashboardLayout = (props: { children: React.ReactNode }) => {
  const isProPlan = false;
  const userLimitCount = 0;

  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main
        className={cn(
          "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20"
        )}
      >
        <Sidebar
          userLimitCount={userLimitCount}
          isProPlan={isProPlan}
          className={cn(
            "fixed left-0 z-20 w-80 hidden [&:has([is-navbar-minimal])]:w-fit",
            "lg:block"
          )}
        />
        <MobileSidebar isProPlan={isProPlan} userLimitCount={userLimitCount} />
        <UpgradeProModal isProPlan={isProPlan} />
        <div
          className={cn(
            "bg-background h-[calc(100vh-56px)]",
            "lg:rounded-3xl lg:p-7"
          )}
        >
          {props.children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
