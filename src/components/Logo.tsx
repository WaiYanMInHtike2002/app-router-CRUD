import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center ml-5 pt-5 ">
      <Image
        src={"/appleTran.png"}
        alt="APPLE-PHOTO"
        width={120}
        height={120}
      />
    </div>
  );
};

export default Logo;
