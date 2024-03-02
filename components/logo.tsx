import React from "react";
import { BrainCircuit } from "lucide-react";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../public/icons/saas.png";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      {/* <BrainCircuit color="#0ea5e9" size={40} /> */}
      <Image src={logo} alt="logo saas" className="h-[50px] w-[50px]" />
      <span className={cn("ml-2 font-bold text-3xl", poppins.className)}>
        SAAS
      </span>
    </div>
  );
};

export default Logo;
