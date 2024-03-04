import { BrainCircuit } from "lucide-react";
import React from "react";
import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserMessageProps {
  children: React.ReactNode;
}

const UserMessage: React.FC<UserMessageProps> = ({ children }) => {
  const { user } = useUser();
  return (
    <div className="p-4 pb-10 ml-20 rounded-xl mr-7 relative border">
      {children}
      <div className="border w-[52px] h-[52px] rounded-lg flex justify-center items-center absolute -bottom-6 right-6">
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default UserMessage;
