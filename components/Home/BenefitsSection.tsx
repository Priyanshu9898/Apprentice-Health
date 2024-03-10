import Image from "next/image";
import React from "react";

const BenefitsSection = () => {
  return (
    <>
      <Image
        src={"/assets/images/divider-1.png"}
        alt="Line1"
        width={900}
        height={300}
        className="w-full h-full"
      />
      <div className="section w-full bg-[#828D9C]">

      </div>

      <Image
        src={"/assets/images/divider-2.png"}
        alt="Line1"
        width={900}
        height={300}
        className="w-full h-full"
      />
    </>
  );
};

export default BenefitsSection;
