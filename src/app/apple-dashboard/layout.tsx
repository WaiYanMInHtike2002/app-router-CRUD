import SideBar from "@/components/SideBar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen overflow-scroll text-white bg-[#272c4a]">
      <div className="w-full flex">
        <div className="w-[200px] lg:w-[250px]">
          <SideBar />
        </div>
        <div className="w-[calc(100%-200px)] lg:w-[calc(100%-250px)] flex justify-center mt-5">
          <div className="w-full lg:w-[90%]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
