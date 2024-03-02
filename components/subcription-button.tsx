"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

interface SubcriptionButtonProps {
  className?: string;
  isPro?: boolean;
}

const SubcriptionButton: React.FC<SubcriptionButtonProps> = ({
  className,
  isPro,
}) => {
  const { toast } = useToast();
  const [loading, setloading] = useState<boolean>();
  const handleSubcribe = async () => {
    try {
      setloading(true);
      // call api stripe
      const { data } = await axios.get(`/api/stripe`);
      // todo sth after get api stripe
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        // title: "Error",
        description: "Sth wrong call api stripe.",
      });
    } finally {
      setloading(false);
    }
  };
  return (
    <div className={className}>
      <Button
        variant="outline"
        size="lg"
        disabled={loading}
        onClick={handleSubcribe}
        className={cn(
          "text-white w-full font-semibold border-none gradient-btn",
          "hover:text-white"
        )}
      >
        <span className="mr-2">
          {isPro ? "Manage Subcription" : "Upgrade to Pro"}
        </span>
        <Sparkles />
      </Button>
    </div>
  );
};

export default SubcriptionButton;
