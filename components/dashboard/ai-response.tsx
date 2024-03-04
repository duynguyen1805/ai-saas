import React from "react";
import Image from "next/image";
import logo from "../../public/icons/saas.png";

interface AiResponseProps {
  children: React.ReactNode;
}

const AiResponse: React.FC<AiResponseProps> = ({ children }) => {
  return (
    <div className=" p-4 pb-10 rounded-lg mr-20 ml-[-28px] bg-secondary relative">
      {children}
      <div className="w-14 h-14 rounded-lg flex justify-center items-center absolute left-6 -bottom-6">
        <Image src={logo} alt="logo saas" className="h-[50px] w-[50px]" />
      </div>
    </div>
  );
};

export default AiResponse;
